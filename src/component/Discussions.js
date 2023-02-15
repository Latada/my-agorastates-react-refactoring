import { Discussion } from "./Discussion";

export const Discussions = ({ discussions }) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {discussions.map((discussion) => { // 전체 discussion 불러오기
          return (
            <Discussion key={discussion.id} discussion={discussion}/> // discussion 컴포넌트
          )
        })}
      </ul>
    </section>
  );
};