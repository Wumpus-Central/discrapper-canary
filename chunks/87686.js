t.d(n, { Z: () => p }), t(388685);
var a = t(951288),
    l = t(647438),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    s = t(70956),
    u = t(747071),
    c = t(586826),
    d = t(622594),
    f = t(174727),
    m = t(710111),
    h = t(400029);
let g = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * s.Z.Millis.SECOND),
        playheadPositionMs: 0,
    },
    p = l.memo(function (e) {
        let { className: n, volume: t, disabled: i = !1, onChange: p } = e,
            { audio: y } = (0, c.p)(),
            [b, v] = l.useState(!1),
            [x, j] = l.useState(g),
            { playheadPositionMs: _, endPositionMs: w, startPositionMs: N } = x,
            C = null != y,
            S = w - N,
            O = S > m.YW * s.Z.Millis.SECOND;
        l.useEffect(() => {
            if (null != y)
                return (
                    j({
                        playheadPositionMs: 0,
                        endPositionMs: y.duration * s.Z.Millis.SECOND,
                        startPositionMs: 0,
                    }),
                    () => {
                        y.pause(), v(!1);
                    }
                );
        }, [y]);
        let E = l.useCallback(
                (e) => {
                    null != y && (y.pause(), null != e && (y.currentTime = e), v(!1));
                },
                [y],
            ),
            I = l.useCallback(() => {
                if (null != y) {
                    if (b) return void E();
                    _ >= w ? (y.currentTime = (0, f.my)(N)) : (y.currentTime = (0, f.my)(_)),
                        (y.volume = (0, u.Z)(t)),
                        y.play(),
                        v(!0);
                }
            }, [y, w, E, _, b, N, t]),
            P = l.useCallback(
                (e) => {
                    j(e),
                        null == p ||
                            p({
                                startMs: e.startPositionMs,
                                endMs: e.endPositionMs,
                            });
                },
                [p],
            ),
            k = l.useCallback(
                (e) => {
                    null != y && (y.currentTime = e);
                },
                [y],
            );
        return (0, a.jsxs)("div", {
            className: r()(
                h.container,
                {
                    [h.initialized]: C,
                    [h.disabled]: !C || i,
                },
                n,
            ),
            children: [
                (0, a.jsxs)("div", {
                    className: h.playButtonContainer,
                    children: [
                        (0, a.jsx)(o.P3F, {
                            className: h.playButton,
                            onClick: C ? I : void 0,
                            children: b
                                ? (0, a.jsx)(o.wNq, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: h.playButtonIcon,
                                  })
                                : (0, a.jsx)(o.o1U, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: h.playButtonIcon,
                                  }),
                        }),
                        (0, a.jsx)("div", {
                            className: h.durationContainer,
                            children: (0, a.jsx)(o.Text, {
                                className: h.__invalid_duration,
                                variant: "text-xs/normal",
                                color: O ? "text-feedback-warning" : "text-feedback-positive",
                                children: "".concat((0, f.my)(S).toFixed(2), "s"),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(d.Z, {
                    playing: b,
                    onPlaybackChange: k,
                    onPausePlayback: E,
                    onChangePosition: P,
                    disabled: i,
                }),
            ],
        });
    });
