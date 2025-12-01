n.d(t, { Z: () => S }), n(290780);
var r = n(54381),
    i = n(473749),
    a = n(780384),
    o = n(481060),
    s = n(197344),
    l = n(526167),
    c = n(70097),
    u = n(981631),
    d = n(73117),
    f = n(988868),
    p = n(554355),
    _ = n(991989),
    m = n(787462),
    h = n(635507),
    g = n(470794),
    E = n(886777);
function b(e) {
    let {
            movDark: t = d,
            movLight: n = m,
            mp4Dark: i = f,
            mp4Light: a = h,
            pngDark: o = p,
            pngLight: s = g,
            webmDark: c = _,
            webmLight: b = E,
        } = e,
        y = (0, l.vu)(),
        O = [
            (0, r.jsx)(
                "source",
                {
                    src: i,
                    type: "video/mp4",
                },
                "mp4",
            ),
            (0, r.jsx)(
                "img",
                {
                    alt: "",
                    src: o,
                },
                "png",
            ),
        ],
        v = [
            (0, r.jsx)(
                "source",
                {
                    src: a,
                    type: "video/mp4",
                },
                "mp4",
            ),
            (0, r.jsx)(
                "img",
                {
                    alt: "",
                    src: s,
                },
                "png",
            ),
        ];
    return (
        (y > 52 || -1 === y) &&
            (O.unshift(
                (0, r.jsx)(
                    "source",
                    {
                        src: c,
                        type: "video/webm",
                    },
                    "webm",
                ),
            ),
            v.unshift(
                (0, r.jsx)(
                    "source",
                    {
                        src: b,
                        type: "video/webm",
                    },
                    "webm",
                ),
            )),
        (0, l.rO)() &&
            (O.unshift(
                (0, r.jsx)(
                    "source",
                    {
                        src: t,
                        type: "video/mp4",
                    },
                    "hevc",
                ),
            ),
            v.unshift(
                (0, r.jsx)(
                    "source",
                    {
                        src: n,
                        type: "video/mp4",
                    },
                    "hevc",
                ),
            )),
        {
            [u.BRd.DARK]: O,
            [u.BRd.LIGHT]: v,
        }
    );
}
let y = s.Z.getAppSpinnerSources(),
    O = null != y ? b(y) : null,
    v = b({}),
    S = (e) => {
        var t;
        let { loop: n = !0, autoPlay: s = !0, setRef: l, className: d, onReady: f } = e,
            { theme: p } = (0, o.TCT)(),
            { reducedMotion: _ } = i.useContext(o.Sfi),
            m = v;
        null != O && (m = O);
        let h = null != (t = m[(0, a.wj)(p) ? u.BRd.DARK : u.BRd.LIGHT]) ? t : m[u.BRd.DARK];
        return (0, r.jsx)(
            c.Z,
            {
                ref: l,
                onLoadedData: f,
                className: d,
                loop: !_.enabled && n,
                autoPlay: !_.enabled && s,
                playsInline: !0,
                "data-testid": "app-spinner",
                children: h,
            },
            p,
        );
    };
