s.d(t, { default: () => L }), s(321073);
var i = s(627968),
    a = s(64700),
    l = s(189213),
    r = s(772707),
    n = s(17928),
    c = s(292666),
    d = s(821609),
    u = s(718213),
    o = s(964486),
    m = s(780964),
    f = s(858897),
    _ = s(954571),
    h = s(427262),
    x = s(794783),
    p = s(751877),
    b = s(233317),
    g = s(503698),
    v = s.n(g),
    N = s(778712),
    S = s(97808),
    j = s(534514),
    k = s(834730),
    C = s(534890),
    I = s(308528),
    E = s(854627),
    M = s(779733),
    y = s(466919),
    A = s(985018),
    P = s(372829);
let R = (e) => {
    let { recipient: t, isSuccess: s, onClose: a } = e,
        { avatarSrc: l, eventHandlers: r } = (0, E.A)({ userId: t?.id, size: N._3.SIZE_56 }),
        n = h.Ay.getName(t),
        c = !s;
    return (0, i.jsxs)("div", {
        className: v()(P.nM, { [P.z3]: c }),
        children: [
            (0, i.jsx)(S.eu, { src: l, "aria-label": n, size: N._3.SIZE_32, ...r }),
            (0, i.jsxs)("div", {
                className: P.Qs,
                children: [
                    (0, i.jsx)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: P.QC,
                        children: n,
                    }),
                    c &&
                        (0, i.jsx)(k.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: P.kc,
                            children: A.intl.format(y.default["Y/oMwY"], { userName: n }),
                        }),
                ],
            }),
            s &&
                (0, i.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    text: A.intl.string(A.t["g33r/P"]),
                    icon: C.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, M.default)(), I.A.openPrivateChannel({ recipientIds: e }), a());
                    },
                }),
        ],
    });
};
var U = s(88001),
    T = s(652215),
    w = s(807735);
