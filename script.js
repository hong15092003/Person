
// Định nghĩa một mảng chứa các nội dung mới
var contents = greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "Hei",
    "你好",
    "こんにちは",
    "Xin chào"
  ];

  function addfunction(){
    buttonInput= document.querySelector(".addCard button");
    buttonInput.onclick = function (){
      createPopup();
    }
  }

// Định nghĩa một biến để lưu trữ chỉ số của nội dung hiện tại
var index = 0;
// Định nghĩa một biến để lưu trữ chỉ số của ký tự hiện tại
var charIndex = 0;
// Định nghĩa một hàm để thay đổi nội dung của thẻ p
function changeText() {
  // Lấy tham chiếu đến thẻ p bằng cách sử dụng id
  var p = document.getElementById("hello");
  // Lấy nội dung hiện tại từ mảng contents
  var content = contents[index];
  // Thay đổi nội dung của thẻ p bằng cách sử dụng innerHTML
  p.innerHTML = content.substring(0, charIndex + 1);
  // Tăng chỉ số của ký tự hiện tại lên 1
  charIndex++;
  // Nếu chỉ số vượt quá số lượng ký tự trong nội dung hiện tại, đặt lại chỉ số về 0 và tăng chỉ số của nội dung lên 1
  if (charIndex >= content.length) {
    charIndex = 0;
    index++;
    // Nếu chỉ số vượt quá số lượng nội dung, đặt lại chỉ số về 0
    if (index >= contents.length) {
      index = 0;
    }
  }
}
// Định nghĩa một hàm để gọi hàm changeText sau mỗi 0.5 giây

// function add_card(){
//     var add_card=document.querySelector(".header_social");
//     add_card.innerHTML+= '<div class="comment_card"></div>';
    
// }


function createPopup() {
  // Tạo một div mới để chứa popup
  var body = document.querySelector("body");
  var popup = document.createElement('div');
  popup.innerHTML = `
  <div class="popup_header">
  <input type="text" placeholder="Tên của bạn" class="popup_title">
  <textarea placeholder="Lời nhắn của bạn" class="popup_message"></textarea>
  <div>
      <button class="popup_btn">GỬI</button>
      <button class="popup_btn">HUỶ</button>
  </div>
  </div>`;
  document.body.appendChild(popup);
  submitButton = document.querySelectorAll('.popup_btn');
  console.log(submitButton);
  submitButton[0].onclick = function() {
      // Lấy giá trị từ input và textarea
      var name = document.querySelector(".popup_title").value;
      var message = document.querySelector(".popup_message").value;
      console.log(name, message);
      if(name != "" && message != "") {
        // Tạo một thẻ comment_card mới và lưu thông tin vào đó
        var newSocialCard = document.createElement("div");
        newSocialCard.className = "comment_card";
        newSocialCard.innerHTML += "<h1> " + name + "</h1><p> " + message + "</p>";
        document.querySelector(".comments_card").appendChild(newSocialCard);
      }

      // Xử lý thông tin được gửi đi
      var formData = {
        name: name,
        message: message,
      }
      createHandleComment(formData);
      // console.log("Tên: " + name);
      // console.log("Lời nhắn: " + message);
      // var divContent = document.querySelector(".header_social").innerHTML;
      // localStorage.setItem("myDivContent", divContent);


      // Đóng popup
      document.body.removeChild(popup);
  }
 

   // Tạo nút huỷ
   submitButton[1].onclick = function() {
    document.body.removeChild(popup);
   }

  // Thêm popup vào trang
 
};

var API = 'http://localhost:3000/comments'

function getComments (callback){
  fetch(API)
  .then(comments => comments.json())
  .then(callback)
}

function renderComments(comments){
   var listComments = document.querySelector(".comments_card");
   var html = comments.map(comment =>{
    return `<div class="comment_card">
              <h1>${comment.name}</h1>
              <p>${comment.message}</p>
              </div>
    `
   });
   listComments.innerHTML = html.join('');
   console.log(listComments.innerHTML)
}

function createHandleComment(data){
  var options ={
    method:'POST',
    headers: {
      "Content-Type": "application/json"  
    },
    body: JSON.stringify(data)
  }
  fetch(API,options)
}



function startTimer() {
  addfunction();
  // localStorage.clear();
  // Sử dụng hàm setInterval để gọi hàm changeText sau mỗi 500 mili giây
  setInterval(changeText, 500);
  getComments(renderComments)
}
// Gọi hàm startTimer khi trang web được tải xong
window.onload = startTimer;