n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(83091);
let a = (e) => {
    let { label: t, onClick: n, submitting: a } = e;
    return (0, r.jsx)(i.P3F, {
        onClick: a ? void 0 : n,
        className: s.button,
        children: (0, r.jsxs)('div', {
            className: s.contentContainer,
            children: [
                a
                    ? (0, r.jsx)(i.$jN, {
                          type: i.$jN.Type.PULSING_ELLIPSIS,
                          className: s.__invalid_spinner
                      })
                    : (0, r.jsx)(i.Text, {
                          variant: 'text-md/medium',
                          className: s.label,
                          children: t
                      }),
                (0, r.jsx)(i.CJ0, {
                    size: 'md',
                    color: 'currentColor',
                    className: s.arrow
                })
            ]
        })
    });
};
