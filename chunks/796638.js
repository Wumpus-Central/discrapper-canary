n.d(t, {
    ZB: () => E,
    ZP: () => g,
    cF: () => p,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(933546),
    o = n(314897),
    c = n(70956),
    s = n(823379),
    u = n(27457),
    d = n(354459),
    f = n(699966);
let p = 112,
    _ = (16 / 9) * 112 + 8,
    m = 10 * c.Z.Millis.SECOND;
function b(e) {
    var t;
    let n = o.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo);
}
function E(e, t) {
    let n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      tileWidth: _,
                      tileMinWidth: 124,
                      tileMargin: 8,
                      limit: 12,
                      cropSelfVideo: !1,
                  },
        { tileWidth: r, tileMinWidth: o, tileMargin: c, limit: u, cropSelfVideo: f, version: p } = n,
        [E, g] = i.useState(Date.now());
    i.useEffect(() => {
        let e = setTimeout(() => {
            g(Date.now());
        }, m);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let v = i.useRef({}),
        { visibleParticipants: h, participantTileWidth: S } = i.useMemo(() => {
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
                                        : t - e.lastSpoke < m
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
                [p, _] = (0, l.partition)(i, d.Io),
                E = p.findIndex(b),
                g = null;
            -1 !== E && ((g = p[E]), p.splice(E, 1));
            let h = null == g || f ? e : e - r - c,
                S = Math.max(0, Math.min(Math.floor((h - c) / (o + c)), u, t.length)),
                y = Math.min((h - c) / S - c, r),
                O = Math.max(0, S - _.length),
                I = _.slice(0, S),
                C = p.slice(0, O),
                w = Array(O);
            if (O > 0) {
                let e = [];
                for (let t of C) {
                    let n = v.current[t.id];
                    null != n && n < O ? (w[n] = t) : e.push(t);
                }
                for (let t = 0; t < w.length; t++) {
                    if (null != w[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    w[t] = n;
                }
            }
            let j = w.filter(s.lm);
            v.current = (0, l.keyBy)((0, l.range)(j.length), (e) => j[e].id);
            let Z = [...I, ...j];
            return (
                null != g && (f && Z.length >= S ? (Z[Math.max(0, Z.length - 1)] = g) : Z.push(g)),
                {
                    visibleParticipants: Z,
                    participantTileWidth: y,
                }
            );
        }, [e, t, E, p, f, u, c, o, r]);
    return {
        visibleParticipants: h,
        participantTileWidth: S,
    };
}
function g(e) {
    let {
            participants: t,
            participantTileWidth: n,
            selectedParticipantId: i,
            onDoubleClick: l,
            onContextMenu: a,
            onClick: o,
            channel: c,
            inCall: s,
            popoutWindow: d,
            paused: p = !1,
        } = e,
        m = null != d;
    return (0, r.jsx)("div", {
        className: f.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = b(e);
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
                        width: t ? _ : n,
                        inCall: s,
                        paused: p,
                        inPopout: m,
                    }),
                },
                e.id,
            );
        }),
    });
}
