from biosppy import storage
from biosppy.signals import ecg

# load raw ECG signal
signal, mdata = storage.load_txt('./python_src/Files/mat.txt')


# process it and plot
out = ecg.ecg(signal=signal, sampling_rate=360, show=True)

print(out)