n.d(t, { A: () => f });
var i = n(477900),
    l = n(582128),
    d = n(17928),
    r = n(192308),
    a = n(477782),
    u = n(717398),
    o = n(327166),
    s = n(994500),
    c = n(287809),
    A = n(375708);
function f(e) {
    let {
            user: t,
            location: f = "ContextMenu",
            onFriendRequestSent: x,
            onFriendRemove: C,
            appContext: v,
            setLoading: g,
            addFriendLabel: h,
        } = e,
        { id: b, username: m, bot: I } = t,
        T = (0, d.bG)([c.default], () => c.default.getCurrentUser()?.id === b, [b]),
        p = (0, o.D)(b, h),
        [y, E] = (0, d.yK)([s.A], () => [s.A.isFriend(b), s.A.isBlocked(b)], [b]),
        [_, D] = l.useState(!1);
    return I || T
        ? null
        : y
          ? (0, i.jsx)(a.Dr, {
                id: "remove-friend",
                label: A.intl.string(A.t.cvSt1J),
                action: function () {
                    (0, r.openModalLazy)(
                        async () => {
                            let { ConfirmModal: e } = await Promise.all([n.e("454048"), n.e("304823")]).then(
                                n.bind(n, 158954),
                            );
                            return (t) =>
                                (0, i.jsx)(e, {
                                    title: A.intl.formatToPlainString(A.t.fPLvZd, { name: m }),
                                    subtitle: A.intl.format(A.t.l5FFq6, { name: m }),
                                    confirmText: A.intl.string(A.t.cvSt1J),
                                    cancelText: A.intl.string(A.t["ETE/oC"]),
                                    onConfirm: () => {
                                        u.A.removeFriend(b, { location: f }), D(!1), C?.();
                                    },
                                    ...t,
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
