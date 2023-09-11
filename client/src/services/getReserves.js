const getReserves = async(building, id) => {
    try {
      const response = await fetch("http://localhost:3100/rooms/" + building + "/" + id );
      const data = await response.json();
      const reserves = data[0]
      console.log(reserves)
      return reserves

    } catch (error) {
      console.log(error.message);
    }
  };
export {
    getReserves
}