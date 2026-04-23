n.d(t, { A: () => y });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(456412),
    r = n(878549),
    o = n(313961),
    c = n(493387),
    d = n(235986),
    u = n(808124),
    p = n(203982),
    h = n(484191),
    _ = n(665450),
    m = n(526369),
    A = n(699707),
    x = n(713397),
    f = n(652215),
    g = n(806931),
    C = n(349488);
let y = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: y,
        layout: v,
        onSelectParticipant: E,
        onContextMenuParticipant: N,
        onFullscreenParticipant: I,
        channel: j,
        hasConnectPermission: T,
        className: b,
        inCall: S,
        showParticipants: R = !0,
        width: P,
        height: O,
        idle: w,
        mode: L,
        popoutType: D,
        awaitingRemoteSessionInfo: M,
        callContainerDimensions: U,
    } = e;
    a.useEffect(() => {
        p._.dispatch(f.jej.REMEASURE_TARGET);
    }, [P, O, U.width, U.height]);
    let V = a.useMemo(
            () => n.filter((e) => e.type !== g.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, y],
        ),
        k = (0, l.bG)([o.A], () => o.A.getVoiceParticipantsHidden(j.id), [j.id]);
    if (M?.channelId === j.id) return (0, i.jsx)(_.A, { height: O });
    if (j?.isGuildVocalOrThread() && !S)
        return (0, i.jsx)(h.A, { channel: j, participants: t, hasConnectPermission: T });
    if (((n = S ? n : t), v === f.DUB.HAVEN)) return (0, i.jsx)(u.A, { participants: n, channel: j, idle: w });
    if (L === f._Of.VOICE)
        return (0, i.jsx)(c.A, { guildId: j.guild_id, width: P, className: C.Er, participants: t, onContextMenu: N });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !k;
            return (0, i.jsx)(x.A, { channelId: j.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: C.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(m.A, {
                channel: j,
                className: C.g9,
                participants: V,
                totalNumberOfParticipants: t.length,
                onClick: E,
                onDoubleClick: I,
                onContextMenu: N,
                inCall: S,
                popoutType: D,
            }),
        });
    }
    return (0, i.jsx)(A.A, {
        onFullscreenParticipant: I,
        onContextMenuParticipant: N,
        onSelectParticipant: E,
        selectedParticipant: s,
        filteredParticipants: V,
        participants: t,
        popoutType: D,
        className: b,
        idle: w,
        height: O,
        width: P,
        layout: v,
        inCall: S,
        channel: j,
        showParticipants: R,
    });
});
