t.d(n, { Z: () => p }), t(388685);
var a = t(951288),
    l = t(647438),
    r = t(120356),
    i = t.n(r),
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
        let { className: n, volume: t, disabled: r = !1, onChange: p } = e,
            { audio: b } = (0, c.p)(),
            [y, v] = l.useState(!1),
            [x, j] = l.useState(h),
            { playheadPositionMs: w, endPositionMs: _, startPositionMs: C } = x,
            N = null != b,
            S = _ - C,
            O = S > m.YW * s.Z.Millis.SECOND;
        l.useEffect(() => {
            if (null != b)
                return (
                    j({
                        playheadPositionMs: 0,
                        endPositionMs: b.duration * s.Z.Millis.SECOND,
                        startPositionMs: 0,
                    }),
                    () => {
                        b.pause(), v(!1);
                    }
                );
        }, [b]);
        let P = l.useCallback(
                (e) => {
                    null != b && (b.pause(), null != e && (b.currentTime = e), v(!1));
                },
                [b],
            ),
            E = l.useCallback(() => {
                if (null != b) {
                    if (y) return void P();
                    w >= _ ? (b.currentTime = (0, f.my)(C)) : (b.currentTime = (0, f.my)(w)),
                        (b.volume = (0, u.Z)(t)),
                        b.play(),
                        v(!0);
                }
            }, [b, _, P, w, y, C, t]),
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
            M = l.useCallback(
                (e) => {
                    null != b && (b.currentTime = e);
                },
                [b],
            );
        return (0, a.jsxs)("div", {
            className: i()(
                g.container,
                {
                    [g.initialized]: N,
                    [g.disabled]: !N || r,
                },
                n,
            ),
            children: [
                (0, a.jsxs)("div", {
                    className: g.playButtonContainer,
                    children: [
                        (0, a.jsx)(o.P3F, {
                            className: g.playButton,
                            onClick: N ? E : void 0,
                            children: y
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
                    playing: y,
                    onPlaybackChange: M,
                    onPausePlayback: P,
                    onChangePosition: I,
                    disabled: r,
                }),
            ],
        });
    });
