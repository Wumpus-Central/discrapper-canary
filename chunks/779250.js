t.r(n),
    t.d(n, {
        default: function () {
            return V;
        }
    }),
    t(47120);
var l,
    i,
    r = t(200651),
    a = t(192379),
    s = t(392711),
    o = t(442837),
    c = t(481060),
    d = t(447543),
    u = t(607070),
    m = t(745510),
    x = t(96698),
    h = t(313201),
    g = t(433775),
    v = t(984933),
    j = t(430824),
    f = t(971130),
    p = t(981888),
    I = t(924301),
    N = t(482241),
    C = t(951539),
    E = t(545165),
    S = t(236373),
    T = t(230900),
    y = t(854698),
    b = t(334877),
    Z = t(785468),
    R = t(377329),
    _ = t(311166),
    k = t(744782),
    A = t(129526),
    D = t(765305),
    L = t(981631),
    B = t(388032),
    M = t(859312);
let { INVITE_OPTIONS_7_DAYS: z, INVITE_OPTIONS_UNLIMITED: U } = f.ZP;
function P(e) {
    let { modal: n } = e,
        { createMultipleConfetti: t } = a.useContext(m.h);
    return (
        a.useEffect(() => {
            let e = null == n ? void 0 : n.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            t(
                {
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: l.left - 100,
                            y: l.top - 100
                        },
                        maxValue: {
                            x: l.left + 100,
                            y: l.top + 100
                        }
                    },
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: -20,
                            y: -20
                        },
                        maxValue: {
                            x: -60,
                            y: -60
                        }
                    }
                },
                80
            ),
                t(
                    {
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: l.right - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100
                            }
                        },
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    },
                    80
                );
        }, [t, n]),
        null
    );
}
function G(e) {
    let { guildId: n, guildEvent: t, guildEventId: i, editBroadcastInfoData: d, isEdit: m, formErrors: g, transitionState: v, loading: j, error: f, onChange: p, onSave: N, onClose: C, createdEvent: E } = e,
        S = (0, h.Dt)(),
        T = a.useRef(t),
        y = !(0, s.isEqual)(T.current, t),
        A = a.useMemo(
            () => [
                {
                    slideId: 0,
                    label: B.intl.string(B.t['56QlKS']),
                    valid: null == g.entity,
                    userErrorMessage: g.entity
                },
                {
                    slideId: 1,
                    label: B.intl.string(B.t['w5/ntb']),
                    valid: null == g.schedule && null == g.topic && (!m || y),
                    userErrorMessage: g.schedule
                },
                {
                    slideId: 2,
                    label: B.intl.string(B.t['8aJzT0']),
                    valid: !0
                }
            ],
            [g, m, y]
        ),
        D = Object.keys(l).length,
        L = (0, I.xt)(t),
        z = (e) => Math.max(0, Math.min(e, D - 1)),
        [U, G] = a.useState(L ? 1 : 0),
        [V, w] = a.useState(!1),
        F = a.useMemo(
            () =>
                A.slice(0, U + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [A, U]
        ),
        O = U >= A.length ? 3 : A[z(U)].slideId,
        X = 3 === O;
    (0, b.l)((e) => e.onUpdateCanCloseModal)(X);
    let W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        H = a.useRef(null),
        q = (e) => {
            w(!1), G(z(e));
        },
        Y = a.useRef(q);
    a.useEffect(() => {
        Y.current = q;
    }),
        a.useEffect(() => {
            (null == E ? void 0 : E.id) != null && Y.current(3);
        }, [null == E ? void 0 : E.id]);
    let K = () => {
            if (!!F) 2 === O ? N() : X ? C() : q(U + 1);
        },
        Q = () => {
            q(U - 1);
        },
        J = B.intl.string(B.t.PDTjLC);
    return (
        2 === O && (J = m ? B.intl.string(B.t.e5VEcH) : B.intl.string(B.t['60lJ0N'])),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(c.ModalRoot, {
                transitionState: v,
                'aria-labelledby': S,
                size: c.ModalSize.DYNAMIC,
                children: [
                    !W && X ? (0, r.jsx)(P, { modal: H.current }) : null,
                    (0, r.jsxs)(c.ModalContent, {
                        className: M.content,
                        scrollerRef: H,
                        children: [
                            !X &&
                                (0, r.jsx)(x.Z, {
                                    steps: A.map((e) => e.label),
                                    stepIndex: U,
                                    onClick: (e) => {
                                        e < U ? Q() : e > U && K();
                                    }
                                }),
                            (0, r.jsxs)(c.Slides, {
                                activeSlide: O,
                                width: 440,
                                onSlideReady: (e) => {
                                    w(e === O);
                                },
                                children: [
                                    (0, r.jsx)(c.Slide, {
                                        id: 0,
                                        children: (0, r.jsx)(Z.Z, {
                                            guildId: n,
                                            guildEvent: t,
                                            validationErrorMessage: g.entity,
                                            isSlideReady: V,
                                            onChange: p
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 1,
                                        children: (0, r.jsx)(_.Z, {
                                            guildEvent: t,
                                            guildEventId: i,
                                            guildId: n,
                                            editBroadcastInfoData: d,
                                            onChange: p,
                                            error: f,
                                            validationErrorMessage: g.schedule,
                                            isSlideReady: V
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 2,
                                        children: (0, r.jsx)(R.Z, {
                                            guildId: n,
                                            guildEvent: t,
                                            guildEventId: i,
                                            error: f
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 3,
                                        children: (0, r.jsx)(k.Z, {
                                            onClose: C,
                                            event: E
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !X &&
                        (0, r.jsxs)(c.ModalFooter, {
                            className: M.footer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: M.inline,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: C,
                                            children: B.intl.string(B.t['ETE/oK'])
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            onClick: K,
                                            disabled: !F,
                                            className: M.button,
                                            submitting: j,
                                            children: J
                                        })
                                    ]
                                }),
                                0 !== O &&
                                    (0, r.jsx)(c.Button, {
                                        look: c.Button.Looks.LINK,
                                        size: c.Button.Sizes.MIN,
                                        onClick: Q,
                                        color: c.Button.Colors.LINK,
                                        children: B.intl.string(B.t['13/7kZ'])
                                    })
                            ]
                        })
                ]
            })
        })
    );
}
function V(e) {
    let { guildId: n, guildScheduledEventId: l, transitionState: i, onClose: s } = e,
        u = (0, o.e7)([j.Z], () => j.Z.getGuild(n)),
        m = (0, o.e7)([I.ZP], () => I.ZP.getGuildScheduledEvent(l), [l]),
        x = (0, o.e7)([v.ZP], () => v.ZP.getDefaultChannel(n), [n]),
        h = (0, S.j$)(m, x),
        [f, b] = a.useState(h),
        [Z] = a.useState((0, S.Ql)(m)),
        [R, _] = a.useState(null),
        k = (e) => {
            var n;
            let t = (0, C.so)(e),
                l = null !== (n = e.channel_id) && void 0 !== n ? n : null == x ? void 0 : x.id;
            null != l &&
                d.Z.createInvite(
                    l,
                    {
                        max_age: z.value,
                        max_uses: U.value
                    },
                    L.t4x.GUILD_EVENTS
                ),
                t ? _(e) : s();
        },
        M = (0, g.Z)(u, null == m ? void 0 : m.id, f),
        [P, { loading: V, error: w }] = (0, p.Z)(async () => {
            if (null != R) return;
            let e = { broadcastToDirectoryChannels: M.broadcastToDirectoryChannels };
            if (Z && null != l) return await N.Z.saveEvent(l, f, n, e), s();
            let t = await N.Z.createGuildEvent(f, n, e);
            return k(t.body), t;
        }),
        F = a.useMemo(() => (0, A.Z)(f, Z), [f, Z]);
    return (0, r.jsx)(G, {
        guildId: n,
        guildEvent: f,
        guildEventId: l,
        editBroadcastInfoData: M,
        isEdit: Z,
        formErrors: F,
        transitionState: i,
        loading: V,
        error: w,
        onChange: (e) => {
            if (null != e.entityType) {
                var t;
                let l = (0, T.xC)(e.entityType),
                    [i] = (0, E.SU)(n, l);
                (e.channelId = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null), e.entityType !== D.WX.EXTERNAL && f.entityType === D.WX.EXTERNAL && (e.entityMetadata = null);
            }
            b((n) => ({
                ...n,
                ...e
            }));
        },
        onSave: () => {
            null != f.recurrenceRule && Z && (0, y.BP)(m, f)
                ? (0, c.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
                      return (n) =>
                          (0, r.jsxs)(e, {
                              ...n,
                              header: B.intl.string(B.t.BW1Qoq),
                              confirmText: B.intl.string(B.t.e5VEcH),
                              cancelText: B.intl.string(B.t.oEAioK),
                              onConfirm: P,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: B.intl.string(B.t.aNCYam)
                                  }),
                                  (0, r.jsx)('br', {}),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: B.intl.format(B.t.RWBa5e, {})
                                  })
                              ]
                          });
                  })
                : P();
        },
        onClose: s,
        createdEvent: R
    });
}
((i = l || (l = {}))[(i.ENTITY = 0)] = 'ENTITY'), (i[(i.SETTINGS = 1)] = 'SETTINGS'), (i[(i.PREVIEW = 2)] = 'PREVIEW'), (i[(i.SUCCESS = 3)] = 'SUCCESS');
