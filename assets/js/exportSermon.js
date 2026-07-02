export function buildSermonText(sermon) {
  return `
Title: ${sermon.title}

Scripture Reading:
${sermon.text}

Big Idea:
${sermon.bigIdea}

Introduction:
${sermon.intro}

Point 1:
${sermon.point1}

Point 2:
${sermon.point2}

Point 3:
${sermon.point3}

Conclusion:
${sermon.conclusion}
`;
}

export function buildSermonMarkdown(sermon) {
  return `
# ${sermon.title}

**Scripture Reading:** ${sermon.text}

## Big Idea
${sermon.bigIdea}

## Introduction
${sermon.intro}

## Point 1
${sermon.point1}

## Point 2
${sermon.point2}

## Point 3
${sermon.point3}

## Conclusion
${sermon.conclusion}
`;
}
