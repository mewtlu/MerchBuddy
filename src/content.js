/**
 * @file MerchBuddy
 * @author Luke Roberts <luke@mewt.eu>
 * @version 0.0.1
 */
 
function checkInputImportance(input){
	/**
	 * Checks whether an input is one of the 5 that matter to us
	 * @param {Object} input - A jQuery DOM object
	 */
	var isTextArea = input.prop("tagName").toLowerCase() == "textarea",
		hasMaxLength = input.attr("maxlength");
	
	if(input.attr("type"))
		isTextInput = input.attr("type").toLowerCase() == 'text';

	//console.log(hasMaxLength, isTextArea, isTextInput)
	return hasMaxLength && (isTextArea || isTextInput);
}

$(document).ready(function(){
    var doc = $(document),
        inputs = $("input, textarea");


	(function(){
		/**
		 * Text box character count
		 */
		inputs.each(function(){
			/**
			 * Iterate through each HTML <input> element on the page
			 */
			var input = $(this);

			if (checkInputImportance(input)) {
				var label = $("<label>"),
					name;

				label.html(input.val().length + " / " + input.attr("maxlength"));
				label.css("width", "30%");
				label.css("display", "inline");
				label.css("padding-left", "10px");
				input.css("width", "70%");
				if (name = input.attr("name")) {
					label.attr("for", name);
				}
				
				input.on("keyup change", function(){
					/**
					 * Bind a function to update the label whenever keyup or change events are fired on the input.
					 */
					if (input.attr("name")) {
						var labelStr = "label[for='" + input.attr("name") + "']";
					} else {
						var labelStr = "label";
					}
					label = $(labelStr); // select the label we want to change
					label.html(input.val().length + " / " + input.attr("maxlength"));
				});

				input.parent().append(label);
			}
		});
	})();

});