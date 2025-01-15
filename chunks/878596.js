var i = n(200651);
n(192379);
var s = n(481060),
    r = n(545951);
t.Z = (e) => {
    let { label: t, onClick: n, submitting: a } = e;
    return (0, i.jsx)(s.Clickable, {
        onClick: a ? void 0 : n,
        className: r.button,
        children: (0, i.jsxs)('div', {
            className: r.contentContainer,
            children: [
                a
                    ? (0, i.jsx)(s.Spinner, {
                          type: s.Spinner.Type.PULSING_ELLIPSIS,
                          className: r.__invalid_spinner
                      })
                    : (0, i.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          className: r.label,
                          children: t
                      }),
                (0, i.jsx)(s.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: r.arrow
                })
            ]
        })
    });
};
