// =========================================================================
// 1. DYNAMIC LAYOUT TEXT STRING
// =========================================================================
const sectionalPlanHTML = `
<h4 class="daily-header text-center mb-4">Sectional Plan</h4>
<p class="daily-subtitle">Old Testament Subsections</p>

<h4 class="daily-subheading">The Law (Pentateuch)</h4>
<p class="daily-text">Genesis through Deuteronomy — creation, patriarchs, Exodus, and the giving of the Law.</p>
<h5>Focus: Creation, Patriarchs, Exodus, Covenant, Law</h5>

<p>Week 1: Genesis 1–20</p>
<p>Week 2: Genesis 21–40</p>
<p>Week 3: Genesis 41–50; Exodus 1–10</p>
<p>Week 4: Exodus 11–25</p>
<p>Week 5: Exodus 26–40</p>
<p>Week 6: Leviticus 1–15</p>
<p>Week 7: Leviticus 16–27</p>
<p>Week 8: Numbers 1–15</p>
<p>Week 9: Numbers 16–36</p>
<p>Week 10: Deuteronomy 1–34</p>

<h4 class="daily-subheading">Historical Books</h4>
<p class="daily-text">Joshua through Esther — Judges, United Kingdom, Divided Kingdom.</p>
<h5>Focus: Conquest, Judges, Kingdom, Exile, Restoration</h5>

<p>Week 11: Joshua</p>
<p>Week 12: Judges; Ruth</p>
<p>Week 13: 1 Samuel</p>
<p>Week 14: 2 Samuel</p>
<p>Week 15: 1 Kings</p>
<p>Week 16: 2 Kings</p>
<p>Week 17: 1 Chronicles; 2 Chronicles</p>
<p>Week 18: Ezra; Nehemiah; Esther</p>

<h4 class="daily-subheading">Wisdom & Poetry</h4>
<p class="daily-text">Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon.</p>
<h5>Focus: Wisdom, Worship, Life, Suffering, Love</h5>

<p>Week 19: Job</p>
<p>Week 20: Psalms 1–75</p>
<p>Week 21: Psalms 76–150</p>
<p>Week 22: Proverbs; Ecclesiastes; Song of Solomon</p>

<h4 class="daily-subheading">Major Prophets</h4>
<p class="daily-text">Isaiah through Daniel.</p>
<h5>Focus: Judgment, Hope, Messianic Prophecy, Exile</h5>

<p>Week 23: Isaiah 1–33</p>
<p>Week 24: Isaiah 34–66</p>
<p>Week 25: Jeremiah 1–33</p>
<p>Week 26: Jeremiah 34–52; Lamentations</p>
<p>Week 27: Ezekiel; Daniel</p>

<h4 class="daily-subheading">Minor Prophets</h4>
<p class="daily-text">Hosea through Malachi.</p>
<h5>Focus: Covenant Warnings, Restoration, Day of the Lord</h5>

<p>Week 28: Hosea; Joel; Amos</p>
<p>Week 29: Obadiah; Jonah; Micah</p>
<p>Week 30: Nahum; Habakkuk; Zephaniah</p>
<p>Week 31: Haggai; Zechariah 1–8</p>
<p>Week 32: Zechariah 9–14; Malachi</p>

<p class="daily-subtitle">New Testament Subsections</p>

<h4 class="daily-subheading">The Life and Preaching of Christ</h4>
<p class="daily-text">Matthew, Mark, Luke, John.</p>
<h5>Focus: Life of Christ, Teachings, Miracles, Death & Resurrection of Christ</h5>

<p>Week 33: Matthew</p>
<p>Week 34: Mark</p>
<p>Week 35: Luke</p>
<p>Week 36: John</p>

<h4 class="daily-subheading">Church History</h4>
<p class="daily-text">Acts.</p>
<h5>Focus: Apostolic Mission, Early Church, Holy Spirit</h5>

<p>Week 37: Acts 1–14</p>
<p>Week 38: Acts 15–28</p>

<h4 class="daily-subheading">The Epistles</h4>
<p class="daily-text">Romans through Jude.</p>
<h5>Focus: Doctrine, Christian Living, Church Instruction</h5>

<p>Week 39: Romans</p>
<p>Week 40: 1 Corinthians</p>
<p>Week 41: 2 Corinthians; Galatians</p>
<p>Week 42: Ephesians; Philippians; Colossians</p>
<p>Week 43: 1 & 2 Thessalonians</p>
<p>Week 44: 1 & 2 Timothy</p>
<p>Week 45: Titus; Philemon; Hebrews 1–7</p>
<p>Week 46: Hebrews 8–13; James</p>
<p>Week 47: 1 & 2 Peter</p>
<p>Week 48: 1 John; 2 John; 3 John</p>
<p>Week 49: Jude</p>

<h4 class="daily-subheading">Prophecy / Apocalyptic</h4>
<p class="daily-text">Revelation.</p>
<h5>Focus: [James B. Ogden] “The Lamb Prepares to Avenge the Saints”**, “God Warns the World and Exposes the Persecutors”**, “God Avenges the Saints and Restores All Things”**</h5>

<p>Week 50: Rev 1–7</p>
<p>Christ prepares to avenge the saints; the martyrs cry out.</p>
<p>Week 51: Rev 8–14</p>
<p>Warnings intensify; the persecutors are exposed; the saints remain faithful.</p>
<p>Week 52: Rev 15–22</p>
<p>God avenges the saints, destroys evil, and brings eternal restoration.</p>
`;

