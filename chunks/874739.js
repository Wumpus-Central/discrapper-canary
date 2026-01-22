n.d(t, {
    A: () => j,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(456412),
    s = n(878549),
    o = n(313961),
    c = n(493387),
    u = n(235986),
    d = n(808124),
    f = n(203982),
    p = n(484191),
    h = n(665450),
    b = n(526369),
    g = n(699707),
    m = n(713397),
    A = n(652215),
    y = n(806931),
    O = n(403264);
let j = (0, a.A)((e) => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: a,
        participantsVersion: j,
        layout: v,
        onSelectParticipant: x,
        onContextMenuParticipant: E,
        onFullscreenParticipant: _,
        channel: C,
        hasConnectPermission: S,
        className: I,
        inCall: N,
        showParticipants: T = !0,
        width: P,
        height: w,
        idle: R,
        mode: D,
        popoutType: M,
        awaitingRemoteSessionInfo: L,
        callContainerDimensions: G,
    } = e;
    l.useEffect(() => {
        f._.dispatch(A.jej.REMEASURE_TARGET);
    }, [P, w, G.width, G.height]);
    let k = l.useMemo(
            () => n.filter((e) => e.type !== y.lp.ACTIVITY || !e.participants.some((e) => (0, s.S)(e))),
            [n, j],
        ),
        U = (0, i.bG)([o.A], () => o.A.getVoiceParticipantsHidden(C.id), [C.id]);
    if ((null == L ? void 0 : L.channelId) === C.id)
        return (0, r.jsx)(h.A, {
            height: w,
        });
    if ((null == C ? void 0 : C.isGuildVocalOrThread()) && !N)
        return (0, r.jsx)(p.A, {
            channel: C,
            participants: t,
            hasConnectPermission: S,
        });
    if (((n = N ? n : t), v === A.DUB.HAVEN))
        return (0, r.jsx)(d.A, {
            participants: n,
            channel: C,
            idle: R,
        });
    if (D === A._Of.VOICE)
        return (0, r.jsx)(c.A, {
            guildId: C.guild_id,
            width: P,
            className: O.Er,
            participants: t,
            onContextMenu: E,
        });
    if (null == a) {
        if (0 === n.length) {
            let e = t.length > 0 && !U;
            return (0, r.jsx)(m.A, {
                channelId: C.id,
                allPoppedOut: e,
            });
        }
        return (0, r.jsx)(u.A, {
            className: O.HA,
            justify: u.A.Justify.CENTER,
            align: u.A.Align.CENTER,
            children: (0, r.jsx)(b.A, {
                channel: C,
                className: O.g9,
                participants: k,
                totalNumberOfParticipants: t.length,
                onClick: x,
                onDoubleClick: _,
                onContextMenu: E,
                inCall: N,
                popoutType: M,
            }),
        });
    }
    return (0, r.jsx)(g.A, {
        onFullscreenParticipant: _,
        onContextMenuParticipant: E,
        onSelectParticipant: x,
        selectedParticipant: a,
        filteredParticipants: k,
        participants: t,
        popoutType: M,
        className: I,
        idle: R,
        height: w,
        width: P,
        layout: v,
        inCall: N,
        channel: C,
        showParticipants: T,
    });
});
