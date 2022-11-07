import MainLayout from "./layouts/main_layout";

function App() {
  // const bears = useExampleStore((state) => state.bears);
  // const increase = useExampleStore((state) => state.increasePopulation);
  // const reset = useExampleStore((state) => state.removeAllBears);


  return (
    // <div className={`h-screen w-full flex bg-gray-300 flex-col ${darkMode && 'dark'}`}>
    <MainLayout />
  );
}

export default App;
