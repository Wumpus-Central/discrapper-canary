t.d(n, { A: () => m });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(477782),
    r = t(367513),
    o = t(446243),
    c = t(558076),
    u = t(360729),
    d = t(198052),
    A = t(806931),
    h = t(105292);
function m(e, n) {
    let t = (0, s.bG)([d.A], () => d.A.getSelectedParticipant(e), [e]),
        { enabled: m } = (0, u.mf)({ guildId: n, location: "useGridViewItem" }),
        { isGuildRoomVisible: g, isVideoOverlayVisible: x } = (0, s.cf)(
            [c.A],
            () => ({ isGuildRoomVisible: c.A.isVisible(e), isVideoOverlayVisible: c.A.getVideoOverlayVisibility() }),
            [e],
        ),
        C = m && g,
        f = C ? x : null == t,
        p = l.useCallback(() => {
            C ? (0, o.UV)(!x, e) : null != t ? r.A.selectParticipant(e, null) : r.A.selectParticipant(e, A.jd.AUTO);
        }, [C, x, t, e]);
    return (0, i.jsx)(a.sL, { id: "call-grid-view", label: h.intl.string(h.t["3jrUBj"]), checked: f, action: p });
}
