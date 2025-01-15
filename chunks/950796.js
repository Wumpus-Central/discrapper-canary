r.d(n, {
    D: function () {
        return b;
    },
    T: function () {
        return T;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(428548),
    c = r(679219),
    d = r(939039),
    f = r(358085),
    _ = r(998502),
    h = r(388032),
    p = r(31161);
let m = (e) => _.ZP.close(e),
    g = (e) => _.ZP.minimize(e),
    E = (e, n) => {
        (0, f.isMac)() && !n.altKey ? _.ZP.fullscreen(e) : _.ZP.maximize(e);
    };
function v(e) {
    e.stopPropagation();
}
function I(e) {
    let { windowKey: n, showDivider: r } = e,
        a = (0, i.jsx)(l.Clickable, {
            className: o()(p.winButton, p.winButtonClose),
            onClick: () => m(n),
            'aria-label': h.intl.string(h.t.ZdNUj4),
            tabIndex: -1,
            children: (0, i.jsx)(u.Z, {})
        }),
        s = (0, i.jsx)(l.Clickable, {
            className: o()(p.winButton, p.winButtonMinMax),
            onClick: (e) => E(n, e),
            'aria-label': h.intl.string(h.t.G1u0hI),
            tabIndex: -1,
            children: (0, i.jsx)(c.Z, {})
        }),
        f = (0, i.jsx)(l.Clickable, {
            className: o()(p.winButton, p.winButtonMinMax),
            onClick: () => g(n),
            'aria-label': h.intl.string(h.t.CxOC4e),
            tabIndex: -1,
            children: (0, i.jsx)(d.Z, {})
        });
    return (0, i.jsxs)('div', {
        className: o()(p.winButtons, { [p.winButtonsWithDivider]: r }),
        children: [f, s, a]
    });
}
function T(e) {
    let { leading: n, title: r, trailing: s, windowKey: l, short: u } = e,
        c = (0, f.getPlatform)(),
        d = a.useCallback((e) => E(l, e), [l]);
    return (0, i.jsxs)('div', {
        className: o()(p.bar, { [p.shortBar]: u }),
        onDoubleClick: d,
        children: [
            (0, i.jsx)('div', {
                className: p.title,
                children: r
            }),
            (0, i.jsx)('div', {
                className: p.leading,
                onDoubleClick: v,
                children: n
            }),
            (0, i.jsxs)('div', {
                className: p.trailing,
                onDoubleClick: v,
                children: [
                    s,
                    c === f.PlatformTypes.WINDOWS &&
                        (0, i.jsx)(I, {
                            windowKey: l,
                            showDivider: null != s
                        })
                ]
            })
        ]
    });
}
function b(e) {
    let { fixed: n = !1, show: r, windowKey: s } = e,
        l = (0, f.getPlatform)(),
        u = a.useCallback((e) => E(s, e), [s]);
    return l === f.PlatformTypes.WEB
        ? null
        : (0, i.jsx)('div', {
              className: o()(p.bar, p.systemBar, {
                  [p.fixed]: n,
                  [p.show]: r
              }),
              onDoubleClick: u,
              children:
                  l === f.PlatformTypes.WINDOWS &&
                  (0, i.jsx)('div', {
                      className: p.trailing,
                      onDoubleClick: v,
                      children: (0, i.jsx)(I, { windowKey: s })
                  })
          });
}
