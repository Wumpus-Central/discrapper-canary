n.d(t, { Hq: () => o, O7: () => r, zn: () => d });
var i = n(627968),
    l = n(64700);
let a = l.createContext(null),
    r = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                r = l.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, i.jsx)(a.Provider, { value: r, children: n });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: r } = e,
                { isParentWidthLimited: o, parentContainerInnerWidth: d } = s(),
                c = o && d === t,
                u = l.useMemo(() => ({ isParentWidthLimited: c, parentContainerInnerWidth: n }), [c, n]);
            return (0, i.jsx)(a.Provider, { value: u, children: r });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, l, a] = d(!0);
            return (0, i.jsx)(r.NestedContainer, { containerOuterWidth: l, containerInnerWidth: a, children: t(n) });
        },
    };
function s() {
    let e = l.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function o(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = s();
    return t && n === e;
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = l.useRef(null),
        [n, i] = l.useState(0),
        [a, r] = l.useState(0);
    return (
        l.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    l = getComputedStyle(t.current);
                i(n + (parseFloat(l.marginLeft) + parseFloat(l.marginRight))),
                    e &&
                        r(
                            n -
                                (parseFloat(l.paddingLeft) +
                                    parseFloat(l.paddingRight) +
                                    parseFloat(l.borderLeftWidth) +
                                    parseFloat(l.borderRightWidth)),
                        );
            });
            return n.observe(t.current), () => n.disconnect();
        }, [e]),
        [t, n, a]
    );
}
