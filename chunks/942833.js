n.d(e, {
    C: function () {
        return o;
    },
    k: function () {
        return u;
    }
});
var i = n(192379),
    r = n(937615),
    l = n(388032);
function o(t) {
    return i.useMemo(() => {
        if (null == t) return;
        let e = null != t.role_id,
            n = t.attachments_count > 0;
        if (e && n) return l.intl.string(l.t.ih4QMT);
        if (e) return l.intl.string(l.t.o9xphY);
        if (n) return l.intl.string(l.t.DWYJub);
    }, [t]);
}
function u(t) {
    return i.useMemo(() => {
        if ((null == t ? void 0 : t.price) == null) return;
        let { amount: e, currency: n } = t.price;
        return (0, r.T4)(e, n);
    }, [t]);
}
