"use strict";
n.d(t, { A: () => l });
var i = n(652215),
    s = n(985018);
function l(e) {
    let { channel: t, embeddedApps: n } = e;
    if (t.type === i.rbe.GUILD_VOICE) {
        if (null != n && n.length > 0) {
            let e = n.map((e) => e.application.name);
            return s.intl.formatToPlainString(s.t.LmYuHT, { activeActivities: e.join(", ") });
        }
    }
}
