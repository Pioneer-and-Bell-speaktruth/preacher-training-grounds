// chronological-plan.js
// Full-Year Chronological Bible Reading Plan (364 days)

const chronologicalPlan = [
    // Week 1 — Genesis 1–11
    { ot: ["Genesis 1"], nt: ["Matthew 1"] },
    { ot: ["Genesis 2"], nt: ["Matthew 2"] },
    { ot: ["Genesis 3"], nt: ["Matthew 3"] },
    { ot: ["Genesis 4"], nt: ["Matthew 4"] },
    { ot: ["Genesis 5"], nt: ["Matthew 5"] },
    { ot: ["Genesis 6"], nt: ["Matthew 6"] },
    { ot: ["Genesis 7"], nt: ["Matthew 7"] },

    // Week 2 — Job
    { ot: ["Job 1"], nt: ["Matthew 8"] },
    { ot: ["Job 2"], nt: ["Matthew 9"] },
    { ot: ["Job 3"], nt: ["Matthew 10"] },
    { ot: ["Job 4"], nt: ["Matthew 11"] },
    { ot: ["Job 5"], nt: ["Matthew 12"] },
    { ot: ["Job 6"], nt: ["Matthew 13"] },
    { ot: ["Job 7"], nt: ["Matthew 14"] },

    // Week 3 — Genesis 12–50
    { ot: ["Genesis 12–15"], nt: ["Matthew 15"] },
    { ot: ["Genesis 16–19"], nt: ["Matthew 16"] },
    { ot: ["Genesis 20–23"], nt: ["Matthew 17"] },
    { ot: ["Genesis 24–27"], nt: ["Matthew 18"] },
    { ot: ["Genesis 28–31"], nt: ["Matthew 19"] },
    { ot: ["Genesis 32–36"], nt: ["Matthew 20"] },
    { ot: ["Genesis 37–50"], nt: ["Matthew 21"] },

    // Week 4 — Exodus 1–18
    { ot: ["Exodus 1–3"], nt: ["Matthew 22"] },
    { ot: ["Exodus 4–6"], nt: ["Matthew 23"] },
    { ot: ["Exodus 7–9"], nt: ["Matthew 24"] },
    { ot: ["Exodus 10–12"], nt: ["Matthew 25"] },
    { ot: ["Exodus 13–15"], nt: ["Matthew 26"] },
    { ot: ["Exodus 16–18"], nt: ["Matthew 27"] },
    { ot: ["Psalm 105"], nt: ["Matthew 28"] },

    // Week 5 — Exodus 19–40
    { ot: ["Exodus 19–21"], nt: ["Mark 1"] },
    { ot: ["Exodus 22–24"], nt: ["Mark 2"] },
    { ot: ["Exodus 25–27"], nt: ["Mark 3"] },
    { ot: ["Exodus 28–30"], nt: ["Mark 4"] },
    { ot: ["Exodus 31–33"], nt: ["Mark 5"] },
    { ot: ["Exodus 34–36"], nt: ["Mark 6"] },
    { ot: ["Exodus 37–40"], nt: ["Mark 7"] },

    // Week 6 — Leviticus
    { ot: ["Leviticus 1–3"], nt: ["Mark 8"] },
    { ot: ["Leviticus 4–6"], nt: ["Mark 9"] },
    { ot: ["Leviticus 7–9"], nt: ["Mark 10"] },
    { ot: ["Leviticus 10–12"], nt: ["Mark 11"] },
    { ot: ["Leviticus 13–15"], nt: ["Mark 12"] },
    { ot: ["Leviticus 16–18"], nt: ["Mark 13"] },
    { ot: ["Leviticus 19–22"], nt: ["Mark 14"] },

    // Week 7 — Numbers
    { ot: ["Numbers 1–3"], nt: ["Mark 15"] },
    { ot: ["Numbers 4–6"], nt: ["Mark 16"] },
    { ot: ["Numbers 7–9"], nt: ["Luke 1"] },
    { ot: ["Numbers 10–12"], nt: ["Luke 2"] },
    { ot: ["Numbers 13–15"], nt: ["Luke 3"] },
    { ot: ["Numbers 16–18"], nt: ["Luke 4"] },
    { ot: ["Numbers 19–21"], nt: ["Luke 5"] },

    // Week 8 — Deuteronomy
    { ot: ["Deuteronomy 1–3"], nt: ["Luke 6"] },
    { ot: ["Deuteronomy 4–6"], nt: ["Luke 7"] },
    { ot: ["Deuteronomy 7–9"], nt: ["Luke 8"] },
    { ot: ["Deuteronomy 10–12"], nt: ["Luke 9"] },
    { ot: ["Deuteronomy 13–16"], nt: ["Luke 10"] },
    { ot: ["Deuteronomy 17–20"], nt: ["Luke 11"] },
    { ot: ["Deuteronomy 21–25"], nt: ["Luke 12"] },

    // Week 9 — Joshua
    { ot: ["Joshua 1–3"], nt: ["Luke 13"] },
    { ot: ["Joshua 4–6"], nt: ["Luke 14"] },
    { ot: ["Joshua 7–9"], nt: ["Luke 15"] },
    { ot: ["Joshua 10–12"], nt: ["Luke 16"] },
    { ot: ["Joshua 13–15"], nt: ["Luke 17"] },
    { ot: ["Joshua 16–18"], nt: ["Luke 18"] },
    { ot: ["Joshua 19–24"], nt: ["Luke 19"] },

    // Week 10 — Judges
    { ot: ["Judges 1–3"], nt: ["Luke 20"] },
    { ot: ["Judges 4–6"], nt: ["Luke 21"] },
    { ot: ["Judges 7–9"], nt: ["Luke 22"] },
    { ot: ["Judges 10–12"], nt: ["Luke 23"] },
    { ot: ["Judges 13–15"], nt: ["Luke 24"] },
    { ot: ["Judges 16–18"], nt: ["John 1"] },
    { ot: ["Judges 19–21"], nt: ["John 2"] },

    // Week 11 — Ruth
    { ot: ["Ruth 1"], nt: ["John 3"] },
    { ot: ["Ruth 2"], nt: ["John 4"] },
    { ot: ["Ruth 3"], nt: ["John 5"] },
    { ot: ["Ruth 4"], nt: ["John 6"] },
    { ot: ["Psalm 1"], nt: ["John 7"] },
    { ot: ["Psalm 15"], nt: ["John 8"] },
    { ot: ["Psalm 19"], nt: ["John 9"] },

    // Week 12 — 1 Samuel + Psalms
    { ot: ["1 Samuel 1–3"], nt: ["John 10"] },
    { ot: ["1 Samuel 4–7"], nt: ["John 11"] },
    { ot: ["1 Samuel 8–10"], nt: ["John 12"] },
    { ot: ["1 Samuel 11–13"], nt: ["John 13"] },
    { ot: ["1 Samuel 14–16"], nt: ["John 14"] },
    { ot: ["1 Samuel 17–19"], nt: ["John 15"] },
    { ot: ["Psalms 3–7"], nt: ["John 16"] },

    // Week 13 — 2 Samuel + Psalms
    { ot: ["2 Samuel 1–3"], nt: ["John 17"] },
    { ot: ["2 Samuel 4–7"], nt: ["John 18"] },
    { ot: ["2 Samuel 8–10"], nt: ["John 19"] },
    { ot: ["2 Samuel 11–13"], nt: ["John 20"] },
    { ot: ["2 Samuel 14–16"], nt: ["John 21"] },
    { ot: ["2 Samuel 17–19"], nt: ["Acts 1"] },
    { ot: ["Psalms 8–10"], nt: ["Acts 2"] },

    // Week 14 — 1 Chronicles 1–20 + Psalms
    { ot: ["1 Chronicles 1–4"], nt: ["Acts 3"] },
    { ot: ["1 Chronicles 5–7"], nt: ["Acts 4"] },
    { ot: ["1 Chronicles 8–10"], nt: ["Acts 5"] },
    { ot: ["1 Chronicles 11–13"], nt: ["Acts 6"] },
    { ot: ["1 Chronicles 14–16"], nt: ["Acts 7"] },
    { ot: ["1 Chronicles 17–20"], nt: ["Acts 8"] },
    { ot: ["Psalms 86, 101"], nt: ["Acts 9"] },

    // Week 15 — 1 Chronicles 21–29 + Psalms
    { ot: ["1 Chronicles 21–23"], nt: ["Acts 10"] },
    { ot: ["1 Chronicles 24–26"], nt: ["Acts 11"] },
    { ot: ["1 Chronicles 27–29"], nt: ["Acts 12"] },
    { ot: ["Psalm 2"], nt: ["Acts 13"] },
    { ot: ["Psalm 72"], nt: ["Acts 14"] },
    { ot: ["Psalm 127"], nt: ["Acts 15"] },
    { ot: ["Psalm 93–94"], nt: ["Acts 16"] },

    // Week 16 — 1 Kings 1–11
    { ot: ["1 Kings 1–2"], nt: ["Acts 17"] },
    { ot: ["1 Kings 3–4"], nt: ["Acts 18"] },
    { ot: ["1 Kings 5–7"], nt: ["Acts 19"] },
    { ot: ["1 Kings 8"], nt: ["Acts 20"] },
    { ot: ["1 Kings 9–10"], nt: ["Acts 21"] },
    { ot: ["1 Kings 11"], nt: ["Acts 22"] },
    { ot: ["Psalm 95–96"], nt: ["Acts 23"] },

    // Week 17 — 2 Chronicles 1–9 + Psalms
    { ot: ["2 Chronicles 1–3"], nt: ["Acts 24"] },
    { ot: ["2 Chronicles 4–6"], nt: ["Acts 25"] },
    { ot: ["2 Chronicles 7–9"], nt: ["Acts 26"] },
    { ot: ["Psalms 97–98"], nt: ["Acts 27"] },
    { ot: ["Psalms 99–100"], nt: ["Acts 28"] },
    { ot: ["Psalm 42"], nt: ["Romans 1"] },
    { ot: ["Psalm 43"], nt: ["Romans 2"] },

    // Week 18 — 1 Kings 12–16 + Obadiah + Psalms
    { ot: ["1 Kings 12–13"], nt: ["Romans 3"] },
    { ot: ["1 Kings 14–15"], nt: ["Romans 4"] },
    { ot: ["1 Kings 16"], nt: ["Romans 5"] },
    { ot: ["Obadiah"], nt: ["Romans 6"] },
    { ot: ["Psalms 42–44"], nt: ["Romans 7"] },
    { ot: ["Psalms 45–47"], nt: ["Romans 8"] },
    { ot: ["Psalm 49"], nt: ["Romans 9"] },

    // Week 19 — 1 Kings 17–22 + Elijah + Psalms
    { ot: ["1 Kings 17–18"], nt: ["Romans 10"] },
    { ot: ["1 Kings 19–20"], nt: ["Romans 11"] },
    { ot: ["1 Kings 21–22"], nt: ["Romans 12"] },
    { ot: ["Psalms 50"], nt: ["Romans 13"] },
    { ot: ["Psalms 73–75"], nt: ["Romans 14"] },
    { ot: ["Psalms 76–78"], nt: ["Romans 15"] },
    { ot: ["Psalms 79–83"], nt: ["Romans 16"] },

    // Week 20 — 2 Kings 1–10
    { ot: ["2 Kings 1–3"], nt: ["1 Corinthians 1"] },
    { ot: ["2 Kings 4–5"], nt: ["1 Corinthians 2"] },
    { ot: ["2 Kings 6–7"], nt: ["1 Corinthians 3"] },
    { ot: ["2 Kings 8"], nt: ["1 Corinthians 4"] },
    { ot: ["2 Kings 9"], nt: ["1 Corinthians 5"] },
    { ot: ["2 Kings 10"], nt: ["1 Corinthians 6"] },
    { ot: ["Psalm 115"], nt: ["1 Corinthians 7"] },

    // Week 21 — 2 Kings 11–14 + Joel + Jonah + Psalms
    { ot: ["2 Kings 11–12"], nt: ["1 Corinthians 8"] },
    { ot: ["2 Kings 13"], nt: ["1 Corinthians 9"] },
    { ot: ["2 Kings 14"], nt: ["1 Corinthians 10"] },
    { ot: ["Joel 1–3"], nt: ["1 Corinthians 11"] },
    { ot: ["Jonah"], nt: ["1 Corinthians 12"] },
    { ot: ["Psalms 115–116"], nt: ["1 Corinthians 13"] },
    { ot: ["Psalms 117–118"], nt: ["1 Corinthians 14"] },

    // Week 22 — 2 Kings 15 + Amos + Hosea + Psalm 90
    { ot: ["2 Kings 15"], nt: ["1 Corinthians 15"] },
    { ot: ["Amos 1–3"], nt: ["1 Corinthians 16"] },
    { ot: ["Amos 4–6"], nt: ["2 Corinthians 1"] },
    { ot: ["Amos 7–9"], nt: ["2 Corinthians 2"] },
    { ot: ["Hosea 1–3"], nt: ["2 Corinthians 3"] },
    { ot: ["Hosea 4–7"], nt: ["2 Corinthians 4"] },
    { ot: ["Psalm 90"], nt: ["2 Corinthians 5"] },

    // Week 23 — 2 Chronicles 10–28 + Micah + Psalm 91
    { ot: ["2 Chronicles 10–12"], nt: ["2 Corinthians 6"] },
    { ot: ["2 Chronicles 13–16"], nt: ["2 Corinthians 7"] },
    { ot: ["2 Chronicles 17–20"], nt: ["2 Corinthians 8"] },
    { ot: ["2 Chronicles 21–23"], nt: ["2 Corinthians 9"] },
    { ot: ["2 Chronicles 24–26"], nt: ["2 Corinthians 10"] },
    { ot: ["2 Chronicles 27–28"], nt: ["2 Corinthians 11"] },
    { ot: ["Micah 1–7"], nt: ["2 Corinthians 12"] },

    // Week 24 — Isaiah 1–39 + Psalms
    { ot: ["Isaiah 1–4"], nt: ["2 Corinthians 13"] },
    { ot: ["Isaiah 5–8"], nt: ["Galatians 1"] },
    { ot: ["Isaiah 9–12"], nt: ["Galatians 2"] },
    { ot: ["Isaiah 13–16"], nt: ["Galatians 3"] },
    { ot: ["Isaiah 17–20"], nt: ["Galatians 4"] },
    { ot: ["Isaiah 21–24"], nt: ["Galatians 5"] },
    { ot: ["Psalms 46–
