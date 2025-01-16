n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    c = n(481060),
    d = n(430824),
    o = n(771845),
    m = n(259580),
    x = n(186523),
    h = n(553826),
    u = n(388032),
    j = n(415562),
    g = n(888102);
function b(e) {
    let { count: t } = e,
        [n, r] = s.useState('server');
    return (0, i.jsxs)(c.Scroller, {
        className: j.content,
        children: [
            (0, i.jsxs)('div', {
                className: l()(j.header, g.header),
                children: [
                    (0, i.jsx)(c.CircleCheckIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: u.intl.format(u.t.Wyk03t, { count: t })
                    }),
                    (0, i.jsx)(c.Text, {
                        className: j.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: u.intl.string(u.t['jr/rn5'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.tabs,
                children: [
                    (0, i.jsx)('div', {
                        className: g.tabBackground,
                        style: { left: 'server' === n ? 0 : '50%' }
                    }),
                    (0, i.jsx)(c.Clickable, {
                        className: g.tab,
                        onClick: () => r('server'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'server' === n ? 'header-primary' : 'text-muted',
                            children: u.intl.string(u.t.pS4WEh)
                        })
                    }),
                    (0, i.jsx)(c.Clickable, {
                        className: g.tab,
                        onClick: () => r('channel'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'channel' === n ? 'header-primary' : 'text-muted',
                            children: u.intl.string(u.t.UVxi0d)
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.container,
                children: [(0, i.jsx)(v, { hidden: 'channel' === n }), (0, i.jsx)(f, { hidden: 'server' === n })]
            })
        ]
    });
}
function v(e) {
    let { hidden: t } = e,
        n = (0, a.e7)([d.Z, o.ZP], () => {
            var e;
            return null === (e = d.Z.getGuild(o.ZP.getFlattenedGuildIds()[0])) || void 0 === e ? void 0 : e.name;
        }),
        [r, x] = s.useState(0);
    return (
        s.useEffect(() => {
            if (t) return;
            let e = 0,
                n = [1500, 1000, 1000, 500].map((t, n) => setTimeout(() => x(n + 1), (e += t)));
            return () => {
                n.forEach((e) => clearTimeout(e)), setTimeout(() => x(0), 150);
            };
        }, [t]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: g.containerInner,
                    children: (0, i.jsxs)('div', {
                        className: l()(g.serversSection, {
                            [g.hidden]: t,
                            [g.showBigMenu]: r >= 1,
                            [g.fadeChannels]: r >= 1,
                            [g.showModal]: r >= 3
                        }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.channels,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: g.guildName,
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'interactive-active',
                                                lineClamp: 1,
                                                children: null != n ? n : 'Keyboard Nerds'
                                            }),
                                            r >= 1
                                                ? (0, i.jsx)(c.XSmallIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: g.icon
                                                  })
                                                : (0, i.jsx)(m.Z, {
                                                      className: l()(g.__invalid_downCaret, g.icon),
                                                      width: 24,
                                                      height: 24
                                                  })
                                        ]
                                    }),
                                    (0, i.jsx)(_, { name: u.intl.string(u.t.jqWm9f) }),
                                    (0, i.jsx)(_, { name: u.intl.string(u.t.WFejRk) }),
                                    (0, i.jsx)(_, {
                                        grey: !0,
                                        name: u.intl.string(u.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(_, {
                                        grey: !0,
                                        name: u.intl.string(u.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(_, {
                                        grey: !0,
                                        name: u.intl.string(u.t['Ci+Our'])
                                    }),
                                    (0, i.jsx)(_, {
                                        nodot: !0,
                                        name: u.intl.string(u.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(_, {
                                        nodot: !0,
                                        name: u.intl.string(u.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: g.bigMenu,
                                children: [
                                    (0, i.jsx)(p, {
                                        text: u.intl.string(u.t.BN75l5),
                                        icon: (0, i.jsx)(c.GroupPlusIcon, {
                                            size: 'sm',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)('div', { className: g.divider }),
                                    (0, i.jsx)(p, {
                                        active: r >= 2,
                                        text: u.intl.string(u.t.h850Sk),
                                        icon: (0, i.jsx)(c.BellIcon, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        text: u.intl.string(u.t.BayiAg),
                                        icon: (0, i.jsx)(c.ShieldIcon, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        text: u.intl.string(u.t['154/bG']),
                                        icon: (0, i.jsx)(c.SettingsIcon, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        text: u.intl.string(u.t.qyjZub),
                                        icon: (0, i.jsx)(c.CalendarPlusIcon, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: g.notifModal,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        className: g.modalHeader,
                                        variant: 'text-md/medium',
                                        color: 'interactive-active',
                                        children: u.intl.string(u.t.h850Sk)
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: g.notifTabs,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: g.notifTab,
                                                children: [
                                                    (0, i.jsx)(c.CircleCheckIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(c.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        lineClamp: 1,
                                                        children: u.intl.string(u.t.hZrr6u)
                                                    })
                                                ]
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: g.activeNotifTab,
                                                children: [
                                                    (0, i.jsx)(c.AtIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(c.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'interactive-active',
                                                        lineClamp: 1,
                                                        children: u.intl.string(u.t.y59NJi)
                                                    })
                                                ]
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: g.notifTab,
                                                children: [
                                                    (0, i.jsx)(c.BellSlashIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(c.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        lineClamp: 1,
                                                        children: u.intl.string(u.t['pGn/bG'])
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: g.controls,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: g.control,
                                                children: [(0, i.jsx)('div', { className: g.controlPlaceholder }), (0, i.jsx)('div', { className: g.switchOn })]
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: g.control,
                                                children: [(0, i.jsx)('div', { className: g.controlPlaceholder }), (0, i.jsx)('div', { className: g.switchOff })]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, i.jsx)(N, {
                    text: u.intl.string(u.t['C//fOz']),
                    className: g.tipServers2,
                    hidden: t || r < 4
                })
            ]
        })
    );
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
                    className: g.containerInner,
                    children: (0, i.jsxs)('div', {
                        className: l()(g.channelsSection, {
                            [g.hidden]: t,
                            [g.fadeOtherChannels]: n >= 2,
                            [g.showLeftMenu]: n >= 2,
                            [g.showRightMenu]: n >= 3
                        }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.channels,
                                children: [
                                    (0, i.jsx)(_, {
                                        selected: n >= 1,
                                        grey: n >= 5,
                                        name: u.intl.string(u.t.jqWm9f)
                                    }),
                                    (0, i.jsx)(_, { name: u.intl.string(u.t.WFejRk) }),
                                    (0, i.jsx)(_, {
                                        grey: !0,
                                        name: u.intl.string(u.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(_, {
                                        grey: !0,
                                        name: u.intl.string(u.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(_, {
                                        grey: !0,
                                        name: u.intl.string(u.t['Ci+Our'])
                                    }),
                                    (0, i.jsx)(_, {
                                        nodot: !0,
                                        name: u.intl.string(u.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(_, {
                                        nodot: !0,
                                        name: u.intl.string(u.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: l()(g.menu, g.leftMenu),
                                children: [
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t['w4m94+']),
                                        icon: (0, i.jsx)(m.Z, {
                                            className: g.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t.HcoRu7),
                                        active: n >= 3,
                                        icon: (0, i.jsx)(m.Z, {
                                            className: g.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: l()(g.menu, g.rightMenu),
                                children: [
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t.hZrr6u),
                                        icon:
                                            n <= 4
                                                ? (0, i.jsx)(h.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, i.jsx)(x.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: n <= 4
                                    }),
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t.y59NJi),
                                        icon:
                                            n >= 5
                                                ? (0, i.jsx)(h.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, i.jsx)(x.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: n >= 5
                                    }),
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t['pGn/bG']),
                                        icon: (0, i.jsx)(x.Z, {
                                            className: g.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t['32yow8']),
                                        icon: (0, i.jsx)(x.Z, {
                                            className: g.icon,
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
                    text: u.intl.string(u.t['5Il5fn']),
                    className: g.tipChannels1,
                    hidden: t || n < 4
                }),
                (0, i.jsx)(N, {
                    text: u.intl.string(u.t['+ROcrq']),
                    className: g.tipChannels2,
                    hidden: t || n < 4
                })
            ]
        })
    );
}
function N(e) {
    let { text: t, className: n, hidden: s } = e;
    return (0, i.jsxs)('div', {
        className: l()(n, g.tip, { [g.hidden]: s }),
        children: [
            (0, i.jsx)(c.Text, {
                className: g.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, i.jsx)('div', { className: g.tipLine })
        ]
    });
}
function _(e) {
    let { grey: t, nodot: n, selected: s, name: r } = e;
    return (0, i.jsxs)('div', {
        className: l()(g.channel, {
            [g.grey]: t || n,
            [g.nodot]: n,
            [g.selected]: s
        }),
        children: [
            (0, i.jsx)(c.TextIcon, {
                size: 'xs',
                color: 'currentColor',
                className: g.channelIcon
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: g.channelName,
                children: r
            })
        ]
    });
}
function p(e) {
    let { text: t, active: n, small: s, icon: r } = e;
    return (0, i.jsxs)('div', {
        className: l()(g.menuItem, { [g.active]: n }),
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
