﻿function login(componentid) {
    var logincontrol = jQuery("." + componentid).first();
    var usernameField = logincontrol.find("#loginEmail");
    var passwordField = logincontrol.find("#loginPassword");
    var returnUrlField = logincontrol.find("#ReturnUrl");
    jQuery.ajax(
        {
            url: "/api/accounts/_Login",
            method: "POST",
            data: {
                email: usernameField.val(),
                password: passwordField.val(),
                returnUrl: returnUrlField.val()
            },
            success: function (data) {
                if (data.RedirectUrl != null && data.RedirectUrl != undefined) {
                    window.location.assign(data.RedirectUrl);
                } else {
                    var body = logincontrol.find(".login-body");
                    var parent = body.parent();
                    body.remove();
                    parent.html(data);
                }
            }
        });
}