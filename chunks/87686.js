t(47120);
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
    h = t(308508);
let g = {
    startPositionMs: 0,
    endPositionMs: 2 * (10 * o.Z.Millis.SECOND),
    playheadPositionMs: 0
};
n.Z = a.memo(function (e) {
    var n;
    let { className: t, volume: i, disabled: p = !1, onChange: v } = e,
        { audio: x } = (0, c.p)(),
        [N, y] = a.useState(!1),
        [b, j] = a.useState(g),
        { playheadPositionMs: C, endPositionMs: w, startPositionMs: S } = b,
        I = null != x,
        E = w - S,
        M = E > m.YW * o.Z.Millis.SECOND;
    a.useEffect(() => {
        null != x &&
            j({
                playheadPositionMs: 0,
                endPositionMs: x.duration * o.Z.Millis.SECOND,
                startPositionMs: 0
            });
    }, [x]);
    let Z = a.useCallback(
            (e) => {
                null != x && (x.pause(), null != e && (x.currentTime = e), y(!1));
            },
            [x]
        ),
        T = a.useCallback(() => {
            if (null != x) {
                if (N) {
                    Z();
                    return;
                }
                C >= w ? (x.currentTime = (0, f.my)(S)) : (x.currentTime = (0, f.my)(C)), (x.volume = (0, u.Z)(i)), x.play(), y(!0);
            }
        }, [x, w, Z, C, N, S, i]),
        _ = a.useCallback(
            (e) => {
                j(e),
                    null == v ||
                        v({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        });
            },
            [v]
        ),
        k = a.useCallback(
            (e) => {
                null != x && (x.currentTime = e);
            },
            [x]
        );
    return (0, l.jsxs)('div', {
        className: r()(
            h.container,
            {
                [h.initialized]: I,
                [h.disabled]: !I || p
            },
            t
        ),
        children: [
            (0, l.jsxs)('div', {
                className: h.playButtonContainer,
                children: [
                    (0, l.jsx)(s.Clickable, {
                        className: h.playButton,
                        onClick: I ? T : void 0,
                        children: N
                            ? (0, l.jsx)(s.StopIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: h.playButtonIcon
                              })
                            : (0, l.jsx)(s.PlayIcon, {
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
                            color: M ? 'text-warning' : 'text-positive',
                            children: ((n = E), ''.concat((0, f.my)(n).toFixed(2), 's'))
                        })
                    })
                ]
            }),
            (0, l.jsx)(d.Z, {
                playing: N,
                onPlaybackChange: k,
                onPausePlayback: Z,
                onChangePosition: _,
                disabled: p
            })
        ]
    });
});
