var i = n(855986),
    r = n(73153),
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
        (this.waitFor(s.default, a.A), this.syncWith([s.default, a.A], d));
    }
    isVisible(e) {
        return null != e && e.mfaLevel === l.EkJ.ELEVATED && !1 === o && a.A.hasElevatedPermissions(e.id);
    }
}
let u = new c(r.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function () {
        return !0;
    },
});
n.d(t, {}, { A: u });
