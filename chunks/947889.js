n.d(t, { Z: () => o });
var r = n(647438),
    i = n(59662),
    a = n(518596);
function o() {
    let e = r.useContext(i.j);
    return r.useCallback(
        (t, n) => {
            (0, a.openUserSettings)(t, n), null != e && e.navigateTo(t);
        },
        [e],
    );
}
