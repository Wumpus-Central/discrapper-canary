"use strict";
n.d(t, { A: () => N }), n(667532);
var r = n(627968),
    i = n(64700),
    s = n(462887),
    a = n(38021),
    o = n(844222),
    l = n(552122),
    u = n(676279),
    c = n(607470),
    d = n(652215),
    _ = n(40180),
    f = n(770359),
    p = n(763827),
    h = n(609069),
    E = n(460860),
    m = n(734607),
    g = n(724875),
    A = n(540085);
function I(e) {
    let {
            movDark: t = _,
            movLight: n = E,
            mp4Dark: i = f,
            mp4Light: s = m,
            pngDark: a = p,
            pngLight: o = g,
            webmDark: l = h,
            webmLight: c = A,
        } = e,
        I = (0, u.Z5)(),
        T = [(0, r.jsx)("source", { src: i, type: "video/mp4" }, "mp4"), (0, r.jsx)("img", { alt: "", src: a }, "png")],
        S = [(0, r.jsx)("source", { src: s, type: "video/mp4" }, "mp4"), (0, r.jsx)("img", { alt: "", src: o }, "png")];
    return (
        (I > 52 || -1 === I) &&
            (T.unshift((0, r.jsx)("source", { src: l, type: "video/webm" }, "webm")),
            S.unshift((0, r.jsx)("source", { src: c, type: "video/webm" }, "webm"))),
        (0, u.TM)() &&
            (T.unshift((0, r.jsx)("source", { src: t, type: "video/mp4" }, "hevc")),
            S.unshift((0, r.jsx)("source", { src: n, type: "video/mp4" }, "hevc"))),
        { [d.NJ8.DARK]: T, [d.NJ8.LIGHT]: S }
    );
}
let T = l.A.getAppSpinnerSources(),
    S = null != T ? I(T) : null,
    y = I({}),
    N = (e) => {
        let { loop: t = !0, autoPlay: n = !0, setRef: l, className: u, onReady: _ } = e,
            { theme: f } = (0, a.wR)(),
            { reducedMotion: p } = i.useContext(o.C),
            h = y;
        null != S && (h = S);
        let E = h[(0, s.M)(f) ? d.NJ8.DARK : d.NJ8.LIGHT] ?? h[d.NJ8.DARK];
        return (0, r.jsx)(
            c.A,
            {
                ref: l,
                onLoadedData: _,
                className: u,
                loop: !p.enabled && t,
                autoPlay: !p.enabled && n,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: E,
            },
            f,
        );
    };
