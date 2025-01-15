n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(600164),
    u = n(594174),
    m = n(418632),
    g = n(388032),
    h = n(644363);
function p(e) {
    let { unclaimedNotice: t, unverifiedNotice: r, className: a } = e,
        {
            isClaimed: p,
            isVerified: x,
            hasEmail: f
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
    function _() {
        (0, c.openModalLazy)(async () => {
            let { default: e } = await n.e('60827').then(n.bind(n, 324239));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }
    function E() {
        (0, c.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('9343'), n.e('23379')]).then(n.bind(n, 642298));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    }
    return p && x
        ? null
        : (0, i.jsx)(c.Card, {
              className: s()(h.wrapper, a),
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
                                  children: p ? (null != r ? r : g.intl.string(g.t.WuyBbG)) : null != t ? t : g.intl.string(g.t['f+Zaoq'])
                              }),
                              (0, i.jsxs)(d.Z, {
                                  justify: d.Z.Justify.CENTER,
                                  className: h.content,
                                  children: [
                                      p
                                          ? f
                                              ? (0, i.jsx)(d.Z.Child, {
                                                    grow: 0,
                                                    shrink: 0,
                                                    children: (0, i.jsx)(m.Z, {})
                                                })
                                              : (0, i.jsx)(c.Button, {
                                                    size: c.Button.Sizes.MEDIUM,
                                                    color: c.Button.Colors.BRAND,
                                                    onClick: E,
                                                    children: g.intl.string(g.t.ydw5nZ)
                                                })
                                          : (0, i.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, i.jsx)(c.Button, {
                                                    size: c.Button.Sizes.MEDIUM,
                                                    color: c.Button.Colors.BRAND,
                                                    onClick: _,
                                                    children: g.intl.string(g.t.fiNVio)
                                                })
                                            }),
                                      p && f
                                          ? (0, i.jsx)(d.Z.Child, {
                                                grow: 0,
                                                shrink: 0,
                                                children: (0, i.jsx)(c.Button, {
                                                    color: c.Button.Colors.PRIMARY,
                                                    look: c.Button.Looks.LINK,
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
