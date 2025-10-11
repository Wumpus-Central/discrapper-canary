n.r(s), n.d(s, { default: () => p });
var l = n(951288),
    r = n(647438),
    t = n(120356),
    a = n.n(t),
    i = n(843611),
    o = n(873546),
    c = n(755721),
    d = n(481060),
    u = n(169382),
    m = n(726542),
    f = n(656649),
    g = n(981631),
    h = n(388032),
    v = n(78713);
let x = "https://dis.gd/Amazon-Music-Connection",
    j = null != window.opener;
function p() {
    let { type: e } = (0, i.UO)(),
        s = (0, f.vJ)(e),
        n = (0, u.l)().get("error-code"),
        t = r.useCallback(() => {
            window.close();
        }, []),
        p = r.useMemo(() => {
            switch (s) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, l.jsx)("div", {
                        className: a()(v.message, v.details),
                        children: o.tq
                            ? h.intl.format(h.t["0EikXl"], {
                                  link: () =>
                                      (0, l.jsx)(d.Anchor, {
                                          href: x,
                                          children: x,
                                      }),
                              })
                            : h.intl.format(h.t.hKHZhI, {
                                  link: () =>
                                      (0, l.jsx)(d.Anchor, {
                                          href: x,
                                          children: x,
                                      }),
                              }),
                    });
                case g.ABu.YOUTUBE:
                    if (n === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, l.jsx)("div", {
                            className: a()(v.message, v.details),
                            children: h.intl.format(h.t.nQPJdH, {
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
                children: h.intl.format(h.t.E62dXl, { name: N.name }),
            }),
            (0, l.jsx)("div", {
                className: a()(v.message, v.details),
                children: h.intl.string(h.t.Ra6lcn),
            }),
            p,
            j
                ? (0, l.jsx)(c.zx, {
                      className: v.btn,
                      onClick: t,
                      children: h.intl.string(h.t.i4jeWV),
                  })
                : null,
            null != n
                ? (0, l.jsx)("div", {
                      className: a()(v.message, v.errorDetails),
                      children: h.intl.format(h.t.LElyIC, { errorCode: n }),
                  })
                : null,
        ],
    });
}
