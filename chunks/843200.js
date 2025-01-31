n.d(t, { Z: () => _ });
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
    h = n(388032),
    g = n(167836);
function _(e) {
    let { unclaimedNotice: t, unverifiedNotice: s, className: l } = e,
        {
            isClaimed: _,
            isVerified: x,
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
            let { default: e } = await Promise.all([n.e('9343'), n.e('1861')]).then(n.bind(n, 642298));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }
    return _ && x
        ? null
        : (0, i.jsx)(c.Zbd, {
              className: r()(g.wrapper, l),
              children: (0, i.jsxs)(d.Z, {
                  align: d.Z.Align.CENTER,
                  children: [
                      (0, i.jsx)(d.Z.Child, {
                          className: g.image,
                          grow: 0,
                          shrink: 0
                      }),
                      (0, i.jsxs)(d.Z.Child, {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-sm/normal',
                                  children: _ ? (null != s ? s : h.intl.string(h.t.WuyBbG)) : null != t ? t : h.intl.string(h.t['f+Zaoq'])
                              }),
                              (0, i.jsxs)(d.Z, {
                                  justify: d.Z.Justify.CENTER,
                                  className: g.content,
                                  children: [
                                      _
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
                                                    children: h.intl.string(h.t.ydw5nZ)
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
                                                    children: h.intl.string(h.t.fiNVio)
                                                })
                                            }),
                                      _ && p
                                          ? (0, i.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, i.jsx)(c.zxk, {
                                                    color: c.zxk.Colors.PRIMARY,
                                                    look: c.zxk.Looks.LINK,
                                                    onClick: E,
                                                    children: h.intl.string(h.t.Vm8akJ)
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