let D = (e) => {
        let { onInvite: t, onClose: s, subscriptionId: r, ...o } = e,
            [m, f] = a.useState([]),
            [g, v] = a.useState(""),
            N = (0, u.A)(g, 400),
            S = (0, n.bG)([b.A], () => b.A.getNumAvailableInvites()),
            {
                eligibleUsers: j,
                getNextRows: k,
                hasError: C,
                isFetching: I,
            } = ((e) => {
                let { subscriptionId: t, searchQuery: s } = e,
                    [i, l] = a.useState([]),
                    [r, n] = a.useState(0),
                    [c, d] = a.useState(!1),
                    [u, o] = a.useState(!1),
                    m = async (e) => {
                        if (!c && null != e)
                            try {
                                d(!0), o(!1);
                                let i = await (0, p.EQ)(t, e, s);
                                l((t) => (0 === e ? i.users : [...t, ...i.users])), n(i.nextIndex);
                            } catch (e) {
                                o(!0);
                            } finally {
                                d(!1);
                            }
                    };
                return (
                    (0, a.useEffect)(() => {
                        n(0), m(0);
                    }, [t, s]),
                    { eligibleUsers: i, isFetching: c, hasError: u, getNextRows: () => m(r) }
                );
            })({ subscriptionId: r, searchQuery: N }),
            [E, M] = a.useState(!1),
            P = a.useCallback(
                (e) => {
                    f((t) => t.filter((t) => !e.has(t.id)));
                },
                [f],
            ),
            R = a.useMemo(() => m.map((e) => ({ id: e.id, label: h.Ay.getName(e) })), [m]);
        return C
            ? (0, i.jsx)(l.Modal, {
                  size: "sm",
                  title: A.intl.string(y.default["54lM5y"]),
                  subtitle: A.intl.string(y.default.zrtwpV),
                  onClose: s,
                  actions: [],
                  ...o,
              })
            : 0 !== j.length || I || 0 !== N.length
              ? (0, i.jsx)(l.Modal, {
                    size: "md",
                    title: A.intl.string(y.default["Um/7BM"]),
                    subtitle: A.intl.format(y.default.qSWXaf, {
                        totalSeats: U.LM,
                        premiumGroupProductName: (0, U.DP)(),
                        helpCenterLink: U.TE,
                    }),
                    onClose: s,
                    input: (0, i.jsx)("div", {
                        className: w.c,
                        children: (0, i.jsx)(c.k, {
                            value: g,
                            onChange: v,
                            placeholder: 0 === m.length ? A.intl.string(y.default.wRS8vo) : "",
                            leading: { type: "tags", label: A.intl.string(y.default["Um/7BM"]), items: R, onRemove: P },
                        }),
                    }),
                    actions: [],
                    actionBarInput: (0, i.jsx)(d.$, {
                        variant: "primary",
                        disabled: 0 === m.length || E,
                        text: A.intl.string(y.default["5fZHp3"]),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            _.default.track(T.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                invited_user_ids: m.map((e) => e.id),
                            }),
                                M(!0),
                                await t(m),
                                M(!1);
                        },
                    }),
                    ...o,
                    children: (0, i.jsx)(x.A, {
                        users: j,
                        isUserSelected: (e) => m.some((t) => t.id === e.id),
                        onSelectionChange: (e, t) => {
                            f((s) => (t ? [...s, e] : s.filter((t) => t.id !== e.id))), t && v("");
                        },
                        isUserDisabled: (e) => (m.length >= S && !m.some((t) => t.id === e.id)) || !e.eligible,
                        isFetching: I,
                        onFetchMore: k,
                        searchQuery: N,
                        emptySearchContent: {
                            header: A.intl.string(y.default.gaamNe),
                            body: A.intl.string(y.default.nQcM39),
                        },
                        className: w.p_,
                        tooltipConfig: {
                            text: (e) =>
                                A.intl.formatToPlainString(y.default["5tzM9V"], {
                                    disabledUserName: h.Ay.getName(e),
                                    premiumGroupProductName: (0, U.DP)(),
                                }),
                            isActive: (e, t) => !!(t && !e.eligible),
                        },
                    }),
                })
              : (0, i.jsx)(l.Modal, {
                    size: "sm",
                    title: A.intl.string(y.default.ONaJLH),
                    subtitle: A.intl.format(y.default["0LHbPc"], { helpCenterLink: U.TE }),
                    onClose: s,
                    actions: [],
                    ...o,
                });
    },
    z = (e) => {
        let { onClose: t, inviteUsersResult: s, ...a } = e;
        return (0, i.jsx)(r.k, {
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/824b13be7b78cc0e651ea50dbb8e459044a59c44a6c15678761d9ef2739c7fc8.png",
            },
            gradientColor: "nitro-pink",
            title: A.intl.formatToPlainString(y.default.MIiPur, {
                premiumGroupProductName: (0, U.DP)(),
                sentCount: s.filter((e) => e.isSuccess).length,
            }),
            subtitle: A.intl.format(y.default.olkQkj, {
                onClick: () => {
                    t(), (0, f.openUserSettings)(m.X.SUBSCRIPTIONS_PANEL);
                },
            }),
            onClose: t,
            ...a,
            children: (0, i.jsx)("div", {
                className: w.yk,
                children: s.map((e) =>
                    (0, i.jsx)(R, { recipient: e.user, isSuccess: e.isSuccess, onClose: t }, e.user.id),
                ),
            }),
        });
    },
    L = (e) => {
        let { subscription: t, isFromPurchaseFlow: s = !1, ...l } = e,
            [r, n] = a.useState([]);
        (0, o.Ay)(() => {
            _.default.track(T.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card",
            });
        });
        let [c, d] = a.useState(1),
            u = async (e) => {
                let s = new Map(),
                    i = [];
                for (let t of e) s.set(t.id, t), i.push(t.id);
                let a = await (0, p.n2)(t.id, i);
                if (null == a) {
                    _.default.track(T.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: i,
                    }),
                        n(e.map((e) => ({ user: e, isSuccess: !1 }))),
                        d(2);
                    return;
                }
                let { invitedUsers: l, ineligibleUsers: r } = a;
                _.default.track(T.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: l,
                    failed_user_ids: r,
                }),
                    n([
                        ...l.map((e) => ({ user: s.get(e), isSuccess: !0 })),
                        ...r.map((e) => ({ user: s.get(e), isSuccess: !1 })),
                    ]),
                    d(2);
            };
        return 1 === c
            ? (0, i.jsx)(D, { ...l, onInvite: u, subscriptionId: t.id })
            : 2 === c
              ? (0, i.jsx)(z, { ...l, inviteUsersResult: r })
              : void 0;
    };
