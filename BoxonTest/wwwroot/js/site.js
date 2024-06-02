
var engCount = 0;
var arbCount = 0;
var engFormHTML = '';
var arbFormHTML = '';
var checkRequest = 'englishOnly';
var listOfIds = new Array();


$("input[name=optradio]").click(function () {
    checkRequest = $("input[name=optradio]:checked").val();
    if (checkRequest === 'englishOnly') {
        document.getElementById("btnAddBothForm").style.display = "block";
        document.getElementById("btnAddEngForm").style.display = "none";
        document.getElementById("btnAddArbForm").style.display = "none";
    } else {
        document.getElementById("btnAddBothForm").style.display = "none";
        document.getElementById("btnAddEngForm").style.display = "block";
        document.getElementById("btnAddArbForm").style.display = "block";
    }
    if (listOfIds.length > 0) {
        for (const propertyName in listOfIds) {
            let element = listOfIds[propertyName];
            if (checkRequest === 'englishOnly') {
                document.getElementById(element).style.visibility = "hidden";
            }
            else {
                document.getElementById(element).style.visibility = "visible";
            }
        }
    }
    
});
function addElement(request) {

    if (checkRequest === 'englishOnly') {
        engCount++;
        arbCount++;
        this.setEnglishTemplate(engCount);
        this.setArabicTemplate(arbCount);
    }
    else {
        if (request === 'english') {
            engCount++;
            this.setEnglishTemplate(engCount);
        }
        else {
            arbCount++;
            this.setArabicTemplate(arbCount);
            document.getElementById('btnArabic'+arbCount).style.visibility = "visible";
        }
    }

}
function setEnglishTemplate(tempID){
    engFormHTML = '<div id="eng_' + tempID + '" ><div class="panel panel-default"> <div class="panel-body"> <div class="form-group"> <div class="col-xs-3"> <label for= "name"> Name: </label> </div> <div class="col-xs-9"> <input type="text" class="form-control" id = "name" placeholder = "Enter Name" name = "name" required> </div> </div> <div class="form-group"> <div class="col-xs-3"> <label for= "email" > Email: </label> </div> <div class="col-xs-9"> <input type="email" class="form-control" id = "email" placeholder = "Enter Email" name = "email" required> </div> </div> <div class="form-group"> <div class="col-xs-3"> <label for= "phone"> Phone: </label> </div> <div class="col-xs-9"> <input type="number" class="form-control" id = "phone" placeholder = "Enter Phone" name = "phone" required> </div> </div> <button id="btnEnglish' + tempID + '" onclick="removeElement(eng_' + tempID + ');" class="btn btn-danger"> <b>-</b> </button> </div> </div></div>';
    document.getElementById('englishChildArea').innerHTML += engFormHTML;
    
}
function setArabicTemplate(tempID) {
    arbFormHTML = '<div id="arb_' + tempID + '" ><div class="panel panel-default"> <div class="panel-body text-right"><button style="visibility:hidden;" id="btnArabic' + tempID + '"  onclick="removeElement(arb_' + tempID + ');" class="btn btn-danger"> <b>-</b> </button>  <div class="form-group"> <div class="col-xs-9"> <input type="number" class="form-control" id = "phone" placeholder = "أدخل الهاتف" name = "phone" required> </div><div class="col-xs-3"> <label for= "phone"> :هاتف </label> </div>  </div><div class="form-group"> <div class="col-xs-8"> <input type="email" class="form-control" id = "email" placeholder = "أدخل البريد الإلكتروني" name = "email" required> </div><div class="col-xs-4"> <label for= "email" > :بريد إلكتروني </label> </div>  </div><div class="form-group"> <div class="col-xs-9"> <input type="text" class="form-control" id = "name" placeholder = "أدخل الاسم" name = "name" required> </div><div class="col-xs-3"> <label for= "name"> :اسم </label> </div>  </div>   </div> </div></div>';
    document.getElementById('arabicChildArea').innerHTML += arbFormHTML;
    listOfIds.push("btnArabic" + tempID + "");
    //console.log(listOfIds);
}
function removeElement(deleteId) {
    
    let elementId = deleteId.id.split("_");
    let prefix = elementId[0];
    let postfix = elementId[1];
    debugger;
    if (checkRequest === 'englishOnly') {
        $("#eng_" + postfix).remove();
        $("#arb_" + postfix).remove();
        listOfIds.pop("btnArabic" + postfix + "");
    }
    else {
        if (prefix === 'eng') {
            $("#eng_" + postfix).remove();
        }
        else {
            $("#arb_" + postfix).remove();
            listOfIds.pop("btnArabic" + postfix + "");
        }
    }
    
}