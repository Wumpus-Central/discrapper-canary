"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(49229),
    l = n(327166),
    u = n(994500),
    c = n(287809),
    d = n(985018);
function _(e) {
    let {
            user: t,
            location: _ = "ContextMenu",
            onFriendRequestSent: f,
            onFriendRemove: p,
            appContext: h,
            setLoading: m,
        } = e,
        { id: g, username: E, bot: A } = t,
        I = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.id === g, [g]),
        T = (0, l.D)(g),
        [y, S] = (0, a.yK)([u.A], () => [u.A.isFriend(g), u.A.isBlocked(g)], [g]),
        [v, C] = i.useState(!1);
    if (A || I) return null;
    function b() {
        (0, s.mMO)(
            async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: d.intl.formatToPlainString(d.t.fPLvZd, { name: E }),
                        subtitle: d.intl.format(d.t.l5FFq6, { name: E }),
                        confirmText: d.intl.string(d.t.cvSt1J),
                        cancelText: d.intl.string(d.t["ETE/oC"]),
                        onConfirm: () => {
                            o.A.removeFriend(g, { location: _ }), C(!1), p?.();
                        },
                        ...t,
                    });
            },
            { contextKey: null != h ? (0, s.TId)(h) : void 0 },
        );
    }
    return y
        ? (0, r.jsx)(s.Drp, { id: "remove-friend", label: d.intl.string(d.t.cvSt1J), action: b })
        : (0, r.jsx)(s.Drp, {
              id: "add-friend",
              label: v ? d.intl.string(d.t.xMH6vD) : T,
              action: async () => {
                  v ||
                      (m?.(!0),
                      await o.A.addRelationship({ userId: g, context: { location: _ } }),
                      C(!0),
                      f?.(),
                      m?.(!1));
              },
              disabled: S || (v && !y),
          });
}
