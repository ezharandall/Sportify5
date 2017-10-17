Ext.require(["Ext.app.Application", "Ext.Component", "Ext.Widget"]);
Ext.require("Ext.reactor.RendererCell");
Ext.create({"xtype":"list"});
Ext.create({"xtype":"list"});
Ext.create({
  xtype: 'titlebar',
  docked: 'top',
  titleAlign: 'left',
  shadow: true,
  style: {
    zIndex: 100
  },
  title: Ext.os.is.Phone ? title || '' : '',
  platformConfig: {
    '!desktop': {
      titleAlign: 'center'
    }
  }
});
Ext.create({
  xtype: 'button',
  align: 'left',
  handler: function handler() {
    return location.hash = backButtonURL;
  },
  iconCls: 'md-icon-arrow-back'
});
Ext.create({
  xtype: 'button',
  align: 'left',
  iconCls: 'md-icon-menu',
  handler: function handler() {
    return dispatch(toggleMenu(true));
  }
});
Ext.create({
  xtype: 'button',
  align: 'right',
  iconCls: 'md-icon-search',
  handler: function handler() {
    return dispatch(toggleSearch());
  }
});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"titlebar"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"tabbar"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"tabbar"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"tabbar"});
Ext.create({
  xtype: 'container',
  layout: 'fit',
  fullscreen: true
});
Ext.create({"xtype":"container"});
Ext.require('Ext.plugin.Responsive');
Ext.create({
  xtype: 'treelist',
  ui: 'nav',
  store: store,
  selection: selection,
  plugins: 'responsive',
  onItemClick: this.onSelectionChange,
  expanderFirst: false,
  responsiveConfig: {
    'width < 1080': {
      micro: true,
      width: 56
    },
    'width >= 1080': {
      micro: false,
      width: 225
    },
    'phone': {
      micro: false,
      width: 250
    }
  }
});
Ext.create({
  xtype: 'sheet',
  side: 'left',
  scrollable: true,
  displayed: displayed,
  onHide: this.onHide,
  padding: '0'
});
Ext.create({
  xtype: 'container',
  docked: 'left',
  scrollable: true,
  shadow: true,
  zIndex: 1,
  layout: 'vbox'
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"sheet"});
Ext.create({"xtype":"treelist"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"titlebar"});
Ext.create({"xtype":"button"});
Ext.create('Ext.data.ChainedStore', {
  autoDestroy: true,
  source: props.store
});
Ext.create({
  xtype: 'sheet',
  height: Ext.Viewport.getHeight(),
  layout: 'vbox',
  onShow: this.onShow,
  displayed: showSearch,
  side: 'bottom',
  modal: false,
  padding: '0'
});
Ext.create({"xtype":"toolbar"});
Ext.create({
  xtype: 'searchfield',
  ref: this.fieldRefHandler,
  flex: 1,
  placeholder: 'Search',
  onChange: this.onSearch
});
Ext.create({
  xtype: 'button',
  text: 'CLOSE',
  handler: this.close,
  margin: '0 0 0 10'
});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"sheet"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"list"});
Ext.create({"xtype":"button"});
Ext.create('Ext.data.ChainedStore', {
  source: store
});
Ext.create({"xtype":"combobox"});
Ext.create({"xtype":"combobox"});
Ext.create('Ext.data.Store', {
  autoLoad: true,
  fields: [{
    name: 'cnt',
    type: 'number'
  }, 'Work_Country'],
  proxy: {
    type: 'ajax',
    url: 'resources/countries.json',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  },
  listeners: {
    load: function load() {
      return _this.setState({
        loaded: true
      });
    }
  }
});
Ext.create({"xtype":"panel"});
Ext.define(null, {
  extend: 'Ext.d3.legend.Color',
  renderItems: function renderItems(items) {
    var me = this, ticks = [200, 100, 40, 20, 10, 6, 2], selection = me.getRenderedItems().data(ticks);
    me.onAddItems(selection.enter());
    me.onUpdateItems(selection);
    me.onRemoveItems(selection.exit());
  }
});
Ext.require('Ext.d3.mixin.ToolTip');
Ext.require('Ext.d3.interaction.PanZoom');
Ext.require('Ext.d3.*');
Ext.define('ConferenceApp.WorldMap', {
  extend: 'Ext.d3.svg.Svg',
  mixins: ['Ext.d3.mixin.ToolTip'],
  width: 960,
  height: 960,
  legendRect: {
    x: 10,
    y: 400,
    width: 100,
    height: 150
  },
  emptyColor: 'lightgray',
  defaultCls: {
    country: 'country'
  },
  config: {
    colorAxis: {},
    mapAxis: {},
    store: null,
    tooltip: {
      renderer: function renderer(component, tooltip, datum, element, event) {
        tooltip.setHtml(component.getTooltip(datum));
      }
    },
    legend: false
  },
  constructor: function constructor(config) {
    this.superclass.constructor.call(this, config);
    this.mixins.d3tooltip.constructor.call(this, config);
  },
  applyStore: function applyStore(store, oldStore) {
    store = this.superclass.applyStore.call(this, store, oldStore);
    store.on({
      load: {
        fn: this.updateDomain,
        scope: this
      }
    });
    return store;
  },
  applyColorAxis: function applyColorAxis(colorAxis, oldColorAxis) {
    if (colorAxis) {
      colorAxis = new Ext.d3.axis.Color(colorAxis);
    }
    return colorAxis || oldColorAxis;
  },
  applyMapAxis: function applyMapAxis(axis, oldAxis) {
    if (axis) {
      axis = new Ext.d3.axis.Data(Ext.merge({
        component: this
      }, axis));
    }
    return axis || oldAxis;
  },
  applyTooltip: function applyTooltip(tooltip, oldTooltip) {
    if (tooltip) {
      tooltip.delegate = 'path.' + this.defaultCls.country;
    }
    return this.mixins.d3tooltip.applyTooltip.call(this, tooltip, oldTooltip);
  },
  applyLegend: function applyLegend(legend, oldLegend) {
    var me = this;
    if (legend) {
      legend.axis = me.getColorAxis();
      legend = new Legend(Ext.merge({
        component: me
      }, legend));
    }
    return legend || oldLegend;
  },
  updateDomain: function updateDomain() {
    var store = this.getStore(), minValue, maxValue, colorAxis = this.getColorAxis(), colorField = colorAxis.getField(), legend = this.getLegend();
    if (colorAxis) {
      minValue = store.min(colorField);
      maxValue = store.max(colorField);
      colorAxis.getScale().domain([minValue, maxValue]);
    }
    if (legend) {
      legend.onScaleChange();
    }
  },
  getValueForState: function getValueForState(state) {
    var record = this.getRecordForState(state), colorAxis = this.getColorAxis(), colorField = colorAxis.getField();
    return !Ext.isEmpty(record) ? record.get(colorField) : 0;
  },
  getRecordForState: function getRecordForState(state) {
    var mapAxis = this.getMapAxis(), mapField = mapAxis.getField();
    return this.getStore().findRecord(mapField, state);
  },
  getTooltip: function getTooltip(d) {
    var country = d.properties.name, value = this.getValueForState(country);
    return country + ": " + value;
  },
  onAddCountries: function onAddCountries(selection, path) {
    if (selection.empty()) {
      return;
    }
    selection.append("path").attr("class", "country").attr("d", function (d) {
      var v = path.call(this, d);
      return v;
    });
  },
  onUpdateCountries: function onUpdateCountries(selection) {
    var me = this, colorAxis = this.getColorAxis(), colorScale = colorAxis.getScale();
    selection.style("fill", function (d) {
      var value = me.getValueForState(d.properties.name);
      if (value == 0) {
        return me.emptyColor;
      }
      return colorScale(me.getValueForState(d.properties.name));
    });
  },
  onRemoveCountries: function onRemoveCountries(selection) {
    selection.remove();
  },
  listeners: {
    scenesetup: function scenesetup() {
      this.renderScene();
    },
    sceneresize: function sceneresize() {
      this.renderScene();
    }
  },
  getRenderedCountries: function getRenderedCountries(selection) {
    return selection.selectAll('.' + this.defaultCls.country);
  },
  renderScene: function renderScene() {
    var scene = this.getScene(), projection = d3.geoMercator().scale((this.config.width + 1) / 2 / Math.PI).translate([this.config.width / 2, this.config.height / 2]).precision(.1), path = d3.geoPath().projection(projection), graticule = d3.geoGraticule(), countriesData = topoData, data = topojson.feature(countriesData, countriesData.objects.countries).features, countries, legend, legendBox;
    if (!this.isConfiguring) {
      scene.append("path").datum(graticule).attr("class", "graticule").attr("d", path);
      scene.append("path").datum(graticule).attr("class", "choropleth").attr("d", path);
      var g = scene.append("g");
      g.append("path").datum({
        type: "LineString",
        coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]
      }).attr("class", "equator").attr("d", path);
      legend = this.getLegend();
      this.onAddCountries(this.getRenderedCountries(g).data(data).enter(), path);
      this.onUpdateCountries(this.getRenderedCountries(g).data(data));
      this.onRemoveCountries(this.getRenderedCountries(g).data(data).exit());
      g.append("path").datum(topojson.mesh(countriesData, countriesData.objects.countries, function (a, b) {
        return a !== b;
      })).attr("class", "boundary").attr("d", path);
      if (legend) {
        legendBox = legend.getBox();
        Ext.d3.Helpers.alignRect('center', 'center', legendBox, this.legendRect, legend.getGroup());
      }
      scene.attr("height", this.config.height * 2.2 / 3);
    }
  }
});
Ext.create('Ext.calendar.store.Calendars', {
  eventStoreDefaults: {
    proxy: {
      type: 'ajax',
      url: 'resources/schedule.json'
    },
    filters: function filters(item) {
      return _this.favorites.indexOf(item.get('id')) >= 0;
    }
  },
  data: [{
    id: 1,
    name: 'myCal'
  }]
});
Ext.create({
  xtype: 'container',
  activeItem: match.params.id && event ? 1 : 0,
  platformConfig: {
    "!phone": {
      layout: 'hbox'
    },
    "phone": {
      layout: {
        type: 'card',
        animation: 'slide'
      }
    }
  }
});
Ext.create({
  xtype: 'calendar-days',
  visibleDays: 3,
  startTime: 7,
  endTime: 22,
  value: new Date(2016, 10, 7),
  store: this.store,
  dayHeader: {
    format: 'D',
    compactOptions: {
      format: 'D'
    }
  },
  editForm: null,
  draggable: false,
  resizeEvents: false,
  gestureNavigation: false,
  allowSelection: false,
  onEventTap: this.eventTap,
  flex: 1
});
Ext.create({"xtype":"calendar-days"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create('Ext.calendar.store.Calendars', {
  eventStoreDefaults: {
    proxy: {
      type: 'ajax',
      url: 'resources/schedule.json'
    },
    filters: function filters(item) {
      return _this.favorites.indexOf(item.get('id')) >= 0;
    }
  },
  data: [{
    id: 1,
    name: 'myCal'
  }]
});
Ext.create({
  xtype: 'container',
  activeItem: match.params.id && event ? 1 : 0,
  platformConfig: {
    "!phone": {
      layout: 'hbox'
    },
    "phone": {
      layout: {
        type: 'card',
        animation: 'slide'
      }
    }
  }
});
Ext.create({
  xtype: 'calendar-days',
  visibleDays: 7,
  startTime: 7,
  endTime: 22,
  value: new Date(2016, 10, 7),
  store: this.store,
  dayHeader: {
    format: 'D',
    compactOptions: {
      format: 'D'
    }
  },
  editForm: null,
  draggable: false,
  resizeEvents: false,
  gestureNavigation: false,
  allowSelection: false,
  onEventTap: this.eventTap,
  flex: 1
});
Ext.create({"xtype":"calendar-days"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create('Ext.calendar.store.Calendars', {
  eventStoreDefaults: {
    proxy: {
      type: 'ajax',
      url: 'resources/schedule.json'
    },
    filters: function filters(item) {
      return _this.favorites.indexOf(item.get('id')) >= 0;
    }
  },
  data: [{
    id: 1,
    name: 'myCal'
  }]
});
Ext.create({
  xtype: 'container',
  activeItem: match.params.id && event ? 1 : 0,
  platformConfig: {
    "!phone": {
      layout: 'hbox'
    },
    "phone": {
      layout: {
        type: 'card',
        animation: 'slide'
      }
    }
  }
});
Ext.create({
  xtype: 'calendar-days',
  visibleDays: 7,
  startTime: 7,
  endTime: 22,
  value: new Date(2017, 10, 16),
  store: this.store,
  dayHeader: {
    format: 'D',
    compactOptions: {
      format: 'D'
    }
  },
  editForm: null,
  draggable: false,
  resizeEvents: false,
  gestureNavigation: false,
  allowSelection: false,
  onEventTap: this.eventTap,
  flex: 1
});
Ext.create({"xtype":"calendar-days"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create('Ext.calendar.store.Calendars', {
  eventStoreDefaults: {
    proxy: {
      type: 'ajax',
      url: 'resources/schedule.json'
    },
    filters: function filters(item) {
      return _this.favorites.indexOf(item.get('id')) >= 0;
    }
  },
  data: [{
    id: 1,
    name: 'myCal'
  }]
});
Ext.create({
  xtype: 'container',
  activeItem: match.params.id && event ? 1 : 0,
  platformConfig: {
    "!phone": {
      layout: 'hbox'
    },
    "phone": {
      layout: {
        type: 'card',
        animation: 'slide'
      }
    }
  }
});
Ext.create({
  xtype: 'calendar-days',
  visibleDays: 7,
  startTime: 7,
  endTime: 22,
  value: new Date(2017, 10, 16),
  store: this.store,
  dayHeader: {
    format: 'D',
    compactOptions: {
      format: 'D'
    }
  },
  editForm: null,
  draggable: false,
  resizeEvents: false,
  gestureNavigation: false,
  allowSelection: false,
  onEventTap: this.eventTap,
  flex: 1
});
Ext.create({"xtype":"calendar-days"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create('Ext.data.TreeStore', {
  root: {
    children: [{
      text: 'Schedule',
      id: '/schedule',
      iconCls: 'x-font-icon md-icon-schedule',
      leaf: true
    }, {
      text: 'Roster',
      id: '/speakers',
      iconCls: 'x-font-icon md-icon-mic',
      leaf: true
    }, {
      text: 'Calendar',
      id: '/calendar',
      iconCls: 'x-font-icon md-icon-event-available',
      leaf: true
    }, {
      text: 'Payments',
      id: '/attendees',
      iconCls: 'x-font-icon md-icon-people',
      leaf: true
    }, {
      text: 'About this App',
      id: '/about',
      iconCls: 'x-font-icon md-icon-info-outline',
      leaf: true
    }]
  }
});
Ext.create('Ext.data.ChainedStore');
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'date',
    value: 'Monday, November 7'
  }]
}));
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'date',
    value: 'Tuesday, November 8'
  }]
}));
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'date',
    value: 'Wednesday, November 9'
  }]
}));
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'favorite',
    value: true
  }],
  grouper: {
    groupFn: function groupFn(item) {
      return item.get('date') + ', ' + item.get('start_time');
    },
    sortProperty: 'startDate'
  }
}));
Ext.create({
  xtype: 'container',
  docked: 'top',
  className: 'app-banner'
});
Ext.create({
  xtype: 'container',
  activeItem: showEvent ? 1 : 0,
  platformConfig: {
    "!phone": {
      layout: 'hbox'
    },
    "phone": {
      layout: {
        type: 'card',
        animation: 'slide'
      }
    }
  }
});
Ext.create({
  xtype: 'tabpanel',
  flex: 1,
  tabBar: {
    shadow: true
  },
  maxWidth: showEvent && 500,
  activeItem: this.state.activeItem,
  platformConfig: {
    "!phone": {
      flex: 1
    }
  }
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"tabpanel"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"list"});
Ext.create('Ext.data.ChainedStore');
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'date',
    value: 'Monday, November 7'
  }]
}));
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'date',
    value: 'Tuesday, November 8'
  }]
}));
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'date',
    value: 'Wednesday, November 9'
  }]
}));
Ext.create('Ext.data.ChainedStore', _extends({}, _this.storeDefaults, {
  filters: [{
    property: 'favorite',
    value: true
  }],
  grouper: {
    groupFn: function groupFn(item) {
      return item.get('date') + ', ' + item.get('start_time');
    },
    sortProperty: 'startDate'
  }
}));
Ext.create({
  xtype: 'container',
  docked: 'top',
  className: 'app-banner'
});
Ext.create({
  xtype: 'container',
  activeItem: showEvent ? 1 : 0,
  platformConfig: {
    "!phone": {
      layout: 'hbox'
    },
    "phone": {
      layout: {
        type: 'card',
        animation: 'slide'
      }
    }
  }
});
Ext.create({
  xtype: 'tabpanel',
  flex: 1,
  tabBar: {
    shadow: true
  },
  maxWidth: showEvent && 500,
  activeItem: this.state.activeItem,
  platformConfig: {
    "!phone": {
      flex: 1
    }
  }
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"tabpanel"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"list"});
Ext.create('Ext.data.Store', {
  autoLoad: true,
  proxy: {
    type: 'ajax',
    url: 'resources/schedule.json'
  },
  listeners: {
    load: function load(store) {
      return store.each(function (record) {
        return record.set('favorite', favorites.indexOf(record.getId()) !== -1);
      });
    }
  }
});
Ext.create('Ext.data.ChainedStore', {
  autoDestroy: true,
  source: schedule && schedule.store
});
Ext.create({"xtype":"container"});
Ext.create({
  xtype: 'container',
  shadow: true
});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"panel"});
Ext.create({
  xtype: 'container',
  activeItem: match.params.id ? 1 : 0,
  platformConfig: {
    "!phone": {
      layout: 'hbox'
    },
    "phone": {
      layout: {
        type: 'card',
        animation: 'slide'
      }
    }
  }
});
Ext.create({"xtype":"list"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"list"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"tabpanel"});
Ext.create({"xtype":"panel"});
Ext.create('Ext.data.Store', {
  proxy: {
    type: 'ajax',
    url: 'resources/speakers.json'
  }
})