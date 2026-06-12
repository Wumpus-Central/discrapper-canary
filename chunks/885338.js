e.r(l), e.d(l, { default: () => O });
var t = e(627968),
    i = e(64700),
    r = e(503698),
    s = e.n(r),
    a = e(873263),
    c = e(607399),
    u = e(862482),
    d = e(349288),
    o = e(458518),
    h = e(573648),
    m = e(950198),
    N = e(652215),
    f = e(375708),
    p = e(844733);
let C = "https://dis.gd/Amazon-Music-Connection",
    g = null != window.opener;
function O() {
    let { type: n } = (0, a.g)(),
        l = (0, m.mw)(n),
        e = (0, o.o)().get("error-code"),
        r = i.useCallback(() => {
            window.close();
        }, []),
        O = i.useMemo(() => {
            switch (l) {
                case N.fg2.AMAZON_MUSIC:
                    return (0, t.jsx)("div", {
                        className: s()(p.iU, p.zH),
                        children: c.Fr
                            ? f.intl.format(f.t["0EikXi"], {
                                  link: () => (0, t.jsx)(d.Anchor, { href: C, children: C }),
                              })
                            : f.intl.format(f.t.hKHZhO, { link: () => (0, t.jsx)(d.Anchor, { href: C, children: C }) }),
                    });
                case N.fg2.YOUTUBE:
                    if (e === N.t02.UNKNOWN_ACCOUNT.toString())
                        return (0, t.jsx)("div", {
                            className: s()(p.iU, p.zH),
                            children: f.intl.format(f.t.nQPJdL, {
                                link: "https://support.google.com/youtube/answer/1646861",
                            }),
                        });
                    return null;
                default:
                    return null;
            }
        }, [e, l]),
        j = null != e ? Number(e) : null,
        A = i.useMemo(() => {
            if (null == l) return null;
            let n = h.A.get(l);
            switch (j) {
                case N.t02.INVALID_CONNECTION_WHITESPACE_NAME:
                    return (0, t.jsx)("div", {
                        className: s()(p.iU, p.zH),
                        children: f.intl.format(f.t["O7/vPw"], { name: n.name }),
                    });
                case N.t02.CONNECTION_RATE_LIMITED:
                    return (0, t.jsx)("div", { className: s()(p.iU, p.zH), children: f.intl.string(f.t["Y6Jo+p"]) });
                case N.t02.TOO_MANY_CONNECTIONS:
                    return (0, t.jsx)("div", { className: s()(p.iU, p.zH), children: f.intl.string(f.t.M92PQ3) });
                default:
                    return null;
            }
        }, [j, l]);
    if (null == l) return null;
    let U = h.A.get(l);
    return (0, t.jsxs)(m.mP, {
        platformType: l,
        children: [
            (0, t.jsx)("div", { className: s()(p.iU, p.z3), children: f.intl.format(f.t.E62dXo, { name: U.name }) }),
            (0, t.jsx)("div", { className: s()(p.iU, p.zH), children: f.intl.string(f.t.Ra6lcp) }),
            O,
            A,
            g ? (0, t.jsx)(u.$n, { className: p.HM, onClick: r, children: f.intl.string(f.t.i4jeWR) }) : null,
            null != e
                ? (0, t.jsx)("div", {
                      className: s()(p.iU, p.nf),
                      children: f.intl.format(f.t.LElyIL, { errorCode: e }),
                  })
                : null,
        ],
    });
}
