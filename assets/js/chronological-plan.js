// Chronological Bible Study Plan HTML Export
const chronologicalPlanHTML = `
<!-- Weeks 1–3 — Creation to Patriarchs -->
<h4>Weeks 1–3 — Creation to Patriarchs</h4>
<p>- Week 1: Genesis 1–11</p>
<p>- Week 2: Job</p>
<p>- Week 3: Genesis 12–50</p>

<!-- Weeks 4–8 — Exodus to Promised Land -->
<h4>Weeks 4–8 — Exodus to Promised Land</h4>
<p>- Week 4: Exodus 1–18</p>
<p>- Week 5: Exodus 19–40</p>
<p>- Week 6: Leviticus</p>
<p>- Week 7: Numbers</p>
<p>- Week 8: Deuteronomy</p>

<!-- Weeks 9–11 — Conquest & Judges -->
<h4>Weeks 9–11 — Conquest & Judges</h4>
<p>- Week 9: Joshua</p>
<p>- Week 10: Judges</p>
<p>- Week 11: Ruth</p>

<!-- Weeks 12–17 — United Kingdom -->
<h4>Weeks 12–17 — United Kingdom (Saul, David, Solomon)</h4>
<h4>Week 12 — 1 Samuel</h4>
<p>Add early David psalms:</p>
<p>- Psalms 3–7, 11, 13, 22, 23, 34, 52–54, 56–57, 59, 63</p>
<h4>Week 13 — 2 Samuel</h4>
<p>Add middle David psalms:</p>
<p>- Psalms 8–10, 14–21, 24–31, 35–41, 51, 60, 65, 69–71</p>
<h4>Week 14 — 1 Chronicles 1–20</h4>
<p>Add late David psalms:</p>
<p>- Psalms 86, 101, 103, 108–110, 138–145</p>
<h4>Week 15 — 1 Chronicles 21–29</h4>
<p>Add coronation/temple psalms:</p>
<p>- Psalm 2, Psalm 72, Psalm 127</p>
<h4>Week 16 — 1 Kings 1–11</h4>
<p>Solomon era — no new Psalms beyond 72 & 127.</p>
<h4>Week 17 — 2 Chronicles 1–9</h4>
<p>Temple dedication — add:</p>
<p>- Psalms 93–100 (YHWH reigns psalms)</p>

<!-- Weeks 18–35 — Divided Kingdom -->
<h4>Weeks 18–35 — Divided Kingdom with Prophets Inserted</h4>
<h4>Weeks 18–20 — Early Divided Kingdom</h4>
<p>- Week 18:</p>
<p>  - 1 Kings 12–16</p>
<p>  - Prophet: Obadiah (early Edom judgment)</p>
<p>  - Psalms 42–49 (Korah)</p>
<p>- Week 19:</p>
<p>  - 1 Kings 17–22</p>
<p>  - Prophet: Elijah (within Kings narrative)</p>
<p>  - Psalms 50, 73–83 (Asaph)</p>
<p>- Week 20:</p>
<p>  - 2 Kings 1–10</p>
<p>  - Prophet: Elisha</p>

<!-- Weeks 21–23 — Assyrian Threat Rises -->
<h4>Weeks 21–23 — Assyrian Threat Rises</h4>
<p>- Week 21:</p>
<p>  - 2 Kings 11–14</p>
<p>  - Prophets:</p>
<p>    - Joel</p>
<p>    - Jonah</p>
<p>  - Psalm 115–118 (temple worship psalms)</p>
<p>- Week 22:</p>
<p>  - 2 Kings 15</p>
<p>  - Prophets:</p>
<p>    - Amos</p>
<p>    - Hosea</p>
<p>  - Psalm 90 (Moses; fits during reflection on national decline)</p>
<p>- Week 23:</p>
<p>  - 2 Chronicles 10–28</p>
<p>  - Prophet: Micah</p>
<p>  - Psalm 91 (trust psalm during Assyrian threat)</p>

<!-- Weeks 24–27 — Isaiah's Era -->
<h4>Weeks 24–27 — Isaiah’s Era</h4>
<p>- Week 24:</p>
<p>  - 2 Kings 16–20</p>
<p>  - Prophet: Isaiah 1–39</p>
<p>  - Psalms 46–48 (deliverance psalms)</p>
<p>- Week 25:</p>
<p>  - Prophet: Isaiah 40–66</p>
<p>  - Psalm 76 (Assyrian defeat theme)</p>
<p>- Week 26:</p>
<p>  - Prophet: Nahum</p>
<p>- Week 27:</p>
<p>  - Prophets:</p>
<p>    - Habakkuk</p>
<p>    - Zephaniah</p>

<!-- Weeks 28–30 — Fall of Judah Approaches -->
<h4>Weeks 28–30 — Fall of Judah Approaches</h4>
<p>- Week 28:</p>
<p>  - 2 Kings 21–23</p>
<p>  - 2 Chronicles 29–35</p>
<p>- Week 29:</p>
<p>  - Prophet: Jeremiah 1–29</p>
<p>  - Psalm 74, 79, 137</p>
<p>- Week 30:</p>
<p>  - Prophet: Jeremiah 30–52</p>
<p>  - Lamentations</p>

<!-- Weeks 31–34 — Exile -->
<h4>Weeks 31–34 — Exile</h4>
<p>- Week 31:</p>
<p>  - 2 Kings 24–25</p>
<p>  - Prophet: Ezekiel 1–24</p>
<p>- Week 32:</p>
<p>  - Prophet: Ezekiel 25–48</p>
<p>  - Psalm 102 (affliction in exile)</p>
<p>- Week 33:</p>
<p>  - Prophet: Daniel 1–6</p>
<p>  - Psalm 130 (penitential psalm)</p>
<p>- Week 34:</p>
<p>  - Prophet: Daniel 7–12</p>

<!-- Weeks 35–38 — Return & Restoration -->
<h4>Weeks 35–38 — Return & Restoration</h4>
<p>- Week 35:</p>
<p>  - Ezra 1–6</p>
<p>  - Prophet: Haggai</p>
<p>- Week 36:</p>
<p>  - Ezra 7–10</p>
<p>  - Prophet: Zecharia</p>
<p>- Week 37:</p>
<p>  - Nehemiah</p>
<p>  - Psalm 85, Psalm 126</p>
<p>- Week 38:</p>
<p>  - Esther</p>
<p>  - Prophet: Malachi</p>

<!-- Weeks 39–52 — New Testament Chronology -->
<h4>Weeks 39–52 — New Testament Chronology</h4>
<h4>Weeks 39–42 — Life of Christ</h4>
<p>- Week 39: Matthew</p>
<p>- Week 40: Mark</p>
<p>- Week 41: Luke</p>
<p>- Week 42: John</p>

<!-- Weeks 43–52 — Early Church & Letters -->
<h4>Weeks 43–52 — Early Church & Apostolic Letters</h4>
<p>- Week 43: Acts 1–12</p>
<p>- Week 44: Acts 13–28</p>
<p>    - Psalms 1, 15, 19, 24, 33, 112–117, 119, 146–150</p>
<h4>Paul’s Letters in Historical Order</h4>
<p>- Week 45: Galatians</p>
<p>- Week 46: 1–2 Thessalonians</p>
<p>- Week 47: 1–2 Corinthians</p>
<p>- Week 48: Romans</p>
<p>- Week 49: Prison Epistles</p>
<p>  - Ephesians</p>
<p>  - Philippians</p>
<p>  - Colossians</p>
<p>  - Philemon</p>
<h4>Week 50: Pastoral Epistles</h4>
<p>  - 1 Timothy</p>
<p>  - Titus</p>
<p>  - 2 Timothy</p>
<h4>Week 51: General Epistles</h4>
<p>  - James</p>
<p>  - 1–2 Peter</p>
<p>  - Jude</p>
<h4>Week 52:</h4>
<p>  - Hebrews</p>
<p>  - 1–3 John</p>
<p>  - Revelation</p>
`;

// DOM Injection Logic Example (Uncomment to use)
// document.getElementById('secret-text').innerHTML = chronologicalPlanHTML;
