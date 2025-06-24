n.d(t, { Z: () => h }), n(539854);
var r = n(73800),
    l = n(846519),
    i = n(692547),
    a = n(481060),
    u = n(220082),
    o = n(979651),
    s = n(125268),
    c = n(673125),
    d = n(984063),
    f = n(88315),
    m = n(262433),
    p = n(400321),
    E = n(813900);
let g = 1000 / 60;
function h(e, t, n, h) {
    let S = (0, a.dQu)(i.Z.unsafe_rawColors.BRAND_500).hex(),
        O = (0, a.dQu)(i.Z.unsafe_rawColors.BLACK_500).hex(),
        v = (0, a.dQu)(i.Z.unsafe_rawColors.WHITE_500).hex(),
        b = r.useRef({}),
        I = r.useRef(new l.Xp()),
        _ = r.useCallback(
            (t) => {
                let n = c.Z.getDrawables(t);
                (0, f.UN)(e),
                    (function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: r, linesDrawnAt: l, streamerId: i, channelId: a, outlineColorDark: u, outlineColorLight: c } = e;
                        if (0 === n.length) return;
                        let f = t.current;
                        if (null == f) return;
                        let E = f.getContext('2d');
                        if (null == E) return;
                        let { width: g, height: h } = f.getBoundingClientRect(),
                            S = [];
                        n.forEach((e) => {
                            if (null == o.Z.getVoiceStateForChannel(a, e.userId)) return void S.push(e);
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: r, canvasHeight: l, fallbackColor: i, outlineColorDark: a, outlineColorLight: u, linesDrawnAt: o, streamerId: s, deadDrawables: c } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, p.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: l,
                                            fallbackColor: i,
                                            outlineColorDark: a,
                                            outlineColorLight: u,
                                            linesDrawnAt: o,
                                            deadDrawables: c
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, m.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: l,
                                            fallbackColor: i,
                                            outlineColorDark: a,
                                            outlineColorLight: u,
                                            streamerId: s,
                                            deadDrawables: c
                                        });
                                }
                            })({
                                drawable: e,
                                context: E,
                                canvasWidth: g,
                                canvasHeight: h,
                                fallbackColor: r,
                                outlineColorDark: u,
                                outlineColorLight: c,
                                linesDrawnAt: l,
                                deadDrawables: S,
                                streamerId: i
                            });
                        }),
                            S.length > 0 && (0, s.fW)(S, i);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: S,
                        linesDrawnAt: b,
                        streamerId: t,
                        outlineColorDark: O,
                        outlineColorLight: v,
                        channelId: h
                    });
            },
            [e, h, S, O, v]
        );
    r.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: r, height: l } = t.getBoundingClientRect();
            (t.width = r * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), _(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, _, n]);
    let y = r.useCallback(() => {
        let t = c.Z.getDrawables(n),
            r = m.U.getState().particles,
            l = t.length > 0 || Object.keys(r).length > 0;
        l && null == I.current._ref && (null == I.current._ref ? (_(n), I.current.start(g, () => _(n))) : l || null == I.current._ref || (I.current.stop(), (0, f.UN)(e)));
    }, [e, _, n]);
    r.useEffect(() => {
        let e = I.current;
        return (
            c.Z.addChangeListener(y),
            y(),
            (0, u.vM)(t.getAvatarURL(null, E.Ks)),
            () => {
                c.Z.removeChangeListener(y), e.stop();
            }
        );
    });
}
