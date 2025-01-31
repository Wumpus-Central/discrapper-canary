s.d(t, { Z: () => _ }), s(47120);
var i = s(200651),
    n = s(192379),
    a = s(120356),
    r = s.n(a),
    l = s(442837),
    c = s(481060),
    d = s(430824),
    o = s(771845),
    m = s(259580),
    x = s(186523),
    h = s(553826),
    u = s(388032),
    j = s(415562),
    g = s(888102);
function _(e) {
    let { count: t } = e,
        [s, a] = n.useState('server');
    return (0, i.jsxs)(c.Ttm, {
        className: j.content,
        children: [
            (0, i.jsxs)('div', {
                className: r()(j.header, g.header),
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
                        style: { left: 'server' === s ? 0 : '50%' }
                    }),
                    (0, i.jsx)(c.P3F, {
                        className: g.tab,
                        onClick: () => a('server'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'server' === s ? 'header-primary' : 'text-muted',
                            children: u.intl.string(u.t.pS4WEh)
                        })
                    }),
                    (0, i.jsx)(c.P3F, {
                        className: g.tab,
                        onClick: () => a('channel'),
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'channel' === s ? 'header-primary' : 'text-muted',
                            children: u.intl.string(u.t.UVxi0d)
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: g.container,
                children: [(0, i.jsx)(v, { hidden: 'channel' === s }), (0, i.jsx)(b, { hidden: 'server' === s })]
            })
        ]
    });
}
function v(e) {
    let { hidden: t } = e,
        s = (0, l.e7)([d.Z, o.ZP], () => {
            var e;
            return null === (e = d.Z.getGuild(o.ZP.getFlattenedGuildIds()[0])) || void 0 === e ? void 0 : e.name;
        }),
        [a, x] = n.useState(0);
    return (
        n.useEffect(() => {
            if (t) return;
            let e = 0,
                s = [1500, 1000, 1000, 500].map((t, s) => setTimeout(() => x(s + 1), (e += t)));
            return () => {
                s.forEach((e) => clearTimeout(e)), setTimeout(() => x(0), 150);
            };
        }, [t]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: g.containerInner,
                    children: (0, i.jsxs)('div', {
                        className: r()(g.serversSection, {
                            [g.hidden]: t,
                            [g.showBigMenu]: a >= 1,
                            [g.fadeChannels]: a >= 1,
                            [g.showModal]: a >= 3
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
                                                children: null != s ? s : 'Keyboard Nerds'
                                            }),
                                            a >= 1
                                                ? (0, i.jsx)(c.Dio, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: g.icon
                                                  })
                                                : (0, i.jsx)(m.Z, {
                                                      className: r()(g.__invalid_downCaret, g.icon),
                                                      width: 24,
                                                      height: 24
                                                  })
                                        ]
                                    }),
                                    (0, i.jsx)(N, { name: u.intl.string(u.t.jqWm9f) }),
                                    (0, i.jsx)(N, { name: u.intl.string(u.t.WFejRk) }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: u.intl.string(u.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: u.intl.string(u.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: u.intl.string(u.t['Ci+Our'])
                                    }),
                                    (0, i.jsx)(N, {
                                        nodot: !0,
                                        name: u.intl.string(u.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(N, {
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
                                        icon: (0, i.jsx)(c.ejJ, {
                                            size: 'sm',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)('div', { className: g.divider }),
                                    (0, i.jsx)(p, {
                                        active: a >= 2,
                                        text: u.intl.string(u.t.h850Sk),
                                        icon: (0, i.jsx)(c.Dkj, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        text: u.intl.string(u.t.BayiAg),
                                        icon: (0, i.jsx)(c.b7C, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        text: u.intl.string(u.t['154/bG']),
                                        icon: (0, i.jsx)(c.ewm, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: g.icon
                                        })
                                    }),
                                    (0, i.jsx)(p, {
                                        text: u.intl.string(u.t.qyjZub),
                                        icon: (0, i.jsx)(c.VZI, {
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
                                                    (0, i.jsx)(c.owK, {
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
                                                    (0, i.jsx)(c.lOy, {
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
                                                    (0, i.jsx)(c.owu, {
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
                (0, i.jsx)(f, {
                    text: u.intl.string(u.t['C//fOz']),
                    className: g.tipServers2,
                    hidden: t || a < 4
                })
            ]
        })
    );
}
function b(e) {
    let { hidden: t } = e,
        [s, a] = n.useState(0);
    return (
        n.useEffect(() => {
            if (t) return;
            let e = 0,
                s = [1000, 1000, 1000, 800, 800].map((t, s) => setTimeout(() => a(s + 1), (e += t)));
            return () => {
                s.forEach((e) => clearTimeout(e)), setTimeout(() => a(0), 150);
            };
        }, [t]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: g.containerInner,
                    children: (0, i.jsxs)('div', {
                        className: r()(g.channelsSection, {
                            [g.hidden]: t,
                            [g.fadeOtherChannels]: s >= 2,
                            [g.showLeftMenu]: s >= 2,
                            [g.showRightMenu]: s >= 3
                        }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: g.channels,
                                children: [
                                    (0, i.jsx)(N, {
                                        selected: s >= 1,
                                        grey: s >= 5,
                                        name: u.intl.string(u.t.jqWm9f)
                                    }),
                                    (0, i.jsx)(N, { name: u.intl.string(u.t.WFejRk) }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: u.intl.string(u.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: u.intl.string(u.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(N, {
                                        grey: !0,
                                        name: u.intl.string(u.t['Ci+Our'])
                                    }),
                                    (0, i.jsx)(N, {
                                        nodot: !0,
                                        name: u.intl.string(u.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(N, {
                                        nodot: !0,
                                        name: u.intl.string(u.t['Ime/t7'])
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(g.menu, g.leftMenu),
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
                                        active: s >= 3,
                                        icon: (0, i.jsx)(m.Z, {
                                            className: g.caret,
                                            width: 12,
                                            height: 12
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: r()(g.menu, g.rightMenu),
                                children: [
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t.hZrr6u),
                                        icon:
                                            s <= 4
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
                                        active: s <= 4
                                    }),
                                    (0, i.jsx)(p, {
                                        small: !0,
                                        text: u.intl.string(u.t.y59NJi),
                                        icon:
                                            s >= 5
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
                                        active: s >= 5
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
                (0, i.jsx)(f, {
                    text: u.intl.string(u.t['5Il5fn']),
                    className: g.tipChannels1,
                    hidden: t || s < 4
                }),
                (0, i.jsx)(f, {
                    text: u.intl.string(u.t['+ROcrq']),
                    className: g.tipChannels2,
                    hidden: t || s < 4
                })
            ]
        })
    );
}
function f(e) {
    let { text: t, className: s, hidden: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(s, g.tip, { [g.hidden]: n }),
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
function N(e) {
    let { grey: t, nodot: s, selected: n, name: a } = e;
    return (0, i.jsxs)('div', {
        className: r()(g.channel, {
            [g.grey]: t || s,
            [g.nodot]: s,
            [g.selected]: n
        }),
        children: [
            (0, i.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: g.channelIcon
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: g.channelName,
                children: a
            })
        ]
    });
}
function p(e) {
    let { text: t, active: s, small: n, icon: a } = e;
    return (0, i.jsxs)('div', {
        className: r()(g.menuItem, { [g.active]: s }),
        children: [
            (0, i.jsx)(c.Text, {
                variant: n ? 'text-xs/normal' : 'text-sm/normal',
                color: s ? 'always-white' : 'interactive-normal',
                children: t
            }),
            a
        ]
    });
}
