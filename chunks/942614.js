n.d(t, { C: () => l, D: () => s });
var i = n(73153);
function l(e) {
    i.h.wait(() => i.h.dispatch({ type: "NUF_NEW_USER", newUserType: e }));
}
function s() {
    i.h.wait(() => i.h.dispatch({ type: "NUF_COMPLETE" }));
}
