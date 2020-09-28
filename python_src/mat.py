import scipy.io

data = scipy.io.loadmat("python_src/Files/100m (0).mat")
print(data["val"][0])

with open("python_src/Files/mat.txt", "w") as file:
    file.write("# Simple Text Format\n# Sampling Rate (Hz):= 1000.00\n# Resolution:= 12\n# Labels:= ECG\n")
    for i in data["val"][0]:
        file.write(str(float(i)) + "\n")

print("done")