n.d(t, { Hq: () => o, O7: () => i, zn: () => u });
var l = n(477900),
    r = n(582128);
let a = r.createContext(null),
    i = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                i = r.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, l.jsx)(a.Provider, { value: i, children: n });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: i } = e,
                { isParentWidthLimited: o, parentContainerInnerWidth: u } = s(),
                c = o && u === t,
                d = r.useMemo(() => ({ isParentWidthLimited: c, parentContainerInnerWidth: n }), [c, n]);
            return (0, l.jsx)(a.Provider, { value: d, children: i });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, r, a] = u(!0);
            return (0, l.jsx)(i.NestedContainer, { containerOuterWidth: r, containerInnerWidth: a, children: t(n) });
        },
    };
function s() {
    let e = r.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function o(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = s();
    return t && n === e;
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = r.useRef(null),
        [n, l] = r.useState(0),
        [a, i] = r.useState(0);
    return (
        r.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    r = getComputedStyle(t.current);
                l(n + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))),
                    e &&
                        i(
                            n -
                                (parseFloat(r.paddingLeft) +
                                    parseFloat(r.paddingRight) +
                                    parseFloat(r.borderLeftWidth) +
                                    parseFloat(r.borderRightWidth)),
                        );
            });
            return n.observe(t.current), () => n.disconnect();
        }, [e]),
        [t, n, a]
    );
}
