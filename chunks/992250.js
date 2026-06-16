"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(808728),
    a = n(287809),
    o = n(652215);
let l = null;
function u() {
    let e = a.default.getCurrentUser();
    if (null == e || e.mfaEnabled === l) return !1;
    l = e.mfaEnabled;
}
class c extends i.Ay.Store {
    static displayName = "GuildMFAWarningStore";
    initialize() {
        this.waitFor(a.default, s.Ay), this.syncWith([a.default, s.Ay], u);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === o.EkJ.ELEVATED && !1 === l && s.Ay.hasElevatedPermissions(e.id);
    }
}
let d = new c(r.h, {
    CONNECTION_OPEN: u,
    GUILD_UPDATE: function () {
        return !0;
    },
});
