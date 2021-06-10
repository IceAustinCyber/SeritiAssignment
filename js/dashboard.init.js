var  options = {
    series: [{
    
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 270,
    width:420,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  
  stroke: {
    show: true,
    curve: 'smooth',
    colors: ['#cfcfcf', '#737373'],
    width: 2,
    dashArray: 0,      
},

 
  zoom: {
    enabled: false
  },

  fill: {
    colors: ['#cfcfcf', '#737373']
  },
  
  legend:{

    show: false
  },
  xaxis: {
    type: 'category',
    categories: [
      " jan " ,
      " feb ", 
      " mar " , 
      " April " ,
      " May "
      ],
     
    position: 'bottom',
    
  },

  
  markers: {
    size: 2,
    colors: ['#cfcfcf', '#737373'],
    strokeColors: '#fff',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 3
    }
},

};

  var chart = new ApexCharts(document.querySelector("#area"), options);
  chart.render();


options = {
    series: [85, 15],
    chart: {
    width: 323,
    type: 'pie',
  },
  dataLabels: {
    enabled: false
    },
  legend:{

    show: false
  },
  
  fill: {
    colors: [ '#46BEBD','#F7454A']
  },
  
    
  };

  var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
  chart.render();
