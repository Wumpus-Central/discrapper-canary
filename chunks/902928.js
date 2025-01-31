n.d(t, { u: () => f });
var a = n(200651),
    r = n(192379),
    o = n(159277),
    i = n(243814),
    l = n(481060),
    s = n(388032),
    c = n(577125),
    d = n(942605),
    u = n(534345);
let f = (e) => {
    let { onComplete: t, data: n } = e,
        f = (0, r.useId)(),
        h = null,
        x = null;
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? (h = d.Z) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (h = u.Z),
        null != n.twoWayLinkCode ? (x = s.intl.string(s.t.QhATl5)) : n.scopes.includes(i.x.SDK_SOCIAL_LAYER) && (x = s.intl.string(s.t.vBPvKy)),
        (0, a.jsxs)('div', {
            className: c.content,
            children: [
                null != h
                    ? (0, a.jsx)('img', {
                          src: h,
                          className: c.artwork,
                          alt: '',
                          'aria-labelledby': f
                      })
                    : null,
                (0, a.jsxs)('div', {
                    className: c.innerContent,
                    children: [
                        (0, a.jsx)(l.X6q, {
                            variant: 'heading-xl/extrabold',
                            id: f,
                            children: s.intl.string(s.t.qDtJmJ)
                        }),
                        null != x
                            ? (0, a.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  children: x
                              })
                            : null
                    ]
                }),
                (0, a.jsx)(l.zxk, {
                    className: c.footerButton,
                    color: l.zxk.Colors.BRAND,
                    onClick: t,
                    children: s.intl.string(s.t.i4jeWV)
                })
            ]
        })
    );
};
