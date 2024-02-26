---
title: Email Drip Sequence
description: How to set up an email drip sequence in FSCRM.
---

# Email Drip Sequence

Automations streamline your workflow by automating repetitive tasks and communications. Follow these steps to create a customized email drip sequence tailored to your flight school's needs:

## 1. Navigate to Automations:
Access the "Automations" tab on the sidebar menu of your FSCRM dashboard.

![Automations Tab](/public/build-automations-guide/automations-tab.webp)

## 2. Create a New Workflow:
Click on "Create Workflow" to initiate the workflow creation process.

![Create Workflow](/public/build-automations-guide/choose-workflow.webp)

## 3. Indicate a Trigger:
Choose a trigger that will initiate the email drip sequence, such as a form submission or a specific event.

![Indicate Trigger](/public/email-drip-guide/create-trigger-drip.webp)

## 4. Create an Email:
Add an email action to the workflow. Design your email with compelling content and visuals to engage your audience.

![Create Email](/public/email-drip-guide/create-email.webp)

## 5. Write a Message with Dynamic Fields:
Personalize your email message using dynamic fields to address each recipient by name or other relevant information.

![Dynamic Fields](/public/email-drip-guide/insert-dynamic-fields.webp)

## 6. Save Your Email:
After composing your email, save it to ensure that your changes are preserved.

![Save Email](/public/email-drip-guide/write-email.webp)

## 7. Set Email Event:
Configure an email event to wait until the contact either opens the email or remains unopened for a specified period, such as 3 days.

![Set Email Event](/public/email-drip-guide/wait-for-open.webp)

## 8. Create an If/Else Conditional Branch:
Add an if/else conditional branch to the workflow to create different paths based on the recipient's actions.

![Conditional Branch](/public/email-drip-guide/conditional-branches.webp)

## 9. Link Email Event to Conditional Branch:
Connect the email event to the conditional branch to divide contacts into two paths depending on whether they open the email or not.

![Link Email Event](/public/email-drip-guide/set-conditions.webp)

## 10. Create Follow-Up Email:
If the recipient opens the email, add another email action to send a follow-up message to further engage them.

## 11. Send SMS for Unopened Emails:
If the recipient does not open the email within the specified time frame, set up an SMS action to send a text message as an alternative communication channel.

![Set SMS](/public/email-drip-guide/send-sms.webp)

## 12. Save and Publish:
Once you've configured your email drip sequence, save the workflow and switch it to "Publish" mode to activate the automation.

By following these steps, you can create an effective email drip sequence to nurture leads and drive engagement with your flight school's audience.


## Further reading

- Read [Build Automations](/src/content/docs/guides/build-auto-form.md)
