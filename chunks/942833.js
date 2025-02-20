n.d(t, {
    C: () => o,
    k: () => s
});
var i = n(192379),
    r = n(937615),
    l = n(388032);
function o(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n ? l.NW.string(l.t.ih4QMT) : t ? l.NW.string(l.t.o9xphY) : n ? l.NW.string(l.t.DWYJub) : void 0;
    }, [e]);
}
function s(e) {
    return i.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, r.T4)(t, n);
    }, [e]);
}
