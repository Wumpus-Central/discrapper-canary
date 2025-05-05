n.d(t, { Z: () => l });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(83091);
let l = (e) => {
    let { label: t, onClick: n, submitting: l } = e;
    return (0, i.jsx)(r.P3F, {
        onClick: l ? void 0 : n,
        className: s.button,
        children: (0, i.jsxs)('div', {
            className: s.contentContainer,
            children: [
                l
                    ? (0, i.jsx)(r.$jN, {
                          type: r.$jN.Type.PULSING_ELLIPSIS,
                          className: s.__invalid_spinner
                      })
                    : (0, i.jsx)(r.Text, {
                          variant: 'text-md/medium',
                          className: s.label,
                          children: t
                      }),
                (0, i.jsx)(r.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: s.arrow
                })
            ]
        })
    });
};
