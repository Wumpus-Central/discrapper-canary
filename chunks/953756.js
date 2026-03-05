n.d(t, { Hq: () => d, O7: () => i, zn: () => o });
var l = n(627968),
    a = n(64700);
let r = a.createContext(null),
    i = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                i = a.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, l.jsx)(r.Provider, { value: i, children: n });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: i } = e,
                { isParentWidthLimited: d, parentContainerInnerWidth: o } = s(),
                c = d && o === t,
                u = a.useMemo(() => ({ isParentWidthLimited: c, parentContainerInnerWidth: n }), [c, n]);
            return (0, l.jsx)(r.Provider, { value: u, children: i });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, a, r] = o(!0);
            return (0, l.jsx)(i.NestedContainer, { containerOuterWidth: a, containerInnerWidth: r, children: t(n) });
        },
    };
function s() {
    let e = a.useContext(r);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function d(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = s();
    return t && n === e;
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = a.useRef(null),
        [n, l] = a.useState(0),
        [r, i] = a.useState(0);
    return (
        a.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    a = getComputedStyle(t.current);
                l(n + (parseFloat(a.marginLeft) + parseFloat(a.marginRight))),
                    e &&
                        i(
                            n -
                                (parseFloat(a.paddingLeft) +
                                    parseFloat(a.paddingRight) +
                                    parseFloat(a.borderLeftWidth) +
                                    parseFloat(a.borderRightWidth)),
                        );
            });
            return n.observe(t.current), () => n.disconnect();
        }, [e]),
        [t, n, r]
    );
}
