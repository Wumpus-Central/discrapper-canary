var i = n(477900),
    l = n(582128),
    d = n(855986),
    r = n(192308),
    a = n(477782),
    s = n(49229),
    u = n(327166),
    o = n(994500),
    c = n(287809),
    A = n(792996);
n.d(
    e,
    {},
    {
        A: function (t) {
            let {
                    user: e,
                    location: g = "ContextMenu",
                    onFriendRequestSent: f,
                    onFriendRemove: I,
                    appContext: h,
                    setLoading: v,
                    addFriendLabel: x,
                } = t,
                { id: C, username: b, bot: m } = e,
                T = (0, d.bG)([c.default], () => c.default.getCurrentUser()?.id === C, [C]),
                p = (0, u.D)(C, x),
                [E, N] = (0, d.yK)([o.A], () => [o.A.isFriend(C), o.A.isBlocked(C)], [C]),
                [y, D] = l.useState(!1);
            return m || T
                ? null
                : E
                  ? (0, i.jsx)(a.Dr, {
                        id: "remove-friend",
                        label: A.intl.string(A.t.cvSt1J),
                        action: function () {
                            (0, r.mM)(
                                async () => {
                                    let { ConfirmModal: t } = await Promise.all([
                                        n.e(454048),
                                        n.e(288688),
                                        n.e(304823),
                                        n.e(223976),
                                        n.e(977260),
                                    ]).then(n.bind(n, 397927));
                                    return (e) =>
                                        (0, i.jsx)(t, {
                                            title: A.intl.formatToPlainString(A.t.fPLvZd, { name: b }),
                                            subtitle: A.intl.format(A.t.l5FFq6, { name: b }),
                                            confirmText: A.intl.string(A.t.cvSt1J),
                                            cancelText: A.intl.string(A.t["ETE/oC"]),
                                            onConfirm: () => {
                                                (s.A.removeFriend(C, { location: g }), D(!1), I?.());
                                            },
                                            ...e,
                                        });
                                },
                                { contextKey: null != h ? (0, r.TI)(h) : void 0 },
                            );
                        },
                    })
                  : (0, i.jsx)(a.Dr, {
                        id: "add-friend",
                        label: y ? A.intl.string(A.t.xMH6vD) : p,
                        action: async () => {
                            y ||
                                (v?.(!0),
                                await s.A.addRelationship({ userId: C, context: { location: g } }),
                                D(!0),
                                f?.(),
                                v?.(!1));
                        },
                        disabled: N || (y && !E),
                    });
        },
    },
);
