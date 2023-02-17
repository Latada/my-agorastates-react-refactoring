
import { useState } from "react";

export const Discussion = ({ discussion }) => {
  const { createdAt, title, author, answer, bodyHTML, avatarUrl  } = discussion;

  const [storyIsOpen, setOpen] = useState(false);
  const [answerIsOpen, setAnswerIsOpen] = useState(false);

  const contentOpen = () => {
    setOpen(storyIsOpen => !storyIsOpen);
  }
  const answerOpen = () => {  
      setAnswerIsOpen(answerIsOpen => !answerIsOpen);
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
      <div className={storyIsOpen ? "discussion__story show" : "discussion__story"}dangerouslySetInnerHTML={{__html: bodyHTML}}></div>
      <div className={answer !== null ? "discussion__answered" : "discussion__answered noReply"} onClick={() => answerOpen()}>
        {answer === null ? <p>답변없음</p> : <p>답변보기</p>}
      </div>
      {answer === null ? "" : 
      <div className={answerIsOpen ? "answer__container show" : "answer__container"}>
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image" src={answer.avatarUrl} alt={`avatar of ${answer.author}`} />
          <div className="discussion__information">
            <span className="author__name">{answer.author}</span>
            <span className="author__date">{answer.createdAt}</span>
          </div>
        </div>
        <div className="discussion__content">
          <p className="answer__comment" dangerouslySetInnerHTML={{__html: answer.bodyHTML}}></p>
        </div>
      </div>
      }
    </li>
  )
}