let ball = prompt("Balingizni kiriting:");

if (ball == 180) {
 alert("siz grant ga o'qishga kirdingiz")
}else if (ball >= 130) {
  alert("siz kontrakt asosida qabul qilindizngiz, kontrakt miqdori yiliga 2000$ qancha pulingiz bor")
  let pul = prompt("pul miqdorini kiriting:");
  if (pul >= 2000) {
    alert("siz o'qishga kira olasiz")
  }else if (pul < 2000) {
    alert("o'qishga kiroisan bomij")
  }
}else if (ball > 80) {
  alert("Siz super kontrakt asosida o'qishga qabul qilindingiz, super kontrakt miqdori yiliga 3000$ qancha pulingiz bor")

  let pul = prompt("pul miqdorini kiriting:");
  if (pul >= 3000) {
    alert("siz o'qishga kira olasiz")
  }else if (pul < 3000) {
    alert("o'qishga kiroisan bomij")
  }
}else if (ball <= 80) {
  alert("Yaxshiro o'qi keyin kel")
}else {
  alert("Notog'ri qiymat kiritildi")
}
