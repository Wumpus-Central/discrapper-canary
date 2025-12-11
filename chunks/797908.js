n.d(t, { Z: () => m }), n(388685), n(953529);
var a = n(54381),
    r = n(473749),
    i = n(622535),
    l = n(481060),
    s = n(783097),
    o = n(66637),
    c = n(768581),
    d = n(956965),
    u = n(388032),
    p = n(219279);
let m = function (e) {
    var t, n, m;
    let { application: h, onSelectApplication: f, showCategory: g = !1 } = e,
        b = r.useRef(null),
        x = null == (t = h.categories) ? void 0 : t[0],
        [v, C] = r.useState(!1),
        j = r.useCallback((e) => {
            e && C(!0);
        }, []),
        _ = (0, s.lf)(h),
        y = r.useCallback(() => {
            f(h.id);
        }, [f, h.id]),
        I = r.useMemo(
            () =>
                v
                    ? c.ZP.getApplicationIconURL({
                          id: h.id,
                          icon: h.icon,
                          size: 48,
                      })
                    : void 0,
            [v, h],
        ),
        S = g && null != x;
    return (0, a.jsx)(i.$, {
        innerRef: b,
        onChange: j,
        active: !v,
        children: (0, a.jsx)("div", {
            ref: b,
            className: p.container,
            children: (0, a.jsxs)(o.Z, {
                className: p.card,
                onClick: y,
                onContextMenu: () => {},
                "aria-label": u.intl.string(u.t.np1Wru),
                children: [
                    (0, a.jsxs)("div", {
                        className: p.header,
                        children: [
                            (0, a.jsx)("div", {
                                style: {
                                    width: "100%",
                                    display: "block",
                                    aspectRatio: 16 / 9,
                                },
                                children: v
                                    ? (0, a.jsx)(d.Z, {
                                          application: h,
                                          bannerType: "card",
                                          iconURL: I,
                                      })
                                    : null,
                            }),
                            (0, a.jsx)("div", {
                                className: p.avatarContainer,
                                style: { height: 28 },
                                children: v
                                    ? (0, a.jsx)("img", {
                                          src: I,
                                          alt: "",
                                          className: p.avatar,
                                          height: 48,
                                          width: 48,
                                          style: {
                                              borderWidth: 4,
                                              marginLeft: 12,
                                          },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: p.appDetails,
                        children: [
                            (0, a.jsx)("div", {
                                className: p.titleContainer,
                                children: (0, a.jsx)("div", {
                                    className: p.title,
                                    children: (0, a.jsx)(l.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: p.appName,
                                        children: h.name,
                                    }),
                                }),
                            }),
                            S || _
                                ? (0, a.jsxs)("div", {
                                      className: p.infoContainer,
                                      children: [
                                          S
                                              ? (0, a.jsx)(l.Text, {
                                                    className: p.appCategory,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: x.name,
                                                })
                                              : null,
                                          S && _
                                              ? (0, a.jsx)(l.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "\u2022",
                                                })
                                              : null,
                                          _
                                              ? (0, a.jsx)(l.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: u.intl.string(u.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, a.jsx)(l.Text, {
                                className: p.description,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: S || _ ? 2 : 3,
                                children:
                                    null != (m = null == (n = h.directory_entry) ? void 0 : n.short_description)
                                        ? m
                                        : h.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
