n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(456412),
    r = n(878549),
    o = n(313961),
    d = n(493387),
    c = n(235986),
    u = n(808124),
    h = n(203982),
    A = n(484191),
    g = n(665450),
    m = n(526369),
    p = n(699707),
    _ = n(713397),
    x = n(652215),
    f = n(806931),
    E = n(403264);
let C = (0, a.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: C,
        layout: I,
        onSelectParticipant: S,
        onContextMenuParticipant: b,
        onFullscreenParticipant: N,
        channel: T,
        hasConnectPermission: j,
        className: v,
        inCall: y,
        showParticipants: R = !0,
        width: O,
        height: L,
        idle: D,
        mode: M,
        popoutType: G,
        awaitingRemoteSessionInfo: U,
        callContainerDimensions: P,
    } = e;
    l.useEffect(() => {
        h._.dispatch(x.jej.REMEASURE_TARGET);
    }, [O, L, P.width, P.height]);
    let k = l.useMemo(
            () => n.filter((e) => e.type !== f.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, C],
        ),
        w = (0, s.bG)([o.A], () => o.A.getVoiceParticipantsHidden(T.id), [T.id]);
    if (U?.channelId === T.id) return (0, i.jsx)(g.A, { height: L });
    if (T?.isGuildVocalOrThread() && !y)
        return (0, i.jsx)(A.A, { channel: T, participants: t, hasConnectPermission: j });
    if (((n = y ? n : t), I === x.DUB.HAVEN)) return (0, i.jsx)(u.A, { participants: n, channel: T, idle: D });
    if (M === x._Of.VOICE)
        return (0, i.jsx)(d.A, { guildId: T.guild_id, width: O, className: E.Er, participants: t, onContextMenu: b });
    if (null == a) {
        if (0 === n.length) {
            let e = t.length > 0 && !w;
            return (0, i.jsx)(_.A, { channelId: T.id, allPoppedOut: e });
        }
        return (0, i.jsx)(c.A, {
            className: E.HA,
            justify: c.A.Justify.CENTER,
            align: c.A.Align.CENTER,
            children: (0, i.jsx)(m.A, {
                channel: T,
                className: E.g9,
                participants: k,
                totalNumberOfParticipants: t.length,
                onClick: S,
                onDoubleClick: N,
                onContextMenu: b,
                inCall: y,
                popoutType: G,
            }),
        });
    }
    return (0, i.jsx)(p.A, {
        onFullscreenParticipant: N,
        onContextMenuParticipant: b,
        onSelectParticipant: S,
        selectedParticipant: a,
        filteredParticipants: k,
        participants: t,
        popoutType: G,
        className: v,
        idle: D,
        height: L,
        width: O,
        layout: I,
        inCall: y,
        channel: T,
        showParticipants: R,
    });
});
