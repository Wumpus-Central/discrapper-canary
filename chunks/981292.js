n.d(t, {
    W3: () => l,
    pJ: () => a
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = (function (e) {
        return (e[(e.MOUNTED = 0)] = 'MOUNTED'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.YEETED = 2)] = 'YEETED'), e;
    })({});
let s = {};
function o(e) {
    return e;
}
function l(e) {
    let { items: t, renderItem: n, getItemKey: a, wrapChildren: l = o, lazyCleanUpDelay: u } = e,
        c = r.useRef(-1);
    r.useLayoutEffect(() => () => clearTimeout(c.current));
    let [, d] = r.useState(s),
        f = r.useRef(null),
        _ = r.useMemo(() => {
            var e;
            let i = new Set(null === (e = f.current) || void 0 === e ? void 0 : e.keys()),
                r = new Map(f.current);
            for (let e of t) {
                let t = a(e),
                    s = r.get(t);
                if (null == s) {
                    let i = null != f.current ? 1 : 0,
                        r = () => {
                            var e, n;
                            let i = null === (e = f.current) || void 0 === e ? void 0 : e.get(t);
                            null == i || (2 === i.state ? (null === (n = f.current) || void 0 === n || n.delete(t), null != u ? (clearTimeout(c.current), (c.current = setTimeout(() => d({}), u))) : d({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)));
                        },
                        a = n(t, e, i, r);
                    s = {
                        item: e,
                        children: a,
                        state: i,
                        cleanUp: r,
                        renderItem: n
                    };
                } else if (s.item !== e || s.renderItem !== n || 2 === s.state) {
                    let { cleanUp: i } = s,
                        r = 2 === s.state ? 1 : s.state,
                        a = n(t, e, r, s.cleanUp);
                    s = {
                        item: e,
                        children: a,
                        state: r,
                        cleanUp: i,
                        renderItem: n
                    };
                }
                r.set(t, s), i.delete(t);
            }
            for (let e of i) {
                let t = r.get(e);
                if (null != t) {
                    if (2 !== t.state || t.renderItem !== n) {
                        let { item: i, cleanUp: a } = t;
                        null !=
                        (t = {
                            item: i,
                            children: n(e, t.item, 2, t.cleanUp),
                            state: 2,
                            cleanUp: a,
                            renderItem: n
                        }).children
                            ? r.set(e, t)
                            : r.delete(e);
                    } else r.set(e, t);
                }
            }
            return r;
        }, [t, a, n, u]);
    r.useInsertionEffect(
        () => (
            (f.current = _),
            () => {
                var e;
                return null === (e = f.current) || void 0 === e ? void 0 : e.clear();
            }
        ),
        [_]
    );
    let p = [];
    for (let [, e] of _) p.push(e.children);
    return (0, i.jsx)(i.Fragment, { children: p.length > 0 ? l(p, t) : null });
}
