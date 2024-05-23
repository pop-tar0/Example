// 從document取得.img-carousel這個class，document也就是html這整個文件
const imgCarousel = document.querySelector('.img-carousel');

// 再從.img-carousel裡面找到我們要的東東
const imgContainer = imgCarousel.querySelector('.img-container');
const prevBtn = imgCarousel.querySelector('.prev-btn'); // 上一張按鈕
const nextBtn = imgCarousel.querySelector('.next-btn'); // 下一張按鈕

// 把移動距離設定為window（視窗)的寬度
let moveDistance = window.innerWidth;

// 滑動的效果為smooth平滑的
imgContainer.style.scrollBehavior = 'smooth';

// 設一個變數名字叫imgNum，預設一開始是第一張
let imgNum = 1;

// 取得每一個點點的元素
const imgPage1 = imgCarousel.querySelector('#img-page-1');
imgPage1.style.transform = 'scale(1.3)'; // 一進去要先將第一個點點放大
const imgPage2 = imgCarousel.querySelector('#img-page-2');
const imgPage3 = imgCarousel.querySelector('#img-page-3');
const imgPage4 = imgCarousel.querySelector('#img-page-4');
const imgPage5 = imgCarousel.querySelector('#img-page-5');

// prevBtn是第6行的那個按鈕
// addEventListener是一個事件發生的用法，當被click的時候就執行後面的函式！先記得這件事，我再教你函式的概念
prevBtn.addEventListener('click', () => {
    // 向左移動scrollLeft的距離，移動距離為moveDistance
    // -=是什麼東東呢？+=又是什麼東東呢？（問題六）
    imgContainer.scrollLeft -= moveDistance;

    // if...else怎麼用，請你去我給你的js影片查！
    // 檢查imgNum是否在1到5之間，如果是則imgNum減一，也就是往前一張
    if (imgNum > 1 && imgNum <= 5) {
        imgNum--;
    }
    // 根據imgNum的值，設定對應圖片的縮放效果
    // .style就是這個class或id的css！！！進到css後的transform的scale效果，注意後面要用單引號括起來！
    // 當在第一頁，第一點點就放大，其他不動！
    // 為什們不動也要寫呢？思考思考（問題七）
    if (imgNum === 1) {
        imgPage1.style.transform = 'scale(1.3)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 2) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1.3)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 3) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1.3)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 4) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1.3)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 5) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1.3)';
    }
});

// 跟上面幾乎一模一樣！自己試著解讀看看
nextBtn.addEventListener('click', () => {
    imgContainer.scrollLeft += moveDistance;

    if (imgNum >= 1 && imgNum < 5) {
        imgNum++;
    }
    if (imgNum === 1) {
        imgPage1.style.transform = 'scale(1.3)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 2) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1.3)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 3) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1.3)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 4) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1.3)';
        imgPage5.style.transform = 'scale(1)';
    } else if (imgNum === 5) {
        imgPage1.style.transform = 'scale(1)';
        imgPage2.style.transform = 'scale(1)';
        imgPage3.style.transform = 'scale(1)';
        imgPage4.style.transform = 'scale(1)';
        imgPage5.style.transform = 'scale(1.3)';
    }
});

// 當視窗大小改變時，重新設定moveDistance和imgContainer的位置
window.addEventListener('resize', () => {
    // 更新移動距離為新的視窗寬度
    moveDistance = window.innerWidth;

    // 重置imgContainer的scrollLeft為0，也就是將scroll的left等於0，將顯示第一張圖片
    // scroll就是滾輪，被我們隱藏起來了，但是scrollLeft等於0就會靠最左邊，是不是跟css的某個東西很像！！
    imgContainer.scrollLeft = 0;

    // 重置imgNum為1
    imgNum = 1;

    // 設定第一張圖片的縮放效果為放大
    imgPage1.style.transform = 'scale(1.3)';
    imgPage2.style.transform = 'scale(1)';
    imgPage3.style.transform = 'scale(1)';
    imgPage4.style.transform = 'scale(1)';
    imgPage5.style.transform = 'scale(1)';
});
