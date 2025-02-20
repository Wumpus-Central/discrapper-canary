n.d(t, {
    ZB: () => g,
    ZP: () => b,
    cF: () => m
}),
    n(47120),
    n(653041);
var r = n(200651),
    l = n(192379),
    i = n(392711),
    a = n(933546),
    o = n(314897),
    s = n(70956),
    c = n(823379),
    u = n(27457),
    d = n(354459),
    f = n(487967);
let m = 112,
    p = (16 / 9) * 112 + 8,
    h = 10 * s.Z.Millis.SECOND;
function v(e) {
    var t;
    let n = o.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo);
}
function g(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      tileWidth: p,
                      tileMinWidth: 124,
                      tileMargin: 8,
                      limit: 12,
                      cropSelfVideo: !1
                  },
        { tileWidth: r, tileMinWidth: o, tileMargin: s, limit: u, cropSelfVideo: f, version: m } = n,
        [g, b] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            b(Date.now());
        }, h);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let y = l.useRef({}),
        { visibleParticipants: E, participantTileWidth: O } = l.useMemo(() => {
            let n = Date.now(),
                l = (0, i.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case d.fO.PRESENCE_EMBEDDED_ACTIVITY:
                                return '\0';
                            case d.fO.ACTIVITY:
                                return '\x01'.concat(e.sortKey);
                            case d.fO.HIDDEN_STREAM:
                            case d.fO.STREAM:
                                return '\x02'.concat((0, a.Z)(e.userNick, e.user));
                            case d.fO.USER:
                                var n;
                                let r = '\x06';
                                return (
                                    e.speaking ? (r = '\x03') : t - e.lastSpoke < h ? (r = '\x04') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (r = '\x05'),
                                    ''
                                        .concat(r)
                                        .concat(
                                            (function (e) {
                                                let t = String(8640000000000000).length;
                                                return String(8640000000000000 - e).padStart(t, '0');
                                            })(e.lastSpoke)
                                        )
                                        .concat((0, a.Z)(e.userNick, e.user))
                                );
                        }
                    })(e, n)
                ),
                [m, p] = (0, i.partition)(l, d.Io),
                g = m.findIndex(v),
                b = null;
            -1 !== g && ((b = m[g]), m.splice(g, 1));
            let E = null == b || f ? e : e - r - s,
                O = Math.max(0, Math.min(Math.floor((E - s) / (o + s)), u, t.length)),
                S = Math.min((E - s) / O - s, r),
                j = Math.max(0, O - p.length),
                x = p.slice(0, O),
                Z = m.slice(0, j),
                w = Array(j);
            if (j > 0) {
                let e = [];
                for (let t of Z) {
                    let n = y.current[t.id];
                    null != n && n < j ? (w[n] = t) : e.push(t);
                }
                for (let t = 0; t < w.length; t++) {
                    if (null != w[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    w[t] = n;
                }
            }
            let C = w.filter(c.lm),
                P = (0, i.keyBy)((0, i.range)(C.length), (e) => C[e].id);
            y.current = P;
            let N = [...x, ...C];
            return (
                null != b && (f && N.length >= O ? (N[Math.max(0, N.length - 1)] = b) : N.push(b)),
                {
                    visibleParticipants: N,
                    participantTileWidth: S
                }
            );
        }, [e, t, g, m, f, u, s, o, r]);
    return {
        visibleParticipants: E,
        participantTileWidth: O
    };
}
function b(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: l, onDoubleClick: i, onContextMenu: a, onClick: o, channel: s, inCall: c, popoutWindow: d, paused: m = !1 } = e,
        h = null != d;
    return (0, r.jsx)('div', {
        className: f.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = v(e);
            return (0, r.jsx)(
                'div',
                {
                    className: f.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, r.jsx)(u.ZP, {
                        participant: e,
                        selected: l === e.id,
                        channel: s,
                        className: f.tile,
                        fit: u.BP.COVER,
                        onClick: o,
                        onDoubleClick: i,
                        onContextMenu: a,
                        width: t ? p : n,
                        inCall: c,
                        paused: m,
                        inPopout: h
                    })
                },
                e.id
            );
        })
    });
}
