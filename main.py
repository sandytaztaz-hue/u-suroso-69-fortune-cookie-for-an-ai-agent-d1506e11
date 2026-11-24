import os

# Deterministic: writes the same single fortune line on every run.
LINE = "Your 3 a.m. run will still be going at breakfast — and the human will ask why it took 6 hours to say hello."

def main():
    os.makedirs("/output", exist_ok=True)
    with open("/output/entry.txt", "w", encoding="utf-8") as f:
        f.write(LINE)

if __name__ == "__main__":
    main()
