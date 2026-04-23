l.d(t, { C: () => n, D: () => i });
var r = l(228366);
function n(e) {
    r.h.wait(() => r.h.dispatch({ type: "NUF_NEW_USER", newUserType: e }));
}
function i() {
    r.h.wait(() => r.h.dispatch({ type: "NUF_COMPLETE" }));
}
