import BookSearch from "../components/BookSearch"

function Home() {
  return (
    <div>
      <div
        className="flex h-screen items-center justify-center bg-cover bg-fixed bg-center opacity-70"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/18620051/pexels-photo-18620051/free-photo-of-books-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        }}
      >
        <BookSearch />
      </div>
    </div>
  )
}
export default Home
