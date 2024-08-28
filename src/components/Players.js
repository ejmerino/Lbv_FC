import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Players() {
  const [players, setPlayers] = useState([]);
  const [sortBy, setSortBy] = useState('number'); // Estado para gestionar la columna de ordenamiento por defecto
  const [sortOrder, setSortOrder] = useState('asc'); // Estado para gestionar el orden ascendente/descendente

  useEffect(() => {
    // Reemplaza la URL con la URL correcta de tu API
    axios.get('http://127.0.0.1:8000/api/players/')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error fetching players:', error);
      });
  }, []);

  // Función para manejar el cambio de ordenamiento
  const handleSort = (field) => {
    if (field === sortBy) {
      // Cambia el orden si ya está ordenando por el mismo campo
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Cambia el campo de ordenamiento y establece el orden ascendente por defecto
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  // Función para ordenar los jugadores según el estado actual
  const sortedPlayers = () => {
    return [...players].sort((a, b) => {
      if (sortBy === 'number') {
        return sortOrder === 'asc' ? a.number - b.number : b.number - a.number;
      } else if (sortBy === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortBy === 'position') {
        return sortOrder === 'asc' ? a.position.localeCompare(b.position) : b.position.localeCompare(a.position);
      } else if (sortBy === 'goals') {
        return sortOrder === 'asc' ? a.goals - b.goals : b.goals - a.goals;
      } else if (sortBy === 'assists') {
        return sortOrder === 'asc' ? a.assists - b.assists : b.assists - a.assists;
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Jugadores Temporada 2024 / 2025</h1>
      <div className="overflow-x-auto">
        <table className="table-fixed w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/6 px-6 py-3 text-center text-sm uppercase tracking-wider">
                <button className="text-gray-300 focus:outline-none" onClick={() => handleSort('number')}>
                  Número
                  {sortBy === 'number' && (
                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      {sortOrder === 'asc' ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 8.293a1 1 0 0 1 1.414 0L10 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 11.707a1 1 0 0 0 1.414 0L10 10.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414z"
                        />
                      )}
                    </svg>
                  )}
                </button>
              </th>
              <th className="w-1/6 px-6 py-3 text-center text-sm uppercase tracking-wider">
                <button className="text-gray-300 focus:outline-none" onClick={() => handleSort('name')}>
                  Nombre
                  {sortBy === 'name' && (
                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      {sortOrder === 'asc' ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 8.293a1 1 0 0 1 1.414 0L10 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 11.707a1 1 0 0 0 1.414 0L10 10.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414z"
                        />
                      )}
                    </svg>
                  )}
                </button>
              </th>
              <th className="w-1/6 px-6 py-3 text-center text-sm uppercase tracking-wider">
                <button className="text-gray-300 focus:outline-none" onClick={() => handleSort('position')}>
                  Posición
                  {sortBy === 'position' && (
                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      {sortOrder === 'asc' ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 8.293a1 1 0 0 1 1.414 0L10 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 11.707a1 1 0 0 0 1.414 0L10 10.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414z"
                        />
                      )}
                    </svg>
                  )}
                </button>
              </th>
              <th className="w-1/6 px-6 py-3 text-center text-sm uppercase tracking-wider">
                <button className="text-gray-300 focus:outline-none" onClick={() => handleSort('goals')}>
                  Goles
                  {sortBy === 'goals' && (
                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      {sortOrder === 'asc' ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 8.293a1 1 0 0 1 1.414 0L10 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 11.707a1 1 0 0 0 1.414 0L10 10.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414z"
                        />
                      )}
                    </svg>
                  )}
                </button>
              </th>
              <th className="w-1/6 px-6 py-3 text-center text-sm uppercase tracking-wider">
                <button className="text-gray-300 focus:outline-none" onClick={() => handleSort('assists')}>
                  Asistencias
                  {sortBy === 'assists' && (
                    <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 20 20">
                      {sortOrder === 'asc' ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 8.293a1 1 0 0 1 1.414 0L10 9.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.293 11.707a1 1 0 0 0 1.414 0L10 10.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414z"
                        />
                      )}
                    </svg>
                  )}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers().map(player => (
              <tr key={player.id} className="border-b border-gray-200">
                <td className="text-center text-black px-6 py-4">{player.number}</td>
                <td className="text-center text-black px-6 py-4">{player.name}</td>
                <td className="text-center text-black px-6 py-4">{player.position}</td>
                <td className="text-center text-black px-6 py-4">{player.goals}</td>
                <td className="text-center text-black px-6 py-4">{player.assists}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Players;
