import { Provider } from 'react-redux';
import './App.css';
import store from './store'
import SearchBar from './components/SearchBar'
import SelectedVideo from './components/SelectedVideo'
import VideoList from './components/VideoList'


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
          <div className="video-details"> 
            <SelectedVideo/>
            <VideoList /> 
          </div>
      </div>
    </Provider>
  );
}

export default App;
