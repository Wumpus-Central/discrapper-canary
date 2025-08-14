n.d(t, {
    Dg: () => I,
    On: () => h,
    TF: () => v,
    Y7: () => m,
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(428548),
    c = n(679219),
    u = n(939039),
    d = n(358085),
    f = n(998502),
    _ = n(388032),
    p = n(107009);
function h(e) {
    let { isPopoutWindow: t, isSearchDesktopTopLevelEnabled: n } = e;
    return t ? "refresh-title-bar-small" : n ? "refresh-title-bar-large" : void 0;
}
function m(e) {
    let { isPopoutWindow: t, isSearchDesktopTopLevelEnabled: n } = e;
    return t ? 16 : n ? 32 : 24;
}
let g = (e) => f.ZP.close(e),
    E = (e) => f.ZP.minimize(e),
    b = (e) => f.ZP.maximize(e);
function y(e) {
    e.stopPropagation();
}
function O(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(s.P3F, {
            className: a()(p.winButton, p.winButtonClose),
            onClick: () => g(t),
            "aria-label": _.intl.string(_.t.ZdNUj4),
            tabIndex: -1,
            children: (0, r.jsx)(l.Z, {}),
        }),
        o = (0, r.jsx)(s.P3F, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: () => b(t),
            "aria-label": _.intl.string(_.t.G1u0hI),
            tabIndex: -1,
            children: (0, r.jsx)(c.Z, {}),
        }),
        d = (0, r.jsx)(s.P3F, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: () => E(t),
            "aria-label": _.intl.string(_.t.CxOC4e),
            tabIndex: -1,
            children: (0, r.jsx)(u.Z, {}),
        });
    return (0, r.jsxs)("div", {
        className: a()(p.winButtons, { [p.winButtonsWithDivider]: n }),
        children: [d, o, i],
    });
}
function v(e) {
    let { leading: t, title: n, trailing: o, windowKey: s, className: l } = e,
        c = (0, d.getPlatform)(),
        u = i.useCallback(() => b(s), [s]);
    return (0, r.jsxs)("div", {
        className: a()(p.bar, l),
        onDoubleClick: u,
        children: [
            (0, r.jsx)("div", {
                className: p.title,
                children: n,
            }),
            (0, r.jsx)("div", {
                className: p.leading,
                onDoubleClick: y,
                children: t,
            }),
            (0, r.jsxs)("div", {
                className: p.trailing,
                onDoubleClick: y,
                children: [
                    o,
                    c === d.PlatformTypes.WINDOWS &&
                        (0, r.jsx)(O, {
                            windowKey: s,
                            showDivider: null != o,
                        }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { fixed: t = !1, show: n, windowKey: o } = e,
        s = (0, d.getPlatform)(),
        l = i.useCallback(() => b(o), [o]),
        c = s === d.PlatformTypes.WINDOWS;
    return s === d.PlatformTypes.WEB
        ? null
        : (0, r.jsx)("div", {
              className: a()(p.bar, p.systemBar, {
                  [p.fixed]: t,
                  [p.show]: n,
              }),
              onDoubleClick: l,
              children:
                  c &&
                  (0, r.jsx)("div", {
                      className: p.trailing,
                      onDoubleClick: y,
                      children: (0, r.jsx)(O, { windowKey: o }),
                  }),
          });
}
