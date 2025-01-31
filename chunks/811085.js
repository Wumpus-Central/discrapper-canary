s.d(e, { Z: () => j }), s(47120);
var i = s(200651),
    a = s(192379),
    n = s(392711),
    l = s(442837),
    r = s(692547),
    c = s(481060),
    o = s(594174),
    d = s(531441),
    m = s(451284),
    u = s(959562),
    x = s(800530),
    h = s(388032),
    g = s(578363);
function j() {
    let t = (0, m.P)(),
        e = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        [s, j] = a.useState(36),
        v = a.useRef({
            [d.Sn.ALL_GOOD]: null,
            [d.Sn.LIMITED]: null,
            [d.Sn.VERY_LIMITED]: null,
            [d.Sn.AT_RISK]: null,
            [d.Sn.SUSPENDED]: null
        }),
        N = a.useCallback(() => {
            j(
                Math.max(
                    Math.max(
                        ...Object.values(v.current).map((t) => {
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
        let t = (0, n.debounce)(N, 100);
        window.addEventListener('resize', t);
    }, [N]);
    let p = {
            [d.Sn.ALL_GOOD]: {
                title: h.t.uaKrRk,
                description: h.intl.format(h.t.pEdBDw, {
                    termsOfService: x.sQ.TOS_LINK,
                    communityGuidelines: x.sQ.COMMUNITY_GUIDELINES
                }),
                status: h.t['/Idfam'],
                Icon: c.owK,
                color: r.Z.colors.STATUS_POSITIVE
            },
            [d.Sn.LIMITED]: {
                title: h.t.epkcmZ,
                description: h.intl.string(h.t['774jub']),
                status: h.t.umleq6,
                Icon: c.P4T,
                color: r.Z.colors.STATUS_WARNING
            },
            [d.Sn.VERY_LIMITED]: {
                title: h.t.crzE2d,
                description: h.intl.string(h.t['T/Ufh4']),
                status: h.t.WBtMHR,
                Icon: c.P4T,
                color: r.Z.unsafe_rawColors.ORANGE_345
            },
            [d.Sn.AT_RISK]: {
                title: h.t.XRNVzM,
                description: h.intl.string(h.t['hbH+9f']),
                status: h.t['7f+4Li'],
                Icon: c.P4T,
                color: r.Z.colors.STATUS_DANGER
            },
            [d.Sn.SUSPENDED]: {
                title: h.t.MExFk5,
                description: h.intl.string(h.t['2liUvr']),
                status: h.t['0OONGB'],
                Icon: c.k$p,
                color: r.Z.colors.ICON_MUTED
            }
        },
        { title: f, description: T, color: S, Icon: E } = p[t.state],
        I = Object.keys(p).length;
    return (0, i.jsxs)(c.Zbd, {
        className: g.container,
        outline: !1,
        children: [
            (0, i.jsx)('div', {
                className: g.profile,
                children: (0, i.jsx)(u.Z, {
                    user: e,
                    size: c.EFr.SIZE_80
                })
            }),
            (0, i.jsxs)('div', {
                className: g.status,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.title,
                        children: [
                            (0, i.jsx)(c.X6q, {
                                color: 'header-primary',
                                variant: 'heading-lg/normal',
                                children: h.intl.format(f, {
                                    hook: (t) =>
                                        (0, i.jsx)(c.Text, {
                                            style: { color: S.css },
                                            variant: 'heading-lg/bold',
                                            tag: 'span',
                                            children: t
                                        })
                                })
                            }),
                            (0, i.jsx)(c.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/normal',
                                children: T
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: g.health,
                        style: { height: s },
                        children: [
                            (0, i.jsx)('div', { className: g.line }),
                            Object.entries(p).map((e, s) => {
                                let [a, n] = e,
                                    l = parseInt(a) === t.state;
                                return (0, i.jsxs)(
                                    'div',
                                    {
                                        className: g.statusOption,
                                        ref: (t) => (v.current[parseInt(a)] = t),
                                        children: [
                                            l
                                                ? (0, i.jsx)(E, {
                                                      className: g.marker,
                                                      color: n.color
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: g.marker,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === I - 1 ? -6 : 0
                                                      },
                                                      children: (0, i.jsx)('div', { className: g.empty })
                                                  }),
                                            h.intl.format(n.status, {
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
