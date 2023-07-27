import './style.css'

function App() {
  const appTitle = "Today I Learned";

  return (
    <>
    {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned Logo" />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>


      <NewFactForm />
      <main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return (
    <>
      <form className='fact-form'>
        New Fact form
      </form>
    </>
  )
}

function CategoryFilter() {
  return (
    <aside>Category Filter</aside>
  )
}

function FactList() {
  return (
    <p>Fact List</p>
  )
}

export default App;
