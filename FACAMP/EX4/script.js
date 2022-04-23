$(document).ready(function () {
  $("#submit").on('click', function () {
    $.ajax({
      URL: 'teste.jsp',
      type: "POST",
      dataType: 'json',
      data: $("#form").serialize(),
      success: function (result) {
        console.log(result);
      },
      error: function (xhr, resp, text) {
        console.log(xhr, resp, text);
      }
    });
    $('#form').trigger("reset")
  });
});

$(document).ready(function () {
  $("#btnLimpar").click(function () {
    $('#form').trigger("reset")
  });
});
