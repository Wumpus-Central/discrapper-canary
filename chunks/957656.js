var n = t(200651);
t(192379);
var o = t(481060),
    s = t(198952),
    l = t(329242),
    i = t(388032),
    c = t(217682);
let a = (e) => {
    let { children: r, className: t, ...s } = e;
    return (0, n.jsx)(o.ModalRoot, {
        className: t,
        ...s,
        children: r
    });
};
(a.ButtonFooter = (e) => {
    let { children: r } = e;
    return (0, n.jsx)('div', {
        className: c.footer,
        children: r
    });
}),
    (a.Header = (e) => {
        let { icon: r, currentUser: t, otherUser: i, header: a } = e;
        return (0, n.jsxs)('div', {
            className: c.header,
            children: [
                (0, n.jsx)(s.Z, {
                    currentUser: t,
                    otherUser: i,
                    children: r
                }),
                (0, n.jsxs)('div', {
                    className: c.heading,
                    children: [
                        (0, n.jsx)(o.Heading, {
                            variant: 'text-lg/bold',
                            children: a
                        }),
                        (0, n.jsx)(l.Z, { user: i })
                    ]
                })
            ]
        });
    }),
    (a.Content = (e) => {
        let { children: r } = e;
        return (0, n.jsx)('div', {
            className: c.content,
            children: r
        });
    }),
    (a.Notice = (e) => {
        let { notice: r } = e;
        return (0, n.jsxs)('div', {
            className: c.notice,
            children: [
                (0, n.jsx)(o.Text, {
                    variant: 'eyebrow',
                    color: 'header-primary',
                    children: i.intl.string(i.t.cXgKMD)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: r
                })
            ]
        });
    }),
    (a.Error = (e) => {
        let { error: r, onDismiss: t } = e;
        return null == r
            ? null
            : (0, n.jsx)(o.FormErrorBlock, {
                  className: c.error,
                  onDismiss: t,
                  children: r
              });
    }),
    (r.Z = a);
