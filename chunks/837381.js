n.d(t, {
    $y: () => O,
    KF: () => y,
    LT: () => A,
    PR: () => v,
    Vd: () => E,
    hD: () => S,
    nC: () => h,
    rm: () => g,
    tG: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(461771),
    s = n(741918),
    o = n(602034);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        id: "NO_LIST",
        setFocus() {},
    },
    p = {
        id: "NO_LIST",
        onKeyDown() {},
        orientation: s.Gl.VERTICAL,
        ref: i.createRef(),
        tabIndex: -1,
    },
    _ = i.createContext(f),
    h = i.createContext(p);

function m() {
    return i.useContext(_);
}

function g(e) {
    let [t, n] = i.useState(-1),
        { id: r, setFocus: s } = m(),
        l = i.useCallback(() => s(e), [e, s]);
    return (
        i.useLayoutEffect(
            () =>
                (0, a.e)(r, (t, r) => {
                    n(r && t === e ? 0 : -1);
                }),
            [e, r],
        ),
        {
            role: "listitem",
            [o.eM]: (0, o.t$)(r, e),
            tabIndex: t,
            onFocus: l,
        }
    );
}

function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return d(c({}, g(e)), {
        role: "treeitem",
        "aria-level": t,
    });
}

function b(e) {
    let { children: t, id: n } = e;
    return t(g(n));
}

function y() {
    return i.useContext(h).ref;
}

function O() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: r, orientation: a } = i.useContext(h);
    return {
        role: "list",
        tabIndex: r,
        [o.KE]: e,
        onKeyDown: t,
        ref: n,
        "aria-orientation": a,
    };
}

function A(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: r, tabIndex: i },
        orientation: a,
    } = e;
    return {
        role: "list",
        onKeyDown: n,
        ref: r,
        [o.KE]: t,
        tabIndex: i,
        "aria-orientation": a,
    };
}

function v(e) {
    let { children: t } = e;
    return t(O());
}

function S(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: s,
            containerProps: { onKeyDown: o, ref: l, tabIndex: c },
            orientation: u,
        } = n,
        d = i.useMemo(
            () => ({
                id: a,
                setFocus: s,
            }),
            [a, s],
        ),
        f = i.useMemo(
            () => ({
                onKeyDown: o,
                orientation: u,
                ref: l,
                id: a,
                tabIndex: c,
            }),
            [o, u, l, a, c],
        );
    return (0, r.jsxs)(h.Provider, {
        value: f,
        children: [
            (0, r.jsx)(_.Provider, {
                value: d,
                children: t,
            }),
            " ",
        ],
    });
}
