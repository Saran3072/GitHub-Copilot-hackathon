import requests
import json
from datetime import datetime

def get_weather(city):
    api_key = 'ab85dd7b9ac92a78104d3456d7142563'
    base_url = 'http://api.openweathermap.org/data/2.5/weather'

    try:
        # Send request to the server
        response = requests.get(f'{base_url}?q={city}&appid={api_key}')
        response.raise_for_status()  # Raise an exception if the status code is not 200

        # Convert the JSON response into a Python dictionary
        weather_data = response.json()

        # Print the weather description
        print(f'Current weather description in {city}:')
        print(weather_data['weather'][0]['description'])

        # Print the current temperature in Celsius
        temperature = weather_data['main']['temp'] - 273.15  # Convert temperature from Kelvin to Celsius
        print(f'Current temperature in {city}: {temperature:.2f} °C')

        # Print the current humidity
        humidity = weather_data['main']['humidity']
        print(f'Current humidity in {city}: {humidity}%')

        # Print the current wind speed
        wind_speed = weather_data['wind']['speed']
        print(f'Current wind speed in {city}: {wind_speed} m/s')

        # Print the current wind direction
        wind_direction = weather_data['wind']['deg']
        print(f'Current wind direction in {city}: {wind_direction} degrees')

        # Print the cloudiness
        cloudiness = weather_data['clouds']['all']
        print(f'Current cloudiness in {city}: {cloudiness}%')

        # Convert the sunrise time from timestamp to hh:mm:ss format
        sunrise_timestamp = weather_data['sys']['sunrise']
        sunrise_time = datetime.fromtimestamp(sunrise_timestamp).strftime('%H:%M:%S')
        print(f'Sunrise time in {city}: {sunrise_time}')

        # Convert the sunset time from timestamp to hh:mm:ss format 
        sunset_timestamp = weather_data['sys']['sunset']
        sunset_time = datetime.fromtimestamp(sunset_timestamp).strftime('%H:%M:%S')
        print(f'Sunset time in {city}: {sunset_time}')

        #get rain volume
        precipitation=weather_data['rain']['1h']
        print(f'Precipitation volume in {city}: {precipitation} mm')

        #print precipitation volume
        precipitation=weather_data['rain']['1h']
        print(f'Precipitation volume in {city}: {precipitation} mm')

    except requests.exceptions.HTTPError as http_err:
        print('City not availble in the dataset')
    except requests.exceptions.RequestException as err:
        print(f'Error occurred: {err}')
    except KeyError as key_err:
        print(f'Invalid response received from the server. Missing key: {key_err}')
    except Exception as exc:
        print(f'There was a problem: {exc}')


# Input the city name
city = input('Enter the city name: ')
get_weather(city)