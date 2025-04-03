n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(512722),
    l = n.n(a),
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
}
function f(e) {
    let { unclaimedNotice: t, unverifiedNotice: i, className: a } = e,
        {
            isClaimed: f,
            isVerified: b,
            hasEmail: N
        } = (0, o.cj)([u.default], () => {
            let e = u.default.getCurrentUser();
            return (
                l()(null != e, 'EmailNotice: currentUser cannot be undefined'),
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
            return (t) => (0, r.jsx)(e, h({}, t));
        });
    }
    return f && b
        ? null
        : (0, r.jsx)(c.Zbd, {
              className: s()(p.wrapper, a),
              children: (0, r.jsxs)(d.Z, {
                  align: d.Z.Align.CENTER,
                  children: [
                      (0, r.jsx)(d.Z.Child, {
                          className: p.image,
                          grow: 0,
                          shrink: 0
                      }),
                      (0, r.jsxs)(d.Z.Child, {
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: f ? (null != i ? i : g.NW.string(g.t.WuyBbG)) : null != t ? t : g.NW.string(g.t['f+Zaoq'])
                              }),
                              (0, r.jsxs)(d.Z, {
                                  justify: d.Z.Justify.CENTER,
                                  className: p.content,
                                  children: [
                                      f
                                          ? N
                                              ? (0, r.jsx)(d.Z.Child, {
                                                    grow: 0,
                                                    shrink: 0,
                                                    children: (0, r.jsx)(m.Z, {})
                                                })
                                              : (0, r.jsx)(c.zxk, {
                                                    size: c.zxk.Sizes.MEDIUM,
                                                    color: c.zxk.Colors.BRAND,
                                                    onClick: x,
                                                    children: g.NW.string(g.t.ydw5nZ)
                                                })
                                          : (0, r.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, r.jsx)(c.zxk, {
                                                    size: c.zxk.Sizes.MEDIUM,
                                                    color: c.zxk.Colors.BRAND,
                                                    onClick: function () {
                                                        (0, c.ZDy)(async () => {
                                                            let { default: e } = await n.e('60827').then(n.bind(n, 324239));
                                                            return (t) => (0, r.jsx)(e, h({}, t));
                                                        });
                                                    },
                                                    children: g.NW.string(g.t.fiNVio)
                                                })
                                            }),
                                      f && N
                                          ? (0, r.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, r.jsx)(c.zxk, {
                                                    color: c.zxk.Colors.PRIMARY,
                                                    look: c.zxk.Looks.LINK,
                                                    onClick: x,
                                                    children: g.NW.string(g.t.Vm8akJ)
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
