n.d(t, {
    H: () => o,
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
function o() {
    r.Z.wait(() => r.Z.dispatch({ type: 'NUF_COMPLETE' }));
}
