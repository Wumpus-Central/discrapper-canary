n.d(t, { Z: () => p });
var r = n(913527),
    i = n.n(r),
    a = n(388032);
let o = 60,
    s = 3600,
    l = 86400,
    c = 2592000,
    u = 31104000,
    d = () => ({
        seconds: a.t.sMPmtr,
        minutes: a.t.N9M4Nz,
        hours: a.t.p0KedH,
        days: a.t.gjK5am,
        months: a.t.kHo4Oj,
        years: a.t.KjKr2N
    }),
    f = (e, t) => null != t && null != t[e],
    _ = (e, t, n) => {
        var r, i, a;
        return f(e, t) ? (null != (i = null != (r = t[e]) ? r : null == n ? void 0 : n[e]) ? i : null) : null != (a = null == n ? void 0 : n[e]) ? a : null;
    },
    p = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = i()().diff(i()(e), 's'),
            f = null != t ? t() : void 0,
            p = d(),
            h = (e, t) => {
                let r = _(e, f, n ? p : void 0);
                return null == r ? null : 'string' == typeof r ? r : a.NW.formatToPlainString(r, { count: t });
            };
        if (r < o) {
            let e = (null == f ? void 0 : f.seconds) != null ? h('seconds', r) : h('minutes', 1);
            if (null != e) return e;
        }
        if (r < s) {
            let e = h('minutes', Math.floor(r / o));
            if (null != e) return e;
        }
        if (r < l) {
            let e = h('hours', Math.floor(r / s));
            if (null != e) return e;
        }
        if (r < c) {
            let e = h('days', Math.floor(r / l));
            if (null != e) return e;
        }
        if (r < u) {
            let e = h('months', Math.floor(r / c));
            if (null != e) return e;
        }
        if (r >= u && (null == f ? void 0 : f.years) != null) {
            let e = h('years', Math.floor(r / u));
            if (null != e) return e;
        }
        return i()(e).format('LL');
    };
