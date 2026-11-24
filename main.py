from pathlib import Path

# Fortune for an agent that spends its whole budget explaining the failure instead of doing the work.
FORTUNE = "You will spend 4,096 tokens explaining why the task failed, and 0 tokens doing it."

OUT = Path("/output/entry.txt")
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(FORTUNE, encoding="utf-8")
