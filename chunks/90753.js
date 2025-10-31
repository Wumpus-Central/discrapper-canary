n.d(t, { Z: () => b }), n(539854);
var r = n(647438),
    i = n(846519),
    l = n(692547),
    a = n(481060),
    o = n(220082),
    s = n(979651),
    c = n(125268),
    u = n(673125),
    d = n(984063),
    p = n(88315),
    f = n(262433),
    h = n(400321),
    m = n(813900);
let g = 1000 / 60;
function b(e, t, n, b) {
    let _ = (0, a.dQu)(l.Z.unsafe_rawColors.BRAND_500).hex(),
        y = (0, a.dQu)(l.Z.unsafe_rawColors.BLACK_500).hex(),
        C = (0, a.dQu)(l.Z.unsafe_rawColors.WHITE_500).hex(),
        v = r.useRef({}),
        O = r.useRef(new i.Xp()),
        x = r.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, p.UN)(e),
                    (function (e) {
                        let {
                            canvasRef: t,
                            drawables: n,
                            fallbackColor: r,
                            linesDrawnAt: i,
                            streamerId: l,
                            channelId: a,
                            outlineColorDark: o,
                            outlineColorLight: u,
                        } = e;
                        if (0 === n.length) return;
                        let p = t.current;
                        if (null == p) return;
                        let m = p.getContext("2d");
                        if (null == m) return;
                        let { width: g, height: b } = p.getBoundingClientRect(),
                            _ = [];
                        n.forEach((e) => {
                            if (null == s.Z.getVoiceStateForChannel(a, e.userId)) return void _.push(e);
                            !(function (e) {
                                let {
                                    drawable: t,
                                    context: n,
                                    canvasWidth: r,
                                    canvasHeight: i,
                                    fallbackColor: l,
                                    outlineColorDark: a,
                                    outlineColorLight: o,
                                    linesDrawnAt: s,
                                    streamerId: c,
                                    deadDrawables: u,
                                } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, h.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: i,
                                            fallbackColor: l,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            linesDrawnAt: s,
                                            deadDrawables: u,
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, f.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: i,
                                            fallbackColor: l,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            streamerId: c,
                                            deadDrawables: u,
                                        });
                                }
                            })({
                                drawable: e,
                                context: m,
                                canvasWidth: g,
                                canvasHeight: b,
                                fallbackColor: r,
                                outlineColorDark: o,
                                outlineColorLight: u,
                                linesDrawnAt: i,
                                deadDrawables: _,
                                streamerId: l,
                            });
                        }),
                            _.length > 0 && (0, c.fW)(_, l);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: _,
                        linesDrawnAt: v,
                        streamerId: t,
                        outlineColorDark: y,
                        outlineColorLight: C,
                        channelId: b,
                    });
            },
            [e, b, _, y, C],
        );
    r.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: r, height: i } = t.getBoundingClientRect();
            (t.width = r * window.devicePixelRatio), (t.height = i * window.devicePixelRatio), x(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, x, n]);
    let E = r.useCallback(() => {
        let t = u.Z.getDrawables(n),
            r = f.U.getState().particles,
            i = t.length > 0 || Object.keys(r).length > 0;
        i &&
            null == O.current._ref &&
            (null == O.current._ref
                ? (x(n), O.current.start(g, () => x(n)))
                : i || null == O.current._ref || (O.current.stop(), (0, p.UN)(e)));
    }, [e, x, n]);
    r.useEffect(() => {
        let e = O.current;
        return (
            u.Z.addChangeListener(E),
            E(),
            (0, o.vM)(t.getAvatarURL(null, m.Ks)),
            () => {
                u.Z.removeChangeListener(E), e.stop();
            }
        );
    });
}
