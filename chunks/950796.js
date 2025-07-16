n.d(t, {
    Dg: () => v,
    TF: () => O,
    q8: () => h
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(428548),
    c = n(679219),
    u = n(939039),
    d = n(358085),
    f = n(998502),
    _ = n(388032),
    p = n(908420);
let h = 24,
    m = (e) => f.ZP.close(e),
    g = (e) => f.ZP.minimize(e),
    E = (e) => f.ZP.maximize(e);
function b(e) {
    e.stopPropagation();
}
function y(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(s.P3F, {
            className: o()(p.winButton, p.winButtonClose),
            onClick: () => m(t),
            'aria-label': _.intl.string(_.t.ZdNUj4),
            tabIndex: -1,
            children: (0, r.jsx)(l.Z, {})
        }),
        a = (0, r.jsx)(s.P3F, {
            className: o()(p.winButton, p.winButtonMinMax),
            onClick: () => E(t),
            'aria-label': _.intl.string(_.t.G1u0hI),
            tabIndex: -1,
            children: (0, r.jsx)(c.Z, {})
        }),
        d = (0, r.jsx)(s.P3F, {
            className: o()(p.winButton, p.winButtonMinMax),
            onClick: () => g(t),
            'aria-label': _.intl.string(_.t.CxOC4e),
            tabIndex: -1,
            children: (0, r.jsx)(u.Z, {})
        });
    return (0, r.jsxs)('div', {
        className: o()(p.winButtons, { [p.winButtonsWithDivider]: n }),
        children: [d, a, i]
    });
}
function O(e) {
    let { leading: t, title: n, trailing: a, windowKey: s, short: l, className: c } = e,
        u = (0, d.getPlatform)(),
        f = i.useCallback(() => E(s), [s]);
    return (0, r.jsxs)('div', {
        className: o()(p.bar, c, { [p.shortBar]: l }),
        onDoubleClick: f,
        children: [
            (0, r.jsx)('div', {
                className: p.title,
                children: n
            }),
            (0, r.jsx)('div', {
                className: p.leading,
                onDoubleClick: b,
                children: t
            }),
            (0, r.jsxs)('div', {
                className: p.trailing,
                onDoubleClick: b,
                children: [
                    a,
                    u === d.PlatformTypes.WINDOWS &&
                        (0, r.jsx)(y, {
                            windowKey: s,
                            showDivider: null != a
                        })
                ]
            })
        ]
    });
}
function v(e) {
    let { fixed: t = !1, show: n, windowKey: a } = e,
        s = (0, d.getPlatform)(),
        l = i.useCallback(() => E(a), [a]),
        c = s === d.PlatformTypes.WINDOWS;
    return s === d.PlatformTypes.WEB
        ? null
        : (0, r.jsx)('div', {
              className: o()(p.bar, p.systemBar, {
                  [p.fixed]: t,
                  [p.show]: n
              }),
              onDoubleClick: l,
              children:
                  c &&
                  (0, r.jsx)('div', {
                      className: p.trailing,
                      onDoubleClick: b,
                      children: (0, r.jsx)(y, { windowKey: a })
                  })
          });
}
