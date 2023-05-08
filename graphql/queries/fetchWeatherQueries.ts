import { gql } from '@apollo/client'

const fetchWeatherQuery = gql`
  query MyQuery (
   $current_weather: String
   $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability,precipitation,relativehumidity_2m,uv_index_clear_sky_max,uv_index_max,sunrise,sunset"
  )
`