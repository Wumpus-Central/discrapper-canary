n.d(t, {
    C: () => o,
    k: () => s,
});
var r = n(473749),
    i = n(937615),
    a = n(388032);
function o(e) {
    return r.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        return t && n
            ? a.intl.string(a.t.ih4QMU)
            : t
              ? a.intl.string(a.t.o9xphc)
              : n
                ? a.intl.string(a.t.DWYJua)
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
