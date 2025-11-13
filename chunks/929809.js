r.d(t, {
    H: () => l,
    c: () => o,
});
var n = r(570140);
function o(e) {
    n.Z.wait(() =>
        n.Z.dispatch({
            type: "NUF_NEW_USER",
            newUserType: e,
        }),
    );
}
function l() {
    n.Z.wait(() => n.Z.dispatch({ type: "NUF_COMPLETE" }));
}
