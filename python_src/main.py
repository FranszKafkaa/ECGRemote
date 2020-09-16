import json

import numpy as np
from biosppy import storage
from biosppy.signals import ecg

from biosppy.signals import tools as st

# load raw ECG signal
signal, mdata = storage.load_txt('python_src/ecg.txt')

order = int(0.3 * 1000)
filtered, _, _ = st.filter_signal(signal=signal,
                                  ftype='FIR',
                                  band='bandpass',
                                  order=order,
                                  frequency=[3, 45],
                                  sampling_rate=1000)

rpeaks, = ecg.hamilton_segmenter(signal=filtered, sampling_rate=1000)
rpeaks, = ecg.correct_rpeaks(signal=filtered,
                             rpeaks=rpeaks,
                             sampling_rate=1000,
                             tol=0.05)

# print(rpeaks)

# process it and plot
out = ecg.extract_heartbeats(signal=signal, rpeaks=rpeaks, sampling_rate=1000, before=0.5, after=0.5)


class NDArrayEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)


json_str = json.dumps({'test': out[0]}, cls=NDArrayEncoder)

print(json_str)

# f = 1/T
