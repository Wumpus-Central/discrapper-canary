n.d(e, { A: () => g });
var i = n(477900),
    l = n(582128),
    d = n(17928),
    r = n(192308),
    a = n(477782),
    s = n(717398),
    o = n(327166),
    u = n(994500),
    c = n(287809),
    A = n(375708);
function g(t) {
    let {
            user: e,
            location: g = "ContextMenu",
            onFriendRequestSent: f,
            onFriendRemove: x,
            appContext: I,
            setLoading: h,
            addFriendLabel: C,
        } = t,
        { id: v, username: m, bot: b } = e,
        p = (0, d.bG)([c.default], () => c.default.getCurrentUser()?.id === v, [v]),
        T = (0, o.D)(v, C),
        [y, E] = (0, d.yK)([u.A], () => [u.A.isFriend(v), u.A.isBlocked(v)], [v]),
        [N, D] = l.useState(!1);
    return b || p
        ? null
        : y
          ? (0, i.jsx)(a.Dr, {
                id: "remove-friend",
                label: A.intl.string(A.t.cvSt1J),
                action: function () {
                    (0, r.openModalLazy)(
                        async () => {
                            let { ConfirmModal: t } = await Promise.all([n.e("454048"), n.e("304823")]).then(
                                n.bind(n, 158954),
                            );
                            return (e) =>
                                (0, i.jsx)(t, {
                                    title: A.intl.formatToPlainString(A.t.fPLvZd, { name: m }),
                                    subtitle: A.intl.format(A.t.l5FFq6, { name: m }),
                                    confirmText: A.intl.string(A.t.cvSt1J),
                                    cancelText: A.intl.string(A.t["ETE/oC"]),
                                    onConfirm: () => {
                                        s.A.removeFriend(v, { location: g }), D(!1), x?.();
                                    },
                                    ...e,
                                });
                        },
                        { contextKey: null != I ? (0, r.modalContextFromAppContext)(I) : void 0 },
                    );
                },
            })
          : (0, i.jsx)(a.Dr, {
                id: "add-friend",
                label: N ? A.intl.string(A.t.xMH6vD) : T,
                action: async () => {
                    N ||
                        (h?.(!0),
                        await s.A.addRelationship({ userId: v, context: { location: g } }),
                        D(!0),
                        f?.(),
                        h?.(!1));
                },
                disabled: E || (N && !y),
            });
}
