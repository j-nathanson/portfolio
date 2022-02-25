import ReactFullpage from '@fullpage/react-fullpage';
import About from './components/About';
import Projects from './components/Projects';

function App() {

  const anchors = ["firstPage", "secondPage", "thirdPage", "fourthPage"];

  return (
    <ReactFullpage
      anchors={anchors}
      scrollingSpeed={1000}
      navigation={true}
      loopBottom={true}
      scrollBar={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section s1" >
              <About />
            </div>
            <div className="section s2">
              <Projects />
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
