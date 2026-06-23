e.d(n, { default: () => o });
var i = e(627968),
    a = e(64700),
    s = e(732159),
    c = e(260598),
    r = e(624458),
    u = e(513461),
    l = e(375708);
let o = function (t) {
    let { guildId: n, userId: e, guildJoinRequestId: o, onConfirm: d, onError: h, modalProps: p } = t,
        [f, C] = a.useState();
    async function g() {
        try {
            await r.A.updateGuildJoinRequest(n, e, o, u.B5.REJECTED, f), d?.();
        } catch (t) {
            h?.();
        }
    }
    return (0, i.jsx)(s.ConfirmModal, {
        title: l.intl.string(l.t["mFP/qw"]),
        cancelText: l.intl.string(l.t["ETE/oC"]),
        confirmText: l.intl.string(l.t.hDtbsz),
        onConfirm: g,
        ...p,
        children: (0, i.jsx)(c.f, { value: f, onChange: C, maxLength: 160 }),
    });
};
