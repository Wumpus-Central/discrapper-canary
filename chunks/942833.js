n.d(t, {
    C: () => a,
    k: () => s,
});
var r = n(73800),
    i = n(937615),
    o = n(388032);
function a(e) {
    return r.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n
            ? o.intl.string(o.t.ih4QMT)
            : t
              ? o.intl.string(o.t.o9xphY)
              : n
                ? o.intl.string(o.t.DWYJub)
                : void 0;
    }, [e]);
}
function s(e) {
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, i.T4)(t, n);
    }, [e]);
}
