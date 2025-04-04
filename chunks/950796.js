n.d(t, {
    D: () => v,
    T: () => y
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(428548),
    c = n(679219),
    u = n(939039),
    d = n(358085),
    f = n(998502),
    _ = n(388032),
    p = n(908420);
let h = (e) => f.ZP.close(e),
    m = (e) => f.ZP.minimize(e),
    g = (e) => f.ZP.maximize(e);
function E(e) {
    e.stopPropagation();
}
function b(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(s.P3F, {
            className: a()(p.winButton, p.winButtonClose),
            onClick: () => h(t),
            'aria-label': _.NW.string(_.t.ZdNUj4),
            tabIndex: -1,
            children: (0, r.jsx)(l.Z, {})
        }),
        o = (0, r.jsx)(s.P3F, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: () => g(t),
            'aria-label': _.NW.string(_.t.G1u0hI),
            tabIndex: -1,
            children: (0, r.jsx)(c.Z, {})
        }),
        d = (0, r.jsx)(s.P3F, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: () => m(t),
            'aria-label': _.NW.string(_.t.CxOC4e),
            tabIndex: -1,
            children: (0, r.jsx)(u.Z, {})
        });
    return (0, r.jsxs)('div', {
        className: a()(p.winButtons, { [p.winButtonsWithDivider]: n }),
        children: [d, o, i]
    });
}
function y(e) {
    let { leading: t, title: n, trailing: o, windowKey: s, short: l, className: c } = e,
        u = (0, d.getPlatform)(),
        f = i.useCallback(() => g(s), [s]),
        _ = u === d.PlatformTypes.WINDOWS;
    return (0, r.jsxs)('div', {
        'data-windows': _,
        className: a()(p.bar, c, { [p.shortBar]: l }),
        onDoubleClick: f,
        children: [
            (0, r.jsx)('div', {
                className: p.title,
                children: n
            }),
            (0, r.jsx)('div', {
                className: p.leading,
                onDoubleClick: E,
                children: t
            }),
            (0, r.jsxs)('div', {
                className: p.trailing,
                onDoubleClick: E,
                children: [
                    o,
                    u === d.PlatformTypes.WINDOWS &&
                        (0, r.jsx)(b, {
                            windowKey: s,
                            showDivider: null != o
                        })
                ]
            })
        ]
    });
}
function v(e) {
    let { fixed: t = !1, show: n, windowKey: o } = e,
        s = (0, d.getPlatform)(),
        l = i.useCallback(() => g(o), [o]),
        c = s === d.PlatformTypes.WINDOWS;
    return s === d.PlatformTypes.WEB
        ? null
        : (0, r.jsx)('div', {
              'data-windows': c,
              className: a()(p.bar, p.systemBar, {
                  [p.fixed]: t,
                  [p.show]: n
              }),
              onDoubleClick: l,
              children:
                  c &&
                  (0, r.jsx)('div', {
                      className: p.trailing,
                      onDoubleClick: E,
                      children: (0, r.jsx)(b, { windowKey: o })
                  })
          });
}
