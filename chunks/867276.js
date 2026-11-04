var i = e(477900),
    a = e(582128),
    s = e(732159),
    c = e(103557),
    u = e(624458),
    r = e(513461),
    h = e(792996);
e.d(
    n,
    {},
    {
        default: function (t) {
            let { guildId: n, userId: e, guildJoinRequestId: l, onConfirm: o, onError: d, modalProps: p } = t,
                [f, C] = a.useState();
            return (0, i.jsx)(s.u, {
                title: h.intl.string(h.t["mFP/qw"]),
                cancelText: h.intl.string(h.t["ETE/oC"]),
                confirmText: h.intl.string(h.t.hDtbsz),
                onConfirm: async function () {
                    try {
                        (await u.A.updateGuildJoinRequest(n, e, l, r.B5.REJECTED, f), o?.());
                    } catch (t) {
                        d?.();
                    }
                },
                ...p,
                children: (0, i.jsx)(c.f, { value: f, onChange: C, maxLength: 160 }),
            });
        },
    },
);
