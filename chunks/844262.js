n.d(t, { A: () => s });
var i = n(652215),
    l = n(985018);
function s(e) {
    let { channel: t, embeddedApps: n } = e;
    if (t.type === i.rbe.GUILD_VOICE) {
        if (null != n && n.length > 0) {
            let e = n.map((e) => e.application.name);
            return l.intl.formatToPlainString(l.t.LmYuHT, { activeActivities: e.join(", ") });
        }
    }
}
