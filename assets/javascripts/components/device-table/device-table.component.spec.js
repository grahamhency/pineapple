describe('Component: deviceTable', function() {
  'use strict';

  module.sharedInjector();

  var subject = {
    module: 'deviceTable',
    component: 'deviceTable'
  };

  var vm, scope, deviceFactory, $q, deviceFixture;

  beforeAll(function() {
    module('deviceFactory');
    module(subject.module);

    deviceFixture = {
      'id': 'devices',
      'title': 'Devices',
      'headers': [
        {
          'label': 'Model',
          'full_label': 'Model'
        },{
          'label': 'Person',
          'full_label': 'Person'
        },
      ],
      'rows': [
        ['Firebolt', 'Harry Potter'],
        ['Cleansweep Five', 'Ronald Weasley'],
        ['Buckbeak', 'Hermione Granger'],
        ['Nimbus 2001', 'Draco Malfoy'],
        ['Dark Mark', 'Tom Riddle']
      ]
    };

    ////////////////////////

    inject(function($injector) {
      var $componentController = $injector.get('$componentController');
      var $rootScope = $injector.get('$rootScope');
      deviceFactory = $injector.get('deviceFactory');
      $q = $injector.get('$q');

      scope = $rootScope.$new();

      // Component Setup
      // ========================
      var bindings = {};
      var locals = {
        $scope: scope
      };

      vm = $componentController(subject.component, locals, bindings);
    });
  });

  it('renders and binds', function() {
    expect(vm).toBeDefined();
  });

  describe('onInit', function() {
    var deferred;

    beforeAll(function() {
      vm.collection = [];

      deferred = $q.defer();
      spyOn(deviceFactory, 'get').and.returnValue(deferred.promise);
    });

    it('fetches data from device factory', function(done) {
      expect(vm.collection).toEqual([]);

      vm.$onInit();

      expect(deviceFactory.get).toHaveBeenCalled();

      // Resolve the Promise
      deferred.resolve(deviceFixture);
      scope.$digest();

      // Check resolved stated
      setTimeout(function() {
        expect(vm.collection).toBe(deviceFixture);
        done();
      }, 0);
    });
  });
});
