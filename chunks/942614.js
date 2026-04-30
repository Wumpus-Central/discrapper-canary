a.d(e, { C: () => i, D: () => o });
var n = a(228366);
function i(t) {
    n.h.wait(() => n.h.dispatch({ type: "NUF_NEW_USER", newUserType: t }));
}
function o() {
    n.h.wait(() => n.h.dispatch({ type: "NUF_COMPLETE" }));
}
