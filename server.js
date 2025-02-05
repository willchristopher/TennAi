const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // New dependency

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.get('/generateReport', (req, res) => {
  try {
    // Hard-coded local sample data
    const loveSummary = 'Customers love the intuitive design and smooth user experience.';
    const improvementSummary = 'Some improvements are needed in page load times and responsiveness.';
    const trackingData = [
      'Social Media: Responses Recorded: 150 | Visitors: 300 | Avg. Score: 8',
      'Email Campaign: Responses Recorded: 120 | Visitors: 250 | Avg. Score: 9',
      'SMS Outreach: Responses Recorded: 80 | Visitors: 200 | Avg. Score: 7',
      'Website Embedded: Responses Recorded: 200 | Visitors: 400 | Avg. Score: 8'
    ];

    // Build text file content
    const content =
      'Summarized Responses\n' +
      '---------------------\n' +
      'What People Love:\n' + loveSummary + '\n\n' +
      'What Needs Improvement:\n' + improvementSummary + '\n\n' +
      'Tracking Metrics\n' +
      '----------------\n' +
      trackingData.join('\n');

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="report.txt"');
    res.status(200).send(content);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating text report.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
