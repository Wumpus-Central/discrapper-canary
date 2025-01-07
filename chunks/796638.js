n.d(t, {
    ZB: function () {
        return v;
    },
    ZP: function () {
        return S;
    },
    cF: function () {
        return f;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n(933546),
    s = n(314897),
    o = n(70956),
    c = n(823379),
    u = n(27457),
    d = n(354459),
    m = n(340665);
let f = 112,
    p = (16 / 9) * f + 8,
    g = 10 * o.Z.Millis.SECOND;
function h(e) {
    var t;
    let n = s.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo);
}
function v(e, t) {
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
        { tileWidth: i, tileMinWidth: s, tileMargin: o, limit: u, cropSelfVideo: m, version: f } = n,
        [v, S] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            S(Date.now());
        }, g);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let I = l.useRef({}),
        { visibleParticipants: _, participantTileWidth: x } = l.useMemo(() => {
            let n = Date.now(),
                l = (0, a.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case d.fO.ACTIVITY:
                                return '\0'.concat(e.sortKey);
                            case d.fO.HIDDEN_STREAM:
                            case d.fO.STREAM:
                                return '\x01'.concat((0, r.Z)(e.userNick, e.user));
                            case d.fO.USER:
                                var n;
                                let i = '\x05';
                                return (
                                    e.speaking ? (i = '\x02') : t - e.lastSpoke < g ? (i = '\x03') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (i = '\x04'),
                                    ''
                                        .concat(i)
                                        .concat(
                                            (function (e) {
                                                let t = String(8640000000000000).length;
                                                return String(8640000000000000 - e).padStart(t, '0');
                                            })(e.lastSpoke)
                                        )
                                        .concat((0, r.Z)(e.userNick, e.user))
                                );
                        }
                    })(e, n)
                ),
                [f, p] = (0, a.partition)(l, d.Io),
                v = f.findIndex(h),
                S = null;
            -1 !== v && ((S = f[v]), f.splice(v, 1));
            let _ = null == S || m ? e : e - i - o,
                x = Math.max(0, Math.min(Math.floor((_ - o) / (s + o)), u, t.length)),
                E = Math.min((_ - o) / x - o, i),
                C = Math.max(0, x - p.length),
                Z = p.slice(0, x),
                y = f.slice(0, C),
                b = Array(C);
            if (C > 0) {
                let e = [];
                for (let t of y) {
                    let n = I.current[t.id];
                    null != n && n < C ? (b[n] = t) : e.push(t);
                }
                for (let t = 0; t < b.length; t++) {
                    if (null != b[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    b[t] = n;
                }
            }
            let T = b.filter(c.lm),
                A = (0, a.keyBy)((0, a.range)(T.length), (e) => T[e].id);
            I.current = A;
            let N = [...Z, ...T];
            return (
                null != S && (m && N.length >= x ? (N[Math.max(0, N.length - 1)] = S) : N.push(S)),
                {
                    visibleParticipants: N,
                    participantTileWidth: E
                }
            );
        }, [e, t, v, f, m, u, o, s, i]);
    return {
        visibleParticipants: _,
        participantTileWidth: x
    };
}
function S(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: l, onDoubleClick: a, onContextMenu: r, onClick: s, channel: o, inCall: c, popoutWindow: d, paused: f = !1 } = e,
        g = null != d;
    return (0, i.jsx)('div', {
        className: m.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = h(e);
            return (0, i.jsx)(
                'div',
                {
                    className: m.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, i.jsx)(u.ZP, {
                        participant: e,
                        selected: l === e.id,
                        channel: o,
                        className: m.tile,
                        fit: u.BP.COVER,
                        onClick: s,
                        onDoubleClick: a,
                        onContextMenu: r,
                        width: t ? p : n,
                        inCall: c,
                        paused: f,
                        inPopout: g
                    })
                },
                e.id
            );
        })
    });
}
