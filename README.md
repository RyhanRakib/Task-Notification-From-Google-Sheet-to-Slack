The main goal for this script is to send a notifiation to my Slack chanel for upcoming task from my google sheet, which also shared with my colleagues.
First You need a google sheet, this was my format for that script

Column NO: Heading
-------------------
Column A: Site URL 
Column B: Ref No
Column C: Note 
Column D: Start Date
Column E: Next Date
Column F: Assign To

* Date format was default month/date/year
  
Steps For Set up a Slack Incoming Webhook:
--------------------------------------------

First Go to your Slack workspace. Create a new Slack app or use an existing one. I used Incoming WebHook Apps from Slack

Copy the webhook URL (you'll need it in the script).

Open Google Sheets. Open the Google Sheet where your data is stored. Open Script Editor. 
Go to Extensions > Apps Script.
Paste the Script:
Replace the placeholder YOUR_SLACK_INCOMING_MESSAGE_WEBHOOK_URL with your actual Slack webhook URL.
Paste the script below into the Apps Script editor.
Set a Time-Driven Trigger:

Steps to Set Up a Time-Driven Trigger:
Open the Apps Script Editor:

In your Google Sheet, go to Extensions > Apps Script.

Click on the Clock Icon (Triggers):

In the Apps Script editor, click on the clock icon on the left sidebar. This will open the Triggers page.

Add a New Trigger:

Click on the + Add Trigger button at the bottom right.

Configure the Trigger:

Set the following options:

Choose which function to run: Select notifySlack (the main function in the script).
Choose which deployment should run: Select Head (this refers to the latest version of your script).
Select event source: Choose Time-driven.
Select type of time-based trigger: Choose Hour timer.
Select hour interval: Choose Every 6 hours.
Save the Trigger:
Click Save to create the trigger.

How the Trigger Works:
Once the trigger is set up, Google Apps Script will automatically execute the notifySlack function every 6 hours.

The script will check your Google Sheet for tasks due in 2 days and send Slack notifications if any are found.

Verify the Trigger:
After setting up the trigger, you can verify it by going back to the Triggers page. You should see a trigger listed like this:

Copy
notifySlack | Time-driven | Hour timer | Every 6 hours
Important Notes:
Execution Limits:

Google Apps Script has daily execution limits. If your script exceeds these limits, it will stop running until the next day. You can check your usage in the Quotas section of the Apps Script dashboard.

Error Notifications:

If the script fails to run (e.g., due to an error), you will receive an email notification if you've set up email alerts for triggers.

Testing the Trigger:

To test the trigger, you can manually run the notifySlack function in the Apps Script editor and check the logs (View > Logs).

Example of a Time-Driven Trigger Setup:
Here’s a screenshot-like description of the trigger setup:

Function to run: notifySlack

Deployment: Head

Event source: Time-driven

Type: Hour timer

Interval: Every 6 hours

Troubleshooting:
If the script doesn’t run automatically:

Ensure the trigger is set up correctly.

Check the execution logs for errors.

Make sure the script is saved and deployed as Head.
