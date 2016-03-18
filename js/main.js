	//Main script
	var indice;
		$(document).ready(function() {
			readJson();
			i = 0;
			variable = '';
			for (j = 0; j < indice; j++) {
				variable += '$("#item-header' + j + '").toggle( "slide", "left" , 500 );';
				i++;
			}
		
			$("#sdown").click(function() {
				eval(variable);
			});
		
		
		});
		
		
		function isEven(value) {
			if (value % 2 == 0)
				return true;
			else
				return false;
		}
		
		function readJson() {
			/**Ingresar aquí el JSON a ser parseado**/
			goUrl = 'http://claudiadhc.com/json/news_mock.json';
			(function($) {
				$.ajax({
					type: 'get',
					url: goUrl,
					async: false,
					jsonpCallback: '',
					dataType: 'json',
					success: function(json) {
		
						var html = [];
						i = 0;
						
						$.each(json, function(index, d) {
							if (isEven(i)) {
								html.push("<div class='panel panel-default'><div id='item-header" + i + "'  class='clearfix item-header'><a  data-toggle='collapse' data-parent='#feed' href='#item" + i + "' id='roundlink" + i + "' href='#'><svg width='79' height='80'  class='pull-left' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>",
									"<circle   cx='40' cy='40' r='24' class='roundcolor' /></svg>",
									"<h3  class='clearfix'>", d.title, "</h3></a></div></div>");
							} else {
								html.push("<div class='panel panel-default'><div id='item-header" + i + "'  class='clearfix item-header'><a  data-toggle='collapse' data-parent='#feed' href='#item" + i + "' id='roundlink" + i + "' href='#'><svg width='79' height='80'  class='pull-left' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>",
									"<circle   cx='40' cy='40' r='24' class='roundcolorodd' /></svg>",
									"<h3  class='clearfix'>", d.title, "</h3></a></div></div>");
		
		
							}
							html.push("<div id='item" + i + "' class='clearfix item panel-collapse collapse' ><div class='col-md-3'><img class='img-responsive' src='", d.image, "' alt='' /></div>" + "<div class='col-md-9'><a href='urlsite.php?id=" + d.id + "' title='"+ d.title +"'><h3 >", d.title, "</h3></a><p >", d.content, "</p></div></div>");
							i++;
		
						});
		
						$("#feed").html(html.join(''));
		
						indice = i;
					},
					error: function(e) {
						alert(e.message);
					}
				});
		
			})(jQuery);
		}