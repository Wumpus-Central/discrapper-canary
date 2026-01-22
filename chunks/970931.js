n.d(t, {
    ES: () => _,
    kB: () => p,
});
var r = n(406935),
    i = n(157559),
    a = n(827827),
    s = n(253932),
    o = n(594061),
    l = n(461213),
    c = n(954571),
    u = n(406535),
    d = n(652215),
    f = n(985018);

function p() {
    let e = s.NO.useSetting(),
        t = s.Jr.useSetting();
    return e && ("0" === t || new Date(Number(t)).getTime() - new Date().getTime() > 0);
}

function _(e, t) {
    let n = s.NO.getSetting();
    o.wc.updateAsync(
        "notifications",
        (n) => {
            (n.quietMode = r._t.create({
                value: e,
            })),
                (n.focusModeExpiresAtMs = e && null != t ? "".concat(Date.now() + t) : "0");
        },
        o.Sb.INFREQUENT_USER_ACTION,
    ),
        c.default.track(d.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: u.Y.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: n,
        }),
        l.A.getStatus() === d.clD.DND &&
            e &&
            null == t &&
            i.A.show({
                title: f.intl.string(f.t["B+cbLS"]),
                body: f.intl.string(f.t.CYVgLI),
                cancelText: f.intl.string(f.t.f3Pet9),
                confirmText: f.intl.string(f.t.BddRzS),
                onConfirm: () => {
                    (0, a.A)({
                        nextStatus: d.clD.ONLINE,
                    });
                },
            });
}
