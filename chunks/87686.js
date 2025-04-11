n.d(t, { Z: () => p }), n(388685);
var l = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    s = n(481060),
    o = n(70956),
    u = n(747071),
    c = n(586826),
    d = n(622594),
    f = n(174727),
    m = n(710111),
    h = n(891694);
let g = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * o.Z.Millis.SECOND),
        playheadPositionMs: 0
    },
    p = a.memo(function (e) {
        let { className: t, volume: n, disabled: r = !1, onChange: p } = e,
            { audio: b } = (0, c.p)(),
            [y, v] = a.useState(!1),
            [x, j] = a.useState(g),
            { playheadPositionMs: N, endPositionMs: w, startPositionMs: C } = x,
            S = null != b,
            O = w - C,
            P = O > m.YW * o.Z.Millis.SECOND;
        a.useEffect(() => {
            if (null != b)
                return (
                    j({
                        playheadPositionMs: 0,
                        endPositionMs: b.duration * o.Z.Millis.SECOND,
                        startPositionMs: 0
                    }),
                    () => {
                        b.pause(), v(!1);
                    }
                );
        }, [b]);
        let E = a.useCallback(
                (e) => {
                    null != b && (b.pause(), null != e && (b.currentTime = e), v(!1));
                },
                [b]
            ),
            k = a.useCallback(() => {
                if (null != b) {
                    if (y) return void E();
                    N >= w ? (b.currentTime = (0, f.my)(C)) : (b.currentTime = (0, f.my)(N)), (b.volume = (0, u.Z)(n)), b.play(), v(!0);
                }
            }, [b, w, E, N, y, C, n]),
            Z = a.useCallback(
                (e) => {
                    j(e),
                        null == p ||
                            p({
                                startMs: e.startPositionMs,
                                endMs: e.endPositionMs
                            });
                },
                [p]
            ),
            M = a.useCallback(
                (e) => {
                    null != b && (b.currentTime = e);
                },
                [b]
            );
        return (0, l.jsxs)('div', {
            className: i()(
                h.container,
                {
                    [h.initialized]: S,
                    [h.disabled]: !S || r
                },
                t
            ),
            children: [
                (0, l.jsxs)('div', {
                    className: h.playButtonContainer,
                    children: [
                        (0, l.jsx)(s.P3F, {
                            className: h.playButton,
                            onClick: S ? k : void 0,
                            children: y
                                ? (0, l.jsx)(s.wNq, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.playButtonIcon
                                  })
                                : (0, l.jsx)(s.o1U, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.playButtonIcon
                                  })
                        }),
                        (0, l.jsx)('div', {
                            className: h.durationContainer,
                            children: (0, l.jsx)(s.Text, {
                                className: h.__invalid_duration,
                                variant: 'text-xs/normal',
                                color: P ? 'text-warning' : 'text-positive',
                                children: ''.concat((0, f.my)(O).toFixed(2), 's')
                            })
                        })
                    ]
                }),
                (0, l.jsx)(d.Z, {
                    playing: y,
                    onPlaybackChange: M,
                    onPausePlayback: E,
                    onChangePosition: Z,
                    disabled: r
                })
            ]
        });
    });
