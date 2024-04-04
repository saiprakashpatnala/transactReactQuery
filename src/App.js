
import{QueryClientProvider,QueryClient} from "@tanstack/react-query"
import Five from "./components/Project-5";

function App() {
  let queryClinet=new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClinet}>
       <Five/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
