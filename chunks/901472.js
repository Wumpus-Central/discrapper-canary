l.d(t, { z: () => c });
var n = l(323073),
    r = l(793574),
    u = l(892340),
    d = l(976860),
    i = l(138298),
    E = l(940382),
    a = l(734057),
    I = l(808728),
    S = l(309010);
l(582128);
var _ = l(95561),
    A = l(174459),
    N = l(486974),
    O = l(652215),
    o = l(985925),
    M = l(746080);
function c(e, t, l) {
    let c,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: N.g.INFO };
    if (!(0, o.r)(e)) return Promise.resolve();
    let G = s.modViewPanel ?? N.g.INFO,
        g = s.sourceLocation ?? r.A.MEMBER_SAFETY_PAGE,
        f = S.Ay.getCurrentlySelectedChannelId(),
        h = null != f ? a.A.getChannel(f) : null;
    if (l !== M.VV.MEMBER_SAFETY && l !== (0, M.Gr)(M.VV.MEMBER_SAFETY, e) && (null == h || h.getGuildId() !== e)) {
        let t = I.Ay.getDefaultChannel(e);
        null == t || (0, n.qR)(t) || (0, d.pX)(O.BVt.CHANNEL(e, t.id));
    }
    return (
        (0, u.G9)(l, t) && (c = l),
        !(function (e, t, l) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.A.MEMBER_SAFETY_PAGE,
                u = { guild_id: e, target_user_id: t, subpanel_name: N.n[l], location: n, ...(0, _.H$)(e) };
            A.default.track(O.HAw.GUILD_MOD_VIEW_OPENED, u);
        })(e, t, G, g),
        i.A.openGuildSidebar({
            guildId: e,
            baseChannelId: l,
            sidebarType: E.QV.GUILD_MEMBER_MOD_VIEW,
            details: { userId: t, guildId: e, ...s, modViewPanel: s.modViewPanel ?? N.g.INFO, moderatorReportId: c },
        })
    );
}
