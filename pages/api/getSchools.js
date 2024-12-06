
import School from '../../../models/School';

export default async (req, res) => {
    try {
        const schools = await School.findAll();
        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch schools.' });
    }
};