window.sectionalPlanHTML = sectionalPlanHTML;

// =========================================================================
// 2. MISSING STRUCTURAL DATA ARRAY (Required to drive the tracker layout)
// =========================================================================
const sectionalPlan = [
    { ot: ["Genesis 1–20"], nt: [] }, // Week 1
    { ot: ["Genesis 21–40"], nt: [] }, // Week 2
    { ot: ["Genesis 41–50", "Exodus 1–10"], nt: [] }, // Week 3
    { ot: ["Exodus 11–25"], nt: [] }, // Week 4
    { ot: ["Exodus 26–40"], nt: [] }, // Week 5
    { ot: ["Leviticus 1–15"], nt: [] }, // Week 6
    { ot: ["Leviticus 16–27"], nt: [] }, // Week 7
    { ot: ["Numbers 1–15"], nt: [] }, // Week 8
    { ot: ["Numbers 16–36"], nt: [] }, // Week 9
    { ot: ["Deuteronomy 1–34"], nt: [] }, // Week 10
    { ot: ["Joshua"], nt: [] }, // Week 11
    { ot: ["Judges", "Ruth"], nt: [] }, // Week 12
    { ot: ["1 Samuel"], nt: [] }, // Week 13
    { ot: ["2 Samuel"], nt: [] }, // Week 14
    { ot: ["1 Kings"], nt: [] }, // Week 15
    { ot: ["2 Kings"], nt: [] }, // Week 16
    { ot: ["1 Chronicles", "2 Chronicles"], nt: [] }, // Week 17
    { ot: ["Ezra", "Nehemiah", "Esther"], nt: [] }, // Week 18
    { ot: ["Job"], nt: [] }, // Week 19
    { ot: ["Psalms 1–75"], nt: [] }, // Week 20
    { ot: ["Psalms 76–150"], nt: [] }, // Week 21
    { ot: ["Proverbs", "Ecclesiastes", "Song of Solomon"], nt: [] }, // Week 22
    { ot: ["Isaiah 1–33"], nt: [] }, // Week 23
    { ot: ["Isaiah 34–66"], nt: [] }, // Week 24
    { ot: ["Jeremiah 1–33"], nt: [] }, // Week 25
    { ot: ["Jeremiah 34–52", "Lamentations"], nt: [] }, // Week 26
    { ot: ["Ezekiel", "Daniel"], nt: [] }, // Week 27
    { ot: ["Hosea", "Joel", "Amos"], nt: [] }, // Week 28
    { ot: ["Obadiah", "Jonah", "Micah"], nt: [] }, // Week 29
    { ot: ["Nahum", "Habakkuk", "Zephaniah"], nt: [] }, // Week 30
    { ot: ["Haggai", "Zechariah 1–8"], nt: [] }, // Week 31
    { ot: ["Zechariah 9–14", "Malachi"], nt: [] }, // Week 32
    { ot: [], nt: ["Matthew"] }, // Week 33
    { ot: [], nt: ["Mark"] }, // Week 34
    { ot: [], nt: ["Luke"] }, // Week 35
    { ot: [], nt: ["John"] }, // Week 36
    { ot: [], nt: ["Acts 1–14"] }, // Week 37
    { ot: [], nt: ["Acts 15–28"] }, // Week 38
    { ot: [], nt: ["Romans"] }, // Week 39
    { ot: [], nt: ["1 Corinthians"] }, // Week 40
    { ot: [], nt: ["2 Corinthians", "Galatians"] }, // Week 41
    { ot: [], nt: ["Ephesians", "Philippians", "Colossians"] }, // Week 42
    { ot: [], nt: ["1 & 2 Thessalonians"] }, // Week 43
    { ot: [], nt: ["1 & 2 Timothy"] }, // Week 44
    { ot: [], nt: ["Titus", "Philemon", "Hebrews 1–7"] }, // Week 45
    { ot: [], nt: ["Hebrews 8–13", "James"] }, // Week 46
    { ot: [], nt: ["1 & 2 Peter"] }, // Week 47
    { ot: [], nt: ["1 John", "2 John", "3 John"] }, // Week 48
    { ot: [], nt: ["Jude"] }, // Week 49
    { ot: [], nt: ["Revelation 1–7"] }, // Week 50
    { ot: [], nt: ["Revelation 8–14"] }, // Week 51
    { ot: [], nt: ["Revelation 15–22"] } // Week 52
];

window.sectionalPlan = sectionalPlan;
