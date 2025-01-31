n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(686546),
    u = n(226713);
let c = (e) => {
    let { className: t, guild: n, isSelected: a = !0, width: c = 32, height: d = 32, shouldAnimate: f = !0, isLocked: _ = !1 } = e,
        [p, h] = r.useState(!1),
        m = n.getIconURL(32, f && a),
        g = () => h(!0),
        E = () => h(!1);
    return (0, i.jsxs)('div', {
        onFocus: g,
        onBlur: E,
        onMouseOver: g,
        onMouseLeave: E,
        children: [
            (0, i.jsx)(l.ZP, {
                className: s()(u.mask, t),
                mask: a || p ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
                width: c,
                height: d,
                children:
                    null == m
                        ? (0, i.jsx)('div', {
                              className: s()(u.guildIcon, u.guildIconWithoutImage),
                              children: (0, i.jsx)('div', {
                                  className: u.guildAcronym,
                                  children: n.acronym
                              })
                          })
                        : (0, i.jsx)('img', {
                              alt: n.toString(),
                              src: m,
                              className: u.guildIcon
                          })
            }),
            _
                ? (0, i.jsx)('div', {
                      className: u.categoryItemLockIconContainer,
                      children: (0, i.jsx)(o.mBM, {
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
