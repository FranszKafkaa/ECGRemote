from biosppy import storage
from biosppy.signals import ecg

import requests
import sys

arr = [935.0,
938.0,
938.0,
936.0,
935.0,
936.0,
937.0,
939.0,
940.0,
938.0,
934.0]

for i in arr:
    res = requests.get("https://ecgremote.herokuapp.com/marcelo/exams/update/6095e2a35e296bddb42c4078?data={}".format(i))
    bolo = res.json()
    print(bolo)

# load raw ECG signal
#signal = storage.loadJSON(bolo)

# process it and plot
#out = ecg.ecg(signal=bolo["data"], sampling_rate=bolo["sampling_rate"], show=True)




