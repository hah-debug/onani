const PASSWORD = "wylsb";

    var a="image/onani1-1.png";
    var c="image/feiai5-1.png";
    var e="image/meigulu6-1.png";
    var b="image/onani1-2.png";
    var d="image/feiai5-2.png";
    var f="image/meigulu6-2.png";
    var g="image/congyu7-1.png";
    var h="image/congyu7-2.png";
    var fn1="image/fangnai8-1.png";
    var fn2="image/fangnai8-2.png";
    var mz1="image/mozi9-1.png";
    var mz2="image/mozi9-2.png";
    var ty1="image/zaku10-1.png";
    var ty2="image/zaku10-2.gif";
    var ln1="image/leina11-1.png";
    var ln2="image/leina11-2.png";
    var wcy1="image/linrenxaingchi3-1.jpg";
    var wcy2="image/linrenxiangchi3-2.png";
    var wyl1="image/hhh4-1.jpg";
    var wyl2="image/hhh4-2.jpg";
    var gp1="image/aiya2-1.png";
    var gp2="image/aiya2-2.jpg";
    var mm1="image/mumu12-1.png";
    var mm2="image/mumu12-2.gif";
    var yxk1="image/xiaozi13-1.png";
    var yxk2="image/xiaozi13-2.png";


    var originalImages = {
  'img1': a,
  'img2': c,
  'img3': e,
  'img4': g,
  'img5': fn1,
  'img6': mz1,
  'img7': ty1,
  'img8':ln1,
  'img9': wyl1,
  'img10': wcy1,
  'img11':gp1,
  'img12':mm1,
  'img13':yxk1
};

function change(id,lj) {
    var img=document.getElementById(id);
    if(img){
        img.src=lj;
    }
}

function play(audioId){
                   var audio=document.getElementById(audioId);
                       audio.currentTime=0;
                       audio.play();
                       return audio;
               };

function my(id,pressedImg,audioId){
               change(id,pressedImg);
               var audio=play(audioId);
               if (audio) {
               audio.onended = null;
               };
               audio.onended=function(){
                change(id,originalImages[id]);
               };
            
               audio.onerror = function() {
    change(id, originalImages[id]);
  };
               }  
               
           
// 版本选择函数
function selectVersion(version) {
    if (version === 'normal') {
        // 显示普通版内容
        document.getElementById('version-selection').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('normal-content').style.display = 'block';
        document.getElementById('advanced-content').style.display = 'none';
        document.getElementById('normal-audios').style.display = 'block';
        document.getElementById('advanced-audios').style.display = 'none';
        document.getElementById('version-title').textContent = "玉音大放送 · sfw版";
    } else if (version === 'advanced') {
        // 显示密码输入框
        document.getElementById('password-modal').style.display = 'block';
        document.getElementById('password-input').focus();
    }
}

// 检查密码函数
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');
    
    if (input === PASSWORD) {
        // 密码正确，显示进阶版内容
        document.getElementById('password-modal').style.display = 'none';
        document.getElementById('version-selection').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('normal-content').style.display = 'none';
        document.getElementById('advanced-content').style.display = 'block';
        document.getElementById('normal-audios').style.display = 'none';
        document.getElementById('advanced-audios').style.display = 'block';
        document.getElementById('version-title').textContent = "玉音大放送 · nsfw版";
        
        // 清除输入和错误信息
        document.getElementById('password-input').value = '';
        errorMessage.textContent = '';
    } else {
        // 密码错误
        errorMessage.textContent = "密码错误，请重试！";
        document.getElementById('password-input').value = '';
        document.getElementById('password-input').focus();
    }
}

// 关闭模态框函数
function closeModal() {
    document.getElementById('password-modal').style.display = 'none';
    document.getElementById('password-input').value = '';
    document.getElementById('error-message').textContent = '';
}


