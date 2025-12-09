n.d(t, { A: () => c });
var i = n(473749),
    r = n(728285),
    l = n(881824),
    a = n(516191),
    o = n(201469),
    s = n(430104);
function c(e) {
    let t = (0, r.bp)(),
        { isLive: n } = (0, o.m2)(null == e ? void 0 : e.id),
        c = (0, s.to)();
    return i.useCallback(() => {
        null != e && (c ? (0, a.Z)(() => (0, l.T)(e, t)) : n || (0, l.T)(e, t));
    }, [e, t, n, c]);
}
