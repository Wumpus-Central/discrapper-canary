n.d(t, {
    Z: function () {
        return m;
    }
});
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    s = n(481060),
    a = n(971130),
    o = n(388032),
    d = n(802870),
    u = n(275477);
let c = a.ZP.getMaxAgeOptions;
function h(e) {
    let { temporary: t, shouldHide: n, onToggleTemporary: i } = e;
    return n
        ? (0, l.jsx)('div', { className: u.marginTop20 })
        : (0, l.jsx)(s.FormItem, {
              className: r()(u.marginTop20, d.switch),
              children: (0, l.jsx)(s.FormSwitch, {
                  value: t,
                  onChange: (e) => i(e),
                  note: o.intl.string(o.t.UN5IRU),
                  hideBorder: !0,
                  children: (0, l.jsx)(s.Text, {
                      variant: 'text-sm/normal',
                      children: o.intl.string(o.t['wE+9dn'])
                  })
              })
          });
}
let g = a.ZP.getMaxUsesOptions;
function m(e) {
    var t;
    let { shouldHideTemporaryInviteToggle: n, maxAge: i, maxUses: a, temporary: m, onGenerateNewLink: v, onToggleTemporary: p, onSelectMaxAge: x, onSelectMaxUses: I } = e,
        S = c.find((e) => e.value === i),
        T = g.find((e) => e.value === a);
    return (0, l.jsx)('div', {
        className: d.settingsContent,
        children: (0, l.jsxs)('form', {
            onSubmit: v,
            children: [
                (0, l.jsx)(s.FormItem, {
                    title: o.intl.string(o.t['60qw29']),
                    className: u.marginTop20,
                    children: (0, l.jsx)(s.SingleSelect, {
                        value: null !== (t = null == S ? void 0 : S.value) && void 0 !== t ? t : c[0].value,
                        options: c,
                        onChange: x,
                        maxVisibleItems: 8
                    })
                }),
                (0, l.jsx)(s.FormItem, {
                    title: o.intl.string(o.t.jDqWHR),
                    className: r()(u.marginTop20, u.marginBottom4),
                    children: (0, l.jsx)(s.SingleSelect, {
                        value: null == T ? void 0 : T.value,
                        options: g,
                        onChange: I
                    })
                }),
                (0, l.jsx)(h, {
                    temporary: m,
                    shouldHide: n,
                    onToggleTemporary: p
                })
            ]
        })
    });
}
