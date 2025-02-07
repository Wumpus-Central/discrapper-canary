n.d(t, { Z: () => g }), n(653041);
var l = n(192379),
    i = n(846519),
    r = n(692547),
    a = n(481060),
    s = n(220082),
    o = n(979651),
    u = n(125268),
    c = n(673125),
    d = n(984063),
    m = n(88315),
    f = n(262433),
    h = n(400321),
    p = n(813900);
let v = 1000 / 60;
function g(e, t, n, g) {
    let E = (0, a.dQu)(r.Z.unsafe_rawColors.BRAND_500).hex(),
        x = (0, a.dQu)(r.Z.unsafe_rawColors.BLACK_500).hex(),
        Z = (0, a.dQu)(r.Z.unsafe_rawColors.WHITE_500).hex(),
        S = l.useRef({}),
        C = l.useRef(new i.Xp()),
        b = l.useCallback(
            (t) => {
                let n = c.Z.getDrawables(t);
                (0, m.UN)(e),
                    (function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: l, linesDrawnAt: i, streamerId: r, channelId: a, outlineColorDark: s, outlineColorLight: c } = e;
                        if (0 === n.length) return;
                        let m = t.current;
                        if (null == m) return;
                        let p = m.getContext('2d');
                        if (null == p) return;
                        let { width: v, height: g } = m.getBoundingClientRect(),
                            E = [];
                        n.forEach((e) => {
                            if (!(null != o.Z.getVoiceStateForChannel(a, e.userId))) {
                                E.push(e);
                                return;
                            }
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: l, canvasHeight: i, fallbackColor: r, outlineColorDark: a, outlineColorLight: s, linesDrawnAt: o, streamerId: u, deadDrawables: c } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, h.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: l,
                                            canvasHeight: i,
                                            fallbackColor: r,
                                            outlineColorDark: a,
                                            outlineColorLight: s,
                                            linesDrawnAt: o,
                                            deadDrawables: c
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, f.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: l,
                                            canvasHeight: i,
                                            fallbackColor: r,
                                            outlineColorDark: a,
                                            outlineColorLight: s,
                                            streamerId: u,
                                            deadDrawables: c
                                        });
                                }
                            })({
                                drawable: e,
                                context: p,
                                canvasWidth: v,
                                canvasHeight: g,
                                fallbackColor: l,
                                outlineColorDark: s,
                                outlineColorLight: c,
                                linesDrawnAt: i,
                                deadDrawables: E,
                                streamerId: r
                            });
                        }),
                            E.length > 0 && (0, u.fW)(E, r);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: E,
                        linesDrawnAt: S,
                        streamerId: t,
                        outlineColorDark: x,
                        outlineColorLight: Z,
                        channelId: g
                    });
            },
            [e, g, E, x, Z]
        );
    l.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: l, height: i } = t.getBoundingClientRect();
            (t.width = l * window.devicePixelRatio), (t.height = i * window.devicePixelRatio), b(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, b, n]);
    let I = l.useCallback(() => {
        let t = c.Z.getDrawables(n),
            l = f.U.getState().particles,
            i = t.length > 0 || Object.keys(l).length > 0;
        i && null == C.current._ref && (null == C.current._ref ? (b(n), C.current.start(v, () => b(n))) : i || null == C.current._ref || (C.current.stop(), (0, m.UN)(e)));
    }, [e, b, n]);
    l.useEffect(() => {
        let e = C.current;
        return (
            c.Z.addChangeListener(I),
            I(),
            (0, s.vM)(t.getAvatarURL(null, p.Ks)),
            () => {
                c.Z.removeChangeListener(I), e.stop();
            }
        );
    });
}
