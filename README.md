# CloudReady Africa ☁️

**Learn cloud. Build confidence.**

CloudReady Africa is an unofficial, beginner-friendly AZ-900 (Microsoft Azure Fundamentals) study companion created for the #1MillionDevs Vibe Coding Hackathon.

It helps learners practise original questions, revise Azure terminology, plan their study time, explore simple explanations with African-context examples, and review practice performance by topic.

> **Disclaimer:** CloudReady Africa is an independent learning project. It is not affiliated with, endorsed by, or an official product of Microsoft. It does not contain copied real exam questions and its readiness indicator does not guarantee an exam result.

## Features

1. **Smart Quiz** — original multiple-choice questions, instant feedback and explanations, organised by AZ-900 topic area.
2. **Flashcards** — review key cloud terms and mark concepts as known or needing revision.
3. **Personal Study Planner** — create a revision schedule using a target date, daily study hours and focus topics.
4. **Study Buddy** — prepared, beginner-friendly explanations and relatable examples. This prototype does not call a live AI model.
5. **Readiness Tracker** — see practice scores by topic and recent quiz attempts.

Progress is saved in the browser using `localStorage`. No account or API key is needed for this prototype.

## Run locally

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code **Live Server** extension.
4. Select a feature from the navigation and try a quiz.

No build step or package installation is required.

## Project files

- `index.html` — page structure and feature sections
- `style.css` — responsive styling and layout
- `script.js` — quiz logic, flashcards, planner, Study Buddy guide and progress storage

## AZ-900 topic alignment

The sample practice questions are organised around the public AZ-900 skill areas:
- Describe cloud concepts
- Describe Azure architecture and services
- Describe Azure management and governance

Microsoft can update exam objectives. Always review the current official skills outline:
https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/

## Limitations and next steps

- The Study Buddy uses a prepared knowledge guide, not a live generative AI API.
- Data is stored only in the current browser and device. Clearing browser storage removes local progress.
- This is a prototype for learning and demonstration, not an official exam simulator.
- Future improvements could include an accessible local-language content option, a database and accounts, spaced-repetition scheduling, and a live AI assistant with safety and accuracy checks.

## Built for

The #1MillionDevs Vibe Coding Hackathon — “Building Smarter Exam Prep Tools from Our Own Learning Journey.”
