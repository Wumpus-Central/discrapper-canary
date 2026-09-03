n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(808728),
    s = n(287809),
    l = n(652215);
let o = null;
function d() {
    let e = s.default.getCurrentUser();
    if (null == e || e.mfaEnabled === o) return !1;
    o = e.mfaEnabled;
}
class c extends i.Ay.Store {
    static displayName = "GuildMFAWarningStore";
    initialize() {
        this.waitFor(s.default, a.Ay), this.syncWith([s.default, a.Ay], d);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === l.EkJ.ELEVATED && !1 === o && a.Ay.hasElevatedPermissions(e.id);
    }
}
let u = new c(r.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function () {
        return !0;
    },
});
