
import multer from 'multer';
import nc from 'next-connect';
import path from 'path';
import School from '../../models/School';

const upload = multer({
    storage: multer.diskStorage({
        destination: './public/schoolImages',
        filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
    }),
});

const handler = nc()
    .use(upload.single('image'))
    .post(async (req, res) => {
        const { name, address, city, state, contact, email_id } = req.body;
        const image = req.file ? `/schoolImages/${req.file.filename}` : '';

        try {
            await School.create({ name, address, city, state, contact, image, email_id });
            res.status(201).json({ message: 'School added successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to add school.' });
        }
    });

export default handler;
