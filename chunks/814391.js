n.d(t, { Z: () => _ });
var r = n(913527),
    i = n.n(r),
    o = n(388032);
let a = 60,
    s = 3600,
    l = 86400,
    c = 2592000,
    u = 31104000,
    d = () => ({
        seconds: o.t.sMPmtr,
        minutes: o.t.N9M4Nz,
        hours: o.t.p0KedH,
        days: o.t.gjK5am,
        months: o.t.kHo4Oj,
        years: o.t.KjKr2N
    }),
    f = (e, t) => null != t && null != t[e],
    p = (e, t, n) => {
        var r, i, o;
        return f(e, t) ? (null !== (i = null !== (r = t[e]) && void 0 !== r ? r : null == n ? void 0 : n[e]) && void 0 !== i ? i : null) : null !== (o = null == n ? void 0 : n[e]) && void 0 !== o ? o : null;
    },
    _ = function (e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = i()().diff(i()(e), 's'),
            f = null != t ? t() : void 0,
            _ = d(),
            h = (e, t) => {
                let r = p(e, f, n ? _ : void 0);
                return null == r ? null : 'string' == typeof r ? r : o.NW.formatToPlainString(r, { count: t });
            };
        if (r < a) {
            let e = (null == f ? void 0 : f.seconds) != null ? h('seconds', r) : h('minutes', 1);
            if (null != e) return e;
        }
        if (r < s) {
            let e = h('minutes', Math.floor(r / a));
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
