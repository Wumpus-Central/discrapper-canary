n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    l = n(489948),
    s = n(442837),
    a = n(481060),
    o = n(813197),
    c = n(496675),
    d = n(768581),
    u = n(624138),
    m = n(434404),
    h = n(999382),
    g = n(981631),
    x = n(388032),
    p = n(71329);
function _(e) {
    let { guild: t, handleIconChange: n } = e,
        r = (0, s.e7)([c.Z], () => c.Z.can(g.Plq.MANAGE_GUILD, t)),
        { acronym: m, backgroundImage: h } = (function (e) {
            let t, n;
            if ((0, d.pU)(e.icon))
                return {
                    acronym: null,
                    backgroundImage: 'url("'.concat(e.icon, '")')
                };
            let r = d.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    canAnimate: !0,
                    size: 100
                }),
                l = e.name;
            return (
                null != r
                    ? (t = 'url("'.concat(r, '")'))
                    : null != l &&
                      (n = (0, i.jsx)(a.X6q, {
                          variant: 'heading-xxl/normal',
                          color: 'always-white',
                          className: p.imageUploaderAcronym,
                          children: (0, u.Zg)(l)
                      })),
                {
                    acronym: n,
                    backgroundImage: t
                }
            );
        })(t);
    if (!r)
        return (0, i.jsx)('div', {
            className: p.imageUploaderDisabled,
            children: (0, i.jsx)('div', {
                className: p.imageUploaderInner,
                style: { backgroundImage: h },
                children: m
            })
        });
    let _ = (0, i.jsxs)('div', {
        className: p.tooltip,
        children: [
            (0, i.jsx)(a.X6q, {
                variant: 'heading-sm/medium',
                children: x.intl.string(x.t.JD7DIS)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                children: x.intl.string(x.t.mJxa5O)
            })
        ]
    });
    return (0, i.jsx)(a.ua7, {
        text: _,
        'aria-label': x.intl.string(x.t.JD7DIS),
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                className: p.imageUploader,
                children: (0, i.jsx)(l.tE, {
                    within: !0,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                className: p.imageUploaderInner,
                                style: { backgroundImage: h },
                                children: [
                                    (0, i.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: m
                                    }),
                                    (0, i.jsx)(o.ZP, {
                                        onChange: n,
                                        tabIndex: 0,
                                        'aria-label': x.intl.string(x.t['Ge+94+'])
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                className: p.imageUploaderHint,
                                'aria-hidden': !0,
                                children: x.intl.string(x.t['Ge+94+'])
                            })
                        ]
                    })
                })
            })
    });
}
function C(e) {
    let { guild: t } = e,
        n = t.id,
        l = (0, s.e7)([h.Z], () => h.Z.getError('icon')),
        a = r.useCallback(
            (e) => {
                m.Z.updateGuild({ icon: e }), m.Z.updateGuildProfile(n, { icon: e });
            },
            [n]
        );
    return (0, i.jsxs)('section', {
        className: p.container,
        children: [
            (0, i.jsx)(_, {
                guild: t,
                handleIconChange: a
            }),
            null != l
                ? (0, i.jsx)('div', {
                      className: p.iconError,
                      children: l
                  })
                : null
        ]
    });
}
