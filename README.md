# Harold Rajesh George Kulangara — Portfolio (`Portfolio_GitHub_Ready`)

This folder contains the optimized, GitHub Pages-compatible static portfolio website for **Harold Rajesh George Kulangara** (Grade 12 Student, Builder, Filmmaker & Author).

## Folder Structure

```text
Portfolio_GitHub_Ready/
│
├── index.html                  # Main entry point (~16 KB, reduced from ~50 MB)
├── README.md                   # Project overview & GitHub Pages deployment guide
│
└── assets/
    ├── images/                 # All 47 optimized portfolio images (4.30 MB total, down from 16.13 MB)
    ├── documents/              # All 22 portfolio PDF documents + 10 DOCX documents
    ├── css/
    │   └── styles.css          # Stylesheet & responsive 16:9 YouTube video embed layout
    └── js/
        └── scripts.js          # Portfolio data manifest, PDF links, certificates & modal viewer
```

## Key Optimizations Performed

1. **HTML Size Reduction (`49.81 MB` → `~16 KB`):**
   - Removed all embedded Base64 images and PDFs from `index.html`.
   - Extracted styling into `assets/css/styles.css` and interactive logic into `assets/js/scripts.js`.
2. **Image Optimization (`16.13 MB` → `4.30 MB`):**
   - Extracted and compressed all 47 portfolio images and 23 certificates into `assets/images/` with clean, URL-safe, lowercase filenames.
3. **PDF Document Linking (`assets/documents/`):**
   - Placed all 22 portfolio PDFs (including books, reports, PCB schematics, certificates of incorporation, exhibitor passes, and UN briefs) into `assets/documents/`.
   - Added direct **"View PDF ↗"** and **"Download PDF ↓"** buttons on every project card and inside the Project Files modal.
4. **Responsive YouTube Video Integration:**
   - Replaced local `.mp4` video dependencies with a responsive 16:9 YouTube `<iframe>` embed for [Mahaakaavya: The NEET Story — Official Trailer](https://www.youtube.com/watch?v=o9QupZzX-hA&t=1s) in both the Hero section and the Project 03 (`MAHAAKAAVYA The NEET STORY`) showcase.

## How to Deploy to GitHub Pages

1. Create a new repository on GitHub (for example, `portfolio` or `<your-github-username>.github.io`).
2. Upload the **contents** of `Portfolio_GitHub_Ready` (`index.html`, `README.md`, and the `assets/` folder) to the root of your repository.
3. On GitHub, go to **Settings → Pages**:
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Select your branch (`main`) and folder (`/ (root)`), then click **Save**.
4. Your portfolio website will be published at `https://<your-github-username>.github.io/<repo-name>/` within 1–2 minutes.
