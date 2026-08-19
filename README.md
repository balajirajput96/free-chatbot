# Free Local Chatbot

A small, private, offline-first chatbot that runs directly in a browser. It does not require GitHub Copilot, an API key, a subscription, a server, or a build step.

> **Privacy:** The application contains no network calls. Conversation history is stored only in the browser's local storage and can be cleared or exported at any time.

## Run it

Download or clone the repository and open `index.html` in a modern browser. The chatbot works from a local file; no package installation or server is required.

```bash
git clone https://github.com/balajirajput96/free-chatbot.git
cd free-chatbot
# Open index.html in your browser
```

For a local static server, use any simple server you already have available, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Included features

The interface supports bilingual English/Hindi prompts, accessible chat output, common greetings, time and date responses, privacy and focus tips, local conversation history, transcript export, and one-click clearing. It is intentionally rule-based so it remains free and does not silently send user messages to an external service.

## What it is not

This is not a general-purpose hosted LLM and it does not perform live web search, access GitHub accounts, read private files, or execute commands. Advanced AI features should be added only through a separately reviewed provider integration, with credentials kept outside the repository and outside client-side JavaScript.

## Verification

The project is a static single-file application. Verification consists of checking that `index.html` is present, contains no external script or stylesheet dependency, and has no credential-like literals. Use the browser's developer console only for local debugging; do not paste personal credentials into the page.

## License

MIT. See `LICENSE`.
