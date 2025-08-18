n.d(t, { u: () => f });
var a = n(951288),
    r = n(647438),
    o = n(159277),
    i = n(481060),
    l = n(713938),
    s = n(388032),
    c = n(359059),
    d = n(942605),
    u = n(534345);
let f = (e) => {
    let { onComplete: t, data: n } = e,
        f = (0, r.useId)(),
        h = null,
        p = null,
        x = n.scopes.some((e) => (0, l.sg)(e));
    return (
        n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID
            ? (h = d.Z)
            : x && (h = u.Z),
        null != n.twoWayLinkCode ? (p = s.intl.string(s.t.QhATl5)) : x && (p = s.intl.string(s.t.vBPvKy)),
        (0, a.jsxs)("div", {
            className: c.content,
            children: [
                null != h
                    ? (0, a.jsx)("img", {
                          src: h,
                          className: c.artwork,
                          alt: "",
                          "aria-labelledby": f,
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: c.innerContent,
                    children: [
                        (0, a.jsx)(i.X6q, {
                            variant: "heading-xl/extrabold",
                            id: f,
                            children: s.intl.string(s.t.qDtJmJ),
                        }),
                        null != p
                            ? (0, a.jsx)(i.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  children: p,
                              })
                            : null,
                    ],
                }),
                (0, a.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: c.footerButton,
                    children: (0, a.jsx)(i.zxk, {
                        variant: "primary",
                        text: s.intl.string(s.t.i4jeWV),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
};
