n.d(e, { Z: () => j }), n(388685), n(953529);
var s = n(255367),
    i = n(73800),
    a = n(392711),
    r = n(442837),
    l = n(692547),
    c = n(481060),
    o = n(594174),
    d = n(531441),
    u = n(451284),
    m = n(959562),
    h = n(800530),
    x = n(388032),
    g = n(627577);
function j() {
    let t = (0, u.P)(),
        e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        [n, j] = i.useState(36),
        p = i.useRef({
            [d.Sn.ALL_GOOD]: null,
            [d.Sn.LIMITED]: null,
            [d.Sn.VERY_LIMITED]: null,
            [d.Sn.AT_RISK]: null,
            [d.Sn.SUSPENDED]: null
        }),
        v = i.useCallback(() => {
            j(
                Math.max(
                    Math.max(
                        ...Object.values(p.current).map((t) => {
                            var e;
                            return null != (e = null == t ? void 0 : t.getBoundingClientRect().height) ? e : 36;
                        })
                    ),
                    36
                )
            );
        }, []);
    i.useEffect(() => {
        v();
        let t = (0, a.debounce)(v, 100);
        window.addEventListener('resize', t);
    }, [v]);
    let f = {
            [d.Sn.ALL_GOOD]: {
                title: x.t.uaKrRk,
                description: x.intl.format(x.t.pEdBDw, {
                    termsOfService: h.sQ.TOS_LINK,
                    communityGuidelines: h.sQ.COMMUNITY_GUIDELINES
                }),
                status: x.t['/Idfam'],
                Icon: c.owK,
                color: l.Z.colors.STATUS_POSITIVE
            },
            [d.Sn.LIMITED]: {
                title: x.t.epkcmZ,
                description: x.intl.string(x.t['774jub']),
                status: x.t.umleq6,
                Icon: c.P4T,
                color: l.Z.colors.STATUS_WARNING
            },
            [d.Sn.VERY_LIMITED]: {
                title: x.t.crzE2d,
                description: x.intl.string(x.t['T/Ufh4']),
                status: x.t.WBtMHR,
                Icon: c.P4T,
                color: l.Z.unsafe_rawColors.ORANGE_345
            },
            [d.Sn.AT_RISK]: {
                title: x.t.XRNVzM,
                description: x.intl.string(x.t['hbH+9f']),
                status: x.t['7f+4Li'],
                Icon: c.P4T,
                color: l.Z.colors.STATUS_DANGER
            },
            [d.Sn.SUSPENDED]: {
                title: x.t.MExFk5,
                description: x.intl.string(x.t['2liUvr']),
                status: x.t['0OONGB'],
                Icon: c.k$p,
                color: l.Z.colors.ICON_MUTED
            }
        },
        { title: N, description: S, color: b, Icon: T } = f[t.state],
        E = Object.keys(f).length;
    return (0, s.jsxs)(c.Zbd, {
        className: g.container,
        outline: !1,
        children: [
            (0, s.jsx)('div', {
                className: g.profile,
                children: (0, s.jsx)(m.Z, {
                    user: e,
                    size: c.EFr.SIZE_80
                })
            }),
            (0, s.jsxs)('div', {
                className: g.status,
                children: [
                    (0, s.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, s.jsx)(c.X6q, {
                                color: 'header-primary',
                                variant: 'heading-lg/normal',
                                children: x.intl.format(N, {
                                    hook: (t) =>
                                        (0, s.jsx)(c.Text, {
                                            style: { color: b.css },
                                            variant: 'heading-lg/bold',
                                            tag: 'span',
                                            children: t
                                        })
                                })
                            }),
                            (0, s.jsx)(c.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/normal',
                                children: S
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: g.health,
                        style: { height: n },
                        children: [
                            (0, s.jsx)('div', { className: g.line }),
                            Object.entries(f).map((e, n) => {
                                let [i, a] = e,
                                    r = parseInt(i) === t.state;
                                return (0, s.jsxs)(
                                    'div',
                                    {
                                        className: g.statusOption,
                                        ref: (t) => {
                                            p.current[parseInt(i)] = t;
                                        },
                                        children: [
                                            r
                                                ? (0, s.jsx)(T, {
                                                      className: g.marker,
                                                      color: a.color
                                                  })
                                                : (0, s.jsx)('div', {
                                                      className: g.marker,
                                                      style: {
                                                          marginLeft: 0 === n ? -6 : 0,
                                                          marginRight: n === E - 1 ? -6 : 0
                                                      },
                                                      children: (0, s.jsx)('div', { className: g.empty })
                                                  }),
                                            x.intl.format(a.status, {
                                                hook: (t) =>
                                                    (0, s.jsx)(c.Text, {
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
