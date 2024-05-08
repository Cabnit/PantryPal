import requests

url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
response = requests.get(url)
data = response.json()

print(data["hdurl"])