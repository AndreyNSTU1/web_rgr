let timerInterval;

        function startCountdown() {
            const userInput = document.getElementById('userInput').value;
            const timeParts = userInput.split(':');
            if (timeParts.length !== 3) {
                alert('Пожалуйста, введите время в формате "чч:мм:сс".');
                return;
            }
            const hours = parseInt(timeParts[0]);
            const minutes = parseInt(timeParts[1]);
            const seconds = parseInt(timeParts[2]);
            if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
                alert('Пожалуйста, введите корректное время.');
                return;
            }
            let totalSeconds = hours * 3600 + minutes * 60 + seconds;

            const display = document.getElementById('countdown');
            clearInterval(timerInterval);
            timerInterval = setInterval(function () {
                const formattedHours = Math.floor(totalSeconds / 3600);
                const formattedMinutes = Math.floor((totalSeconds % 3600) / 60);
                const formattedSeconds = totalSeconds % 60;
                display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

                if (--totalSeconds < 0) {
                    clearInterval(timerInterval);
                    display.textContent = 'Время вышло!';
                }
            }, 1000);
        }

        function resetCountdown() {
            clearInterval(timerInterval);
            document.getElementById('countdown').textContent = '00:00:00';
        }