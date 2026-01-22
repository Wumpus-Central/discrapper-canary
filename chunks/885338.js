l.r(n),
    l.d(n, {
        default: () => v,
    });
var s = l(627968),
    t = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(960488),
    c = l(607399),
    d = l(421380),
    u = l(397927),
    o = l(458518),
    m = l(573648),
    f = l(950198),
    h = l(652215),
    b = l(985018),
    p = l(201736);
let j = "https://dis.gd/Amazon-Music-Connection",
    x = null != window.opener;

function v() {
    let { type: e } = (0, i.g)(),
        n = (0, f.mw)(e),
        l = (0, o.o)().get("error-code"),
        a = t.useCallback(() => {
            window.close();
        }, []),
        v = t.useMemo(() => {
            switch (n) {
                case h.fg2.AMAZON_MUSIC:
                    return (0, s.jsx)("div", {
                        className: r()(p.iU, p.zH),
                        children: c.Fr
                            ? b.intl.format(b.t["0EikXi"], {
                                  link: () =>
                                      (0, s.jsx)(u.MzZ, {
                                          href: j,
                                          children: j,
                                      }),
                              })
                            : b.intl.format(b.t.hKHZhO, {
                                  link: () =>
                                      (0, s.jsx)(u.MzZ, {
                                          href: j,
                                          children: j,
                                      }),
                              }),
                    });
                case h.fg2.YOUTUBE:
                    if (l === h.t02.UNKNOWN_ACCOUNT.toString())
                        return (0, s.jsx)("div", {
                            className: r()(p.iU, p.zH),
                            children: b.intl.format(b.t.nQPJdL, {
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
    return (0, s.jsxs)(f.mP, {
        platformType: n,
        children: [
            (0, s.jsx)("div", {
                className: r()(p.iU, p.z3),
                children: b.intl.format(b.t.E62dXo, {
                    name: N.name,
                }),
            }),
            (0, s.jsx)("div", {
                className: r()(p.iU, p.zH),
                children: b.intl.string(b.t.Ra6lcp),
            }),
            v,
            x
                ? (0, s.jsx)(d.$n, {
                      className: p.HM,
                      onClick: a,
                      children: b.intl.string(b.t.i4jeWR),
                  })
                : null,
            null != l
                ? (0, s.jsx)("div", {
                      className: r()(p.iU, p.nf),
                      children: b.intl.format(b.t.LElyIL, {
                          errorCode: l,
                      }),
                  })
                : null,
        ],
    });
}
