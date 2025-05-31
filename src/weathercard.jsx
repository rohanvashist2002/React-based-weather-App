
export default function WeatherCard({ weatherData }) {
   
  return (
    <div className="weather-card" style={styles.card}>
      <h2 style={styles.title}>Current Weather</h2>
      
      <div style={styles.mainCity}>
        {(weatherData.city)}
      </div>
      <div>
        { weatherData.humidity>80?<i class="fa-solid fa-cloud"></i>:weatherData.temp>15?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-umbrella"></i>}
      </div>
      <div style={styles.mainTemp}>
        {Math.round(weatherData.temp)}°C
      </div>
      
      <div style={styles.description}>
        {weatherData.description.charAt(0).toUpperCase() + weatherData.description.slice(1)}
      </div>
      
      <div style={styles.details}>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Feels like:</span>
          <span style={styles.detailValue}>{Math.round(weatherData.feelsLike)}°C</span>
        </div>
        
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Humidity:</span>
          <span style={styles.detailValue}>{weatherData.humidity}%</span>
        </div>
        
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>High/Low:</span>
          <span style={styles.detailValue}>
            {Math.round(weatherData.temMAx)}°/{Math.round(weatherData.tempMin)}°
          </span>
        </div>
      </div>
    </div>
  );
};

// Inline styles (you can move these to a CSS file if preferred)
const styles = {
  card: {
    backgroundColor: '#C4E1E6',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    maxWidth: '300px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop:'80px'
    
  },
  title: {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  mainCity: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '10px 0',
  },
  mainTemp: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: '10px 0',
  },
  description: {
    fontSize: '1.2rem',
    color: '#254D70',
    marginBottom: '20px',
    textTransform: 'capitalize',
  },
  details: {
    borderTop: '1px solid #eee',
    paddingTop: '15px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px 0',
  },
  detailLabel: {
    color: '#131D4F',
    fontWeight:'525'
  },
  detailValue: {
    color: '#2c3e50',
    fontWeight: '500',
  }
};

