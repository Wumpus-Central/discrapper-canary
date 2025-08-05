n.d(t, { Z: () => b });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(468194),
    l = n(399606),
    o = n(481060),
    c = n(372769),
    d = n(601964),
    u = n(914788),
    m = n(981631),
    p = n(916723),
    g = n(388032),
    h = n(45452);
let f = [18, 18, 16, 16, 14, 12, 10],
    b = (e) => {
        let { guildId: t } = e,
            n = (0, l.e7)([u.Z], () => u.Z.getGuild(t));
        if (void 0 === n) return null;
        let r = n.features.has(m.oNc.VERIFIED) || n.features.has(m.oNc.PARTNERED),
            { name: b } = n,
            x = (0, d.EB)(n, 40, !0),
            _ = null,
            j = f[f.length - 1];
        if (null == n.icon && null != b) {
            var C;
            j = null != (C = f[(_ = (0, a.Zg)(b)).length - 1]) ? C : f[f.length - 1];
        }
        return (0, i.jsxs)('div', {
            className: h.container,
            children: [
                (0, i.jsxs)('div', {
                    style: { fontSize: j },
                    children: [
                        null != _
                            ? (0, i.jsx)('div', {
                                  className: s()(h.childWrapper, h.acronym),
                                  'aria-hidden': !0,
                                  children: _
                              })
                            : null,
                        null != x
                            ? (0, i.jsx)(o.qEK, {
                                  src: x,
                                  size: o.EFr.SIZE_40,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: h.descriptors,
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.header,
                            children: [
                                r
                                    ? (0, i.jsx)(c.Z, {
                                          guild: n,
                                          tooltipPosition: 'bottom',
                                          tooltipColor: o.ua7.Colors.PRIMARY,
                                          className: h.guildBadge
                                      })
                                    : null,
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/semibold',
                                    children: b
                                })
                            ]
                        }),
                        void 0 !== n.approximateMemberCount
                            ? (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-muted',
                                  children: g.intl.format(p.default['5JmNgo'], { members: n.approximateMemberCount })
                              })
                            : null
                    ]
                })
            ]
        });
    };
