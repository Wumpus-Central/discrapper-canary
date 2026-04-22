n.d(e, { default: () => d });
var i = n(627968),
    a = n(64700),
    s = n(732159),
    r = n(260598),
    c = n(624458),
    l = n(513461),
    u = n(985018);
let d = (t) => {
    let { guildId: e, userId: n, guildJoinRequestId: d, onConfirm: h, onError: o, modalProps: p } = t,
        [C, f] = a.useState(),
        g = async () => {
            try {
                await c.A.updateGuildJoinRequest(e, n, d, l.B5.REJECTED, C), h?.();
            } catch (t) {
                o?.();
            }
        };
    return (0, i.jsx)(s.ConfirmModal, {
        title: u.intl.string(u.t["mFP/qw"]),
        cancelText: u.intl.string(u.t["ETE/oC"]),
        confirmText: u.intl.string(u.t.hDtbsz),
        onConfirm: g,
        ...p,
        children: (0, i.jsx)(r.f, { value: C, onChange: f, maxLength: 160 }),
    });
};
