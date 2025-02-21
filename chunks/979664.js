n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(813197),
    o = n(999382),
    c = n(388032),
    d = n(805607);
function u(e) {
    let { profile: t, handleIconChange: n, canManageGuild: s } = e,
        o = i.useCallback(() => {
            n(null);
        }, [n]),
        u = (0, r.jsxs)('div', {
            className: d.tooltip,
            children: [
                (0, r.jsx)(a.X6q, {
                    variant: 'heading-sm/medium',
                    children: c.NW.string(c.t.JD7DIS)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    children: c.NW.string(c.t.mJxa5O)
                })
            ]
        });
    return (0, r.jsxs)('div', {
        className: d.buttons,
        children: [
            (0, r.jsx)(a.ua7, {
                text: u,
                'aria-label': c.NW.string(c.t.JD7DIS),
                shouldShow: s,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)(
                        a.zxk,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (i = i =
                            {
                                size: a.zxk.Sizes.SMALL,
                                color: a.zxk.Colors.BRAND,
                                disabled: !s,
                                children: [c.NW.string(c.t.r3Jdsb), (0, r.jsx)(l.ZP, { onChange: n })]
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        t)
                    );
                }
            }),
            null != t.icon
                ? (0, r.jsx)(a.zxk, {
                      size: a.zxk.Sizes.SMALL,
                      color: a.zxk.Colors.RED,
                      look: a.zxk.Looks.LINK,
                      onClick: o,
                      disabled: !s,
                      children: c.NW.string(c.t.x8AlTk)
                  })
                : null
        ]
    });
}
function m(e) {
    let { profile: t, canManageGuild: n, onIconChange: i } = e,
        l = (0, s.e7)([o.Z], () => o.Z.getError('icon'));
    return (0, r.jsxs)('section', {
        className: d.container,
        children: [
            (0, r.jsx)(a.xJW, {
                title: c.NW.string(c.t.FkQnxM),
                children: (0, r.jsx)(u, {
                    profile: t,
                    canManageGuild: n,
                    handleIconChange: i
                })
            }),
            null != l
                ? (0, r.jsx)('div', {
                      className: d.iconError,
                      children: l
                  })
                : null
        ]
    });
}
