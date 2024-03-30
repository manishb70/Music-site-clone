// responive design of nav bar

// let songs_list = [


//     { songs }

// ]
// var song_index = 3

// let audio_play = document.getElementsByClassName('song_card')[song_index].getElementsByTagName('audio')[0]



function trding() {


    if (document.getElementById('chkbox').checked == true) {
        document.getElementById('trding').style.margin = '450px auto auto auto'
    } else {
        document.getElementById('trding').style.margin = '14px auto auto auto'
    }
}

// let song_index = 0;

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

    // element.getElementsByTagName('i')[0].setAttribute('id',i)    
    // document.getElementsByClassName('song_card')[i].setAttribute('id',i)
    element.setAttribute('id', i)


});


// var songs = 

Array.from(document.getElementsByClassName('trending_music_card')).forEach((element2, i) => {

    // element.getElementsByTagName('i')[0].setAttribute('id',i)    
    // document.getElementsByClassName('song_card')[i].setAttribute('id',i)
    element2.setAttribute('id', "m"+i)


});





//     songs.forEach(function(item, index) {
//         item.addEventListener('click', function() {

//           item.getElementsByTagName('i')[0].setAttribute("class","fa fa-pause")
//         item.getElementsByTagName('audio')[0].play()

//         // song_index =parseInt(item.getElementsByTagName('i')[0].getAttribute('id'))
//             console.log(item)

//     });

// });





Array.from(document.getElementsByClassName('song_card')).forEach((element, i) => {
    element.addEventListener('click', (e) => {

        console.log(element.getElementsByTagName('audio')[0])

        console.log(e.target.id)
        if (element.getElementsByTagName('audio')[0].paused) {
            pauseallsong()
            pauseallsongtrending()


            element.getElementsByTagName('audio')[0].play()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-pause")
            document.getElementsByClassName('play-bar')[0].style.opacity=1

            element.getElementsByTagName('audio')[0].addEventListener('timeupdate',()=>{

            songcurrentime=element.getElementsByTagName('audio')[0].currentTime
            songduration=element.getElementsByTagName('audio')[0].duration

            document.getElementsByClassName('play-bar')[0].getElementsByTagName('input')[0].value=songcurrentime/songduration*100
            // document.getElementsByClassName('play-bar').value=10
            // console.log(parseInt(songcurrentime/songduration*100))
            
        
        })


        } else {

            element.getElementsByTagName('audio')[0].pause()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
            document.getElementsByClassName('play-bar')[0].style.opacity=0
        }

    })


})


Array.from(document.getElementsByClassName('trending_music_card')).forEach((element, i) => {
    element.addEventListener('click', (e) => {

        console.log(element.getElementsByTagName('audio')[0])
        // document.getElementById('Teri').addEventListener('timeupdate',()=>{

        //     songcurrentime=element.getElementsByTagName('audio')[0].currentTime
        //     songduration=element.getElementsByTagName('audio')[0].duration

        //     document.getElementById('bar').value=songcurrentime/songduration*100

        // })
        console.log(e.target.id)
        if (element.getElementsByTagName('audio')[0].paused) {
            pauseallsongtrending()
            pauseallsong() 

            element.getElementsByTagName('audio')[0].play()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-pause")
            document.getElementsByClassName('play-bar')[0].style.opacity=1
            // progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            // console.log(element.getElementsByTagName('audio')[0].currentTime)
                console.log(document.querySelector('.play-bar'))
                console.log(document.getElementsByClassName('play-bar')[0])

                
        } else {

            element.getElementsByTagName('audio')[0].pause()
            element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
            document.getElementsByClassName('play-bar')[0].style.opacity=0
        }




    })
        
})






// document.getElementsByClassName('playlist_song_card')[0].addEventListener('click', () => {



//     console.log("Hello world")

//     pauseallsong()



// })





function pauseallsong() {


    // for( i =1; i<10; i++){

    //     document.getElementById(i).getElementsByTagName('audio')[0].pause()


    // }

    songs.forEach(element => {
        element.getElementsByTagName('audio')[0].pause()
        element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
    });


}


function pauseallsongtrending() {


    // for( i =1; i<10; i++){

    //     document.getElementById(i).getElementsByTagName('audio')[0].pause()


    // }

    Array.from(document.getElementsByClassName("trending_music_card")).forEach(element => {
        element.getElementsByTagName('audio')[0].pause()
        element.getElementsByTagName('i')[0].setAttribute("class", "fa fa-play")
    });


}