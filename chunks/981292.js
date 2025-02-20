n.d(t, {
    W3: () => l,
    pJ: () => o
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    o = (function (e) {
        return (e[(e.MOUNTED = 0)] = 'MOUNTED'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.YEETED = 2)] = 'YEETED'), e;
    })({});
let a = {};
function s(e) {
    return e;
}
function l(e) {
    let { items: t, renderItem: n, getItemKey: o, wrapChildren: l = s, lazyCleanUpDelay: c } = e,
        u = i.useRef(-1);
    i.useLayoutEffect(() => () => clearTimeout(u.current));
    let [, d] = i.useState(a),
        f = i.useRef(null),
        p = i.useMemo(() => {
            var e;
            let r = new Set(null === (e = f.current) || void 0 === e ? void 0 : e.keys()),
                i = new Map(f.current);
            for (let e of t) {
                let t = o(e),
                    a = i.get(t);
                if (null == a) {
                    let r = +(null != f.current),
                        i = () => {
                            var e, n;
                            let r = null === (e = f.current) || void 0 === e ? void 0 : e.get(t);
                            null == r || (2 === r.state ? (null === (n = f.current) || void 0 === n || n.delete(t), null != c ? (clearTimeout(u.current), (u.current = setTimeout(() => d({}), c))) : d({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)));
                        },
                        o = n(t, e, r, i);
                    a = {
                        item: e,
                        children: o,
                        state: r,
                        cleanUp: i,
                        renderItem: n
                    };
                } else if (a.item !== e || a.renderItem !== n || 2 === a.state) {
                    let { cleanUp: r } = a,
                        i = 2 === a.state ? 1 : a.state,
                        o = n(t, e, i, a.cleanUp);
                    a = {
                        item: e,
                        children: o,
                        state: i,
                        cleanUp: r,
                        renderItem: n
                    };
                }
                i.set(t, a), r.delete(t);
            }
            for (let e of r) {
                let t = i.get(e);
                if (null != t) {
                    if (2 !== t.state || t.renderItem !== n) {
                        let { item: r, cleanUp: o } = t;
                        null !=
                        (t = {
                            item: r,
                            children: n(e, t.item, 2, t.cleanUp),
                            state: 2,
                            cleanUp: o,
                            renderItem: n
                        }).children
                            ? i.set(e, t)
                            : i.delete(e);
                    } else i.set(e, t);
                }
            }
            return i;
        }, [t, o, n, c]);
    i.useInsertionEffect(
        () => (
            (f.current = p),
            () => {
                var e;
                return null === (e = f.current) || void 0 === e ? void 0 : e.clear();
            }
        ),
        [p]
    );
    let _ = [];
    for (let [, e] of p) _.push(e.children);
    return (0, r.jsx)(r.Fragment, { children: _.length > 0 ? l(_, t) : null });
}
