n.d(t, {
    H: () => a,
    c: () => r
});
var i = n(570140);
function r(e) {
    i.Z.wait(() =>
        i.Z.dispatch({
            type: 'NUF_NEW_USER',
            newUserType: e
        })
    );
}
function a() {
    i.Z.wait(() => i.Z.dispatch({ type: 'NUF_COMPLETE' }));
}
