n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(456412),
    r = n(878549),
    o = n(313961),
    c = n(493387),
    d = n(235986),
    u = n(808124),
    h = n(203982),
    A = n(484191),
    _ = n(665450),
    m = n(526369),
    g = n(699707),
    p = n(713397),
    f = n(652215),
    x = n(806931),
    E = n(256960);
let I = (0, a.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: I,
        layout: C,
        onSelectParticipant: N,
        onContextMenuParticipant: T,
        onFullscreenParticipant: S,
        channel: b,
        hasConnectPermission: y,
        className: v,
        inCall: j,
        showParticipants: R = !0,
        width: O,
        height: L,
        idle: M,
        mode: D,
        popoutType: U,
        awaitingRemoteSessionInfo: G,
        callContainerDimensions: P,
    } = e;
    l.useEffect(() => {
        h._.dispatch(f.jej.REMEASURE_TARGET);
    }, [O, L, P.width, P.height]);
    let k = l.useMemo(
            () => n.filter((e) => e.type !== x.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, I],
        ),
        w = (0, s.bG)([o.A], () => o.A.getVoiceParticipantsHidden(b.id), [b.id]);
    if (G?.channelId === b.id) return (0, i.jsx)(_.A, { height: L });
    if (b?.isGuildVocalOrThread() && !j)
        return (0, i.jsx)(A.A, { channel: b, participants: t, hasConnectPermission: y });
    if (((n = j ? n : t), C === f.DUB.HAVEN)) return (0, i.jsx)(u.A, { participants: n, channel: b, idle: M });
    if (D === f._Of.VOICE)
        return (0, i.jsx)(c.A, { guildId: b.guild_id, width: O, className: E.Er, participants: t, onContextMenu: T });
    if (null == a) {
        if (0 === n.length) {
            let e = t.length > 0 && !w;
            return (0, i.jsx)(p.A, { channelId: b.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: E.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(m.A, {
                channel: b,
                className: E.g9,
                participants: k,
                totalNumberOfParticipants: t.length,
                onClick: N,
                onDoubleClick: S,
                onContextMenu: T,
                inCall: j,
                popoutType: U,
            }),
        });
    }
    return (0, i.jsx)(g.A, {
        onFullscreenParticipant: S,
        onContextMenuParticipant: T,
        onSelectParticipant: N,
        selectedParticipant: a,
        filteredParticipants: k,
        participants: t,
        popoutType: U,
        className: v,
        idle: M,
        height: L,
        width: O,
        layout: C,
        inCall: j,
        channel: b,
        showParticipants: R,
    });
});
