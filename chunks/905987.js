s.d(t, { Z: () => N }), s(47120);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    a = s.n(r),
    l = s(442837),
    c = s(481060),
    d = s(430824),
    o = s(771845),
    m = s(259580),
    x = s(186523),
    h = s(553826),
    u = s(388032),
    j = s(699343),
    g = s(949509);
function N(e) {
    let { count: t } = e,
        [s, r] = i.useState('server');
    return (0, n.jsxs)(c.Ttm, {
        className: j.content,
        children: [
            (0, n.jsxs)('div', {
                className: a()(j.header, g.header),
                children: [
                    (0, n.jsx)(c.owK, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40
                    }),
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: u.NW.format(u.t.Wyk03t, { count: t })
                    }),
                    (0, n.jsx)(c.Text, {
                        className: j.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: u.NW.string(u.t['jr/rn5'])
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: g.tabs,
                children: [
                    (0, n.jsx)('div', {
                        className: g.tabBackground,
                        style: { left: 'server' === s ? 0 : '50%' }
                    }),
                    (0, n.jsx)(c.P3F, {
                        className: g.tab,
                        onClick: () => r('server'),
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'server' === s ? 'header-primary' : 'text-muted',
                            children: u.NW.string(u.t.pS4WEh)
                        })
                    }),
                    (0, n.jsx)(c.P3F, {
                        className: g.tab,
                        onClick: () => r('channel'),
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'channel' === s ? 'header-primary' : 'text-muted',
                            children: u.NW.string(u.t.UVxi0d)
                        })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: g.container,
                children: [(0, n.jsx)(_, { hidden: 'channel' === s }), (0, n.jsx)(b, { hidden: 'server' === s })]
            })
        ]
    });
}
function _(e) {
    let { hidden: t } = e,
        s = (0, l.e7)([d.Z, o.ZP], () => {
            var e;
            return null == (e = d.Z.getGuild(o.ZP.getFlattenedGuildIds()[0])) ? void 0 : e.name;
        }),
        [r, x] = i.useState(0);
    return (
        i.useEffect(() => {
            if (t) return;
            let e = 0,
                s = [1500, 1000, 1000, 500].map((t, s) => setTimeout(() => x(s + 1), (e += t)));
            return () => {
                s.forEach((e) => clearTimeout(e)), setTimeout(() => x(0), 150);
            };
        }, [t]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)('div', {
                    className: g.containerInner,
                    children: (0, n.jsxs)('div', {
                        className: a()(g.serversSection, {
                            [g.hidden]: t,
                            [g.showBigMenu]: r >= 1,
                            [g.fadeChannels]: r >= 1,
                            [g.showModal]: r >= 3
                        }),
                        children: [
                            (0, n.jsxs)('div', {
                                className: g.channels,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: g.guildName,
                                        children: [
                                            (0, n.jsx)(c.Text, {
                                                variant: 'text-md/medium',
                                                color: 'interactive-active',
                                                lineClamp: 1,
                                                children: null != s ? s : 'Keyboard Nerds'
                                            }),
                                            r >= 1
                                                ? (0, n.jsx)(c.Dio, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: g.icon
                                                  })
                                                : (0, n.jsx)(m.Z, {
                                                      className: a()(g.__invalid_downCaret, g.icon),
                                                      width: 24,
                                                      height: 24
                                                  })
                                        ]
                                    }),
                                    (0, n.jsx)(f, { name: u.NW.string(u.t.jqWm9f) }),
                                    (0, n.jsx)(f, { name: u.NW.string(u.t.WFejRk) }),
                                    (0, n.jsx)(f, {
                                        grey: !0,
                                        name: u.NW.string(u.t.p9z9Iy)
                                    }),
                                    (0, n.jsx)(f, {
                                        grey: !0,
                                        name: u.NW.string(u.t['2bdWDw'])
                                    }),
                                    (0, n.jsx)(f, {
                                        grey: !0,
                                        name: u.NW.string(u.t['Ci+Our'])
                                    }),
                                    (0, n.jsx)(f, {
                                        nodot: !0,
                                        name: u.NW.string(u.t['/7TEdn'])
                                    }),
                                    (0, n.jsx)(f, {
                                        nodot: !0,
                                        name: u.NW.string(u.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: g.bigMenu,
                                children: [
                                    (0, n.jsx)(p, {
                                        text: u.NW.string(u.t.BN75l5),
                                        icon: (0, n.jsx)(c.ejJ, {
                                            size: 'sm',
                                            className: g.icon
                                        })
                                    }),
                                    (0, n.jsx)('div', { className: g.divider }),
                                    (0, n.jsx)(p, {
                                        active: r >= 2,
                                        text: u.NW.string(u.t.h850Sk),
                                        icon: (0, n.jsx)(c.Dkj, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, n.jsx)(p, {
                                        text: u.NW.string(u.t.BayiAg),
                                        icon: (0, n.jsx)(c.b7C, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, n.jsx)(p, {
                                        text: u.NW.string(u.t['154/bG']),
                                        icon: (0, n.jsx)(c.ewm, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, n.jsx)(p, {
                                        text: u.NW.string(u.t.qyjZub),
                                        icon: (0, n.jsx)(c.VZI, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: g.notifModal,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        className: g.modalHeader,
                                        variant: 'text-md/medium',
                                        color: 'interactive-active',
                                        children: u.NW.string(u.t.h850Sk)
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: g.notifTabs,
                                        children: [
                                            (0, n.jsxs)('div', {
                                                className: g.notifTab,
                                                children: [
                                                    (0, n.jsx)(c.owK, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, n.jsx)(c.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        lineClamp: 1,
                                                        children: u.NW.string(u.t.hZrr6u)
                                                    })
                                                ]
                                            }),
                                            (0, n.jsxs)('div', {
                                                className: g.activeNotifTab,
                                                children: [
                                                    (0, n.jsx)(c.lOy, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, n.jsx)(c.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'interactive-active',
                                                        lineClamp: 1,
                                                        children: u.NW.string(u.t.y59NJi)
                                                    })
                                                ]
                                            }),
                                            (0, n.jsxs)('div', {
                                                className: g.notifTab,
                                                children: [
                                                    (0, n.jsx)(c.owu, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, n.jsx)(c.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        lineClamp: 1,
                                                        children: u.NW.string(u.t['pGn/bG'])
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: g.controls,
                                        children: [
                                            (0, n.jsxs)('div', {
                                                className: g.control,
                                                children: [(0, n.jsx)('div', { className: g.controlPlaceholder }), (0, n.jsx)('div', { className: g.switchOn })]
                                            }),
                                            (0, n.jsxs)('div', {
                                                className: g.control,
                                                children: [(0, n.jsx)('div', { className: g.controlPlaceholder }), (0, n.jsx)('div', { className: g.switchOff })]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, n.jsx)(v, {
                    text: u.NW.string(u.t['C//fOz']),
                    className: g.tipServers2,
                    hidden: t || r < 4
                })
            ]
        })
    );
}
function b(e) {
    let { hidden: t } = e,
        [s, r] = i.useState(0);
    return (
        i.useEffect(() => {
            if (t) return;
            let e = 0,
                s = [1000, 1000, 1000, 800, 800].map((t, s) => setTimeout(() => r(s + 1), (e += t)));
            return () => {
                s.forEach((e) => clearTimeout(e)), setTimeout(() => r(0), 150);
            };
        }, [t]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)('div', {
                    className: g.containerInner,
                    children: (0, n.jsxs)('div', {
                        className: a()(g.channelsSection, {
                            [g.hidden]: t,
                            [g.fadeOtherChannels]: s >= 2,
                            [g.showLeftMenu]: s >= 2,
                            [g.showRightMenu]: s >= 3
                        }),
                        children: [
                            (0, n.jsxs)('div', {
                                className: g.channels,
                                children: [
                                    (0, n.jsx)(f, {
                                        selected: s >= 1,
                                        grey: s >= 5,
                                        name: u.NW.string(u.t.jqWm9f)
                                    }),
                                    (0, n.jsx)(f, { name: u.NW.string(u.t.WFejRk) }),
                                    (0, n.jsx)(f, {
                                        grey: !0,
                                        name: u.NW.string(u.t.p9z9Iy)
                                    }),
                                    (0, n.jsx)(f, {
                                        grey: !0,
                                        name: u.NW.string(u.t['2bdWDw'])
                                    }),
                                    (0, n.jsx)(f, {
                                        grey: !0,
                                        name: u.NW.string(u.t['Ci+Our'])
                                    }),
                                    (0, n.jsx)(f, {
                                        nodot: !0,
                                        name: u.NW.string(u.t['/7TEdn'])
                                    }),
                                    (0, n.jsx)(f, {
                                        nodot: !0,
                                        name: u.NW.string(u.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: a()(g.menu, g.leftMenu),
                                children: [
                                    (0, n.jsx)(p, {
                                        small: !0,
                                        text: u.NW.string(u.t['w4m94+']),
                                        icon: (0, n.jsx)(m.Z, {
                                            className: g.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, n.jsx)(p, {
                                        small: !0,
                                        text: u.NW.string(u.t.HcoRu7),
                                        active: s >= 3,
                                        icon: (0, n.jsx)(m.Z, {
                                            className: g.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: a()(g.menu, g.rightMenu),
                                children: [
                                    (0, n.jsx)(p, {
                                        small: !0,
                                        text: u.NW.string(u.t.hZrr6u),
                                        icon:
                                            s <= 4
                                                ? (0, n.jsx)(h.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, n.jsx)(x.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: s <= 4
                                    }),
                                    (0, n.jsx)(p, {
                                        small: !0,
                                        text: u.NW.string(u.t.y59NJi),
                                        icon:
                                            s >= 5
                                                ? (0, n.jsx)(h.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, n.jsx)(x.Z, {
                                                      className: g.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: s >= 5
                                    }),
                                    (0, n.jsx)(p, {
                                        small: !0,
                                        text: u.NW.string(u.t['pGn/bG']),
                                        icon: (0, n.jsx)(x.Z, {
                                            className: g.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, n.jsx)(p, {
                                        small: !0,
                                        text: u.NW.string(u.t['32yow8']),
                                        icon: (0, n.jsx)(x.Z, {
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
                (0, n.jsx)(v, {
                    text: u.NW.string(u.t['5Il5fn']),
                    className: g.tipChannels1,
                    hidden: t || s < 4
                }),
                (0, n.jsx)(v, {
                    text: u.NW.string(u.t['+ROcrq']),
                    className: g.tipChannels2,
                    hidden: t || s < 4
                })
            ]
        })
    );
}
function v(e) {
    let { text: t, className: s, hidden: i } = e;
    return (0, n.jsxs)('div', {
        className: a()(s, g.tip, { [g.hidden]: i }),
        children: [
            (0, n.jsx)(c.Text, {
                className: g.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, n.jsx)('div', { className: g.tipLine })
        ]
    });
}
function f(e) {
    let { grey: t, nodot: s, selected: i, name: r } = e;
    return (0, n.jsxs)('div', {
        className: a()(g.channel, {
            [g.grey]: t || s,
            [g.nodot]: s,
            [g.selected]: i
        }),
        children: [
            (0, n.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: g.channelIcon
            }),
            (0, n.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: g.channelName,
                children: r
            })
        ]
    });
}
function p(e) {
    let { text: t, active: s, small: i, icon: r } = e;
    return (0, n.jsxs)('div', {
        className: a()(g.menuItem, { [g.active]: s }),
        children: [
            (0, n.jsx)(c.Text, {
                variant: i ? 'text-xs/normal' : 'text-sm/normal',
                color: s ? 'always-white' : 'interactive-normal',
                children: t
            }),
            r
        ]
    });
}
