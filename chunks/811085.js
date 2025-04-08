s.d(t, { Z: () => j }), s(388685), s(953529);
var a = s(200651),
    n = s(192379),
    i = s(392711),
    r = s(442837),
    l = s(692547),
    c = s(481060),
    o = s(594174),
    d = s(531441),
    u = s(451284),
    m = s(959562),
    h = s(800530),
    x = s(388032),
    g = s(627577);
function j() {
    let e = (0, u.P)(),
        t = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        [s, j] = n.useState(36),
        N = n.useRef({
            [d.Sn.ALL_GOOD]: null,
            [d.Sn.LIMITED]: null,
            [d.Sn.VERY_LIMITED]: null,
            [d.Sn.AT_RISK]: null,
            [d.Sn.SUSPENDED]: null
        }),
        p = n.useCallback(() => {
            j(
                Math.max(
                    Math.max(
                        ...Object.values(N.current).map((e) => {
                            var t;
                            return null != (t = null == e ? void 0 : e.getBoundingClientRect().height) ? t : 36;
                        })
                    ),
                    36
                )
            );
        }, []);
    n.useEffect(() => {
        p();
        let e = (0, i.debounce)(p, 100);
        window.addEventListener('resize', e);
    }, [p]);
    let v = {
            [d.Sn.ALL_GOOD]: {
                title: x.t.uaKrRk,
                description: x.NW.format(x.t.pEdBDw, {
                    termsOfService: h.sQ.TOS_LINK,
                    communityGuidelines: h.sQ.COMMUNITY_GUIDELINES
                }),
                status: x.t['/Idfam'],
                Icon: c.owK,
                color: l.Z.colors.STATUS_POSITIVE
            },
            [d.Sn.LIMITED]: {
                title: x.t.epkcmZ,
                description: x.NW.string(x.t['774jub']),
                status: x.t.umleq6,
                Icon: c.P4T,
                color: l.Z.colors.STATUS_WARNING
            },
            [d.Sn.VERY_LIMITED]: {
                title: x.t.crzE2d,
                description: x.NW.string(x.t['T/Ufh4']),
                status: x.t.WBtMHR,
                Icon: c.P4T,
                color: l.Z.unsafe_rawColors.ORANGE_345
            },
            [d.Sn.AT_RISK]: {
                title: x.t.XRNVzM,
                description: x.NW.string(x.t['hbH+9f']),
                status: x.t['7f+4Li'],
                Icon: c.P4T,
                color: l.Z.colors.STATUS_DANGER
            },
            [d.Sn.SUSPENDED]: {
                title: x.t.MExFk5,
                description: x.NW.string(x.t['2liUvr']),
                status: x.t['0OONGB'],
                Icon: c.k$p,
                color: l.Z.colors.ICON_MUTED
            }
        },
        { title: f, description: S, color: b, Icon: T } = v[e.state],
        E = Object.keys(v).length;
    return (0, a.jsxs)(c.Zbd, {
        className: g.container,
        outline: !1,
        children: [
            (0, a.jsx)('div', {
                className: g.profile,
                children: (0, a.jsx)(m.Z, {
                    user: t,
                    size: c.EFr.SIZE_80
                })
            }),
            (0, a.jsxs)('div', {
                className: g.status,
                children: [
                    (0, a.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, a.jsx)(c.X6q, {
                                color: 'header-primary',
                                variant: 'heading-lg/normal',
                                children: x.NW.format(f, {
                                    hook: (e) =>
                                        (0, a.jsx)(c.Text, {
                                            style: { color: b.css },
                                            variant: 'heading-lg/bold',
                                            tag: 'span',
                                            children: e
                                        })
                                })
                            }),
                            (0, a.jsx)(c.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/normal',
                                children: S
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: g.health,
                        style: { height: s },
                        children: [
                            (0, a.jsx)('div', { className: g.line }),
                            Object.entries(v).map((t, s) => {
                                let [n, i] = t,
                                    r = parseInt(n) === e.state;
                                return (0, a.jsxs)(
                                    'div',
                                    {
                                        className: g.statusOption,
                                        ref: (e) => {
                                            N.current[parseInt(n)] = e;
                                        },
                                        children: [
                                            r
                                                ? (0, a.jsx)(T, {
                                                      className: g.marker,
                                                      color: i.color
                                                  })
                                                : (0, a.jsx)('div', {
                                                      className: g.marker,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === E - 1 ? -6 : 0
                                                      },
                                                      children: (0, a.jsx)('div', { className: g.empty })
                                                  }),
                                            x.NW.format(i.status, {
                                                hook: (e) =>
                                                    (0, a.jsx)(c.Text, {
                                                        color: 'text-normal',
                                                        variant: 'text-sm/normal',
                                                        className: g.statusLabel,
                                                        children: e
                                                    })
                                            })
                                        ]
                                    },
                                    s
                                );
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
