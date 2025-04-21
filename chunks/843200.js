n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(600164),
    u = n(594174),
    m = n(418632),
    g = n(388032),
    p = n(231829);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function f(e) {
    let { unclaimedNotice: t, unverifiedNotice: r, className: l } = e,
        {
            isClaimed: f,
            isVerified: b,
            hasEmail: _
        } = (0, o.cj)([u.default], () => {
            let e = u.default.getCurrentUser();
            return (
                a()(null != e, 'EmailNotice: currentUser cannot be undefined'),
                {
                    isClaimed: e.isClaimed(),
                    isVerified: e.verified,
                    hasEmail: null != e.email
                }
            );
        });
    function x() {
        (0, c.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('9343'), n.e('39809')]).then(n.bind(n, 642298));
            return (t) => (0, i.jsx)(e, h({}, t));
        });
    }
    return f && b
        ? null
        : (0, i.jsx)(c.Zbd, {
              className: s()(p.wrapper, l),
              children: (0, i.jsxs)(d.Z, {
                  align: d.Z.Align.CENTER,
                  children: [
                      (0, i.jsx)(d.Z.Child, {
                          className: p.image,
                          grow: 0,
                          shrink: 0
                      }),
                      (0, i.jsxs)(d.Z.Child, {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: f ? (null != r ? r : g.intl.string(g.t.WuyBbG)) : null != t ? t : g.intl.string(g.t['f+Zaoq'])
                              }),
                              (0, i.jsxs)(d.Z, {
                                  justify: d.Z.Justify.CENTER,
                                  className: p.content,
                                  children: [
                                      f
                                          ? _
                                              ? (0, i.jsx)(d.Z.Child, {
                                                    grow: 0,
                                                    shrink: 0,
                                                    children: (0, i.jsx)(m.Z, {})
                                                })
                                              : (0, i.jsx)(c.zxk, {
                                                    size: c.zxk.Sizes.MEDIUM,
                                                    color: c.zxk.Colors.BRAND,
                                                    onClick: x,
                                                    children: g.intl.string(g.t.ydw5nZ)
                                                })
                                          : (0, i.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, i.jsx)(c.zxk, {
                                                    size: c.zxk.Sizes.MEDIUM,
                                                    color: c.zxk.Colors.BRAND,
                                                    onClick: function () {
                                                        (0, c.ZDy)(async () => {
                                                            let { default: e } = await n.e('60827').then(n.bind(n, 324239));
                                                            return (t) => (0, i.jsx)(e, h({}, t));
                                                        });
                                                    },
                                                    children: g.intl.string(g.t.fiNVio)
                                                })
                                            }),
                                      f && _
                                          ? (0, i.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, i.jsx)(c.zxk, {
                                                    color: c.zxk.Colors.PRIMARY,
                                                    look: c.zxk.Looks.LINK,
                                                    onClick: x,
                                                    children: g.intl.string(g.t.Vm8akJ)
                                                })
                                            })
                                          : null
                                  ]
                              })
                          ]
                      })
                  ]
              })
          });
}
