t.d(l, { Ay: () => E, F2: () => u, Qs: () => _, Z_: () => T });
var r = t(627968),
    n = t(64700),
    o = t(835245),
    i = t(204990),
    a = t(604238),
    s = t(856535),
    d = t(55391);
function c(e, l) {
    return e.children.map((e) =>
        (function e(l, t) {
            if ("string" == typeof l) return l;
            let { block: n, ...a } = l,
                s = t[n];
            if (null == s) return null;
            let d = (() => {
                    if ("children" in l) {
                        if (!Array.isArray(l.children) && null != l.children) return e(l.children, t);
                        if (null != l.children && l.children.length > 0) return l.children.map((l) => e(l, t));
                    }
                    return null;
                })(),
                c = i.E.has(n) ? { ...a, componentMap: t } : a;
            return (0, r.jsx)(s, { ...c, children: d }, (0, o.A)());
        })(e, l),
    );
}
function u(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.E;
    try {
        return c(e, l), !0;
    } catch (e) {
        return !1;
    }
}
class h extends n.Component {
    state = { hasError: !1 };
    static getDerivedStateFromError() {
        return { hasError: !0 };
    }
    componentDidCatch() {
        this.props.onError?.();
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}
let m = (e) => {
        let { layout: l, Components: t } = e;
        return n.useMemo(() => c(l, t), [l, t]);
    },
    p = (e) => {
        let { layout: l, overrides: t, onError: o, onEmptyLayout: i } = e,
            s = (0, a.e)({ overrides: t });
        return (
            n.useEffect(() => {
                0 === l.children.length && i?.();
            }, [l, i]),
            (0, r.jsx)(h, { onError: o, children: (0, r.jsx)(m, { layout: l, Components: s }) })
        );
    },
    _ = (e) => {
        let { layoutId: l, tenantId: t, overrides: o, onError: i, onEmptyLayout: a } = e,
            { layout: d, error: c } = (0, s.A)(t, l);
        return (n.useEffect(() => {
            null != c && i?.();
        }, [c, i]),
        null == d)
            ? null
            : (0, r.jsx)(p, { layout: d, overrides: o, onError: i, onEmptyLayout: a });
    },
    T = (e) => {
        let { templateId: l, tenantId: t, overrides: o, onError: i, onEmptyLayout: a, requestParams: s } = e,
            { layout: c, error: u } = (0, d.A)(t, l, s);
        return (n.useEffect(() => {
            null != u && i?.();
        }, [u, i]),
        null == c)
            ? null
            : (0, r.jsx)(p, { layout: c, overrides: o, onError: i, onEmptyLayout: a });
    },
    E = p;
