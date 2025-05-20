n.d(t, { Z: () => p }), n(388685);
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
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
        let { className: t, volume: n, disabled: i = !1, onChange: p } = e,
            { audio: y } = (0, c.p)(),
            [b, v] = a.useState(!1),
            [x, j] = a.useState(g),
            { playheadPositionMs: w, endPositionMs: N, startPositionMs: C } = x,
            S = null != y,
            O = N - C,
            P = O > m.YW * o.Z.Millis.SECOND;
        a.useEffect(() => {
            if (null != y)
                return (
                    j({
                        playheadPositionMs: 0,
                        endPositionMs: y.duration * o.Z.Millis.SECOND,
                        startPositionMs: 0
                    }),
                    () => {
                        y.pause(), v(!1);
                    }
                );
        }, [y]);
        let E = a.useCallback(
                (e) => {
                    null != y && (y.pause(), null != e && (y.currentTime = e), v(!1));
                },
                [y]
            ),
            k = a.useCallback(() => {
                if (null != y) {
                    if (b) return void E();
                    w >= N ? (y.currentTime = (0, f.my)(C)) : (y.currentTime = (0, f.my)(w)), (y.volume = (0, u.Z)(n)), y.play(), v(!0);
                }
            }, [y, N, E, w, b, C, n]),
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
                    null != y && (y.currentTime = e);
                },
                [y]
            );
        return (0, l.jsxs)('div', {
            className: r()(
                h.container,
                {
                    [h.initialized]: S,
                    [h.disabled]: !S || i
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
                            children: b
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
                    playing: b,
                    onPlaybackChange: M,
                    onPausePlayback: E,
                    onChangePosition: Z,
                    disabled: i
                })
            ]
        });
    });
