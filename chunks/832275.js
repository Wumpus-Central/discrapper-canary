"use strict";
n.d(t, { A: () => f, J: () => _ });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(734057),
    o = n(576705),
    l = n(661191),
    u = n(181079),
    c = n(616075),
    d = n(818348);
function _(e, t, n) {
    let { canShow: r, isFavoritesPerk: a } = c.A.getCurrentConfig(
        { location: "isFavoritesGuildVisible" },
        { autoTrackExposure: !1 },
    );
    if (a) return !0;
    if (!r) return !1;
    let s = e.getFavoriteChannels();
    if (i().isEmpty(s)) return !1;
    let o = l.default.keys(s).filter((e) => {
        let r = t.getChannel(e);
        return null != r && (!!r.isPrivate() || n.can(d.xB.VIEW_CHANNEL, r));
    });
    return !i().isEmpty(o);
}
function f() {
    let { canShow: e, isFavoritesPerk: t } = (0, c.l)("useIsFavoritesGuildVisible"),
        n = (0, a.bG)([u.A, s.A, o.A], () => e && _(u.A, s.A, o.A));
    return !!t || n;
}
