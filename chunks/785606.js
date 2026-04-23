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
    f = s(858897),
    _ = s(954571),
    p = s(427262),
    g = s(794783),
    h = s(751877),
    S = s(233317),
    b = s(503698),
    x = s.n(b),
    I = s(778712),
    N = s(97808),
    C = s(534514),
    E = s(834730),
    M = s(534890),
    v = s(308528),
    k = s(854627),
    P = s(779733),
    y = s(466919),
    R = s(985018),
    j = s(372829);
let A = (e) => {
    let { recipient: t, isSuccess: s, onClose: a } = e,
        { avatarSrc: l, eventHandlers: r } = (0, k.A)({ userId: t?.id, size: I._3.SIZE_56 }),
        n = p.Ay.getName(t),
        u = !s;
    return (0, i.jsxs)("div", {
        className: x()(j.nM, { [j.z3]: u }),
        children: [
            (0, i.jsx)(N.eu, { src: l, "aria-label": n, size: I._3.SIZE_32, ...r }),
            (0, i.jsxs)("div", {
                className: j.Qs,
                children: [
                    (0, i.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: j.QC,
                        children: n,
                    }),
                    u &&
                        (0, i.jsx)(E.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: j.kc,
                            children: R.intl.format(y.default["Y/oMwY"], { userName: n }),
                        }),
                ],
            }),
            s &&
                (0, i.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    text: R.intl.string(R.t["g33r/P"]),
                    icon: M.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, P.default)(), v.A.openPrivateChannel({ recipientIds: e }), a());
                    },
                }),
        ],
    });
};
var U = s(88001),
    w = s(652215),
    T = s(807735);
let D = (e) => {
        let { onInvite: t, onClose: s, subscriptionId: r, ...o } = e,
            [m, f] = a.useState([]),
            [b, x] = a.useState(""),
            I = (0, c.A)(b, 400),
            N = (0, n.bG)([S.A], () => S.A.getNumAvailableInvites()),
            {
                eligibleUsers: C,
                getNextRows: E,
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
                                let i = await (0, h.EQ)(t, e, s);
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
            })({ subscriptionId: r, searchQuery: I }),
            [k, P] = a.useState(!1),
            j = a.useCallback(
                (e) => {
                    f((t) => t.filter((t) => !e.has(t.id)));
                },
                [f],
            ),
            A = a.useMemo(() => m.map((e) => ({ id: e.id, label: p.Ay.getName(e) })), [m]);
        return M
            ? (0, i.jsx)(l.Modal, {
                  size: "sm",
                  title: R.intl.string(y.default["54lM5y"]),
                  subtitle: R.intl.string(y.default.zrtwpV),
                  onClose: s,
                  actions: [],
                  ...o,
              })
            : 0 !== C.length || v || 0 !== I.length
              ? (0, i.jsx)(l.Modal, {
                    size: "md",
                    title: R.intl.string(y.default["Um/7BM"]),
                    subtitle: R.intl.format(y.default.qSWXaf, {
                        totalSeats: U.LM,
                        premiumGroupProductName: (0, U.DP)(),
                        helpCenterLink: U.TE,
                    }),
                    onClose: s,
                    input: (0, i.jsx)("div", {
                        className: T.c,
                        children: (0, i.jsx)(u.k, {
                            value: b,
                            onChange: x,
                            placeholder: 0 === m.length ? R.intl.string(y.default.wRS8vo) : "",
                            leading: { type: "tags", label: R.intl.string(y.default["Um/7BM"]), items: A, onRemove: j },
                        }),
                    }),
                    actions: [],
                    actionBarInput: (0, i.jsx)(d.$, {
                        variant: "primary",
                        disabled: 0 === m.length || k,
                        text: R.intl.string(y.default["5fZHp3"]),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            _.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                invited_user_ids: m.map((e) => e.id),
                            }),
                                P(!0),
                                await t(m),
                                P(!1);
                        },
                    }),
                    ...o,
                    children: (0, i.jsx)(g.A, {
                        users: C,
                        isUserSelected: (e) => m.some((t) => t.id === e.id),
                        onSelectionChange: (e, t) => {
                            f((s) => (t ? [...s, e] : s.filter((t) => t.id !== e.id))), t && x("");
                        },
                        isUserDisabled: (e) => (m.length >= N && !m.some((t) => t.id === e.id)) || !e.eligible,
                        isFetching: v,
                        onFetchMore: E,
                        searchQuery: I,
                        emptySearchContent: {
                            header: R.intl.string(y.default.gaamNe),
                            body: R.intl.string(y.default.nQcM39),
                        },
                        className: T.p_,
                        tooltipConfig: {
                            text: (e) =>
                                R.intl.formatToPlainString(y.default["5tzM9V"], {
                                    disabledUserName: p.Ay.getName(e),
                                    premiumGroupProductName: (0, U.DP)(),
                                }),
                            isActive: (e, t) => !!(t && !e.eligible),
                        },
                    }),
                })
              : (0, i.jsx)(l.Modal, {
                    size: "sm",
                    title: R.intl.string(y.default.ONaJLH),
                    subtitle: R.intl.format(y.default["0LHbPc"], { helpCenterLink: U.TE }),
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
            title: R.intl.formatToPlainString(y.default.MIiPur, {
                premiumGroupProductName: (0, U.DP)(),
                sentCount: s.filter((e) => e.isSuccess).length,
            }),
            subtitle: R.intl.format(y.default.olkQkj, {
                onClick: () => {
                    t(), (0, f.openUserSettings)(m.X.SUBSCRIPTIONS_PANEL);
                },
            }),
            onClose: t,
            ...a,
            children: (0, i.jsx)("div", {
                className: T.yk,
                children: s.map((e) =>
                    (0, i.jsx)(A, { recipient: e.user, isSuccess: e.isSuccess, onClose: t }, e.user.id),
                ),
            }),
        });
    },
    L = (e) => {
        let { subscription: t, isFromPurchaseFlow: s = !1, ...l } = e,
            [r, n] = a.useState([]);
        (0, o.Ay)(() => {
            _.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card",
            });
        });
        let [u, d] = a.useState(1),
            c = async (e) => {
                let s = new Map(),
                    i = [];
                for (let t of e) s.set(t.id, t), i.push(t.id);
                let a = await (0, h.n2)(t.id, i);
                if (null == a) {
                    _.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: i,
                    }),
                        n(e.map((e) => ({ user: e, isSuccess: !1 }))),
                        d(2);
                    return;
                }
                let { invitedUsers: l, ineligibleUsers: r } = a;
                _.default.track(w.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
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
            ? (0, i.jsx)(D, { ...l, onInvite: c, subscriptionId: t.id })
            : 2 === u
              ? (0, i.jsx)(z, { ...l, inviteUsersResult: r })
              : void 0;
    };
