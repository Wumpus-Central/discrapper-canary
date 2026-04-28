l.d(t, { Ay: () => v, F2: () => u, Qs: () => g, Z_: () => f });
var r = l(627968),
    n = l(64700),
    a = l(132500),
    s = l(204990),
    i = l(77534),
    c = l(856535),
    d = l(55391);
function o(e, t) {
    return e.children.map((e) =>
        (function e(t, l) {
            if ("string" == typeof t) return t;
            let { block: n, ...i } = t,
                c = l[n];
            if (null == c) return null;
            let d = (() => {
                    if ("children" in t) {
                        if (!Array.isArray(t.children) && null != t.children) return e(t.children, l);
                        if (null != t.children && t.children.length > 0) return t.children.map((t) => e(t, l));
                    }
                    return null;
                })(),
                o = s.E.has(n) ? { ...i, componentMap: l } : i;
            return (0, r.jsx)(c, { ...o, children: d }, (0, a.A)());
        })(e, t),
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.E;
    try {
        return o(e, t), !0;
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
        let { layout: t, Components: l } = e;
        return n.useMemo(() => o(t, l), [t, l]);
    },
    p = (e) => {
        let { layout: t, overrides: l, onError: a, onEmptyLayout: s } = e,
            c = (0, i.e)({ overrides: l });
        return (
            n.useEffect(() => {
                0 === t.children.length && s?.();
            }, [t, s]),
            (0, r.jsx)(h, { onError: a, children: (0, r.jsx)(m, { layout: t, Components: c }) })
        );
    },
    g = (e) => {
        let { layoutId: t, tenantId: l, overrides: a, onError: s, onEmptyLayout: i } = e,
            { layout: d, error: o } = (0, c.A)(l, t);
        return (n.useEffect(() => {
            null != o && s?.();
        }, [o, s]),
        null == d)
            ? null
            : (0, r.jsx)(p, { layout: d, overrides: a, onError: s, onEmptyLayout: i });
    },
    f = (e) => {
        let { templateId: t, tenantId: l, overrides: a, onError: s, onEmptyLayout: i, requestParams: c } = e,
            { layout: o, error: u } = (0, d.A)(l, t, c);
        return (n.useEffect(() => {
            null != u && s?.();
        }, [u, s]),
        null == o)
            ? null
            : (0, r.jsx)(p, { layout: o, overrides: a, onError: s, onEmptyLayout: i });
    },
    v = p;
