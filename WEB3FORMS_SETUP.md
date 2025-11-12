# Web3Forms Setup Guide

## What is Web3Forms?

Web3Forms is a free contact form backend service that sends form submissions directly to your email without requiring a backend server. Perfect for static sites and portfolios!

## Setup Instructions

### Step 1: Get Your Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click **"Get Started for Free"**
3. Enter your email address where you want to receive form submissions
4. Click **"Create Access Key"**
5. Check your email and verify your address
6. Copy your **Access Key** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add Access Key to Your Project

1. Open `components/ContactForm.js`
2. Find this line (around line 33):
   ```javascript
   access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:
   ```javascript
   access_key: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
   ```

### Step 3: Test Your Form

1. Run your development server:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:3000/portfolio`
3. Scroll to the **Contact** section
4. Fill out the form and click **Send Message**
5. Check your email - you should receive the form submission!

## Features Included

✅ **Name, Email, Message fields**  
✅ **Form validation** (all fields required)  
✅ **Loading state** with spinner  
✅ **Success/Error notifications**  
✅ **Automatic email delivery**  
✅ **No backend required**  
✅ **100% free** (up to 250 submissions/month)  

## Customization Options

### Change Email Subject
Add a `subject` field to the form data:
```javascript
body: JSON.stringify({
  access_key: "your-access-key",
  subject: "New Portfolio Contact Form Submission",
  name: formData.name,
  email: formData.email,
  message: formData.message,
}),
```

### Add More Fields
Add new fields to the form:
```javascript
// In the form state
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",  // New field
  message: "",
});

// In the JSX
<input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Your phone number"
/>
```

### Custom Redirect After Submission
Add a redirect URL:
```javascript
body: JSON.stringify({
  access_key: "your-access-key",
  redirect: "https://yoursite.com/thank-you",
  // ... other fields
}),
```

## Troubleshooting

### Form not sending?
- ✅ Check that you replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
- ✅ Verify your email address with Web3Forms
- ✅ Check browser console for errors
- ✅ Make sure you have internet connection

### Not receiving emails?
- ✅ Check your spam/junk folder
- ✅ Verify the email address in your Web3Forms dashboard
- ✅ Wait a few minutes (can take up to 5 minutes)

### Error messages?
- ✅ Check that all form fields are filled
- ✅ Verify email format is correct
- ✅ Check network tab in browser DevTools

## Free Tier Limits

- **250 submissions per month**
- **Unlimited forms**
- **Email notifications**
- **Spam filtering**
- **File uploads** (up to 5MB)

Need more? Upgrade to Pro for unlimited submissions!

## Security

✅ **No API keys exposed** - Access key is safe to use in frontend  
✅ **Spam protection** - Built-in honeypot and reCAPTCHA support  
✅ **GDPR compliant**  
✅ **No data storage** - Emails sent directly to you  

## Support

- Documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- Email: support@web3forms.com
- Discord: [Join Community](https://discord.gg/web3forms)

---

**That's it!** Your contact form is now ready to receive messages. 🎉
