const getRooms = async(edificio) => {
    try {
      const response = await fetch("http://localhost:3100/rooms/" + edificio);
      const data = await response.json();
      console.log(data);
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
export {
    getRooms
}