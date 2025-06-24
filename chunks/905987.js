n.d(t, { Z: () => f }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    c = n(481060),
    o = n(340541),
    d = n(430824),
    m = n(771845),
    u = n(259580),
    x = n(186523),
    h = n(553826),
    j = n(388032),
    g = n(699343),
    b = n(949509);
function f(e) {
    let { count: t } = e,
        [n, s] = r.useState('server');
    return (0, i.jsxs)(c.Ttm, {
        className: g.content,
        children: [
            (0, i.jsxs)('div', {
                className: a()(g.header, b.header),
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
                className: b.tabs,
                children: [
                    (0, i.jsx)('div', {
                        className: b.tabBackground,
                        style: { left: 'server' === n ? 0 : '50%' }
                    }),
                    (0, i.jsx)(c.P3F, {
                        className: b.tab,
                        onClick: () => s('server'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'server' === n ? 'header-primary' : 'text-muted',
                            children: j.intl.string(j.t.pS4WEh)
                        })
                    }),
                    (0, i.jsx)(c.P3F, {
                        className: b.tab,
                        onClick: () => s('channel'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'channel' === n ? 'header-primary' : 'text-muted',
                            children: j.intl.string(j.t.UVxi0d)
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: b.container,
                children: [(0, i.jsx)(v, { hidden: 'channel' === n }), (0, i.jsx)(_, { hidden: 'server' === n })]
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
        [s, x] = r.useState(0);
    r.useEffect(() => {
        if (t) return;
        let e = 0,
            n = [1500, 1000, 1000, 500].map((t, n) => setTimeout(() => x(n + 1), (e += t)));
        return () => {
            n.forEach((e) => clearTimeout(e)), setTimeout(() => x(0), 150);
        };
    }, [t]);
    let { entrypoints: h } = (0, o._k)({ location: 'tips_tab' });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: b.containerInner,
                children: (0, i.jsxs)('div', {
                    className: a()(b.serversSection, {
                        [b.hidden]: t,
                        [b.showBigMenu]: s >= 1,
                        [b.fadeChannels]: s >= 1,
                        [b.showModal]: s >= 3
                    }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: b.channels,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: b.guildName,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/medium',
                                            color: 'interactive-active',
                                            lineClamp: 1,
                                            children: null != n ? n : 'Keyboard Nerds'
                                        }),
                                        s >= 1
                                            ? (0, i.jsx)(c.Dio, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: b.icon
                                              })
                                            : (0, i.jsx)(u.Z, {
                                                  className: a()(b.__invalid_downCaret, b.icon),
                                                  width: 24,
                                                  height: 24
                                              })
                                    ]
                                }),
                                (0, i.jsx)(N, { name: j.intl.string(j.t.jqWm9f) }),
                                (0, i.jsx)(N, { name: j.intl.string(j.t.WFejRk) }),
                                (0, i.jsx)(N, {
                                    grey: !0,
                                    name: j.intl.string(j.t.p9z9Iy)
                                }),
                                (0, i.jsx)(N, {
                                    grey: !0,
                                    name: j.intl.string(j.t['2bdWDw'])
                                }),
                                (0, i.jsx)(N, {
                                    grey: !0,
                                    name: j.intl.string(j.t['Ci+Our'])
                                }),
                                (0, i.jsx)(N, {
                                    nodot: !0,
                                    name: j.intl.string(j.t['/7TEdn'])
                                }),
                                (0, i.jsx)(N, {
                                    nodot: !0,
                                    name: j.intl.string(j.t['Ime/t7'])
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: b.bigMenu,
                            children: [
                                (0, i.jsx)(y, {
                                    text: h ? j.intl.string(j.t.Sd8Ix8) : j.intl.string(j.t.BN75l5),
                                    icon: (0, i.jsx)(c.ejJ, {
                                        size: 'sm',
                                        className: b.icon
                                    })
                                }),
                                (0, i.jsx)('div', { className: b.divider }),
                                (0, i.jsx)(y, {
                                    active: s >= 2,
                                    text: j.intl.string(j.t.h850Sk),
                                    icon: (0, i.jsx)(c.Dkj, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: b.icon
                                    })
                                }),
                                (0, i.jsx)(y, {
                                    text: j.intl.string(j.t.BayiAg),
                                    icon: (0, i.jsx)(c.b7C, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: b.icon
                                    })
                                }),
                                (0, i.jsx)(y, {
                                    text: j.intl.string(j.t['154/bG']),
                                    icon: (0, i.jsx)(c.ewm, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: b.icon
                                    })
                                }),
                                (0, i.jsx)(y, {
                                    text: j.intl.string(j.t.qyjZub),
                                    icon: (0, i.jsx)(c.VZI, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: b.icon
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: b.notifModal,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    className: b.modalHeader,
                                    variant: 'text-md/medium',
                                    color: 'interactive-active',
                                    children: j.intl.string(j.t.h850Sk)
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.notifTabs,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: b.notifTab,
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
                                            className: b.activeNotifTab,
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
                                            className: b.notifTab,
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
                                    className: b.controls,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: b.control,
                                            children: [(0, i.jsx)('div', { className: b.controlPlaceholder }), (0, i.jsx)('div', { className: b.switchOn })]
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: b.control,
                                            children: [(0, i.jsx)('div', { className: b.controlPlaceholder }), (0, i.jsx)('div', { className: b.switchOff })]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(p, {
                text: j.intl.string(j.t['C//fOz']),
                className: b.tipServers2,
                hidden: t || s < 4
            })
        ]
    });
}
function _(e) {
    let { hidden: t } = e,
        [n, s] = r.useState(0);
    return (
        r.useEffect(() => {
            if (t) return;
            let e = 0,
                n = [1000, 1000, 1000, 800, 800].map((t, n) => setTimeout(() => s(n + 1), (e += t)));
            return () => {
                n.forEach((e) => clearTimeout(e)), setTimeout(() => s(0), 150);
            };
        }, [t]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: b.containerInner,
                    children: (0, i.jsxs)('div', {
                        className: a()(b.channelsSection, {
                            [b.hidden]: t,
                            [b.fadeOtherChannels]: n >= 2,
                            [b.showLeftMenu]: n >= 2,
                            [b.showRightMenu]: n >= 3
                        }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: b.channels,
                                children: [
                                    (0, i.jsx)(N, {
                                        selected: n >= 1,
                                        grey: n >= 5,
                                        name: j.intl.string(j.t.jqWm9f)
                                    }),
                                    (0, i.jsx)(N, { name: j.intl.string(j.t.WFejRk) }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: j.intl.string(j.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: j.intl.string(j.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: j.intl.string(j.t['Ci+Our'])
                                    }),
                                    (0, i.jsx)(N, {
                                        nodot: !0,
                                        name: j.intl.string(j.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(N, {
                                        nodot: !0,
                                        name: j.intl.string(j.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(b.menu, b.leftMenu),
                                children: [
                                    (0, i.jsx)(y, {
                                        small: !0,
                                        text: j.intl.string(j.t['w4m94+']),
                                        icon: (0, i.jsx)(u.Z, {
                                            className: b.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, i.jsx)(y, {
                                        small: !0,
                                        text: j.intl.string(j.t.HcoRu7),
                                        active: n >= 3,
                                        icon: (0, i.jsx)(u.Z, {
                                            className: b.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: a()(b.menu, b.rightMenu),
                                children: [
                                    (0, i.jsx)(y, {
                                        small: !0,
                                        text: j.intl.string(j.t.hZrr6u),
                                        icon:
                                            n <= 4
                                                ? (0, i.jsx)(h.Z, {
                                                      className: b.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, i.jsx)(x.Z, {
                                                      className: b.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: n <= 4
                                    }),
                                    (0, i.jsx)(y, {
                                        small: !0,
                                        text: j.intl.string(j.t.y59NJi),
                                        icon:
                                            n >= 5
                                                ? (0, i.jsx)(h.Z, {
                                                      className: b.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, i.jsx)(x.Z, {
                                                      className: b.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: n >= 5
                                    }),
                                    (0, i.jsx)(y, {
                                        small: !0,
                                        text: j.intl.string(j.t['pGn/bG']),
                                        icon: (0, i.jsx)(x.Z, {
                                            className: b.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, i.jsx)(y, {
                                        small: !0,
                                        text: j.intl.string(j.t['32yow8']),
                                        icon: (0, i.jsx)(x.Z, {
                                            className: b.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, i.jsx)(p, {
                    text: j.intl.string(j.t['5Il5fn']),
                    className: b.tipChannels1,
                    hidden: t || n < 4
                }),
                (0, i.jsx)(p, {
                    text: j.intl.string(j.t['+ROcrq']),
                    className: b.tipChannels2,
                    hidden: t || n < 4
                })
            ]
        })
    );
}
function p(e) {
    let { text: t, className: n, hidden: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(n, b.tip, { [b.hidden]: r }),
        children: [
            (0, i.jsx)(c.Text, {
                className: b.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, i.jsx)('div', { className: b.tipLine })
        ]
    });
}
function N(e) {
    let { grey: t, nodot: n, selected: r, name: s } = e;
    return (0, i.jsxs)('div', {
        className: a()(b.channel, {
            [b.grey]: t || n,
            [b.nodot]: n,
            [b.selected]: r
        }),
        children: [
            (0, i.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: b.channelIcon
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: b.channelName,
                children: s
            })
        ]
    });
}
function y(e) {
    let { text: t, active: n, small: r, icon: s } = e;
    return (0, i.jsxs)('div', {
        className: a()(b.menuItem, { [b.active]: n }),
        children: [
            (0, i.jsx)(c.Text, {
                variant: r ? 'text-xs/normal' : 'text-sm/normal',
                color: n ? 'always-white' : 'interactive-normal',
                children: t
            }),
            s
        ]
    });
}
