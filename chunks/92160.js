n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(388032),
    o = n(53134);
function c(e) {
    let { className: t, enabled: n, previewCTA: i, onPreview: c, onToggle: d, animateStatus: u, firstLine: m, secondLine: g, disabled: p } = e;
    return (0, r.jsxs)('div', {
        className: s()(t, o.enableContainer),
        children: [
            n
                ? (0, r.jsx)(a.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: s()(o.activeCircle, { [o.animate]: u })
                  })
                : (0, r.jsx)(a.vdY, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: s()(o.editCircle, { [o.animate]: u })
                  }),
            (0, r.jsxs)('div', {
                className: o.enableDescription,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        children: m
                    }),
                    (0, r.jsx)(a.Text, {
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
                        : (0, r.jsx)(a.zxk, {
                              className: o.previewButton,
                              look: a.zxk.Looks.LINK,
                              size: a.zxk.Sizes.SMALL,
                              onClick: c,
                              disabled: p,
                              color: a.zxk.Colors.PRIMARY,
                              children: null != i ? i : l.NW.string(l.t['5U0kLy'])
                          }),
                    (0, r.jsx)(a.zxk, {
                        disabled: null == d || p,
                        size: a.zxk.Sizes.SMALL,
                        color: n ? a.zxk.Colors.RED : a.zxk.Colors.BRAND,
                        onClick: d,
                        children: n ? l.NW.string(l.t.R9GHyc) : l.NW.string(l.t.JFfinp)
                    })
                ]
            })
        ]
    });
}
