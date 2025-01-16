s.r(n),
    s.d(n, {
        default: function () {
            return x;
        }
    });
var t = s(200651),
    r = s(192379),
    o = s(120356),
    l = s.n(o),
    i = s(512969),
    c = s(873546),
    a = s(481060),
    u = s(169382),
    d = s(726542),
    f = s(656649),
    g = s(981631),
    m = s(388032),
    h = s(72153);
let v = 'https://dis.gd/Amazon-Music-Connection',
    p = null != window.opener;
function x() {
    let { type: e } = (0, i.UO)(),
        n = (0, f.vJ)(e),
        s = (0, u.l)().get('error-code'),
        o = r.useCallback(() => {
            window.close();
        }, []),
        x = r.useMemo(() => {
            switch (n) {
                case g.ABu.AMAZON_MUSIC:
                    return (0, t.jsx)('div', {
                        className: l()(h.message, h.details),
                        children: c.tq
                            ? m.intl.format(m.t['0EikXl'], {
                                  link: () =>
                                      (0, t.jsx)(a.Anchor, {
                                          href: v,
                                          children: v
                                      })
                              })
                            : m.intl.format(m.t.hKHZhI, {
                                  link: () =>
                                      (0, t.jsx)(a.Anchor, {
                                          href: v,
                                          children: v
                                      })
                              })
                    });
                case g.ABu.YOUTUBE:
                    if (s === g.evJ.UNKNOWN_ACCOUNT.toString())
                        return (0, t.jsx)('div', {
                            className: l()(h.message, h.details),
                            children: m.intl.format(m.t.nQPJdH, { link: 'https://support.google.com/youtube/answer/1646861' })
                        });
                    return null;
                default:
                    return null;
            }
        }, [s, n]);
    if (null == n) return null;
    let b = d.Z.get(n);
    return (0, t.jsxs)(f.UV, {
        platformType: n,
        children: [
            (0, t.jsx)('div', {
                className: l()(h.message, h.error),
                children: m.intl.format(m.t.E62dXl, { name: b.name })
            }),
            (0, t.jsx)('div', {
                className: l()(h.message, h.details),
                children: m.intl.string(m.t.Ra6lcn)
            }),
            x,
            p
                ? (0, t.jsx)(a.Button, {
                      className: h.btn,
                      onClick: o,
                      children: m.intl.string(m.t.i4jeWV)
                  })
                : null
        ]
    });
}
