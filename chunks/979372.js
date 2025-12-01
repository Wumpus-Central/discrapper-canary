n.d(t, {
    U: () => d,
    _: () => u,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(632065);
let l = {
        SIZE: {
            default: void 0,
            reduced: s.sizeReduced,
        },
        COLOR: {
            default: void 0,
            muted: s.colorMuted,
        },
        WEIGHT: {
            default: void 0,
            reduced: s.weightReduced,
        },
    },
    c = i.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default",
    });
function u() {
    return i.useContext(c);
}
function d(e) {
    let { children: t, size: n, color: a, weight: d } = e,
        f = u(),
        p = i.useMemo(() => {
            let e = {
                    className: void 0,
                    size: null != n ? n : f.size,
                    color: null != a ? a : f.color,
                    weight: null != d ? d : f.weight,
                },
                t = o()(l.SIZE[e.size], l.COLOR[e.color], l.WEIGHT[e.weight]);
            return "" !== t && (e.className = o()(s.root, t)), e;
        }, [n, a, d, f]);
    return (0, r.jsx)(c.Provider, {
        value: p,
        children: t,
    });
}
