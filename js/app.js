
let stopwatchPageContainer = document.querySelector('.stopwatch-page__stopwatch');
let startButton = document.querySelector('.stopwatch-page__button_start');
let pauseButton = document.querySelector('.stopwatch-page__button_pause');
let resetButton = document.querySelector('.stopwatch-page__button_reset');

let santisecond = "00";
let second = "00";
let minute = "00";

startButton.addEventListener('click', function () {
	if (!startButton.classList.contains('active')) {

		startButton.classList.add('active');

		let stopwatchGo = setInterval(function () {

			++santisecond;
			santisecond < 10 ? (santisecond = '0' + santisecond) : santisecond;

			if (santisecond == 100) {
				santisecond = "00";
				++second;
				second < 10 ? (second = '0' + second) : second;
			};

			if (second == 60) {
				second = "00";
				++minute;
				minute < 10 ? (minute = '0' + minute) : minute;
			};

			stopwatchPageContainer.innerHTML = minute + ':' + second + ':' + santisecond;

		}, 10);

		pauseButton.addEventListener('click', function () {
			clearInterval(stopwatchGo);
			startButton.classList.remove('active');
		});

		resetButton.addEventListener('click', function () {
			clearInterval(stopwatchGo);
			santisecond = "00";
			second = "00";
			minute = "00";
			stopwatchPageContainer.innerHTML = minute + ':' + second + ':' + santisecond;
			startButton.classList.remove('active');
		});
	};
});
