$(document).ready(function(){
	$("#send").click(function(){
		var datas={
			fechainit: $('#datepicker').val(),
			fechaend: $('#datepicker2').val(),
			time: $('#time').val(),
			type_graphic: $('#type_graphic').val(),
			type_value: $('#type_value').val()

		}

		 $.ajax({
        url: '/reportelogicmachine/logicmachine',
        data: datas,
        type: 'POST',
        success: function(data){
            alert(data);
        }
    });
		return false;
	})
});