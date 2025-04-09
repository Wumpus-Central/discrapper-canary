n.d(t, {
    ZB: () => h,
    ZP: () => v,
    cF: () => m
}),
    n(388685),
    n(539854);
var r = n(200651),
    l = n(192379),
    i = n(392711),
    a = n(933546),
    o = n(314897),
    s = n(70956),
    u = n(823379),
    c = n(27457),
    d = n(354459),
    f = n(921500);
let m = 112,
    p = (16 / 9) * 112 + 8,
    E = 10 * s.Z.Millis.SECOND;
function g(e) {
    var t;
    let n = o.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo);
}
function h(e, t) {
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
        { tileWidth: r, tileMinWidth: o, tileMargin: s, limit: c, cropSelfVideo: f, version: m } = n,
        [h, v] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            v(Date.now());
        }, E);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let S = l.useRef({}),
        { visibleParticipants: b, participantTileWidth: y } = l.useMemo(() => {
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
                                    e.speaking ? (r = '\x03') : t - e.lastSpoke < E ? (r = '\x04') : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (r = '\x05'),
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
                h = m.findIndex(g),
                v = null;
            -1 !== h && ((v = m[h]), m.splice(h, 1));
            let b = null == v || f ? e : e - r - s,
                y = Math.max(0, Math.min(Math.floor((b - s) / (o + s)), c, t.length)),
                O = Math.min((b - s) / y - s, r),
                I = Math.max(0, y - p.length),
                _ = p.slice(0, y),
                j = m.slice(0, I),
                Z = Array(I);
            if (I > 0) {
                let e = [];
                for (let t of j) {
                    let n = S.current[t.id];
                    null != n && n < I ? (Z[n] = t) : e.push(t);
                }
                for (let t = 0; t < Z.length; t++) {
                    if (null != Z[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    Z[t] = n;
                }
            }
            let x = Z.filter(u.lm);
            S.current = (0, i.keyBy)((0, i.range)(x.length), (e) => x[e].id);
            let N = [..._, ...x];
            return (
                null != v && (f && N.length >= y ? (N[Math.max(0, N.length - 1)] = v) : N.push(v)),
                {
                    visibleParticipants: N,
                    participantTileWidth: O
                }
            );
        }, [e, t, h, m, f, c, s, o, r]);
    return {
        visibleParticipants: b,
        participantTileWidth: y
    };
}
function v(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: l, onDoubleClick: i, onContextMenu: a, onClick: o, channel: s, inCall: u, popoutWindow: d, paused: m = !1 } = e,
        E = null != d;
    return (0, r.jsx)('div', {
        className: f.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = g(e);
            return (0, r.jsx)(
                'div',
                {
                    className: f.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, r.jsx)(c.ZP, {
                        participant: e,
                        selected: l === e.id,
                        channel: s,
                        className: f.tile,
                        fit: c.BP.COVER,
                        onClick: o,
                        onDoubleClick: i,
                        onContextMenu: a,
                        width: t ? p : n,
                        inCall: u,
                        paused: m,
                        inPopout: E
                    })
                },
                e.id
            );
        })
    });
}
