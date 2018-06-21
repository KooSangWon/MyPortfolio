export default function(elementName){
    var container = document.getElementById(elementName);
    var data = {
        categories: ['JAVA', 'ANDROID', 'JSP', 'C'],
        series: [{
            name : '이해도(%)',
            data : [70, 75, 65, 80]
        }]
    };
    tui.chart.barChart(container, data);
};