"use strict";
n.d(t, { A: () => f }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(808380),
    c = n(934551),
    o = n(990078),
    d = n(985018),
    u = n(851822);
let m = [s.Y.DESKTOP, s.Y.XBOX, s.Y.PLAYSTATION, s.Y.NINTENDO];
function x(e) {
    let { platform: t, ...n } = e;
    switch (t) {
        case s.Y.DESKTOP:
            return (0, i.jsx)(c.ScreenIcon, { size: "xs", ...n });
        case s.Y.XBOX:
            return (0, i.jsx)(c.XboxNeutralIcon, { size: "xs", ...n });
        case s.Y.PLAYSTATION:
            return (0, i.jsx)(c.PlaystationNeutralIcon, { size: "xs", ...n });
        case s.Y.NINTENDO:
            return (0, i.jsx)(c.NintendoSwitchNeutralIcon, { size: "xs", ...n });
        default:
            return null;
    }
}
function h(e) {
    let { platforms: t } = e;
    return (0, i.jsx)("div", {
        className: r()(u.nM, u.Lc),
        style: { alignItems: "center" },
        children: t.map((e) =>
            (0, i.jsx)(
                o.m,
                {
                    text: (function (e) {
                        switch (e) {
                            case s.Y.DESKTOP:
                                return d.intl.string(d.t.KT6uCJ);
                            case s.Y.XBOX:
                                return d.intl.string(d.t.DDWUJp);
                            case s.Y.PLAYSTATION:
                                return d.intl.string(d.t.fzMz2s);
                            case s.Y.NINTENDO:
                                return d.intl.string(d.t.AMW8je);
                            default:
                                return null;
                        }
                    })(e),
                    children: (0, i.jsx)(x, { platform: e }),
                },
                e,
            ),
        ),
    });
}
function f(e) {
    let { detectedGame: t, className: n } = e,
        a = l.useMemo(() => {
            let e = new Set(t.platforms),
                n = [...e];
            return (
                !e.has(s.Y.DESKTOP) && (e.has(s.Y.MACOS) || e.has(s.Y.LINUX)) && n.push(s.Y.DESKTOP),
                n.filter((e) => m.includes(e))
            );
        }, [t.platforms]);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(u.fi, u.iH, n),
              children: a.length > 0 && (0, i.jsx)(h, { platforms: a }),
          });
}
