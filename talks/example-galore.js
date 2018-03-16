const names = [
  'https_openlayers.org_en_latest_examples_accessible.html.png',
  'https_openlayers.org_en_latest_examples_animation.html.png',
  'https_openlayers.org_en_latest_examples_arcgis-image.html.png',
  'https_openlayers.org_en_latest_examples_arcgis-tiled.html.png',
  'https_openlayers.org_en_latest_examples_attributions.html.png',
  'https_openlayers.org_en_latest_examples_bing-maps.html.png',
  'https_openlayers.org_en_latest_examples_blend-modes.html.png',
  'https_openlayers.org_en_latest_examples_box-selection.html.png',
  'https_openlayers.org_en_latest_examples_button-title.html.png',
  'https_openlayers.org_en_latest_examples_canvas-gradient-pattern.html.png',
  'https_openlayers.org_en_latest_examples_canvas-tiles.html.png',
  'https_openlayers.org_en_latest_examples_cartodb.html.png',
  'https_openlayers.org_en_latest_examples_center.html.png',
  'https_openlayers.org_en_latest_examples_cluster.html.png',
  'https_openlayers.org_en_latest_examples_color-manipulation.html.png',
  'https_openlayers.org_en_latest_examples_custom-controls.html.png',
  'https_openlayers.org_en_latest_examples_custom-icon.html.png',
  'https_openlayers.org_en_latest_examples_custom-interactions.html.png',
  'https_openlayers.org_en_latest_examples_d3.html.png',
  'https_openlayers.org_en_latest_examples_device-orientation.html.png',
  'https_openlayers.org_en_latest_examples_drag-and-drop.html.png',
  'https_openlayers.org_en_latest_examples_drag-and-drop-image-vector.html.png',
  'https_openlayers.org_en_latest_examples_drag-rotate-and-zoom.html.png',
  'https_openlayers.org_en_latest_examples_draw-and-modify-features.html.png',
  'https_openlayers.org_en_latest_examples_draw-features.html.png',
  'https_openlayers.org_en_latest_examples_draw-freehand.html.png',
  'https_openlayers.org_en_latest_examples_draw-shapes.html.png',
  'https_openlayers.org_en_latest_examples_dynamic-data.html.png',
  'https_openlayers.org_en_latest_examples_earthquake-clusters.html.png',
  'https_openlayers.org_en_latest_examples_earthquake-custom-symbol.html.png',
  'https_openlayers.org_en_latest_examples_epsg-4326.html.png',
  'https_openlayers.org_en_latest_examples_export-map.html.png',
  'https_openlayers.org_en_latest_examples_export-pdf.html.png',
  'https_openlayers.org_en_latest_examples_extent-interaction.html.png',
  'https_openlayers.org_en_latest_examples_feature-animation.html.png',
  'https_openlayers.org_en_latest_examples_feature-move-animation.html.png',
  'https_openlayers.org_en_latest_examples_flight-animation.html.png',
  'https_openlayers.org_en_latest_examples_fractal.html.png',
  'https_openlayers.org_en_latest_examples_full-screen-drag-rotate-and-zoom.html.png',
  'https_openlayers.org_en_latest_examples_full-screen.html.png',
  'https_openlayers.org_en_latest_examples_full-screen-source.html.png',
  'https_openlayers.org_en_latest_examples_geojson.html.png',
  'https_openlayers.org_en_latest_examples_geojson-vt.html.png',
  'https_openlayers.org_en_latest_examples_geolocation.html.png',
  'https_openlayers.org_en_latest_examples_geolocation-orientation.html.png',
  'https_openlayers.org_en_latest_examples_getfeatureinfo-image.html.png',
  'https_openlayers.org_en_latest_examples_getfeatureinfo-layers.html.png',
  'https_openlayers.org_en_latest_examples_getfeatureinfo-tile.html.png',
  'https_openlayers.org_en_latest_examples_gpx.html.png',
  'https_openlayers.org_en_latest_examples_graticule.html.png',
  'https_openlayers.org_en_latest_examples_heatmap-earthquakes.html.png',
  'https_openlayers.org_en_latest_examples_here-maps.html.png',
  'https_openlayers.org_en_latest_examples_hit-tolerance.html.png',
  'https_openlayers.org_en_latest_examples_icon-color.html.png',
  'https_openlayers.org_en_latest_examples_icon.html.png',
  'https_openlayers.org_en_latest_examples_icon-negative.html.png',
  'https_openlayers.org_en_latest_examples_icon-sprite-webgl.html.png',
  'https_openlayers.org_en_latest_examples_igc.html.png',
  'https_openlayers.org_en_latest_examples_image-filter.html.png',
  'https_openlayers.org_en_latest_examples_image-load-events.html.png',
  'https_openlayers.org_en_latest_examples_image-vector-layer.html.png',
  'https_openlayers.org_en_latest_examples_index.html.png',
  'https_openlayers.org_en_latest_examples_jsts.html.png',
  'https_openlayers.org_en_latest_examples_kml-earthquakes.html.png',
  'https_openlayers.org_en_latest_examples_kml.html.png',
  'https_openlayers.org_en_latest_examples_kml-timezones.html.png',
  'https_openlayers.org_en_latest_examples_layer-clipping.html.png',
  'https_openlayers.org_en_latest_examples_layer-clipping-webgl.html.png',
  'https_openlayers.org_en_latest_examples_layer-extent.html.png',
  'https_openlayers.org_en_latest_examples_layer-group.html.png',
  'https_openlayers.org_en_latest_examples_layer-spy.html.png',
  'https_openlayers.org_en_latest_examples_layer-swipe.html.png',
  'https_openlayers.org_en_latest_examples_layer-z-index.html.png',
  'https_openlayers.org_en_latest_examples_lazy-source.html.png',
  'https_openlayers.org_en_latest_examples_line-arrows.html.png',
  'https_openlayers.org_en_latest_examples_localized-openstreetmap.html.png',
  'https_openlayers.org_en_latest_examples_magnify.html.png',
  'https_openlayers.org_en_latest_examples_mapbox-vector-tiles-advanced.html.png',
  'https_openlayers.org_en_latest_examples_mapbox-vector-tiles.html.png',
  'https_openlayers.org_en_latest_examples_mapguide-untiled.html.png',
  'https_openlayers.org_en_latest_examples_measure.html.png',
  'https_openlayers.org_en_latest_examples_min-max-resolution.html.png',
  'https_openlayers.org_en_latest_examples_mobile-full-screen.html.png',
  'https_openlayers.org_en_latest_examples_modify-features.html.png',
  'https_openlayers.org_en_latest_examples_modify-test.html.png',
  'https_openlayers.org_en_latest_examples_mouse-position.html.png',
  'https_openlayers.org_en_latest_examples_moveend.html.png',
  'https_openlayers.org_en_latest_examples_navigation-controls.html.png',
  'https_openlayers.org_en_latest_examples_osm-vector-tiles.html.png',
  'https_openlayers.org_en_latest_examples_overlay.html.png',
  'https_openlayers.org_en_latest_examples_overviewmap-custom.html.png',
  'https_openlayers.org_en_latest_examples_overviewmap.html.png',
  'https_openlayers.org_en_latest_examples_permalink.html.png',
  'https_openlayers.org_en_latest_examples_pinch-zoom.html.png',
  'https_openlayers.org_en_latest_examples_polygon-styles.html.png',
  'https_openlayers.org_en_latest_examples_popup.html.png',
  'https_openlayers.org_en_latest_examples_preload.html.png',
  'https_openlayers.org_en_latest_examples_raster.html.png',
  'https_openlayers.org_en_latest_examples_region-growing.html.png',
  'https_openlayers.org_en_latest_examples_regularshape.html.png',
  'https_openlayers.org_en_latest_examples_render-geometry.html.png',
  'https_openlayers.org_en_latest_examples_reprojection-by-code.html.png',
  'https_openlayers.org_en_latest_examples_reprojection.html.png',
  'https_openlayers.org_en_latest_examples_reprojection-image.html.png',
  'https_openlayers.org_en_latest_examples_reprojection-wgs84.html.png',
  'https_openlayers.org_en_latest_examples_reusable-source.html.png',
  'https_openlayers.org_en_latest_examples_rotation.html.png',
  'https_openlayers.org_en_latest_examples_scale-line.html.png',
  'https_openlayers.org_en_latest_examples_scaleline-indiana-east.html.png',
  'https_openlayers.org_en_latest_examples_sea-level.html.png',
  'https_openlayers.org_en_latest_examples_select-features.html.png',
  'https_openlayers.org_en_latest_examples_semi-transparent-layer.html.png',
  'https_openlayers.org_en_latest_examples_shaded-relief.html.png',
  'https_openlayers.org_en_latest_examples_side-by-side.html.png',
  'https_openlayers.org_en_latest_examples_simple.html.png',
  'https_openlayers.org_en_latest_examples_snap.html.png',
  'https_openlayers.org_en_latest_examples_sphere-mollweide.html.png',
  'https_openlayers.org_en_latest_examples_stamen.html.png',
  'https_openlayers.org_en_latest_examples_static-image.html.png',
  'https_openlayers.org_en_latest_examples_symbol-atlas-webgl.html.png',
  'https_openlayers.org_en_latest_examples_synthetic-lines.html.png',
  'https_openlayers.org_en_latest_examples_synthetic-points.html.png',
  'https_openlayers.org_en_latest_examples_teleport.html.png',
  'https_openlayers.org_en_latest_examples_tilejson.html.png',
  'https_openlayers.org_en_latest_examples_tile-load-events.html.png',
  'https_openlayers.org_en_latest_examples_tileutfgrid.html.png',
  'https_openlayers.org_en_latest_examples_tissot.html.png',
  'https_openlayers.org_en_latest_examples_topojson.html.png',
  'https_openlayers.org_en_latest_examples_topolis.html.png',
  'https_openlayers.org_en_latest_examples_translate-features.html.png',
  'https_openlayers.org_en_latest_examples_turf.html.png',
  'https_openlayers.org_en_latest_examples_vector-esri-edit.html.png',
  'https_openlayers.org_en_latest_examples_vector-esri.html.png',
  'https_openlayers.org_en_latest_examples_vector-labels.html.png',
  'https_openlayers.org_en_latest_examples_vector-layer.html.png',
  'https_openlayers.org_en_latest_examples_vector-osm.html.png',
  'https_openlayers.org_en_latest_examples_vector-wfs-getfeature.html.png',
  'https_openlayers.org_en_latest_examples_vector-wfs.html.png',
  'https_openlayers.org_en_latest_examples_wkt.html.png',
  'https_openlayers.org_en_latest_examples_wms-capabilities.html.png',
  'https_openlayers.org_en_latest_examples_wms-custom-proj.html.png',
  'https_openlayers.org_en_latest_examples_wms-custom-tilegrid-512x256.html.png',
  'https_openlayers.org_en_latest_examples_wms-image-custom-proj.html.png',
  'https_openlayers.org_en_latest_examples_wms-image.html.png',
  'https_openlayers.org_en_latest_examples_wms-no-proj.html.png',
  'https_openlayers.org_en_latest_examples_wms-tiled.html.png',
  'https_openlayers.org_en_latest_examples_wms-tiled-wrap-180.html.png',
  'https_openlayers.org_en_latest_examples_wms-time.html.png',
  'https_openlayers.org_en_latest_examples_wmts-capabilities.html.png',
  'https_openlayers.org_en_latest_examples_wmts-dimensions.html.png',
  'https_openlayers.org_en_latest_examples_wmts-hidpi.html.png',
  'https_openlayers.org_en_latest_examples_wmts.html.png',
  'https_openlayers.org_en_latest_examples_wmts-ign.html.png',
  'https_openlayers.org_en_latest_examples_wmts-layer-from-capabilities.html.png',
  'https_openlayers.org_en_latest_examples_xyz-esri-4326-512.html.png',
  'https_openlayers.org_en_latest_examples_xyz-esri.html.png',
  'https_openlayers.org_en_latest_examples_xyz.html.png',
  'https_openlayers.org_en_latest_examples_xyz-retina.html.png',
  'https_openlayers.org_en_latest_examples_zoom-constrained.html.png',
  'https_openlayers.org_en_latest_examples_zoomify.html.png',
  'https_openlayers.org_en_latest_examples_zoomslider.html.png'
];
// function fisherYates( array ){
//  var count = array.length,
//      randomnumber,
//      temp;
//  while( count ){
//   randomnumber = Math.random() * count-- | 0;
//   temp = array[count];
//   array[count] = array[randomnumber];
//   array[randomnumber] = temp
//  }
//  return array
// }
// fisherYates(names);
const imgs = names.map((name) => {
  var img = new Image();
  img.src = '../shared/img/ol-talk/' + name;
  return img;
});
const numImgs = imgs.length;
const duration = 2800;

var setUrlInterval = null;
var animateInterval = null;
function stopExampleGalore() {
  if (setUrlInterval) {
    window.clearInterval(setUrlInterval);
  }
  if (animateInterval) {
    window.clearInterval(animateInterval);
  }
}
function startExampleGalore() {
  stopExampleGalore();
  var container = document.getElementById('example-galore');
  var imgElem = container.querySelector('img')

  var imgIdx = 0;
  setUrlInterval = window.setInterval(() => {
    imgIdx++;
    if (imgIdx >= numImgs) {
      imgIdx = 0;
    }
    imgElem.src = '../shared/img/ol-talk/' + names[imgIdx];
  }, duration);
  animateInterval = window.setInterval(() => {
    imgElem.className = imgElem.className === 'stretch plain animated rollOut'
      ? 'stretch plain animated rollIn'
      : 'stretch plain animated rollOut'
  }, duration/2);
}
