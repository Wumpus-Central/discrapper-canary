n.d(t, { A: () => m }), n(667532);
var i = n(627968),
    r = n(64700),
    a = n(462887),
    l = n(38021),
    s = n(844222),
    o = n(552122),
    u = n(676279),
    _ = n(607470),
    E = n(652215),
    A = n(40180),
    c = n(770359),
    d = n(986208),
    I = n(609069),
    T = n(460860),
    N = n(734607),
    S = n(724875),
    p = n(540085);
function O(e) {
    let {
            movDark: t = A,
            movLight: n = T,
            mp4Dark: r = c,
            mp4Light: a = N,
            pngDark: l = d,
            pngLight: s = S,
            webmDark: o = I,
            webmLight: _ = p,
        } = e,
        O = (0, u.Z5)(),
        C = [(0, i.jsx)("source", { src: r, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: l }, "png")],
        g = [(0, i.jsx)("source", { src: a, type: "video/mp4" }, "mp4"), (0, i.jsx)("img", { alt: "", src: s }, "png")];
    return (
        (O > 52 || -1 === O) &&
            (C.unshift((0, i.jsx)("source", { src: o, type: "video/webm" }, "webm")),
            g.unshift((0, i.jsx)("source", { src: _, type: "video/webm" }, "webm"))),
        (0, u.TM)() &&
            (C.unshift((0, i.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            g.unshift((0, i.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [E.NJ8.DARK]: C, [E.NJ8.LIGHT]: g }
    );
}
let C = o.A.getAppSpinnerSources(),
    g = null != C ? O(C) : null,
    R = O({}),
    m = (e) => {
        let { loop: t = !0, autoPlay: n = !0, setRef: o, className: u, onReady: A } = e,
            { theme: c } = (0, l.wR)(),
            { reducedMotion: d } = r.useContext(s.C),
            I = R;
        null != g && (I = g);
        let T = I[(0, a.M)(c) ? E.NJ8.DARK : E.NJ8.LIGHT] ?? I[E.NJ8.DARK];
        return (0, i.jsx)(
            _.A,
            {
                ref: o,
                onLoadedData: A,
                className: u,
                loop: !d.enabled && t,
                autoPlay: !d.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: T,
            },
            c,
        );
    };
