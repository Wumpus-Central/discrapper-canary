n.d(t, { Z: () => b }), n(388685);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    c = n(481060),
    o = n(340541),
    d = n(430824),
    m = n(771845),
    x = n(259580),
    h = n(186523),
    u = n(553826),
    j = n(388032),
    g = n(699343),
    _ = n(949509);
function b(e) {
    let { count: t } = e,
        [n, r] = s.useState('server');
    return (0, i.jsxs)(c.Ttm, {
        className: g.content,
        children: [
            (0, i.jsxs)('div', {
                className: a()(g.header, _.header),
                children: [
                    (0, i.jsx)(c.owK, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40
                    }),
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: j.intl.format(j.t.Wyk03t, { count: t })
                    }),
                    (0, i.jsx)(c.Text, {
                        className: g.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: j.intl.string(j.t['jr/rn5'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: _.tabs,
                children: [
                    (0, i.jsx)('div', {
                        className: _.tabBackground,
                        style: { left: 'server' === n ? 0 : '50%' }
                    }),
                    (0, i.jsx)(c.P3F, {
                        className: _.tab,
                        onClick: () => r('server'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'server' === n ? 'header-primary' : 'text-muted',
                            children: j.intl.string(j.t.pS4WEh)
                        })
                    }),
                    (0, i.jsx)(c.P3F, {
                        className: _.tab,
                        onClick: () => r('channel'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'channel' === n ? 'header-primary' : 'text-muted',
                            children: j.intl.string(j.t.UVxi0d)
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: _.container,
                children: [(0, i.jsx)(v, { hidden: 'channel' === n }), (0, i.jsx)(f, { hidden: 'server' === n })]
            })
        ]
    });
}
function v(e) {
    let { hidden: t } = e,
        n = (0, l.e7)([d.Z, m.ZP], () => {
            var e;
            return null == (e = d.Z.getGuild(m.ZP.getFlattenedGuildIds()[0])) ? void 0 : e.name;
        }),
        [r, h] = s.useState(0);
    s.useEffect(() => {
        if (t) return;
        let e = 0,
            n = [1500, 1000, 1000, 500].map((t, n) => setTimeout(() => h(n + 1), (e += t)));
        return () => {
            n.forEach((e) => clearTimeout(e)), setTimeout(() => h(0), 150);
        };
    }, [t]);
    let { entrypoints: u } = (0, o._k)({ location: 'tips_tab' });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: _.containerInner,
                children: (0, i.jsxs)('div', {
                    className: a()(_.serversSection, {
                        [_.hidden]: t,
                        [_.showBigMenu]: r >= 1,
                        [_.fadeChannels]: r >= 1,
                        [_.showModal]: r >= 3
                    }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.channels,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: _.guildName,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'interactive-active',
                                            lineClamp: 1,
                                            children: null != n ? n : 'Keyboard Nerds'
                                        }),
                                        r >= 1
                                            ? (0, i.jsx)(c.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: _.icon
                                              })
                                            : (0, i.jsx)(x.Z, {
                                                  className: a()(_.__invalid_downCaret, _.icon),
                                                  width: 24,
                                                  height: 24
                                              })
                                    ]
                                }),
                                (0, i.jsx)(p, { name: j.intl.string(j.t.jqWm9f) }),
                                (0, i.jsx)(p, { name: j.intl.string(j.t.WFejRk) }),
                                (0, i.jsx)(p, {
                                    grey: !0,
                                    name: j.intl.string(j.t.p9z9Iy)
                                }),
                                (0, i.jsx)(p, {
                                    grey: !0,
                                    name: j.intl.string(j.t['2bdWDw'])
                                }),
                                (0, i.jsx)(p, {
                                    grey: !0,
                                    name: j.intl.string(j.t['Ci+Our'])
                                }),
                                (0, i.jsx)(p, {
                                    nodot: !0,
                                    name: j.intl.string(j.t['/7TEdn'])
                                }),
                                (0, i.jsx)(p, {
                                    nodot: !0,
                                    name: j.intl.string(j.t['Ime/t7'])
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: _.bigMenu,
                            children: [
                                (0, i.jsx)(C, {
                                    text: u ? j.intl.string(j.t.Sd8Ix8) : j.intl.string(j.t.BN75l5),
                                    icon: (0, i.jsx)(c.ejJ, {
                                        size: 'sm',
                                        className: _.icon
                                    })
                                }),
                                (0, i.jsx)('div', { className: _.divider }),
                                (0, i.jsx)(C, {
                                    active: r >= 2,
                                    text: j.intl.string(j.t.h850Sk),
                                    icon: (0, i.jsx)(c.Dkj, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: _.icon
                                    })
                                }),
                                (0, i.jsx)(C, {
                                    text: j.intl.string(j.t.BayiAg),
                                    icon: (0, i.jsx)(c.b7C, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: _.icon
                                    })
                                }),
                                (0, i.jsx)(C, {
                                    text: j.intl.string(j.t['154/bG']),
                                    icon: (0, i.jsx)(c.ewm, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: _.icon
                                    })
                                }),
                                (0, i.jsx)(C, {
                                    text: j.intl.string(j.t.qyjZub),
                                    icon: (0, i.jsx)(c.VZI, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: _.icon
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: _.notifModal,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    className: _.modalHeader,
                                    variant: 'text-md/medium',
                                    color: 'interactive-active',
                                    children: j.intl.string(j.t.h850Sk)
                                }),
                                (0, i.jsxs)('div', {
                                    className: _.notifTabs,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: _.notifTab,
                                            children: [
                                                (0, i.jsx)(c.owK, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    lineClamp: 1,
                                                    children: j.intl.string(j.t.hZrr6u)
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: _.activeNotifTab,
                                            children: [
                                                (0, i.jsx)(c.lOy, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'interactive-active',
                                                    lineClamp: 1,
                                                    children: j.intl.string(j.t.y59NJi)
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: _.notifTab,
                                            children: [
                                                (0, i.jsx)(c.owu, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    lineClamp: 1,
                                                    children: j.intl.string(j.t['pGn/bG'])
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('div', {
                                    className: _.controls,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: _.control,
                                            children: [(0, i.jsx)('div', { className: _.controlPlaceholder }), (0, i.jsx)('div', { className: _.switchOn })]
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: _.control,
                                            children: [(0, i.jsx)('div', { className: _.controlPlaceholder }), (0, i.jsx)('div', { className: _.switchOff })]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(N, {
                text: j.intl.string(j.t['C//fOz']),
                className: _.tipServers2,
                hidden: t || r < 4
            })
        ]
    });
}
function f(e) {
    let { hidden: t } = e,
        [n, r] = s.useState(0);
    return (
        s.useEffect(() => {
            if (t) return;
            let e = 0,
                n = [1000, 1000, 1000, 800, 800].map((t, n) => setTimeout(() => r(n + 1), (e += t)));
            return () => {
                n.forEach((e) => clearTimeout(e)), setTimeout(() => r(0), 150);
            };
        }, [t]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: _.containerInner,
                    children: (0, i.jsxs)('div', {
                        className: a()(_.channelsSection, {
                            [_.hidden]: t,
                            [_.fadeOtherChannels]: n >= 2,
                            [_.showLeftMenu]: n >= 2,
                            [_.showRightMenu]: n >= 3
                        }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _.channels,
                                children: [
                                    (0, i.jsx)(p, {
                                        selected: n >= 1,
                                        grey: n >= 5,
                                        name: j.intl.string(j.t.jqWm9f)
                                    }),
                                    (0, i.jsx)(p, { name: j.intl.string(j.t.WFejRk) }),
                                    (0, i.jsx)(p, {
                                        grey: !0,
                                        name: j.intl.string(j.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(p, {
                                        grey: !0,
                                        name: j.intl.string(j.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(p, {
                                        grey: !0,
                                        name: j.intl.string(j.t['Ci+Our'])
                                    }),
                                    (0, i.jsx)(p, {
                                        nodot: !0,
                                        name: j.intl.string(j.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(p, {
                                        nodot: !0,
                                        name: j.intl.string(j.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(_.menu, _.leftMenu),
                                children: [
                                    (0, i.jsx)(C, {
                                        small: !0,
                                        text: j.intl.string(j.t['w4m94+']),
                                        icon: (0, i.jsx)(x.Z, {
                                            className: _.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, i.jsx)(C, {
                                        small: !0,
                                        text: j.intl.string(j.t.HcoRu7),
                                        active: n >= 3,
                                        icon: (0, i.jsx)(x.Z, {
                                            className: _.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(_.menu, _.rightMenu),
                                children: [
                                    (0, i.jsx)(C, {
                                        small: !0,
                                        text: j.intl.string(j.t.hZrr6u),
                                        icon:
                                            n <= 4
                                                ? (0, i.jsx)(u.Z, {
                                                      className: _.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, i.jsx)(h.Z, {
                                                      className: _.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: n <= 4
                                    }),
                                    (0, i.jsx)(C, {
                                        small: !0,
                                        text: j.intl.string(j.t.y59NJi),
                                        icon:
                                            n >= 5
                                                ? (0, i.jsx)(u.Z, {
                                                      className: _.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, i.jsx)(h.Z, {
                                                      className: _.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: n >= 5
                                    }),
                                    (0, i.jsx)(C, {
                                        small: !0,
                                        text: j.intl.string(j.t['pGn/bG']),
                                        icon: (0, i.jsx)(h.Z, {
                                            className: _.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, i.jsx)(C, {
                                        small: !0,
                                        text: j.intl.string(j.t['32yow8']),
                                        icon: (0, i.jsx)(h.Z, {
                                            className: _.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, i.jsx)(N, {
                    text: j.intl.string(j.t['5Il5fn']),
                    className: _.tipChannels1,
                    hidden: t || n < 4
                }),
                (0, i.jsx)(N, {
                    text: j.intl.string(j.t['+ROcrq']),
                    className: _.tipChannels2,
                    hidden: t || n < 4
                })
            ]
        })
    );
}
function N(e) {
    let { text: t, className: n, hidden: s } = e;
    return (0, i.jsxs)('div', {
        className: a()(n, _.tip, { [_.hidden]: s }),
        children: [
            (0, i.jsx)(c.Text, {
                className: _.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, i.jsx)('div', { className: _.tipLine })
        ]
    });
}
function p(e) {
    let { grey: t, nodot: n, selected: s, name: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(_.channel, {
            [_.grey]: t || n,
            [_.nodot]: n,
            [_.selected]: s
        }),
        children: [
            (0, i.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: _.channelIcon
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: _.channelName,
                children: r
            })
        ]
    });
}
function C(e) {
    let { text: t, active: n, small: s, icon: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(_.menuItem, { [_.active]: n }),
        children: [
            (0, i.jsx)(c.Text, {
                variant: s ? 'text-xs/normal' : 'text-sm/normal',
                color: n ? 'always-white' : 'interactive-normal',
                children: t
            }),
            r
        ]
    });
}
