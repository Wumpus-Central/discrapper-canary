"use strict";
n.d(t, { A: () => S }), n(667532);
var r = n(627968),
    i = n(64700),
    a = n(582754),
    s = n(397927),
    o = n(552122),
    l = n(676279),
    u = n(607470),
    c = n(652215),
    d = n(40180),
    _ = n(770359),
    f = n(763827),
    p = n(609069),
    h = n(460860),
    m = n(734607),
    g = n(724875),
    E = n(540085);
function A(e) {
    let {
            movDark: t = d,
            movLight: n = h,
            mp4Dark: i = _,
            mp4Light: a = m,
            pngDark: s = f,
            pngLight: o = g,
            webmDark: u = p,
            webmLight: A = E,
        } = e,
        I = (0, l.Z5)(),
        T = [(0, r.jsx)("source", { src: i, type: "video/mp4" }, "mp4"), (0, r.jsx)("img", { alt: "", src: s }, "png")],
        y = [(0, r.jsx)("source", { src: a, type: "video/mp4" }, "mp4"), (0, r.jsx)("img", { alt: "", src: o }, "png")];
    return (
        (I > 52 || -1 === I) &&
            (T.unshift((0, r.jsx)("source", { src: u, type: "video/webm" }, "webm")),
            y.unshift((0, r.jsx)("source", { src: A, type: "video/webm" }, "webm"))),
        (0, l.TM)() &&
            (T.unshift((0, r.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            y.unshift((0, r.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [c.NJ8.DARK]: T, [c.NJ8.LIGHT]: y }
    );
}
let I = o.A.getAppSpinnerSources(),
    T = null != I ? A(I) : null,
    y = A({}),
    S = (e) => {
        let { loop: t = !0, autoPlay: n = !0, setRef: o, className: l, onReady: d } = e,
            { theme: _ } = (0, s.wRf)(),
            { reducedMotion: f } = i.useContext(s.CZY),
            p = y;
        null != T && (p = T);
        let h = p[(0, a.Mw)(_) ? c.NJ8.DARK : c.NJ8.LIGHT] ?? p[c.NJ8.DARK];
        return (0, r.jsx)(
            u.A,
            {
                ref: o,
                onLoadedData: d,
                className: l,
                loop: !f.enabled && t,
                autoPlay: !f.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: h,
            },
            _,
        );
    };
