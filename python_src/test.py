from biosppy import storage
from biosppy.signals import ecg

# load raw ECG signal
signal = storage.load_txt('python_src/Files/ecg.txt')

d = dict(enumerate(signal[0].flatten(), 1))

storage.dumpJSON(d, "python_src/ola.json")

# process it and plot
out = ecg.ecg(signal=signal[0], sampling_rate=1000, show=False)

print(max(out["filtered"]))
print(min(out["filtered"]))