n.d(t, { K: () => i });
var r = n(192379),
    l = n(598062);
function i(e) {
    let { location: t, user: n } = e,
        i = (0, l.X)(t);
    return (0, r.useMemo)(() => {
        if ((null == n ? void 0 : n.nameplate) != null && i) return n.nameplate;
    }, [n, i]);
}
