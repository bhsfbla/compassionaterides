(function() {
    let currentPage = 1;
    const prevBtn = document.querySelector(".form .footer .prev");
    const nextBtn = document.querySelector(".form .footer .next");
    function movePage() {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        if (currentPage === 1) {
            prevBtn.disabled = true;
        } else if(currentPage === 5) {
            nextBtn.disabled = true;
        }
        document.querySelector(".form .pagination .active").classList.remove("active");
        document.querySelectorAll(".form .pagination .number")[currentPage-1].classList.add("active");
        const stepNode = document.querySelector(".form .steps .step");
        const width = ((currentPage-1)*stepNode.offsetWidth*-1)+"px";
        stepNode.parentNode.style.marginLeft = width;
    }
    prevBtn.addEventListener("click", function() {
        currentPage -= 1;
        movePage();
    });
    nextBtn.addEventListener("click", function() {
        currentPage += 1;
        movePage();
    })
})();

function checkFilled()  {
    var interests = document.getElementsByClassName("required-input");
    for (var i = 0; i<interests.length; i++)  {
        if (interests[i].value == '')  {
            interests[i].style.backgroundColor = '#F7D2D2';
            interests[i].style.borderColor = '#C41919';
        } else {
            interests[i].style.backgroundColor = '#D6F7D2';
            interests[i].style.borderColor = '#3DC419';
        }
    }
}

$(".required-file").click(function(e) {
    if ($(".required-file").val().length == 0) {
        $(".required-file").css("background-color", "#F7D2D2");
        $(".required-file").css("border", "1.920px solid #C41919");
    } else {
        $(".required-file").css("background-color", "#D6F7D2");  
        $(".required-file").css("border", "1.920px solid #3DC419");  
    }
});

function usWorkCheck() {
    if (document.getElementById('citizen-no').checked) {
        document.getElementById('usWorkYes').style.display = 'block';
    } else {
        document.getElementById('usWorkYes').style.display = 'none';
    }
}

function felonyCheck() {
    if (document.getElementById('felony-yes').checked) {
        document.getElementById('felonyYes').style.display = 'block';
    } else {
        document.getElementById('felonyYes').style.display = 'none';
    }
}