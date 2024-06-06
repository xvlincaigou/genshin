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

    const codes = [
        "01A", "01B", "01C", "01D", "01E", "01F", "01G", "01H", "01I", "01J", "01K", "01L",
        "02A", "02B", "02C", "02D", "02E", "02F", "02G", "02H", "02I", "02J", "02K", "02L",
        "03A", "03B", "03C", "03D", "03E", "03F", "03G", "03H", "03I", "03J", "03K", "03L",
        "04A", "04B", "04C", "04D", "04E", "04F", "04G", "04H", "04I", "04J", "04K", "04L",
        "05A", "05B", "05C", "05D", "05E", "05F", "05G", "05H", "05I", "05J", "05K", "05L",
        "06A", "06B", "06C", "06D", "06E", "06F", "06G", "06H", "06I", "06J", "06K", "06L",
        "07A", "07B", "07C", "07D", "07E", "07F", "07G", "07H", "07I", "07J", "07K", "07L",
        "08A", "08B", "08C", "08D", "08E", "08F", "08G", "08H", "08I", "08J", "08K", "08L",
        "09A", "09B", "09C", "09D", "09E", "09F", "09G", "09H", "09I", "09J", "09K", "09L",
        "10A", "10B", "10C", "10D", "10E", "10F", "10G", "10H", "10I", "10J", "10K", "10L",
        "11A", "11B", "11C", "11D", "11E", "11F", "11G", "11H", "11I", "11J", "11K", "11L",
        "12A", "12B", "12C", "12D", "12E", "12F", "12G", "12H", "12I", "12J", "12K", "12L",
        "13A", "13B", "13C", "13D", "13E", "13F", "13G", "13H", "13I", "13J", "13K", "13L",
        "14A", "14B", "14C", "14D", "14E", "14F", "14G", "14H", "14I", "14J", "14K", "14L",
        "15A", "15B", "15C", "15D", "15E", "15F", "15G", "15H", "15I", "15J", "15K", "15L",
        "16A", "16B", "16C", "16D", "16E", "16F", "16G", "16H", "16I", "16J", "16K", "16L",
        "17A", "17B", "17C", "17D", "17E", "17F", "17G", "17H", "17I", "17J", "17K", "17L",
        "18A", "18B", "18C", "18D", "18E", "18F", "18G", "18H", "18I", "18J", "18K", "18L",
        "19A", "19B", "19C", "19D", "19E", "19F", "19G", "19H", "19I", "19J", "19K", "19L",
        "20A", "20B", "20C", "20D", "20E", "20F", "20G", "20H", "20I", "20J", "20K", "20L",
        "21A", "21B", "21C", "21D", "21E", "21F", "21G", "21H", "21I", "21J", "21K", "21L",
        "22A", "22B", "22C", "22D", "22E", "22F", "22G", "22H", "22I", "22J", "22K", "22L",
        "23A", "23B", "23C", "23D", "23E", "23F", "23G", "23H", "23I", "23J", "23K", "23L",
        "24A", "24B", "24C", "24D", "24E", "24F", "24G", "24H", "24I", "24J", "24K", "24L",
        "25A", "25B", "25C", "25D", "25E", "25F", "25G", "25H", "25I", "25J", "25K", "25L",
        "26A", "26B", "26C", "26D", "26E", "26F", "26G", "26H", "26I", "26J", "26K", "26L",
        "27A", "27B", "27C", "27D", "27E", "27F", "27G", "27H", "27I", "27J", "27K", "27L",
        "28A", "28B", "28C", "28D", "28E", "28F", "28G", "28H", "28I", "28J", "28K", "28L",
        "29A", "29B", "29C", "29D", "29E", "29F", "29G", "29H", "29I", "29J", "29K", "29L",
        "30A", "30B", "30C", "30D", "30E", "30F", "30G", "30H", "30I", "30J", "30K", "30L",
        "31A", "31B", "31C", "31D", "31E", "31F", "31G", "31H", "31I", "31J", "31K", "31L",
        "32A", "32B", "32C", "32D", "32E", "32F", "32G", "32H", "32I", "32J", "32K", "32L",
        "33A", "33B", "33C", "33D", "33E", "33F", "33G", "33H", "33I", "33J", "33K", "33L",
        "34A", "34B", "34C", "34D", "34E", "34F", "34G", "34H", "34I", "34J", "34K", "34L",
        "35A", "35B", "35C", "35D", "35E", "35F", "35G", "35H", "35I", "35J", "35K", "35L",
        "36A", "36B", "36C", "36D", "36E", "36F", "36G", "36H", "36I", "36J", "36K", "36L",
        "37A", "37B", "37C", "37D", "37E", "37F", "37G", "37H", "37I", "37J", "37K", "37L",
        "38A", "38B", "38C", "38D", "38E", "38F", "38G", "38H", "38I", "38J", "38K", "38L",
        "39A", "39B", "39C", "39D", "39E", "39F", "39G", "39H", "39I", "39J", "39K", "39L",
        "40A", "40B", "40C", "40D", "40E", "40F", "40G", "40H", "40I", "40J", "40K", "40L",
        "41A", "41B", "41C", "41D", "41E", "41F", "41G", "41H", "41I", "41J", "41K", "41L",
        "42A", "42B", "42C", "42D", "42E", "42F", "42G", "42H", "42I", "42J", "42K", "42L",
        "43A", "43B", "43C", "43D", "43E", "43F", "43G", "43H", "43I", "43J", "43K", "43L",
        "44A", "44B", "44C", "44D", "44E", "44F", "44G", "44H", "44I", "44J", "44K", "44L",
        "45A", "45B", "45C", "45D", "45E", "45F", "45G", "45H", "45I", "45J", "45K", "45L",
        "46A", "46B", "46C", "46D", "46E", "46F", "46G", "46H", "46I", "46J", "46K", "46L",
        "47A", "47B", "47C", "47D", "47E", "47F", "47G", "47H", "47I", "47J", "47K", "47L",
        "48A", "48B", "48C", "48D", "48E", "48F", "48G", "48H", "48I", "48J", "48K", "48L",
        "49A", "49B", "49C", "49D", "49E", "49F", "49G", "49H", "49I", "49J", "49K", "49L",
        "50A", "50B", "50C", "50D", "50E", "50F", "50G", "50H", "50I", "50J", "50K", "50L",
        "51A", "51B", "51C", "51D", "51E", "51F", "51G", "51H", "51I", "51J", "51K", "51L",
        "52A", "52B", "52C", "52D", "52E", "52F", "52G", "52H", "52I", "52J", "52K", "52L",
        "53A", "53B", "53C", "53D", "53E", "53F", "53G", "53H", "53I", "53J", "53K", "53L",
        "54A", "54B", "54C", "54D", "54E", "54F", "54G", "54H", "54I", "54J", "54K", "54L",
        "55A", "55B", "55C", "55D", "55E", "55F", "55G", "55H", "55I", "55J", "55K", "55L",
        "56A", "56B", "56C", "56D", "56E", "56F", "56G", "56H", "56I", "56J", "56K", "56L",
        "57A", "57B", "57C", "57D", "57E", "57F", "57G", "57H", "57I", "57J", "57K", "57L",
        "58A", "58B", "58C", "58D", "58E", "58F", "58G", "58H", "58I", "58J", "58K", "58L",
        "59A", "59B", "59C", "59D", "59E", "59F", "59G", "59H", "59I", "59J", "59K", "59L",
        "60A", "60B", "60C", "60D", "60E", "60F", "60G", "60H", "60I", "60J", "60K", "60L",
        "61A", "61B", "61C", "61D", "61E", "61F", "61G", "61H", "61I", "61J", "61K", "61L",
        "62A", "62B", "62C", "62D", "62E", "62F", "62G", "62H", "62I", "62J", "62K", "62L",
        "63A", "63B", "63C", "63D", "63E", "63F", "63G", "63H", "63I", "63J", "63K", "63L",
        "64A", "64B", "64C", "64D", "64E", "64F", "64G", "64H", "64I", "64J", "64K", "64L",
        "65A", "65B", "65C", "65D", "65E", "65F", "65G", "65H", "65I", "65J", "65K", "65L",
        "66A", "66B", "66C", "66D", "66E", "66F", "66G", "66H", "66I", "66J", "66K", "66L",
        "67A", "67B", "67C", "67D", "67E", "67F", "67G", "67H", "67I", "67J", "67K", "67L",
        "68A", "68B", "68C", "68D", "68E", "68F", "68G", "68H", "68I", "68J", "68K", "68L",
        "69A", "69B", "69C", "69D", "69E", "69F", "69G", "69H", "69I", "69J", "69K", "69L",
        "70A", "70B", "70C", "70D", "70E", "70F", "70G", "70H", "70I", "70J", "70K", "70L"
    ];  // 将这里的数组初始化为空
    
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
        let starCount = 0;
        let audio;
        switch (prizeType) {
            case 'first':
                videoFile = './static/1.mp4';
                starCount = 5;
                audio = example1Audio;
                break;
            case 'second':
                videoFile = './static/2.mp4';
                starCount = 4;
                audio = example2Audio;
                break;
            case 'third':
                videoFile = './static/3.mp4';
                starCount = 3; // 三等奖设置为3颗星星
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
            starsContainer.innerHTML = ''; // 清空星星容器
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.animationDelay = `${i * 0.3}s`; // 延迟每颗星星的出现时间
                starsContainer.appendChild(star);
                if (i === 0) {
                    setTimeout(() => {
                        audio.play();
                    }, (i + 1) * 300);
                }
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
});
