import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// https://docs.mapbox.com/mapbox-gl-js/guides/install/#excluding-mapbox-gl-js-explicitly-from-transpilation
// If other parts of your application need ES5 transpilation, then consider excluding GL 
// JS explicitly from transpilation. If you are using Webpack, you can use the ! prefix 
// in the import statement to exclude mapbox-gl from being transformed by existing loaders. 
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import MapboxDraw from "@mapbox/mapbox-gl-draw";

mapboxgl.accessToken = 
    'pk.eyJ1IjoicGh0aiIsImEiOiJjbDJwd2RsNjYwMGp3M2NyMjc1aDF0Z3o5In0.D6-sXBcXxsk_ZL7KEIDivQ';

// Issue with react
// https://github.com/mapbox/mapbox-gl-js/issues/10173
// eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export function Mapbox() {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(38.73458416865174);
  const [lat, setLat] = useState(9.02768302123826);
  const [zoom, setZoom] = useState(17);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // var Draw = new MapboxDraw();
    const Draw = new MapboxDraw({
        displayControlsDefault: false,
        // Select which mapbox-gl-draw control buttons to add to the map.
        controls: {
            line_string: true,
            polygon: true,
            trash: true
        },
        // Set mapbox-gl-draw to draw by default.
        // The user does not have to click the polygon control button first.
        defaultMode: 'draw_polygon'
    });
    // Map#addControl takes an optional second argument to set the position of the control.
    // If no position is specified the control defaults to `top-right`. See the docs
    // for more details: https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol
    map.addControl(Draw, 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    map.on('load', () => {
      map.addSource('streets', {
      type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: './addis-plines.geojson'
      });
      map.addLayer({
        'id': 'streets-layer',
        'type': 'line',
        'source': 'streets',
        // 'paint': {
        //   'circle-radius': 8,
        //   'circle-stroke-width': 2,
        //   'circle-color': 'red',
        //   'circle-stroke-color': 'white'
        // }
      });
      map.addSource('pgons', {
        type: 'geojson',
          // Use a URL for the value for the `data` property.
          data: './addis-pgons.geojson'
        });
      map.addLayer({
        'id': 'pgons-layer',
        'type': 'fill',
        'source': 'pgons',
        'paint': {
          'fill-opacity': 0.15,
          // 'fill-stroke-width': 1,
          // 'fill-color': 'white',
          // 'fill-stroke-color': 'blue'
        }
      });
    });
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='map-container' ref={mapContainerRef} />
  );
};
