r.d(n, {
    D: function () {
        return I;
    },
    T: function () {
        return b;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(428548),
    c = r(679219),
    d = r(939039),
    f = r(358085),
    p = r(998502),
    h = r(388032),
    _ = r(565923);
let m = (e) => p.ZP.close(e),
    g = (e) => p.ZP.minimize(e),
    E = (e) => p.ZP.maximize(e);
function v(e) {
    e.stopPropagation();
}
function y(e) {
    let { windowKey: n, showDivider: r } = e,
        a = (0, i.jsx)(l.Clickable, {
            className: s()(_.winButton, _.winButtonClose),
            onClick: () => m(n),
            'aria-label': h.intl.string(h.t.ZdNUj4),
            tabIndex: -1,
            children: (0, i.jsx)(u.Z, {})
        }),
        o = (0, i.jsx)(l.Clickable, {
            className: s()(_.winButton, _.winButtonMinMax),
            onClick: () => E(n),
            'aria-label': h.intl.string(h.t.G1u0hI),
            tabIndex: -1,
            children: (0, i.jsx)(c.Z, {})
        }),
        f = (0, i.jsx)(l.Clickable, {
            className: s()(_.winButton, _.winButtonMinMax),
            onClick: () => g(n),
            'aria-label': h.intl.string(h.t.CxOC4e),
            tabIndex: -1,
            children: (0, i.jsx)(d.Z, {})
        });
    return (0, i.jsxs)('div', {
        className: s()(_.winButtons, { [_.winButtonsWithDivider]: r }),
        children: [f, o, a]
    });
}
function b(e) {
    let { leading: n, title: r, trailing: o, windowKey: l, short: u } = e,
        c = (0, f.getPlatform)(),
        d = a.useCallback(() => E(l), [l]),
        p = c === f.PlatformTypes.WINDOWS;
    return (0, i.jsxs)('div', {
        'data-windows': p,
        className: s()(_.bar, { [_.shortBar]: u }),
        onDoubleClick: d,
        children: [
            (0, i.jsx)('div', {
                className: _.title,
                children: r
            }),
            (0, i.jsx)('div', {
                className: _.leading,
                onDoubleClick: v,
                children: n
            }),
            (0, i.jsxs)('div', {
                className: _.trailing,
                onDoubleClick: v,
                children: [
                    o,
                    c === f.PlatformTypes.WINDOWS &&
                        (0, i.jsx)(y, {
                            windowKey: l,
                            showDivider: null != o
                        })
                ]
            })
        ]
    });
}
function I(e) {
    let { fixed: n = !1, show: r, windowKey: o } = e,
        l = (0, f.getPlatform)(),
        u = a.useCallback(() => E(o), [o]),
        c = l === f.PlatformTypes.WINDOWS;
    return l === f.PlatformTypes.WEB
        ? null
        : (0, i.jsx)('div', {
              'data-windows': c,
              className: s()(_.bar, _.systemBar, {
                  [_.fixed]: n,
                  [_.show]: r
              }),
              onDoubleClick: u,
              children:
                  c &&
                  (0, i.jsx)('div', {
                      className: _.trailing,
                      onDoubleClick: v,
                      children: (0, i.jsx)(y, { windowKey: o })
                  })
          });
}
