"use strict";
n.d(t, { r: () => p });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(834730),
    o = n(496431),
    l = n(765548),
    u = n(414121),
    c = n(287809),
    d = n(191627),
    _ = n(602339),
    h = n(375708),
    f = n(294051);
function p(e) {
    let t,
        n,
        { linkCode: p, expiresAt: E, onRefresh: m } = e,
        g = (0, s.bG)([c.default], () => c.default.getCurrentUser()?.id),
        A = (0, l.A)(m),
        { days: I, hours: T, minutes: S, seconds: y } = (0, o.A)(E);
    if (
        (r.useEffect(() => {
            let e = E - Date.now();
            if (e <= 0) return void A();
            let t = setTimeout(A, e);
            return () => clearTimeout(t);
        }, [E, A]),
        null == g)
    )
        return null;
    let C = (0, d.jZ)(g, p),
        N = h.intl.string(_.default.RfkLDs);
    return (0, i.jsxs)("div", {
        className: f.N,
        children: [
            (0, i.jsxs)("div", {
                className: f.w,
                children: [
                    (0, i.jsx)(a.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: h.intl.string(_.default["ovecl/"]),
                    }),
                    (0, i.jsx)(a.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: `${N} ${((n = Math.floor((t = Math.max(0, 86400 * I + 3600 * T + 60 * S + y)) / 60)), `${n}:${String(t % 60).padStart(2, "0")}`)}`,
                    }),
                ],
            }),
            (0, i.jsx)(u.Lx, { size: 200, text: C, ariaLabel: h.intl.string(_.default.Mi60fm) }),
        ],
    });
}
