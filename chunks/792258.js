n.d(t, { Z: () => f });
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
    m = n(332495),
    g = n(388032),
    p = n(45452);
let h = [18, 18, 16, 16, 14, 12, 10],
    f = (e) => {
        let { guildId: t } = e,
            n = (0, l.e7)([d.Z], () => d.Z.getGuild(t));
        if (void 0 === n) return null;
        let i = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
            f = n.toString(),
            b = n.getIconURL(40, !0),
            N = null,
            x = h[h.length - 1];
        if (null == n.icon && null != f) {
            var _;
            x = null != (_ = h[(N = (0, a.Zg)(f)).length - 1]) ? _ : h[h.length - 1];
        }
        return (0, r.jsxs)('div', {
            className: p.container,
            children: [
                (0, r.jsxs)('div', {
                    style: { fontSize: x },
                    children: [
                        null != N
                            ? (0, r.jsx)('div', {
                                  className: s()(p.childWrapper, p.acronym),
                                  'aria-hidden': !0,
                                  children: N
                              })
                            : null,
                        null != b
                            ? (0, r.jsx)(o.qEK, {
                                  src: n.getIconURL(40, !0),
                                  size: o.EFr.SIZE_40,
                                  'aria-hidden': !0
                              })
                            : null
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: p.descriptors,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.header,
                            children: [
                                i
                                    ? (0, r.jsx)(c.Z, {
                                          guild: n,
                                          tooltipPosition: 'bottom',
                                          tooltipColor: o.ua7.Colors.PRIMARY,
                                          className: p.guildBadge
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
                                  children: g.NW.format(m.Z['5JmNgo'], { members: n.approximateMemberCount })
                              })
                            : null
                    ]
                })
            ]
        });
    };
