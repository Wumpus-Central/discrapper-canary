s.r(a), s.d(a, { default: () => x });
var n = s(54381),
    l = s(473749),
    r = s(120356),
    t = s.n(r),
    i = s(828700),
    o = s(873546),
    d = s(755721),
    c = s(481060),
    u = s(169382),
    f = s(726542),
    m = s(656649),
    g = s(981631),
    h = s(388032),
    v = s(86105);
let b = "https://dis.gd/Amazon-Music-Connection",
    p = null != window.opener;
function x() {
    let { type: e } = (0, i.UO)(),
        a = (0, m.vJ)(e),
        s = (0, u.l)().get("error-code"),
        r = l.useCallback(() => {
            window.close();
        }, []),
        x = l.useMemo(() => {
            switch (a) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, n.jsx)("div", {
                        className: t()(v.message, v.details),
                        children: o.tq
                            ? h.intl.format(h.t["0EikXi"], {
                                  link: () =>
                                      (0, n.jsx)(c.eee, {
                                          href: b,
                                          children: b,
                                      }),
                              })
                            : h.intl.format(h.t.hKHZhO, {
                                  link: () =>
                                      (0, n.jsx)(c.eee, {
                                          href: b,
                                          children: b,
                                      }),
                              }),
                    });
                case g.ABu.YOUTUBE:
                    if (s === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, n.jsx)("div", {
                            className: t()(v.message, v.details),
                            children: h.intl.format(h.t.nQPJdL, {
                                link: "https://support.google.com/youtube/answer/1646861",
                            }),
                        });
                    return null;
                default:
                    return null;
            }
        }, [s, a]);
    if (null == a) return null;
    let j = f.Z.get(a);
    return (0, n.jsxs)(m.UV, {
        platformType: a,
        children: [
            (0, n.jsx)("div", {
                className: t()(v.message, v.error),
                children: h.intl.format(h.t.E62dXo, { name: j.name }),
            }),
            (0, n.jsx)("div", {
                className: t()(v.message, v.details),
                children: h.intl.string(h.t.Ra6lcp),
            }),
            x,
            p
                ? (0, n.jsx)(d.zx, {
                      className: v.btn,
                      onClick: r,
                      children: h.intl.string(h.t.i4jeWR),
                  })
                : null,
            null != s
                ? (0, n.jsx)("div", {
                      className: t()(v.message, v.errorDetails),
                      children: h.intl.format(h.t.LElyIL, { errorCode: s }),
                  })
                : null,
        ],
    });
}
