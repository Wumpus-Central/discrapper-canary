n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(782568),
    l = n(388032),
    u = n(170780),
    c = n(746711);
let d = (e) => {
    let {
        data: { url: t, link_text: n, link_description: r, is_localized: l }
    } = e;
    if (!l) return null;
    let d = () => {
        (0, o.Z)(t);
    };
    return (0, i.jsxs)(s.P3F, {
        role: 'link',
        className: a()(c.linkButton, u.listElement),
        onClick: d,
        children: [
            (0, i.jsxs)('div', {
                className: c.linkTextContainer,
                children: [
                    (0, i.jsx)(s.Text, {
                        className: c.__invalid_linkText,
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != r &&
                        '' !== r &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: r
                        })
                ]
            }),
            (0, i.jsx)(s.Gr1, {
                size: 'sm',
                color: 'currentColor',
                className: c.linkIcon
            })
        ]
    });
};
function f(e) {
    let { elements: t } = e;
    if (
        null == t ||
        0 === t.length ||
        null ==
            t.find((e) => {
                let { data: t } = e;
                return t.is_localized;
            })
    )
        return null;
    let n = t.map((e, t) => {
            let { data: n } = e;
            return (0, i.jsx)(d, { data: n }, 'external-link+'.concat(t));
        }),
        r = t.some((e) => {
            let { data: t } = e;
            return t.is_header_hidden;
        });
    return (0, i.jsxs)('div', {
        className: a()(c.linksContainer, u.listElementWrapper),
        children: [
            !r &&
                (0, i.jsx)(s.X6q, {
                    variant: 'heading-sm/semibold',
                    color: 'header-secondary',
                    className: c.header,
                    children: l.intl.string(l.t.hvVgAQ)
                }),
            n
        ]
    });
}
