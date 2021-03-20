import "./App.css";
import ProfileComp from "./Profile/ProfileComp";

function App() {
    const handlename = (name) => {
        alert(`My name is ${name}`);
    };
    // const handleName = (fullName) => {
    // alert(`My name is ${fullName}`);
    // };
    return (
        <div className="App">
            <ProfileComp
                name=" Ahmed Ben Miled"
                bio="Welcome to my Bio"
                profession="Student"
                handlename={handlename}
            >
                <img
                    style={{
                        height: "500px",
                        width: "500px",
                        borderRadius: "20px",
                    }}
                    src="https://i.pinimg.com/originals/81/04/0a/81040ae7459168b9c0108be30ce6eba6.jpg"
                    alt="taraji photo"
                />
            </ProfileComp>
        </div>
    );
}

export default App;
