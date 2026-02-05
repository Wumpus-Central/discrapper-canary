n.d(t, { A: () => u });
var i = n(311907),
    r = n(73153),
    a = n(808728),
    l = n(287809),
    s = n(652215);
let o = null;
function d() {
    let e = l.default.getCurrentUser();
    if (null == e || e.mfaEnabled === o) return !1;
    o = e.mfaEnabled;
}
class c extends i.Ay.Store {
    static displayName = "GuildMFAWarningStore";
    initialize() {
        this.waitFor(l.default, a.Ay), this.syncWith([l.default, a.Ay], d);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === s.EkJ.ELEVATED && !1 === o && a.Ay.hasElevatedPermissions(e.id);
    }
}
let u = new c(r.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function () {
        return !0;
    },
});
