

                // var count = 1
                // var a = document.getElementById("music1").addEventListener("click",()=>{
                //     count++
                   
                //     if(count%2==0){
                //     document.getElementById('music1').setAttribute("class","fa fa-pause")
                    
                //     }else{

                //         document.getElementById('music1').setAttribute("class","fa fa-circle-play")
                //     }
                // })


                let count = true;
          var a =   document.getElementById("music1").addEventListener('click',()=>{
            
              if(count){
                  document.getElementById('music1').setAttribute("class","fa fa-pause")
                  count = false
                  document.getElementById("song2").play()
                  
                    
                    }else{

                        document.getElementById('music1').setAttribute("class","fa-regular fa-circle-play")
                        count = true
                        document.getElementById("song2").pause()
                    }
                    })
                
                
                function trding(){

                    
                    if(document.getElementById('chkbox').checked == true){
                        
                        document.getElementById('trding').style.margin = '450px auto auto auto'
                        
                    }else{
                        
                        document.getElementById('trding').style.margin = '14px auto auto auto'


                        
                    }
                }

