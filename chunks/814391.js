var i = r(913527),
    a = r.n(i),
    o = r(388032);
let s = 60,
    l = 3600,
    u = 86400,
    c = 2592000,
    d = 31104000,
    f = () => ({
        seconds: o.t.sMPmtr,
        minutes: o.t.N9M4Nz,
        hours: o.t.p0KedH,
        days: o.t.gjK5am,
        months: o.t.kHo4Oj,
        years: o.t.KjKr2N
    }),
    p = (e, n) => null != n && null != n[e],
    h = (e, n, r) => {
        var i, a, o;
        return p(e, n) ? (null !== (a = null !== (i = n[e]) && void 0 !== i ? i : null == r ? void 0 : r[e]) && void 0 !== a ? a : null) : null !== (o = null == r ? void 0 : r[e]) && void 0 !== o ? o : null;
    },
    _ = function (e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = a()().diff(a()(e), 's'),
            p = null != n ? n() : void 0,
            _ = f(),
            m = (e, n) => {
                let i = h(e, p, r ? _ : void 0);
                return null == i ? null : 'string' == typeof i ? i : o.intl.formatToPlainString(i, { count: n });
            };
        if (i < s) {
            let e = (null == p ? void 0 : p.seconds) != null ? m('seconds', i) : m('minutes', 1);
            if (null != e) return e;
        }
        if (i < l) {
            let e = m('minutes', Math.floor(i / s));
            if (null != e) return e;
        }
        if (i < u) {
            let e = m('hours', Math.floor(i / l));
            if (null != e) return e;
        }
        if (i < c) {
            let e = m('days', Math.floor(i / u));
            if (null != e) return e;
        }
        if (i < d) {
            let e = m('months', Math.floor(i / c));
            if (null != e) return e;
        }
        if (i >= d && (null == p ? void 0 : p.years) != null) {
            let e = m('years', Math.floor(i / d));
            if (null != e) return e;
        }
        return a()(e).format('LL');
    };
n.Z = _;
