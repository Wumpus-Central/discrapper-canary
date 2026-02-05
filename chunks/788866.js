n.d(t, { A: () => _ });
var i = n(311907),
    r = n(506774),
    a = n(73153),
    l = n(498642),
    s = n(71393),
    o = n(576705),
    d = n(124759),
    c = n(652215);
let u = "publicUpsellChannelNoticeGuilds",
    A = new Set();
class h extends i.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(o.A, s.A, l.A), this.syncWith([o.A, s.A, l.A], c.tEg), (A = new Set(r.w.get(u)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = l.A.getMemberCount(e.id);
        return (
            !A.has(e.id) &&
            null != t &&
            t >= d.dH &&
            o.A.can(c.xBc.ADMINISTRATOR, e) &&
            !e.features.has(c.GuildFeatures.COMMUNITY)
        );
    }
}
let _ = new h(a.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!A.has(t)) return A.add(t), r.w.set(u, A), !0;
    },
});
