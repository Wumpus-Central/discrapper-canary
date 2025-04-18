n.d(t, { Z: () => u }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(686546),
    c = n(186668);
let u = (e) => {
    let { className: t, guild: n, isSelected: o = !0, width: u = 32, height: d = 32, shouldAnimate: f = !0, isLocked: _ = !1 } = e,
        [p, h] = i.useState(!1),
        m = n.getIconURL(32, f && o),
        g = () => h(!0),
        E = () => h(!1);
    return (0, r.jsxs)('div', {
        onFocus: g,
        onBlur: E,
        onMouseOver: g,
        onMouseLeave: E,
        children: [
            (0, r.jsx)(l.ZP, {
                className: a()(c.mask, t),
                mask: o || p ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
                width: u,
                height: d,
                children:
                    null == m
                        ? (0, r.jsx)('div', {
                              className: a()(c.guildIcon, c.guildIconWithoutImage),
                              children: (0, r.jsx)('div', {
                                  className: c.guildAcronym,
                                  children: n.acronym
                              })
                          })
                        : (0, r.jsx)('img', {
                              alt: n.toString(),
                              src: m,
                              className: c.guildIcon
                          })
            }),
            _
                ? (0, r.jsx)('div', {
                      className: c.categoryItemLockIconContainer,
                      children: (0, r.jsx)(s.mBM, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 10,
                          height: 10,
                          className: c.categoryItemLockIcon
                      })
                  })
                : null
        ]
    });
};
