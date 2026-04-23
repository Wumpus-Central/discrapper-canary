n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    r = n(192308),
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
            onFriendRequestSent: h,
            onFriendRemove: E,
            appContext: f,
            setLoading: g,
        } = e,
        { id: p, username: b, bot: S } = t,
        v = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id === p, [p]),
        I = (0, u.D)(p),
        [T, y] = (0, a.yK)([s.A], () => [s.A.isFriend(p), s.A.isBlocked(p)], [p]),
        [m, R] = l.useState(!1);
    return S || v
        ? null
        : T
          ? (0, i.jsx)(o.Dr, {
                id: "remove-friend",
                label: _.intl.string(_.t.cvSt1J),
                action: function () {
                    (0, r.openModalLazy)(
                        async () => {
                            let { ConfirmModal: e } = await n.e("4823").then(n.bind(n, 158954));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    title: _.intl.formatToPlainString(_.t.fPLvZd, { name: b }),
                                    subtitle: _.intl.format(_.t.l5FFq6, { name: b }),
                                    confirmText: _.intl.string(_.t.cvSt1J),
                                    cancelText: _.intl.string(_.t["ETE/oC"]),
                                    onConfirm: () => {
                                        d.A.removeFriend(p, { location: A }), R(!1), E?.();
                                    },
                                    ...t,
                                });
                        },
                        { contextKey: null != f ? (0, r.modalContextFromAppContext)(f) : void 0 },
                    );
                },
            })
          : (0, i.jsx)(o.Dr, {
                id: "add-friend",
                label: m ? _.intl.string(_.t.xMH6vD) : I,
                action: async () => {
                    m ||
                        (g?.(!0),
                        await d.A.addRelationship({ userId: p, context: { location: A } }),
                        R(!0),
                        h?.(),
                        g?.(!1));
                },
                disabled: y || (m && !T),
            });
}
