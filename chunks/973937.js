t.d(n, { A: () => h });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(477782),
    r = t(367513),
    o = t(446243),
    c = t(558076),
    u = t(360729),
    d = t(198052),
    A = t(806931),
    m = t(375708);
function h(e, n) {
    let t = (0, a.bG)([d.A], () => d.A.getSelectedParticipant(e), [e]),
        { enabled: h } = (0, u.mf)({ guildId: n, location: "useGridViewItem" }),
        { isGuildRoomVisible: C, isVideoOverlayVisible: f } = (0, a.cf)(
            [c.A],
            () => ({ isGuildRoomVisible: c.A.isVisible(e), isVideoOverlayVisible: c.A.getVideoOverlayVisibility() }),
            [e],
        ),
        E = h && C,
        p = E ? f : null == t,
        g = i.useCallback(() => {
            E ? (0, o.UV)(!f, e) : null != t ? r.A.selectParticipant(e, null) : r.A.selectParticipant(e, A.jd.AUTO);
        }, [E, f, t, e]);
    return (0, l.jsx)(s.sL, { id: "call-grid-view", label: m.intl.string(m.t["3jrUBj"]), checked: p, action: g });
}
