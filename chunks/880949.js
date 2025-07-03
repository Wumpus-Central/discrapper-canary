(n.d(t, { Z: () => d }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(686546),
    c = n(601964),
    u = n(830129);
let d = (e) => {
    let { className: t, guild: n, isSelected: a = !0, width: d = 32, height: f = 32, shouldAnimate: _ = !0, isLocked: p = !1 } = e,
        [h, m] = i.useState(!1),
        g = (0, c.EB)(n, 32, _ && a),
        E = () => m(!0),
        b = () => m(!1);
    return (0, r.jsxs)('div', {
        onFocus: E,
        onBlur: b,
        onMouseOver: E,
        onMouseLeave: b,
        children: [
            (0, r.jsx)(l.ZP, {
                className: o()(u.mask, t),
                mask: a || h ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
                width: d,
                height: f,
                children:
                    null == g
                        ? (0, r.jsx)('div', {
                              className: o()(u.guildIcon, u.guildIconWithoutImage),
                              children: (0, r.jsx)('div', {
                                  className: u.guildAcronym,
                                  children: (0, c.gM)(n)
                              })
                          })
                        : (0, r.jsx)('img', {
                              alt: n.name,
                              src: g,
                              className: u.guildIcon
                          })
            }),
            p
                ? (0, r.jsx)('div', {
                      className: u.categoryItemLockIconContainer,
                      children: (0, r.jsx)(s.mBM, {
                          size: 'custom',
                          color: 'currentColor',
                          width: 10,
                          height: 10,
                          className: u.categoryItemLockIcon
                      })
                  })
                : null
        ]
    });
};
