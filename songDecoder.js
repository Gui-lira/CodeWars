function songDecoder(song){
    let list = song.split('WUB');
    let originalSong = '';
    for (let word of list) {
        if (word != list[list.length - 1] && word != '') {
            originalSong += word + ' ' 
        }
        else if (word != '' ) {
            originalSong += word
        }
    }
    return originalSong;
  }
  console.log(songDecoder('AWUBBWUBC'))