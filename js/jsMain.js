var nestSubmitInfo = [];




function CheckPhoneInput(phoneBox) {
  "use strict";
  if (phoneBox.value === "") {
    nestSubmitInfo[nestSubmitInfo.length] = "Phone Number - Empty";
  } else {
    if (phoneBox.validity.patternMismatch === false) {
      nestSubmitInfo[nestSubmitInfo.length] = "Phone Number - Valid";
    } else {
      nestSubmitInfo[nestSubmitInfo.length] = "Phone Number - Invalid";
    }
  }
}

function CheckEmailInput(emailBox) {
  "use strict";
  if (emailBox.value === "") {
    nestSubmitInfo[nestSubmitInfo.length] = "Email Address - Empty";
  } else {
    if (emailBox.validity === false) {
      nestSubmitInfo[nestSubmitInfo.length] = "Email Address - Valid";
    } else {
      nestSubmitInfo[nestSubmitInfo.length] = "Email Address - Invalid";
    }
  }
}

function Validate(nameId, phoneId, emailId, messageId) {
	"use strict";
	var nameBox = document.getElementById(nameId), phoneBox = document.getElementById(phoneId), emailBox = document.getElementById(emailId), messageBox = document.getElementById(messageId);

	CheckPhoneInput(phoneBox);
	CheckEmailInput(emailBox);
	ShowSubmitResult();
}

function ShowSubmitResult() {
	"use strict";
	var i, result;
	for (i = 0; i < nestSubmitInfo.length; i++) {
		result += nestSubmitInfo[i] + "\n";
	}
	alert(result);
	result = "";
}