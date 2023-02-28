<?php
if (isset ($_POST['contactFF'])) {
  $to = "innovations@tmk-group.com"; // своя почта
  $from = "no-reply@innovations.tmk-group.ru";
  $subject = "Регистрация";
$message = "\n\nУважаемый администратор!\n\n\n\n На вашем сайте ".$_SERVER['HTTP_REFERER']." появилось новое сообщение с формы Регистрация.\n\n\n\nЧтобы его посмотреть, перейдите по ссылке https://innovations.tmk-group.ru/\n\n\n\nДанные из формы:\n\n\n\nФИО: ".$_POST['nameFF']."\n\nТелефон: ".$_POST['telFF']."\n\nЭлектронная почта: ".$_POST['contactFF']."\n\nПолное фирменное название юр. лица: ".$_POST['companyFF']."\n\nИНН ".$_POST['tinFF']."\n\nНазвание вашего проекта: ".$_POST['projectFF']."\n\nКраткое описание проекта: ".$_POST['descriptionFF']."\n\nОписание потенциального эффекта для бизнеса ТМК: ".$_POST['businesFF']."\n\n------------------------\n\nСогласен с правилами участия в конкурсе: да";
 
  $boundary = md5(date('r', time()));
  $filesize = 0;
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
     if(is_uploaded_file($_FILES['fileFF']['tmp_name'])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'])));
         $filename = $_FILES['fileFF']['name'];
         $filetype = $_FILES['fileFF']['type'];
         $filesize += $_FILES['fileFF']['size'];
         $message.="
 
--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"
 
$attachment";
     }
   $message.="
--$boundary--";
 
  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    echo $_POST['nameFF'].', Ваше сообщение отправлено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
  }
}
?>
