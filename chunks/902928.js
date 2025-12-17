n.d(t, { u: () => f });
var a = n(54381),
    r = n(473749),
    o = n(159277),
    i = n(481060),
    s = n(713938),
    c = n(388032),
    l = n(406096),
    d = n(140606),
    u = n(833600);
let f = (e) => {
    let { onComplete: t, data: n } = e,
        f = (0, r.useId)(),
        p = null,
        h = null,
        x = n.scopes.some((e) => (0, s.sg)(e));
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID
            ? (p = d.Z)
            : x && (p = u.Z),
        null != n.twoWayLinkCode ? (h = c.intl.string(c.t.QhATl2)) : x && (h = c.intl.string(c.t.vBPvK3)),
        (0, a.jsxs)("div", {
            className: l.content,
            children: [
                null != p
                    ? (0, a.jsx)("img", {
                          src: p,
                          className: l.artwork,
                          alt: "",
                          "aria-labelledby": f,
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: l.innerContent,
                    children: [
                        (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/extrabold",
                            id: f,
                            children: c.intl.string(c.t.qDtJmD),
                        }),
                        null != h
                            ? (0, a.jsx)(i.Text, {
                                  variant: "text-md/normal",
                                  color: "text-default",
                                  children: h,
                              })
                            : null,
                    ],
                }),
                (0, a.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: l.footerButton,
                    children: (0, a.jsx)(i.Button, {
                        variant: "primary",
                        text: c.intl.string(c.t.i4jeWR),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
};
