# Reveal.js Presentation

## Running the Presentation Locally

To run the `reveal.js` presentation locally, you can use the `http-server` package. Follow the steps below:

### Step 1: Install `http-server`

If you haven't already installed `http-server`, you can install it globally using npm:

```bash
npm install -g http-server
```

### Step 2: Navigate to the Presentation Directory
Change to the directory containing your reveal.js presentation:

### Step 3: Start the Web Server

```bash
http-server
```

### Step 4: Open the Presentation in Your Browser
[http://localhost:8080](http://localhost:8080)


### Als PDF drucken
Um die Präsentation als PDF zu drucken, füge `?print-pdf` an die URL an. Zum Beispiel:
http://127.0.0.1:8080/slides.html?print-pdf

1. Öffne den Druckdialog im Browser (STRG/CMD+P).
2. Ändere die Einstellung Ziel zu Als PDF speichern.
3. Ändere das Layout zu Querformat.
4. Ändere die Ränder zu Keine.
5. Aktiviere die Option Hintergrundgrafiken.
6. Klicke auf Speichern 