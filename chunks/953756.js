n.d(t, { Hq: () => s, O7: () => i, zn: () => u });
var r = n(627968),
    o = n(64700);
let l = o.createContext(null),
    i = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                i = o.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, r.jsx)(l.Provider, { value: i, children: n });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: i } = e,
                { isParentWidthLimited: s, parentContainerInnerWidth: u } = a(),
                d = s && u === t,
                c = o.useMemo(() => ({ isParentWidthLimited: d, parentContainerInnerWidth: n }), [d, n]);
            return (0, r.jsx)(l.Provider, { value: c, children: i });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, o, l] = u(!0);
            return (0, r.jsx)(i.NestedContainer, { containerOuterWidth: o, containerInnerWidth: l, children: t(n) });
        },
    };
function a() {
    let e = o.useContext(l);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function s(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = a();
    return t && n === e;
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = o.useRef(null),
        [n, r] = o.useState(0),
        [l, i] = o.useState(0);
    return (
        o.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    o = getComputedStyle(t.current);
                r(n + (parseFloat(o.marginLeft) + parseFloat(o.marginRight))),
                    e &&
                        i(
                            n -
                                (parseFloat(o.paddingLeft) +
                                    parseFloat(o.paddingRight) +
                                    parseFloat(o.borderLeftWidth) +
                                    parseFloat(o.borderRightWidth)),
                        );
            });
            return n.observe(t.current), () => n.disconnect();
        }, [e]),
        [t, n, l]
    );
}
