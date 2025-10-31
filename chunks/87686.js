t.d(n, { Z: () => v }), t(388685);
var l = t(951288),
    a = t(647438),
    i = t(120356),
    r = t.n(i),
    s = t(481060),
    o = t(70956),
    u = t(747071),
    c = t(586826),
    d = t(622594),
    f = t(174727),
    m = t(710111),
    g = t(400029);
let h = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * o.Z.Millis.SECOND),
        playheadPositionMs: 0,
    },
    v = a.memo(function (e) {
        let { className: n, volume: t, disabled: i = !1, onChange: v } = e,
            { audio: p } = (0, c.p)(),
            [b, y] = a.useState(!1),
            [j, x] = a.useState(h),
            { playheadPositionMs: N, endPositionMs: w, startPositionMs: C } = j,
            S = null != p,
            O = w - C,
            Z = O > m.YW * o.Z.Millis.SECOND;
        a.useEffect(() => {
            if (null != p)
                return (
                    x({
                        playheadPositionMs: 0,
                        endPositionMs: p.duration * o.Z.Millis.SECOND,
                        startPositionMs: 0,
                    }),
                    () => {
                        p.pause(), y(!1);
                    }
                );
        }, [p]);
        let P = a.useCallback(
                (e) => {
                    null != p && (p.pause(), null != e && (p.currentTime = e), y(!1));
                },
                [p],
            ),
            M = a.useCallback(() => {
                if (null != p) {
                    if (b) return void P();
                    N >= w ? (p.currentTime = (0, f.my)(C)) : (p.currentTime = (0, f.my)(N)),
                        (p.volume = (0, u.Z)(t)),
                        p.play(),
                        y(!0);
                }
            }, [p, w, P, N, b, C, t]),
            E = a.useCallback(
                (e) => {
                    x(e),
                        null == v ||
                            v({
                                startMs: e.startPositionMs,
                                endMs: e.endPositionMs,
                            });
                },
                [v],
            ),
            k = a.useCallback(
                (e) => {
                    null != p && (p.currentTime = e);
                },
                [p],
            );
        return (0, l.jsxs)("div", {
            className: r()(
                g.container,
                {
                    [g.initialized]: S,
                    [g.disabled]: !S || i,
                },
                n,
            ),
            children: [
                (0, l.jsxs)("div", {
                    className: g.playButtonContainer,
                    children: [
                        (0, l.jsx)(s.P3F, {
                            className: g.playButton,
                            onClick: S ? M : void 0,
                            children: b
                                ? (0, l.jsx)(s.wNq, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: g.playButtonIcon,
                                  })
                                : (0, l.jsx)(s.o1U, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: g.playButtonIcon,
                                  }),
                        }),
                        (0, l.jsx)("div", {
                            className: g.durationContainer,
                            children: (0, l.jsx)(s.Text, {
                                className: g.__invalid_duration,
                                variant: "text-xs/normal",
                                color: Z ? "text-feedback-warning" : "text-feedback-positive",
                                children: "".concat((0, f.my)(O).toFixed(2), "s"),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(d.Z, {
                    playing: b,
                    onPlaybackChange: k,
                    onPausePlayback: P,
                    onChangePosition: E,
                    disabled: i,
                }),
            ],
        });
    });
