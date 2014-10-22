

$(function() {

	var savedValue =  localStorage.getItem("memo");
	$("#memoarea").val(savedValue);
	$("#memoarea").on("keyup", function () {
		if (savedValue != $(this).val()) {
			$(".mark-updated").show();
		}
	});


	setInterval(function() {
		var value = $("#memoarea").val();
		localStorage.setItem("memo", value);
		$(".mark-updated").hide();
		savedValue = value;
	}, 2000);

});

