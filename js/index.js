var song_index = 2
var play_button = document.getElementById('master-p-pause')
var startsong = document.getElementsByClassName('song_card')[song_index].getElementsByTagName('audio')[0]

function trding() {


    if (document.getElementById('chkbox').checked == true) {
        document.getElementById('trding').style.margin = '450px auto auto auto'
    } else {
        document.getElementById('trding').style.margin = '14px auto auto auto'
    }
}

let count = true;
var a = document.getElementById("music1").addEventListener('click', () => {

    if (count) {
        document.getElementById('music1').setAttribute("class", "fa fa-pause")
        count = false
        document.querySelector('#song2 audio').play()


    } else {

        document.getElementById('music1').setAttribute("class", "fa-regular fa-circle-play")
        count = true
        document.querySelector('#song2 audio').pause()
    }
})










var songs = Array.from(document.getElementsByClassName('song_card'))

songs.forEach((element, i) => {
    
    element.setAttribute('id', i)


});



Array.from(document.getElementsByClassName('trending_music_card')).forEach((element2, i) => {

    element2.setAttribute('id', "m" + i)


});




Array.from(document.getElementsByClassName('song_card')).forEach((element, i) => {
    element.addEventListener('click', (e) => {

        console.log(element.getElementsByTagName('audio')[0])

        console.log(e.target.id)
        if (element.getElementsByTagName('audio')[0].paused) {
            pauseallsong()
            pauseallsongtrending()


            element.getElementsByTagName('audio')[0].play()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-pause")
            document.getElementsByClassName('play-bar')[0].style.opacity = 1

            element.getElementsByTagName('audio')[0].addEventListener('timeupdate', () => {

                songcurrentime = element.getElementsByTagName('audio')[0].currentTime
                songduration = element.getElementsByTagName('audio')[0].duration

                document.getElementsByClassName('play-bar')[0].getElementsByTagName('input')[0].value = songcurrentime / songduration * 100
                document.getElementsByClassName('play-bar')[0].getElementsByTagName('i')[1].setAttribute("class", "fa fa-pause fa-2x")
                
                
            })
            
            
        } else {

            element.getElementsByTagName('audio')[0].pause()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
            document.getElementsByClassName('play-bar')[0].style.opacity = 0
            document.getElementsByClassName('play-bar')[0].getElementsByTagName('i')[1].setAttribute("class", "fa-regular fa-circle-play fa-2x")
        }

        play_button.addEventListener('click', () => {
            pauseallsong()
            // play_button.setAttribute("class", "fa fa-play fa-2x")
        
        })
    })


})


Array.from(document.getElementsByClassName('trending_music_card')).forEach((element, i) => {
    element.addEventListener('click', (e) => {

        console.log(element.getElementsByTagName('audio')[0])
        console.log(e.target.id)
        if (element.getElementsByTagName('audio')[0].paused) {
            pauseallsongtrending()
            pauseallsong()

            element.getElementsByTagName('audio')[0].play()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-pause")
            document.getElementsByClassName('play-bar')[0].style.opacity = 1
            console.log(document.querySelector('.play-bar'))
            console.log(document.getElementsByClassName('play-bar')[0])


            element.getElementsByTagName('audio')[0].addEventListener('timeupdate', () => {

                songcurrentime = element.getElementsByTagName('audio')[0].currentTime
                songduration = element.getElementsByTagName('audio')[0].duration

                document.getElementsByClassName('play-bar')[0].getElementsByTagName('input')[0].value = songcurrentime / songduration * 100
                document.getElementsByClassName('play-bar')[0].getElementsByTagName('i')[1].setAttribute("class", "fa fa-pause fa-2x")
                
            })


        } else {

            element.getElementsByTagName('audio')[0].pause()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
            document.getElementsByClassName('play-bar')[0].style.opacity = 0
            document.getElementsByClassName('play-bar')[0].getElementsByTagName('i')[1].setAttribute("class", "fa-regular fa-circle-play fa-2x")
        }




    })

})





function pauseallsong() {
    songs.forEach(element => {
        element.getElementsByTagName('audio')[0].pause()
        element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
        play_button.setAttribute("class", "fa fa-play fa-2x")
    });


}


function pauseallsongtrending() {
    Array.from(document.getElementsByClassName("trending_music_card")).forEach(element => {
        element.getElementsByTagName('audio')[0].pause()
        element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
    });


}


var counter = 0;

Array.from(document.getElementsByClassName('container')[0].getElementsByTagName('img')).forEach((element2, i) => {
    element2.style.left = `${i * 100}%`
});

function slideimage() {

    Array.from(document.getElementsByClassName('container')[0].getElementsByTagName('img')).forEach((element2, i) => {

        element2.style.transform = `translateX(-${counter * 100}%)`

    });

}
function nextimage() {


    if (counter > document.getElementsByClassName('container')[0].getElementsByTagName('img').length - 1) {
        counter = 0
        console.log("value is greater then 3")
    }
    slideimage()
    counter++
}
setInterval(nextimage, 1500)




    function autoplay(){


        
            songs.forEach(element => {
                // conso    le.log(element.getElementsByTagName('audio')[0])
                var verify=0           
                if(element.getElementsByTagName('audio')[0].pause){

                    playsongstart() 
                    // console.log("Yes song is pause")
                                        

                                }
                            
                            
                        
                        });
                        
        
        



    }



        
            function playsongstart(){

                song_start_index=0
                document.getElementsByTagName('audio')[song_start_index].play()


            }




