"use server"
import nodemailer from "nodemailer"
/**
 * Sends a refined, minimalist inquiry notification to the portfolio owner.
 * Aligned with the "Korean Minimalist" & "Soft-Technical" aesthetic.
 */
export const sendPortfolioInquiry = async ({
    data
}: {
    data: {
        fullName: string;
        email: string;
        service?: string;
        description?: string;
    }
}) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const timestamp = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'medium',
            timeStyle: 'short'
        });

        // Common Styles for both emails
        const commonStyles = `
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Outfit:wght@300;400&display=swap');
            
            body {
                margin: 0;
                padding: 0;
                background-color: #121212;
                font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                color: #e5e5e5;
                -webkit-font-smoothing: antialiased;
            }
            .wrapper {
                width: 100%;
                table-layout: fixed;
                background-color: #121212;
                padding-bottom: 40px;
            }
            .content {
                max-width: 600px;
                margin: 0 auto;
                background-color: #1a1a1a;
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 24px;
                overflow: hidden;
                margin-top: 40px;
            }
            .header {
                padding: 40px 40px 20px 40px;
                text-align: center;
            }
            .eyebrow {
                font-size: 10px;
                text-transform: uppercase;
                letter-spacing: 0.4em;
                color: rgba(255, 255, 255, 0.3);
                margin-bottom: 12px;
                display: block;
            }
            .title {
                font-family: 'Cormorant Garamond', 'Georgia', serif;
                font-size: 32px;
                font-weight: 300;
                font-style: italic;
                color: rgba(255, 255, 255, 0.9);
                margin: 0;
            }
            .divider {
                width: 40px;
                height: 1px;
                background: rgba(255, 255, 255, 0.1);
                margin: 30px auto;
            }
            .body {
                padding: 0 40px 40px 40px;
            }
            .field {
                margin-bottom: 24px;
            }
            .label {
                font-size: 9px;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                color: rgba(255, 255, 255, 0.2);
                margin-bottom: 6px;
                display: block;
            }
            .value {
                font-size: 15px;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.6;
                font-weight: 300;
            }
            .description-box {
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid rgba(255, 255, 255, 0.03);
                border-radius: 12px;
                padding: 20px;
                margin-top: 8px;
            }
            .footer {
                padding: 20px 40px 40px 40px;
                text-align: center;
                font-size: 10px;
                letter-spacing: 0.1em;
                color: rgba(255, 255, 255, 0.15);
            }
            .symbol {
                color: rgba(255, 255, 255, 0.4);
                font-size: 18px;
                margin-bottom: 16px;
            }
        `;

        // Owner Notification Email
        const notificationHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${commonStyles}</style>
    </head>
    <body>
        <div class="wrapper">
            <div class="content">
                <div class="header">
                    <span class="eyebrow">New Inquiry</span>
                    <h1 class="title">A moment of connection.</h1>
                    <div class="divider"></div>
                </div>

                <div class="body">
                    <div class="field">
                        <span class="label">From</span>
                        <div class="value">${data.fullName}</div>
                    </div>
                    
                    <div class="field">
                        <span class="label">Contact</span>
                        <div class="value">${data.email}</div>
                    </div>

                    ${data.service ? `
                    <div class="field">
                        <span class="label">Interested In</span>
                        <div class="value">${data.service}</div>
                    </div>
                    ` : ''}

                    <div class="field" style="margin-bottom: 0;">
                        <span class="label">Description</span>
                        <div class="description-box">
                            <div class="value">${data.description || 'No description provided.'}</div>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="symbol">✦</div>
                    Received on ${timestamp} (IST)<br>
                    Portfolio Connection System
                </div>
            </div>
        </div>
    </body>
    </html>
        `;

        // Sender Confirmation Email
        const confirmationHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${commonStyles}</style>
    </head>
    <body>
        <div class="wrapper">
            <div class="content">
                <div class="header">
                    <span class="eyebrow">Confirmation</span>
                    <h1 class="title">Initiated.</h1>
                    <div class="divider"></div>
                </div>

                <div class="body" style="text-align: center;">
                    <div class="value" style="margin-bottom: 30px;">
                        Hello ${data.fullName},<br><br>
                        Your inquiry has been successfully received. I appreciate you taking a moment to reach out.
                    </div>
                    
                    <div class="description-box" style="display: inline-block; text-align: left; width: 100%; box-sizing: border-box;">
                        <span class="label">Next Steps</span>
                        <div class="value" style="font-size: 13px;">
                            I will personally review your message and get back to you soon. Looking forward to our potential collaboration.
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="symbol">✦</div>
                    Connected on ${timestamp} (IST)<br>
                    Ayano — Portfolio
                </div>
            </div>
        </div>
    </body>
    </html>
        `;

        // Send Notification to Owner
        const notificationConfig = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: data.email,
            subject: `✦ Portfolio Inquiry: ${data.fullName}`,
            html: notificationHtml
        };

        // Send Confirmation to Sender
        const confirmationConfig = {
            from: process.env.EMAIL_USER,
            to: data.email,
            subject: `✦ Connection Initiated: Ayano`,
            html: confirmationHtml
        };

        // Run both parallel
        await Promise.all([
            transporter.sendMail(notificationConfig),
            transporter.sendMail(confirmationConfig)
        ]);

        return { message: "Inquiry sent successfully.", status: "SUCCESS" }

    } catch (error) {
        console.error("Error while sending portfolio mail ==> ", error)
        return { message: "Connection error. Please try again later.", status: "ERROR" }
    }
}