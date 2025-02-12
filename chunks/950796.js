n.d(t, {
    D: () => I,
    T: () => y
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(428548),
    u = n(679219),
    c = n(939039),
    d = n(358085),
    f = n(998502),
    _ = n(388032),
    p = n(258986);
let h = (e) => f.ZP.close(e),
    m = (e) => f.ZP.minimize(e),
    g = (e) => f.ZP.maximize(e);
function E(e) {
    e.stopPropagation();
}
function v(e) {
    let { windowKey: t, showDivider: n } = e,
        r = (0, i.jsx)(o.P3F, {
            className: s()(p.winButton, p.winButtonClose),
            onClick: () => h(t),
            'aria-label': _.intl.string(_.t.ZdNUj4),
            tabIndex: -1,
            children: (0, i.jsx)(l.Z, {})
        }),
        a = (0, i.jsx)(o.P3F, {
            className: s()(p.winButton, p.winButtonMinMax),
            onClick: () => g(t),
            'aria-label': _.intl.string(_.t.G1u0hI),
            tabIndex: -1,
            children: (0, i.jsx)(u.Z, {})
        }),
        d = (0, i.jsx)(o.P3F, {
            className: s()(p.winButton, p.winButtonMinMax),
            onClick: () => m(t),
            'aria-label': _.intl.string(_.t.CxOC4e),
            tabIndex: -1,
            children: (0, i.jsx)(c.Z, {})
        });
    return (0, i.jsxs)('div', {
        className: s()(p.winButtons, { [p.winButtonsWithDivider]: n }),
        children: [d, a, r]
    });
}
function y(e) {
    let { leading: t, title: n, trailing: a, windowKey: o, short: l, className: u } = e,
        c = (0, d.getPlatform)(),
        f = r.useCallback(() => g(o), [o]),
        _ = c === d.PlatformTypes.WINDOWS;
    return (0, i.jsxs)('div', {
        'data-windows': _,
        className: s()(p.bar, u, { [p.shortBar]: l }),
        onDoubleClick: f,
        children: [
            (0, i.jsx)('div', {
                className: p.title,
                children: n
            }),
            (0, i.jsx)('div', {
                className: p.leading,
                onDoubleClick: E,
                children: t
            }),
            (0, i.jsxs)('div', {
                className: p.trailing,
                onDoubleClick: E,
                children: [
                    a,
                    c === d.PlatformTypes.WINDOWS &&
                        (0, i.jsx)(v, {
                            windowKey: o,
                            showDivider: null != a
                        })
                ]
            })
        ]
    });
}
function I(e) {
    let { fixed: t = !1, show: n, windowKey: a } = e,
        o = (0, d.getPlatform)(),
        l = r.useCallback(() => g(a), [a]),
        u = o === d.PlatformTypes.WINDOWS;
    return o === d.PlatformTypes.WEB
        ? null
        : (0, i.jsx)('div', {
              'data-windows': u,
              className: s()(p.bar, p.systemBar, {
                  [p.fixed]: t,
                  [p.show]: n
              }),
              onDoubleClick: l,
              children:
                  u &&
                  (0, i.jsx)('div', {
                      className: p.trailing,
                      onDoubleClick: E,
                      children: (0, i.jsx)(v, { windowKey: a })
                  })
          });
}
