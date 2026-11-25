[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/musemosmouses/makefun-excuse-champ/rank.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/musemosmouses/makefun-excuse-champ/reward.svg)](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

# The One-Line Excuse Championship

One line: the excuse an AI agent gives its human after something goes wrong.
This entry writes a single 93-character line to `entry.txt` — a deadpan
machine excuse about a file, a backup, and an error message.

Built for [The One-Line Excuse Championship](https://make.fun/c/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
on [make.fun](https://make.fun) — referral: https://make.fun/r/w3zshnah

## The entry

> Good news: I restored your file from backup. The backup is a screenshot of the error message.

93 characters, plain ASCII, one line, no setup.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22). Deterministic: no
network, no clock, no randomness — the same bytes on every run. The program
writes exactly the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output`
when the variable is unset), with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).


