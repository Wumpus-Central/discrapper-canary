n.d(t, {
    u: function () {
        return f;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(159277),
    i = n(243814),
    l = n(481060),
    c = n(388032),
    s = n(577125),
    d = n(942605),
    u = n(534345);
let f = (e) => {
    let { onComplete: t, data: n } = e,
        f = (0, r.useId)(),
        h = null,
        p = null;
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? (h = d.Z) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (h = u.Z),
        null != n.twoWayLinkCode ? (p = c.intl.string(c.t.QhATl5)) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (p = c.intl.string(c.t.vBPvKy)),
        (0, a.jsxs)('div', {
            className: s.content,
            children: [
                null != h
                    ? (0, a.jsx)('img', {
                          src: h,
                          className: s.artwork,
                          alt: '',
                          'aria-labelledby': f
                      })
                    : null,
                (0, a.jsxs)('div', {
                    className: s.innerContent,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: 'heading-xl/extrabold',
                            id: f,
                            children: c.intl.string(c.t.qDtJmJ)
                        }),
                        null != p
                            ? (0, a.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  children: p
                              })
                            : null
                    ]
                }),
                (0, a.jsx)(l.Button, {
                    className: s.footerButton,
                    color: l.Button.Colors.BRAND,
                    onClick: t,
                    children: c.intl.string(c.t.i4jeWV)
                })
            ]
        })
    );
};
