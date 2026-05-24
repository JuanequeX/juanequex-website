Commit only the currently staged changes in this git repository.

Steps:
1. Run `git diff --name-only --cached` to list staged files. If the output is empty, tell the user nothing is staged and stop.
2. Run `git diff --cached --stat` to show a summary of what's staged.
3. Based on the staged diff (`git diff --cached`), draft a concise commit message that follows the existing commit style in this repo (check `git log --oneline -5` for reference).
4. Show the proposed commit message and the list of staged files to the user and ask for confirmation or a custom message.
5. Once confirmed, run `git commit -m "<message>"` using only the staged changes (do NOT run `git add` — commit exactly what is already staged).
