i.d(t, { Z: () => Z });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    d = i(357156),
    r = i(471253),
    s = i(924301),
    c = i(482241),
    o = i(765305),
    u = i(388032);
function Z(n, t, i) {
    let { canManageGuildEvent: Z } = (0, d.XJ)(null != i ? i : t),
        h = (0, l.e7)([s.ZP], () => s.ZP.isActive(n)),
        x = (0, l.e7)([s.ZP], () => s.ZP.getGuildScheduledEvent(n), [n]),
        g = Z(x);
    if (null == n || !g || !h || (null == x ? void 0 : x.entity_type) === o.WX.EXTERNAL) return null;
    let v = () => {
        if (null == i ? void 0 : i.isGuildStageVoice()) {
            (0, r.NZ)(i);
            return;
        }
        null != n && c.Z.endEvent(n, t.id), (0, a.pTH)();
    };
    return (0, e.jsx)(a.sNh, {
        id: u.intl.string(u.t.qaYzPD),
        label: u.intl.string(u.t.qaYzPD),
        action: function () {
            (0, a.h7j)((n) =>
                (0, e.jsx)(a.ConfirmModal, {
                    ...n,
                    header: u.intl.string(u.t.qaYzPD),
                    confirmText: u.intl.string(u.t.mjB9pa),
                    cancelText: u.intl.string(u.t['ETE/oK']),
                    onConfirm: v,
                    children: (0, e.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: u.intl.string(u.t.bnDQ7O)
                    })
                })
            );
        },
        color: 'danger'
    });
}
