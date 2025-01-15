n.d(e, {
    H: function () {
        return l;
    },
    c: function () {
        return i;
    }
});
var r = n(570140);
function i(t) {
    r.Z.wait(() =>
        r.Z.dispatch({
            type: 'NUF_NEW_USER',
            newUserType: t
        })
    );
}
function l() {
    r.Z.wait(() => r.Z.dispatch({ type: 'NUF_COMPLETE' }));
}
