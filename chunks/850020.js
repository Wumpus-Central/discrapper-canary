n.d(t, { K: () => l });
var r = n(73800),
    i = n(598062);
function l(e) {
    let { location: t, user: n } = e,
        l = (0, i.X)(t);
    return (0, r.useMemo)(() => {
        if ((null == n ? void 0 : n.nameplate) != null && l) return n.nameplate;
    }, [n, l]);
}
