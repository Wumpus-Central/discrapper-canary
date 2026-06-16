n.d(t, { Hq: () => s, O7: () => l, zn: () => u });
var r = n(627968),
    i = n(64700);
let a = i.createContext(null),
    l = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                l = i.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, r.jsx)(a.Provider, { value: l, children: n });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: l } = e,
                { isParentWidthLimited: s, parentContainerInnerWidth: u } = o(),
                d = s && u === t,
                c = i.useMemo(() => ({ isParentWidthLimited: d, parentContainerInnerWidth: n }), [d, n]);
            return (0, r.jsx)(a.Provider, { value: c, children: l });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, i, a] = u(!0);
            return (0, r.jsx)(l.NestedContainer, { containerOuterWidth: i, containerInnerWidth: a, children: t(n) });
        },
    };
function o() {
    let e = i.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function s(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = o();
    return t && n === e;
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = i.useRef(null),
        [n, r] = i.useState(0),
        [a, l] = i.useState(0);
    return (
        i.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    i = getComputedStyle(t.current);
                r(n + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))),
                    e &&
                        l(
                            n -
                                (parseFloat(i.paddingLeft) +
                                    parseFloat(i.paddingRight) +
                                    parseFloat(i.borderLeftWidth) +
                                    parseFloat(i.borderRightWidth)),
                        );
            });
            return n.observe(t.current), () => n.disconnect();
        }, [e]),
        [t, n, a]
    );
}
