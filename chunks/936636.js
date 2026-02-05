i.d(t, { A: () => h }), i(321073);
var l = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    r = i(808380),
    c = i(934551),
    o = i(990078),
    d = i(985018),
    u = i(851822);
let m = [r.Y.DESKTOP, r.Y.XBOX, r.Y.PLAYSTATION, r.Y.NINTENDO];
function x(e) {
    let { platform: t, ...i } = e;
    switch (t) {
        case r.Y.DESKTOP:
            return (0, l.jsx)(c.ScreenIcon, { size: "xs", ...i });
        case r.Y.XBOX:
            return (0, l.jsx)(c.XboxNeutralIcon, { size: "xs", ...i });
        case r.Y.PLAYSTATION:
            return (0, l.jsx)(c.PlaystationNeutralIcon, { size: "xs", ...i });
        case r.Y.NINTENDO:
            return (0, l.jsx)(c.NintendoSwitchNeutralIcon, { size: "xs", ...i });
        default:
            return null;
    }
}
function g(e) {
    let { platforms: t } = e;
    return (0, l.jsx)("div", {
        className: s()(u.nM, u.Lc),
        style: { alignItems: "center" },
        children: t.map((e) =>
            (0, l.jsx)(
                o.m,
                {
                    text: (function (e) {
                        switch (e) {
                            case r.Y.DESKTOP:
                                return d.intl.string(d.t.KT6uCJ);
                            case r.Y.XBOX:
                                return d.intl.string(d.t.DDWUJp);
                            case r.Y.PLAYSTATION:
                                return d.intl.string(d.t.fzMz2s);
                            case r.Y.NINTENDO:
                                return d.intl.string(d.t.AMW8je);
                            default:
                                return null;
                        }
                    })(e),
                    children: (0, l.jsx)(x, { platform: e }),
                },
                e,
            ),
        ),
    });
}
function h(e) {
    let { detectedGame: t, className: i } = e,
        n = a.useMemo(() => {
            let e = new Set(t.platforms),
                i = [...e];
            return (
                !e.has(r.Y.DESKTOP) && (e.has(r.Y.MACOS) || e.has(r.Y.LINUX)) && i.push(r.Y.DESKTOP),
                i.filter((e) => m.includes(e))
            );
        }, [t.platforms]);
    return 0 === n.length
        ? null
        : (0, l.jsx)("div", {
              className: s()(u.fi, u.iH, i),
              children: n.length > 0 && (0, l.jsx)(g, { platforms: n }),
          });
}
