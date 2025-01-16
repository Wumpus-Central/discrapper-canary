n.d(e, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(392711),
    l = n(442837),
    r = n(692547),
    c = n(481060),
    o = n(594174),
    d = n(531441),
    u = n(451284),
    m = n(959562),
    x = n(800530),
    h = n(388032),
    g = n(578363);
function v() {
    let t = (0, u.P)(),
        e = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        [n, v] = a.useState(36),
        j = a.useRef({
            [d.Sn.ALL_GOOD]: null,
            [d.Sn.LIMITED]: null,
            [d.Sn.VERY_LIMITED]: null,
            [d.Sn.AT_RISK]: null,
            [d.Sn.SUSPENDED]: null
        }),
        N = a.useCallback(() => {
            v(
                Math.max(
                    Math.max(
                        ...Object.values(j.current).map((t) => {
                            var e;
                            return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36;
                        })
                    ),
                    36
                )
            );
        }, []);
    a.useEffect(() => {
        N();
        let t = (0, s.debounce)(N, 100);
        window.addEventListener('resize', t);
    }, [N]);
    let f = {
            [d.Sn.ALL_GOOD]: {
                title: h.t.uaKrRk,
                description: h.intl.format(h.t.pEdBDw, {
                    termsOfService: x.sQ.TOS_LINK,
                    communityGuidelines: x.sQ.COMMUNITY_GUIDELINES
                }),
                status: h.t['/Idfam'],
                Icon: c.CircleCheckIcon,
                color: r.Z.colors.STATUS_POSITIVE
            },
            [d.Sn.LIMITED]: {
                title: h.t.epkcmZ,
                description: h.intl.string(h.t['774jub']),
                status: h.t.umleq6,
                Icon: c.CircleWarningIcon,
                color: r.Z.colors.STATUS_WARNING
            },
            [d.Sn.VERY_LIMITED]: {
                title: h.t.crzE2d,
                description: h.intl.string(h.t['T/Ufh4']),
                status: h.t.WBtMHR,
                Icon: c.CircleWarningIcon,
                color: r.Z.unsafe_rawColors.ORANGE_345
            },
            [d.Sn.AT_RISK]: {
                title: h.t.XRNVzM,
                description: h.intl.string(h.t['hbH+9f']),
                status: h.t['7f+4Li'],
                Icon: c.CircleWarningIcon,
                color: r.Z.colors.STATUS_DANGER
            },
            [d.Sn.SUSPENDED]: {
                title: h.t.MExFk5,
                description: h.intl.string(h.t['2liUvr']),
                status: h.t['0OONGB'],
                Icon: c.CircleXIcon,
                color: r.Z.colors.ICON_MUTED
            }
        },
        { title: p, description: S, color: T, Icon: I } = f[t.state],
        E = Object.keys(f).length;
    return (0, i.jsxs)(c.Card, {
        className: g.container,
        outline: !1,
        children: [
            (0, i.jsx)('div', {
                className: g.profile,
                children: (0, i.jsx)(m.Z, {
                    user: e,
                    size: c.AvatarSizes.SIZE_80
                })
            }),
            (0, i.jsxs)('div', {
                className: g.status,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                color: 'header-primary',
                                variant: 'heading-lg/normal',
                                children: h.intl.format(p, {
                                    hook: (t) =>
                                        (0, i.jsx)(c.Text, {
                                            style: { color: T.css },
                                            variant: 'heading-lg/bold',
                                            tag: 'span',
                                            children: t
                                        })
                                })
                            }),
                            (0, i.jsx)(c.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/normal',
                                children: S
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.health,
                        style: { height: n },
                        children: [
                            (0, i.jsx)('div', { className: g.line }),
                            Object.entries(f).map((e, n) => {
                                let [a, s] = e,
                                    l = parseInt(a) === t.state;
                                return (0, i.jsxs)(
                                    'div',
                                    {
                                        className: g.statusOption,
                                        ref: (t) => (j.current[parseInt(a)] = t),
                                        children: [
                                            l
                                                ? (0, i.jsx)(I, {
                                                      className: g.marker,
                                                      color: s.color
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: g.marker,
                                                      style: {
                                                          marginLeft: 0 === n ? -6 : 0,
                                                          marginRight: n === E - 1 ? -6 : 0
                                                      },
                                                      children: (0, i.jsx)('div', { className: g.empty })
                                                  }),
                                            h.intl.format(s.status, {
                                                hook: (t) =>
                                                    (0, i.jsx)(c.Text, {
                                                        color: 'text-normal',
                                                        variant: 'text-sm/normal',
                                                        className: g.statusLabel,
                                                        children: t
                                                    })
                                            })
                                        ]
                                    },
                                    n
                                );
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
