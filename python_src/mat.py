import os
from sys import argv
from scipy.io import loadmat

path = argv[1]

dir = os.listdir(path)
dir = dir[1:]

for i in dir:
    os.mkdir("python_src/Files/" + i)

    for current in os.listdir(path + "/" + i):

        data = loadmat(path + "/" + i + "/" + current)

        with open("python_src/Files/" + i + "/" + current[0: -4] + ".txt", "w") as file:
            file.write("# Simple Text Format\n# Sampling Rate (Hz):= 360.00\n# Resolution:= 12\n# Labels:= ECG\n")

            for num in data["val"][0]:
                file.write(str(float(num)) + "\n")

            print("python_src/Files/" + i + "/" + current[0:4] + ".txt Done")