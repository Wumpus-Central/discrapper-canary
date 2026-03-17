a.d(t, { D: () => s });
var l = a(627968);
a(64700);
var r = a(720462),
    n = a(528226);
let o = () => (0, l.jsx)("div", { style: { height: 250, width: 250, background: "pink", borderRadius: 6 } }),
    s = {
        title: "Contained Hero",
        stories: [
            {
                name: "ContainedHero",
                id: "contained-hero",
                component: (e) => {
                    let {
                        containerHeight: t,
                        showChildren: a,
                        bannerSrc: s,
                        logoSrc: d,
                        href: i,
                        backgroundColor: c,
                    } = e;
                    return (0, l.jsx)("div", {
                        style: { height: a ? void 0 : t },
                        children: (0, l.jsx)(n.A, {
                            bannerSrc: { src: s },
                            logoSrc: { src: d },
                            href: i,
                            backgroundColor: c,
                            children: a
                                ? (0, l.jsxs)(r.A, {
                                      children: [
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                          (0, l.jsx)(o, {}),
                                      ],
                                  })
                                : null,
                        }),
                    });
                },
                controls: {
                    bannerSrc: {
                        label: "Banner Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                    },
                    logoSrc: {
                        label: "Logo Source",
                        type: "text",
                        defaultValue:
                            "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                    },
                    backgroundColor: { label: "Background Color", type: "text", defaultValue: "#171D55" },
                    href: { label: "Href", type: "text", defaultValue: "/shop?tab=catalog" },
                    containerHeight: { label: "Container Height", type: "number", defaultValue: 150 },
                    showChildren: { label: "Show Children", type: "boolean", defaultValue: !1 },
                },
            },
        ],
    };
