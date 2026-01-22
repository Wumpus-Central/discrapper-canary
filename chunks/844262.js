n.d(t, {
    A: () => i,
});
var r = n(652215),
    l = n(985018);

function i(e) {
    let { channel: t, embeddedApps: n } = e;
    if (t.type === r.rbe.GUILD_VOICE) {
        if (null != n && n.length > 0) {
            let e = n.map((e) => e.application.name);
            return l.intl.formatToPlainString(l.t.LmYuHT, {
                activeActivities: e.join(", "),
            });
        }
    }
}
