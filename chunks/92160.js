n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(388032),
    o = n(353701);
function c(e) {
    let { className: t, enabled: n, previewCTA: r, onPreview: c, onToggle: d, animateStatus: u, firstLine: m, secondLine: h, disabled: g } = e;
    return (0, i.jsxs)('div', {
        className: l()(t, o.enableContainer),
        children: [
            n
                ? (0, i.jsx)(a.CheckmarkLargeIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(o.activeCircle, { [o.animate]: u })
                  })
                : (0, i.jsx)(a.PencilIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: l()(o.editCircle, { [o.animate]: u })
                  }),
            (0, i.jsxs)('div', {
                className: o.enableDescription,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        children: m
                    }),
                    (0, i.jsx)(a.Text, {
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
                        : (0, i.jsx)(a.Button, {
                              className: o.previewButton,
                              look: a.Button.Looks.LINK,
                              size: a.Button.Sizes.SMALL,
                              onClick: c,
                              disabled: g,
                              color: a.Button.Colors.PRIMARY,
                              children: null != r ? r : s.intl.string(s.t['5U0kLy'])
                          }),
                    (0, i.jsx)(a.Button, {
                        disabled: null == d || g,
                        size: a.Button.Sizes.SMALL,
                        color: n ? a.Button.Colors.RED : a.Button.Colors.BRAND,
                        onClick: d,
                        children: n ? s.intl.string(s.t.R9GHyc) : s.intl.string(s.t.JFfinp)
                    })
                ]
            })
        ]
    });
}
