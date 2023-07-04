import "./App.css";
import Form from "./Form";

function App() {

  const dataList = {
    prefectures: [
      {
        id: 1,
        name: "ノーマル",
      },
      {
        id: 2,
        name: "ほのお",
      },
      {
        id: 3,
        name: "みず",
      },
      {
        id: 3,
        name: "くさ",
      },
    ],
    municipalities: [
      {
        id: 1,
        prefectureId: 1,
        name: "みどり",
      },
      {
        id: 2,
        prefectureId: 1,
        name: "あお",
      },
      {
        id: 1,
        prefectureId: 1,
        name: "あか",
      },
      {
        id: 1,
        prefectureId: 1,
        name: "むらさき",
      },
    ],
  };
  const datas = JSON.stringify(dataList);
  return (
    <div>
      <Form title={"新規登録"} data={datas} />
    </div>
  );
}

export default App;