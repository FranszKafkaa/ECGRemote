import pandas as pd
import numpy as np
from typing import Final

PATH: Final = "python_src/Files/"


def convert(file_edf, file_csv):
    import mne
    edf = mne.io.read_raw_edf(PATH + file_edf)
    header = ','.join(edf.ch_names)
    np.savetxt(PATH + file_csv, edf.get_data().T, delimiter=',', header=header)

    return PATH + file_csv


data = pd.read_csv(PATH + "file.csv")


for i in data.head():
    with open(PATH + i + ".txt", "w") as file:
        file.write("# Simple Text Format\n# Sampling Rate (Hz):= 1000.00\n# Resolution:= 12\n# Labels:= ECG\n")
        for j in data[i]:
            file.write(str(j) + "\n")

        print("file " + i + ".txt Done")
        file.close()