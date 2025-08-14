l.r(s), l.d(s, { default: () => p });
var n = l(255367),
    r = l(73800),
    t = l(120356),
    a = l.n(t),
    i = l(114858),
    o = l(873546),
    c = l(755721),
    d = l(481060),
    u = l(169382),
    m = l(726542),
    f = l(656649),
    g = l(981631),
    h = l(388032),
    v = l(78713);
let x = "https://dis.gd/Amazon-Music-Connection",
    j = null != window.opener;
function p() {
    let { type: e } = (0, i.UO)(),
        s = (0, f.vJ)(e),
        l = (0, u.l)().get("error-code"),
        t = r.useCallback(() => {
            window.close();
        }, []),
        p = r.useMemo(() => {
            switch (s) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, n.jsx)("div", {
                        className: a()(v.message, v.details),
                        children: o.tq
                            ? h.intl.format(h.t["0EikXl"], {
                                  link: () =>
                                      (0, n.jsx)(d.eee, {
                                          href: x,
                                          children: x,
                                      }),
                              })
                            : h.intl.format(h.t.hKHZhI, {
                                  link: () =>
                                      (0, n.jsx)(d.eee, {
                                          href: x,
                                          children: x,
                                      }),
                              }),
                    });
                case g.ABu.YOUTUBE:
                    if (l === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, n.jsx)("div", {
                            className: a()(v.message, v.details),
                            children: h.intl.format(h.t.nQPJdH, {
                                link: "https://support.google.com/youtube/answer/1646861",
                            }),
                        });
                    return null;
                default:
                    return null;
            }
        }, [l, s]);
    if (null == s) return null;
    let N = m.Z.get(s);
    return (0, n.jsxs)(f.UV, {
        platformType: s,
        children: [
            (0, n.jsx)("div", {
                className: a()(v.message, v.error),
                children: h.intl.format(h.t.E62dXl, { name: N.name }),
            }),
            (0, n.jsx)("div", {
                className: a()(v.message, v.details),
                children: h.intl.string(h.t.Ra6lcn),
            }),
            p,
            j
                ? (0, n.jsx)(c.zx, {
                      className: v.btn,
                      onClick: t,
                      children: h.intl.string(h.t.i4jeWV),
                  })
                : null,
            null != l
                ? (0, n.jsx)("div", {
                      className: a()(v.message, v.errorDetails),
                      children: h.intl.format(h.t.LElyIC, { errorCode: l }),
                  })
                : null,
        ],
    });
}
