let formEl = document.getElementById('form-number-group')

let array = []
let arrayRange = []
let x = []



var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# XBar',
            data: [],
            backgroundColor: [
                'rgba(102, 153, 255, 0)',
            ],
            borderColor: [
                'rgba(102, 153, 255, 1)',
            ],
            borderWidth: 1
       
        }, {
            label: '# Max',
            data: [4, 4, 4, 4, 4],
            type: 'line',
            backgroundColor: [
                'rgba(255, 0, 0, 0)',
                ],
            borderColor: ['rgba(255, 0, 0, 1)'],
            borderWidth: 1
        }, {
            label: '# Min',
            data: [1,1,1,1,1,],
            type: 'line',
            backgroundColor: [
                'rgba(255, 0, 0, 0)',
                ],
            borderColor: ['rgba(255, 0, 0, 1)'],
            borderWidth: 1
        },
        {
            label: '# -',
            data: [3, 3, 3, 3, 3],
            type: 'line',
            backgroundColor: [
                'rgba(255, 255, 51, 0)',
                ],
            borderColor: ['rgba(255, 255, 51, 1)'],
            borderWidth: 1
        },{
            label: '# --',
            data: [2, 2, 2, 2, 2],
            type: 'line',
            backgroundColor: [
                'rgba(255, 255, 51, 0)',
                ],
            borderColor: ['rgba(255, 255, 51, 1)'],
            borderWidth: 1
        }
    ],
        
        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: { min: 0, max: 5,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: { max: 10,
                    
                }
            }]
        }

        
    }


    
});

var ctx = document.getElementById('myChart2');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# Range',
            data: [],
            backgroundColor: [
                'rgba(102, 153, 255, 0)',
            ],
            borderColor: [
                'rgba(102, 153, 255, 1)'
            ],
            borderWidth: 1
        }, {
            label: '# Max',
            data: [2, 2, 2, 2, 2],
            type: 'line',
            backgroundColor: [
                'rgba(255, 0, 0, 0)',
                ],
            borderColor: ['rgba(255, 0, 0, 1)'],
            borderWidth: 1
        }, 
        {
            label: '# -',
            data: [1, 1, 1, 1, 1],
            type: 'line',
            backgroundColor: [
                'rgba(255, 255, 51, 0)',
                ],
            borderColor: ['rgba(255, 255, 51, 1)'],
            borderWidth: 1
        }],
        
        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: { min: 0, max: ,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: { max: 10,
                    
                }
            }]
        }

        
    }


    
});


