n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(468194),
    a = n(399606),
    o = n(481060),
    c = n(372769),
    d = n(914788),
    u = n(981631),
    m = n(388032),
    g = n(77659);
let h = [18, 18, 16, 16, 14, 12, 10],
    x = (e) => {
        let { guildId: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.getGuild(t));
        if (void 0 === n) return null;
        let s = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
            x = n.toString(),
            _ = n.getIconURL(40, !0),
            p = null,
            E = h[h.length - 1];
        if (null == n.icon && null != x) {
            var C;
            E = null !== (C = h[(p = (0, l.Zg)(x)).length - 1]) && void 0 !== C ? C : h[h.length - 1];
        }
        return (0, i.jsxs)('div', {
            className: g.container,
            children: [
                (0, i.jsxs)('div', {
                    style: { fontSize: E },
                    children: [
                        null != p
                            ? (0, i.jsx)('div', {
                                  className: r()(g.childWrapper, g.acronym),
                                  'aria-hidden': !0,
                                  children: p
                              })
                            : null,
                        null != _
                            ? (0, i.jsx)(o.qEK, {
                                  src: n.getIconURL(40, !0),
                                  size: o.EFr.SIZE_40,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: g.descriptors,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.header,
                            children: [
                                s
                                    ? (0, i.jsx)(c.Z, {
                                          guild: n,
                                          tooltipPosition: 'bottom',
                                          tooltipColor: o.ua7.Colors.PRIMARY,
                                          className: g.guildBadge
                                      })
                                    : null,
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/semibold',
                                    children: n.toString()
                                })
                            ]
                        }),
                        void 0 !== n.approximateMemberCount
                            ? (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-muted',
                                  children: m.intl.format(m.t['5JmNgo'], { members: n.approximateMemberCount })
                              })
                            : null
                    ]
                })
            ]
        });
    };
