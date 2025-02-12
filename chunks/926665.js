n.r(s), n.d(s, { default: () => x });
var t = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    a = n(512969),
    i = n(873546),
    c = n(481060),
    d = n(169382),
    u = n(726542),
    f = n(656649),
    g = n(981631),
    m = n(388032),
    h = n(733521);
let v = 'https://dis.gd/Amazon-Music-Connection',
    p = null != window.opener;
function x() {
    let { type: e } = (0, a.UO)(),
        s = (0, f.vJ)(e),
        n = (0, d.l)().get('error-code'),
        o = l.useCallback(() => {
            window.close();
        }, []),
        x = l.useMemo(() => {
            switch (s) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, t.jsx)('div', {
                        className: r()(h.message, h.details),
                        children: i.tq
                            ? m.intl.format(m.t['0EikXl'], {
                                  link: () =>
                                      (0, t.jsx)(c.eee, {
                                          href: v,
                                          children: v
                                      })
                              })
                            : m.intl.format(m.t.hKHZhI, {
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
                            className: r()(h.message, h.details),
                            children: m.intl.format(m.t.nQPJdH, { link: 'https://support.google.com/youtube/answer/1646861' })
                        });
                    return null;
                default:
                    return null;
            }
        }, [n, s]);
    if (null == s) return null;
    let j = u.Z.get(s);
    return (0, t.jsxs)(f.UV, {
        platformType: s,
        children: [
            (0, t.jsx)('div', {
                className: r()(h.message, h.error),
                children: m.intl.format(m.t.E62dXl, { name: j.name })
            }),
            (0, t.jsx)('div', {
                className: r()(h.message, h.details),
                children: m.intl.string(m.t.Ra6lcn)
            }),
            x,
            p
                ? (0, t.jsx)(c.zxk, {
                      className: h.btn,
                      onClick: o,
                      children: m.intl.string(m.t.i4jeWV)
                  })
                : null
        ]
    });
}
