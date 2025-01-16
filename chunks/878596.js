var i = n(200651);
n(192379);
var r = n(481060),
    s = n(545951);
t.Z = (e) => {
    let { label: t, onClick: n, submitting: a } = e;
    return (0, i.jsx)(r.Clickable, {
        onClick: a ? void 0 : n,
        className: s.button,
        children: (0, i.jsxs)('div', {
            className: s.contentContainer,
            children: [
                a
                    ? (0, i.jsx)(r.Spinner, {
                          type: r.Spinner.Type.PULSING_ELLIPSIS,
                          className: s.__invalid_spinner
                      })
                    : (0, i.jsx)(r.Text, {
                          variant: 'text-md/medium',
                          className: s.label,
                          children: t
                      }),
                (0, i.jsx)(r.ChevronSmallDownIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: s.arrow
                })
            ]
        })
    });
};
