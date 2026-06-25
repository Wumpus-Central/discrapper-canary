n.d(e, { A: () => f });
var i = n(627968),
    d = n(64700),
    l = n(17928),
    r = n(192308),
    a = n(477782),
    u = n(717398),
    o = n(327166),
    s = n(994500),
    c = n(287809),
    A = n(375708);
function f(t) {
    let {
            user: e,
            location: f = "ContextMenu",
            onFriendRequestSent: x,
            onFriendRemove: C,
            appContext: v,
            setLoading: g,
            addFriendLabel: h,
        } = t,
        { id: b, username: I, bot: m } = e,
        T = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.id === b, [b]),
        p = (0, o.D)(b, h),
        [y, E] = (0, l.yK)([s.A], () => [s.A.isFriend(b), s.A.isBlocked(b)], [b]),
        [_, D] = d.useState(!1);
    return m || T
        ? null
        : y
          ? (0, i.jsx)(a.Dr, {
                id: "remove-friend",
                label: A.intl.string(A.t.cvSt1J),
                action: function () {
                    (0, r.openModalLazy)(
                        async () => {
                            let { ConfirmModal: t } = await n.e("4823").then(n.bind(n, 158954));
                            return (e) =>
                                (0, i.jsx)(t, {
                                    title: A.intl.formatToPlainString(A.t.fPLvZd, { name: I }),
                                    subtitle: A.intl.format(A.t.l5FFq6, { name: I }),
                                    confirmText: A.intl.string(A.t.cvSt1J),
                                    cancelText: A.intl.string(A.t["ETE/oC"]),
                                    onConfirm: () => {
                                        u.A.removeFriend(b, { location: f }), D(!1), C?.();
                                    },
                                    ...e,
                                });
                        },
                        { contextKey: null != v ? (0, r.modalContextFromAppContext)(v) : void 0 },
                    );
                },
            })
          : (0, i.jsx)(a.Dr, {
                id: "add-friend",
                label: _ ? A.intl.string(A.t.xMH6vD) : p,
                action: async () => {
                    _ ||
                        (g?.(!0),
                        await u.A.addRelationship({ userId: b, context: { location: f } }),
                        D(!0),
                        x?.(),
                        g?.(!1));
                },
                disabled: E || (_ && !y),
            });
}
