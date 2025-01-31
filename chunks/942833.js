n.d(t, {
    C: () => s,
    k: () => a
});
var i = n(192379),
    l = n(937615),
    r = n(388032);
function s(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n ? r.intl.string(r.t.ih4QMT) : t ? r.intl.string(r.t.o9xphY) : n ? r.intl.string(r.t.DWYJub) : void 0;
    }, [e]);
}
function a(e) {
    return i.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, l.T4)(t, n);
    }, [e]);
}
