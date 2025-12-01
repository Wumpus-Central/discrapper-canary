n.d(t, { Z: () => _ });
var r = n(913527),
    i = n.n(r),
    a = n(388032);
let o = 60,
    s = 3600,
    l = 86400,
    c = 2592000,
    u = 31104000,
    d = () => ({
        seconds: a.t.sMPmtq,
        minutes: a.t.N9M4N1,
        hours: a.t.p0KedC,
        days: a.t.gjK5av,
        months: a.t.kHo4Or,
        years: a.t.KjKr2P,
    }),
    f = (e, t) => null != t && null != t[e],
    p = (e, t, n) => {
        var r, i, a;
        return f(e, t)
            ? null != (i = null != (r = t[e]) ? r : null == n ? void 0 : n[e])
                ? i
                : null
            : null != (a = null == n ? void 0 : n[e])
              ? a
              : null;
    },
    _ = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = i()().diff(i()(e), "s"),
            f = null != t ? t() : void 0,
            _ = d(),
            m = (e, t) => {
                let r = p(e, f, n ? _ : void 0);
                return null == r ? null : "string" == typeof r ? r : a.intl.formatToPlainString(r, { count: t });
            };
        if (r < o) {
            let e = (null == f ? void 0 : f.seconds) != null ? m("seconds", r) : m("minutes", 1);
            if (null != e) return e;
        }
        if (r < s) {
            let e = m("minutes", Math.floor(r / o));
            if (null != e) return e;
        }
        if (r < l) {
            let e = m("hours", Math.floor(r / s));
            if (null != e) return e;
        }
        if (r < c) {
            let e = m("days", Math.floor(r / l));
            if (null != e) return e;
        }
        if (r < u) {
            let e = m("months", Math.floor(r / c));
            if (null != e) return e;
        }
        if (r >= u && (null == f ? void 0 : f.years) != null) {
            let e = m("years", Math.floor(r / u));
            if (null != e) return e;
        }
        return i()(e).format("LL");
    };
