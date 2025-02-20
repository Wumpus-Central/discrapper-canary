n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(468194),
    l = n(399606),
    o = n(481060),
    c = n(372769),
    d = n(914788),
    u = n(981631),
    m = n(388032),
    g = n(931806);
let p = [18, 18, 16, 16, 14, 12, 10],
    h = (e) => {
        let { guildId: t } = e,
            n = (0, l.e7)([d.Z], () => d.Z.getGuild(t));
        if (void 0 === n) return null;
        let i = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
            h = n.toString(),
            f = n.getIconURL(40, !0),
            b = null,
            N = p[p.length - 1];
        if (null == n.icon && null != h) {
            var x;
            N = null !== (x = p[(b = (0, a.Zg)(h)).length - 1]) && void 0 !== x ? x : p[p.length - 1];
        }
        return (0, r.jsxs)('div', {
            className: g.container,
            children: [
                (0, r.jsxs)('div', {
                    style: { fontSize: N },
                    children: [
                        null != b
                            ? (0, r.jsx)('div', {
                                  className: s()(g.childWrapper, g.acronym),
                                  'aria-hidden': !0,
                                  children: b
                              })
                            : null,
                        null != f
                            ? (0, r.jsx)(o.qEK, {
                                  src: n.getIconURL(40, !0),
                                  size: o.EFr.SIZE_40,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: g.descriptors,
                    children: [
                        (0, r.jsxs)('div', {
                            className: g.header,
                            children: [
                                i
                                    ? (0, r.jsx)(c.Z, {
                                          guild: n,
                                          tooltipPosition: 'bottom',
                                          tooltipColor: o.ua7.Colors.PRIMARY,
                                          className: g.guildBadge
                                      })
                                    : null,
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/semibold',
                                    children: n.toString()
                                })
                            ]
                        }),
                        void 0 !== n.approximateMemberCount
                            ? (0, r.jsx)(o.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-muted',
                                  children: m.NW.format(m.t['5JmNgo'], { members: n.approximateMemberCount })
                              })
                            : null
                    ]
                })
            ]
        });
    };