function submitChart() {

    event.preventDefault();

    let year = new Date().getFullYear()
    let month = new Date().getMonth()+1;
    let day = new Date().getUTCDate()
    let hour = new Date().getUTCHours()
    let minu = new Date().getUTCMinutes()
if(minu < 10) '0' + minu

    let date = day + '/' + month + '/' + year
    let time = hour + ':' + minu
   let timeDate = date + '-' + time

  
   let Spool1 = Number(document.getElementById("exampleSpool1").value)
   let Spool2 = Number(document.getElementById("exampleSpool2").value)
   let Spool3 = Number(document.getElementById("exampleSpool3").value)
   let Spool4 = Number(document.getElementById("exampleSpool4").value)


      
    let first = Number(document.getElementById("exampleNumber1").value)
    let second = Number(document.getElementById("exampleNumber2").value)
    let thirth = Number(document.getElementById("exampleNumber3").value)
    let forth = Number(document.getElementById("exampleNumber4").value)

    

          
    let average = (first + second + thirth + forth)/4

    array.push(average)

    
    let max = Math.max(first, second, thirth, forth)
    let min = Math.min(first, second, thirth, forth);

    let range = (max-min)
    
    arrayRange.push(range)

    let num ={timeDate, Spool1, first, Spool2, second, Spool3, thirth, Spool4, forth}

    
        localStorage.setItem('infos', JSON.stringify(num))
        let infos = JSON.parse(localStorage.getItem('infos'))

     

        HttpRequest.post('/data', infos)
       
       
          

    for(let i = 1; i<= array.length; i++){
        x.push(i)
        x = [...new Set(x)]

        localStorage.setItem('datas', JSON.stringify(array))
        let datas = JSON.parse(localStorage.getItem('datas'))

        localStorage.setItem('range', JSON.stringify(arrayRange))
        let xRange = JSON.parse(localStorage.getItem('range'))

        localStorage.setItem('labels', JSON.stringify(x))
        let xLine = JSON.parse(localStorage.getItem('labels'))

        

        

               
       formEl.reset()

       var char = document.getElementById('myChart2');
    var myChart2 = new Chart(char, {
        type: 'line',
        data: {
            labels: xLine,
            datasets: [{
                label: '# Range',
                data: xRange,
                backgroundColor: [
                    'rgba(102, 153, 255, 0)',
                ],
                borderColor: [
                    'rgba(102, 153, 255, 1)'
                ],
                borderWidth: 1
            },{
            label: '# Max',
            data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            type: 'line',
            backgroundColor: [
                'rgba(255, 0, 0, 0)',
                ],
            borderColor: ['rgba(255, 0, 0, 1)'],
            borderWidth: 1
        }, 
        {
            label: '# -',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            type: 'line',
            backgroundColor: [
                'rgba(255, 255, 51, 0)',
                ],
            borderColor: ['rgba(255, 255, 51, 1)'],
            borderWidth: 1
        }],
        
        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: { min: 0, max: ,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: { max: 10,
                    
                }
            }]
        }

        
    }


    
});
    

    
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLine,
            datasets: [{
                label: '# XBar',
                data: datas,
                backgroundColor: [
                    'rgba(102, 153, 255, 0)',
                ],
                borderColor: [
                    'rgba(102, 153, 255, 1)',
                ],
                borderWidth: 1
            }, {
                label: '# Max',
                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 0, 0, 0)',
                    ],
                borderColor: ['rgba(255, 0, 0, 1)'],
                borderWidth: 1
            }, {
                label: '# Min',
                data: [1,1,1,1,1, 1,1,1,1,1],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 0, 0, 0)',
                    ],
                borderColor: ['rgba(255, 0, 0, 1)'],
                borderWidth: 1
            },
            {
                label: '# -',
                data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 255, 51, 0)',
                    ],
                borderColor: ['rgba(255, 255, 51, 1)'],
                borderWidth: 1
                
            }, {
                label: '# --',
                data: [2, 2, 2, 2, 2],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 255, 51, 0)',
                    ],
                borderColor: ['rgba(255, 255, 51, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: { min: 0, max: 5,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: { max: 10,
                        
                    }
                }]
            }
        }
    });

    
    
}


}



function resetChart(){

    location.reload(true)

    event.clear;
 
    var char = document.getElementById('myChart2');
    var myChart2 = new Chart(char, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '# Range',
                data: [],
                backgroundColor: [
                    'rgba(102, 153, 255, 0)',
            ],
            borderColor: [
                'rgba(102, 153, 255, 1)'
                ],
                borderWidth: 1
            },{
                label: '# Max',
                data: [2, 2, 2, 2, 2],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 0, 0, 0)',
                    ],
                borderColor: ['rgba(255, 0, 0, 1)'],
                borderWidth: 1
            }, 
            {
                label: '# -',
                data: [1, 1, 1, 1, 1],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 255, 51, 0)',
                    ],
                borderColor: ['rgba(255, 255, 51, 1)'],
                borderWidth: 1
            }],
            
            
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: { min: 0, max: ,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: { max: 10,
                        
                    }
                }]
            }
    
            
        }
    
    
        
    });
    

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '# xRange',
                data: [],
                backgroundColor: [
                    'rgba(102, 153, 255, 0)',
                ],
                borderColor: [
                    'rgba(102, 153, 255, 1)',
                ],
                borderWidth: 1

            }, {
                label: '# Max',
                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 0, 0, 0)',
                    ],
                borderColor: ['rgba(255, 0, 0, 1)'],
                borderWidth: 1
            }, {
                label: '# Min',
                data: [1,1,1,1,1,1,1,1,1,1],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 0, 0, 0)',
                    ],
                borderColor: ['rgba(255, 0, 0, 1)'],
                borderWidth: 1
            },
            {
                label: '# -',
                data: [3, 3, 3, 3, 3],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 255, 51, 0)',
                    ],
                borderColor: ['rgba(255, 255, 51, 1)'],
                borderWidth: 1
            }, {
                label: '# --',
                data: [2, 2, 2, 2, 2],
                type: 'line',
                backgroundColor: [
                    'rgba(255, 255, 51, 0)',
                    ],
                borderColor: ['rgba(255, 255, 51, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: { min: 0, max: 5,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: { max: 10,
                        
                    }
                }]
            }
        }
    });


    
}



function data() {
    
   var x=new XMLHttpRequest();
   x.open("GET", "http://localhost:3000/data", true);
   x.responseType = 'blob';
    
   	x.onload=function(e){download(x.response, "data.json", "data.json" ); }
   x.send();

     
 

                  //cria linha da tabela 
         


    }

    







