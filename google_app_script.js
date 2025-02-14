/**
 * Function to check upcoming tasks and send Slack notifications.
 */
function notifySlack() {
  // Replace with your Slack webhook URL
  const slackWebhookUrl = "YOUR_SLACK_INCOMING_MESSAGE_WEBHOOK_URL";

  // Get the active sheet and all data
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // Get today's date and calculate the date 2 days from now
  const today = new Date();
  const twoDaysLater = new Date(today);
  twoDaysLater.setDate(today.getDate() + 2);

  // Loop through rows (start from 1 to skip the header row)
  for (let i = 1; i < data.length; i++) {
    const siteUrl = data[i][0]; // Column A
    const note = data[i][2]; // Column C
    const taskDate = new Date(data[i][4]); // Column E 
    const assign_to = data[i][5]; // Column F

    // Skip rows with invalid or empty dates
    if (isNaN(taskDate.getTime())) {
      Logger.log(`Skipping row ${i + 1}: Invalid date in Column E`);
      continue;
    }

    // Check if the task date is 2 days from today
    if (taskDate.toDateString() === twoDaysLater.toDateString()) {
      // Construct the Slack message
      const message = `:bell: *Upcoming Task Reminder* :bell:\n\n*Site URL:* ${siteUrl}\n*Note:* ${note}\n*Date:* ${taskDate.toLocaleDateString()}\n*Assigned To -:* ${assign_to}`;

      // Send the message to Slack
      sendSlackNotification(slackWebhookUrl, message);
    }
  }
}

/**
 * Function to send a Slack notification via webhook.
 * @param {string} webhookUrl - The Slack webhook URL.
 * @param {string} message - The message to send.
 */
function sendSlackNotification(webhookUrl, message) {
  const payload = {
    text: message,
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };

  // Send the request to Slack
  UrlFetchApp.fetch(webhookUrl, options);
}
