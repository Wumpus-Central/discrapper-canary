t.d(n, { Z: () => p }), t(47120);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    r = t(481060),
    u = t(70956),
    o = t(747071),
    d = t(586826),
    c = t(622594),
    f = t(174727),
    m = t(710111),
    h = t(308508);
let g = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * u.Z.Millis.SECOND),
        playheadPositionMs: 0
    },
    p = a.memo(function (e) {
        let { className: n, volume: t, disabled: i = !1, onChange: p } = e,
            { audio: x } = (0, d.p)(),
            [v, y] = a.useState(!1),
            [b, N] = a.useState(g),
            { playheadPositionMs: j, endPositionMs: w, startPositionMs: C } = b,
            S = null != x,
            Z = w - C,
            M = Z > m.YW * u.Z.Millis.SECOND;
        a.useEffect(() => {
            if (null != x)
                return (
                    N({
                        playheadPositionMs: 0,
                        endPositionMs: x.duration * u.Z.Millis.SECOND,
                        startPositionMs: 0
                    }),
                    () => {
                        x.pause(), y(!1);
                    }
                );
        }, [x]);
        let k = a.useCallback(
                (e) => {
                    null != x && (x.pause(), null != e && (x.currentTime = e), y(!1));
                },
                [x]
            ),
            E = a.useCallback(() => {
                if (null != x) {
                    if (v) {
                        k();
                        return;
                    }
                    j >= w ? (x.currentTime = (0, f.my)(C)) : (x.currentTime = (0, f.my)(j)), (x.volume = (0, o.Z)(t)), x.play(), y(!0);
                }
            }, [x, w, k, j, v, C, t]),
            I = a.useCallback(
                (e) => {
                    N(e),
                        null == p ||
                            p({
                                startMs: e.startPositionMs,
                                endMs: e.endPositionMs
                            });
                },
                [p]
            ),
            P = a.useCallback(
                (e) => {
                    null != x && (x.currentTime = e);
                },
                [x]
            );
        return (0, l.jsxs)('div', {
            className: s()(
                h.container,
                {
                    [h.initialized]: S,
                    [h.disabled]: !S || i
                },
                n
            ),
            children: [
                (0, l.jsxs)('div', {
                    className: h.playButtonContainer,
                    children: [
                        (0, l.jsx)(r.P3F, {
                            className: h.playButton,
                            onClick: S ? E : void 0,
                            children: v
                                ? (0, l.jsx)(r.wNq, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.playButtonIcon
                                  })
                                : (0, l.jsx)(r.o1U, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.playButtonIcon
                                  })
                        }),
                        (0, l.jsx)('div', {
                            className: h.durationContainer,
                            children: (0, l.jsx)(r.Text, {
                                className: h.__invalid_duration,
                                variant: 'text-xs/normal',
                                color: M ? 'text-warning' : 'text-positive',
                                children: ''.concat((0, f.my)(Z).toFixed(2), 's')
                            })
                        })
                    ]
                }),
                (0, l.jsx)(c.Z, {
                    playing: v,
                    onPlaybackChange: P,
                    onPausePlayback: k,
                    onChangePosition: I,
                    disabled: i
                })
            ]
        });
    });
