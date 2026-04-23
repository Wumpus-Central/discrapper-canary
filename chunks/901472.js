n.d(t, { z: () => p });
var i = n(323073),
    l = n(793574),
    a = n(376708),
    r = n(976860),
    o = n(138298),
    d = n(940382),
    u = n(734057),
    s = n(808728),
    c = n(309010);
n(64700);
var _ = n(58149),
    A = n(954571),
    h = n(486974),
    E = n(652215),
    f = n(985925),
    g = n(746080);
function p(e, t, n) {
    let p,
        b = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: h.g.INFO };
    if (!(0, f.r)(e)) return Promise.resolve();
    let S = b.modViewPanel ?? h.g.INFO,
        v = b.sourceLocation ?? l.A.MEMBER_SAFETY_PAGE,
        I = c.A.getCurrentlySelectedChannelId(),
        T = null != I ? u.A.getChannel(I) : null;
    if (n !== g.VV.MEMBER_SAFETY && (null == T || T.getGuildId() !== e)) {
        let t = s.Ay.getDefaultChannel(e);
        null == t || (0, i.qR)(t) || (0, r.pX)(E.BVt.CHANNEL(e, t.id));
    }
    return (
        (0, a.G9)(n, t) && (p = n),
        !(function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.A.MEMBER_SAFETY_PAGE,
                a = { guild_id: e, target_user_id: t, subpanel_name: h.n[n], location: i, ...(0, _.H$)(e) };
            A.default.track(E.HAw.GUILD_MOD_VIEW_OPENED, a);
        })(e, t, S, v),
        o.A.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: d.QV.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: d.LU.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...b,
                modViewPanel: b.modViewPanel ?? h.g.INFO,
                moderatorReportId: p,
            },
        })
    );
}
