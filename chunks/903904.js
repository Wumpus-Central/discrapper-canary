n.d(t, { ZP: () => b }), n(953529);
var r = n(54381);
n(473749);
var i = n(813820),
    a = n(481060),
    o = n(51144),
    s = n(591085),
    l = n(546090),
    c = n(366733),
    u = n(516475),
    d = n(282793),
    f = n(441677),
    p = n(388032),
    _ = n(17845);
let m = () =>
        (0, r.jsxs)(a.Kqy, {
            direction: "horizontal",
            gap: 10,
            padding: {
                top: 12,
                bottom: 12,
            },
            className: _.header,
            children: [
                (0, r.jsx)(u.Z, {
                    width: 85,
                    height: 16,
                    className: _.premiumGroupIcon,
                }),
                (0, r.jsx)(a.Cts, {
                    type: "beta",
                    variant: "expressive",
                }),
            ],
        }),
    h = (e) => {
        let { title: t, description: n, buttonText: i, onClick: o } = e;
        return (0, r.jsxs)("div", {
            className: _.descriptionAndButtonContainer,
            children: [
                (0, r.jsxs)(a.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: [
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(a.Button, {
                    variant: "secondary",
                    text: i,
                    onClick: o,
                }),
            ],
        });
    },
    g = (e) => {
        let { currentUser: t, premiumGroupPrimaryUser: n, premiumGroupMembers: i, onLeavePlan: s } = e;
        return (0, r.jsxs)(a.$1m, {
            className: _.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(m, {}),
                (0, r.jsxs)("div", {
                    className: _.contentGrid,
                    children: [
                        (0, r.jsx)(h, {
                            title: p.intl.string(f.default["fWbI1+"]),
                            description: p.intl.format(f.default.tjpGQG, { primaryUserName: (0, o.XM)(n) }),
                            buttonText: p.intl.string(f.default.XF1dDX),
                            onClick: s,
                        }),
                        (0, r.jsxs)(a.Kqy, {
                            direction: "vertical",
                            padding: {
                                left: 32,
                                bottom: 12,
                            },
                            children: [
                                (0, r.jsx)(a.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: _.usersListHeader,
                                    children: p.intl.string(f.default["oqw/KW"]),
                                }),
                                (0, r.jsx)(c.Vl, {
                                    user: n,
                                    isOwnUser: !1,
                                }),
                                i.map((e) =>
                                    (0, r.jsx)(
                                        c.kg,
                                        {
                                            user: e,
                                            isOwnUser: e.id === (null == t ? void 0 : t.id),
                                        },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    E = (e) => {
        let {
                premiumGroupPrimaryUser: t,
                premiumGroupMembers: n,
                premiumGroupInvitedUsers: i,
                onCancelSubscription: o,
                onRemoveMember: s,
                onInvite: u,
                onRemoveInvitedUser: g,
            } = e,
            E = d.v$,
            b = n.length,
            y = Math.max(0, E - b - i.length);
        return (0, r.jsxs)(a.$1m, {
            className: _.container,
            color: "nitro-pink",
            children: [
                (0, r.jsx)(m, {}),
                (0, r.jsxs)("div", {
                    className: _.contentGrid,
                    children: [
                        (0, r.jsx)(h, {
                            title: p.intl.string(f.default["fWbI1+"]),
                            description: p.intl.format(f.default.LANYBF, { totalSeats: E }),
                            buttonText: p.intl.string(f.default["3QwQKb"]),
                            onClick: o,
                        }),
                        (0, r.jsxs)(a.Kqy, {
                            direction: "vertical",
                            padding: {
                                left: 32,
                                bottom: 12,
                            },
                            children: [
                                (0, r.jsxs)(a.Kqy, {
                                    direction: "vertical",
                                    gap: 4,
                                    padding: {
                                        top: 12,
                                        left: 4,
                                        right: 4,
                                    },
                                    children: [
                                        (0, r.jsxs)(a.Kqy, {
                                            direction: "horizontal",
                                            justify: "space-between",
                                            align: "center",
                                            gap: 4,
                                            children: [
                                                (0, r.jsx)(a.Heading, {
                                                    variant: "heading-sm/medium",
                                                    color: "text-strong",
                                                    children: p.intl.string(f.default["oqw/KW"]),
                                                }),
                                                (0, r.jsx)(l.Z, { onInvite: u }),
                                            ],
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: p.intl.format(f.default["/a/UoP"], {
                                                usedSeats: b,
                                                totalSeats: E,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.Vl, {
                                    user: t,
                                    isOwnUser: !0,
                                }),
                                n.map((e) =>
                                    (0, r.jsx)(
                                        c.UA,
                                        {
                                            user: e,
                                            onRemove: () => s(e),
                                        },
                                        e.id,
                                    ),
                                ),
                                i.map((e) =>
                                    (0, r.jsx)(
                                        c.gk,
                                        {
                                            user: e,
                                            onRemove: () => g(e),
                                        },
                                        e.id,
                                    ),
                                ),
                                Array.from({ length: y }).map((e, t) =>
                                    (0, r.jsx)(c.QU, { onInvite: u }, "seat-available-".concat(t)),
                                ),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    b = (e) => {
        let { currentUser: t } = e,
            { premiumGroupMembers: n, isLoading: o } = (0, s.Z)();
        if (o) return (0, r.jsx)(a.$jN, {});
        if (null == n) return null;
        let { primary: l, members: c, invitedUsers: u } = n;
        return t.premiumGroupRole === i.bF.PRIMARY
            ? (0, r.jsx)(E, {
                  currentUser: t,
                  premiumGroupPrimaryUser: l,
                  premiumGroupMembers: c,
                  premiumGroupInvitedUsers: u,
                  onCancelSubscription: () => {},
                  onRemoveMember: () => {},
                  onInvite: () => {},
                  onRemoveInvitedUser: () => {},
              })
            : (0, r.jsx)(g, {
                  currentUser: t,
                  premiumGroupPrimaryUser: l,
                  premiumGroupMembers: c,
                  onLeavePlan: () => {},
              });
    };
