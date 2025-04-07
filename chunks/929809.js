n.d(t, {
    H: () => l,
    c: () => i
});
var r = n(570140);
function i(e) {
    r.Z.wait(() =>
        r.Z.dispatch({
            type: 'NUF_NEW_USER',
            newUserType: e
        })
    );
}
function l() {
    r.Z.wait(() => r.Z.dispatch({ type: 'NUF_COMPLETE' }));
}
