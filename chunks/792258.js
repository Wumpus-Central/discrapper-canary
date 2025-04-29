n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(468194),
    a = n(399606),
    o = n(481060),
    c = n(372769),
    d = n(914788),
    u = n(981631),
    m = n(332495),
    p = n(388032),
    g = n(45452);
let h = [18, 18, 16, 16, 14, 12, 10],
    f = (e) => {
        let { guildId: t } = e,
            n = (0, a.e7)([d.Z], () => d.Z.getGuild(t));
        if (void 0 === n) return null;
        let r = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
            f = n.toString(),
            b = n.getIconURL(40, !0),
            _ = null,
            x = h[h.length - 1];
        if (null == n.icon && null != f) {
            var E;
            x = null != (E = h[(_ = (0, l.Zg)(f)).length - 1]) ? E : h[h.length - 1];
        }
        return (0, i.jsxs)('div', {
            className: g.container,
            children: [
                (0, i.jsxs)('div', {
                    style: { fontSize: x },
                    children: [
                        null != _
                            ? (0, i.jsx)('div', {
                                  className: s()(g.childWrapper, g.acronym),
                                  'aria-hidden': !0,
                                  children: _
                              })
                            : null,
                        null != b
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
                                r
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
                                  children: p.intl.format(m.default['5JmNgo'], { members: n.approximateMemberCount })
                              })
                            : null
                    ]
                })
            ]
        });
    };
