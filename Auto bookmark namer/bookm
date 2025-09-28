chrome.bookmarks.onCreated.addListener(async (id, bookmark) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: () => {
        const title = document.title;
        const h1 = document.querySelector("h1")?.innerText;
        const meta = document.querySelector(
          'meta[name="description"]'
        )?.content;
        return h1 || meta || title;
      },
    },
    (results) => {
      const newName = results[0].result;
      chrome.bookmarks.update(id, { title: newName });
    }
  );
});
