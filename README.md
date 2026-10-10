# Promptly

A simple AI chat assistant built with React and Vite. It has a landing page and a chat page that talks to a free LLM via [OpenRouter](https://openrouter.ai/).

## Features

- Landing page with a "Try Now" / "Start Chatting" entry point
- Chat page with message history, a typing indicator, and markdown-rendered bot replies
- Stop/abort an in-flight request mid-response
- Inline error messages in the chat if the API call fails

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for routing (`/` and `/ChatPage`)
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Axios](https://axios-http.com/) for API calls
- [react-markdown](https://github.com/remarkjs/react-markdown) to render bot replies
- [lucide-react](https://lucide.dev/) for icons
- [OpenRouter](https://openrouter.ai/) as the LLM provider (currently using the free model `liquid/lfm-2.5-2.6b:free`)

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your API key

Create an `.env` file in the project root (it's already gitignored) with your OpenRouter API key:

```
VITE_API_KEY=your_openrouter_api_key_here
```

Get a free key at [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys).

### 3. Run the dev server

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

| Command           | Description                        |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Start the Vite dev server           |
| `npm run build`    | Build for production                |
| `npm run preview`  | Preview the production build        |
| `npm run lint`     | Run ESLint                          |

## Project structure

```
src/
  Components/
    Landingpage.jsx   # Marketing/landing page, routes to /ChatPage
    Chatpage.jsx       # Chat UI + OpenRouter API integration
  App.jsx               # Route definitions
  main.jsx              # App entry point
```

## Notes

- The free OpenRouter model currently used (`liquid/lfm-2.5-2.6b:free`) can change availability over time — OpenRouter sometimes retires or rate-limits free models. If the chat stops responding, check the model slug in `handleGetResponse` inside [Chatpage.jsx](src/Components/Chatpage.jsx) against [openrouter.ai/models](https://openrouter.ai/models) (filter by `:free`).
- OpenRouter can return an HTTP 200 response with an `error` field instead of `choices` when a provider's free tier is temporarily saturated — this is already handled and surfaced as an inline chat error rather than crashing.
