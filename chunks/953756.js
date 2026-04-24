"use strict";
n.d(t, { Hq: () => o, O7: () => l, zn: () => c });
var a = n(627968),
    r = n(64700);
let i = r.createContext(null),
    l = {
        Root(e) {
            let { containerInnerWidth: t, children: n } = e,
                l = r.useMemo(() => ({ isParentWidthLimited: !0, parentContainerInnerWidth: t }), [t]);
            return (0, a.jsx)(i.Provider, { value: l, children: n });
        },
        NestedContainer(e) {
            let { containerOuterWidth: t, containerInnerWidth: n, children: l } = e,
                { isParentWidthLimited: o, parentContainerInnerWidth: c } = s(),
                d = o && c === t,
                u = r.useMemo(() => ({ isParentWidthLimited: d, parentContainerInnerWidth: n }), [d, n]);
            return (0, a.jsx)(i.Provider, { value: u, children: l });
        },
        AutoMeasuredNestedContainer(e) {
            let { children: t } = e,
                [n, r, i] = c(!0);
            return (0, a.jsx)(l.NestedContainer, { containerOuterWidth: r, containerInnerWidth: i, children: t(n) });
        },
    };
function s() {
    let e = r.useContext(i);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e;
}
function o(e) {
    let { isParentWidthLimited: t, parentContainerInnerWidth: n } = s();
    return t && n === e;
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = r.useRef(null),
        [n, a] = r.useState(0),
        [i, l] = r.useState(0);
    return (
        r.useLayoutEffect(() => {
            if (null == t.current) return;
            let n = new ResizeObserver(() => {
                let n = t.current.getBoundingClientRect().width,
                    r = getComputedStyle(t.current);
                a(n + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))),
                    e &&
                        l(
                            n -
                                (parseFloat(r.paddingLeft) +
                                    parseFloat(r.paddingRight) +
                                    parseFloat(r.borderLeftWidth) +
                                    parseFloat(r.borderRightWidth)),
                        );
            });
            return n.observe(t.current), () => n.disconnect();
        }, [e]),
        [t, n, i]
    );
}
