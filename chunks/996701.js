r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(782568),
    o = r(388032),
    l = r(746711);
let u = (e) => {
    let {
        data: { url: n, link_text: r, link_description: o, is_localized: u }
    } = e;
    if (!u) return null;
    let c = () => {
        (0, s.Z)(n);
    };
    return (0, i.jsxs)(a.Clickable, {
        role: 'link',
        className: l.linkButton,
        onClick: c,
        children: [
            (0, i.jsxs)('div', {
                className: l.linkTextContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        className: l.__invalid_linkText,
                        variant: 'text-md/semibold',
                        children: r
                    }),
                    null != o &&
                        '' !== o &&
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: o
                        })
                ]
            }),
            (0, i.jsx)(a.LinkExternalSmallIcon, {
                size: 'sm',
                color: 'currentColor',
                className: l.linkIcon
            })
        ]
    });
};
function c(e) {
    let { elements: n } = e;
    if (
        null == n ||
        0 === n.length ||
        null ==
            n.find((e) => {
                let { data: n } = e;
                return n.is_localized;
            })
    )
        return null;
    let r = n.map((e, n) => {
            let { data: r } = e;
            return (0, i.jsx)(u, { data: r }, 'external-link+'.concat(n));
        }),
        s = n.some((e) => {
            let { data: n } = e;
            return n.is_header_hidden;
        });
    return (0, i.jsxs)('div', {
        className: l.linksContainer,
        children: [
            !s &&
                (0, i.jsx)(a.Heading, {
                    variant: 'heading-sm/semibold',
                    color: 'header-secondary',
                    className: l.header,
                    children: o.intl.string(o.t.hvVgAQ)
                }),
            r
        ]
    });
}
