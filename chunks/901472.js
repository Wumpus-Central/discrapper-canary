l.d(t, { z: () => c });
var n = l(323073),
    r = l(793574),
    u = l(892340),
    E = l(976860),
    d = l(138298),
    i = l(940382),
    a = l(734057),
    _ = l(808728),
    I = l(309010);
l(64700);
var S = l(95561),
    A = l(174459),
    M = l(486974),
    O = l(652215),
    N = l(985925),
    o = l(746080);
function c(e, t, l) {
    let c,
        G = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: M.g.INFO };
    if (!(0, N.r)(e)) return Promise.resolve();
    let s = G.modViewPanel ?? M.g.INFO,
        g = G.sourceLocation ?? r.A.MEMBER_SAFETY_PAGE,
        f = I.Ay.getCurrentlySelectedChannelId(),
        R = null != f ? a.A.getChannel(f) : null;
    if (l !== o.VV.MEMBER_SAFETY && l !== (0, o.Gr)(o.VV.MEMBER_SAFETY, e) && (null == R || R.getGuildId() !== e)) {
        let t = _.Ay.getDefaultChannel(e);
        null == t || (0, n.qR)(t) || (0, E.pX)(O.BVt.CHANNEL(e, t.id));
    }
    return (
        (0, u.G9)(l, t) && (c = l),
        !(function (e, t, l) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.A.MEMBER_SAFETY_PAGE,
                u = { guild_id: e, target_user_id: t, subpanel_name: M.n[l], location: n, ...(0, S.H$)(e) };
            A.default.track(O.HAw.GUILD_MOD_VIEW_OPENED, u);
        })(e, t, s, g),
        d.A.openGuildSidebar({
            guildId: e,
            baseChannelId: l,
            sidebarType: i.QV.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: i.LU.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...G,
                modViewPanel: G.modViewPanel ?? M.g.INFO,
                moderatorReportId: c,
            },
        })
    );
}
