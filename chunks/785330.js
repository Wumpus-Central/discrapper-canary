l.d(t, { Ay: () => E, F2: () => u, Qs: () => A, Z_: () => f });
var r = l(627968),
    n = l(64700),
    a = l(132500),
    s = l(204990),
    c = l(77534),
    i = l(856535),
    d = l(55391);
function o(e, t) {
    return e.children.map((e) =>
        (function e(t, l) {
            if ("string" == typeof t) return t;
            let { block: n, ...c } = t,
                i = l[n];
            if (null == i) return null;
            let d = (() => {
                    if ("children" in t) {
                        if (!Array.isArray(t.children) && null != t.children) return e(t.children, l);
                        if (null != t.children && t.children.length > 0) return t.children.map((t) => e(t, l));
                    }
                    return null;
                })(),
                o = s.E.has(n) ? { ...c, componentMap: l } : c;
            return (0, r.jsx)(i, { ...o, children: d }, (0, a.A)());
        })(e, t),
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.E;
    try {
        return o(e, t), !0;
    } catch (e) {
        return !1;
    }
}
class m extends n.Component {
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
let h = (e) => {
        let { layout: t, Components: l } = e;
        return n.useMemo(() => o(t, l), [t, l]);
    },
    p = (e) => {
        let { layout: t, overrides: l, onError: a, onEmptyLayout: s } = e,
            i = (0, c.e)({ overrides: l });
        return (
            n.useEffect(() => {
                0 === t.children.length && s?.();
            }, [t, s]),
            (0, r.jsx)(m, { onError: a, children: (0, r.jsx)(h, { layout: t, Components: i }) })
        );
    },
    A = (e) => {
        let { layoutId: t, tenantId: l, overrides: a, onError: s, onEmptyLayout: c } = e,
            { layout: d, error: o } = (0, i.A)(l, t);
        return (n.useEffect(() => {
            null != o && s?.();
        }, [o, s]),
        null == d)
            ? null
            : (0, r.jsx)(p, { layout: d, overrides: a, onError: s, onEmptyLayout: c });
    },
    f = (e) => {
        let { templateId: t, tenantId: l, overrides: a, onError: s, onEmptyLayout: c, requestParams: i } = e,
            { layout: o, error: u } = (0, d.A)(l, t, i);
        return (n.useEffect(() => {
            null != u && s?.();
        }, [u, s]),
        null == o)
            ? null
            : (0, r.jsx)(p, { layout: o, overrides: a, onError: s, onEmptyLayout: c });
    },
    E = p;
