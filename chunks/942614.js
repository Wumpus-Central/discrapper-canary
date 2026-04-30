"use strict";
n.d(t, { C: () => r, D: () => s });
var i = n(228366);
function r(e) {
    i.h.wait(() => i.h.dispatch({ type: "NUF_NEW_USER", newUserType: e }));
}
function s() {
    i.h.wait(() => i.h.dispatch({ type: "NUF_COMPLETE" }));
}
