import './App.css';

function App() {
  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" name="username" placeholder="ユーザー名"/>
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" name="password" placeholder="パスワード"/>
          </div>
          <button className="submitButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
