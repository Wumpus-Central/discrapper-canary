n.d(t, { Z: () => T }), n(733860);
var i = n(200651),
    r = n(192379),
    a = n(780384),
    s = n(481060),
    o = n(197344),
    l = n(526167),
    u = n(70097),
    c = n(981631),
    d = n(73117),
    f = n(988868),
    _ = n(554355),
    p = n(991989),
    h = n(787462),
    m = n(635507),
    g = n(470794),
    E = n(886777);
function v(e) {
    let { movDark: t = d, movLight: n = h, mp4Dark: r = f, mp4Light: a = m, pngDark: s = _, pngLight: o = g, webmDark: u = p, webmLight: v = E } = e,
        y = (0, l.vu)(),
        I = [
            (0, i.jsx)(
                'source',
                {
                    src: r,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, i.jsx)(
                'img',
                {
                    alt: '',
                    src: s
                },
                'png'
            )
        ],
        b = [
            (0, i.jsx)(
                'source',
                {
                    src: a,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, i.jsx)(
                'img',
                {
                    alt: '',
                    src: o
                },
                'png'
            )
        ];
    return (
        (y > 52 || -1 === y) &&
            (I.unshift(
                (0, i.jsx)(
                    'source',
                    {
                        src: u,
                        type: 'video/webm'
                    },
                    'webm'
                )
            ),
            b.unshift(
                (0, i.jsx)(
                    'source',
                    {
                        src: v,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, l.rO)() &&
            (I.unshift(
                (0, i.jsx)(
                    'source',
                    {
                        src: t,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            ),
            b.unshift(
                (0, i.jsx)(
                    'source',
                    {
                        src: n,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            )),
        {
            [c.BRd.DARK]: I,
            [c.BRd.LIGHT]: b
        }
    );
}
let y = o.Z.getAppSpinnerSources(),
    I = null != y ? v(y) : null,
    b = v({}),
    T = (e) => {
        var t;
        let { loop: n = !0, autoPlay: o = !0, setRef: l, className: d, onReady: f } = e,
            { theme: _ } = (0, s.TCT)(),
            { reducedMotion: p } = r.useContext(s.Sfi),
            h = b;
        null != I && (h = I);
        let m = null !== (t = h[(0, a.wj)(_) ? c.BRd.DARK : c.BRd.LIGHT]) && void 0 !== t ? t : h[c.BRd.DARK];
        return (0, i.jsx)(
            u.Z,
            {
                ref: l,
                onLoadedData: f,
                className: d,
                loop: !p.enabled && n,
                autoPlay: !p.enabled && o,
                playsInline: !0,
                'data-testid': 'app-spinner',
                children: m
            },
            _
        );
    };
