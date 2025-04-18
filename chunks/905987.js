s.d(t, { Z: () => _ }), s(388685);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    a = s.n(r),
    l = s(442837),
    c = s(481060),
    o = s(340541),
    d = s(430824),
    m = s(771845),
    x = s(259580),
    h = s(186523),
    u = s(553826),
    j = s(388032),
    g = s(789231),
    N = s(518647);
function _(e) {
    let { count: t } = e,
        [s, r] = i.useState('server');
    return (0, n.jsxs)(c.Ttm, {
        className: g.content,
        children: [
            (0, n.jsxs)('div', {
                className: a()(g.header, N.header),
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
                        children: j.NW.format(j.t.Wyk03t, { count: t })
                    }),
                    (0, n.jsx)(c.Text, {
                        className: g.__invalid_subtitle,
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: j.NW.string(j.t['jr/rn5'])
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: N.tabs,
                children: [
                    (0, n.jsx)('div', {
                        className: N.tabBackground,
                        style: { left: 'server' === s ? 0 : '50%' }
                    }),
                    (0, n.jsx)(c.P3F, {
                        className: N.tab,
                        onClick: () => r('server'),
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'server' === s ? 'header-primary' : 'text-muted',
                            children: j.NW.string(j.t.pS4WEh)
                        })
                    }),
                    (0, n.jsx)(c.P3F, {
                        className: N.tab,
                        onClick: () => r('channel'),
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'channel' === s ? 'header-primary' : 'text-muted',
                            children: j.NW.string(j.t.UVxi0d)
                        })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: N.container,
                children: [(0, n.jsx)(b, { hidden: 'channel' === s }), (0, n.jsx)(v, { hidden: 'server' === s })]
            })
        ]
    });
}
function b(e) {
    let { hidden: t } = e,
        s = (0, l.e7)([d.Z, m.ZP], () => {
            var e;
            return null == (e = d.Z.getGuild(m.ZP.getFlattenedGuildIds()[0])) ? void 0 : e.name;
        }),
        [r, h] = i.useState(0);
    i.useEffect(() => {
        if (t) return;
        let e = 0,
            s = [1500, 1000, 1000, 500].map((t, s) => setTimeout(() => h(s + 1), (e += t)));
        return () => {
            s.forEach((e) => clearTimeout(e)), setTimeout(() => h(0), 150);
        };
    }, [t]);
    let { entrypoints: u } = (0, o._k)({ location: 'tips_tab' });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: N.containerInner,
                children: (0, n.jsxs)('div', {
                    className: a()(N.serversSection, {
                        [N.hidden]: t,
                        [N.showBigMenu]: r >= 1,
                        [N.fadeChannels]: r >= 1,
                        [N.showModal]: r >= 3
                    }),
                    children: [
                        (0, n.jsxs)('div', {
                            className: N.channels,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: N.guildName,
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
                                                  className: N.icon
                                              })
                                            : (0, n.jsx)(x.Z, {
                                                  className: a()(N.__invalid_downCaret, N.icon),
                                                  width: 24,
                                                  height: 24
                                              })
                                    ]
                                }),
                                (0, n.jsx)(p, { name: j.NW.string(j.t.jqWm9f) }),
                                (0, n.jsx)(p, { name: j.NW.string(j.t.WFejRk) }),
                                (0, n.jsx)(p, {
                                    grey: !0,
                                    name: j.NW.string(j.t.p9z9Iy)
                                }),
                                (0, n.jsx)(p, {
                                    grey: !0,
                                    name: j.NW.string(j.t['2bdWDw'])
                                }),
                                (0, n.jsx)(p, {
                                    grey: !0,
                                    name: j.NW.string(j.t['Ci+Our'])
                                }),
                                (0, n.jsx)(p, {
                                    nodot: !0,
                                    name: j.NW.string(j.t['/7TEdn'])
                                }),
                                (0, n.jsx)(p, {
                                    nodot: !0,
                                    name: j.NW.string(j.t['Ime/t7'])
                                })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: N.bigMenu,
                            children: [
                                (0, n.jsx)(W, {
                                    text: u ? j.NW.string(j.t.Sd8Ix8) : j.NW.string(j.t.BN75l5),
                                    icon: (0, n.jsx)(c.ejJ, {
                                        size: 'sm',
                                        className: N.icon
                                    })
                                }),
                                (0, n.jsx)('div', { className: N.divider }),
                                (0, n.jsx)(W, {
                                    active: r >= 2,
                                    text: j.NW.string(j.t.h850Sk),
                                    icon: (0, n.jsx)(c.Dkj, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: N.icon
                                    })
                                }),
                                (0, n.jsx)(W, {
                                    text: j.NW.string(j.t.BayiAg),
                                    icon: (0, n.jsx)(c.b7C, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: N.icon
                                    })
                                }),
                                (0, n.jsx)(W, {
                                    text: j.NW.string(j.t['154/bG']),
                                    icon: (0, n.jsx)(c.ewm, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: N.icon
                                    })
                                }),
                                (0, n.jsx)(W, {
                                    text: j.NW.string(j.t.qyjZub),
                                    icon: (0, n.jsx)(c.VZI, {
                                        size: 'sm',
                                        color: 'currentColor',
                                        className: N.icon
                                    })
                                })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: N.notifModal,
                            children: [
                                (0, n.jsx)(c.Text, {
                                    className: N.modalHeader,
                                    variant: 'text-md/medium',
                                    color: 'interactive-active',
                                    children: j.NW.string(j.t.h850Sk)
                                }),
                                (0, n.jsxs)('div', {
                                    className: N.notifTabs,
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: N.notifTab,
                                            children: [
                                                (0, n.jsx)(c.owK, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                }),
                                                (0, n.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    lineClamp: 1,
                                                    children: j.NW.string(j.t.hZrr6u)
                                                })
                                            ]
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: N.activeNotifTab,
                                            children: [
                                                (0, n.jsx)(c.lOy, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                }),
                                                (0, n.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'interactive-active',
                                                    lineClamp: 1,
                                                    children: j.NW.string(j.t.y59NJi)
                                                })
                                            ]
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: N.notifTab,
                                            children: [
                                                (0, n.jsx)(c.owu, {
                                                    size: 'md',
                                                    color: 'currentColor'
                                                }),
                                                (0, n.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    lineClamp: 1,
                                                    children: j.NW.string(j.t['pGn/bG'])
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsxs)('div', {
                                    className: N.controls,
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: N.control,
                                            children: [(0, n.jsx)('div', { className: N.controlPlaceholder }), (0, n.jsx)('div', { className: N.switchOn })]
                                        }),
                                        (0, n.jsxs)('div', {
                                            className: N.control,
                                            children: [(0, n.jsx)('div', { className: N.controlPlaceholder }), (0, n.jsx)('div', { className: N.switchOff })]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, n.jsx)(f, {
                text: j.NW.string(j.t['C//fOz']),
                className: N.tipServers2,
                hidden: t || r < 4
            })
        ]
    });
}
function v(e) {
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
                    className: N.containerInner,
                    children: (0, n.jsxs)('div', {
                        className: a()(N.channelsSection, {
                            [N.hidden]: t,
                            [N.fadeOtherChannels]: s >= 2,
                            [N.showLeftMenu]: s >= 2,
                            [N.showRightMenu]: s >= 3
                        }),
                        children: [
                            (0, n.jsxs)('div', {
                                className: N.channels,
                                children: [
                                    (0, n.jsx)(p, {
                                        selected: s >= 1,
                                        grey: s >= 5,
                                        name: j.NW.string(j.t.jqWm9f)
                                    }),
                                    (0, n.jsx)(p, { name: j.NW.string(j.t.WFejRk) }),
                                    (0, n.jsx)(p, {
                                        grey: !0,
                                        name: j.NW.string(j.t.p9z9Iy)
                                    }),
                                    (0, n.jsx)(p, {
                                        grey: !0,
                                        name: j.NW.string(j.t['2bdWDw'])
                                    }),
                                    (0, n.jsx)(p, {
                                        grey: !0,
                                        name: j.NW.string(j.t['Ci+Our'])
                                    }),
                                    (0, n.jsx)(p, {
                                        nodot: !0,
                                        name: j.NW.string(j.t['/7TEdn'])
                                    }),
                                    (0, n.jsx)(p, {
                                        nodot: !0,
                                        name: j.NW.string(j.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: a()(N.menu, N.leftMenu),
                                children: [
                                    (0, n.jsx)(W, {
                                        small: !0,
                                        text: j.NW.string(j.t['w4m94+']),
                                        icon: (0, n.jsx)(x.Z, {
                                            className: N.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, n.jsx)(W, {
                                        small: !0,
                                        text: j.NW.string(j.t.HcoRu7),
                                        active: s >= 3,
                                        icon: (0, n.jsx)(x.Z, {
                                            className: N.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: a()(N.menu, N.rightMenu),
                                children: [
                                    (0, n.jsx)(W, {
                                        small: !0,
                                        text: j.NW.string(j.t.hZrr6u),
                                        icon:
                                            s <= 4
                                                ? (0, n.jsx)(u.Z, {
                                                      className: N.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, n.jsx)(h.Z, {
                                                      className: N.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: s <= 4
                                    }),
                                    (0, n.jsx)(W, {
                                        small: !0,
                                        text: j.NW.string(j.t.y59NJi),
                                        icon:
                                            s >= 5
                                                ? (0, n.jsx)(u.Z, {
                                                      className: N.icon,
                                                      width: 12,
                                                      height: 12
                                                  })
                                                : (0, n.jsx)(h.Z, {
                                                      className: N.icon,
                                                      width: 12,
                                                      height: 12
                                                  }),
                                        active: s >= 5
                                    }),
                                    (0, n.jsx)(W, {
                                        small: !0,
                                        text: j.NW.string(j.t['pGn/bG']),
                                        icon: (0, n.jsx)(h.Z, {
                                            className: N.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    }),
                                    (0, n.jsx)(W, {
                                        small: !0,
                                        text: j.NW.string(j.t['32yow8']),
                                        icon: (0, n.jsx)(h.Z, {
                                            className: N.icon,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, n.jsx)(f, {
                    text: j.NW.string(j.t['5Il5fn']),
                    className: N.tipChannels1,
                    hidden: t || s < 4
                }),
                (0, n.jsx)(f, {
                    text: j.NW.string(j.t['+ROcrq']),
                    className: N.tipChannels2,
                    hidden: t || s < 4
                })
            ]
        })
    );
}
function f(e) {
    let { text: t, className: s, hidden: i } = e;
    return (0, n.jsxs)('div', {
        className: a()(s, N.tip, { [N.hidden]: i }),
        children: [
            (0, n.jsx)(c.Text, {
                className: N.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, n.jsx)('div', { className: N.tipLine })
        ]
    });
}
function p(e) {
    let { grey: t, nodot: s, selected: i, name: r } = e;
    return (0, n.jsxs)('div', {
        className: a()(N.channel, {
            [N.grey]: t || s,
            [N.nodot]: s,
            [N.selected]: i
        }),
        children: [
            (0, n.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: N.channelIcon
            }),
            (0, n.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: N.channelName,
                children: r
            })
        ]
    });
}
function W(e) {
    let { text: t, active: s, small: i, icon: r } = e;
    return (0, n.jsxs)('div', {
        className: a()(N.menuItem, { [N.active]: s }),
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
