var l = t(477900),
    r = t(582128);
let a = r.createContext(null),
    i = {
        Root(e) {
            let { containerInnerWidth: n, children: t } = e,
                i = r.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: n }), [n]);
            return (0, l.jsx)(a.Provider, { value: i, children: t });
        },
        NestedContainer(e) {
            let { containerOuterWidth: n, containerInnerWidth: t, children: i } = e,
                { isParentWidthLimited: o, parentContainerInnerWidth: u } = s(),
                c = o && u === n,
                d = r.useMemo(() => ({ isParentWidthLimited: c, parentContainerInnerWidth: t }), [c, t]);
            return (0, l.jsx)(a.Provider, { value: d, children: i });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: n } = e,
                [t, r, a] = o(!0);
            return (0, l.jsx)(i.NestedContainer, { containerOuterWidth: r, containerInnerWidth: a, children: n(t) });
        },
    };
function s() {
    let e = r.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = r.useRef(null),
        [t, l] = r.useState(0),
        [a, i] = r.useState(0);
    return (
        r.useLayoutEffect(() => {
            if (null == n.current) return;
            let t = new ResizeObserver(() => {
                let t = n.current.getBoundingClientRect().width,
                    r = getComputedStyle(n.current);
                (l(t + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))),
                    e &&
                        i(
                            t -
                                (parseFloat(r.paddingLeft) +
                                    parseFloat(r.paddingRight) +
                                    parseFloat(r.borderLeftWidth) +
                                    parseFloat(r.borderRightWidth)),
                        ));
            });
            return (t.observe(n.current), () => t.disconnect());
        }, [e]),
        [n, t, a]
    );
}
t.d(
    n,
    {},
    {
        Hq: function (e) {
            let { isParentWidthLimited: n, parentContainerInnerWidth: t } = s();
            return n && t === e;
        },
        O7: i,
        zn: o,
    },
);
