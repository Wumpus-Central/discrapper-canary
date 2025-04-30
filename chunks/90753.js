n.d(t, { Z: () => v }), n(539854);
var r = n(192379),
    l = n(846519),
    i = n(692547),
    a = n(481060),
    o = n(220082),
    s = n(979651),
    u = n(125268),
    c = n(673125),
    d = n(984063),
    f = n(88315),
    m = n(262433),
    p = n(400321),
    E = n(813900);
let g = 1000 / 60;
function v(e, t, n, v) {
    let h = (0, a.dQu)(i.Z.unsafe_rawColors.BRAND_500).hex(),
        S = (0, a.dQu)(i.Z.unsafe_rawColors.BLACK_500).hex(),
        b = (0, a.dQu)(i.Z.unsafe_rawColors.WHITE_500).hex(),
        y = r.useRef({}),
        O = r.useRef(new l.Xp()),
        Z = r.useCallback(
            (t) => {
                let n = c.Z.getDrawables(t);
                (0, f.UN)(e),
                    (function (e) {
                        let { canvasRef: t, drawables: n, fallbackColor: r, linesDrawnAt: l, streamerId: i, channelId: a, outlineColorDark: o, outlineColorLight: c } = e;
                        if (0 === n.length) return;
                        let f = t.current;
                        if (null == f) return;
                        let E = f.getContext('2d');
                        if (null == E) return;
                        let { width: g, height: v } = f.getBoundingClientRect(),
                            h = [];
                        n.forEach((e) => {
                            if (null == s.Z.getVoiceStateForChannel(a, e.userId)) return void h.push(e);
                            !(function (e) {
                                let { drawable: t, context: n, canvasWidth: r, canvasHeight: l, fallbackColor: i, outlineColorDark: a, outlineColorLight: o, linesDrawnAt: s, streamerId: u, deadDrawables: c } = e;
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
                                            outlineColorLight: o,
                                            streamerId: u,
                                            deadDrawables: c
                                        });
                                }
                            })({
                                drawable: e,
                                context: E,
                                canvasWidth: g,
                                canvasHeight: v,
                                fallbackColor: r,
                                outlineColorDark: o,
                                outlineColorLight: c,
                                linesDrawnAt: l,
                                deadDrawables: h,
                                streamerId: i
                            });
                        }),
                            h.length > 0 && (0, u.fW)(h, i);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: h,
                        linesDrawnAt: y,
                        streamerId: t,
                        outlineColorDark: S,
                        outlineColorLight: b,
                        channelId: v
                    });
            },
            [e, v, h, S, b]
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
            r = m.U.getState().particles,
            l = t.length > 0 || Object.keys(r).length > 0;
        l && null == O.current._ref && (null == O.current._ref ? (Z(n), O.current.start(g, () => Z(n))) : l || null == O.current._ref || (O.current.stop(), (0, f.UN)(e)));
    }, [e, Z, n]);
    r.useEffect(() => {
        let e = O.current;
        return (
            c.Z.addChangeListener(j),
            j(),
            (0, o.vM)(t.getAvatarURL(null, E.Ks)),
            () => {
                c.Z.removeChangeListener(j), e.stop();
            }
        );
    });
}
