n.d(r, { Z: () => d });
var t = n(200651);
n(192379);
var s = n(481060),
    o = n(198952),
    i = n(329242),
    l = n(388032),
    c = n(217682);
let a = (e) => {
    let { children: r, className: n, ...o } = e;
    return (0, t.jsx)(s.Y0X, {
        className: n,
        ...o,
        children: r
    });
};
(a.ButtonFooter = (e) => {
    let { children: r } = e;
    return (0, t.jsx)('div', {
        className: c.footer,
        children: r
    });
}),
    (a.Header = (e) => {
        let { icon: r, currentUser: n, otherUser: l, header: a } = e;
        return (0, t.jsxs)('div', {
            className: c.header,
            children: [
                (0, t.jsx)(o.Z, {
                    currentUser: n,
                    otherUser: l,
                    children: r
                }),
                (0, t.jsxs)('div', {
                    className: c.heading,
                    children: [
                        (0, t.jsx)(s.X6q, {
                            variant: 'text-lg/bold',
                            children: a
                        }),
                        (0, t.jsx)(i.Z, { user: l })
                    ]
                })
            ]
        });
    }),
    (a.Content = (e) => {
        let { children: r } = e;
        return (0, t.jsx)('div', {
            className: c.content,
            children: r
        });
    }),
    (a.Notice = (e) => {
        let { notice: r } = e;
        return (0, t.jsxs)('div', {
            className: c.notice,
            children: [
                (0, t.jsx)(s.Text, {
                    variant: 'eyebrow',
                    color: 'header-primary',
                    children: l.intl.string(l.t.cXgKMD)
                }),
                (0, t.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    }),
    (a.Error = (e) => {
        let { error: r, onDismiss: n } = e;
        return null == r
            ? null
            : (0, t.jsx)(s.kzN, {
                  className: c.error,
                  onDismiss: n,
                  children: r
              });
    });
let d = a;
