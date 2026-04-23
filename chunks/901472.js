n.d(t, { z: () => m });
var a = n(323073),
    i = n(793574),
    l = n(376708),
    r = n(976860),
    o = n(138298),
    s = n(940382),
    d = n(734057),
    c = n(808728),
    u = n(309010);
n(64700);
var _ = n(58149),
    f = n(954571),
    p = n(486974),
    A = n(652215),
    g = n(985925),
    h = n(746080);
function m(e, t, n) {
    let m,
        x = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: p.g.INFO };
    if (!(0, g.r)(e)) return Promise.resolve();
    let I = x.modViewPanel ?? p.g.INFO,
        b = x.sourceLocation ?? i.A.MEMBER_SAFETY_PAGE,
        v = u.A.getCurrentlySelectedChannelId(),
        C = null != v ? d.A.getChannel(v) : null;
    if (n !== h.VV.MEMBER_SAFETY && (null == C || C.getGuildId() !== e)) {
        let t = c.Ay.getDefaultChannel(e);
        null == t || (0, a.qR)(t) || (0, r.pX)(A.BVt.CHANNEL(e, t.id));
    }
    return (
        (0, l.G9)(n, t) && (m = n),
        !(function (e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.A.MEMBER_SAFETY_PAGE,
                l = { guild_id: e, target_user_id: t, subpanel_name: p.n[n], location: a, ...(0, _.H$)(e) };
            f.default.track(A.HAw.GUILD_MOD_VIEW_OPENED, l);
        })(e, t, I, b),
        o.A.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: s.QV.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: s.LU.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...x,
                modViewPanel: x.modViewPanel ?? p.g.INFO,
                moderatorReportId: m,
            },
        })
    );
}
