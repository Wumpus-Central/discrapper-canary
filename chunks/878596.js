n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(78214);
let r = (e) => {
    let { label: t, onClick: n, submitting: r } = e;
    return (0, i.jsx)(s.P3F, {
        onClick: r ? void 0 : n,
        className: l.button,
        children: (0, i.jsxs)('div', {
            className: l.contentContainer,
            children: [
                r
                    ? (0, i.jsx)(s.$jN, {
                          type: s.$jN.Type.PULSING_ELLIPSIS,
                          className: l.__invalid_spinner
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: l.label,
                          children: t
                      }),
                (0, i.jsx)(s.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: l.arrow
                })
            ]
        })
    });
};
