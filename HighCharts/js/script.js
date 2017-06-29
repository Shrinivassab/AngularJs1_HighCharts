angular.module('myModule', [])
    // Directive for generic chart, pass in chart options
    .directive('hcChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], scope.options);
            }
        };
    })
    // Directive for charts, pass in title and data only
    .directive('hcPieChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], {
                    chart: {
                        type: 'pie' // Change based on what kind of charts end user wants
                        // for bar charts use "Column"
                        // use "area" instead of pie for area charts
                    },
                    title: {
                        text: scope.title
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        data: scope.data
                    }]
                });
            }
        };
    })
    .controller('myController', function ($scope) {

        // Sample options for first chart
        $scope.chartOptions = {
            title: {
                text: 'Student Information'
            },
            yAxis: {
                title: {
                    text: 'Student Count'
                },
                tickInterval: 25
            },
            xAxis: {
              title: {
                  text: 'Course'
              },
              categories: ['Artificial Intelligence', 'Machine Learning', 'Algorithm', 'DataStructure',
                 'System Design', 'Data Visualization']
            },

            series: [{
                data: [29, 11, 106, 49, 44, 176]
            }]
        };

        // Sample data for bar chart
        $scope.pieData = [{
                name: "Artificial Intelligence",
                y: 29
            }, {
                name: "Machine Learning",
                y: 11
            }, {
                name: "Algorithm",
                y: 106
            }, {
                name: "DataStructure",
                y: 49
            }, {
                name: "System Design",
                y: 44
            }, {
                name: "Data Visualization",
                y: 176
        }]
    });
