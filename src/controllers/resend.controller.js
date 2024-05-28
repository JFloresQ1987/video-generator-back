import { resend } from '../libs/resend.js';
// import { html_template } from '../libs/html-template.js';
import { getHtmlTemplate } from '../libs/html-template.js';

// app.get("/", async (req, res) => {
export const sentEmail = async (req, res) => {

    const id = req.query.id;
    //   const category_id = req.params.category_id;    
    const user_email = req.query.user_email;
    const video_rendered_url = req.query.video_rendered_url;

    //TODO: Utilizar el id para concatenar con el link del video

    const { data, error } = await resend.emails.send({
        from: "Invitaciones Happy Checho <onboarding@resend.dev>",
        // to: ["delivered@resend.dev"],
        // from: "Happy Checho <jfloresq1987@gmail.com>",
        to: [user_email],
        // to: ["jfloresq1987@gmail.com"],        
        subject: "Descarga aquí tu Video Invitación Super Exclusivo!",
        // html: "<strong>Descarga aquí tu Video Invitación del adjunto de este mail</strong>",
        attachments: [
            {
                // path: 'path/to/file/invoice.pdf',
                // path: 'https://blijhwisxhocmojszgoy.supabase.co/storage/v1/object/sign/videos/video.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvdmlkZW8ubXA0IiwiaWF0IjoxNzE2Mzk3MDc5LCJleHAiOjE3MTcwMDE4Nzl9.tWzQ09D4e7D9GvxC0GpS6LyF2Wso0iEd4V7LFwy8suI&t=2024-05-22T16%3A57%3A57.900Z',
                path: video_rendered_url,
                // filename: 'invoice.pdf',
                filename: 'invitación.mp4',
            },
        ],
        // html: html_template,
        html: getHtmlTemplate(id),
        text: 'Gracias por su compra',
    });

    if (error) {
        return res.status(400).json({ error });
    }

    res.status(200).json({ data });
};