from biosppy import storage
from biosppy.signals import ecg

# load raw ECG signal
signal, mdata = storage.load_txt('python_src/Files/1 NSR/100m (3).txt')


# process it and plot
out = ecg.ecg(signal=signal, sampling_rate=360, show=False)

print(out["rpeaks"])

print(len(out["heart_rate"]))