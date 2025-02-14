n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(600164),
    u = n(594174),
    m = n(418632),
    g = n(388032),
    h = n(378529);
function x(e) {
    let { unclaimedNotice: t, unverifiedNotice: s, className: l } = e,
        {
            isClaimed: x,
            isVerified: _,
            hasEmail: p
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
    function E() {
        (0, c.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('9343'), n.e('73669')]).then(n.bind(n, 642298));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }
    return x && _
        ? null
        : (0, i.jsx)(c.Zbd, {
              className: r()(h.wrapper, l),
              children: (0, i.jsxs)(d.Z, {
                  align: d.Z.Align.CENTER,
                  children: [
                      (0, i.jsx)(d.Z.Child, {
                          className: h.image,
                          grow: 0,
                          shrink: 0
                      }),
                      (0, i.jsxs)(d.Z.Child, {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: x ? (null != s ? s : g.intl.string(g.t.WuyBbG)) : null != t ? t : g.intl.string(g.t['f+Zaoq'])
                              }),
                              (0, i.jsxs)(d.Z, {
                                  justify: d.Z.Justify.CENTER,
                                  className: h.content,
                                  children: [
                                      x
                                          ? p
                                              ? (0, i.jsx)(d.Z.Child, {
                                                    grow: 0,
                                                    shrink: 0,
                                                    children: (0, i.jsx)(m.Z, {})
                                                })
                                              : (0, i.jsx)(c.zxk, {
                                                    size: c.zxk.Sizes.MEDIUM,
                                                    color: c.zxk.Colors.BRAND,
                                                    onClick: E,
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
                                                            return (t) => (0, i.jsx)(e, { ...t });
                                                        });
                                                    },
                                                    children: g.intl.string(g.t.fiNVio)
                                                })
                                            }),
                                      x && p
                                          ? (0, i.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, i.jsx)(c.zxk, {
                                                    color: c.zxk.Colors.PRIMARY,
                                                    look: c.zxk.Looks.LINK,
                                                    onClick: E,
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
