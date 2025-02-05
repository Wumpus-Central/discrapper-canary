n.d(t, {
    ZB: () => g,
    ZP: () => E,
    cF: () => f
}),
    n(47120),
    n(653041);
var l = n(200651),
    i = n(192379),
    r = n(392711),
    a = n(933546),
    s = n(314897),
    o = n(70956),
    u = n(823379),
    c = n(27457),
    d = n(354459),
    m = n(340665);
let f = 112,
    h = (16 / 9) * 112 + 8,
    p = 10 * o.Z.Millis.SECOND;
function v(e) {
    var t;
    let n = s.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo);
}
function g(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      tileWidth: h,
                      tileMinWidth: 124,
                      tileMargin: 8,
                      limit: 12,
                      cropSelfVideo: !1
                  },
        { tileWidth: l, tileMinWidth: s, tileMargin: o, limit: c, cropSelfVideo: m, version: f } = n,
        [g, E] = i.useState(Date.now());
    i.useEffect(() => {
        let e = setTimeout(() => {
            E(Date.now());
        }, p);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let Z = i.useRef({}),
        { visibleParticipants: x, participantTileWidth: S } = i.useMemo(() => {
            let n = Date.now(),
                i = (0, r.sortBy)(t, (e) =>
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
                                let l = '\x06';
                                return (
                                    e.speaking ? (l = '\x03') : t - e.lastSpoke < p ? (l = '\x04') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (l = '\x05'),
                                    ''
                                        .concat(l)
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
                [f, h] = (0, r.partition)(i, d.Io),
                g = f.findIndex(v),
                E = null;
            -1 !== g && ((E = f[g]), f.splice(g, 1));
            let x = null == E || m ? e : e - l - o,
                S = Math.max(0, Math.min(Math.floor((x - o) / (s + o)), c, t.length)),
                C = Math.min((x - o) / S - o, l),
                b = Math.max(0, S - h.length),
                I = h.slice(0, S),
                _ = f.slice(0, b),
                N = Array(b);
            if (b > 0) {
                let e = [];
                for (let t of _) {
                    let n = Z.current[t.id];
                    null != n && n < b ? (N[n] = t) : e.push(t);
                }
                for (let t = 0; t < N.length; t++) {
                    if (null != N[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    N[t] = n;
                }
            }
            let R = N.filter(u.lm),
                y = (0, r.keyBy)((0, r.range)(R.length), (e) => R[e].id);
            Z.current = y;
            let T = [...I, ...R];
            return (
                null != E && (m && T.length >= S ? (T[Math.max(0, T.length - 1)] = E) : T.push(E)),
                {
                    visibleParticipants: T,
                    participantTileWidth: C
                }
            );
        }, [e, t, g, f, m, c, o, s, l]);
    return {
        visibleParticipants: x,
        participantTileWidth: S
    };
}
function E(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: i, onDoubleClick: r, onContextMenu: a, onClick: s, channel: o, inCall: u, popoutWindow: d, paused: f = !1 } = e,
        p = null != d;
    return (0, l.jsx)('div', {
        className: m.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = v(e);
            return (0, l.jsx)(
                'div',
                {
                    className: m.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, l.jsx)(c.ZP, {
                        participant: e,
                        selected: i === e.id,
                        channel: o,
                        className: m.tile,
                        fit: c.BP.COVER,
                        onClick: s,
                        onDoubleClick: r,
                        onContextMenu: a,
                        width: t ? h : n,
                        inCall: u,
                        paused: f,
                        inPopout: p
                    })
                },
                e.id
            );
        })
    });
}
