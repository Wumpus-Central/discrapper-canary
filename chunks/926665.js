n.r(s), n.d(s, { default: () => x });
var t = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(512969),
    i = n(873546),
    c = n(481060),
    d = n(169382),
    u = n(726542),
    f = n(656649),
    g = n(981631),
    m = n(388032),
    h = n(169047);
let v = 'https://dis.gd/Amazon-Music-Connection',
    p = null != window.opener;
function x() {
    let { type: e } = (0, l.UO)(),
        s = (0, f.vJ)(e),
        n = (0, d.l)().get('error-code'),
        r = o.useCallback(() => {
            window.close();
        }, []),
        x = o.useMemo(() => {
            switch (s) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, t.jsx)('div', {
                        className: a()(h.message, h.details),
                        children: i.tq
                            ? m.NW.format(m.t['0EikXl'], {
                                  link: () =>
                                      (0, t.jsx)(c.eee, {
                                          href: v,
                                          children: v
                                      })
                              })
                            : m.NW.format(m.t.hKHZhI, {
                                  link: () =>
                                      (0, t.jsx)(c.eee, {
                                          href: v,
                                          children: v
                                      })
                              })
                    });
                case g.ABu.YOUTUBE:
                    if (n === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, t.jsx)('div', {
                            className: a()(h.message, h.details),
                            children: m.NW.format(m.t.nQPJdH, { link: 'https://support.google.com/youtube/answer/1646861' })
                        });
                    return null;
                default:
                    return null;
            }
        }, [n, s]);
    if (null == s) return null;
    let N = u.Z.get(s);
    return (0, t.jsxs)(f.UV, {
        platformType: s,
        children: [
            (0, t.jsx)('div', {
                className: a()(h.message, h.error),
                children: m.NW.format(m.t.E62dXl, { name: N.name })
            }),
            (0, t.jsx)('div', {
                className: a()(h.message, h.details),
                children: m.NW.string(m.t.Ra6lcn)
            }),
            x,
            p
                ? (0, t.jsx)(c.zxk, {
                      className: h.btn,
                      onClick: r,
                      children: m.NW.string(m.t.i4jeWV)
                  })
                : null
        ]
    });
}
