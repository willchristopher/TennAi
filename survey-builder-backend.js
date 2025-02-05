let savedSurveys = [];
let drafts = [];
let idCounter = 1;
// Seed 3 example surveys with additional dates and purpose (i.e. goal)
let finalSurveys = [
  {
    id: idCounter++,
    name: 'Customer Satisfaction Survey',
    goal: 'Measure customer satisfaction levels.',
    date: new Date('2023-01-01'),
    startDate: new Date('2023-01-05'),
    endDate: new Date('2023-01-20'),
    published: false,
    questions: []
  },
  {
    id: idCounter++,
    name: 'Product Feedback Survey',
    goal: 'Collect feedback on recently launched product.',
    date: new Date('2023-02-10'),
    startDate: new Date('2023-02-15'),
    endDate: new Date('2023-03-01'),
    published: false,
    questions: []
  },
  {
    id: idCounter++,
    name: 'Employee Engagement Survey',
    goal: 'Assess employee satisfaction and engagement.',
    date: new Date('2023-03-05'),
    startDate: new Date('2023-03-10'),
    endDate: new Date('2023-03-25'),
    published: false,
    questions: []
  }
];

function saveDraft(req, res) {
  try {
    let { name, goal, questions } = req.body;
    if (!name) throw new Error('Draft must have a name');
    const draft = { id: idCounter++, name, goal, questions, date: new Date() };
    drafts.push(draft);
    res.status(200).json({ success: true, draft });
  } catch (er) {
    res.status(400).json({ success: false, message: er.message });
  }
}

function loadDraft(req, res) {
  res.status(200).json(drafts);
}

function saveSurvey(req, res) {
  try {
    let { name, goal, questions } = req.body;
    if (!name) throw new Error('Survey name is required');
    const survey = { id: idCounter++, name, goal, questions, date: new Date(), published: false };
    finalSurveys.push(survey);
    res.status(200).json({ success: true, survey });
  } catch (er) {
    res.status(400).json({ success: false, message: er.message });
  }
}

function getSurveys(req, res) {
  res.status(200).json(finalSurveys);
}

function publishSurvey(req, res) {
  try {
    const { id } = req.body;
    const survey = finalSurveys.find(s => s.id == id);
    if (!survey) throw new Error('Survey not found');
    survey.published = true;
    res.status(200).json({ success: true });
  } catch (er) {
    res.status(400).json({ success: false, message: er.message });
  }
}

function editSurvey(req, res) {
  try {
    const id = req.query.id;
    const survey = finalSurveys.find(s => s.id == id);
    if (!survey) throw new Error('Survey not found');
    res.status(200).json(survey);
  } catch (er) {
    res.status(400).json({ success: false, message: er.message });
  }
}

module.exports = { saveDraft, loadDraft, saveSurvey, getSurveys, publishSurvey, editSurvey };