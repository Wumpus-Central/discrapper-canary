n.d(t, { A: () => y });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(456412),
    r = n(878549),
    o = n(198052),
    c = n(493387),
    d = n(235986),
    u = n(625494),
    h = n(484191),
    p = n(665450),
    m = n(526369),
    f = n(699707),
    A = n(713397),
    x = n(652215),
    g = n(806931),
    C = n(804273);
let y = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: y,
        layout: j,
        onSelectParticipant: I,
        onContextMenuParticipant: N,
        onFullscreenParticipant: v,
        channel: E,
        hasConnectPermission: b,
        className: T,
        inCall: _,
        showParticipants: R = !0,
        width: S,
        height: L,
        idle: O,
        mode: P,
        popoutType: M,
        awaitingRemoteSessionInfo: w,
        callContainerDimensions: D,
    } = e;
    l.useEffect(() => {
        u._.dispatch(x.jej.REMEASURE_TARGET);
    }, [S, L, D.width, D.height]);
    let U = l.useMemo(
            () => n.filter((e) => e.type !== g.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, y],
        ),
        V = (0, a.bG)([o.A], () => o.A.getVoiceParticipantsHidden(E.id), [E.id]);
    if (w?.channelId === E.id) return (0, i.jsx)(p.A, { height: L });
    if (E?.isGuildVocalOrThread() && !_)
        return (0, i.jsx)(h.A, { channel: E, participants: t, hasConnectPermission: b });
    if (((n = _ ? n : t), P === x._Of.VOICE))
        return (0, i.jsx)(c.A, { guildId: E.guild_id, width: S, className: C.Er, participants: t, onContextMenu: N });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !V;
            return (0, i.jsx)(A.A, { channelId: E.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: C.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(m.A, {
                channel: E,
                className: C.g9,
                participants: U,
                totalNumberOfParticipants: t.length,
                onClick: I,
                onDoubleClick: v,
                onContextMenu: N,
                inCall: _,
                popoutType: M,
            }),
        });
    }
    return (0, i.jsx)(f.A, {
        onFullscreenParticipant: v,
        onContextMenuParticipant: N,
        onSelectParticipant: I,
        selectedParticipant: s,
        filteredParticipants: U,
        participants: t,
        popoutType: M,
        className: T,
        idle: O,
        height: L,
        width: S,
        layout: j,
        inCall: _,
        channel: E,
        showParticipants: R,
    });
});
