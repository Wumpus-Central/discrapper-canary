n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(173511),
    a = n(481060);
function l() {
    let [e, t] = s.useState('');
    return (0, i.jsxs)(a.FormSection, {
        title: 'Text components',
        tag: a.FormTitleTags.H1,
        children: [
            (0, i.jsx)(a.TextInput, {
                placeholder: 'Enter custom text...',
                onChange: (e) => t(e)
            }),
            (0, i.jsx)(a.FormDivider, { style: { margin: '10px 0' } }),
            r.O.map((t) =>
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
