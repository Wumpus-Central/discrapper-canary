n.d(t, {
    A: () => f,
});
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(808728),
    o = n(287809),
    c = n(652215);
let u = null;

function d() {
    let e = o.default.getCurrentUser();
    if (null == e || e.mfaEnabled === u) return !1;
    u = e.mfaEnabled;
}
class p extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(o.default, s.Ay), this.syncWith([o.default, s.Ay], d);
    }
    isVisible(e) {
        return null != e && e.mfaLevel === c.EkJ.ELEVATED && !1 === u && s.Ay.hasElevatedPermissions(e.id);
    }
}
(r = "displayName") in p
    ? Object.defineProperty(p, r, {
          value: "GuildMFAWarningStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[r] = "GuildMFAWarningStore");
let f = new p(a.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function () {
        return !0;
    },
});
