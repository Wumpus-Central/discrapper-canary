n.d(t, {
    Dg: () => A,
    On: () => E,
    TF: () => S,
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
    _ = n(358085),
    p = n(998502),
    h = n(388032),
    m = n(107009);
let g = 1000;
function E(e) {
    let { isPopoutWindow: t } = e;
    return t ? "refresh-title-bar-small" : void 0;
}
function b(e) {
    let { isPopoutWindow: t } = e;
    return t ? 16 : 24;
}
let y = (e) => p.ZP.close(e),
    O = (e) => p.ZP.minimize(e),
    v = (e) => p.ZP.maximize(e);
function I(e) {
    e.stopPropagation();
}
function T(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(s.P3F, {
            className: o()(m.winButton, m.winButtonClose),
            onClick: () => y(t),
            "aria-label": h.intl.string(h.t.ZdNUj2),
            tabIndex: -1,
            children: (0, r.jsx)(u.Z, {}),
        }),
        a = (0, r.jsx)(s.P3F, {
            className: o()(m.winButton, m.winButtonMinMax),
            onClick: () => v(t),
            "aria-label": h.intl.string(h.t.G1u0hK),
            tabIndex: -1,
            children: (0, r.jsx)(d.Z, {}),
        }),
        l = (0, r.jsx)(s.P3F, {
            className: o()(m.winButton, m.winButtonMinMax),
            onClick: () => O(t),
            "aria-label": h.intl.string(h.t.CxOC4U),
            tabIndex: -1,
            children: (0, r.jsx)(f.Z, {}),
        });
    return (0, r.jsxs)("div", {
        className: o()(m.winButtons, { [m.winButtonsWithDivider]: n }),
        children: [l, a, i],
    });
}
function S(e) {
    let { leading: t, title: n, trailing: a, windowKey: s, className: l } = e,
        c = (0, _.getPlatform)(),
        u = i.useCallback(() => v(s), [s]);
    return (0, r.jsxs)("div", {
        className: o()(m.bar, l),
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: m.leading,
                onDoubleClick: I,
                children: t,
            }),
            (0, r.jsx)("div", {
                className: m.title,
                children: n,
            }),
            (0, r.jsxs)("div", {
                className: m.trailing,
                onDoubleClick: I,
                children: [
                    a,
                    c === _.PlatformTypes.WINDOWS &&
                        (0, r.jsx)(T, {
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
        s = (0, _.getPlatform)(),
        u = i.useCallback(() => {
            c.Z.isOpen() && (0, l.Cp)();
        }, []),
        d = i.useCallback(() => {
            let e = c.Z.getLastShowTimestamp();
            (null != e && Date.now() - e < g) || v(a);
        }, [a]),
        f = s === _.PlatformTypes.WINDOWS;
    return s === _.PlatformTypes.WEB
        ? null
        : (0, r.jsx)("div", {
              className: o()(m.bar, m.systemBar, {
                  [m.fixed]: t,
                  [m.show]: n,
              }),
              onClick: u,
              onDoubleClick: d,
              children:
                  f &&
                  (0, r.jsx)("div", {
                      className: m.trailing,
                      onDoubleClick: I,
                      children: (0, r.jsx)(T, { windowKey: a }),
                  }),
          });
}
