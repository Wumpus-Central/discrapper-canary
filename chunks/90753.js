n.d(t, { Z: () => h }), n(539854);
var r = n(73800),
    l = n(846519),
    i = n(692547),
    a = n(481060),
    o = n(220082),
    u = n(979651),
    s = n(125268),
    c = n(673125),
    d = n(984063),
    f = n(88315),
    p = n(262433),
    m = n(400321),
    g = n(813900);
let E = 1000 / 60;
function h(e, t, n, h) {
    let v = (0, a.dQu)(i.Z.unsafe_rawColors.BRAND_500).hex(),
        S = (0, a.dQu)(i.Z.unsafe_rawColors.BLACK_500).hex(),
        b = (0, a.dQu)(i.Z.unsafe_rawColors.WHITE_500).hex(),
        O = r.useRef({}),
        y = r.useRef(new l.Xp()),
        Z = r.useCallback(
            (t) => {
                let n = c.Z.getDrawables(t);
                (0, f.UN)(e),
                    (function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: r, linesDrawnAt: l, streamerId: i, channelId: a, outlineColorDark: o, outlineColorLight: c } = e;
                        if (0 === n.length) return;
                        let f = t.current;
                        if (null == f) return;
                        let g = f.getContext('2d');
                        if (null == g) return;
                        let { width: E, height: h } = f.getBoundingClientRect(),
                            v = [];
                        n.forEach((e) => {
                            if (null == u.Z.getVoiceStateForChannel(a, e.userId)) return void v.push(e);
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: r, canvasHeight: l, fallbackColor: i, outlineColorDark: a, outlineColorLight: o, linesDrawnAt: u, streamerId: s, deadDrawables: c } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, m.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: l,
                                            fallbackColor: i,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            linesDrawnAt: u,
                                            deadDrawables: c
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, p.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: l,
                                            fallbackColor: i,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            streamerId: s,
                                            deadDrawables: c
                                        });
                                }
                            })({
                                drawable: e,
                                context: g,
                                canvasWidth: E,
                                canvasHeight: h,
                                fallbackColor: r,
                                outlineColorDark: o,
                                outlineColorLight: c,
                                linesDrawnAt: l,
                                deadDrawables: v,
                                streamerId: i
                            });
                        }),
                            v.length > 0 && (0, s.fW)(v, i);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: v,
                        linesDrawnAt: O,
                        streamerId: t,
                        outlineColorDark: S,
                        outlineColorLight: b,
                        channelId: h
                    });
            },
            [e, h, v, S, b]
        );
    r.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: r, height: l } = t.getBoundingClientRect();
            (t.width = r * window.devicePixelRatio), (t.height = l * window.devicePixelRatio), Z(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, Z, n]);
    let j = r.useCallback(() => {
        let t = c.Z.getDrawables(n),
            r = p.U.getState().particles,
            l = t.length > 0 || Object.keys(r).length > 0;
        l && null == y.current._ref && (null == y.current._ref ? (Z(n), y.current.start(E, () => Z(n))) : l || null == y.current._ref || (y.current.stop(), (0, f.UN)(e)));
    }, [e, Z, n]);
    r.useEffect(() => {
        let e = y.current;
        return (
            c.Z.addChangeListener(j),
            j(),
            (0, o.vM)(t.getAvatarURL(null, g.Ks)),
            () => {
                c.Z.removeChangeListener(j), e.stop();
            }
        );
    });
}
