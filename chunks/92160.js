n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(388032),
    o = n(353701);
function c(e) {
    let { className: t, enabled: n, previewCTA: r, onPreview: c, onToggle: d, animateStatus: u, firstLine: m, secondLine: h, disabled: g } = e;
    return (0, i.jsxs)('div', {
        className: l()(t, o.enableContainer),
        children: [
            n
                ? (0, i.jsx)(s.CheckmarkLargeIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(o.activeCircle, { [o.animate]: u })
                  })
                : (0, i.jsx)(s.PencilIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(o.editCircle, { [o.animate]: u })
                  }),
            (0, i.jsxs)('div', {
                className: o.enableDescription,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: m
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: h
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    null == c
                        ? null
                        : (0, i.jsx)(s.Button, {
                              className: o.previewButton,
                              look: s.Button.Looks.LINK,
                              size: s.Button.Sizes.SMALL,
                              onClick: c,
                              disabled: g,
                              color: s.Button.Colors.PRIMARY,
                              children: null != r ? r : a.intl.string(a.t['5U0kLy'])
                          }),
                    (0, i.jsx)(s.Button, {
                        disabled: null == d || g,
                        size: s.Button.Sizes.SMALL,
                        color: n ? s.Button.Colors.RED : s.Button.Colors.BRAND,
                        onClick: d,
                        children: n ? a.intl.string(a.t.R9GHyc) : a.intl.string(a.t.JFfinp)
                    })
                ]
            })
        ]
    });
}
