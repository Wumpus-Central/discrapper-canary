n.d(t, {
    Hq: () => l,
    O7: () => s,
    zn: () => c,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700);
let a = i.createContext(null),
    s = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                s = i.useMemo(
                    () => ({
                        isParentWidthLimited: !0,
                        parentContainerInnerWidth: t,
                    }),
                    [t],
                );
            return (0, r.jsx)(a.Provider, {
                value: s,
                children: n,
            });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: s } = e,
                { isParentWidthLimited: l, parentContainerInnerWidth: c } = o(),
                u = l && c === t,
                d = i.useMemo(
                    () => ({
                        isParentWidthLimited: u,
                        parentContainerInnerWidth: n,
                    }),
                    [u, n],
                );
            return (0, r.jsx)(a.Provider, {
                value: d,
                children: s,
            });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, i, a] = c(!0);
            return (0, r.jsx)(s.NestedContainer, {
                containerOuterWidth: i,
                containerInnerWidth: a,
                children: t(n),
            });
        },
    };

function o() {
    let e = i.useContext(a);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}

function l(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = o();
    return t && n === e;
}

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = i.useRef(null),
        [n, r] = i.useState(0),
        [a, s] = i.useState(0);
    return (
        i.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    i = getComputedStyle(t.current);
                r(n + (parseFloat(i.marginLeft) + parseFloat(i.marginRight))),
                    e &&
                        s(
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
