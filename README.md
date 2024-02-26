**Background**

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this project, I will be developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.


**Instructions**

**Created the Earthquake Visualization**

To do so, I complete the following steps:

1. Got the dataset, following these steps:
    - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visited the USGS GeoJSON Feed page (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and chose a dataset to visualize.
    - On clicking a dataset (such as "All Earthquakes from the Past 7 Days"), I was given a JSON representation of that data. Used the URL of this JSON to pull in the data for the visualization.

2. Imported and visualized the data by doing the following:
    - Using Leaflet, created a map that plots all the earthquakes from the dataset based on their longitude and latitude.
    - The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color.
    - Included popups that provide additional information about the earthquake when its associated marker is clicked.
    - Created a legend that will provide context for the map data.
