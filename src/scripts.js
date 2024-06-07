document.addEventListener('DOMContentLoaded', function () {
    const firstPrizeBtn = document.getElementById('firstPrizeBtn');
    const secondPrizeBtn = document.getElementById('secondPrizeBtn');
    const thirdPrizeBtn = document.getElementById('thirdPrizeBtn');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const resultDisplay = document.getElementById('resultDisplay');
    const resultText = document.getElementById('resultText');
    const starsContainer = document.getElementById('starsContainer');
    const closeResultDisplay = document.getElementById('closeResultDisplay');
    const example1Audio = new Audio('./static/example1.mp4');
    const example2Audio = new Audio('./static/example2.mp4');
    const example3Audio = new Audio('./static/example3.mp4');
    const cardsContainer = document.getElementById('cardsContainer');
    const mainExitBtn = document.getElementById('mainExitBtn');

    const { ipcRenderer } = require('electron');

    const codes = [];
    for (let i = 1; i <= 90; i++) {
        for (let j = 'A'.charCodeAt(0); j <= 'L'.charCodeAt(0); j++) {
            let code = (i < 10 ? '0' : '') + i + String.fromCharCode(j);
            codes.push(code);
        }
    }
    
    let thirdPrizeWinners = new Set();

    function getRandomId() {
        if (codes.length === 0) {
            alert('代码列表为空');
            return null;
        }
        return codes[Math.floor(Math.random() * codes.length)];
    }

    function playVideoAndDisplayResult(prizeType) {
        let videoFile = '';
        let audio;
        switch (prizeType) {
            case 'first':
                videoFile = './static/1.mp4';
                audio = example1Audio;
                break;
            case 'second':
                videoFile = './static/2.mp4';
                audio = example2Audio;
                break;
            case 'third':
                videoFile = './static/3.mp4';
                audio = example3Audio;
                break;
        }

        if (prizeType === 'third') {
            let ids = new Set();
            while (ids.size < 10) {
                const id = getRandomId();
                if (!thirdPrizeWinners.has(id) && !ids.has(id)) {
                    ids.add(id);
                    thirdPrizeWinners.add(id);
                }
            }
            const idArray = Array.from(ids);
            cardsContainer.innerHTML = ''; // 清空卡片容器
            idArray.forEach(id => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `<div class="number">${id.split('').join('<br>')}</div>`;
                cardsContainer.appendChild(card);
            });
            cardsContainer.style.display = 'flex'; // 显示卡片容器
            resultText.style.display = 'none'; // 隐藏结果文本
            document.querySelector('.splash-image').style.display = 'none'; // 隐藏飞溅图片
        } else {
            const id = getRandomId();
            resultText.textContent = id;
            cardsContainer.style.display = 'none'; // 隐藏卡片容器
            resultText.style.display = 'block'; // 显示结果文本
            document.querySelector('.splash-image').style.display = 'block'; // 显示飞溅图片
        }

        videoPlayer.src = videoFile;
        videoPlayer.load();
        videoContainer.style.display = 'flex';
        videoPlayer.play();
        videoPlayer.requestFullscreen({ navigationUI: 'hide' }).catch(err => {
            console.log('Fullscreen error:', err);
        });

        videoPlayer.onended = function () {
            videoContainer.style.display = 'none';
            document.exitFullscreen();
            resultDisplay.style.display = 'flex';
            if (audio) {
                setTimeout(() => {
                    audio.play();
                }, 300);
            }
        };
    }

    firstPrizeBtn.addEventListener('click', () => playVideoAndDisplayResult('first'));
    secondPrizeBtn.addEventListener('click', () => playVideoAndDisplayResult('second'));
    thirdPrizeBtn.addEventListener('click', () => playVideoAndDisplayResult('third'));

    closeResultDisplay.addEventListener('click', function () {
        resultDisplay.style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    });

    mainExitBtn.addEventListener('click', () => {
        ipcRenderer.send('app-quit');
    });
});
