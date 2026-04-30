n.d(e, { A: () => f });
var i = n(627968),
    l = n(64700),
    d = n(17928),
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
        } = t,
        { id: h, username: I, bot: b } = e,
        m = (0, d.bG)([c.default], () => c.default.getCurrentUser()?.id === h, [h]),
        T = (0, o.D)(h),
        [p, y] = (0, d.yK)([s.A], () => [s.A.isFriend(h), s.A.isBlocked(h)], [h]),
        [E, _] = l.useState(!1);
    return b || m
        ? null
        : p
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
                                        u.A.removeFriend(h, { location: f }), _(!1), C?.();
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
                label: E ? A.intl.string(A.t.xMH6vD) : T,
                action: async () => {
                    E ||
                        (g?.(!0),
                        await u.A.addRelationship({ userId: h, context: { location: f } }),
                        _(!0),
                        x?.(),
                        g?.(!1));
                },
                disabled: y || (E && !p),
            });
}
