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