import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="h-[100vh] bg-slate-900">
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} alt="ChitChat Logo"></img>
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div class="bg-white max-w-sm mx-auto rounded-xl p-6 flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src={logo} alt="ChitChat Logo"></img>
        </div>
        <div>
          <div class="text-xl text-black font-medium">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>

    
  );
}

export default App;
