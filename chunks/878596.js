n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(78214);
let l = (e) => {
    let { label: t, onClick: n, submitting: l } = e;
    return (0, i.jsx)(s.P3F, {
        onClick: l ? void 0 : n,
        className: r.button,
        children: (0, i.jsxs)('div', {
            className: r.contentContainer,
            children: [
                l
                    ? (0, i.jsx)(s.$jN, {
                          type: s.$jN.Type.PULSING_ELLIPSIS,
                          className: r.__invalid_spinner
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: r.label,
                          children: t
                      }),
                (0, i.jsx)(s.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: r.arrow
                })
            ]
        })
    });
};
