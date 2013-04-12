var username = "hubothesis";

$.ajax({
	type: "GET",
	url: "data/search.json", //"https://test.hypothes.is/api/search",
	data: { user: "acct:" + encodeURIComponent(username) + "@test.hypothes.is" },
	dataType: "json",
	success: function(data) {
		if (!data.rows) {
			alert("No annotations!");
			return;
		}

		$.each(data.rows, function(index, item) {
			console.log(item);
			var container = $("<div/>").addClass("annotation").appendTo("#items");

			$.each(item.target, function(index, target) {
				var link = $("<a/>", { href: target.source, text: "Document Title!" });
				link = $("<div/>").append(link);

				$("<div/>", { html: target.quote }).addClass("item").append(link).appendTo(container);
			});
		});
	}
});
