n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
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
    x = n(699707),
    g = n(713397),
    C = n(652215),
    f = n(806931),
    E = n(349488);
let y = (0, s.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: s,
        participantsVersion: y,
        layout: N,
        onSelectParticipant: j,
        onContextMenuParticipant: v,
        onFullscreenParticipant: I,
        channel: T,
        hasConnectPermission: _,
        className: R,
        inCall: S,
        showParticipants: P = !0,
        width: O,
        height: b,
        idle: L,
        mode: M,
        popoutType: D,
        awaitingRemoteSessionInfo: U,
        callContainerDimensions: w,
    } = e;
    l.useEffect(() => {
        h._.dispatch(C.jej.REMEASURE_TARGET);
    }, [O, b, w.width, w.height]);
    let V = l.useMemo(
            () => n.filter((e) => e.type !== f.lp.ACTIVITY || !e.participants.some((e) => (0, r.S)(e))),
            [n, y],
        ),
        B = (0, a.bG)([o.A], () => o.A.getVoiceParticipantsHidden(T.id), [T.id]);
    if (U?.channelId === T.id) return (0, i.jsx)(m.A, { height: b });
    if (T?.isGuildVocalOrThread() && !S)
        return (0, i.jsx)(p.A, { channel: T, participants: t, hasConnectPermission: _ });
    if (((n = S ? n : t), N === C.DUB.HAVEN)) return (0, i.jsx)(u.A, { participants: n, channel: T, idle: L });
    if (M === C._Of.VOICE)
        return (0, i.jsx)(c.A, { guildId: T.guild_id, width: O, className: E.Er, participants: t, onContextMenu: v });
    if (null == s) {
        if (0 === n.length) {
            let e = t.length > 0 && !B;
            return (0, i.jsx)(g.A, { channelId: T.id, allPoppedOut: e });
        }
        return (0, i.jsx)(d.A, {
            className: E.HA,
            justify: d.A.Justify.CENTER,
            align: d.A.Align.CENTER,
            children: (0, i.jsx)(A.A, {
                channel: T,
                className: E.g9,
                participants: V,
                totalNumberOfParticipants: t.length,
                onClick: j,
                onDoubleClick: I,
                onContextMenu: v,
                inCall: S,
                popoutType: D,
            }),
        });
    }
    return (0, i.jsx)(x.A, {
        onFullscreenParticipant: I,
        onContextMenuParticipant: v,
        onSelectParticipant: j,
        selectedParticipant: s,
        filteredParticipants: V,
        participants: t,
        popoutType: D,
        className: R,
        idle: L,
        height: b,
        width: O,
        layout: N,
        inCall: S,
        channel: T,
        showParticipants: P,
    });
});
