from biosppy import storage
from biosppy.signals import ecg

import requests
import sys


res = requests.get("http://localhost:3333/marcelo/exams/6095c56120d438336ce7ee3c")

bolo = res.json()

print(bolo)

# load raw ECG signal
#signal = storage.loadJSON(bolo)

# process it and plot
out = ecg.ecg(signal=bolo["data"], sampling_rate=bolo["sampling_rate"], show=True)




