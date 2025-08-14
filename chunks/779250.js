n.d(t, { default: () => X }), n(388685);
var r,
    l = n(255367),
    i = n(73800),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    m = n(96698),
    x = n(313201),
    g = n(433775),
    h = n(984933),
    v = n(430824),
    p = n(971130),
    f = n(981888),
    j = n(924301),
    b = n(482241),
    y = n(951539),
    O = n(545165),
    E = n(236373),
    N = n(230900),
    C = n(854698),
    I = n(334877),
    S = n(785468),
    T = n(377329),
    P = n(311166),
    w = n(744782),
    Z = n(129526),
    D = n(765305),
    _ = n(981631),
    R = n(388032),
    A = n(869939);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let { INVITE_OPTIONS_7_DAYS: U, INVITE_OPTIONS_UNLIMITED: L } = p.ZP;
var M =
    (((r = M || {})[(r.ENTITY = 0)] = "ENTITY"),
    (r[(r.SETTINGS = 1)] = "SETTINGS"),
    (r[(r.PREVIEW = 2)] = "PREVIEW"),
    (r[(r.SUCCESS = 3)] = "SUCCESS"),
    r);
function G(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(d.h);
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let r = e.getBoundingClientRect();
            n(
                {
                    position: {
                        type: "static-random",
                        minValue: {
                            x: r.left - 100,
                            y: r.top - 100,
                        },
                        maxValue: {
                            x: r.left + 100,
                            y: r.top + 100,
                        },
                    },
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: -20,
                            y: -20,
                        },
                        maxValue: {
                            x: -60,
                            y: -60,
                        },
                    },
                },
                80,
            ),
                n(
                    {
                        position: {
                            type: "static-random",
                            minValue: {
                                x: r.right - 100,
                                y: r.top - 100,
                            },
                            maxValue: {
                                x: r.right + 100,
                                y: r.top + 100,
                            },
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20,
                            },
                            maxValue: {
                                x: 60,
                                y: -60,
                            },
                        },
                    },
                    80,
                );
        }, [n, t]),
        null
    );
}
function z(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: r,
            editBroadcastInfoData: c,
            isEdit: d,
            formErrors: g,
            transitionState: h,
            loading: v,
            error: p,
            onChange: f,
            onSave: b,
            onClose: y,
            createdEvent: O,
        } = e,
        E = (0, x.Dt)(),
        N = i.useRef(n),
        C = !(0, a.isEqual)(N.current, n),
        Z = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: R.intl.string(R.t["56QlKS"]),
                    valid: null == g.entity,
                    userErrorMessage: g.entity,
                },
                {
                    slideId: 1,
                    label: R.intl.string(R.t["w5/ntb"]),
                    valid: null == g.schedule && null == g.topic && (!d || C),
                    userErrorMessage: g.schedule,
                },
                {
                    slideId: 2,
                    label: R.intl.string(R.t["8aJzT0"]),
                    valid: !0,
                },
            ],
            [g, d, C],
        ),
        D = Object.keys(M).length,
        _ = (0, j.xt)(n),
        k = (e) => Math.max(0, Math.min(e, D - 1)),
        [U, L] = i.useState(+!!_),
        [z, X] = i.useState(!1),
        V = i.useMemo(
            () =>
                Z.slice(0, U + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [Z, U],
        ),
        W = U >= Z.length ? 3 : Z[k(U)].slideId,
        F = 3 === W;
    (0, I.l)((e) => e.onUpdateCanCloseModal)(F);
    let B = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        Y = i.useRef(null),
        q = (e) => {
            X(!1), L(k(e));
        },
        H = i.useRef(q);
    i.useEffect(() => {
        H.current = q;
    }),
        i.useEffect(() => {
            (null == O ? void 0 : O.id) != null && H.current(3);
        }, [null == O ? void 0 : O.id]);
    let J = () => {
            V && (2 === W ? b() : F ? y() : q(U + 1));
        },
        K = () => {
            q(U - 1);
        },
        Q = R.intl.string(R.t.PDTjLC);
    return (
        2 === W && (Q = d ? R.intl.string(R.t.e5VEcH) : R.intl.string(R.t["60lJ0N"])),
        (0, l.jsxs)(o.Y0X, {
            transitionState: h,
            "aria-labelledby": E,
            size: o.CgR.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !B && F ? (0, l.jsx)(G, { modal: Y.current }) : null,
                (0, l.jsxs)(o.hzk, {
                    className: A.content,
                    scrollerRef: Y,
                    "data-migration-pending": !0,
                    children: [
                        !F &&
                            (0, l.jsx)(m.Z, {
                                steps: Z.map((e) => e.label),
                                stepIndex: U,
                                onClick: (e) => {
                                    e < U ? K() : e > U && J();
                                },
                            }),
                        (0, l.jsxs)(o.MyZ, {
                            activeSlide: W,
                            width: 440,
                            onSlideReady: (e) => {
                                X(e === W);
                            },
                            children: [
                                (0, l.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, l.jsx)(S.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: g.entity,
                                        isSlideReady: z,
                                        onChange: f,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, l.jsx)(P.Z, {
                                        guildEvent: n,
                                        guildEventId: r,
                                        guildId: t,
                                        editBroadcastInfoData: c,
                                        onChange: f,
                                        error: p,
                                        validationErrorMessage: g.schedule,
                                        isSlideReady: z,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, l.jsx)(T.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: r,
                                        error: p,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, l.jsx)(w.Z, {
                                        onClose: y,
                                        event: O,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                !F &&
                    (0, l.jsxs)(o.mzw, {
                        className: A.footer,
                        "data-migration-pending": !0,
                        children: [
                            (0, l.jsxs)("div", {
                                className: A.inline,
                                children: [
                                    (0, l.jsx)(o.zxk, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t["ETE/oK"]),
                                        onClick: y,
                                    }),
                                    (0, l.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: A.button,
                                        children: (0, l.jsx)(o.zxk, {
                                            variant: "primary",
                                            text: Q,
                                            onClick: J,
                                            disabled: !V,
                                            loading: v,
                                        }),
                                    }),
                                ],
                            }),
                            0 !== W &&
                                (0, l.jsx)("div", {
                                    className: A.textButtonWrapper,
                                    children: (0, l.jsx)(o.Avr, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: K,
                                        text: R.intl.string(R.t["13/7kZ"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}
function X(e) {
    let { guildId: t, guildScheduledEventId: r, transitionState: a, onClose: u } = e,
        d = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        m = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(r), [r]),
        x = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(t), [t]),
        p = (0, E.j$)(m, x),
        [I, S] = i.useState(p),
        [T] = i.useState((0, E.Ql)(m)),
        [P, w] = i.useState(null),
        A = (0, g.Z)(d, null == m ? void 0 : m.id, I),
        [M, { loading: G, error: X }] = (0, f.Z)(async () => {
            if (null != P) return;
            let e = { broadcastToDirectoryChannels: A.broadcastToDirectoryChannels };
            if (T && null != r) return await b.Z.saveEvent(r, I, t, e), u();
            let n = await b.Z.createGuildEvent(I, t, e);
            return (
                ((e) => {
                    var t;
                    let n = (0, y.so)(e),
                        r = null != (t = e.channel_id) ? t : null == x ? void 0 : x.id;
                    null != r &&
                        c.ZP.createInvite(
                            r,
                            {
                                max_age: U.value,
                                max_uses: L.value,
                            },
                            _.t4x.GUILD_EVENTS,
                        ),
                        n ? w(e) : u();
                })(n.body),
                n
            );
        }),
        V = i.useMemo(() => (0, Z.Z)(I, T), [I, T]);
    return (0, l.jsx)(z, {
        guildId: t,
        guildEvent: I,
        guildEventId: r,
        editBroadcastInfoData: A,
        isEdit: T,
        formErrors: V,
        transitionState: a,
        loading: G,
        error: X,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let r = (0, N.xC)(e.entityType),
                    [l] = (0, O.SU)(t, r);
                (e.channelId = null != (n = null == l ? void 0 : l.id) ? n : null),
                    e.entityType !== D.WX.EXTERNAL && I.entityType === D.WX.EXTERNAL && (e.entityMetadata = null);
            }
            S((t) => k({}, t, e));
        },
        onSave: () => {
            null != I.recurrenceRule && T && (0, C.BP)(m, I)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, r;
                          return (0, l.jsxs)(
                              e,
                              ((n = k({}, t)),
                              (r = r =
                                  {
                                      header: R.intl.string(R.t.BW1Qoq),
                                      confirmText: R.intl.string(R.t.e5VEcH),
                                      cancelText: R.intl.string(R.t.oEAioK),
                                      onConfirm: M,
                                      children: [
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: R.intl.string(R.t.aNCYam),
                                          }),
                                          (0, l.jsx)("br", {}),
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: R.intl.format(R.t.RWBa5e, {}),
                                          }),
                                      ],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              n),
                          );
                      };
                  })
                : M();
        },
        onClose: u,
        createdEvent: P,
    });
}
