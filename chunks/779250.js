n.d(t, { default: () => W }), n(388685);
var l,
    r = n(951288),
    i = n(647438),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    x = n(96698),
    m = n(313201),
    g = n(984933),
    v = n(430824),
    h = n(971130),
    p = n(981888),
    f = n(924301),
    j = n(482241),
    y = n(951539),
    b = n(545165),
    E = n(236373),
    N = n(230900),
    O = n(954313),
    C = n(334877),
    S = n(785468),
    T = n(377329),
    Z = n(311166),
    I = n(744782),
    P = n(129526),
    w = n(765305),
    D = n(981631),
    A = n(388032),
    R = n(869939);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let { INVITE_OPTIONS_7_DAYS: _, INVITE_OPTIONS_UNLIMITED: k } = h.ZP;
var G =
    (((l = G || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function M(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(d.h);
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            n(
                {
                    position: {
                        type: "static-random",
                        minValue: {
                            x: l.left - 100,
                            y: l.top - 100,
                        },
                        maxValue: {
                            x: l.left + 100,
                            y: l.top + 100,
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
                                x: l.right - 100,
                                y: l.top - 100,
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100,
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
function X(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            isEdit: c,
            formErrors: d,
            transitionState: g,
            loading: v,
            error: h,
            onChange: p,
            onSave: j,
            onClose: y,
            createdEvent: b,
        } = e,
        E = (0, m.Dt)(),
        N = i.useRef(n),
        O = !(0, a.isEqual)(N.current, n),
        P = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: A.intl.string(A.t["56QlKS"]),
                    valid: null == d.entity,
                    userErrorMessage: d.entity,
                },
                {
                    slideId: 1,
                    label: A.intl.string(A.t["w5/ntb"]),
                    valid: null == d.schedule && null == d.topic && (!c || O),
                    userErrorMessage: d.schedule,
                },
                {
                    slideId: 2,
                    label: A.intl.string(A.t["8aJzT0"]),
                    valid: !0,
                },
            ],
            [d, c, O],
        ),
        w = Object.keys(G).length,
        D = (0, f.xt)(n),
        L = (e) => Math.max(0, Math.min(e, w - 1)),
        [_, k] = i.useState(+!!D),
        [X, W] = i.useState(!1),
        z = i.useMemo(
            () =>
                P.slice(0, _ + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [P, _],
        ),
        V = _ >= P.length ? 3 : P[L(_)].slideId,
        U = 3 === V;
    (0, C.l)((e) => e.onUpdateCanCloseModal)(U);
    let F = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        q = i.useRef(null),
        B = (e) => {
            W(!1), k(L(e));
        },
        H = i.useRef(B);
    i.useEffect(() => {
        H.current = B;
    }),
        i.useEffect(() => {
            (null == b ? void 0 : b.id) != null && H.current(3);
        }, [null == b ? void 0 : b.id]);
    let Y = () => {
            z && (2 === V ? j() : U ? y() : B(_ + 1));
        },
        J = () => {
            B(_ - 1);
        },
        K = A.intl.string(A.t.PDTjLC);
    return (
        2 === V && (K = c ? A.intl.string(A.t.e5VEcH) : A.intl.string(A.t["60lJ0N"])),
        (0, r.jsxs)(o.Y0X, {
            transitionState: g,
            "aria-labelledby": E,
            size: o.CgR.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !F && U ? (0, r.jsx)(M, { modal: q.current }) : null,
                (0, r.jsxs)(o.hzk, {
                    className: R.content,
                    scrollerRef: q,
                    "data-migration-pending": !0,
                    children: [
                        !U &&
                            (0, r.jsx)(x.Z, {
                                steps: P.map((e) => e.label),
                                stepIndex: _,
                                onClick: (e) => {
                                    e < _ ? J() : e > _ && Y();
                                },
                            }),
                        (0, r.jsxs)(o.MyZ, {
                            activeSlide: V,
                            width: 440,
                            onSlideReady: (e) => {
                                W(e === V);
                            },
                            children: [
                                (0, r.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, r.jsx)(S.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: X,
                                        onChange: p,
                                    }),
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, r.jsx)(Z.Z, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        onChange: p,
                                        error: h,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: X,
                                    }),
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, r.jsx)(T.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: l,
                                        error: h,
                                    }),
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, r.jsx)(I.Z, {
                                        onClose: y,
                                        event: b,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                !U &&
                    (0, r.jsxs)(o.mzw, {
                        className: R.footer,
                        "data-migration-pending": !0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: R.inline,
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        variant: "secondary",
                                        text: A.intl.string(A.t["ETE/oK"]),
                                        onClick: y,
                                    }),
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: R.button,
                                        children: (0, r.jsx)(o.zxk, {
                                            variant: "primary",
                                            text: K,
                                            onClick: Y,
                                            disabled: !z,
                                            loading: v,
                                        }),
                                    }),
                                ],
                            }),
                            0 !== V &&
                                (0, r.jsx)("div", {
                                    className: R.textButtonWrapper,
                                    children: (0, r.jsx)(o.Avr, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: J,
                                        text: A.intl.string(A.t["13/7kZ"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}
function W(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: a, onClose: u } = e;
    (0, s.e7)([v.Z], () => v.Z.getGuild(t));
    let d = (0, s.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(l), [l]),
        x = (0, s.e7)([g.ZP], () => g.ZP.getDefaultChannel(t), [t]),
        m = (0, E.j$)(d, x),
        [h, C] = i.useState(m),
        [S] = i.useState((0, E.Ql)(d)),
        [T, Z] = i.useState(null),
        [I, { loading: R, error: G }] = (0, p.Z)(async () => {
            if (null != T) return;
            if (S && null != l) return await j.Z.saveEvent(l, h, t), u();
            let e = await j.Z.createGuildEvent(h, t);
            return (
                ((e) => {
                    var t;
                    let n = (0, y.so)(e),
                        l = null != (t = e.channel_id) ? t : null == x ? void 0 : x.id;
                    null != l &&
                        c.ZP.createInvite(
                            l,
                            {
                                max_age: _.value,
                                max_uses: k.value,
                            },
                            D.t4x.GUILD_EVENTS,
                        ),
                        n ? Z(e) : u();
                })(e.body),
                e
            );
        }),
        M = i.useMemo(() => (0, P.Z)(h, S), [h, S]);
    return (0, r.jsx)(X, {
        guildId: t,
        guildEvent: h,
        guildEventId: l,
        isEdit: S,
        formErrors: M,
        transitionState: a,
        loading: R,
        error: G,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let l = (0, N.xC)(e.entityType),
                    [r] = (0, b.SU)(t, l);
                (e.channelId = null != (n = null == r ? void 0 : r.id) ? n : null),
                    e.entityType !== w.WX.EXTERNAL && h.entityType === w.WX.EXTERNAL && (e.entityMetadata = null);
            }
            C((t) => L({}, t, e));
        },
        onSave: () => {
            null != h.recurrenceRule && S && (0, O.BP)(d, h)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, l;
                          return (0, r.jsxs)(
                              e,
                              ((n = L({}, t)),
                              (l = l =
                                  {
                                      header: A.intl.string(A.t.BW1Qoq),
                                      confirmText: A.intl.string(A.t.e5VEcH),
                                      cancelText: A.intl.string(A.t.oEAioK),
                                      onConfirm: I,
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: A.intl.string(A.t.aNCYam),
                                          }),
                                          (0, r.jsx)("br", {}),
                                          (0, r.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: A.intl.format(A.t.RWBa5e, {}),
                                          }),
                                      ],
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n),
                          );
                      };
                  })
                : I();
        },
        onClose: u,
        createdEvent: T,
    });
}
