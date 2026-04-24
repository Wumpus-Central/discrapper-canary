"use strict";
r.d(t, { Ay: () => f, F2: () => o, Qs: () => g, Z_: () => v });
var l = r(627968),
    s = r(64700),
    n = r(132500),
    a = r(204990),
    i = r(77534),
    c = r(856535),
    u = r(55391);
function d(e, t) {
    return e.children.map((e) =>
        (function e(t, r) {
            if ("string" == typeof t) return t;
            let { block: s, ...i } = t,
                c = r[s];
            if (null == c) return null;
            let u = (() => {
                    if ("children" in t) {
                        if (!Array.isArray(t.children) && null != t.children) return e(t.children, r);
                        if (null != t.children && t.children.length > 0) return t.children.map((t) => e(t, r));
                    }
                    return null;
                })(),
                d = a.E.has(s) ? { ...i, componentMap: r } : i;
            return (0, l.jsx)(c, { ...d, children: u }, (0, n.A)());
        })(e, t),
    );
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.E;
    try {
        return d(e, t), !0;
    } catch (e) {
        return !1;
    }
}
class h extends s.Component {
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
        let { layout: t, Components: r } = e;
        return s.useMemo(() => d(t, r), [t, r]);
    },
    p = (e) => {
        let { layout: t, overrides: r, onError: n, onEmptyLayout: a } = e,
            c = (0, i.e)({ overrides: r });
        return (
            s.useEffect(() => {
                0 === t.children.length && a?.();
            }, [t, a]),
            (0, l.jsx)(h, { onError: n, children: (0, l.jsx)(m, { layout: t, Components: c }) })
        );
    },
    g = (e) => {
        let { layoutId: t, tenantId: r, overrides: n, onError: a, onEmptyLayout: i } = e,
            { layout: u, error: d } = (0, c.A)(r, t);
        return (s.useEffect(() => {
            null != d && a?.();
        }, [d, a]),
        null == u)
            ? null
            : (0, l.jsx)(p, { layout: u, overrides: n, onError: a, onEmptyLayout: i });
    },
    v = (e) => {
        let { templateId: t, tenantId: r, overrides: n, onError: a, onEmptyLayout: i, requestParams: c } = e,
            { layout: d, error: o } = (0, u.A)(r, t, c);
        return (s.useEffect(() => {
            null != o && a?.();
        }, [o, a]),
        null == d)
            ? null
            : (0, l.jsx)(p, { layout: d, overrides: n, onError: a, onEmptyLayout: i });
    },
    f = p;
