n.d(t, { A: () => j });
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
    A = n(699707),
    f = n(713397),
    x = n(652215),
    g = n(806931),
    C = n(804273);
let j = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: j,
        layout: y,
        onSelectParticipant: I,
        onContextMenuParticipant: N,
        onFullscreenParticipant: E,
        channel: v,
        hasConnectPermission: b,
        className: _,
        inCall: S,
        showParticipants: T = !0,
        width: R,
        height: O,
        idle: L,
        mode: P,
        popoutType: M,
        awaitingRemoteSessionInfo: w,
        callContainerDimensions: U,
    } = e;
    l.useEffect(() => {
        u._.dispatch(x.jej.REMEASURE_TARGET);
    }, [R, O, U.width, U.height]);
    let D = l.useMemo(
            () => n.filter((e) => e.type !== g.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, j],
        ),
        V = (0, a.bG)([o.A], () => o.A.getVoiceParticipantsHidden(v.id), [v.id]);
    if (w?.channelId === v.id) return (0, i.jsx)(p.A, { height: O });
    if (v?.isGuildVocalOrThread() && !S)
        return (0, i.jsx)(h.A, { channel: v, participants: t, hasConnectPermission: b });
    if (((n = S ? n : t), P === x._Of.VOICE))
        return (0, i.jsx)(c.A, { guildId: v.guild_id, width: R, className: C.Er, participants: t, onContextMenu: N });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !V;
            return (0, i.jsx)(f.A, { channelId: v.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: C.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(m.A, {
                channel: v,
                className: C.g9,
                participants: D,
                totalNumberOfParticipants: t.length,
                onClick: I,
                onDoubleClick: E,
                onContextMenu: N,
                inCall: S,
                popoutType: M,
            }),
        });
    }
    return (0, i.jsx)(A.A, {
        onFullscreenParticipant: E,
        onContextMenuParticipant: N,
        onSelectParticipant: I,
        selectedParticipant: s,
        filteredParticipants: D,
        participants: t,
        popoutType: M,
        className: _,
        idle: L,
        height: O,
        width: R,
        layout: y,
        inCall: S,
        channel: v,
        showParticipants: T,
    });
});
