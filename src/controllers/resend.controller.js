import { resend } from '../libs/resend.js';

const html_template = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
    + '<!DOCTYPE html>'
    + '<html dir="ltr" lang="en">'
    + ''
    + '  <head>'
    + '    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />'
    + '    <meta name="x-apple-disable-message-reformatting" />'
    + '  </head>'
    + '  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">AWS Email Verification<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>'
    + '  </div>'
    + ''
    + '  <body style="background-color:#fff;color:#212121">'
    + '    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;padding:20px;margin:0 auto;background-color:#eee">'
    + '      <tbody>'
    + '        <tr style="width:100%">'
    + '          <td>'
    + '            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#fff">'
    + '              <tbody>'
    + '                <tr>'
    + '                  <td>'
    + '                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#252f3d;display:flex;padding:20px 0;align-items:center;justify-content:center">'
    + '                      <tbody>'
    + '                        <tr>'
    + '                          <td><img alt="AWS&#x27;s Logo" height="45" src="https://react-email-demo-8sniqc6eo-resend.vercel.app/static/aws-logo.png" style="display:block;outline:none;border:none;text-decoration:none" width="75" /></td>'
    + '                        </tr>'
    + '                      </tbody>'
    + '                    </table>'
    + '                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:25px 35px">'
    + '                      <tbody>'
    + '                        <tr>'
    + '                          <td>'
    + '                            <h1 style="color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:20px;font-weight:bold;margin-bottom:15px">Verify your email address</h1>'
    + '                            <p style="font-size:14px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-bottom:14px">Thanks for starting the new AWS account creation process. We want to make sure it&#x27;s really you. Please enter the following verification code when prompted. If you don&#x27;t want to create an account, you can ignore this message.</p>'
    + '                            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="display:flex;align-items:center;justify-content:center">'
    + '                              <tbody>'
    + '                                <tr>'
    + '                                  <td>'
    + '                                    <p style="font-size:14px;line-height:24px;margin:0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-weight:bold;text-align:center">Verification code</p>'
    + '                                    <p style="font-size:36px;line-height:24px;margin:10px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-weight:bold;text-align:center">596853</p>'
    + '                                    <p style="font-size:14px;line-height:24px;margin:0px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;text-align:center">(This code is valid for 10 minutes)</p>'
    + '                                  </td>'
    + '                                </tr>'
    + '                              </tbody>'
    + '                            </table>'
    + '                          </td>'
    + '                        </tr>'
    + '                      </tbody>'
    + '                    </table>'
    + '                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea" />'
    + '                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:25px 35px">'
    + '                      <tbody>'
    + '                        <tr>'
    + '                          <td>'
    + '                            <p style="font-size:14px;line-height:24px;margin:0px;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif">Amazon Web Services will never email you and ask you to disclose or verify your password, credit card, or banking account number.</p>'
    + '                          </td>'
    + '                        </tr>'
    + '                      </tbody>'
    + '                    </table>'
    + '                  </td>'
    + '                </tr>'
    + '              </tbody>'
    + '            </table>'
    + '            <p style="font-size:12px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;padding:0 20px">This message was produced and distributed by Amazon Web Services, Inc., 410 Terry Ave. North, Seattle, WA 98109. © 2022, Amazon Web Services, Inc.. All rights reserved. AWS is a registered trademark of<!-- --> <a href="https://amazon.com" style="color:#2754C5;text-decoration:underline;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:14px" target="_blank">Amazon.com</a>, Inc. View our<!-- --> <a href="https://amazon.com" style="color:#2754C5;text-decoration:underline;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:14px" target="_blank">privacy policy</a>.</p>'
    + '          </td>'
    + '        </tr>'
    + '      </tbody>'
    + '    </table>'
    + '  </body>'
    + ''
    + '</html>'

// app.get("/", async (req, res) => {
export const sentEmail = async (req, res) => {
    const { data, error } = await resend.emails.send({
        from: "Invitaciones Happy Checho <onboarding@resend.dev>",
        // to: ["delivered@resend.dev"],
        // from: "Happy Checho <jfloresq1987@gmail.com>",
        to: ["jfloresq1987@gmail.com"],
        subject: "Descarga aquí tu Video Invitación",
        // html: "<strong>Descarga aquí tu Video Invitación del adjunto de este mail</strong>",
        attachments: [
            {
                // path: 'path/to/file/invoice.pdf',
                path: 'https://blijhwisxhocmojszgoy.supabase.co/storage/v1/object/sign/videos/video.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvdmlkZW8ubXA0IiwiaWF0IjoxNzE2Mzk3MDc5LCJleHAiOjE3MTcwMDE4Nzl9.tWzQ09D4e7D9GvxC0GpS6LyF2Wso0iEd4V7LFwy8suI&t=2024-05-22T16%3A57%3A57.900Z',
                // filename: 'invoice.pdf',
                filename: 'video.mp4',
            },
        ],
        html: html_template,
        text: 'Thanks for the payment',
    });

    if (error) {
        return res.status(400).json({ error });
    }

    res.status(200).json({ data });
};


import { supabase, supabaseAdmin } from '../libs/supabase.js';

// const stripe = new Stripe(STRIPE_PRIVATE_KEY);

// export const getCategoriesAll = async (req, res) => {

//     // const category_id = req.query.category_id;

//     const { data, error } = await supabase
//       .from('categories')
//       .select('*')
//     //   .eq('category_id', category_id)
//       .order('title', { ascending: true })

//     if (data) console.log(data)
//     if (error) console.log(error)

//     return res.json({
//         ok: true,
//         data,
//     });

//     // return res.json(data);
// };