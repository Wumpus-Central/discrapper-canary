n.d(t, { A: () => g }), n(896048);
var r,
    i,
    l = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(498642),
    c = n(71393),
    u = n(576705),
    d = n(124759),
    p = n(652215);
let f = "publicUpsellChannelNoticeGuilds",
    h = new Set();
class A extends (r = l.Ay.Store) {
    initialize() {
        var e;
        this.waitFor(u.A, c.A, o.A), this.syncWith([u.A, c.A, o.A], p.tEg), (h = ((e = new Set(a.w.get(f))), e));
    }
    isVisible(e) {
        if (null == e) return;
        let t = o.A.getMemberCount(e.id);
        return (
            !h.has(e.id) &&
            null != t &&
            t >= d.dH &&
            u.A.can(p.xBc.ADMINISTRATOR, e) &&
            !e.features.has(p.GuildFeatures.COMMUNITY)
        );
    }
}
(i = "displayName") in A
    ? Object.defineProperty(A, i, {
          value: "EnablePublicGuildUpsellNoticeStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (A[i] = "EnablePublicGuildUpsellNoticeStore");
let g = new A(s.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!h.has(t)) return h.add(t), a.w.set(f, h), !0;
    },
});
