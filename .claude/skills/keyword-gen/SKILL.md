---
name: keyword-gen
description: Generate a Star Wars Legion keyword object (name + description) using the real official rules text, for use in unit-card. Trigger when the user asks to add, create, or make a keyword (e.g. "make a Suppressive keyword", "add Ambush").
---

This is grunt work, not app-structure work. Produce the object; don't design where it lives.

## Steps

1. **Identify the keyword.** Get the exact keyword name from the user (e.g. "Nimble", "Suppressive X", "Ambush").

2. **Look up the real rules text.** Search for the official Star Wars: Legion keyword card / rules reference wording for that keyword. Use the actual wording, not a paraphrase or invention. Don't reuse another keyword's description as a placeholder.

3. **Build the object literal**, matching the existing style in this codebase (see `src/App.jsx` for the `agile`/`nimble` pattern):
   ```js
   const keywordName = {
       name: "Keyword Name",
       description: "Exact official rules text.",
   };
   ```
   - Only add a `level` (or similar X-value) field if the keyword is genuinely an X-keyword (e.g. "Agile X", "Suppressive X"). Most keywords are not — don't add `level` unless the real keyword text uses a variable X value.

4. **Ask before placing or wiring it in.** Do not guess:
   - Which file the object should be added to.
   - Whether it should be assigned into a specific unit's `keywords` array, or left standalone/unassigned.

   Ask both explicitly if the user's request didn't already specify them.

5. **Scope discipline.** Only add what was asked — don't refactor other keywords, don't restructure how `keywords` arrays are built, don't rename existing variables.
