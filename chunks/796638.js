n.d(t, {
    ZB: () => h,
    ZP: () => v,
    cF: () => p
}),
    n(388685),
    n(539854);
var r = n(255367),
    l = n(73800),
    i = n(392711),
    a = n(933546),
    o = n(314897),
    u = n(70956),
    s = n(823379),
    c = n(27457),
    d = n(354459),
    f = n(235025);
let p = 112,
    m = (16 / 9) * 112 + 8,
    g = 10 * u.Z.Millis.SECOND;
function E(e) {
    var t;
    let n = o.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo);
}
function h(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      tileWidth: m,
                      tileMinWidth: 124,
                      tileMargin: 8,
                      limit: 12,
                      cropSelfVideo: !1
                  },
        { tileWidth: r, tileMinWidth: o, tileMargin: u, limit: c, cropSelfVideo: f, version: p } = n,
        [h, v] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            v(Date.now());
        }, g);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let S = l.useRef({}),
        { visibleParticipants: b, participantTileWidth: O } = l.useMemo(() => {
            let n = Date.now(),
                l = (0, i.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case d.fO.ACTIVITY:
                                return '\x01'.concat(e.sortKey);
                            case d.fO.HIDDEN_STREAM:
                            case d.fO.STREAM:
                                return '\x02'.concat((0, a.Z)(e.userNick, e.user));
                            case d.fO.USER:
                                var n;
                                let r = '\x06';
                                return (
                                    e.speaking ? (r = '\x03') : t - e.lastSpoke < g ? (r = '\x04') : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (r = '\x05'),
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
                [p, m] = (0, i.partition)(l, d.Io),
                h = p.findIndex(E),
                v = null;
            -1 !== h && ((v = p[h]), p.splice(h, 1));
            let b = null == v || f ? e : e - r - u,
                O = Math.max(0, Math.min(Math.floor((b - u) / (o + u)), c, t.length)),
                y = Math.min((b - u) / O - u, r),
                Z = Math.max(0, O - m.length),
                j = m.slice(0, O),
                _ = p.slice(0, Z),
                I = Array(Z);
            if (Z > 0) {
                let e = [];
                for (let t of _) {
                    let n = S.current[t.id];
                    null != n && n < Z ? (I[n] = t) : e.push(t);
                }
                for (let t = 0; t < I.length; t++) {
                    if (null != I[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    I[t] = n;
                }
            }
            let w = I.filter(s.lm);
            S.current = (0, i.keyBy)((0, i.range)(w.length), (e) => w[e].id);
            let P = [...j, ...w];
            return (
                null != v && (f && P.length >= O ? (P[Math.max(0, P.length - 1)] = v) : P.push(v)),
                {
                    visibleParticipants: P,
                    participantTileWidth: y
                }
            );
        }, [e, t, h, p, f, c, u, o, r]);
    return {
        visibleParticipants: b,
        participantTileWidth: O
    };
}
function v(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: l, onDoubleClick: i, onContextMenu: a, onClick: o, channel: u, inCall: s, popoutWindow: d, paused: p = !1 } = e,
        g = null != d;
    return (0, r.jsx)('div', {
        className: f.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = E(e);
            return (0, r.jsx)(
                'div',
                {
                    className: f.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, r.jsx)(c.ZP, {
                        participant: e,
                        selected: l === e.id,
                        channel: u,
                        className: f.tile,
                        fit: c.BP.COVER,
                        onClick: o,
                        onDoubleClick: i,
                        onContextMenu: a,
                        width: t ? m : n,
                        inCall: s,
                        paused: p,
                        inPopout: g
                    })
                },
                e.id
            );
        })
    });
}
