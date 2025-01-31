n.d(t, {
    Ie: () => p,
    JA: () => _,
    OP: () => g,
    SJ: () => v,
    bG: () => y,
    eg: () => m,
    f$: () => f,
    l2: () => E,
    mh: () => h,
    qB: () => d
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(25441),
    s = n(536895),
    o = n(260866);
let l = {
        id: 'NO_LIST',
        setFocus() {}
    },
    u = {
        id: 'NO_LIST',
        onKeyDown() {},
        orientation: s.hy.VERTICAL,
        ref: r.createRef(),
        tabIndex: -1
    },
    c = r.createContext(l),
    d = r.createContext(u);
function f() {
    return r.useContext(c);
}
function _(e) {
    let [t, n] = r.useState(-1),
        { id: i, setFocus: s } = f(),
        l = r.useCallback(() => s(e), [e, s]);
    return (
        r.useLayoutEffect(
            () =>
                (0, a.N)(i, (t, i) => {
                    n(i && t === e ? 0 : -1);
                }),
            [e, i]
        ),
        {
            role: 'listitem',
            [o.ie]: (0, o.jb)(i, e),
            tabIndex: t,
            onFocus: l
        }
    );
}
function p(e) {
    return {
        ..._(e),
        role: 'treeitem'
    };
}
function h(e) {
    let { children: t, id: n } = e;
    return t(_(n));
}
function m() {
    return r.useContext(d).ref;
}
function g() {
    let { id: e, onKeyDown: t, ref: n, tabIndex: i } = r.useContext(d);
    return {
        role: 'list',
        tabIndex: i,
        [o.kn]: e,
        onKeyDown: t,
        ref: n
    };
}
function E(e) {
    let {
        id: t,
        containerProps: { onKeyDown: n, ref: i, tabIndex: r },
        orientation: a
    } = e;
    return {
        role: 'list',
        onKeyDown: n,
        ref: i,
        [o.kn]: t,
        tabIndex: r
    };
}
function v(e) {
    let { children: t } = e;
    return t(g());
}
function y(e) {
    let { children: t, navigator: n } = e,
        {
            id: a,
            setFocus: s,
            containerProps: { onKeyDown: o, ref: l, tabIndex: u },
            orientation: f
        } = n,
        _ = r.useMemo(
            () => ({
                id: a,
                setFocus: s
            }),
            [a, s]
        ),
        p = r.useMemo(
            () => ({
                onKeyDown: o,
                orientation: f,
                ref: l,
                id: a,
                tabIndex: u
            }),
            [o, f, l, a, u]
        );
    return (0, i.jsxs)(d.Provider, {
        value: p,
        children: [
            (0, i.jsx)(c.Provider, {
                value: _,
                children: t
            }),
            ' '
        ]
    });
}
