r.d(t, {
    C: () => o,
    D: () => l,
});
var n = r(73153);

function o(e) {
    n.h.wait(() =>
        n.h.dispatch({
            type: "NUF_NEW_USER",
            newUserType: e,
        }),
    );
}

function l() {
    n.h.wait(() =>
        n.h.dispatch({
            type: "NUF_COMPLETE",
        }),
    );
}
