(n.d(t, { Z: () => l }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(173511),
    a = n(481060);
function l() {
    let [e, t] = r.useState('');
    return (0, i.jsxs)(a.hjN, {
        title: 'Text components',
        tag: a.RB0.H1,
        children: [
            (0, i.jsx)(a.oil, {
                placeholder: 'Enter custom text...',
                onChange: (e) => t(e)
            }),
            (0, i.jsx)(a.$i$, { style: { margin: '10px 0' } }),
            s.O.map((t) =>
                'code' === t
                    ? null
                    : (0, i.jsx)(
                          a.Text,
                          {
                              variant: t,
                              children: '' !== e ? ''.concat(e, ' (').concat(t, ')') : t
                          },
                          t
                      )
            )
        ]
    });
}
