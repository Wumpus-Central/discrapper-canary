n.d(t, { A: () => A });
var i = n(627968),
    l = n(311907),
    s = n(192308),
    r = n(452027),
    a = n(696986),
    o = n(71393),
    d = n(11351),
    c = n(306444),
    u = n(922975),
    m = n(557300),
    g = n(881288),
    h = n(79143),
    x = n(127757),
    _ = n(700458),
    p = n(985018);
function A() {
    let { editStateId: e, guildId: t } = (0, c.O)(),
        [A, E] = u.UN(e, t),
        f = (0, g.A)(t, e),
        { setCurrentTab: j } = (0, _.Tj)(),
        N = () => j(_.Oi.EMOJIS),
        I = (0, l.bG)([o.A], () => o.A.getGuild(t)),
        C = null != I ? (0, m.A)(I) : void 0;
    function b(e) {
        null == A ? E(new Set(e)) : E(new Set([...A, ...e]));
    }
    function v(e) {
        let t = new Set(A);
        t.delete(e), E(t);
    }
    let S = (0, d.gN)();
    return (0, i.jsxs)(r.D, {
        label: p.intl.string(p.t["D0qeO+"]),
        description: p.intl.format(p.t.zuwely, { premiumEmojiMaximum: C }),
        helperText: p.intl.format(p.t.sEkgBk, { handleTransitionToManageEmoji: N }),
        disabled: S,
        children: [
            (0, i.jsx)(x.d, {
                tierEmojiIds: A,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== f?.id).length > 0
                        ? v(e.id)
                        : (0, s.openModalLazy)(async () => {
                              let { default: t } = await n.e("55631").then(n.bind(n, 185074));
                              return (n) =>
                                  (0, i.jsx)(t, {
                                      ...n,
                                      onConfirmDelete: () => {
                                          v(e.id), n.onClose();
                                      },
                                  });
                          });
                },
            }),
            null != A && A.size > 0 ? (0, i.jsx)(a.h, { size: 8 }) : null,
            (0, i.jsx)(h.n, {
                onClick: function () {
                    (0, s.openModalLazy)(async () => {
                        let { EmojiAddModal: e } = await n.e("90410").then(n.bind(n, 126033));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildId: t,
                                initialTierEmojiIds: A,
                                onSubmit: b,
                                transitionToManageEmoji: () => {
                                    N(), n.onClose();
                                },
                            });
                    });
                },
                disabled: S,
                children: p.intl.string(p.t.ouOOVy),
            }),
        ],
    });
}
