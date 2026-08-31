export const sendEmail = async (
  accessToken: string,
  to: string,
  subject: string,
  message: string,
  fromEmail: string,
  fromName: string
) => {
  const emailLines = [
    `To: ${to}`,
    `Subject: =?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    `From: ${fromName} <${fromEmail}>`,
    '',
    message
  ];
  
  const email = emailLines.join('\r\n');
  
  // Base64url encode the email
  const base64EncodedEmail = btoa(unescape(encodeURIComponent(email)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
    
  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw: base64EncodedEmail
    })
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to send email: ${errorData.error?.message || response.statusText}`);
  }
  
  return await response.json();
};
