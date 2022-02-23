import ReactFullpage from '@fullpage/react-fullpage';

function App() {

  const anchors = ["firstPage", "secondPage", "thirdPage", "fourthPage"];

  return (
    <ReactFullpage
      anchors={anchors}
      scrollingSpeed={1000}
      navigation='true'
      loopBottom='true'
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div><h1>nav</h1></div>
            <div className="section s1">
              <p>about</p>

            </div>
            <div className="section s2">
              <p>projects</p>

            </div>
            <div className="section s3">
              <p>certifications</p>

            </div>
            <div className="section s4">
              <p>contact</p>
              <button onClick={() => fullpageApi.moveTo('secondPage')}>
                Click me to move up
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
