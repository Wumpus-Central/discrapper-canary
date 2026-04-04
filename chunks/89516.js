n.d(t, { J: () => S, q: () => f });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(92469),
    c = n(796221),
    u = n(236160),
    m = n(146925),
    g = n(560830),
    _ = n(245049),
    x = n(42126),
    A = n(813587),
    h = n(331959),
    p = n(30606),
    T = n(985018);
function f(e) {
    let { label: t, description: n, placeholder: a, overrideId: r, setOverride: o, fetchOverride: d } = e,
        [c, u] = s.useState(r ?? ""),
        m = s.useRef(null),
        [g, _] = s.useState(0),
        x = () => {
            null != m.current && (clearTimeout(m.current), (m.current = null));
        };
    return (
        s.useEffect(() => x, []),
        (0, i.jsx)(l.D0$, {
            layout: "horizontal-responsive",
            label: t,
            description: n,
            children: (0, i.jsx)(l.ksK, {
                placeholder: a,
                error: 2 === g ? "Failed to fetch override" : void 0,
                successMessage: 3 === g ? "Override applied" : void 0,
                value: c,
                onChange: (e) => {
                    if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                        if ((u(e), x(), 0 === e.length)) {
                            _(0), o(null);
                            return;
                        }
                        m.current = setTimeout(() => {
                            _(1),
                                d(e).then((t) => {
                                    _(null == t ? 2 : 3), null != t && o(e);
                                });
                        }, 500);
                    }
                },
                clearable: !0,
            }),
        })
    );
}
let S = (0, a.zZ)(o.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [h.U, p.l, u.B, m.q, _.g, d.Y, A.s, g.t, x.T, c.s],
    useInlineNotice: () => ({
        type: r.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => T.intl.format(T.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
    }),
});
