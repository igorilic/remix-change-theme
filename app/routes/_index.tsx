import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const changeTheme = () => {
    const html = document.querySelector("html");
    if (html) {
      if (html.hasAttribute("data-mode")) {
        html.removeAttribute("data-mode");
      } else {
        html.setAttribute("data-mode", "dark");
      }
    }
  };
  return (
    <div className="bg-white dark:bg-primary-50">
      <button className="text-primary-900" onClick={changeTheme}>
        Change Theme
      </button>
      <ul>
        <li className="dark:text-primary-500">
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
