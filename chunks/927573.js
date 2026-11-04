var r,
    l = n(792996),
    s =
        (((r = {})[(r.DISPLAY = 0)] = "DISPLAY"),
        (r[(r.PERMISSIONS = 1)] = "PERMISSIONS"),
        (r[(r.MEMBERS = 2)] = "MEMBERS"),
        (r[(r.VERIFICATIONS = 3)] = "VERIFICATIONS"),
        r);
let i = {
    afk_channel_id: () => l.intl.string(l.t.KuYcnU),
    public_updates_channel_id: () => l.intl.string(l.t.vAyDGU),
    safety_alerts_channel_id: () => l.intl.string(l.t.sMkYE8),
    system_channel_id: () => l.intl.string(l.t.NASFnq),
};
n.d(
    e,
    {},
    {
        $s: function (t) {
            if (0 === Object.keys(t).length) return null;
            let e = Object.keys(t)[0],
                n = i[e]?.();
            return null != n ? `(${n}) ${t[e]}` : t[e];
        },
        T$: s,
        mu: "https://discord.gg",
    },
);
