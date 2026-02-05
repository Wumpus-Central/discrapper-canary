l.r(n), l.d(n, { default: () => x });
var r = l(627968),
    s = l(64700),
    t = l(503698),
    a = l.n(t),
    i = l(960488),
    c = l(607399),
    d = l(421380),
    o = l(397927),
    u = l(458518),
    m = l(573648),
    f = l(950198),
    h = l(652215),
    g = l(985018),
    p = l(201736);
let j = "https://dis.gd/Amazon-Music-Connection",
    v = null != window.opener;
function x() {
    let { type: e } = (0, i.g)(),
        n = (0, f.mw)(e),
        l = (0, u.o)().get("error-code"),
        t = s.useCallback(() => {
            window.close();
        }, []),
        x = s.useMemo(() => {
            switch (n) {
                case h.fg2.AMAZON_MUSIC:
                    return (0, r.jsx)("div", {
                        className: a()(p.iU, p.zH),
                        children: c.Fr
                            ? g.intl.format(g.t["0EikXi"], { link: () => (0, r.jsx)(o.MzZ, { href: j, children: j }) })
                            : g.intl.format(g.t.hKHZhO, { link: () => (0, r.jsx)(o.MzZ, { href: j, children: j }) }),
                    });
                case h.fg2.YOUTUBE:
                    if (l === h.t02.UNKNOWN_ACCOUNT.toString())
                        return (0, r.jsx)("div", {
                            className: a()(p.iU, p.zH),
                            children: g.intl.format(g.t.nQPJdL, {
                                link: "https://support.google.com/youtube/answer/1646861",
                            }),
                        });
                    return null;
                default:
                    return null;
            }
        }, [l, n]);
    if (null == n) return null;
    let N = m.A.get(n);
    return (0, r.jsxs)(f.mP, {
        platformType: n,
        children: [
            (0, r.jsx)("div", { className: a()(p.iU, p.z3), children: g.intl.format(g.t.E62dXo, { name: N.name }) }),
            (0, r.jsx)("div", { className: a()(p.iU, p.zH), children: g.intl.string(g.t.Ra6lcp) }),
            x,
            v ? (0, r.jsx)(d.$n, { className: p.HM, onClick: t, children: g.intl.string(g.t.i4jeWR) }) : null,
            null != l
                ? (0, r.jsx)("div", {
                      className: a()(p.iU, p.nf),
                      children: g.intl.format(g.t.LElyIL, { errorCode: l }),
                  })
                : null,
        ],
    });
}
