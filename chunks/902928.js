n.d(t, { u: () => f });
var r = n(200651),
    a = n(192379),
    o = n(159277),
    l = n(243814),
    i = n(481060),
    s = n(388032),
    c = n(770784),
    d = n(942605),
    u = n(534345);
let f = (e) => {
    let { onComplete: t, data: n } = e,
        f = (0, a.useId)(),
        p = null,
        h = null;
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID ? (p = d.Z) : n.scopes.includes(l.x.SDK_SOCIAL_LAYER) && (p = u.Z),
        null != n.twoWayLinkCode ? (h = s.NW.string(s.t.QhATl5)) : n.scopes.includes(l.x.SDK_SOCIAL_LAYER) && (h = s.NW.string(s.t.vBPvKy)),
        (0, r.jsxs)('div', {
            className: c.content,
            children: [
                null != p
                    ? (0, r.jsx)('img', {
                          src: p,
                          className: c.artwork,
                          alt: '',
                          'aria-labelledby': f
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: c.innerContent,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/extrabold',
                            id: f,
                            children: s.NW.string(s.t.qDtJmJ)
                        }),
                        null != h
                            ? (0, r.jsx)(i.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  children: h
                              })
                            : null
                    ]
                }),
                (0, r.jsx)(i.zxk, {
                    className: c.footerButton,
                    color: i.zxk.Colors.BRAND,
                    onClick: t,
                    children: s.NW.string(s.t.i4jeWV)
                })
            ]
        })
    );
};
