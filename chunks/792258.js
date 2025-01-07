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
    g = n(388032),
    m = n(77659);
let f = [18, 18, 16, 16, 14, 12, 10];
t.Z = (e) => {
    let { guildId: t } = e,
        n = (0, l.e7)([d.Z], () => d.Z.getGuild(t));
    if (void 0 === n) return null;
    let r = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
        p = n.toString(),
        _ = n.getIconURL(40, !0),
        h = null,
        x = f[f.length - 1];
    if (null == n.icon && null != p) {
        var E;
        x = null !== (E = f[(h = (0, s.Zg)(p)).length - 1]) && void 0 !== E ? E : f[f.length - 1];
    }
    return (0, i.jsxs)('div', {
        className: m.container,
        children: [
            (0, i.jsxs)('div', {
                style: { fontSize: x },
                children: [
                    null != h
                        ? (0, i.jsx)('div', {
                              className: a()(m.childWrapper, m.acronym),
                              'aria-hidden': !0,
                              children: h
                          })
                        : null,
                    null != _
                        ? (0, i.jsx)(o.Avatar, {
                              src: n.getIconURL(40, !0),
                              size: o.AvatarSizes.SIZE_40,
                              'aria-hidden': !0
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: m.descriptors,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.header,
                        children: [
                            r
                                ? (0, i.jsx)(c.Z, {
                                      guild: n,
                                      tooltipPosition: 'bottom',
                                      tooltipColor: o.Tooltip.Colors.PRIMARY,
                                      className: m.guildBadge
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
                              children: g.intl.format(g.t['5JmNgo'], { members: n.approximateMemberCount })
                          })
                        : null
                ]
            })
        ]
    });
};
