"use strict";
a.d(t, { Hq: () => o, O7: () => i, zn: () => c });
var n = a(627968),
    r = a(64700);
let s = r.createContext(null),
    i = {
        Root(e) {
            let { containerInnerWidth: t, children: a } = e,
                i = r.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, n.jsx)(s.Provider, { value: i, children: a });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: a, children: i } = e,
                { isParentWidthLimited: o, parentContainerInnerWidth: c } = l(),
                _ = o && c === t,
                d = r.useMemo(() => ({ isParentWidthLimited: _, parentContainerInnerWidth: a }), [_, a]);
            return (0, n.jsx)(s.Provider, { value: d, children: i });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [a, r, s] = c(!0);
            return (0, n.jsx)(i.NestedContainer, { containerOuterWidth: r, containerInnerWidth: s, children: t(a) });
        },
    };
function l() {
    let e = r.useContext(s);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function o(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: a } = l();
    return t && a === e;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = r.useRef(null),
        [a, n] = r.useState(0),
        [s, i] = r.useState(0);
    return (
        r.useLayoutEffect(() => {
            if (null == t.current) return;
            let a = new ResizeObserver(() => {
                let a = t.current.getBoundingClientRect().width,
                    r = getComputedStyle(t.current);
                n(a + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))),
                    e &&
                        i(
                            a -
                                (parseFloat(r.paddingLeft) +
                                    parseFloat(r.paddingRight) +
                                    parseFloat(r.borderLeftWidth) +
                                    parseFloat(r.borderRightWidth)),
                        );
            });
            return a.observe(t.current), () => a.disconnect();
        }, [e]),
        [t, a, s]
    );
}
