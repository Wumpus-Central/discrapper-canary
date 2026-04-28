n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    l = n(17928),
    a = n(192308),
    o = n(477782),
    s = n(49229),
    u = n(327166),
    c = n(994500),
    d = n(287809),
    f = n(985018);
function A(e) {
    let {
            user: t,
            location: A = "ContextMenu",
            onFriendRequestSent: g,
            onFriendRemove: m,
            appContext: h,
            setLoading: p,
        } = e,
        { id: _, username: E, bot: b } = t,
        y = (0, l.bG)([d.default], () => d.default.getCurrentUser()?.id === _, [_]),
        I = (0, u.D)(_),
        [v, C] = (0, l.yK)([c.A], () => [c.A.isFriend(_), c.A.isBlocked(_)], [_]),
        [x, N] = i.useState(!1);
    return b || y
        ? null
        : v
          ? (0, r.jsx)(o.Dr, {
                id: "remove-friend",
                label: f.intl.string(f.t.cvSt1J),
                action: function () {
                    (0, a.openModalLazy)(
                        async () => {
                            let { ConfirmModal: e } = await n.e("27204").then(n.bind(n, 158954));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    title: f.intl.formatToPlainString(f.t.fPLvZd, { name: E }),
                                    subtitle: f.intl.format(f.t.l5FFq6, { name: E }),
                                    confirmText: f.intl.string(f.t.cvSt1J),
                                    cancelText: f.intl.string(f.t["ETE/oC"]),
                                    onConfirm: () => {
                                        s.A.removeFriend(_, { location: A }), N(!1), m?.();
                                    },
                                    ...t,
                                });
                        },
                        { contextKey: null != h ? (0, a.modalContextFromAppContext)(h) : void 0 },
                    );
                },
            })
          : (0, r.jsx)(o.Dr, {
                id: "add-friend",
                label: x ? f.intl.string(f.t.xMH6vD) : I,
                action: async () => {
                    x ||
                        (p?.(!0),
                        await s.A.addRelationship({ userId: _, context: { location: A } }),
                        N(!0),
                        g?.(),
                        p?.(!1));
                },
                disabled: C || (x && !v),
            });
}
