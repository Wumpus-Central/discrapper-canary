s.d(t, { default: () => L }), s(321073);
var i = s(627968),
    a = s(64700),
    l = s(189213),
    r = s(772707),
    n = s(17928),
    u = s(292666),
    d = s(821609),
    c = s(718213),
    o = s(964486),
    m = s(780964),
    f = s(766075),
    p = s(174459),
    g = s(427262),
    h = s(794783),
    _ = s(751877),
    S = s(233317),
    I = s(503698),
    N = s.n(I),
    x = s(778712),
    b = s(97808),
    E = s(534514),
    C = s(834730),
    M = s(534890),
    v = s(308528),
    P = s(854627),
    k = s(830543),
    j = s(466919),
    y = s(375708),
    A = s(372829);
let R = (e) => {
    let { recipient: t, isSuccess: s, onClose: a } = e,
        { avatarSrc: l, eventHandlers: r } = (0, P.A)({ userId: t?.id, size: x._3.SIZE_56 }),
        n = g.Ay.getName(t),
        u = !s;
    return (0, i.jsxs)("div", {
        className: N()(A.nM, { [A.z3]: u }),
        children: [
            (0, i.jsx)(b.eu, { src: l, "aria-label": n, size: x._3.SIZE_32, ...r }),
            (0, i.jsxs)("div", {
                className: A.Qs,
                children: [
                    (0, i.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: A.QC,
                        children: n,
                    }),
                    u &&
                        (0, i.jsx)(C.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: A.kc,
                            children: y.intl.format(j.default["Y/oMwY"], { userName: n }),
                        }),
                ],
            }),
            s &&
                (0, i.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    text: y.intl.string(y.t["g33r/P"]),
                    icon: M.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, k.default)(), v.A.openPrivateChannel({ recipientIds: e }), a());
                    },
                }),
        ],
    });
};
var U = s(88001),
    w = s(652215),
    D = s(807735);
let T = (e) => {
        let { onInvite: t, onClose: s, subscriptionId: r, ...o } = e,
            [m, f] = a.useState([]),
            [I, N] = a.useState(""),
            x = (0, c.A)(I, 400),
            b = (0, n.bG)([S.A], () => S.A.getNumAvailableInvites()),
            {
                eligibleUsers: E,
                getNextRows: C,
                hasError: M,
                isFetching: v,
            } = ((e) => {
                let { subscriptionId: t, searchQuery: s } = e,
                    [i, l] = a.useState([]),
                    [r, n] = a.useState(0),
                    [u, d] = a.useState(!1),
                    [c, o] = a.useState(!1),
                    m = async (e) => {
                        if (!u && null != e)
                            try {
                                d(!0), o(!1);
                                let i = await (0, _.EQ)(t, e, s);
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
                    { eligibleUsers: i, isFetching: u, hasError: c, getNextRows: () => m(r) }
                );
            })({ subscriptionId: r, searchQuery: x }),
            [P, k] = a.useState(!1),
            A = a.useCallback(
                (e) => {
                    f((t) => t.filter((t) => !e.has(t.id)));
                },
                [f],
            ),
            R = a.useMemo(() => m.map((e) => ({ id: e.id, label: g.Ay.getName(e) })), [m]);
        return M
            ? (0, i.jsx)(l.Modal, {
                  size: "sm",
                  title: y.intl.string(j.default["54lM5y"]),
                  subtitle: y.intl.string(j.default.zrtwpV),
                  onClose: s,
                  actions: [],
                  ...o,
              })
            : 0 !== E.length || v || 0 !== x.length
              ? (0, i.jsx)(l.Modal, {
                    size: "md",
                    title: y.intl.string(j.default["Um/7BM"]),
                    subtitle: y.intl.format(j.default.qSWXaf, {
                        totalSeats: U.LM,
                        premiumGroupProductName: (0, U.DP)(),
                        helpCenterLink: U.TE,
                    }),
                    onClose: s,
                    input: (0, i.jsx)("div", {
                        className: D.c,
                        children: (0, i.jsx)(u.k, {
                            value: I,
                            onChange: N,
                            placeholder: 0 === m.length ? y.intl.string(j.default.wRS8vo) : "",
                            leading: { type: "tags", label: y.intl.string(j.default["Um/7BM"]), items: R, onRemove: A },
                        }),
                    }),
                    actions: [],
                    actionBarInput: (0, i.jsx)(d.$, {
                        variant: "primary",
                        disabled: 0 === m.length || P,
                        text: y.intl.string(j.default["5fZHp3"]),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            p.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                invited_user_ids: m.map((e) => e.id),
                            }),
                                k(!0),
                                await t(m),
                                k(!1);
                        },
                    }),
                    ...o,
                    children: (0, i.jsx)(h.A, {
                        users: E,
                        isUserSelected: (e) => m.some((t) => t.id === e.id),
                        onSelectionChange: (e, t) => {
                            f((s) => (t ? [...s, e] : s.filter((t) => t.id !== e.id))), t && N("");
                        },
                        isUserDisabled: (e) => (m.length >= b && !m.some((t) => t.id === e.id)) || !e.eligible,
                        isFetching: v,
                        onFetchMore: C,
                        searchQuery: x,
                        emptySearchContent: {
                            header: y.intl.string(j.default.gaamNe),
                            body: y.intl.string(j.default.nQcM39),
                        },
                        className: D.p_,
                        tooltipConfig: {
                            text: (e) =>
                                y.intl.formatToPlainString(j.default["5tzM9V"], {
                                    disabledUserName: g.Ay.getName(e),
                                    premiumGroupProductName: (0, U.DP)(),
                                }),
                            isActive: (e, t) => !!(t && !e.eligible),
                        },
                    }),
                })
              : (0, i.jsx)(l.Modal, {
                    size: "sm",
                    title: y.intl.string(j.default.ONaJLH),
                    subtitle: y.intl.format(j.default["0LHbPc"], { helpCenterLink: U.TE }),
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
            title: y.intl.formatToPlainString(j.default.MIiPur, {
                premiumGroupProductName: (0, U.DP)(),
                sentCount: s.filter((e) => e.isSuccess).length,
            }),
            subtitle: y.intl.format(j.default.olkQkj, {
                onClick: () => {
                    t(), (0, f.openUserSettings)(m.X.SUBSCRIPTIONS_PANEL);
                },
            }),
            onClose: t,
            ...a,
            children: (0, i.jsx)("div", {
                className: D.yk,
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
            p.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card",
            });
        });
        let [u, d] = a.useState(1),
            c = async (e) => {
                let s = new Map(),
                    i = [];
                for (let t of e) s.set(t.id, t), i.push(t.id);
                let a = await (0, _.n2)(t.id, i);
                if (null == a) {
                    p.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: i,
                    }),
                        n(e.map((e) => ({ user: e, isSuccess: !1 }))),
                        d(2);
                    return;
                }
                let { invitedUsers: l, ineligibleUsers: r } = a;
                p.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: l,
                    failed_user_ids: r,
                }),
                    n([
                        ...l.map((e) => ({ user: s.get(e), isSuccess: !0 })),
                        ...r.map((e) => ({ user: s.get(e), isSuccess: !1 })),
                    ]),
                    d(2);
            };
        return 1 === u
            ? (0, i.jsx)(T, { ...l, onInvite: c, subscriptionId: t.id })
            : 2 === u
              ? (0, i.jsx)(z, { ...l, inviteUsersResult: r })
              : void 0;
    };
