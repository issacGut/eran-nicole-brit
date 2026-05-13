# ברית לבנם של ערן וניקול - דף טעינה

דף טעינה סטטי ויפה לאתר אישורי ההגעה לברית.

## מה זה עושה?

דף זה משמש כדף טעינה חכם ש:
- מציג מסך טעינה יפה ורגוע בעברית
- בודק אם האתר הראשי מוכן (Render)
- מעביר אוטומטית לאתר הראשי כשהוא מוכן
- מאפשר כניסה ידנית בכל רגע נתון

## איך זה עובד?

1. הדף נטען ומציג מסך טעינה יפה
2. כל 4 שניות הדף בודק את ה-endpoint `/health` של האתר הראשי
3. כשהאתר הראשי מוכן (ok === true), הדף מעביר אוטומטית לאתר הראשי
4. יש כפתור "כניסה לאתר" שתמיד זמין לכניסה ידנית

## בדיקה מקומית

פשוט פתח את הקובץ `index.html` בדפדפן:

```bash
# ב-Windows
start index.html

# ב-Mac/Linux
open index.html
```

או פשוט לחץ פעמיים על הקובץ `index.html`.

## פריסה ל-GitHub Pages

### שלב 1: דחוף ל-GitHub

```bash
cd eran-nicole-brit-loader
git init
git add .
git commit -m "Initial commit - Brit Milah loading page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/eran-nicole-brit-loader.git
git push -u origin main
```

### שלב 2: הפעל GitHub Pages

1. פתח את ה-repository ב-GitHub
2. לחץ על Settings
3. לחץ על Pages בסרגל הצד
4. תחת "Build and deployment", בחר Source: Deploy from a branch
5. בחר Branch: main
6. לחץ Save

### שלב 3: קבל את הכתובת

אחרי כמה דקות, GitHub Pages יספק כתובת כמו:
```
https://YOUR_USERNAME.github.io/eran-nicole-brit-loader/
```

## שימוש

- **שלחו את הכתובת של GitHub Pages לאורחים**, לא את הכתובת של Render
- האורחים יראו דף טעינה יפה ורגוע
- הדף יעביר אותם אוטומטית לאתר הראשי כשהוא מוכן
- אם האתר הראי נמצא במצב שינה, הדף ימתין עד שהוא יתעורר

## קבצים

- `index.html` - הדף הראשי
- `style.css` - העיצוב
- `script.js` - הלוגיקה של בדיקת הבריאות וההעברה
- `README.md` - הקובץ הזה
- `.nojekyll` - מונע ש-GitHub Pages יעבד את הקבצים

## טכנולוגיות

- HTML סטטי
- CSS סטטי
- JavaScript סטטי
- אין backend
- אין מסד נתונים
- אין סודות

## תמיכה במובייל

הדף מותאם לכל גדלי מסך:
- 320px
- 360px
- 390px
- 430px
- 768px
- Desktop

## עיצוב

- רקע קרמי רך
- כרטיס הזמנה ממורכז
- פינות מעוגלות
- צל עדין
- נקודות טעינה עדינות
- טקסט גדול וקריא
- כפתור גדול ונוח למגע
- RTL מלא
- אין גלילה אופקית
- מצוין בטלפונים ניידים
