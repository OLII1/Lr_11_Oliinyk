$(document).ready(function () {

    const words = [
        { en: "always", ua: "завжди" },
        { en: "never", ua: "ніколи" },
        { en: "often", ua: "часто" },
        { en: "sometimes", ua: "інколи" },
        { en: "quickly", ua: "швидко" },
        { en: "slowly", ua: "повільно" },
        { en: "strong", ua: "сильний" },
        { en: "weak", ua: "слабкий" },
        { en: "happy", ua: "щасливий" },
        { en: "sad", ua: "сумний" }
    ];

    let current = 0;
    let correct = 0;
    let wrong = 0;

    const shuffle = arr => arr.sort(() => Math.random() - 0.5);
    const shuffled = shuffle([...words]);

    function loadCard() {
        $("#card").text(shuffled[current].en);
        $("#step").text((current + 1) + "/" + shuffled.length);
        $("#answer").val("").focus();
    }

    loadCard();

    $("#card").click(function () {
        let user = $("#answer").val().trim().toLowerCase();
        let right = shuffled[current].ua;

        if (user === right) {
            correct++;
            $("#correctCount").text(correct);
        } else {
            wrong++;
            $("#wrongCount").text(wrong);
        }

        current++;

        if (current >= shuffled.length) {
            showResult();
        } else {
            loadCard();
        }
    });

    $("#next").click(function () {
        if (current < shuffled.length - 1) {
            current++;
            loadCard();
        }
    });

    $("#prev").click(function () {
        if (current > 0) {
            current--;
            loadCard();
        }
    });

    function showResult() {
        let percent = Math.round((correct / shuffled.length) * 100);
        $("#resultText").text("Ваш рівень знань: " + percent + "%");
        $("#modal").css("display", "flex");
    }

    $("#closeModal").click(function () {
        $("#modal").hide();
    });

});
