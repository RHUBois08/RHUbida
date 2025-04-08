import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'apk', 'eBIDAmo.apk');
    try {
        const file = await fs.readFile(filePath);
        res.setHeader('Content-Disposition', 'attachment; filename="eBIDAmo.apk"');
        res.status(200).send(file);
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).send('Error downloading file.');
    }
}
