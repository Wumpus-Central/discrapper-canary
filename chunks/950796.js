n.d(t, {
    Dg: () => A,
    On: () => E,
    TF: () => T,
    Y7: () => b,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(51596),
    c = n(823385),
    u = n(428548),
    d = n(679219),
    f = n(939039),
    p = n(358085),
    _ = n(998502),
    m = n(388032),
    h = n(107009);
let g = 1000;
function E(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function b(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
let y = (e) => _.ZP.close(e),
    O = (e) => _.ZP.minimize(e),
    v = (e) => _.ZP.maximize(e);
function S(e) {
    e.stopPropagation();
}
function I(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(s.P3F, {
            className: o()(h.winButton, h.winButtonClose),
            onClick: () => y(t),
            "aria-label": m.intl.string(m.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(u.Z, {}),
        }),
        a = (0, r.jsx)(s.P3F, {
            className: o()(h.winButton, h.winButtonMinMax),
            onClick: () => v(t),
            "aria-label": m.intl.string(m.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(d.Z, {}),
        }),
        l = (0, r.jsx)(s.P3F, {
            className: o()(h.winButton, h.winButtonMinMax),
            onClick: () => O(t),
            "aria-label": m.intl.string(m.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(f.Z, {}),
        });
    return (0, r.jsxs)("div", {
        className: o()(h.winButtons, { [h.winButtonsWithDivider]: n }),
        children: [l, a, i],
    });
}
function T(e) {
    let { leading: t, title: n, trailing: a, windowKey: s, className: l } = e,
        c = (0, p.getPlatform)(),
        u = i.useCallback(() => v(s), [s]),
        d = c === p.PlatformTypes.WINDOWS || c === p.PlatformTypes.LINUX;
    return (0, r.jsxs)("div", {
        className: o()(h.bar, l),
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: h.leading,
                onDoubleClick: S,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: h.title,
                children: n,
            }),
            (0, r.jsxs)("div", {
                className: h.trailing,
                onDoubleClick: S,
                children: [
                    a,
                    d &&
                        (0, r.jsx)(I, {
                            windowKey: s,
                            showDivider: null != a,
                        }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { fixed: t = !1, show: n, windowKey: a } = e,
        s = (0, p.getPlatform)(),
        u = i.useCallback(() => {
            c.Z.isOpen() && (0, l.Cp)();
        }, []),
        d = i.useCallback(() => {
            let e = c.Z.getLastShowTimestamp();
            (null != e && Date.now() - e < g) || v(a);
        }, [a]),
        f = s === p.PlatformTypes.WINDOWS;
    if (s === p.PlatformTypes.WEB) return null;
    let _ = f || s === p.PlatformTypes.LINUX;
    return (0, r.jsx)("div", {
        className: o()(h.bar, h.systemBar, {
            [h.fixed]: t,
            [h.show]: n,
        }),
        onClick: u,
        onDoubleClick: d,
        children:
            _ &&
            (0, r.jsx)("div", {
                className: h.trailing,
                onDoubleClick: S,
                children: (0, r.jsx)(I, { windowKey: a }),
            }),
    });
}
