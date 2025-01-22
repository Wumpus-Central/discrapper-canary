var i = r(733860);
var a = r(200651),
    o = r(192379),
    s = r(780384),
    l = r(481060),
    u = r(197344),
    c = r(526167),
    d = r(70097),
    f = r(981631),
    p = r(73117),
    h = r(988868),
    _ = r(554355),
    m = r(991989),
    g = r(787462),
    E = r(635507),
    v = r(470794),
    y = r(886777);
function b(e) {
    let { movDark: n = p, movLight: r = g, mp4Dark: i = h, mp4Light: o = E, pngDark: s = _, pngLight: l = v, webmDark: u = m, webmLight: d = y } = e,
        b = (0, c.vu)(),
        I = [
            (0, a.jsx)(
                'source',
                {
                    src: i,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, a.jsx)(
                'img',
                {
                    alt: '',
                    src: s
                },
                'png'
            )
        ],
        T = [
            (0, a.jsx)(
                'source',
                {
                    src: o,
                    type: 'video/mp4'
                },
                'mp4'
            ),
            (0, a.jsx)(
                'img',
                {
                    alt: '',
                    src: l
                },
                'png'
            )
        ];
    return (
        (b > 52 || -1 === b) &&
            (I.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: u,
                        type: 'video/webm'
                    },
                    'webm'
                )
            ),
            T.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: d,
                        type: 'video/webm'
                    },
                    'webm'
                )
            )),
        (0, c.rO)() &&
            (I.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: n,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            ),
            T.unshift(
                (0, a.jsx)(
                    'source',
                    {
                        src: r,
                        type: 'video/mp4'
                    },
                    'hevc'
                )
            )),
        {
            [f.BRd.DARK]: I,
            [f.BRd.LIGHT]: T
        }
    );
}
let I = u.Z.getAppSpinnerSources(),
    T = null != I ? b(I) : null,
    S = b({}),
    A = (e) => {
        var n;
        let { loop: r = !0, autoPlay: i = !0, setRef: u, className: c, onReady: p } = e,
            { theme: h } = (0, l.useThemeContext)(),
            { reducedMotion: _ } = o.useContext(l.AccessibilityPreferencesContext),
            m = S;
        null != T && (m = T);
        let g = null !== (n = m[(0, s.wj)(h) ? f.BRd.DARK : f.BRd.LIGHT]) && void 0 !== n ? n : m[f.BRd.DARK];
        return (0, a.jsx)(
            d.Z,
            {
                ref: u,
                onLoadedData: p,
                className: c,
                loop: !_.enabled && r,
                autoPlay: !_.enabled && i,
                playsInline: !0,
                'data-testid': 'app-spinner',
                children: g
            },
            h
        );
    };
n.Z = A;
