const express = require('express');
const axios = require('axios');
const app = express();

// משתנה הסביבה שהגדרנו ב-Render
const RENDER_API_KEY = process.env.RENDER_API_KEY;

app.get('/', (req, res) => {
    res.redirect('/apps');
});

app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${RENDER_API_KEY}`,
                'Accept': 'application/json'
            }
        });

        // מחזיר את רשימת האפליקציות כפי שהן מגיעות מ-Render
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching services:', error.message);
        res.status(500).json({
            error: 'Failed to fetch services from Render',
            details: error.response ? error.response.data : error.message
        });
    }
});

// הגדרת פורט דינמי עבור Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});