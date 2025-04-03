n.d(t, { Z: () => l }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(173511),
    a = n(481060);
function l() {
    let [e, t] = i.useState('');
    return (0, r.jsxs)(a.hjN, {
        title: 'Text components',
        tag: a.RB0.H1,
        children: [
            (0, r.jsx)(a.oil, {
                placeholder: 'Enter custom text...',
                onChange: (e) => t(e)
            }),
            (0, r.jsx)(a.$i$, { style: { margin: '10px 0' } }),
            s.O.map((t) =>
                'code' === t
                    ? null
                    : (0, r.jsx)(
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
