n.d(t, { Z: () => I }), n(290780);
var r = n(255367),
    i = n(73800),
    a = n(780384),
    o = n(481060),
    s = n(197344),
    l = n(526167),
    c = n(70097),
    u = n(981631),
    d = n(73117),
    _ = n(988868),
    f = n(554355),
    p = n(991989),
    h = n(787462),
    m = n(635507),
    g = n(470794),
    E = n(886777);
function b(e) {
    let { movDark: t = d, movLight: n = h, mp4Dark: i = _, mp4Light: a = m, pngDark: o = f, pngLight: s = g, webmDark: c = p, webmLight: b = E } = e,
        y = (0, l.vu)(),
        O = [
            (0, r.jsx)(
                'source',
                {
                    src: i,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    src: o
                },
                'png'
            )
        ],
        v = [
            (0, r.jsx)(
                'source',
                {
                    src: a,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, r.jsx)(
                'img',
                {
                    alt: '',
                    src: s
                },
                'png'
            )
        ];
    return (
        (y > 52 || -1 === y) &&
            (O.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: c,
                        type: 'video/webm'
                    },
                    'webm'
                )
            ),
            v.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: b,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, l.rO)() &&
            (O.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: t,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            ),
            v.unshift(
                (0, r.jsx)(
                    'source',
                    {
                        src: n,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            )),
        {
            [u.BRd.DARK]: O,
            [u.BRd.LIGHT]: v
        }
    );
}
let y = s.Z.getAppSpinnerSources(),
    O = null != y ? b(y) : null,
    v = b({}),
    I = (e) => {
        var t;
        let { loop: n = !0, autoPlay: s = !0, setRef: l, className: d, onReady: _ } = e,
            { theme: f } = (0, o.TCT)(),
            { reducedMotion: p } = i.useContext(o.Sfi),
            h = v;
        null != O && (h = O);
        let m = null != (t = h[(0, a.wj)(f) ? u.BRd.DARK : u.BRd.LIGHT]) ? t : h[u.BRd.DARK];
        return (0, r.jsx)(
            c.Z,
            {
                ref: l,
                onLoadedData: _,
                className: d,
                loop: !p.enabled && n,
                autoPlay: !p.enabled && s,
                playsInline: !0,
                'data-testid': 'app-spinner',
                children: m
            },
            f
        );
    };
