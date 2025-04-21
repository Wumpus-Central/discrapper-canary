n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(813197),
    o = n(999382),
    c = n(388032),
    d = n(137991),
    u = n(381109);
function m(e) {
    let { profile: t, handleIconChange: n, canManageGuild: l } = e,
        o = i.useCallback(() => {
            n(null);
        }, [n]),
        u = i.useMemo(() => ({ within: !0 }), []);
    return (0, r.jsxs)('div', {
        className: d.buttons,
        children: [
            (0, r.jsxs)(s.zxk, {
                focusProps: u,
                tabIndex: -1,
                size: s.zxk.Sizes.SMALL,
                color: s.zxk.Colors.BRAND,
                disabled: !l,
                children: [
                    c.intl.string(c.t.r3Jdsb),
                    (0, r.jsx)(a.ZP, {
                        tabIndex: 0,
                        onChange: n
                    })
                ]
            }),
            null != t.icon
                ? (0, r.jsx)(s.zxk, {
                      size: s.zxk.Sizes.SMALL,
                      color: s.zxk.Colors.RED,
                      look: s.zxk.Looks.LINK,
                      onClick: o,
                      disabled: !l,
                      children: c.intl.string(c.t.x8AlTk)
                  })
                : null
        ]
    });
}
function g(e) {
    let { profile: t, canManageGuild: n, onIconChange: i } = e,
        a = (0, l.e7)([o.Z], () => o.Z.getError('icon'));
    return (0, r.jsxs)('section', {
        className: d.container,
        children: [
            (0, r.jsxs)(s.hjN, {
                className: u.section,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.sectionHeader,
                        children: [
                            (0, r.jsx)(s.vwX, { children: c.intl.string(c.t.FkQnxM) }),
                            (0, r.jsx)(s.R94, {
                                type: 'description',
                                children: c.intl.string(c.t.KjkA0d)
                            })
                        ]
                    }),
                    (0, r.jsx)(m, {
                        profile: t,
                        canManageGuild: n,
                        handleIconChange: i
                    })
                ]
            }),
            null != a
                ? (0, r.jsx)('div', {
                      className: d.iconError,
                      children: a
                  })
                : null
        ]
    });
}
