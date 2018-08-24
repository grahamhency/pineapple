(function() {
  'use strict';

  angular.module('deviceTable', []).component('deviceTable', {
    templateUrl: 'assets/javascripts/components/device-table/device-table.html',
    controller: DeviceTableController
  });

  DeviceTableController.$inject = ['deviceFactory'];

  function DeviceTableController(deviceFactory) {
    var vm = this;

    // Scope Variables
    vm.collection = [];
    vm.rawRows = [];
    vm.searchTerm;
    vm.sort = "Model";
    vm.sortIndex = 0;
    vm.sortDir = 1;
    vm.sortDirOpts = [
      { 'val': 1, 'label': 'asc' },
      { 'val': -1, 'label': 'desc'}
    ];

    // Scope Functions
    vm.search = function() {
      if(vm.searchTerm){
        vm.collection.rows = vm.rawRows.filter(function(row){
          return filterRow(row);
        });
      } else {
        if(vm.sort) vm.rawRows.sort(sortRows);
        vm.collection.rows = vm.rawRows;
      }
    }

    vm.sortChange = function(){
      vm.sortIndex = vm.collection.headers.indexOf(vm.collection.headers.find(function(i){ return i.label == vm.sort }));
      vm.collection.rows.sort(sortRows);
    }

    function sortRows(a, b){
      if(vm.sortDir === 1){
        return a[vm.sortIndex] > b[vm.sortIndex] ? 1 : -1;
      } else {
        return b[vm.sortIndex] > a[vm.sortIndex] ? 1 : -1;
      }
    }

    function filterRow(row){
      for(var i = 0; i < row.length; i++){
        if(row[i].toLowerCase().includes(vm.searchTerm.toLowerCase())) return true;
      }
      return false;
    }

    // Lifecycle Hooks
    vm.$onInit = onInit;

    ////////////////////////

    function onInit() {
      deviceFactory.get().then(function(res) {
        vm.collection = res;
        vm.rawRows = res.rows.slice();
        vm.sortChange();
      });
    }

  }
})();
