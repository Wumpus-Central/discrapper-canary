t.d(n, { Z: () => p }), t(388685);
var l = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    s = t(481060),
    o = t(70956),
    u = t(747071),
    c = t(586826),
    d = t(622594),
    f = t(174727),
    m = t(710111),
    h = t(891694);
let g = {
        startPositionMs: 0,
        endPositionMs: 2 * (10 * o.Z.Millis.SECOND),
        playheadPositionMs: 0
    },
    p = a.memo(function (e) {
        let { className: n, volume: t, disabled: i = !1, onChange: p } = e,
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
        let k = a.useCallback(
                (e) => {
                    null != b && (b.pause(), null != e && (b.currentTime = e), v(!1));
                },
                [b]
            ),
            E = a.useCallback(() => {
                if (null != b) {
                    if (y) return void k();
                    N >= w ? (b.currentTime = (0, f.my)(C)) : (b.currentTime = (0, f.my)(N)), (b.volume = (0, u.Z)(t)), b.play(), v(!0);
                }
            }, [b, w, k, N, y, C, t]),
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
            className: r()(
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
                        (0, l.jsx)(s.P3F, {
                            className: h.playButton,
                            onClick: S ? E : void 0,
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
                    onPausePlayback: k,
                    onChangePosition: Z,
                    disabled: i
                })
            ]
        });
    });
