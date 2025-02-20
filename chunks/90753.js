n.d(t, { Z: () => g }), n(653041);
var r = n(192379),
    l = n(846519),
    i = n(692547),
    a = n(481060),
    o = n(220082),
    s = n(979651),
    c = n(125268),
    u = n(673125),
    d = n(984063),
    f = n(88315),
    m = n(262433),
    p = n(400321),
    h = n(813900);
let v = 1000 / 60;
function g(e, t, n, g) {
    let b = (0, a.dQu)(i.Z.unsafe_rawColors.BRAND_500).hex(),
        y = (0, a.dQu)(i.Z.unsafe_rawColors.BLACK_500).hex(),
        E = (0, a.dQu)(i.Z.unsafe_rawColors.WHITE_500).hex(),
        O = r.useRef({}),
        S = r.useRef(new l.Xp()),
        j = r.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, f.UN)(e),
                    (function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: r, linesDrawnAt: l, streamerId: i, channelId: a, outlineColorDark: o, outlineColorLight: u } = e;
                        if (0 === n.length) return;
                        let f = t.current;
                        if (null == f) return;
                        let h = f.getContext('2d');
                        if (null == h) return;
                        let { width: v, height: g } = f.getBoundingClientRect(),
                            b = [];
                        n.forEach((e) => {
                            if (null == s.Z.getVoiceStateForChannel(a, e.userId)) {
                                b.push(e);
                                return;
                            }
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: r, canvasHeight: l, fallbackColor: i, outlineColorDark: a, outlineColorLight: o, linesDrawnAt: s, streamerId: c, deadDrawables: u } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, p.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: l,
                                            fallbackColor: i,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            linesDrawnAt: s,
                                            deadDrawables: u
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, m.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: l,
                                            fallbackColor: i,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            streamerId: c,
                                            deadDrawables: u
                                        });
                                }
                            })({
                                drawable: e,
                                context: h,
                                canvasWidth: v,
                                canvasHeight: g,
                                fallbackColor: r,
                                outlineColorDark: o,
                                outlineColorLight: u,
                                linesDrawnAt: l,
                                deadDrawables: b,
                                streamerId: i
                            });
                        }),
                            b.length > 0 && (0, c.fW)(b, i);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: b,
                        linesDrawnAt: O,
                        streamerId: t,
                        outlineColorDark: y,
                        outlineColorLight: E,
                        channelId: g
                    });
            },
            [e, g, b, y, E]
        );
    r.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: r, height: l } = t.getBoundingClientRect();
            (t.width = r * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), j(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, j, n]);
    let x = r.useCallback(() => {
        let t = u.Z.getDrawables(n),
            r = m.U.getState().particles,
            l = t.length > 0 || Object.keys(r).length > 0;
        l && null == S.current._ref && (null == S.current._ref ? (j(n), S.current.start(v, () => j(n))) : l || null == S.current._ref || (S.current.stop(), (0, f.UN)(e)));
    }, [e, j, n]);
    r.useEffect(() => {
        let e = S.current;
        return (
            u.Z.addChangeListener(x),
            x(),
            (0, o.vM)(t.getAvatarURL(null, h.Ks)),
            () => {
                u.Z.removeChangeListener(x), e.stop();
            }
        );
    });
}
