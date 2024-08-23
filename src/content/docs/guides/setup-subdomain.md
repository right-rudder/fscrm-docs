---
title: Setup Subdomain
description: How to set up a subdomain for FSCRM.
---

Setting up a subdomain for FSCRM allows you to brand your CRM platform with a custom URL. Follow these steps to set up your subdomain.

### 1. Access the Subdomain Settings

Navigate to the "Settings" section on your FSCRM dashboard and select "Domains" or "Subdomain."

### 2. Choose a Subdomain Name

Enter the desired subdomain name (e.g., crm.yourdomain.com). Ensure it aligns with your brand and is easy for users to remember.

### 3. Update DNS Records

Log in to your domain registrar’s dashboard and update the DNS settings to point to FSCRM’s servers. You’ll typically need to add a CNAME record with the subdomain pointing to the FSCRM provided URL.

### 4. Verify the Subdomain

Once the DNS records are updated, return to FSCRM and verify the subdomain. This process can take some time depending on DNS propagation.

### 5. Set Up SSL

Enable SSL on your subdomain to ensure secure communication. FSCRM typically offers a simple toggle to enable SSL, or you may need to configure it through your domain registrar.

### 6. Test the Subdomain

Visit your new subdomain to ensure it’s working correctly. All FSCRM pages and resources should load under your custom URL.

### 7. Save and Finalize

Save your subdomain settings. Your FSCRM platform is now accessible via your custom subdomain.

### Troubleshooting

If the subdomain isn’t working, check that:
- The DNS records are correctly configured and propagated.
- The subdomain is spelled correctly.
- SSL is properly set up and enabled.

### Further reading

- [Setup Phone System](/guides/setup-phone-system)
- [Embed a Form on Your Website](/guides/embed-form)
- [Google My Business Integration](/guides/google-my-business)
