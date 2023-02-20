// jQuery(document).ready(function () {
//   jQuery("form").submit(function () {
//     // Событие отправки с формы
//     var form_data = jQuery(this).serialize(); // Собираем данные из полей
//     var form = this;
//     jQuery
//       .ajax({
//         type: "POST", // Метод отправки
//         url: "sendform.php", // Путь к PHP обработчику
//         data: form_data,
//         success: swal({
//           title: "Спасибо за заявку!",
//           type: "success",
//           showConfirmButton: false,
//           timer: 2000,
//         }),
//       })
//       .done(function () {
//         form.reset();
//       });
//     $(this).find("input, textarea").prop("disabled", false); // Повторная отправка
//     event.preventDefault();
//   });
// });
