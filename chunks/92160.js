n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(755721),
    a = n(481060),
    o = n(388032),
    c = n(53134);
function d(e) {
    let { className: t, enabled: n, previewCTA: i, onPreview: d, onToggle: u, animateStatus: m, firstLine: g, secondLine: p, disabled: f } = e;
    return (0, r.jsxs)('div', {
        className: l()(t, c.enableContainer),
        children: [
            n
                ? (0, r.jsx)(a.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(c.activeCircle, { [c.animate]: m })
                  })
                : (0, r.jsx)(a.vdY, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(c.editCircle, { [c.animate]: m })
                  }),
            (0, r.jsxs)('div', {
                className: c.enableDescription,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        children: g
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        children: p
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: c.buttonContainer,
                children: [
                    null == d
                        ? null
                        : (0, r.jsx)('div', {
                              'data-button-hoisted-classname-wrapper': !0,
                              className: c.previewButton,
                              children: (0, r.jsx)(a.zxk, {
                                  variant: 'secondary',
                                  size: 'sm',
                                  text: null != i ? i : o.intl.string(o.t['5U0kLy']),
                                  onClick: d,
                                  disabled: f
                              })
                          }),
                    (0, r.jsx)(s.zx, {
                        disabled: null == u || f,
                        size: s.zx.Sizes.SMALL,
                        color: n ? s.zx.Colors.RED : s.zx.Colors.BRAND,
                        onClick: u,
                        children: n ? o.intl.string(o.t.R9GHyc) : o.intl.string(o.t.JFfinp)
                    })
                ]
            })
        ]
    });
}
