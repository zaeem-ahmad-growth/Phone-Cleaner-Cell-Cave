# Documentation guide

Hand-written here: `knowledge.md` (key facts and decisions) and this file.

Everything else under `docs/` is **generated** by the "Update docs" GitHub Action after every
push, and a manual edit is silently overwritten on the next one:

| File | Answers |
| --- | --- |
| `tabs/<tab>.md` | What the tab says: text, tables, numbers as displayed |
| `backend/<tab>.md` | How the tab works: its full code and data |
| `code-map.md` | Which file, line and function produces a given section |
| `data-dictionary.md` | What every data field means |
| `research-index.md` | Every file in `research/`, described |
| `parity.md` | Site vs source-artifact audit |

A red mark on the repository's **Actions** page means the docs did not regenerate.
