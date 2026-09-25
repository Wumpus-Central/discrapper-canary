e.d(n, { default: () => h });
var i = e(477900),
    a = e(582128),
    s = e(732159),
    c = e(103557),
    u = e(624458),
    r = e(513461),
    l = e(375708);
let h = function (t) {
    let { guildId: n, userId: e, guildJoinRequestId: h, onConfirm: o, onError: d, modalProps: p } = t,
        [f, C] = a.useState();
    async function g() {
        try {
            (await u.A.updateGuildJoinRequest(n, e, h, r.B5.REJECTED, f), o?.());
        } catch (t) {
            d?.();
        }
    }
    return (0, i.jsx)(s.u, {
        title: l.intl.string(l.t["mFP/qw"]),
        cancelText: l.intl.string(l.t["ETE/oC"]),
        confirmText: l.intl.string(l.t.hDtbsz),
        onConfirm: g,
        ...p,
        children: (0, i.jsx)(c.f, { value: f, onChange: C, maxLength: 160 }),
    });
};
