n.d(t, { Z: () => a }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(173511),
    l = n(481060);
function a() {
    let [e, t] = r.useState('');
    return (0, i.jsxs)(l.hjN, {
        title: 'Text components',
        tag: l.RB0.H1,
        children: [
            (0, i.jsx)(l.oil, {
                placeholder: 'Enter custom text...',
                onChange: (e) => t(e)
            }),
            (0, i.jsx)(l.$i$, { style: { margin: '10px 0' } }),
            s.O.map((t) =>
                'code' === t
                    ? null
                    : (0, i.jsx)(
                          l.Text,
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
