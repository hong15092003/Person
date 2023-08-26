
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
function startTimer() {
  // localStorage.clear();
  // Sử dụng hàm setInterval để gọi hàm changeText sau mỗi 500 mili giây
  setInterval(changeText, 500);
  var savedContent = localStorage.getItem("myDivContent");
  if (savedContent) {
    document.querySelector(".header_social").innerHTML = savedContent;
  }

}
// Gọi hàm startTimer khi trang web được tải xong
window.onload = startTimer;

function add_card(){
    var add_card=document.querySelector(".header_social");
    add_card.innerHTML+= '<div class="social_card"></div>';
    
}



function createPopup() {
  // Tạo một div mới để chứa popup
  var popup = document.createElement("div");
  popup.className = "popup_header";
  // Tạo một input để người dùng nhập tên
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Tên của bạn";
  nameInput.className = "popup_title"
  popup.appendChild(nameInput);

  // Tạo một textarea để người dùng nhập lời nhắn
  var messageInput = document.createElement("textarea");
  messageInput.placeholder = "Lời nhắn của bạn";
  messageInput.className = "popup_message";
  popup.appendChild(messageInput);


  // Tạo thẻ div chứa 2 button
  var div = document.createElement("div");
  div.style.display="flex";
  div.style.justifyContent="center";
  div.style.gap="20px";
  popup.appendChild(div);
  // Tạo một nút để người dùng gửi thông tin
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "GỬI";
  submitButton.className = "popup_btn";
  submitButton.onclick = function() {
      // Lấy giá trị từ input và textarea
      var name = nameInput.value;
      var message = messageInput.value;
      console.log(name, message);
      if(name != "" && message != "") {
        // Tạo một thẻ social_card mới và lưu thông tin vào đó
        var newSocialCard = document.createElement("div");
        newSocialCard.className = "social_card";
        newSocialCard.innerHTML += "<h1> " + name + "</h1><p> " + message + "</p>";
        document.querySelector(".header_social").appendChild(newSocialCard);
      }

      // Xử lý thông tin được gửi đi
      console.log("Tên: " + name);
      console.log("Lời nhắn: " + message);
      var divContent = document.querySelector(".header_social").innerHTML;
      localStorage.setItem("myDivContent", divContent);


      // Đóng popup
      document.body.removeChild(popup);
  }
 
  div.appendChild(submitButton);

   // Tạo nút huỷ
  var cancelButton = document.createElement("button");
  cancelButton.innerHTML = "HUỶ";
  cancelButton.className = "popup_btn"
  cancelButton.onclick = function() {
    document.body.removeChild(popup);
  }
  div.appendChild(cancelButton);

  // Thêm popup vào trang
  document.body.appendChild(popup);
}
