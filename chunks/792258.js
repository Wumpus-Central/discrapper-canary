n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(468194),
    l = n(399606),
    o = n(481060),
    c = n(372769),
    d = n(914788),
    u = n(981631),
    m = n(388032),
    g = n(791273);
let _ = [18, 18, 16, 16, 14, 12, 10],
    p = (e) => {
        let { guildId: t } = e,
            n = (0, l.e7)([d.Z], () => d.Z.getGuild(t));
        if (void 0 === n) return null;
        let r = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
            p = n.toString(),
            f = n.getIconURL(40, !0),
            h = null,
            x = _[_.length - 1];
        if (null == n.icon && null != p) {
            var E;
            x = null !== (E = _[(h = (0, s.Zg)(p)).length - 1]) && void 0 !== E ? E : _[_.length - 1];
        }
        return (0, i.jsxs)('div', {
            className: g.container,
            children: [
                (0, i.jsxs)('div', {
                    style: { fontSize: x },
                    children: [
                        null != h
                            ? (0, i.jsx)('div', {
                                  className: a()(g.childWrapper, g.acronym),
                                  'aria-hidden': !0,
                                  children: h
                              })
                            : null,
                        null != f
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
                                  children: m.intl.format(m.t['5JmNgo'], { members: n.approximateMemberCount })
                              })
                            : null
                    ]
                })
            ]
        });
    };
