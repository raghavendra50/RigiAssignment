import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import People from "./components/People/People";
import Profile from "./components/Profile/Profile";
const App = () => {
  return (
    <div className="w-[100%] h-screen flex flex-col items-center bg-slate-50">
      <Header />
      <div className="w-[100%] lg:w-[1000px] flex-1 flex gap-3">
        <Profile />
        <Feed />
        <People />
      </div>
    </div>
  );
};

export default App;
