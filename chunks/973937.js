t.d(n, { A: () => h });
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(477782),
    r = t(367513),
    o = t(446243),
    c = t(558076),
    u = t(360729),
    d = t(198052),
    A = t(806931),
    m = t(375708);
function h(e, n) {
    let t = (0, s.bG)([d.A], () => d.A.getSelectedParticipant(e), [e]),
        { enabled: h } = (0, u.mf)({ guildId: n, location: "useGridViewItem" }),
        { isGuildRoomVisible: C, isVideoOverlayVisible: p } = (0, s.cf)(
            [c.A],
            () => ({ isGuildRoomVisible: c.A.isVisible(e), isVideoOverlayVisible: c.A.getVideoOverlayVisibility() }),
            [e],
        ),
        g = h && C,
        E = g ? p : null == t,
        f = i.useCallback(() => {
            g ? (0, o.UV)(!p, e) : null != t ? r.A.selectParticipant(e, null) : r.A.selectParticipant(e, A.jd.AUTO);
        }, [g, p, t, e]);
    return (0, l.jsx)(a.sL, { id: "call-grid-view", label: m.intl.string(m.t["3jrUBj"]), checked: E, action: f });
}
