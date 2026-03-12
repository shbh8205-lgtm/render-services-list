# Render Services Monitor (Node.js API)

אפליקציית Node.js Express המציגה את רשימת השירותים (Services) הפעילים בחשבון ה-Render שלי באמצעות ה-API הרשמי.

## 🚀 תיאור הפרויקט
הפרויקט נבנה כחלק ממשימת פריסת אפליקציות לענן. הוא מתחבר ל-Render API ומחזיר נתוני JSON על כל ה-Services המותקנים, כולל סטטוס, סוג וכתובת URL.

## 🛠 טכנולוגיות
* **Node.js**
* **Express.js** (שרת Web)
* **Axios** (ביצוע קריאות HTTP ל-API)
* **Render API**

## ⚙️ הגדרות ומשתני סביבה (Environment Variables)
כדי שהאפליקציה תעבוד, יש להגדיר את המשתנה הבא ב-Render (או בקובץ `.env` מקומי):

* `RENDER_API_KEY`: ה-API Key האישי שנוצר בהגדרות החשבון ב-Render.

## 📍 Endpoints
* **GET `/apps`**: מחזיר רשימה של כל השירותים בחשבון בפורמט JSON.

## 🔗 קישורים רלוונטיים
* **כתובת ה-API ב-Render:** [הדביקי כאן את הקישור של אפליקציית ה-Node שלך]
* **פרויקט TodoList (Client):** [הדביקי כאן את הקישור של ה-Static Site]
* **פרויקט TodoList (Server):** [הדביקי כאן את הקישור של ה-Web Service של ה-Dotnet]
