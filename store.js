const storeList = [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [77.2090, 28.6139]
        },
        "properties": {
            "name": "Domino's Connaught Place",
            "address": "Block A, Connaught Place, New Delhi, Delhi 110001",
            "phone": "011 4567 8901",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [72.8777, 19.0760]
        },
        "properties": {
            "name": "Pizza Hut Andheri",
            "address": "Link Road, Andheri West, Mumbai, Maharashtra 400058",
            "phone": "022 2674 5678",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [77.5946, 12.9716]
        },
        "properties": {
            "name": "Domino's Koramangala",
            "address": "80 Feet Road, Koramangala, Bengaluru, Karnataka 560034",
            "phone": "080 2553 4567",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [88.3639, 22.5726]
        },
        "properties": {
            "name": "Pizza Corner Park Street",
            "address": "17A Park Street, Kolkata, West Bengal 700016",
            "phone": "033 2229 1234",
            "brand": "Pizza Corner"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [78.4867, 17.3850]
        },
        "properties": {
            "name": "Pizza Hut Banjara Hills",
            "address": "Road No 12, Banjara Hills, Hyderabad, Telangana 500034",
            "phone": "040 2339 5678",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [80.2707, 13.0827]
        },
        "properties": {
            "name": "Domino's T Nagar",
            "address": "South Usman Road, T Nagar, Chennai, Tamil Nadu 600017",
            "phone": "044 2434 5678",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [73.8567, 18.5204]
        },
        "properties": {
            "name": "La Pino'z FC Road",
            "address": "FC Road, Shivajinagar, Pune, Maharashtra 411005",
            "phone": "020 2553 7890",
            "brand": "La Pino'z Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [72.5714, 23.0225]
        },
        "properties": {
            "name": "Pizza Hut Navrangpura",
            "address": "Navrangpura, Ahmedabad, Gujarat 380009",
            "phone": "079 2630 1234",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [75.7873, 26.9124]
        },
        "properties": {
            "name": "Domino's MI Road",
            "address": "MI Road, Jaipur, Rajasthan 302001",
            "phone": "0141 2367 890",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [85.1376, 25.5941]
        },
        "properties": {
            "name": "Pizza Corner Boring Road",
            "address": "Boring Road, Patna, Bihar 800001",
            "phone": "0612 2345 678",
            "brand": "Pizza Corner"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [77.4126, 23.2599]
        },
        "properties": {
            "name": "Pizza Hut New Market",
            "address": "New Market, Bhopal, Madhya Pradesh 462001",
            "phone": "0755 2552 345",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [76.2673, 9.9312]
        },
        "properties": {
            "name": "Domino's Marine Drive",
            "address": "Marine Drive, Kochi, Kerala 682031",
            "phone": "0484 2345 678",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [74.7973, 34.0837]
        },
        "properties": {
            "name": "Pizza Hut Lal Chowk",
            "address": "Lal Chowk, Srinagar, Jammu and Kashmir 190001",
            "phone": "0194 2456 789",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [91.7362, 26.1445]
        },
        "properties": {
            "name": "Domino's Paltan Bazaar",
            "address": "Paltan Bazaar, Guwahati, Assam 781008",
            "phone": "0361 2567 890",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [75.8577, 22.7196]
        },
        "properties": {
            "name": "Pizza Corner Rajwada",
            "address": "Rajwada, Indore, Madhya Pradesh 452007",
            "phone": "0731 2678 901",
            "brand": "Pizza Corner"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [79.0882, 21.1458]
        },
        "properties": {
            "name": "Pizza Hut Sadar",
            "address": "Sadar, Nagpur, Maharashtra 440001",
            "phone": "0712 2789 012",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [83.2785, 17.7231]
        },
        "properties": {
            "name": "Domino's Jagadamba",
            "address": "Jagadamba Junction, Visakhapatnam, Andhra Pradesh 530020",
            "phone": "0891 2890 123",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [78.1198, 30.3165]
        },
        "properties": {
            "name": "Pizza Hut Paltan Bazaar",
            "address": "Paltan Bazaar, Dehradun, Uttarakhand 248001",
            "phone": "0135 2901 234",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [81.6296, 21.2787]
        },
        "properties": {
            "name": "Domino's Raipur City",
            "address": "City Center, Raipur, Chhattisgarh 492001",
            "phone": "0771 3012 345",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [93.9063, 26.2006]
        },
        "properties": {
            "name": "Pizza Corner Dibrugarh",
            "address": "AT Road, Dibrugarh, Assam 786001",
            "phone": "0373 3123 456",
            "brand": "Pizza Corner"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [73.1812, 22.3072]
        },
        "properties": {
            "name": "Pizza Hut Alkapuri",
            "address": "Alkapuri, Vadodara, Gujarat 390007",
            "phone": "0265 3234 567",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [80.9462, 26.8467]
        },
        "properties": {
            "name": "Domino's Hazratganj",
            "address": "Hazratganj, Lucknow, Uttar Pradesh 226001",
            "phone": "0522 3345 678",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [77.1025, 28.7041]
        },
        "properties": {
            "name": "Pizza Hut Sector 18",
            "address": "Sector 18, Noida, Uttar Pradesh 201301",
            "phone": "0120 3456 789",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [76.7794, 30.3398]
        },
        "properties": {
            "name": "Domino's Sector 17",
            "address": "Sector 17, Chandigarh 160017",
            "phone": "0172 3567 890",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [73.7622, 15.2993]
        },
        "properties": {
            "name": "Domino's Panaji",
            "address": "18th June Road, Panaji, Goa 403001",
            "phone": "0832 2420 123",
            "brand": "Domino's Pizza"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [73.7536, 15.2832]
        },
        "properties": {
            "name": "Pizza Hut Miramar",
            "address": "Miramar Beach Road, Panaji, Goa 403001",
            "phone": "0832 2463 789",
            "brand": "Pizza Hut"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [73.8313, 15.2768]
        },
        "properties": {
            "name": "Pizza Corner Mapusa",
            "address": "Municipal Market, Mapusa, Goa 403507",
            "phone": "0832 2262 456",
            "brand": "Pizza Corner"
        }
    }
]