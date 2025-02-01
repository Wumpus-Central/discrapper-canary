n.d(t, { Z: () => p });
var i = n(913527),
    r = n.n(i),
    a = n(388032);
let s = 60,
    o = 3600,
    l = 86400,
    u = 2592000,
    c = 31104000,
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
        var i, r, a;
        return f(e, t) ? (null !== (r = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== r ? r : null) : null !== (a = null == n ? void 0 : n[e]) && void 0 !== a ? a : null;
    },
    p = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = r()().diff(r()(e), 's'),
            f = null != t ? t() : void 0,
            p = d(),
            h = (e, t) => {
                let i = _(e, f, n ? p : void 0);
                return null == i ? null : 'string' == typeof i ? i : a.intl.formatToPlainString(i, { count: t });
            };
        if (i < s) {
            let e = (null == f ? void 0 : f.seconds) != null ? h('seconds', i) : h('minutes', 1);
            if (null != e) return e;
        }
        if (i < o) {
            let e = h('minutes', Math.floor(i / s));
            if (null != e) return e;
        }
        if (i < l) {
            let e = h('hours', Math.floor(i / o));
            if (null != e) return e;
        }
        if (i < u) {
            let e = h('days', Math.floor(i / l));
            if (null != e) return e;
        }
        if (i < c) {
            let e = h('months', Math.floor(i / u));
            if (null != e) return e;
        }
        if (i >= c && (null == f ? void 0 : f.years) != null) {
            let e = h('years', Math.floor(i / c));
            if (null != e) return e;
        }
        return r()(e).format('LL');
    };
