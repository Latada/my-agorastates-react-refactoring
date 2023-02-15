export const Discussion = ({ discussion }) => {
  const { id, createdAt, title, url, author, answer, bodyHTML, avatarUrl } = discussion;
  return (
    <li className="discussion__container">
      <h2 className="discussion__title">{title}</h2>
      <div className="discussion__content">
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image" src={avatarUrl} alt={`avatar of ${author}`} />
          <div className="discussion__information">
            <span className="author__name">{author}</span>
            <span className="author__date">{createdAt}</span>
          </div>
        </div>
        <div className="discussion__text">본문보기</div>
      </div>
      <div className="discussion__story">{bodyHTML}</div>
      <div className="discussion__answered">
        <p>{answer ? "답변보기" : "답변없음"}</p>
      </div>
      <div className="answer__container">
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image" src={avatarUrl} alt={`avatar of ${author}`}/>
        </div>
      </div>
    </li>
  )
}