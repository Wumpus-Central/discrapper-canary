n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(813197),
    o = n(999382),
    c = n(388032),
    d = n(137991),
    u = n(381109);
function m(e) {
    let { profile: t, handleIconChange: n, canManageGuild: s } = e,
        o = i.useCallback(() => {
            n(null);
        }, [n]),
        u = i.useMemo(() => ({ within: !0 }), []);
    return (0, r.jsxs)('div', {
        className: d.buttons,
        children: [
            (0, r.jsxs)(a.zxk, {
                focusProps: u,
                tabIndex: -1,
                size: a.zxk.Sizes.SMALL,
                color: a.zxk.Colors.BRAND,
                disabled: !s,
                children: [
                    c.NW.string(c.t.r3Jdsb),
                    (0, r.jsx)(l.ZP, {
                        tabIndex: 0,
                        onChange: n
                    })
                ]
            }),
            null != t.icon
                ? (0, r.jsx)(a.zxk, {
                      size: a.zxk.Sizes.SMALL,
                      color: a.zxk.Colors.RED,
                      look: a.zxk.Looks.LINK,
                      onClick: o,
                      disabled: !s,
                      children: c.NW.string(c.t.x8AlTk)
                  })
                : null
        ]
    });
}
function g(e) {
    let { profile: t, canManageGuild: n, onIconChange: i } = e,
        l = (0, s.e7)([o.Z], () => o.Z.getError('icon'));
    return (0, r.jsxs)('section', {
        className: d.container,
        children: [
            (0, r.jsxs)(a.hjN, {
                className: u.section,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.sectionHeader,
                        children: [
                            (0, r.jsx)(a.vwX, { children: c.NW.string(c.t.FkQnxM) }),
                            (0, r.jsx)(a.R94, {
                                type: 'description',
                                children: c.NW.string(c.t.KjkA0d)
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
            null != l
                ? (0, r.jsx)('div', {
                      className: d.iconError,
                      children: l
                  })
                : null
        ]
    });
}
