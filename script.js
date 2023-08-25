
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
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.width= "300px";
  popup.style.minHeight= "300px";
  popup.style.height= "auto";
  popup.style.backgroundColor="#fff7ea" ;
  popup.style.display= "flex";
  popup.style.flexDirection= "column";
  popup.style.alignItems= "center";
  popup.style.borderRadius= "30px";
  popup.style.padding= "50px";
  popup.style.gap= "30px";
  popup.style.boxShadow= "#000000 0px 0px 1111vw";
  // Tạo một input để người dùng nhập tên
  var nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Tên của bạn";
  nameInput.style.border= "none";
  nameInput.style.width= "200px";
  nameInput.style.minHeight= "50px";
  nameInput.style.borderRadius= "10px";
  nameInput.style.paddingLeft="10px";
  nameInput.style.backgroundColor= "white";
  nameInput.style.color = 'rgba(0, 0, 0,0.5)'
  popup.appendChild(nameInput);

  // Tạo một textarea để người dùng nhập lời nhắn
  var messageInput = document.createElement("textarea");
  messageInput.placeholder = "Lời nhắn của bạn";
  messageInput.style.border = 'none';
  messageInput.style.width = '200px';
  messageInput.style.minHeight = '150px';
  messageInput.style.borderRadius = '10px';
  messageInput.style.padding = '20px';
  messageInput.style.backgroundColor = 'white';
  messageInput.style.color = 'rgba(0, 0, 0,0.5)'
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
  submitButton.style.width = 'auto';
  submitButton.style.padding= '0px 10px'
  submitButton.style.height = '30px';
  submitButton.style.backgroundColor = '#ff721b';
  submitButton.style.color = '#fff7ea';
  submitButton.style.borderRadius = '3px';
  submitButton.style.textAlign = 'center';
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
  cancelButton.style.width = 'auto';
  cancelButton.style.padding= '0px 10px'
  cancelButton.style.height = '30px';
  cancelButton.style.backgroundColor = '#ff721b';
  cancelButton.style.color = '#fff7ea';
  cancelButton.style.borderRadius = '3px';
  cancelButton.style.textAlign = 'center';
  cancelButton.onclick = function() {
    document.body.removeChild(popup);
  }
  div.appendChild(cancelButton);

  // Thêm popup vào trang
  document.body.appendChild(popup);
}
