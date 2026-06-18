n.d(e, { A: () => m });
var i = n(627968),
    a = n(64700),
    r = n(17928),
    d = n(192308),
    l = n(477782),
    o = n(717398),
    s = n(327166),
    c = n(994500),
    u = n(287809),
    f = n(375708);
function m(t) {
    let {
            user: e,
            location: m = "ContextMenu",
            onFriendRequestSent: p,
            onFriendRemove: x,
            appContext: b,
            setLoading: v,
            addFriendLabel: C,
        } = t,
        { id: h, username: A, bot: g } = e,
        F = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.id === h, [h]),
        k = (0, s.D)(h, C),
        [y, w] = (0, r.yK)([c.A], () => [c.A.isFriend(h), c.A.isBlocked(h)], [h]),
        [D, S] = a.useState(!1);
    return g || F
        ? null
        : y
          ? (0, i.jsx)(l.Dr, {
                id: "remove-friend",
                label: f.intl.string(f.t.cvSt1J),
                action: function () {
                    (0, d.openModalLazy)(
                        async () => {
                            let { ConfirmModal: t } = await Promise.all([n.e("54048"), n.e("4823")]).then(
                                n.bind(n, 158954),
                            );
                            return (e) =>
                                (0, i.jsx)(t, {
                                    title: f.intl.formatToPlainString(f.t.fPLvZd, { name: A }),
                                    subtitle: f.intl.format(f.t.l5FFq6, { name: A }),
                                    confirmText: f.intl.string(f.t.cvSt1J),
                                    cancelText: f.intl.string(f.t["ETE/oC"]),
                                    onConfirm: () => {
                                        o.A.removeFriend(h, { location: m }), S(!1), x?.();
                                    },
                                    ...e,
                                });
                        },
                        { contextKey: null != b ? (0, d.modalContextFromAppContext)(b) : void 0 },
                    );
                },
            })
          : (0, i.jsx)(l.Dr, {
                id: "add-friend",
                label: D ? f.intl.string(f.t.xMH6vD) : k,
                action: async () => {
                    D ||
                        (v?.(!0),
                        await o.A.addRelationship({ userId: h, context: { location: m } }),
                        S(!0),
                        p?.(),
                        v?.(!1));
                },
                disabled: w || (D && !y),
            });
}
