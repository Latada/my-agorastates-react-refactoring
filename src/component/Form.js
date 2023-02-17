import { useState } from "react";

export const Form = ({addDiscussion}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const author = event.target[0].value;
    const title = event.target[1].value;
    const bodyText = event.target[2].value;
    addDiscussion({ author, title, bodyText });
  };

  const [formIsOpen, setFormOpen] = useState(false);
  const formOpen = () => {
    setFormOpen(formIsOpen => !formIsOpen)
  }

  return (
    <section className="form__container">
      <div className="form__wrapper">
        <h2 className="form__title" onClick={() => formOpen()}>질문을 남겨주세요!</h2>
        <form action="" method="get" className={formIsOpen ? "form show" : "form"} onSubmit={handleSubmit}>
          <div className="form__input--wrapper">
            <div className="form__input--name">
              <label htmlFor="name">별명</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form__input--title">
              <label htmlFor="title">주제</label>
              <input type="text" name="title" id="title" required />
            </div>
            <div className="form__textbox">
              <label htmlFor="story">남기는 글</label>
              <textarea name="story" id="story" placeholder="질문을 작성하세요" required />
            </div>
          </div>
          <div className="form__submit">
            <input type="submit" value="등록" />
          </div>
        </form>
      </div>
    </section>
  )
}