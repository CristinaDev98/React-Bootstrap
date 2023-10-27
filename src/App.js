import './App.css';
import CollapsibleExample from './components/Navbar';
import Post from './components/Post';


function App() {
return (
<div className="App">
    <CollapsibleExample />
    <header class="py-5 bg-light border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder">Welcome to Blog Home!</h1>
                <p class="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
            </div>
        </div>
    </header>
    <Post />
    <footer class="py-5 bg-dark">
        <div class="container">
            <p class="m-0 text-center text-white">Copyright © Your Website 2023</p>
        </div>
    </footer>
</div>
);
}

export default App;
