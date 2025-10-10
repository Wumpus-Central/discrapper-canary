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
    g = t(400029);
let h = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * s.Z.Millis.SECOND),
        playheadPositionMs: 0,
    },
    p = l.memo(function (e) {
        let { className: n, volume: t, disabled: i = !1, onChange: p } = e,
            { audio: y } = (0, c.p)(),
            [b, v] = l.useState(!1),
            [x, j] = l.useState(h),
            { playheadPositionMs: w, endPositionMs: _, startPositionMs: N } = x,
            C = null != y,
            S = _ - N,
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
            P = l.useCallback(() => {
                if (null != y) {
                    if (b) return void E();
                    w >= _ ? (y.currentTime = (0, f.my)(N)) : (y.currentTime = (0, f.my)(w)),
                        (y.volume = (0, u.Z)(t)),
                        y.play(),
                        v(!0);
                }
            }, [y, _, E, w, b, N, t]),
            I = l.useCallback(
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
            Z = l.useCallback(
                (e) => {
                    null != y && (y.currentTime = e);
                },
                [y],
            );
        return (0, a.jsxs)("div", {
            className: r()(
                g.container,
                {
                    [g.initialized]: C,
                    [g.disabled]: !C || i,
                },
                n,
            ),
            children: [
                (0, a.jsxs)("div", {
                    className: g.playButtonContainer,
                    children: [
                        (0, a.jsx)(o.P3F, {
                            className: g.playButton,
                            onClick: C ? P : void 0,
                            children: b
                                ? (0, a.jsx)(o.wNq, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: g.playButtonIcon,
                                  })
                                : (0, a.jsx)(o.o1U, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: g.playButtonIcon,
                                  }),
                        }),
                        (0, a.jsx)("div", {
                            className: g.durationContainer,
                            children: (0, a.jsx)(o.Text, {
                                className: g.__invalid_duration,
                                variant: "text-xs/normal",
                                color: O ? "text-feedback-warning" : "text-feedback-positive",
                                children: "".concat((0, f.my)(S).toFixed(2), "s"),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(d.Z, {
                    playing: b,
                    onPlaybackChange: Z,
                    onPausePlayback: E,
                    onChangePosition: I,
                    disabled: i,
                }),
            ],
        });
    });
