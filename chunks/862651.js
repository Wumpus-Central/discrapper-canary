"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(71393),
    a = n(11351),
    o = n(306444),
    d = n(922975),
    c = n(557300),
    u = n(881288),
    m = n(79143),
    g = n(127757),
    x = n(700458),
    h = n(985018);
function _() {
    let { editStateId: e, guildId: t } = (0, o.O)(),
        [_, A] = d.UN(e, t),
        p = (0, u.A)(t, e),
        { setCurrentTab: f } = (0, x.Tj)(),
        j = () => f(x.Oi.EMOJIS),
        N = (0, s.bG)([r.A], () => r.A.getGuild(t)),
        E = null != N ? (0, c.A)(N) : void 0;
    function b(e) {
        null == _ ? A(new Set(e)) : A(new Set([..._, ...e]));
    }
    function T(e) {
        let t = new Set(_);
        t.delete(e), A(t);
    }
    let C = (0, a.gN)();
    return (0, i.jsxs)(l.D0$, {
        label: h.intl.string(h.t["D0qeO+"]),
        description: h.intl.format(h.t.zuwely, { premiumEmojiMaximum: E }),
        helperText: h.intl.format(h.t.sEkgBk, { handleTransitionToManageEmoji: j }),
        disabled: C,
        children: [
            (0, i.jsx)(g.d, {
                tierEmojiIds: _,
                guildId: t,
                onRemoveEmoji: function (e) {
                    e.roles.filter((e) => e !== p?.id).length > 0
                        ? T(e.id)
                        : (0, l.mMO)(async () => {
                              let { default: t } = await n.e("55631").then(n.bind(n, 185074));
                              return (n) =>
                                  (0, i.jsx)(t, {
                                      ...n,
                                      onConfirmDelete: () => {
                                          T(e.id), n.onClose();
                                      },
                                  });
                          });
                },
            }),
            null != _ && _.size > 0 ? (0, i.jsx)(l.hKd, { size: 8 }) : null,
            (0, i.jsx)(m.n, {
                onClick: function () {
                    (0, l.mMO)(async () => {
                        let { EmojiAddModal: e } = await n.e("90410").then(n.bind(n, 126033));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildId: t,
                                initialTierEmojiIds: _,
                                onSubmit: b,
                                transitionToManageEmoji: () => {
                                    j(), n.onClose();
                                },
                            });
                    });
                },
                disabled: C,
                children: h.intl.string(h.t.ouOOVy),
            }),
        ],
    });
}
