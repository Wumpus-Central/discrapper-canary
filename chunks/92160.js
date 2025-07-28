n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    s = n(481060),
    o = n(388032),
    c = n(53134);
function d(e) {
    let { className: t, enabled: n, previewCTA: i, onPreview: d, onToggle: u, animateStatus: m, firstLine: g, secondLine: p, disabled: h } = e;
    return (0, r.jsxs)('div', {
        className: l()(t, c.enableContainer),
        children: [
            n
                ? (0, r.jsx)(s.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(c.activeCircle, { [c.animate]: m })
                  })
                : (0, r.jsx)(s.vdY, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(c.editCircle, { [c.animate]: m })
                  }),
            (0, r.jsxs)('div', {
                className: c.enableDescription,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: g
                    }),
                    (0, r.jsx)(s.Text, {
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
                              children: (0, r.jsx)(s.zxk, {
                                  variant: 'secondary',
                                  size: 'sm',
                                  text: null != i ? i : o.intl.string(o.t['5U0kLy']),
                                  onClick: d,
                                  disabled: h
                              })
                          }),
                    (0, r.jsx)(a.zx, {
                        disabled: null == u || h,
                        size: a.zx.Sizes.SMALL,
                        color: n ? a.zx.Colors.RED : a.zx.Colors.BRAND,
                        onClick: u,
                        children: n ? o.intl.string(o.t.R9GHyc) : o.intl.string(o.t.JFfinp)
                    })
                ]
            })
        ]
    });
}
