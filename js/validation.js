function validate_entered(field,alertmsg, leng)
{
  with (field)
  {
    if(value==null||value.length<leng)
    {
      alert(alertmsg); return false;
    }else {
      return true;
    }
  }
}
function validate_numeric(field, alertmsg) {
    with (field) {
        if (isNaN(value) == true) {
            alert(alertmsg); return false;
        }
        else {
            {
                return true;
            }
        }
    }
    function chkEmailaddr(field, alertmsg) {
        with (field) {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test(value) == false) {
                alert(alertmsg); return false;
            }
            else {
                return true;
            }
        }
    }
    function validate_wholeform(thisform) {
        with (thisform) {
            if (validate_entered(firstname, "Name is missing or to short. Please re-enter.",2)== false)
            { firstname.focus(); return false; }
            else if (validate_entered(lastname, "Lastname is missing or to short. Please re-enter.",2)== false)
            { lastname.focus(); return false;}
            else if (validate_numeric(phone, "Phone number is invalid. Please re-enter.",5)== false)
            { phone.focus(); return false;}
            else if (validate_entered(email, "Email is missing or to short. Please re-enter.",6)== false)
            {email.focus(); return false;}
            else if (chkEmailaddr(email, "Email address is invalid. Please re-enter.") == false)
            {email.focus(); return false;}
            else if (validate_entered(uname, "Username is missing or to short. Please re-enter.") == false)
            {uname.focus(); return false;}
            else if (validate_entered(psw, "Password is missing or to short. Please re-enter.") == false)
            { psw.focus(); return false;}
        }
    }
}
