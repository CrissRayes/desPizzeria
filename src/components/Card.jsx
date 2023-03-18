import formatCurrency from '../helpers/formatCurrency'
import { useNavigate } from 'react-router-dom'

export const Card = ({ id, nombre, precio, ingredientes, imagen }) => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
  ]

  const navigate = useNavigate()

  const handleVerMas = () => {
    navigate(`/pizza/${id}`)
  }

  return (
    <div className='col'>
      <div
        className='card h-100 shadow border-0'
        style={{ width: '18rem' }}
      >
        <img
          src={imagen}
          className='card-img-top'
          alt={nombre}
        />
        <div className='card-body'>
          <div style={{ height: '50px', overflow: 'auto' }}>
            <ul className='lista-ingredientes'>
              {ingredientes.map((ingrediente, index) => (
                <li
                  className={`badge rounded-pill bg-${colors[index]} text-white me-1`}
                  key={index}
                >
                  {ingrediente}
                </li>
              ))}
            </ul>
          </div>
          <h3 className='card-title text-capitalize mb-3'>{nombre}</h3>

          <div className='mb-3 fw-bolder text-end'>
            {formatCurrency(precio)}
          </div>
          <div className='d-flex justify-content-between'>
            <button
              className='btn btn-primary'
              onClick={handleVerMas}
            >
              Ver más
            </button>
            <button className='btn btn-success'>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  )
}
