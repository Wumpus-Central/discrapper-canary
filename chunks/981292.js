n.d(t, {
    W3: () => s,
    pJ: () => i
}),
    n(388685),
    n(539854),
    n(200651);
var r = n(192379),
    i = (function (e) {
        return (e[(e.MOUNTED = 0)] = 'MOUNTED'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.YEETED = 2)] = 'YEETED'), e;
    })({});
let a = {};
function o(e) {
    return e;
}
function s(e) {
    let { items: t, renderItem: n, getItemKey: i, wrapChildren: s = o, lazyCleanUpDelay: l } = e,
        c = r.useRef(-1);
    r.useLayoutEffect(() => () => clearTimeout(c.current));
    let [, u] = r.useState(a),
        d = r.useRef(null),
        f = r.useMemo(() => {
            var e;
            let r = new Set(null == (e = d.current) ? void 0 : e.keys()),
                a = new Map(d.current);
            for (let e of t) {
                let t = i(e),
                    o = a.get(t);
                if (null == o) {
                    let r = +(null != d.current),
                        i = () => {
                            var e, n;
                            let r = null == (e = d.current) ? void 0 : e.get(t);
                            null == r || (2 === r.state ? (null == (n = d.current) || n.delete(t), null != l ? (clearTimeout(c.current), (c.current = setTimeout(() => u({}), l))) : u({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)));
                        },
                        a = n(t, e, r, i);
                    o = {
                        item: e,
                        children: a,
                        state: r,
                        cleanUp: i,
                        renderItem: n
                    };
                } else if (o.item !== e || o.renderItem !== n || 2 === o.state) {
                    let { cleanUp: r } = o,
                        i = 2 === o.state ? 1 : o.state,
                        a = n(t, e, i, o.cleanUp);
                    o = {
                        item: e,
                        children: a,
                        state: i,
                        cleanUp: r,
                        renderItem: n
                    };
                }
                a.set(t, o), r.delete(t);
            }
            for (let e of r) {
                let t = a.get(e);
                if (null != t)
                    if (2 !== t.state || t.renderItem !== n) {
                        let { item: r, cleanUp: i } = t;
                        null !=
                        (t = {
                            item: r,
                            children: n(e, t.item, 2, t.cleanUp),
                            state: 2,
                            cleanUp: i,
                            renderItem: n
                        }).children
                            ? a.set(e, t)
                            : a.delete(e);
                    } else a.set(e, t);
            }
            return a;
        }, [t, i, n, l]);
    r.useInsertionEffect(
        () => (
            (d.current = f),
            () => {
                var e;
                return null == (e = d.current) ? void 0 : e.clear();
            }
        ),
        [f]
    );
    let _ = [];
    for (let [, e] of f) _.push(e.children);
    return _.length > 0 ? s(_, t) : null;
}
