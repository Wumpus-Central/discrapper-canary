t.d(n, { A: () => h });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(477782),
    o = t(367513),
    r = t(446243),
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
        x = h && C,
        g = x ? p : null == t,
        f = l.useCallback(() => {
            x ? (0, r.UV)(!p, e) : null != t ? o.A.selectParticipant(e, null) : o.A.selectParticipant(e, A.jd.AUTO);
        }, [x, p, t, e]);
    return (0, i.jsx)(a.sL, { id: "call-grid-view", label: m.intl.string(m.t["3jrUBj"]), checked: g, action: f });
}
