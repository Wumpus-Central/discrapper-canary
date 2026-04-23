n.d(t, { J: () => f, q: () => S });
var i = n(627968),
    s = n(64700),
    l = n(452027),
    a = n(292666),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    u = n(92469),
    c = n(796221),
    g = n(236160),
    m = n(146925),
    _ = n(560830),
    A = n(245049),
    h = n(42126),
    p = n(813587),
    x = n(331959),
    E = n(30606),
    T = n(985018);
function S(e) {
    let { label: t, description: n, placeholder: r, overrideId: o, setOverride: d, fetchOverride: u } = e,
        [c, g] = s.useState(o ?? ""),
        m = s.useRef(null),
        [_, A] = s.useState(0),
        h = () => {
            null != m.current && (clearTimeout(m.current), (m.current = null));
        };
    return (
        s.useEffect(() => h, []),
        (0, i.jsx)(l.D, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, i.jsx)(a.k, {
                placeholder: r,
                error: 2 === _ ? "Failed to fetch override" : void 0,
                successMessage: 3 === _ ? "Override applied" : void 0,
                value: c,
                onChange: (e) => {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((g(e), h(), 0 === e.length)) {
                            A(0), d(null);
                            return;
                        }
                        m.current = setTimeout(() => {
                            A(1),
                                u(e).then((t) => {
                                    A(null == t ? 2 : 3), null != t && d(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let f = (0, r.zZ)(d.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [x.U, E.l, g.B, m.q, A.g, u.Y, p.s, _.t, h.T, c.s],
    useInlineNotice: () => ({
        type: o.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => T.intl.format(T.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
    }),
});
