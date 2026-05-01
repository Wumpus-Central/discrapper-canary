n.d(t, { A: () => _ });
var i = n(17928),
    a = n(228366),
    r = n(808728),
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
        this.waitFor(s.default, r.Ay), this.syncWith([s.default, r.Ay], d);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === l.EkJ.ELEVATED && !1 === o && r.Ay.hasElevatedPermissions(e.id);
    }
}
let _ = new c(a.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function () {
        return !0;
    },
});
