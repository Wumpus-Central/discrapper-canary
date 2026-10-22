n.d(t, { Hq: () => o, O7: () => s, zn: () => c });
var l = n(477900),
    r = n(582128);
let a = r.createContext(null),
    s = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                s = r.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, l.jsx)(a.Provider, { value: s, children: n });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: s } = e,
                { isParentWidthLimited: o, parentContainerInnerWidth: c } = i(),
                d = o && c === t,
                u = r.useMemo(() => ({ isParentWidthLimited: d, parentContainerInnerWidth: n }), [d, n]);
            return (0, l.jsx)(a.Provider, { value: u, children: s });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, r, a] = c(!0);
            return (0, l.jsx)(s.NestedContainer, { containerOuterWidth: r, containerInnerWidth: a, children: t(n) });
        },
    };
function i() {
    let e = r.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function o(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = i();
    return t && n === e;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = r.useRef(null),
        [n, l] = r.useState(0),
        [a, s] = r.useState(0);
    return (
        r.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    r = getComputedStyle(t.current);
                (l(n + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))),
                    e &&
                        s(
                            n -
                                (parseFloat(r.paddingLeft) +
                                    parseFloat(r.paddingRight) +
                                    parseFloat(r.borderLeftWidth) +
                                    parseFloat(r.borderRightWidth)),
                        ));
            });
            return (n.observe(t.current), () => n.disconnect());
        }, [e]),
        [t, n, a]
    );
}
