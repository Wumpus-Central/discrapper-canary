n.d(t, { ES: () => A, kB: () => E });
var i = n(406935),
    r = n(157559),
    a = n(827827),
    s = n(885386),
    l = n(594061),
    o = n(461213),
    d = n(174459),
    c = n(406535),
    u = n(652215),
    _ = n(375708);
function E() {
    let e = s.NO.useSetting(),
        t = s.Jr.useSetting();
    return e && ("0" === t || new Date(Number(t)).getTime() - new Date().getTime() > 0);
}
function A(e, t) {
    let n = s.NO.getSetting();
    l.wc.updateAsync(
        "notifications",
        (n) => {
            (n.quietMode = i._t.create({ value: e })),
                (n.focusModeExpiresAtMs = e && null != t ? `${Date.now() + t}` : "0");
        },
        l.Sb.INFREQUENT_USER_ACTION,
    ),
        d.default.track(u.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: c.Y.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: n,
        }),
        o.A.getStatus() === u.clD.DND &&
            e &&
            null == t &&
            r.A.show({
                title: _.intl.string(_.t["B+cbLS"]),
                body: _.intl.string(_.t.CYVgLI),
                cancelText: _.intl.string(_.t.f3Pet9),
                confirmText: _.intl.string(_.t.BddRzS),
                onConfirm: () => {
                    (0, a.A)({ nextStatus: u.clD.ONLINE });
                },
            });
}
