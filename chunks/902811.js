"use strict";
n.d(t, { A: () => N }), n(667532);
var r = n(627968),
    i = n(64700),
    s = n(462887),
    a = n(38021),
    o = n(844222),
    l = n(552122),
    u = n(676279),
    d = n(607470),
    c = n(652215),
    _ = n(40180),
    f = n(770359),
    E = n(763827),
    h = n(609069),
    p = n(460860),
    m = n(734607),
    g = n(724875),
    A = n(540085);
function I(e) {
    let {
            movDark: t = _,
            movLight: n = p,
            mp4Dark: i = f,
            mp4Light: s = m,
            pngDark: a = E,
            pngLight: o = g,
            webmDark: l = h,
            webmLight: d = A,
        } = e,
        I = (0, u.Z5)(),
        T = [(0, r.jsx)("source", { src: i, type: "video/mp4" }, "mp4"), (0, r.jsx)("img", { alt: "", src: a }, "png")],
        S = [(0, r.jsx)("source", { src: s, type: "video/mp4" }, "mp4"), (0, r.jsx)("img", { alt: "", src: o }, "png")];
    return (
        (I > 52 || -1 === I) &&
            (T.unshift((0, r.jsx)("source", { src: l, type: "video/webm" }, "webm")),
            S.unshift((0, r.jsx)("source", { src: d, type: "video/webm" }, "webm"))),
        (0, u.TM)() &&
            (T.unshift((0, r.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            S.unshift((0, r.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [c.NJ8.DARK]: T, [c.NJ8.LIGHT]: S }
    );
}
let T = l.A.getAppSpinnerSources(),
    S = null != T ? I(T) : null,
    y = I({}),
    N = (e) => {
        let { loop: t = !0, autoPlay: n = !0, setRef: l, className: u, onReady: _ } = e,
            { theme: f } = (0, a.wR)(),
            { reducedMotion: E } = i.useContext(o.C),
            h = y;
        null != S && (h = S);
        let p = h[(0, s.M)(f) ? c.NJ8.DARK : c.NJ8.LIGHT] ?? h[c.NJ8.DARK];
        return (0, r.jsx)(
            d.A,
            {
                ref: l,
                onLoadedData: _,
                className: u,
                loop: !E.enabled && t,
                autoPlay: !E.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: p,
            },
            f,
        );
    };
