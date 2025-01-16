var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(686546),
    d = r(226713);
let f = (e) => {
    let { className: n, guild: r, isSelected: i = !0, width: o = 32, height: f = 32, shouldAnimate: _ = !0, isLocked: h = !1 } = e,
        [p, m] = s.useState(!1),
        g = r.getIconURL(32, _ && i),
        E = () => m(!0),
        v = () => m(!1);
    return (0, a.jsxs)('div', {
        onFocus: E,
        onBlur: v,
        onMouseOver: E,
        onMouseLeave: v,
        children: [
            (0, a.jsx)(c.ZP, {
                className: l()(d.mask, n),
                mask: i || p ? c.QS.SQUIRCLE : c.QS.AVATAR_DEFAULT,
                width: o,
                height: f,
                children:
                    null == g
                        ? (0, a.jsx)('div', {
                              className: l()(d.guildIcon, d.guildIconWithoutImage),
                              children: (0, a.jsx)('div', {
                                  className: d.guildAcronym,
                                  children: r.acronym
                              })
                          })
                        : (0, a.jsx)('img', {
                              alt: r.toString(),
                              src: g,
                              className: d.guildIcon
                          })
            }),
            h
                ? (0, a.jsx)('div', {
                      className: d.categoryItemLockIconContainer,
                      children: (0, a.jsx)(u.LockIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 10,
                          height: 10,
                          className: d.categoryItemLockIcon
                      })
                  })
                : null
        ]
    });
};
n.Z = f;
