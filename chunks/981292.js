r.d(n, {
    W3: function () {
        return d;
    },
    pJ: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(653041);
var s = r(200651),
    l = r(192379);
!(function (e) {
    (e[(e.MOUNTED = 0)] = 'MOUNTED'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.YEETED = 2)] = 'YEETED');
})(i || (i = {}));
let u = {};
function c(e) {
    return e;
}
function d(e) {
    let { items: n, renderItem: r, getItemKey: i, wrapChildren: a = c, lazyCleanUpDelay: o } = e,
        d = l.useRef(-1);
    l.useLayoutEffect(() => () => clearTimeout(d.current));
    let [, f] = l.useState(u),
        p = l.useRef(null),
        h = l.useMemo(() => {
            var e;
            let a = new Set(null === (e = p.current) || void 0 === e ? void 0 : e.keys()),
                s = new Map(p.current);
            for (let e of n) {
                let n = i(e),
                    l = s.get(n);
                if (null == l) {
                    let i = null != p.current ? 1 : 0,
                        a = () => {
                            var e, r;
                            let i = null === (e = p.current) || void 0 === e ? void 0 : e.get(n);
                            null == i || (2 === i.state ? (null === (r = p.current) || void 0 === r || r.delete(n), null != o ? (clearTimeout(d.current), (d.current = setTimeout(() => f({}), o))) : f({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(n)));
                        },
                        s = r(n, e, i, a);
                    l = {
                        item: e,
                        children: s,
                        state: i,
                        cleanUp: a,
                        renderItem: r
                    };
                } else if (l.item !== e || l.renderItem !== r || 2 === l.state) {
                    let { cleanUp: i } = l,
                        a = 2 === l.state ? 1 : l.state,
                        o = r(n, e, a, l.cleanUp);
                    l = {
                        item: e,
                        children: o,
                        state: a,
                        cleanUp: i,
                        renderItem: r
                    };
                }
                s.set(n, l), a.delete(n);
            }
            for (let e of a) {
                let n = s.get(e);
                if (null != n) {
                    if (2 !== n.state || n.renderItem !== r) {
                        let { item: i, cleanUp: a } = n,
                            o = r(e, n.item, 2, n.cleanUp);
                        null !=
                        (n = {
                            item: i,
                            children: o,
                            state: 2,
                            cleanUp: a,
                            renderItem: r
                        }).children
                            ? s.set(e, n)
                            : s.delete(e);
                    } else s.set(e, n);
                }
            }
            return s;
        }, [n, i, r, o]);
    l.useInsertionEffect(
        () => (
            (p.current = h),
            () => {
                var e;
                return null === (e = p.current) || void 0 === e ? void 0 : e.clear();
            }
        ),
        [h]
    );
    let _ = [];
    for (let [, e] of h) _.push(e.children);
    return (0, s.jsx)(s.Fragment, { children: _.length > 0 ? a(_, n) : null });
}
function f() {
    return 'key';
}
