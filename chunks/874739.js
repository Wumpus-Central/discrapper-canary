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
    A = n(699707),
    f = n(713397),
    x = n(652215),
    g = n(806931),
    C = n(562200);
let y = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: y,
        layout: j,
        onSelectParticipant: v,
        onContextMenuParticipant: I,
        onFullscreenParticipant: E,
        channel: N,
        hasConnectPermission: b,
        className: T,
        inCall: _,
        showParticipants: R = !0,
        width: S,
        height: L,
        idle: P,
        mode: O,
        popoutType: w,
        awaitingRemoteSessionInfo: M,
        callContainerDimensions: D,
    } = e;
    l.useEffect(() => {
        u._.dispatch(x.jej.REMEASURE_TARGET);
    }, [S, L, D.width, D.height]);
    let U = l.useMemo(
            () => n.filter((e) => e.type !== g.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, y],
        ),
        V = (0, a.bG)([o.A], () => o.A.getVoiceParticipantsHidden(N.id), [N.id]);
    if (M?.channelId === N.id) return (0, i.jsx)(p.A, { height: L });
    if (N?.isGuildVocalOrThread() && !_)
        return (0, i.jsx)(h.A, { channel: N, participants: t, hasConnectPermission: b });
    if (((n = _ ? n : t), O === x._Of.VOICE))
        return (0, i.jsx)(c.A, { guildId: N.guild_id, width: S, className: C.Er, participants: t, onContextMenu: I });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !V;
            return (0, i.jsx)(f.A, { channelId: N.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: C.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(m.A, {
                channel: N,
                className: C.g9,
                participants: U,
                totalNumberOfParticipants: t.length,
                onClick: v,
                onDoubleClick: E,
                onContextMenu: I,
                inCall: _,
                popoutType: w,
            }),
        });
    }
    return (0, i.jsx)(A.A, {
        onFullscreenParticipant: E,
        onContextMenuParticipant: I,
        onSelectParticipant: v,
        selectedParticipant: s,
        filteredParticipants: U,
        participants: t,
        popoutType: w,
        className: T,
        idle: P,
        height: L,
        width: S,
        layout: j,
        inCall: _,
        channel: N,
        showParticipants: R,
    });
});
