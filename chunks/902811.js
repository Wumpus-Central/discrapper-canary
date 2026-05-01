n.d(t, { A: () => M }), n(667532);
var i = n(627968),
    r = n(64700),
    a = n(462887),
    l = n(38021),
    s = n(844222),
    E = n(552122),
    _ = n(676279),
    o = n(607470),
    u = n(652215),
    A = n(40180),
    d = n(770359),
    c = n(986208),
    I = n(609069),
    T = n(460860),
    N = n(734607),
    S = n(724875),
    O = n(540085);
function C(e) {
    let {
            movDark: t = A,
            movLight: n = T,
            mp4Dark: r = d,
            mp4Light: a = N,
            pngDark: l = c,
            pngLight: s = S,
            webmDark: E = I,
            webmLight: o = O,
        } = e,
        C = (0, _.Z5)(),
        p = [(0, i.jsx)("source", { src: r, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: l }, "png")],
        R = [(0, i.jsx)("source", { src: a, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: s }, "png")];
    return (
        (C > 52 || -1 === C) &&
            (p.unshift((0, i.jsx)("source", { src: E, type: "video/webm" }, "webm")),
            R.unshift((0, i.jsx)("source", { src: o, type: "video/webm" }, "webm"))),
        (0, _.TM)() &&
            (p.unshift((0, i.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            R.unshift((0, i.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [u.NJ8.DARK]: p, [u.NJ8.LIGHT]: R }
    );
}
let p = E.A.getAppSpinnerSources(),
    R = null != p ? C(p) : null,
    g = C({}),
    M = (e) => {
        let { loop: t = !0, autoPlay: n = !0, setRef: E, className: _, onReady: A } = e,
            { theme: d } = (0, l.wR)(),
            { reducedMotion: c } = r.useContext(s.C),
            I = g;
        null != R && (I = R);
        let T = I[(0, a.M)(d) ? u.NJ8.DARK : u.NJ8.LIGHT] ?? I[u.NJ8.DARK];
        return (0, i.jsx)(
            o.A,
            {
                ref: E,
                onLoadedData: A,
                className: _,
                loop: !c.enabled && t,
                autoPlay: !c.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: T,
            },
            d,
        );
    };
