n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    s = n(489948),
    a = n(442837),
    l = n(481060),
    o = n(813197),
    c = n(496675),
    d = n(768581),
    u = n(624138),
    m = n(434404),
    p = n(999382),
    g = n(981631),
    h = n(388032),
    f = n(805607);
function b(e) {
    let { guild: t, handleIconChange: n } = e,
        i = (0, a.e7)([c.Z], () => c.Z.can(g.Plq.MANAGE_GUILD, t)),
        { acronym: m, backgroundImage: p } = (function (e) {
            let t, n;
            if ((0, d.pU)(e.icon))
                return {
                    acronym: null,
                    backgroundImage: 'url("'.concat(e.icon, '")')
                };
            let i = d.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    canAnimate: !0,
                    size: 100
                }),
                s = e.name;
            return (
                null != i
                    ? (t = 'url("'.concat(i, '")'))
                    : null != s &&
                      (n = (0, r.jsx)(l.X6q, {
                          variant: 'heading-xxl/normal',
                          color: 'always-white',
                          className: f.imageUploaderAcronym,
                          children: (0, u.Zg)(s)
                      })),
                {
                    acronym: n,
                    backgroundImage: t
                }
            );
        })(t);
    if (!i)
        return (0, r.jsx)('div', {
            className: f.imageUploaderDisabled,
            children: (0, r.jsx)('div', {
                className: f.imageUploaderInner,
                style: { backgroundImage: p },
                children: m
            })
        });
    let b = (0, r.jsxs)('div', {
        className: f.tooltip,
        children: [
            (0, r.jsx)(l.X6q, {
                variant: 'heading-sm/medium',
                children: h.NW.string(h.t.JD7DIS)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                children: h.NW.string(h.t.mJxa5O)
            })
        ]
    });
    return (0, r.jsx)(l.ua7, {
        text: b,
        'aria-label': h.NW.string(h.t.JD7DIS),
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                'div',
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        className: f.imageUploader,
                        children: (0, r.jsx)(s.tE, {
                            within: !0,
                            children: (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: f.imageUploaderInner,
                                        style: { backgroundImage: p },
                                        children: [
                                            (0, r.jsx)('span', {
                                                'aria-hidden': !0,
                                                children: m
                                            }),
                                            (0, r.jsx)(o.ZP, {
                                                onChange: n,
                                                tabIndex: 0,
                                                'aria-label': h.NW.string(h.t['Ge+94+'])
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: f.imageUploaderHint,
                                        'aria-hidden': !0,
                                        children: h.NW.string(h.t['Ge+94+'])
                                    })
                                ]
                            })
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t)
            );
        }
    });
}
function x(e) {
    let { guild: t } = e,
        n = t.id,
        s = (0, a.e7)([p.Z], () => p.Z.getError('icon')),
        l = i.useCallback(
            (e) => {
                m.Z.updateGuild({ icon: e }), m.Z.updateGuildProfile(n, { icon: e });
            },
            [n]
        );
    return (0, r.jsxs)('section', {
        className: f.container,
        children: [
            (0, r.jsx)(b, {
                guild: t,
                handleIconChange: l
            }),
            null != s
                ? (0, r.jsx)('div', {
                      className: f.iconError,
                      children: s
                  })
                : null
        ]
    });
}
