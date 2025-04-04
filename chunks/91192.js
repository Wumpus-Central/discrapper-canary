n.d(t, {
    Ie: () => E,
    JA: () => g,
    OP: () => v,
    SJ: () => I,
    bG: () => S,
    eg: () => y,
    f$: () => m,
    l2: () => O,
    mh: () => b,
    qB: () => h
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(25441),
    a = n(536895),
    s = n(260866);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {
        id: 'NO_LIST',
        setFocus() {}
    },
    _ = {
        id: 'NO_LIST',
        onKeyDown() {},
        orientation: a.hy.VERTICAL,
        ref: i.createRef(),
        tabIndex: -1
    },
    p = i.createContext(f),
    h = i.createContext(_);
function m() {
    return i.useContext(p);
}
function g(e) {
    let [t, n] = i.useState(-1),
        { id: r, setFocus: a } = m(),
        l = i.useCallback(() => a(e), [e, a]);
    return (
        i.useLayoutEffect(
            () =>
                (0, o.N)(r, (t, r) => {
                    n(r && t === e ? 0 : -1);
                }),
            [e, r]
        ),
        {
            role: 'listitem',
            [s.ie]: (0, s.jb)(r, e),
            tabIndex: t,
            onFocus: l
        }
    );
}
function E(e) {
    return d(c({}, g(e)), { role: 'treeitem' });
}
function b(e) {
    let { children: t, id: n } = e;
    return t(g(n));
}
function y() {
    return i.useContext(h).ref;
}
function v() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r } = i.useContext(h);
    return {
        role: 'list',
        tabIndex: r,
        [s.kn]: e,
        onKeyDown: t,
        ref: n
    };
}
function O(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: r, tabIndex: i },
        orientation: o
    } = e;
    return {
        role: 'list',
        onKeyDown: n,
        ref: r,
        [s.kn]: t,
        tabIndex: i
    };
}
function I(e) {
    let { children: t } = e;
    return t(v());
}
function S(e) {
    let { children: t, navigator: n } = e,
        {
            id: o,
            setFocus: a,
            containerProps: { onKeyDown: s, ref: l, tabIndex: c },
            orientation: u
        } = n,
        d = i.useMemo(
            () => ({
                id: o,
                setFocus: a
            }),
            [o, a]
        ),
        f = i.useMemo(
            () => ({
                onKeyDown: s,
                orientation: u,
                ref: l,
                id: o,
                tabIndex: c
            }),
            [s, u, l, o, c]
        );
    return (0, r.jsxs)(h.Provider, {
        value: f,
        children: [
            (0, r.jsx)(p.Provider, {
                value: d,
                children: t
            }),
            ' '
        ]
    });
}
