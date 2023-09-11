const putNewItem = async (roomId, updatedReserves) => {
  try {
    const response = await fetch(`http://localhost:3100/rooms/${roomId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedReserves),
    });

    console.log(roomID, updatedReserves)

    if (!response.ok) {
      throw new Error('Error al actualizar las reservas');
      
    }

    return await response.json();
  } catch (error) {
    console.error('Error al actualizar las reservas:', error);
    throw error;
    
  }
};

export {
    putNewItem
}