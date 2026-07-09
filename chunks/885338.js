l.r(t), l.d(t, { default: () => O });
var e = l(627968),
    i = l(64700),
    r = l(503698),
    s = l.n(r),
    a = l(873263),
    c = l(607399),
    u = l(862482),
    o = l(349288),
    d = l(458518),
    m = l(573648),
    h = l(950198),
    N = l(652215),
    f = l(375708),
    p = l(373821);
let g = "https://dis.gd/Amazon-Music-Connection",
    C = null != window.opener;
function O() {
    let { type: n } = (0, a.g)(),
        t = (0, h.mw)(n),
        l = (0, d.o)().get("error-code"),
        r = i.useCallback(() => {
            window.close();
        }, []),
        O = i.useMemo(() => {
            switch (t) {
                case N.fg2.AMAZON_MUSIC:
                    return (0, e.jsx)("div", {
                        className: s()(p.iU, p.zH),
                        children: c.Fr
                            ? f.intl.format(f.t["0EikXi"], {
                                  link: () => (0, e.jsx)(o.Anchor, { href: g, children: g }),
                              })
                            : f.intl.format(f.t.hKHZhO, { link: () => (0, e.jsx)(o.Anchor, { href: g, children: g }) }),
                    });
                case N.fg2.YOUTUBE:
                    if (l === N.t02.UNKNOWN_ACCOUNT.toString())
                        return (0, e.jsx)("div", {
                            className: s()(p.iU, p.zH),
                            children: f.intl.format(f.t.nQPJdL, {
                                link: "https://support.google.com/youtube/answer/1646861",
                            }),
                        });
                    return null;
                default:
                    return null;
            }
        }, [l, t]),
        U = null != l ? Number(l) : null,
        j = i.useMemo(() => {
            if (null == t) return null;
            let n = m.A.get(t);
            switch (U) {
                case N.t02.INVALID_CONNECTION_WHITESPACE_NAME:
                    return (0, e.jsx)("div", {
                        className: s()(p.iU, p.zH),
                        children:
                            t === N.fg2.YOUTUBE
                                ? f.intl.format(f.t.SXH74p, {
                                      link: "https://support.google.com/youtube/answer/2657964",
                                  })
                                : f.intl.format(f.t["O7/vPw"], { name: n.name }),
                    });
                case N.t02.CONNECTION_RATE_LIMITED:
                    return (0, e.jsx)("div", { className: s()(p.iU, p.zH), children: f.intl.string(f.t["Y6Jo+p"]) });
                case N.t02.TOO_MANY_CONNECTIONS:
                    return (0, e.jsx)("div", { className: s()(p.iU, p.zH), children: f.intl.string(f.t.M92PQ3) });
                default:
                    return null;
            }
        }, [U, t]);
    if (null == t) return null;
    let A = m.A.get(t);
    return (0, e.jsxs)(h.mP, {
        platformType: t,
        children: [
            (0, e.jsx)("div", { className: s()(p.iU, p.z3), children: f.intl.format(f.t.E62dXo, { name: A.name }) }),
            (0, e.jsx)("div", { className: s()(p.iU, p.zH), children: f.intl.string(f.t.Ra6lcp) }),
            O,
            j,
            C ? (0, e.jsx)(u.$n, { className: p.HM, onClick: r, children: f.intl.string(f.t.i4jeWR) }) : null,
            null != l
                ? (0, e.jsx)("div", {
                      className: s()(p.iU, p.nf),
                      children: f.intl.format(f.t.LElyIL, { errorCode: l }),
                  })
                : null,
        ],
    });
}
