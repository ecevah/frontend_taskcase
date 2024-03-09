# Baykar Technical Interview Tasks

This repository contains the implementation of two primary tasks for the Baykar technical interview, executed using Next.js. Below are detailed descriptions of each task along with instructions on how to run the application.

## Task 1: CSS Work

### Objective

To implement a responsive interface design from a provided Figma file, using Tailwind or Bootstrap. It's essential that dynamic design features, such as sliding elements with forward and backward buttons, are functional.

### Implementation Details

- The interface is crafted following the **Atomic Design** principles, which involve breaking down the interface into basic components (atoms) and combining them to form larger, reusable components (molecules and organisms), thus ensuring modularity and consistency across the design.
- Utilizes Tailwind/Bootstrap to ensure the interface is responsive across different devices.
- Dynamic elements are thoroughly implemented and tested to guarantee they function as expected.

## Task 2: Script's Operating System

### Objective

Develop a test script that meets the following criteria:

- Comprises a total of 10 questions, each with options A, B, C, D. Options are to be parsed from the string within each question.
- Each question is displayed for 30 seconds, with answer options not clickable for the first 10 seconds but becoming clickable after until the 30-second mark, after which it automatically progresses to the next question.
- Does not allow going back to previous questions.
- Displays the responses in a table format at the end of the test.

### Implementation Details

- Built using Next.js to manage state and timing efficiently.
- Questions and options are dynamically generated and managed.
- A countdown timer is implemented for each question, with logic to manage the clickable state of options.

## Installation and Running Instructions

Before proceeding, ensure Node.js and npm are installed on your machine.

1. **Clone this repository** or download the files to your local machine.
2. **Navigate to the project directory** in your terminal.
3. **Install the required dependencies** by running:

   ```bash
   npm install
   ```

Start the development server with:

```bash
npm run dev
```

Access the application by opening http://localhost:3000 in your browser.

- Thank you for considering my submission for the Baykar technical interview.

![Css Task](https://github.com/ecevah/baykar_frontend/blob/main/css_task/public/screenshots/Ekran%20Resmi%202024-03-09%2012.34.40.png "CSS Task")

![Javascript Task](https://github.com/ecevah/baykar_frontend/blob/main/javascript_task/public/Ekran%20Resmi%202024-03-09%2001.44.16.png "Javascript Task")
