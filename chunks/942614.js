n.d(t, { C: () => r, D: () => a });
var i = n(73153);
function r(e) {
    i.h.wait(() => i.h.dispatch({ type: "NUF_NEW_USER", newUserType: e }));
}
function a() {
    i.h.wait(() => i.h.dispatch({ type: "NUF_COMPLETE" }));
}
