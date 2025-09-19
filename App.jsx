import { useState } from "react";

export default function App() {
  const [news] = useState([
    { id: 1, title: "India wins Asia Cup", summary: "India beats Pakistan in cricket.", category: "Sports", source: "BBC", url: "https://bbc.com" },
    { id: 2, title: "AI transforming industries", summary: "AI will impact jobs worldwide.", category: "Technology", source: "TOI", url: "https://toi.com" },
    { id: 3, title: "Parliament debates reforms", summary: "New education reforms discussed.", category: "Politics", source: "The Hindu", url: "https://thehindu.com" }
  ]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📰 News Landscape</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((article) => (
          <div key={article.id} className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.summary}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{article.category}</span>
              <span>{article.source}</span>
            </div>
            <a href={article.url} target="_blank" className="mt-4 inline-block text-blue-600 hover:underline">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
