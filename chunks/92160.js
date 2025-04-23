n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(388032),
    o = n(53134);
function c(e) {
    let { className: t, enabled: n, previewCTA: i, onPreview: c, onToggle: u, animateStatus: d, firstLine: m, secondLine: g, disabled: p } = e;
    return (0, r.jsxs)('div', {
        className: l()(t, o.enableContainer),
        children: [
            n
                ? (0, r.jsx)(s.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(o.activeCircle, { [o.animate]: d })
                  })
                : (0, r.jsx)(s.vdY, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(o.editCircle, { [o.animate]: d })
                  }),
            (0, r.jsxs)('div', {
                className: o.enableDescription,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: m
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: g
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    null == c
                        ? null
                        : (0, r.jsx)(s.zxk, {
                              className: o.previewButton,
                              look: s.zxk.Looks.LINK,
                              size: s.zxk.Sizes.SMALL,
                              onClick: c,
                              disabled: p,
                              color: s.zxk.Colors.PRIMARY,
                              children: null != i ? i : a.intl.string(a.t['5U0kLy'])
                          }),
                    (0, r.jsx)(s.zxk, {
                        disabled: null == u || p,
                        size: s.zxk.Sizes.SMALL,
                        color: n ? s.zxk.Colors.RED : s.zxk.Colors.BRAND,
                        onClick: u,
                        children: n ? a.intl.string(a.t.R9GHyc) : a.intl.string(a.t.JFfinp)
                    })
                ]
            })
        ]
    });
}
