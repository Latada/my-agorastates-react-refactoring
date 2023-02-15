import { useState } from "react";

export const Discussion = ({ discussion }) => {
  const { id, createdAt, title, url, author, answer, bodyHTML, avatarUrl } = discussion;

  const [storyIsOpen, setOpen] = useState(false);
  const [answerIsOpen, setAnswerIsOpen] = useState(false);

  const contentOpen = () => {
    setOpen(storyIsOpen => !storyIsOpen);
  }
  const answerOpen = () => {
    if (answer !== null) {    
      setAnswerIsOpen(answerIsOpen => !answerIsOpen);
    }
  }
  
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
        <div className="discussion__text" onClick={() => contentOpen()}>본문보기</div>
      </div>
      <div className={storyIsOpen ? "discussion__story show" : "discussion__story"} dangerouslySetInnerHTML={{__html: bodyHTML}}></div>
      {/* // answer 컴포넌트 만들어서 다시 수정하기
      <div className="discussion__answered" onClick={() => answerOpen()}>
        <p>{answer ? "답변보기" : "답변없음"}</p>
      </div>
      <div className={answerIsOpen ? "answer__container show" : "answer__container"}>
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image" src={avatarUrl} alt={`avatar of ${author}`}/>
        </div>
      </div> */}
    </li>
  )
}