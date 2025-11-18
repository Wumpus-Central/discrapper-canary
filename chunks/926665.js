n.r(s), n.d(s, { default: () => j });
var l = n(54381),
    r = n(473749),
    t = n(120356),
    a = n.n(t),
    i = n(828700),
    o = n(873546),
    c = n(755721),
    d = n(481060),
    u = n(169382),
    m = n(726542),
    f = n(656649),
    g = n(981631),
    h = n(388032),
    v = n(971990);
let p = "https://dis.gd/Amazon-Music-Connection",
    x = null != window.opener;
function j() {
    let { type: e } = (0, i.UO)(),
        s = (0, f.vJ)(e),
        n = (0, u.l)().get("error-code"),
        t = r.useCallback(() => {
            window.close();
        }, []),
        j = r.useMemo(() => {
            switch (s) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, l.jsx)("div", {
                        className: a()(v.message, v.details),
                        children: o.tq
                            ? h.intl.format(h.t["0EikXi"], {
                                  link: () =>
                                      (0, l.jsx)(d.Anchor, {
                                          href: p,
                                          children: p,
                                      }),
                              })
                            : h.intl.format(h.t.hKHZhO, {
                                  link: () =>
                                      (0, l.jsx)(d.Anchor, {
                                          href: p,
                                          children: p,
                                      }),
                              }),
                    });
                case g.ABu.YOUTUBE:
                    if (n === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, l.jsx)("div", {
                            className: a()(v.message, v.details),
                            children: h.intl.format(h.t.nQPJdL, {
                                link: "https://support.google.com/youtube/answer/1646861",
                            }),
                        });
                    return null;
                default:
                    return null;
            }
        }, [n, s]);
    if (null == s) return null;
    let N = m.Z.get(s);
    return (0, l.jsxs)(f.UV, {
        platformType: s,
        children: [
            (0, l.jsx)("div", {
                className: a()(v.message, v.error),
                children: h.intl.format(h.t.E62dXo, { name: N.name }),
            }),
            (0, l.jsx)("div", {
                className: a()(v.message, v.details),
                children: h.intl.string(h.t.Ra6lcp),
            }),
            j,
            x
                ? (0, l.jsx)(c.zx, {
                      className: v.btn,
                      onClick: t,
                      children: h.intl.string(h.t.i4jeWR),
                  })
                : null,
            null != n
                ? (0, l.jsx)("div", {
                      className: a()(v.message, v.errorDetails),
                      children: h.intl.format(h.t.LElyIL, { errorCode: n }),
                  })
                : null,
        ],
    });
}
