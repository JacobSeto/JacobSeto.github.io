export default function ArticleCard() {
  return (
    <div className="article-card">
      <div className="article-left">
        <p>
          Read my article about Cornell&apos;s{" "}
          <a href="https://news.cornell.edu/stories/2025/03/dgas-first-game-jam-gives-game-developers-chance-level" target="_blank" rel="noreferrer">
            first large-scale Game Jam
          </a>
          !
        </p>
      </div>
      <div className="article-right">
        <img src="/images/Featured Article.webp" alt="Featured article promo" />
      </div>
    </div>
  )
}
