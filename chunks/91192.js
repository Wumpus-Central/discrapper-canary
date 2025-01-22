r.d(n, {
    Ie: function () {
        return m;
    },
    JA: function () {
        return _;
    },
    OP: function () {
        return v;
    },
    SJ: function () {
        return b;
    },
    bG: function () {
        return I;
    },
    eg: function () {
        return E;
    },
    f$: function () {
        return h;
    },
    l2: function () {
        return y;
    },
    mh: function () {
        return g;
    },
    qB: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(25441),
    l = r(536895),
    u = r(260866);
let c = {
        id: 'NO_LIST',
        setFocus() {}
    },
    d = {
        id: 'NO_LIST',
        onKeyDown() {},
        orientation: l.hy.VERTICAL,
        ref: o.createRef(),
        tabIndex: -1
    },
    f = o.createContext(c),
    p = o.createContext(d);
function h() {
    return o.useContext(f);
}
function _(e) {
    let [n, r] = o.useState(-1),
        { id: i, setFocus: a } = h(),
        l = o.useCallback(() => a(e), [e, a]);
    return (
        o.useLayoutEffect(
            () =>
                (0, s.N)(i, (n, i) => {
                    r(i && n === e ? 0 : -1);
                }),
            [e, i]
        ),
        {
            role: 'listitem',
            [u.ie]: (0, u.jb)(i, e),
            tabIndex: n,
            onFocus: l
        }
    );
}
function m(e) {
    return {
        ..._(e),
        role: 'treeitem'
    };
}
function g(e) {
    let { children: n, id: r } = e;
    return n(_(r));
}
function E() {
    return o.useContext(p).ref;
}
function v() {
    let { id: e, onKeyDown: n, ref: r, tabIndex: i } = o.useContext(p);
    return {
        role: 'list',
        tabIndex: i,
        [u.kn]: e,
        onKeyDown: n,
        ref: r
    };
}
function y(e) {
    let {
        id: n,
        containerProps: { onKeyDown: r, ref: i, tabIndex: a },
        orientation: o
    } = e;
    return {
        role: 'list',
        onKeyDown: r,
        ref: i,
        [u.kn]: n,
        tabIndex: a
    };
}
function b(e) {
    let { children: n } = e;
    return n(v());
}
function I(e) {
    let { children: n, navigator: r } = e,
        {
            id: i,
            setFocus: s,
            containerProps: { onKeyDown: l, ref: u, tabIndex: c },
            orientation: d
        } = r,
        h = o.useMemo(
            () => ({
                id: i,
                setFocus: s
            }),
            [i, s]
        ),
        _ = o.useMemo(
            () => ({
                onKeyDown: l,
                orientation: d,
                ref: u,
                id: i,
                tabIndex: c
            }),
            [l, d, u, i, c]
        );
    return (0, a.jsxs)(p.Provider, {
        value: _,
        children: [
            (0, a.jsx)(f.Provider, {
                value: h,
                children: n
            }),
            ' '
        ]
    });
}
