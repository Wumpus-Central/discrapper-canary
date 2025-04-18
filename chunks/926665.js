n.r(s), n.d(s, { default: () => p });
var r = n(200651),
    t = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512969),
    i = n(873546),
    c = n(481060),
    d = n(169382),
    u = n(726542),
    f = n(656649),
    g = n(981631),
    m = n(388032),
    h = n(776699);
let v = 'https://dis.gd/Amazon-Music-Connection',
    N = null != window.opener;
function p() {
    let { type: e } = (0, o.UO)(),
        s = (0, f.vJ)(e),
        n = (0, d.l)().get('error-code'),
        l = t.useCallback(() => {
            window.close();
        }, []),
        p = t.useMemo(() => {
            switch (s) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, r.jsx)('div', {
                        className: a()(h.message, h.details),
                        children: i.tq
                            ? m.NW.format(m.t['0EikXl'], {
                                  link: () =>
                                      (0, r.jsx)(c.eee, {
                                          href: v,
                                          children: v
                                      })
                              })
                            : m.NW.format(m.t.hKHZhI, {
                                  link: () =>
                                      (0, r.jsx)(c.eee, {
                                          href: v,
                                          children: v
                                      })
                              })
                    });
                case g.ABu.YOUTUBE:
                    if (n === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, r.jsx)('div', {
                            className: a()(h.message, h.details),
                            children: m.NW.format(m.t.nQPJdH, { link: 'https://support.google.com/youtube/answer/1646861' })
                        });
                    return null;
                default:
                    return null;
            }
        }, [n, s]);
    if (null == s) return null;
    let x = u.Z.get(s);
    return (0, r.jsxs)(f.UV, {
        platformType: s,
        children: [
            (0, r.jsx)('div', {
                className: a()(h.message, h.error),
                children: m.NW.format(m.t.E62dXl, { name: x.name })
            }),
            (0, r.jsx)('div', {
                className: a()(h.message, h.details),
                children: m.NW.string(m.t.Ra6lcn)
            }),
            p,
            N
                ? (0, r.jsx)(c.zxk, {
                      className: h.btn,
                      onClick: l,
                      children: m.NW.string(m.t.i4jeWV)
                  })
                : null,
            null != n
                ? (0, r.jsx)('div', {
                      className: a()(h.message, h.errorDetails),
                      children: m.NW.format(m.t.LElyIC, { errorCode: n })
                  })
                : null
        ]
    });
}
