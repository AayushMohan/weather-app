interface CurrentWeather {
 is_day: number
 temperature: number;
 time: string;
 weathercode: number;
 winddirection: number;
 windspeed: number;
}

interface DailyUnits {
 apparent_temperature_max: string;
 apparent_temperature_min: string;
 sunrise: string;
 sunset: string;
 temperature_2m_max: string;
 temperature_2m_min: string;
 time: string;
 uv_index_clear_sky_max: string;
 uv_index_max: string;
 weathercode: string;
}

interface Hourly {
 apparent_temperature: [number]
 precipitation: [number]
 rain: [number]
 relativehumidity_2m: [number]
 showers: [number]
 snow_depth: [number]
 snowfall: [number]
 temperature_2m: [number]
 time: [number]
 uv_index: [number]
 uv_index_clear_sky: [number]
 windgusts_10m: [number]
}

interface HourlyUnits {
 apparent_temperature: number
 precipitation: string
 precipitation_probability: string
 rain: string
 relativehumidity_2m: string
 showers: string
 temperature_2m: string
 time: string
 uv_index: string
 uv_index_clear_sky: string
}

interface Root {
 current_weather: CurrentWeather
 daily: Daily
 daily_units: DailyUnits
 elevation: Int
 generationtime_ms: Float
 hourly: Hourly
 hourly_units: HourlyUnits
 latitude: Float
 longitude: Float
 timezone: String
 timezone_abbreviation: String
 utc_offset_seconds: Int
}
