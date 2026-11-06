var i = n(477900),
    l = n(582128),
    a = n(855986),
    s = n(456412),
    r = n(878549),
    o = n(628983),
    c = n(493387),
    d = n(235986),
    u = n(188567),
    h = n(484191),
    p = n(665450),
    m = n(526369),
    A = n(699707),
    f = n(713397),
    g = n(652215),
    x = n(806931),
    C = n(804273);
let y = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: y,
        layout: I,
        onSelectParticipant: j,
        onContextMenuParticipant: v,
        onFullscreenParticipant: N,
        channel: E,
        hasConnectPermission: b,
        className: S,
        inCall: T,
        showParticipants: _ = !0,
        width: R,
        height: O,
        idle: L,
        mode: P,
        popoutType: w,
        awaitingRemoteSessionInfo: M,
        callContainerDimensions: U,
    } = e;
    l.useEffect(() => {
        u._.dispatch(g.jej.REMEASURE_TARGET);
    }, [R, O, U.width, U.height]);
    let D = l.useMemo(
            () => n.filter((e) => e.type !== x.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, y],
        ),
        V = (0, a.bG)([o.A], () => o.A.getVoiceParticipantsHidden(E.id), [E.id]);
    if (M?.channelId === E.id) return (0, i.jsx)(p.A, { height: O });
    if (E?.isGuildVocalOrThread() && !T)
        return (0, i.jsx)(h.A, { channel: E, participants: t, hasConnectPermission: b });
    if (((n = T ? n : t), P === g._Of.VOICE))
        return (0, i.jsx)(c.A, { guildId: E.guild_id, width: R, className: C.Er, participants: t, onContextMenu: v });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !V;
            return (0, i.jsx)(f.A, { channelId: E.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: C.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(m.A, {
                channel: E,
                className: C.g9,
                participants: D,
                totalNumberOfParticipants: t.length,
                onClick: j,
                onDoubleClick: N,
                onContextMenu: v,
                inCall: T,
                popoutType: w,
            }),
        });
    }
    return (0, i.jsx)(A.A, {
        onFullscreenParticipant: N,
        onContextMenuParticipant: v,
        onSelectParticipant: j,
        selectedParticipant: s,
        filteredParticipants: D,
        participants: t,
        popoutType: w,
        className: S,
        idle: L,
        height: O,
        width: R,
        layout: I,
        inCall: T,
        channel: E,
        showParticipants: _,
    });
});
n.d(t, {}, { A: y });
