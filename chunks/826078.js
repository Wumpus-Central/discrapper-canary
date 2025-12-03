n.d(t, { Z: () => T }), n(953529), n(539854), n(388685);
var l = n(54381),
    a = n(473749),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    o = n(399606),
    u = n(454399),
    c = n(28664),
    d = n(481060),
    m = n(596454),
    h = n(393238),
    p = n(70097),
    f = n(594174),
    v = n(451478),
    g = n(51144),
    b = n(894694),
    j = n(563275),
    x = n(917042),
    y = n(115559),
    C = n(356659),
    k = n(388032),
    N = n(107657);
function E(e) {
    let { eventType: t, importance: n, style: i, title: r, description: s } = e,
        o = a.useMemo(() => (0 === n ? 16 : 0.5 === n ? 20 : 1 === n ? 24 : 16), [n]),
        m = a.useMemo(() => {
            switch (t) {
                case b.x0.KILL:
                    return (0, l.jsx)(d.qOE, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.MULTIKILL:
                    return (0, l.jsx)(d.r7p, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.DEATH:
                    return (0, l.jsx)(d.yDF, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.ASSIST:
                    return (0, l.jsx)(d.V9, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.ITEM:
                    return (0, l.jsx)(d.r7p, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.VICTORY:
                    return (0, l.jsx)(d.rm8, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.DEFEAT:
                    return (0, l.jsx)(d.U65, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.LEVEL_UP:
                    return (0, l.jsx)(d.BRu, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.TREASURE:
                    return (0, l.jsx)(d.T$Z, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                case b.x0.OBJECTIVE_KILL:
                    return (0, l.jsx)(d.pgN, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_PRIMARY,
                    });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == m) return null;
    let h = (0, l.jsx)("div", {
        className: N.timelineIcon,
        style: i,
        children: m,
    });
    return null != r || null != s
        ? null == r || null == s
            ? (0, l.jsx)(c.u, {
                  text: null != r ? r : s,
                  position: "top",
                  children: h,
              })
            : (0, l.jsx)(u.i, {
                  title: r,
                  body: null != s ? s : "",
                  position: "top",
                  children: h,
              })
        : h;
}
function w(e) {
    let { videoLength: t, clip: n, onMouseDown: i } = e,
        { timeNotches: r, subNotches: s } = a.useMemo(() => {
            let e;
            if (null == t || t <= 0)
                return {
                    timeNotches: [],
                    subNotches: [],
                };
            let n = [],
                l = t / 6;
            e =
                l <= 1
                    ? 1
                    : l <= 2
                      ? 2
                      : l <= 5
                        ? 5
                        : l <= 10
                          ? 10
                          : l <= 15
                            ? 15
                            : l <= 20
                              ? 20
                              : l <= 30
                                ? 30
                                : 10 * Math.round(l / 10);
            for (let l = 0; l <= t; l += e) {
                let e = (l / t) * 100;
                n.push({
                    time: l,
                    position: e,
                });
            }
            (0 === n.length || n[n.length - 1].time < t - 2) &&
                n.push({
                    time: t,
                    position: 100,
                });
            let a = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!n.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let n = (e / t) * 100;
                    a.push({ position: n });
                }
            return {
                timeNotches: n,
                subNotches: a,
            };
        }, [t]);
    return (0, l.jsx)("div", {
        className: N.numberTimeline,
        onMouseDown: i,
        children: (0, l.jsxs)("div", {
            className: N.numberTimelineTrack,
            children: [
                s.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: N.timeSubNotch,
                            style: { left: "".concat(e.position, "%") },
                            children: (0, l.jsx)("div", { className: N.timeSubNotchTick }),
                        },
                        "sub-".concat(t),
                    ),
                ),
                r.map((e, t) =>
                    (0, l.jsxs)(
                        "div",
                        {
                            className: N.timeNotch,
                            style: { left: "".concat(e.position, "%") },
                            children: [
                                (0, l.jsx)("div", { className: N.timeNotchTick }),
                                (0, l.jsxs)(d.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: N.timeNotchLabel,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, l.jsx)(S, {
                    clip: n,
                    videoLength: t,
                }),
                (0, l.jsx)(I, {
                    clip: n,
                    videoLength: t,
                }),
                (0, l.jsx)(O, {
                    clip: n,
                    videoLength: t,
                }),
            ],
        }),
    });
}
function S(e) {
    var t, n;
    let { clip: i, videoLength: r } = e,
        s = a.useMemo(() => {
            var e;
            return null == i.timeline || (null == (e = i.decision) ? void 0 : e.timestamp) == null
                ? []
                : i.timeline.filter((e) => e.signal.type === b.Bs.GAME_EVENT);
        }, [i.timeline, null == (t = i.decision) ? void 0 : t.timestamp]),
        o = a.useCallback(
            (e) => {
                var t, n;
                if (null == r || r <= 0 || (null == (t = i.decision) ? void 0 : t.timestamp) == null) return null;
                let l = (e - ((null == (n = i.decision) ? void 0 : n.timestamp) - i.length)) / 1000;
                return l < 0 || l > r ? null : (l / r) * 100;
            },
            [r, null == (n = i.decision) ? void 0 : n.timestamp, i.length],
        );
    return (0, l.jsx)(l.Fragment, {
        children: s.map((e, t) => {
            var n;
            let a = o(e.timestamp);
            return null == a
                ? null
                : (0, l.jsx)(
                      E,
                      {
                          eventType: e.signal.eventType,
                          importance: null != (n = e.signal.importance) ? n : 0,
                          title: e.signal.title,
                          description: e.signal.description,
                          style: { left: "".concat(a, "%") },
                      },
                      "".concat(e.timestamp, "-").concat(t),
                  );
        }),
    });
}
function I(e) {
    var t, n;
    let { clip: i, videoLength: r } = e,
        s = a.useMemo(() => {
            var e;
            return null == i.timeline || (null == (e = i.decision) ? void 0 : e.timestamp) == null
                ? []
                : i.timeline.filter((e) => e.signal.type === b.Bs.SOUNDBOARD && !0 === e.signal.playing);
        }, [i.timeline, null == (t = i.decision) ? void 0 : t.timestamp]),
        o = a.useCallback(
            (e) => {
                var t, n;
                if (null == r || r <= 0 || (null == (t = i.decision) ? void 0 : t.timestamp) == null) return null;
                let l = (e - ((null == (n = i.decision) ? void 0 : n.timestamp) - i.length)) / 1000;
                return l < 0 || l > r ? null : (l / r) * 100;
            },
            [r, null == (n = i.decision) ? void 0 : n.timestamp, i.length],
        );
    return (0, l.jsx)(l.Fragment, {
        children: s.map((e, t) => {
            var n, a;
            let i = o(e.timestamp);
            if (null == i || (null == e.signal.emojiId && null == e.signal.emojiName)) return null;
            let r = f.default.getUser(e.signal.userId),
                s = (0, g.oY)(r);
            return (0, l.jsx)(
                u.i,
                {
                    title: e.signal.name,
                    body: null != s ? s : "",
                    position: "top",
                    children: (0, l.jsx)("div", {
                        className: N.timelineIcon,
                        style: { left: "".concat(i, "%") },
                        children: (0, l.jsx)(m.Z, {
                            emojiId: null != (n = e.signal.emojiId) ? n : null,
                            emojiName: null != (a = e.signal.emojiName) ? a : null,
                            animated: e.signal.emojiAnimated,
                            size: "reaction",
                        }),
                    }),
                },
                "".concat(e.timestamp, "-").concat(t),
            );
        }),
    });
}
function O(e) {
    var t, n;
    let { clip: i, videoLength: r } = e,
        s = a.useMemo(() => {
            var e;
            return null == i.timeline || (null == (e = i.decision) ? void 0 : e.timestamp) == null
                ? []
                : i.timeline.filter((e) => e.signal.type === b.Bs.PHRASE);
        }, [i.timeline, null == (t = i.decision) ? void 0 : t.timestamp]),
        o = a.useCallback(
            (e) => {
                var t, n;
                if (null == r || r <= 0 || (null == (t = i.decision) ? void 0 : t.timestamp) == null) return null;
                let l = (e - ((null == (n = i.decision) ? void 0 : n.timestamp) - i.length)) / 1000;
                return l < 0 || l > r ? null : (l / r) * 100;
            },
            [r, null == (n = i.decision) ? void 0 : n.timestamp, i.length],
        );
    return (0, l.jsx)(l.Fragment, {
        children: s.map((e, t) => {
            let n = o(e.timestamp);
            return null == n
                ? null
                : (0, l.jsx)(
                      u.i,
                      {
                          title: k.intl.string(k.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, l.jsx)("div", {
                              className: N.timelineIcon,
                              style: { left: "".concat(n, "%") },
                              children: (0, l.jsx)(d.kBi, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: d.TVs.colors.ICON_PRIMARY,
                              }),
                          }),
                      },
                      "".concat(e.timestamp, "-").concat(t),
                  );
        }),
    });
}
let T = function (e) {
    let { sourceURL: t, clip: n, voiceAudioTracks: i } = e,
        {
            useCurrentTime: u,
            duration: c,
            isPlaying: m,
            cropStart: f,
            cropEnd: g,
            cropDuration: b,
            setCropStart: E,
            setCropEnd: S,
            play: I,
            pause: O,
            subscribe: T,
            seek: A,
        } = (0, y.D)(),
        L = u(),
        M = a.useRef(null),
        [D, U] = a.useState(!1),
        [Z, z] = a.useState(null),
        B = a.useRef(null),
        V = a.useRef(null),
        [F, _] = a.useState(!1),
        [Y, K] = a.useState(null);
    a.useEffect(
        () =>
            T({
                onPlay: () => {
                    z(null), _(!1);
                },
            }),
        [T],
    );
    let { ref: W, width: H = 0, height: G = 0 } = (0, h.ZP)(),
        q = (0, o.e7)([v.Z], () => v.Z.windowSize());
    a.useMemo(() => {
        q.width, q.height;
        let e = W.current;
        null != e && K(e.getBoundingClientRect());
    }, [q.width, q.height, H, W]);
    let J = a.useRef(null),
        X = a.useRef({}),
        $ = a.useCallback(
            (e, t) => {
                if (null == c) return;
                if (null == Y) return null;
                let n = (((0, s.clamp)(e, Y.left, Y.right) - Y.left) / Y.width) * c,
                    l = (0, s.clamp)(n, 0, c),
                    a = Z;
                null == a && t && ((a = l <= f ? "start" : l >= g ? "end" : "playhead"), m && (O(), _(!0)), z(a)),
                    "start" === a ? E(l) : "end" === a ? S(l) : "playhead" === a && A((0, s.clamp)(l, f, g));
            },
            [c, Y, Z, f, g, m, O, E, S, A],
        ),
        Q = a.useCallback(
            (e) => {
                if (null == c) return;
                let t = (0, x.Z)(c, e.shiftKey),
                    n = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (n = !0), E(f - t);
                        break;
                    case "ArrowRight":
                        (n = !0), E(f + t);
                }
                n && (e.stopPropagation(), e.preventDefault());
            },
            [c, E, f],
        ),
        ee = a.useCallback(
            (e) => {
                if (null == c) return;
                let t = (0, x.Z)(c, e.shiftKey),
                    n = !1;
                switch (e.key) {
                    case "ArrowLeft":
                        (n = !0), S(g - t);
                        break;
                    case "ArrowRight":
                        (n = !0), S(g + t);
                }
                n && (e.stopPropagation(), e.preventDefault());
            },
            [c, S, g],
        ),
        et = a.useCallback(
            (e) => {
                $(e.clientX, !0);
            },
            [$],
        ),
        en = a.useCallback(
            (e) => {
                $(e.clientX, !1);
            },
            [$],
        ),
        el = a.useCallback(() => {
            F && I(), _(!1), z(null);
        }, [F, I]);
    a.useEffect(
        () => (
            document.addEventListener("mousemove", en),
            document.addEventListener("mouseup", el),
            () => {
                document.removeEventListener("mousemove", en), document.removeEventListener("mouseup", el);
            }
        ),
        [en, el],
    ),
        a.useEffect(() => {
            !(async function () {
                var e;
                let t = W.current,
                    n = M.current;
                if (null == t || null == n || !D) return;
                (t.height = G), (t.width = H);
                let l = t.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "#000"), l.fillRect(0, 0, H, G);
                let a = Math.ceil(G * (n.videoWidth / n.videoHeight)),
                    i = Math.ceil(H / a),
                    r = J.current;
                if (null == r) return;
                (r.width = a), (r.height = G);
                let s = null == r ? void 0 : r.getContext("2d", { willReadFrequently: !0 });
                if (null == s) return;
                let o = X.current;
                if ((null == (e = o[i]) ? void 0 : e.length) === i) {
                    for (let e = 0; e < i; e++) l.putImageData(o[i][e], a * e, 0);
                    return;
                }
                for (let e = 0; e < i; e++)
                    await new Promise((t) => {
                        (n.onseeked = () => {
                            l.drawImage(n, a * e, 0, a, G), s.drawImage(n, 0, 0, a, G);
                            let r = s.getImageData(0, 0, a, G);
                            null == o[i] && (o[i] = []), (o[i][e] = r), t();
                        }),
                            (n.currentTime = (a / H) * c * e);
                    });
            })();
        }, [H, G, W, c, J, D]);
    let ea = L - f,
        ei = a.useCallback(() => {
            A(Math.max(f, L - 10));
        }, [f, L, A]),
        er = a.useCallback(() => {
            A(Math.min(g, L + 10));
        }, [g, L, A]),
        es = a.useCallback(() => {
            m ? O() : I();
        }, [m, I, O]),
        eo = a.useCallback(() => U(!0), []);
    return (0, l.jsx)("div", {
        className: N.centeringWrapper,
        children: (0, l.jsxs)("div", {
            className: N.timelineWrapper,
            children: [
                (0, l.jsxs)("div", {
                    className: N.timelineHeader,
                    children: [
                        (0, l.jsx)("div", {
                            className: N.timePillContainer,
                            children: (0, l.jsx)("div", {
                                ref: V,
                                className: N.timePillBackground,
                                children: (0, l.jsxs)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: N.timePillText,
                                    color: "text-muted",
                                    children: [
                                        R(ea),
                                        (0, l.jsx)("span", {
                                            className: N.slashCharacter,
                                            children: " / ",
                                        }),
                                        R(b),
                                    ],
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: N.playPauseButtonWrapper,
                            children: [
                                (0, l.jsx)(d.hU, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.dTc,
                                    onClick: ei,
                                    "aria-label": k.intl.string(k.t.r9s3Uv),
                                }),
                                (0, l.jsx)(d.hU, {
                                    size: "md",
                                    icon: m ? d.fpf : d.o1U,
                                    onClick: es,
                                    "aria-label": k.intl.string(m ? k.t.ZcgDJX : k.t.RscU7I),
                                }),
                                (0, l.jsx)(d.hU, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.o_L,
                                    onClick: er,
                                    "aria-label": k.intl.string(k.t.zWDcNP),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(j.Z, {
                    onMouseDown: et,
                    voiceAudioTracks: i,
                    clipId: n.id,
                    className: N.waveform,
                }),
                (0, l.jsx)(w, {
                    onMouseDown: et,
                    videoLength: c,
                    clip: n,
                }),
                (0, l.jsx)("div", {
                    className: N.timelineContainer,
                    children: (0, l.jsxs)("div", {
                        className: r()(N.timeline, { [N.timelineDragging]: null != Z }),
                        onMouseDown: et,
                        children: [
                            (0, l.jsx)("canvas", {
                                className: N.hiddenCanvas,
                                ref: J,
                            }),
                            (0, l.jsx)("canvas", {
                                className: N.timelineBackground,
                                ref: W,
                            }),
                            (0, l.jsx)(d.tEY, {
                                children: (0, l.jsx)("div", {
                                    tabIndex: 0,
                                    ref: B,
                                    className: N.playhead,
                                    style: { left: null != c && c > 0 ? "".concat((L / c) * 100, "%") : 0 },
                                }),
                            }),
                            (0, l.jsx)(p.Z, {
                                preload: "auto",
                                className: N.timelineVideo,
                                ref: M,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: eo,
                            }),
                            (0, l.jsxs)("div", {
                                className: N.dragBox,
                                style: {
                                    left: null != c ? "".concat((f / c) * 100, "%") : "0",
                                    right: null != c ? "".concat(((c - g) / c) * 100, "%") : "0",
                                },
                                children: [
                                    (0, l.jsx)(d.tEY, {
                                        children: (0, l.jsx)("button", {
                                            className: r()(N.dragHandleLeft, { [N.dragging]: "start" === Z }),
                                            onMouseDown: et,
                                            onKeyDown: Q,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": f,
                                            "aria-valuetext": P(f),
                                            "aria-valuemax": g - C.Hp,
                                            "aria-label": k.intl.string(k.t["+BTvw8"]),
                                            children: (0, l.jsx)("div", { className: N.cropLeftArrow }),
                                        }),
                                    }),
                                    (0, l.jsx)(d.tEY, {
                                        children: (0, l.jsx)("button", {
                                            className: r()(N.dragHandleRight, { [N.dragging]: "end" === Z }),
                                            onMouseDown: et,
                                            onKeyDown: ee,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": f + C.Hp,
                                            "aria-valuenow": g,
                                            "aria-valuetext": P(g),
                                            "aria-valuemax": c,
                                            "aria-label": k.intl.string(k.t.bBgBYo),
                                            children: (0, l.jsx)("div", { className: N.cropRightArrow }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
};
function R(e) {
    ((e = Math.round(100 * e) / 100) < 0 || 0.01 > Math.abs(e)) && (e = 0);
    let t = Math.floor(e / 60),
        n = Math.floor(e % 60),
        l = Math.floor((e % 1) * 100);
    return (
        (t = t < 10 ? "0" + t : t),
        (n = n < 10 ? "0" + n : n),
        (l = l < 10 ? "0" + l : l),
        "".concat(t, ":").concat(n, ".").concat(l)
    );
}
function P(e) {
    let t = Math.floor(e / 60),
        n = k.intl.formatToPlainString(k.t.iXLF9W, { minutes: t }),
        l = k.intl.formatToPlainString(k.t.geSp4K, { seconds: e % 60 });
    return "".concat(n, " ").concat(l);
}
