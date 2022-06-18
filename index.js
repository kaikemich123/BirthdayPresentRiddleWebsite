function submitAnswer() {
    var input = document.getElementById("answerbox");
    var answerfeed = document.getElementById("answerfeed");
    if (input.value.toLowerCase() === "schaduw") {
        answerfeed.innerHTML = "Yayy u did it maar er is nog 1 raadsel haha\n\n<b>Volgend raadsel: </b>\nKf lsjkhu ef wpmhfoef dmvf bmt kf nf tuvvsu pq jotubhsbn xbbs ifu gjdujfwf qfstpobhf Njob Ibslfs jo wpps lpnu."
    } else {
        answerfeed.innerHTML = answerfeed.innerHTML + "Verkeerd lmaooooooo\n\n"
    }
}   