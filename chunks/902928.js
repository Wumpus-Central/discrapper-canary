n.d(t, { u: () => f });
var r = n(54381),
    a = n(473749),
    i = n(159277),
    o = n(481060),
    s = n(713938),
    l = n(388032),
    c = n(763093),
    d = n(942605),
    u = n(534345);
let f = (e) => {
    let { onComplete: t, data: n } = e,
        f = (0, a.useId)(),
        p = null,
        h = null,
        x = n.scopes.some((e) => (0, s.sg)(e));
    return (
        n.clientId === i.t.PLAYSTATION_APPLICATION_ID || n.clientId === i.t.PLAYSTATION_STAGING_APPLICATION_ID
            ? (p = d.Z)
            : x && (p = u.Z),
        null != n.twoWayLinkCode ? (h = l.intl.string(l.t.QhATl2)) : x && (h = l.intl.string(l.t.vBPvK3)),
        (0, r.jsxs)("div", {
            className: c.content,
            children: [
                null != p
                    ? (0, r.jsx)("img", {
                          src: p,
                          className: c.artwork,
                          alt: "",
                          "aria-labelledby": f,
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: c.innerContent,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: "heading-xl/extrabold",
                            id: f,
                            children: l.intl.string(l.t.qDtJmD),
                        }),
                        null != h
                            ? (0, r.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: h,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: c.footerButton,
                    children: (0, r.jsx)(o.Button, {
                        variant: "primary",
                        text: l.intl.string(l.t.i4jeWR),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
};
