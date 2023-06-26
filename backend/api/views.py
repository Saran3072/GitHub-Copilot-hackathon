from django.http import JsonResponse, HttpResponse
import requests
from datetime import datetime

def index(request):
    return HttpResponse("Hello")
def weather(request, City=None):
    api_key = 'ab85dd7b9ac92a78104d3456d7142563'
    base_url = 'http://api.openweathermap.org/data/2.5/weather'
    try:
        # Send request to the server
        response = requests.get(f'{base_url}?q={City}&appid={api_key}')
        response.raise_for_status()  # Raise an exception if the status code is not 200
        weather_data = response.json()
        sunrise_timestamp = weather_data['sys']['sunrise']
        sunrise_time = datetime.fromtimestamp(sunrise_timestamp).strftime('%H:%M:%S')
        sunset_timestamp = weather_data['sys']['sunset']
        sunset_time = datetime.fromtimestamp(sunset_timestamp).strftime('%H:%M:%S')
        return JsonResponse({"weather_description": weather_data['weather'][0]['description'],
                             "temperature": round(weather_data['main']['temp'] - 273.15, 2),
                             "humidity": weather_data['main']['humidity'],
                             "wind_speed": weather_data['wind']['speed'],
                             "wind_direction": weather_data['wind']['deg'],
                             "cloudiness": weather_data['clouds']['all'],
                             "sunrise_time": sunrise_time,
                             "sunset_time": sunset_time})

    except requests.exceptions.HTTPError as http_err:
        return HttpResponse('City not available in the dataset')
    except requests.exceptions.RequestException as err:
        return HttpResponse('Error occurred')
    except KeyError as key_err:
        return HttpResponse('Invalid response received from the server. Missing key.')
    except Exception as exc:
        return HttpResponse('There was a problem.')
