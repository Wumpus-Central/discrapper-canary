n.d(t, { Z: () => I }), n(953529), n(539854), n(388685);
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
    N = n(356659),
    C = n(388032),
    k = n(107657);
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
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.MULTIKILL:
                    return (0, l.jsx)(d.r7p, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.DEATH:
                    return (0, l.jsx)(d.yDF, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.ASSIST:
                    return (0, l.jsx)(d.V9, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.ITEM:
                    return (0, l.jsx)(d.r7p, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.VICTORY:
                    return (0, l.jsx)(d.rm8, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.DEFEAT:
                    return (0, l.jsx)(d.U65, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.LEVEL_UP:
                    return (0, l.jsx)(d.BRu, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.TREASURE:
                    return (0, l.jsx)(d.T$Z, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                case b.x0.OBJECTIVE_KILL:
                    return (0, l.jsx)(d.pgN, {
                        size: "custom",
                        width: o,
                        height: o,
                        color: d.TVs.colors.ICON_STRONG,
                    });
                default:
                    return null;
            }
        }, [t, o]);
    if (null == m) return null;
    let h = (0, l.jsx)("div", {
        className: k.timelineIcon,
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
function S(e) {
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
        className: k.numberTimeline,
        onMouseDown: i,
        children: (0, l.jsxs)("div", {
            className: k.numberTimelineTrack,
            children: [
                s.map((e, t) =>
                    (0, l.jsx)(
                        "div",
                        {
                            className: k.timeSubNotch,
                            style: { left: "".concat(e.position, "%") },
                            children: (0, l.jsx)("div", { className: k.timeSubNotchTick }),
                        },
                        "sub-".concat(t),
                    ),
                ),
                r.map((e, t) =>
                    (0, l.jsxs)(
                        "div",
                        {
                            className: k.timeNotch,
                            style: { left: "".concat(e.position, "%") },
                            children: [
                                (0, l.jsx)("div", { className: k.timeNotchTick }),
                                (0, l.jsxs)(d.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: k.timeNotchLabel,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, l.jsx)(w, {
                    clip: n,
                    videoLength: t,
                }),
                (0, l.jsx)(O, {
                    clip: n,
                    videoLength: t,
                }),
                (0, l.jsx)(T, {
                    clip: n,
                    videoLength: t,
                }),
            ],
        }),
    });
}
function w(e) {
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
function O(e) {
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
                        className: k.timelineIcon,
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
function T(e) {
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
                          title: C.intl.string(C.t.mIkeS2),
                          body: e.signal.text,
                          position: "top",
                          children: (0, l.jsx)("div", {
                              className: k.timelineIcon,
                              style: { left: "".concat(n, "%") },
                              children: (0, l.jsx)(d.kBi, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: d.TVs.colors.ICON_STRONG,
                              }),
                          }),
                      },
                      "".concat(e.timestamp, "-").concat(t),
                  );
        }),
    });
}
let I = function (e) {
    let { sourceURL: t, clip: n, voiceAudioTracks: i } = e,
        {
            useCurrentTime: u,
            duration: c,
            isPlaying: m,
            cropStart: f,
            cropEnd: g,
            cropDuration: b,
            setCropStart: E,
            setCropEnd: w,
            play: O,
            pause: T,
            subscribe: I,
            seek: P,
        } = (0, y.D)(),
        A = u(),
        M = a.useRef(null),
        [D, U] = a.useState(!1),
        [Z, z] = a.useState(null),
        B = a.useRef(null),
        V = a.useRef(null),
        [F, G] = a.useState(!1),
        [_, K] = a.useState(null);
    a.useEffect(
        () =>
            I({
                onPlay: () => {
                    z(null), G(!1);
                },
            }),
        [I],
    );
    let { ref: W, width: H = 0, height: q = 0 } = (0, h.ZP)(),
        Y = (0, o.e7)([v.Z], () => v.Z.windowSize());
    a.useMemo(() => {
        Y.width, Y.height;
        let e = W.current;
        null != e && K(e.getBoundingClientRect());
    }, [Y.width, Y.height, H, W]);
    let J = a.useRef(null),
        X = a.useRef({}),
        $ = a.useCallback(
            (e, t) => {
                if (null == c) return;
                if (null == _) return null;
                let n = (((0, s.clamp)(e, _.left, _.right) - _.left) / _.width) * c,
                    l = (0, s.clamp)(n, 0, c),
                    a = Z;
                null == a && t && ((a = l <= f ? "start" : l >= g ? "end" : "playhead"), m && (T(), G(!0)), z(a)),
                    "start" === a ? E(l) : "end" === a ? w(l) : "playhead" === a && P((0, s.clamp)(l, f, g));
            },
            [c, _, Z, f, g, m, T, E, w, P],
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
                        (n = !0), w(g - t);
                        break;
                    case "ArrowRight":
                        (n = !0), w(g + t);
                }
                n && (e.stopPropagation(), e.preventDefault());
            },
            [c, w, g],
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
            F && O(), G(!1), z(null);
        }, [F, O]);
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
                (t.height = q), (t.width = H);
                let l = t.getContext("2d");
                if (null == l) return;
                (l.fillStyle = "#000"), l.fillRect(0, 0, H, q);
                let a = Math.ceil(q * (n.videoWidth / n.videoHeight)),
                    i = Math.ceil(H / a),
                    r = J.current;
                if (null == r) return;
                (r.width = a), (r.height = q);
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
                            l.drawImage(n, a * e, 0, a, q), s.drawImage(n, 0, 0, a, q);
                            let r = s.getImageData(0, 0, a, q);
                            null == o[i] && (o[i] = []), (o[i][e] = r), t();
                        }),
                            (n.currentTime = (a / H) * c * e);
                    });
            })();
        }, [H, q, W, c, J, D]);
    let ea = A - f,
        ei = a.useCallback(() => {
            P(Math.max(f, A - 10));
        }, [f, A, P]),
        er = a.useCallback(() => {
            P(Math.min(g, A + 10));
        }, [g, A, P]),
        es = a.useCallback(() => {
            m ? T() : O();
        }, [m, O, T]),
        eo = a.useCallback(() => U(!0), []);
    return (0, l.jsx)("div", {
        className: k.centeringWrapper,
        children: (0, l.jsxs)("div", {
            className: k.timelineWrapper,
            children: [
                (0, l.jsxs)("div", {
                    className: k.timelineHeader,
                    children: [
                        (0, l.jsx)("div", {
                            className: k.timePillContainer,
                            children: (0, l.jsx)("div", {
                                ref: V,
                                className: k.timePillBackground,
                                children: (0, l.jsxs)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: k.timePillText,
                                    color: "text-muted",
                                    children: [
                                        R(ea),
                                        (0, l.jsx)("span", {
                                            className: k.slashCharacter,
                                            children: " / ",
                                        }),
                                        R(b),
                                    ],
                                }),
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: k.playPauseButtonWrapper,
                            children: [
                                (0, l.jsx)(d.hU, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.dTc,
                                    onClick: ei,
                                    "aria-label": C.intl.string(C.t.r9s3Uv),
                                }),
                                (0, l.jsx)(d.hU, {
                                    size: "md",
                                    icon: m ? d.fpf : d.o1U,
                                    onClick: es,
                                    "aria-label": C.intl.string(m ? C.t.ZcgDJX : C.t.RscU7I),
                                }),
                                (0, l.jsx)(d.hU, {
                                    size: "md",
                                    variant: "secondary",
                                    icon: d.o_L,
                                    onClick: er,
                                    "aria-label": C.intl.string(C.t.zWDcNP),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(j.Z, {
                    onMouseDown: et,
                    voiceAudioTracks: i,
                    clipId: n.id,
                    className: k.waveform,
                }),
                (0, l.jsx)(S, {
                    onMouseDown: et,
                    videoLength: c,
                    clip: n,
                }),
                (0, l.jsx)("div", {
                    className: k.timelineContainer,
                    children: (0, l.jsxs)("div", {
                        className: r()(k.timeline, { [k.timelineDragging]: null != Z }),
                        onMouseDown: et,
                        children: [
                            (0, l.jsx)("canvas", {
                                className: k.hiddenCanvas,
                                ref: J,
                            }),
                            (0, l.jsx)("canvas", {
                                className: k.timelineBackground,
                                ref: W,
                            }),
                            (0, l.jsx)(d.tEY, {
                                children: (0, l.jsx)("div", {
                                    tabIndex: 0,
                                    ref: B,
                                    className: k.playhead,
                                    style: { left: null != c && c > 0 ? "".concat((A / c) * 100, "%") : 0 },
                                }),
                            }),
                            (0, l.jsx)(p.Z, {
                                preload: "auto",
                                className: k.timelineVideo,
                                ref: M,
                                src: t,
                                muted: !0,
                                onLoadedMetadata: eo,
                            }),
                            (0, l.jsxs)("div", {
                                className: k.dragBox,
                                style: {
                                    left: null != c ? "".concat((f / c) * 100, "%") : "0",
                                    right: null != c ? "".concat(((c - g) / c) * 100, "%") : "0",
                                },
                                children: [
                                    (0, l.jsx)(d.tEY, {
                                        children: (0, l.jsx)("button", {
                                            className: r()(k.dragHandleLeft, { [k.dragging]: "start" === Z }),
                                            onMouseDown: et,
                                            onKeyDown: Q,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": 0,
                                            "aria-valuenow": f,
                                            "aria-valuetext": L(f),
                                            "aria-valuemax": g - N.Hp,
                                            "aria-label": C.intl.string(C.t["+BTvw8"]),
                                            children: (0, l.jsx)("div", { className: k.cropLeftArrow }),
                                        }),
                                    }),
                                    (0, l.jsx)(d.tEY, {
                                        children: (0, l.jsx)("button", {
                                            className: r()(k.dragHandleRight, { [k.dragging]: "end" === Z }),
                                            onMouseDown: et,
                                            onKeyDown: ee,
                                            role: "slider",
                                            tabIndex: 0,
                                            "aria-valuemin": f + N.Hp,
                                            "aria-valuenow": g,
                                            "aria-valuetext": L(g),
                                            "aria-valuemax": c,
                                            "aria-label": C.intl.string(C.t.bBgBYo),
                                            children: (0, l.jsx)("div", { className: k.cropRightArrow }),
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
function L(e) {
    let t = Math.floor(e / 60),
        n = C.intl.formatToPlainString(C.t.iXLF9W, { minutes: t }),
        l = C.intl.formatToPlainString(C.t.geSp4K, { seconds: e % 60 });
    return "".concat(n, " ").concat(l);
}
