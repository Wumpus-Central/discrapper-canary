n.d(t, { Z: () => b }), n(539854);
var r = n(73800),
    i = n(846519),
    o = n(692547),
    a = n(481060),
    s = n(220082),
    l = n(979651),
    c = n(125268),
    u = n(673125),
    d = n(984063),
    f = n(88315),
    _ = n(262433),
    p = n(400321),
    h = n(813900);
let m = 1000 / 60;
function g(e) {
    let {
        drawable: t,
        context: n,
        canvasWidth: r,
        canvasHeight: i,
        fallbackColor: o,
        outlineColorDark: a,
        outlineColorLight: s,
        linesDrawnAt: l,
        streamerId: c,
        deadDrawables: u,
    } = e;
    switch (t.type) {
        case d.W.LINE:
            return (0, p.Z)({
                line: t,
                context: n,
                canvasWidth: r,
                canvasHeight: i,
                fallbackColor: o,
                outlineColorDark: a,
                outlineColorLight: s,
                linesDrawnAt: l,
                deadDrawables: u,
            });
        case d.W.EMOJI_HOSE:
            return (0, _.Z)({
                emojiHose: t,
                context: n,
                canvasWidth: r,
                canvasHeight: i,
                fallbackColor: o,
                outlineColorDark: a,
                outlineColorLight: s,
                streamerId: c,
                deadDrawables: u,
            });
    }
}
function E(e) {
    let {
        canvasRef: t,
        drawables: n,
        fallbackColor: r,
        linesDrawnAt: i,
        streamerId: o,
        channelId: a,
        outlineColorDark: s,
        outlineColorLight: u,
    } = e;
    if (0 === n.length) return;
    let d = t.current;
    if (null == d) return;
    let f = d.getContext("2d");
    if (null == f) return;
    let { width: _, height: p } = d.getBoundingClientRect(),
        h = [];
    n.forEach((e) => {
        if (null == l.Z.getVoiceStateForChannel(a, e.userId)) return void h.push(e);
        g({
            drawable: e,
            context: f,
            canvasWidth: _,
            canvasHeight: p,
            fallbackColor: r,
            outlineColorDark: s,
            outlineColorLight: u,
            linesDrawnAt: i,
            deadDrawables: h,
            streamerId: o,
        });
    }),
        h.length > 0 && (0, c.fW)(h, o);
}
function b(e, t, n, l) {
    let c = (0, a.dQu)(o.Z.unsafe_rawColors.BRAND_500).hex(),
        d = (0, a.dQu)(o.Z.unsafe_rawColors.BLACK_500).hex(),
        p = (0, a.dQu)(o.Z.unsafe_rawColors.WHITE_500).hex(),
        g = r.useRef({}),
        b = r.useRef(new i.Xp()),
        y = r.useCallback(
            (t) => {
                let n = u.Z.getDrawables(t);
                (0, f.UN)(e),
                    E({
                        canvasRef: e,
                        drawables: n,
                        fallbackColor: c,
                        linesDrawnAt: g,
                        streamerId: t,
                        outlineColorDark: d,
                        outlineColorLight: p,
                        channelId: l,
                    });
            },
            [e, l, c, d, p],
        );
    r.useEffect(() => {
        let t = new ResizeObserver(() => {
            let t = e.current;
            if (null == t) return;
            let { width: r, height: i } = t.getBoundingClientRect();
            (t.width = r * window.devicePixelRatio), (t.height = i * window.devicePixelRatio), y(n);
        });
        return null != e.current && t.observe(e.current), () => t.disconnect();
    }, [e, y, n]);
    let O = r.useCallback(() => {
        let t = u.Z.getDrawables(n),
            r = _.U.getState().particles,
            i = t.length > 0 || Object.keys(r).length > 0;
        i &&
            null == b.current._ref &&
            (null == b.current._ref
                ? (y(n), b.current.start(m, () => y(n)))
                : i || null == b.current._ref || (b.current.stop(), (0, f.UN)(e)));
    }, [e, y, n]);
    r.useEffect(() => {
        let e = b.current;
        return (
            u.Z.addChangeListener(O),
            O(),
            (0, s.vM)(t.getAvatarURL(null, h.Ks)),
            () => {
                u.Z.removeChangeListener(O), e.stop();
            }
        );
    });
}
