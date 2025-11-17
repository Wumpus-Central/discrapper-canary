n.d(t, {
    ZB: () => v,
    ZP: () => b,
    cF: () => p,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n(933546),
    o = n(314897),
    c = n(70956),
    s = n(823379),
    u = n(27457),
    d = n(354459),
    f = n(699966);
let p = 112,
    m = (16 / 9) * 112 + 8,
    _ = 10 * c.Z.Millis.SECOND;
function g(e) {
    var t;
    let n = o.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo);
}
function v(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      tileWidth: m,
                      tileMinWidth: 124,
                      tileMargin: 8,
                      limit: 12,
                      cropSelfVideo: !1,
                  },
        { tileWidth: r, tileMinWidth: o, tileMargin: c, limit: u, cropSelfVideo: f, version: p } = n,
        [v, b] = i.useState(Date.now());
    i.useEffect(() => {
        let e = setTimeout(() => {
            b(Date.now());
        }, _);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let E = i.useRef({}),
        { visibleParticipants: h, participantTileWidth: y } = i.useMemo(() => {
            let n = Date.now(),
                i = (0, l.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case d.fO.ACTIVITY:
                                return "\x01".concat(e.sortKey);
                            case d.fO.HIDDEN_STREAM:
                            case d.fO.STREAM:
                                return "\x02".concat((0, a.Z)(e.userNick, e.user));
                            case d.fO.USER:
                                var n;
                                let r = "\x06";
                                return (
                                    e.speaking
                                        ? (r = "\x03")
                                        : t - e.lastSpoke < _
                                          ? (r = "\x04")
                                          : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (r = "\x05"),
                                    ""
                                        .concat(r)
                                        .concat(
                                            (function (e) {
                                                let t = String(8640000000000000).length;
                                                return String(8640000000000000 - e).padStart(t, "0");
                                            })(e.lastSpoke),
                                        )
                                        .concat((0, a.Z)(e.userNick, e.user))
                                );
                        }
                    })(e, n),
                ),
                [p, m] = (0, l.partition)(i, d.Io),
                v = p.findIndex(g),
                b = null;
            -1 !== v && ((b = p[v]), p.splice(v, 1));
            let h = null == b || f ? e : e - r - c,
                y = Math.max(0, Math.min(Math.floor((h - c) / (o + c)), u, t.length)),
                S = Math.min((h - c) / y - c, r),
                O = Math.max(0, y - m.length),
                C = m.slice(0, y),
                I = p.slice(0, O),
                w = Array(O);
            if (O > 0) {
                let e = [];
                for (let t of I) {
                    let n = E.current[t.id];
                    null != n && n < O ? (w[n] = t) : e.push(t);
                }
                for (let t = 0; t < w.length; t++) {
                    if (null != w[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    w[t] = n;
                }
            }
            let P = w.filter(s.lm);
            E.current = (0, l.keyBy)((0, l.range)(P.length), (e) => P[e].id);
            let j = [...C, ...P];
            return (
                null != b && (f && j.length >= y ? (j[Math.max(0, j.length - 1)] = b) : j.push(b)),
                {
                    visibleParticipants: j,
                    participantTileWidth: S,
                }
            );
        }, [e, t, v, p, f, u, c, o, r]);
    return {
        visibleParticipants: h,
        participantTileWidth: y,
    };
}
function b(e) {
    let {
        participants: t,
        participantTileWidth: n,
        selectedParticipantId: i,
        onDoubleClick: l,
        onContextMenu: a,
        onClick: o,
        channel: c,
        inCall: s,
        popoutType: d,
        paused: p = !1,
    } = e;
    return (0, r.jsx)("div", {
        className: f.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = g(e);
            return (0, r.jsx)(
                "div",
                {
                    className: f.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, r.jsx)(u.ZP, {
                        participant: e,
                        selected: i === e.id,
                        channel: c,
                        className: f.tile,
                        fit: u.BP.COVER,
                        onClick: o,
                        onDoubleClick: l,
                        onContextMenu: a,
                        width: t ? m : n,
                        inCall: s,
                        paused: p,
                        popoutType: d,
                    }),
                },
                e.id,
            );
        }),
    });
}
