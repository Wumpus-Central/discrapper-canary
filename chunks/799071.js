n.d(t, { Z: () => a }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(173511),
    r = n(481060);
function a() {
    let [e, t] = s.useState('');
    return (0, i.jsxs)(r.hjN, {
        title: 'Text components',
        tag: r.RB0.H1,
        children: [
            (0, i.jsx)(r.oil, {
                placeholder: 'Enter custom text...',
                onChange: (e) => t(e)
            }),
            (0, i.jsx)(r.$i$, { style: { margin: '10px 0' } }),
            l.O.map((t) =>
                'code' === t
                    ? null
                    : (0, i.jsx)(
                          r.Text,
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
