n.d(t, {
    D: () => y,
    T: () => b
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
    p = n(388032),
    _ = n(588475);
let h = (e) => f.ZP.close(e),
    m = (e) => f.ZP.minimize(e),
    g = (e) => f.ZP.maximize(e);
function E(e) {
    e.stopPropagation();
}
function v(e) {
    let { windowKey: t, showDivider: n } = e,
        i = (0, r.jsx)(s.P3F, {
            className: a()(_.winButton, _.winButtonClose),
            onClick: () => h(t),
            'aria-label': p.NW.string(p.t.ZdNUj4),
            tabIndex: -1,
            children: (0, r.jsx)(l.Z, {})
        }),
        o = (0, r.jsx)(s.P3F, {
            className: a()(_.winButton, _.winButtonMinMax),
            onClick: () => g(t),
            'aria-label': p.NW.string(p.t.G1u0hI),
            tabIndex: -1,
            children: (0, r.jsx)(c.Z, {})
        }),
        d = (0, r.jsx)(s.P3F, {
            className: a()(_.winButton, _.winButtonMinMax),
            onClick: () => m(t),
            'aria-label': p.NW.string(p.t.CxOC4e),
            tabIndex: -1,
            children: (0, r.jsx)(u.Z, {})
        });
    return (0, r.jsxs)('div', {
        className: a()(_.winButtons, { [_.winButtonsWithDivider]: n }),
        children: [d, o, i]
    });
}
function b(e) {
    let { leading: t, title: n, trailing: o, windowKey: s, short: l, className: c } = e,
        u = (0, d.getPlatform)(),
        f = i.useCallback(() => g(s), [s]),
        p = u === d.PlatformTypes.WINDOWS;
    return (0, r.jsxs)('div', {
        'data-windows': p,
        className: a()(_.bar, c, { [_.shortBar]: l }),
        onDoubleClick: f,
        children: [
            (0, r.jsx)('div', {
                className: _.title,
                children: n
            }),
            (0, r.jsx)('div', {
                className: _.leading,
                onDoubleClick: E,
                children: t
            }),
            (0, r.jsxs)('div', {
                className: _.trailing,
                onDoubleClick: E,
                children: [
                    o,
                    u === d.PlatformTypes.WINDOWS &&
                        (0, r.jsx)(v, {
                            windowKey: s,
                            showDivider: null != o
                        })
                ]
            })
        ]
    });
}
function y(e) {
    let { fixed: t = !1, show: n, windowKey: o } = e,
        s = (0, d.getPlatform)(),
        l = i.useCallback(() => g(o), [o]),
        c = s === d.PlatformTypes.WINDOWS;
    return s === d.PlatformTypes.WEB
        ? null
        : (0, r.jsx)('div', {
              'data-windows': c,
              className: a()(_.bar, _.systemBar, {
                  [_.fixed]: t,
                  [_.show]: n
              }),
              onDoubleClick: l,
              children:
                  c &&
                  (0, r.jsx)('div', {
                      className: _.trailing,
                      onDoubleClick: E,
                      children: (0, r.jsx)(v, { windowKey: o })
                  })
          });
}
