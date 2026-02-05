"use strict";
n.d(t, { ES: () => p, kB: () => f });
var r = n(406935),
    i = n(157559),
    a = n(827827),
    s = n(253932),
    o = n(594061),
    l = n(461213),
    u = n(954571),
    c = n(406535),
    d = n(652215),
    _ = n(985018);
function f() {
    let e = s.NO.useSetting(),
        t = s.Jr.useSetting();
    return e && ("0" === t || new Date(Number(t)).getTime() - new Date().getTime() > 0);
}
function p(e, t) {
    let n = s.NO.getSetting();
    o.wc.updateAsync(
        "notifications",
        (n) => {
            (n.quietMode = r._t.create({ value: e })),
                (n.focusModeExpiresAtMs = e && null != t ? `${Date.now() + t}` : "0");
        },
        o.Sb.INFREQUENT_USER_ACTION,
    ),
        u.default.track(d.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: c.Y.ACCOUNT,
            quiet_mode_enabled: e,
            quiet_mode_enabled_old: n,
        }),
        l.A.getStatus() === d.clD.DND &&
            e &&
            null == t &&
            i.A.show({
                title: _.intl.string(_.t["B+cbLS"]),
                body: _.intl.string(_.t.CYVgLI),
                cancelText: _.intl.string(_.t.f3Pet9),
                confirmText: _.intl.string(_.t.BddRzS),
                onConfirm: () => {
                    (0, a.A)({ nextStatus: d.clD.ONLINE });
                },
            });
}
