t.d(n, { A: () => m });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(477782),
    o = t(367513),
    r = t(446243),
    c = t(558076),
    u = t(360729),
    d = t(198052),
    A = t(806931),
    h = t(660183);
function m(e, n) {
    let t = (0, a.bG)([d.A], () => d.A.getSelectedParticipant(e), [e]),
        { enabled: m } = (0, u.mf)({ guildId: n, location: "useGridViewItem" }),
        { isGuildRoomVisible: C, isVideoOverlayVisible: p } = (0, a.cf)(
            [c.A],
            () => ({ isGuildRoomVisible: c.A.isVisible(e), isVideoOverlayVisible: c.A.getVideoOverlayVisibility() }),
            [e],
        ),
        x = m && C,
        g = x ? p : null == t,
        f = i.useCallback(() => {
            x ? (0, r.UV)(!p, e) : null != t ? o.A.selectParticipant(e, null) : o.A.selectParticipant(e, A.jd.AUTO);
        }, [x, p, t, e]);
    return (0, l.jsx)(s.sL, { id: "call-grid-view", label: h.intl.string(h.t["3jrUBj"]), checked: g, action: f });
}
