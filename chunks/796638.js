(n.d(t, {
    ZB: () => I,
    ZP: () => T,
    cF: () => p
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n(933546),
    s = n(314897),
    l = n(70956),
    c = n(823379),
    u = n(27457),
    d = n(354459),
    f = n(921500);
let _ = 8640000000000000,
    p = 112,
    h = 124,
    m = 12,
    g = 8,
    E = (16 / 9) * 112 + 8,
    b = 10 * l.Z.Millis.SECOND;
function y(e) {
    let t = String(_).length;
    return String(_ - e).padStart(t, '0');
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
    switch (e.type) {
        case d.fO.ACTIVITY:
            return '\x01'.concat(e.sortKey);
        case d.fO.HIDDEN_STREAM:
        case d.fO.STREAM:
            return '\x02'.concat((0, o.Z)(e.userNick, e.user));
        case d.fO.USER:
            var n;
            let r = '\x06';
            return (
                e.speaking ? (r = '\x03') : t - e.lastSpoke < b ? (r = '\x04') : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (r = '\x05'),
                ''
                    .concat(r)
                    .concat(y(e.lastSpoke))
                    .concat((0, o.Z)(e.userNick, e.user))
            );
    }
}
function v(e) {
    var t;
    let n = s.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo);
}
function I(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      tileWidth: E,
                      tileMinWidth: h,
                      tileMargin: g,
                      limit: m,
                      cropSelfVideo: !1
                  },
        { tileWidth: r, tileMinWidth: o, tileMargin: s, limit: l, cropSelfVideo: u, version: f } = n,
        [_, p] = i.useState(Date.now());
    i.useEffect(() => {
        let e = setTimeout(() => {
            p(Date.now());
        }, b);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let y = i.useRef({}),
        { visibleParticipants: I, participantTileWidth: T } = i.useMemo(() => {
            let n = Date.now(),
                i = (0, a.sortBy)(t, (e) => O(e, n)),
                [f, _] = (0, a.partition)(i, d.Io),
                p = f.findIndex(v),
                h = null;
            -1 !== p && ((h = f[p]), f.splice(p, 1));
            let m = null == h || u ? e : e - r - s,
                g = Math.max(0, Math.min(Math.floor((m - s) / (o + s)), l, t.length)),
                E = Math.min((m - s) / g - s, r),
                b = Math.max(0, g - _.length),
                I = _.slice(0, g),
                T = f.slice(0, b),
                S = Array(b);
            if (b > 0) {
                let e = [];
                for (let t of T) {
                    let n = y.current[t.id];
                    null != n && n < b ? (S[n] = t) : e.push(t);
                }
                for (let t = 0; t < S.length; t++) {
                    if (null != S[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    S[t] = n;
                }
            }
            let A = S.filter(c.lm);
            y.current = (0, a.keyBy)((0, a.range)(A.length), (e) => A[e].id);
            let N = [...I, ...A];
            return (
                null != h && (u && N.length >= g ? (N[Math.max(0, N.length - 1)] = h) : N.push(h)),
                {
                    visibleParticipants: N,
                    participantTileWidth: E
                }
            );
        }, [e, t, _, f, u, l, s, o, r]);
    return {
        visibleParticipants: I,
        participantTileWidth: T
    };
}
function T(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: i, onDoubleClick: a, onContextMenu: o, onClick: s, channel: l, inCall: c, popoutWindow: d, paused: _ = !1 } = e,
        p = null != d;
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
                        selected: i === e.id,
                        channel: l,
                        className: f.tile,
                        fit: u.BP.COVER,
                        onClick: s,
                        onDoubleClick: a,
                        onContextMenu: o,
                        width: t ? E : n,
                        inCall: c,
                        paused: _,
                        inPopout: p
                    })
                },
                e.id
            );
        })
    });
}
