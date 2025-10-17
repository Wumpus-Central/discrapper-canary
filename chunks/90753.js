n.d(t, { Z: () => E }), n(539854);
var r = n(647438),
    i = n(846519),
    l = n(692547),
    a = n(481060),
    o = n(220082),
    c = n(979651),
    s = n(125268),
    u = n(673125),
    d = n(984063),
    f = n(88315),
    p = n(262433),
    _ = n(400321),
    m = n(813900);
let g = 1000 / 60;
function E(e, t, n, E) {
    let b = (0, a.dQu)(l.Z.unsafe_rawColors.BRAND_500).hex(),
        v = (0, a.dQu)(l.Z.unsafe_rawColors.BLACK_500).hex(),
        h = (0, a.dQu)(l.Z.unsafe_rawColors.WHITE_500).hex(),
        S = r.useRef({}),
        y = r.useRef(new i.Xp()),
        O = r.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, f.UN)(e),
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
                        let f = t.current;
                        if (null == f) return;
                        let m = f.getContext("2d");
                        if (null == m) return;
                        let { width: g, height: E } = f.getBoundingClientRect(),
                            b = [];
                        n.forEach((e) => {
                            if (null == c.Z.getVoiceStateForChannel(a, e.userId)) return void b.push(e);
                            !(function (e) {
                                let {
                                    drawable: t,
                                    context: n,
                                    canvasWidth: r,
                                    canvasHeight: i,
                                    fallbackColor: l,
                                    outlineColorDark: a,
                                    outlineColorLight: o,
                                    linesDrawnAt: c,
                                    streamerId: s,
                                    deadDrawables: u,
                                } = e;
                                switch (t.type) {
                                    case d.W.LINE:
                                        return (0, _.Z)({
                                            line: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: i,
                                            fallbackColor: l,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            linesDrawnAt: c,
                                            deadDrawables: u,
                                        });
                                    case d.W.EMOJI_HOSE:
                                        return (0, p.Z)({
                                            emojiHose: t,
                                            context: n,
                                            canvasWidth: r,
                                            canvasHeight: i,
                                            fallbackColor: l,
                                            outlineColorDark: a,
                                            outlineColorLight: o,
                                            streamerId: s,
                                            deadDrawables: u,
                                        });
                                }
                            })({
                                drawable: e,
                                context: m,
                                canvasWidth: g,
                                canvasHeight: E,
                                fallbackColor: r,
                                outlineColorDark: o,
                                outlineColorLight: u,
                                linesDrawnAt: i,
                                deadDrawables: b,
                                streamerId: l,
                            });
                        }),
                            b.length > 0 && (0, s.fW)(b, l);
                    })({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: b,
                        linesDrawnAt: S,
                        streamerId: t,
                        outlineColorDark: v,
                        outlineColorLight: h,
                        channelId: E,
                    });
            },
            [e, E, b, v, h],
        );
    r.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: r, height: i } = t.getBoundingClientRect();
            (t.width = r * window.devicePixelRatio), (t.height = i * window.devicePixelRatio), O(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, O, n]);
    let I = r.useCallback(() => {
        let t = u.Z.getDrawables(n),
            r = p.U.getState().particles,
            i = t.length > 0 || Object.keys(r).length > 0;
        i &&
            null == y.current._ref &&
            (null == y.current._ref
                ? (O(n), y.current.start(g, () => O(n)))
                : i || null == y.current._ref || (y.current.stop(), (0, f.UN)(e)));
    }, [e, O, n]);
    r.useEffect(() => {
        let e = y.current;
        return (
            u.Z.addChangeListener(I),
            I(),
            (0, o.vM)(t.getAvatarURL(null, m.Ks)),
            () => {
                u.Z.removeChangeListener(I), e.stop();
            }
        );
    });
}
