n.d(t, { A: () => j });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(456412),
    r = n(878549),
    o = n(313961),
    c = n(493387),
    d = n(235986),
    u = n(808124),
    h = n(625494),
    p = n(484191),
    m = n(665450),
    A = n(526369),
    f = n(699707),
    x = n(713397),
    g = n(652215),
    C = n(806931),
    y = n(562200);
let j = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: j,
        layout: v,
        onSelectParticipant: E,
        onContextMenuParticipant: N,
        onFullscreenParticipant: I,
        channel: T,
        hasConnectPermission: b,
        className: _,
        inCall: R,
        showParticipants: S = !0,
        width: P,
        height: L,
        idle: O,
        mode: w,
        popoutType: M,
        awaitingRemoteSessionInfo: D,
        callContainerDimensions: U,
    } = e;
    l.useEffect(() => {
        h._.dispatch(g.jej.REMEASURE_TARGET);
    }, [P, L, U.width, U.height]);
    let k = l.useMemo(
            () => n.filter((e) => e.type !== C.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, j],
        ),
        V = (0, a.bG)([o.A], () => o.A.getVoiceParticipantsHidden(T.id), [T.id]);
    if (D?.channelId === T.id) return (0, i.jsx)(m.A, { height: L });
    if (T?.isGuildVocalOrThread() && !R)
        return (0, i.jsx)(p.A, { channel: T, participants: t, hasConnectPermission: b });
    if (((n = R ? n : t), v === g.DUB.HAVEN)) return (0, i.jsx)(u.A, { participants: n, channel: T, idle: O });
    if (w === g._Of.VOICE)
        return (0, i.jsx)(c.A, { guildId: T.guild_id, width: P, className: y.Er, participants: t, onContextMenu: N });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !V;
            return (0, i.jsx)(x.A, { channelId: T.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: y.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(A.A, {
                channel: T,
                className: y.g9,
                participants: k,
                totalNumberOfParticipants: t.length,
                onClick: E,
                onDoubleClick: I,
                onContextMenu: N,
                inCall: R,
                popoutType: M,
            }),
        });
    }
    return (0, i.jsx)(f.A, {
        onFullscreenParticipant: I,
        onContextMenuParticipant: N,
        onSelectParticipant: E,
        selectedParticipant: s,
        filteredParticipants: k,
        participants: t,
        popoutType: M,
        className: _,
        idle: O,
        height: L,
        width: P,
        layout: v,
        inCall: R,
        channel: T,
        showParticipants: S,
    });
});
