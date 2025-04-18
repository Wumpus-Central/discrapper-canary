n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    l = n(481060),
    a = n(388032),
    o = n(329954);
function c(e) {
    let { className: t, enabled: n, previewCTA: i, onPreview: c, onToggle: d, animateStatus: u, firstLine: m, secondLine: g, disabled: p } = e;
    return (0, r.jsxs)('div', {
        className: s()(t, o.enableContainer),
        children: [
            n
                ? (0, r.jsx)(l.dz2, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: s()(o.activeCircle, { [o.animate]: u })
                  })
                : (0, r.jsx)(l.vdY, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: s()(o.editCircle, { [o.animate]: u })
                  }),
            (0, r.jsxs)('div', {
                className: o.enableDescription,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        children: m
                    }),
                    (0, r.jsx)(l.Text, {
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
                        : (0, r.jsx)(l.zxk, {
                              className: o.previewButton,
                              look: l.zxk.Looks.LINK,
                              size: l.zxk.Sizes.SMALL,
                              onClick: c,
                              disabled: p,
                              color: l.zxk.Colors.PRIMARY,
                              children: null != i ? i : a.NW.string(a.t['5U0kLy'])
                          }),
                    (0, r.jsx)(l.zxk, {
                        disabled: null == d || p,
                        size: l.zxk.Sizes.SMALL,
                        color: n ? l.zxk.Colors.RED : l.zxk.Colors.BRAND,
                        onClick: d,
                        children: n ? a.NW.string(a.t.R9GHyc) : a.NW.string(a.t.JFfinp)
                    })
                ]
            })
        ]
    });
}
