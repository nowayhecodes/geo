# Geo

To use it just do a `docker-compose up -d geo` and it will pull `node` and `mongo` images, build the containers and runs on port 5000.

## Routes

`GET /api/v1/partners` will list all partners

`GET /api/v1/partner/:id` will show an especific partner

`POST /api/v1/partner` will create a partner sending a json body like:

```json
{
	"tradingName": "Napa Drinks",
	"ownerName": "Napa",
	"document": "111111110001/12",
	"coverageArea": {
		"coordinates": [
			[[[30, 20], [45, 40], [10, 40], [30, 20]]], 
			[[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
		]
	},
	"address": {
		"street": "Rua Juvenal de Jerusalém, 62 - São Paulo - SP - CEP 04859-060"
	}
}
```

Obviously, you can send an array of objects representing partners to create as many as you want.

And...

`POST /api/v1/partner/search` searchs for a partner sending a json body like:

```json
{
	"lng": -46.708285,
	"lat": -23.7669
}
```