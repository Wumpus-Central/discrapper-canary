(n.r(s), n.d(s, { default: () => j }));
var t = n(255367),
    l = n(73800),
    r = n(120356),
    a = n.n(r),
    o = n(114858),
    i = n(873546),
    c = n(755721),
    d = n(481060),
    u = n(169382),
    f = n(726542),
    g = n(656649),
    m = n(981631),
    h = n(388032),
    v = n(776699);
let p = 'https://dis.gd/Amazon-Music-Connection',
    x = null != window.opener;
function j() {
    let { type: e } = (0, o.UO)(),
        s = (0, g.vJ)(e),
        n = (0, u.l)().get('error-code'),
        r = l.useCallback(() => {
            window.close();
        }, []),
        j = l.useMemo(() => {
            switch (s) {
                case m.ABu.AMAZON_MUSIC:
                    return (0, t.jsx)('div', {
                        className: a()(v.message, v.details),
                        children: i.tq
                            ? h.intl.format(h.t['0EikXl'], {
                                  link: () =>
                                      (0, t.jsx)(d.eee, {
                                          href: p,
                                          children: p
                                      })
                              })
                            : h.intl.format(h.t.hKHZhI, {
                                  link: () =>
                                      (0, t.jsx)(d.eee, {
                                          href: p,
                                          children: p
                                      })
                              })
                    });
                case m.ABu.YOUTUBE:
                    if (n === m.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, t.jsx)('div', {
                            className: a()(v.message, v.details),
                            children: h.intl.format(h.t.nQPJdH, { link: 'https://support.google.com/youtube/answer/1646861' })
                        });
                    return null;
                default:
                    return null;
            }
        }, [n, s]);
    if (null == s) return null;
    let b = f.Z.get(s);
    return (0, t.jsxs)(g.UV, {
        platformType: s,
        children: [
            (0, t.jsx)('div', {
                className: a()(v.message, v.error),
                children: h.intl.format(h.t.E62dXl, { name: b.name })
            }),
            (0, t.jsx)('div', {
                className: a()(v.message, v.details),
                children: h.intl.string(h.t.Ra6lcn)
            }),
            j,
            x
                ? (0, t.jsx)(c.zx, {
                      className: v.btn,
                      onClick: r,
                      children: h.intl.string(h.t.i4jeWV)
                  })
                : null,
            null != n
                ? (0, t.jsx)('div', {
                      className: a()(v.message, v.errorDetails),
                      children: h.intl.format(h.t.LElyIC, { errorCode: n })
                  })
                : null
        ]
    });
}
