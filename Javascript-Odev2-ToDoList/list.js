/* id bilgileri;
input --> #task
ekle butonu --> liveToastBtn
ul --> #list
*/

//DOM ile input-output aşamasında kullanılacak elementlerin seçimi
let buttonDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task") 

//listelerde silme işlemi yapabilmek için her maddeye 'X' işareti eklememiz gerekiyor. Her li'de bir tane olacağından dolayı li uzunluğu ile çalışabiliriz. Bunun için de li sayısını bir değişkene atayalım.
let liNumber = document.getElementsByTagName("li");

// liNumber kadar X ekleneceğinden dolayı döngü kullanmamız gerekiyor.
for(let i=0; i < liNumber.length;i++){ 
    let closeMark = document.createElement("span"); 
    closeMark.textContent = '\u2715'; 
    closeMark.classList.add("close");
    closeMark.onclick = deleteButton;  
    liNumber[i].onclick = check;
    liNumber[i].append(closeMark);
}

//İşlem 'butona tıklandığında' gerçekleşeceği için addEventListener eklenecek ve addLi function çağrılacak.
buttonDOM.addEventListener('click', addLi)

// ekle butonuna tıklandığında li ögesini listDOM'un sonuna ekliyoruz. Eğer bilgi girilmesiyse ve ekle butonuna tıklandıysa error mesajı değilse li ögesini ekleme işlemi yapıyoruz ve bu eklenen li ögelerine daha önceki ögelerde olan özellikleri ekliyoruz.
function addLi() {
    if (taskDOM.value == "")  {
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");
    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";
    liDOM.onclick = check;
    let closeMark = document.createElement("span");
    closeMark.textContent = '\u2715';
    closeMark.classList.add("close");
    closeMark.onclick = deleteButton;
    liDOM.append(closeMark);
    listDOM.append(liDOM);
    inputElement.value = ("");
}
}   

// deleteButton'a tıklandığında li ögesinin siliyoruz.
function deleteButton(){
    this.parentElement.remove();
}

// li ögesi seçildiğinde classına checked classı ekliyoruz.
function check(){
  this.classList.toggle("checked");
}