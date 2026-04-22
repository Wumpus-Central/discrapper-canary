l.r(n), l.d(n, { default: () => x });
var r = l(627968),
    t = l(64700),
    s = l(503698),
    i = l.n(s),
    a = l(873263),
    c = l(607399),
    d = l(862482),
    u = l(349288),
    o = l(458518),
    m = l(573648),
    h = l(950198),
    f = l(652215),
    N = l(985018),
    g = l(844733);
let v = "https://dis.gd/Amazon-Music-Connection",
    j = null != window.opener;
function x() {
    let { type: e } = (0, a.g)(),
        n = (0, h.mw)(e),
        l = (0, o.o)().get("error-code"),
        s = t.useCallback(() => {
            window.close();
        }, []),
        x = t.useMemo(() => {
            switch (n) {
                case f.fg2.AMAZON_MUSIC:
                    return (0, r.jsx)("div", {
                        className: i()(g.iU, g.zH),
                        children: c.Fr
                            ? N.intl.format(N.t["0EikXi"], {
                                  link: () => (0, r.jsx)(u.Anchor, { href: v, children: v }),
                              })
                            : N.intl.format(N.t.hKHZhO, { link: () => (0, r.jsx)(u.Anchor, { href: v, children: v }) }),
                    });
                case f.fg2.YOUTUBE:
                    if (l === f.t02.UNKNOWN_ACCOUNT.toString())
                        return (0, r.jsx)("div", {
                            className: i()(g.iU, g.zH),
                            children: N.intl.format(N.t.nQPJdL, {
                                link: "https://support.google.com/youtube/answer/1646861",
                            }),
                        });
                    return null;
                default:
                    return null;
            }
        }, [l, n]),
        _ = null != l ? Number(l) : null,
        p = t.useMemo(() => {
            if (null == n) return null;
            let e = m.A.get(n);
            switch (_) {
                case f.t02.INVALID_CONNECTION_WHITESPACE_NAME:
                    return (0, r.jsx)("div", {
                        className: i()(g.iU, g.zH),
                        children: N.intl.format(N.t["O7/vPw"], { name: e.name }),
                    });
                case f.t02.CONNECTION_RATE_LIMITED:
                    return (0, r.jsx)("div", { className: i()(g.iU, g.zH), children: N.intl.string(N.t["Y6Jo+p"]) });
                case f.t02.TOO_MANY_CONNECTIONS:
                    return (0, r.jsx)("div", { className: i()(g.iU, g.zH), children: N.intl.string(N.t.M92PQ3) });
                default:
                    return null;
            }
        }, [_, n]);
    if (null == n) return null;
    let w = m.A.get(n);
    return (0, r.jsxs)(h.mP, {
        platformType: n,
        children: [
            (0, r.jsx)("div", { className: i()(g.iU, g.z3), children: N.intl.format(N.t.E62dXo, { name: w.name }) }),
            (0, r.jsx)("div", { className: i()(g.iU, g.zH), children: N.intl.string(N.t.Ra6lcp) }),
            x,
            p,
            j ? (0, r.jsx)(d.$n, { className: g.HM, onClick: s, children: N.intl.string(N.t.i4jeWR) }) : null,
            null != l
                ? (0, r.jsx)("div", {
                      className: i()(g.iU, g.nf),
                      children: N.intl.format(N.t.LElyIL, { errorCode: l }),
                  })
                : null,
        ],
    });
}
