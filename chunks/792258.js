var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(468194),
    l = n(399606),
    o = n(481060),
    c = n(372769),
    d = n(914788),
    u = n(981631),
    m = n(388032),
    g = n(600368);
let h = [18, 18, 16, 16, 14, 12, 10];
t.Z = (e) => {
    let { guildId: t } = e,
        n = (0, l.e7)([d.Z], () => d.Z.getGuild(t));
    if (void 0 === n) return null;
    let r = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
        p = n.toString(),
        x = n.getIconURL(40, !0),
        f = null,
        _ = h[h.length - 1];
    if (null == n.icon && null != p) {
        var E;
        _ = null !== (E = h[(f = (0, a.Zg)(p)).length - 1]) && void 0 !== E ? E : h[h.length - 1];
    }
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsxs)('div', {
                style: { fontSize: _ },
                children: [
                    null != f
                        ? (0, i.jsx)('div', {
                              className: s()(g.childWrapper, g.acronym),
                              'aria-hidden': !0,
                              children: f
                          })
                        : null,
                    null != x
                        ? (0, i.jsx)(o.Avatar, {
                              src: n.getIconURL(40, !0),
                              size: o.AvatarSizes.SIZE_40,
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
                                      tooltipColor: o.Tooltip.Colors.PRIMARY,
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
