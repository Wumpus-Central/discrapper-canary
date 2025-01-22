e.d(n, {
    C: function () {
        return u;
    },
    k: function () {
        return o;
    }
});
var i = e(192379),
    r = e(937615),
    l = e(388032);
function u(t) {
    return i.useMemo(() => {
        if (null == t) return;
        let n = null != t.role_id,
            e = t.attachments_count > 0;
        if (n && e) return l.intl.string(l.t.ih4QMT);
        if (n) return l.intl.string(l.t.o9xphY);
        if (e) return l.intl.string(l.t.DWYJub);
    }, [t]);
}
function o(t) {
    return i.useMemo(() => {
        if ((null == t ? void 0 : t.price) == null) return;
        let { amount: n, currency: e } = t.price;
        return (0, r.T4)(n, e);
    }, [t]);
}
