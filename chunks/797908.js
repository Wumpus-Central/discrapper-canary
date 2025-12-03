n.d(t, { Z: () => m }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(622535),
    l = n(481060),
    s = n(783097),
    o = n(66637),
    c = n(768581),
    d = n(956965),
    u = n(388032),
    p = n(401346);
let m = function (e) {
    var t, n, m;
    let { application: h, onSelectApplication: g, showCategory: f = !1 } = e,
        _ = i.useRef(null),
        b = null == (t = h.categories) ? void 0 : t[0],
        [x, v] = i.useState(!1),
        C = i.useCallback((e) => {
            e && v(!0);
        }, []),
        j = (0, s.lf)(h),
        y = i.useCallback(() => {
            g(h.id);
        }, [g, h.id]),
        I = i.useMemo(
            () =>
                x
                    ? c.ZP.getApplicationIconURL({
                          id: h.id,
                          icon: h.icon,
                          size: 48,
                      })
                    : void 0,
            [x, h],
        ),
        S = f && null != b;
    return (0, r.jsx)(a.$, {
        innerRef: _,
        onChange: C,
        active: !x,
        children: (0, r.jsx)("div", {
            ref: _,
            className: p.container,
            children: (0, r.jsxs)(o.Z, {
                className: p.card,
                onClick: y,
                onContextMenu: () => {},
                "aria-label": u.intl.string(u.t.np1Wru),
                children: [
                    (0, r.jsxs)("div", {
                        className: p.header,
                        children: [
                            (0, r.jsx)("div", {
                                style: {
                                    width: "100%",
                                    display: "block",
                                    aspectRatio: 16 / 9,
                                },
                                children: x
                                    ? (0, r.jsx)(d.Z, {
                                          application: h,
                                          bannerType: "card",
                                          iconURL: I,
                                      })
                                    : null,
                            }),
                            (0, r.jsx)("div", {
                                className: p.avatarContainer,
                                style: { height: 28 },
                                children: x
                                    ? (0, r.jsx)("img", {
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
                    (0, r.jsxs)("div", {
                        className: p.appDetails,
                        children: [
                            (0, r.jsx)("div", {
                                className: p.titleContainer,
                                children: (0, r.jsx)("div", {
                                    className: p.title,
                                    children: (0, r.jsx)(l.Heading, {
                                        variant: "heading-md/semibold",
                                        color: "header-primary",
                                        className: p.appName,
                                        children: h.name,
                                    }),
                                }),
                            }),
                            S || j
                                ? (0, r.jsxs)("div", {
                                      className: p.infoContainer,
                                      children: [
                                          S
                                              ? (0, r.jsx)(l.Text, {
                                                    className: p.appCategory,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: b.name,
                                                })
                                              : null,
                                          S && j
                                              ? (0, r.jsx)(l.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "\u2022",
                                                })
                                              : null,
                                          j
                                              ? (0, r.jsx)(l.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: u.intl.string(u.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, r.jsx)(l.Text, {
                                className: p.description,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: S || j ? 2 : 3,
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
