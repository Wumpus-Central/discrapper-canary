n.d(t, {
    ZB: () => h,
    ZP: () => S,
    cF: () => m
}),
    n(388685),
    n(539854);
var r = n(255367),
    l = n(73800),
    i = n(392711),
    a = n(933546),
    u = n(314897),
    o = n(70956),
    s = n(823379),
    c = n(27457),
    d = n(354459),
    f = n(921500);
let m = 112,
    p = (16 / 9) * 112 + 8,
    E = 10 * o.Z.Millis.SECOND;
function g(e) {
    var t;
    let n = u.default.getId();
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
        { tileWidth: r, tileMinWidth: u, tileMargin: o, limit: c, cropSelfVideo: f, version: m } = n,
        [h, S] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            S(Date.now());
        }, E);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let O = l.useRef({}),
        { visibleParticipants: v, participantTileWidth: b } = l.useMemo(() => {
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
                S = null;
            -1 !== h && ((S = m[h]), m.splice(h, 1));
            let v = null == S || f ? e : e - r - o,
                b = Math.max(0, Math.min(Math.floor((v - o) / (u + o)), c, t.length)),
                I = Math.min((v - o) / b - o, r),
                _ = Math.max(0, b - p.length),
                y = p.slice(0, b),
                Z = m.slice(0, _),
                A = Array(_);
            if (_ > 0) {
                let e = [];
                for (let t of Z) {
                    let n = O.current[t.id];
                    null != n && n < _ ? (A[n] = t) : e.push(t);
                }
                for (let t = 0; t < A.length; t++) {
                    if (null != A[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    A[t] = n;
                }
            }
            let N = A.filter(s.lm);
            O.current = (0, i.keyBy)((0, i.range)(N.length), (e) => N[e].id);
            let R = [...y, ...N];
            return (
                null != S && (f && R.length >= b ? (R[Math.max(0, R.length - 1)] = S) : R.push(S)),
                {
                    visibleParticipants: R,
                    participantTileWidth: I
                }
            );
        }, [e, t, h, m, f, c, o, u, r]);
    return {
        visibleParticipants: v,
        participantTileWidth: b
    };
}
function S(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: l, onDoubleClick: i, onContextMenu: a, onClick: u, channel: o, inCall: s, popoutWindow: d, paused: m = !1 } = e,
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
                        channel: o,
                        className: f.tile,
                        fit: c.BP.COVER,
                        onClick: u,
                        onDoubleClick: i,
                        onContextMenu: a,
                        width: t ? p : n,
                        inCall: s,
                        paused: m,
                        inPopout: E
                    })
                },
                e.id
            );
        })
    });
}
