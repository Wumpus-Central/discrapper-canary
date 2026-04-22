n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(192308),
    o = n(477782),
    d = n(49229),
    u = n(327166),
    s = n(994500),
    c = n(287809),
    _ = n(985018);
function A(e) {
    let {
            user: t,
            location: A = "ContextMenu",
            onFriendRequestSent: f,
            onFriendRemove: E,
            appContext: h,
            setLoading: g,
        } = e,
        { id: b, username: p, bot: v } = t,
        S = (0, r.bG)([c.default], () => c.default.getCurrentUser()?.id === b, [b]),
        I = (0, u.D)(b),
        [T, y] = (0, r.yK)([s.A], () => [s.A.isFriend(b), s.A.isBlocked(b)], [b]),
        [m, R] = l.useState(!1);
    return v || S
        ? null
        : T
          ? (0, i.jsx)(o.Dr, {
                id: "remove-friend",
                label: _.intl.string(_.t.cvSt1J),
                action: function () {
                    (0, a.openModalLazy)(
                        async () => {
                            let { ConfirmModal: e } = await n.e("27204").then(n.bind(n, 158954));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    title: _.intl.formatToPlainString(_.t.fPLvZd, { name: p }),
                                    subtitle: _.intl.format(_.t.l5FFq6, { name: p }),
                                    confirmText: _.intl.string(_.t.cvSt1J),
                                    cancelText: _.intl.string(_.t["ETE/oC"]),
                                    onConfirm: () => {
                                        d.A.removeFriend(b, { location: A }), R(!1), E?.();
                                    },
                                    ...t,
                                });
                        },
                        { contextKey: null != h ? (0, a.modalContextFromAppContext)(h) : void 0 },
                    );
                },
            })
          : (0, i.jsx)(o.Dr, {
                id: "add-friend",
                label: m ? _.intl.string(_.t.xMH6vD) : I,
                action: async () => {
                    m ||
                        (g?.(!0),
                        await d.A.addRelationship({ userId: b, context: { location: A } }),
                        R(!0),
                        f?.(),
                        g?.(!1));
                },
                disabled: y || (m && !T),
            });
}
