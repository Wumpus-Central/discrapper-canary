n.d(t, { default: () => M }), n(388685);
var r,
    l = n(951288),
    i = n(647438),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    m = n(96698),
    x = n(313201),
    g = n(984933),
    h = n(430824),
    v = n(971130),
    p = n(981888),
    j = n(924301),
    f = n(482241),
    b = n(951539),
    y = n(545165),
    O = n(236373),
    E = n(230900),
    N = n(954313),
    C = n(334877),
    P = n(785468),
    S = n(377329),
    I = n(311166),
    T = n(744782),
    Z = n(129526),
    w = n(765305),
    k = n(981631),
    D = n(388032),
    R = n(869939);
function A(e) {
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
let { INVITE_OPTIONS_7_DAYS: _, INVITE_OPTIONS_UNLIMITED: z } = v.ZP;
var G =
    (((r = G || {})[(r.ENTITY = 0)] = "ENTITY"),
    (r[(r.SETTINGS = 1)] = "SETTINGS"),
    (r[(r.PREVIEW = 2)] = "PREVIEW"),
    (r[(r.SUCCESS = 3)] = "SUCCESS"),
    r);
function U(e) {
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
function L(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: r,
            isEdit: c,
            formErrors: d,
            transitionState: g,
            loading: h,
            error: v,
            onChange: p,
            onSave: f,
            onClose: b,
            createdEvent: y,
        } = e,
        O = (0, x.Dt)(),
        E = i.useRef(n),
        N = !(0, a.isEqual)(E.current, n),
        Z = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: D.intl.string(D.t["56QlKS"]),
                    valid: null == d.entity,
                    userErrorMessage: d.entity,
                },
                {
                    slideId: 1,
                    label: D.intl.string(D.t["w5/ntb"]),
                    valid: null == d.schedule && null == d.topic && (!c || N),
                    userErrorMessage: d.schedule,
                },
                {
                    slideId: 2,
                    label: D.intl.string(D.t["8aJzT0"]),
                    valid: !0,
                },
            ],
            [d, c, N],
        ),
        w = Object.keys(G).length,
        k = (0, j.xt)(n),
        A = (e) => Math.max(0, Math.min(e, w - 1)),
        [_, z] = i.useState(+!!k),
        [L, M] = i.useState(!1),
        V = i.useMemo(
            () =>
                Z.slice(0, _ + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [Z, _],
        ),
        F = _ >= Z.length ? 3 : Z[A(_)].slideId,
        X = 3 === F;
    (0, C.l)((e) => e.onUpdateCanCloseModal)(X);
    let W = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        q = i.useRef(null),
        B = (e) => {
            M(!1), z(A(e));
        },
        Y = i.useRef(B);
    i.useEffect(() => {
        Y.current = B;
    }),
        i.useEffect(() => {
            (null == y ? void 0 : y.id) != null && Y.current(3);
        }, [null == y ? void 0 : y.id]);
    let H = () => {
            V && (2 === F ? f() : X ? b() : B(_ + 1));
        },
        K = () => {
            B(_ - 1);
        },
        J = D.intl.string(D.t.PDTjLC);
    return (
        2 === F && (J = c ? D.intl.string(D.t.e5VEcH) : D.intl.string(D.t["60lJ0N"])),
        (0, l.jsxs)(o.Y0X, {
            transitionState: g,
            "aria-labelledby": O,
            size: o.CgR.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !W && X ? (0, l.jsx)(U, { modal: q.current }) : null,
                (0, l.jsxs)(o.hzk, {
                    className: R.content,
                    scrollerRef: q,
                    "data-migration-pending": !0,
                    children: [
                        !X &&
                            (0, l.jsx)(m.Z, {
                                steps: Z.map((e) => e.label),
                                stepIndex: _,
                                onClick: (e) => {
                                    e < _ ? K() : e > _ && H();
                                },
                            }),
                        (0, l.jsxs)(o.MyZ, {
                            activeSlide: F,
                            width: 440,
                            onSlideReady: (e) => {
                                M(e === F);
                            },
                            children: [
                                (0, l.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, l.jsx)(P.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: L,
                                        onChange: p,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, l.jsx)(I.Z, {
                                        guildEvent: n,
                                        guildEventId: r,
                                        guildId: t,
                                        onChange: p,
                                        error: v,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: L,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, l.jsx)(S.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: r,
                                        error: v,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, l.jsx)(T.Z, {
                                        onClose: b,
                                        event: y,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                !X &&
                    (0, l.jsxs)(o.mzw, {
                        className: R.footer,
                        "data-migration-pending": !0,
                        children: [
                            (0, l.jsxs)("div", {
                                className: R.inline,
                                children: [
                                    (0, l.jsx)(o.zxk, {
                                        variant: "secondary",
                                        text: D.intl.string(D.t["ETE/oK"]),
                                        onClick: b,
                                    }),
                                    (0, l.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: R.button,
                                        children: (0, l.jsx)(o.zxk, {
                                            variant: "primary",
                                            text: J,
                                            onClick: H,
                                            disabled: !V,
                                            loading: h,
                                        }),
                                    }),
                                ],
                            }),
                            0 !== F &&
                                (0, l.jsx)("div", {
                                    className: R.textButtonWrapper,
                                    children: (0, l.jsx)(o.Avr, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: K,
                                        text: D.intl.string(D.t["13/7kZ"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}
function M(e) {
    let { guildId: t, guildScheduledEventId: r, transitionState: a, onClose: u } = e;
    (0, s.e7)([h.Z], () => h.Z.getGuild(t));
    let d = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(r), [r]),
        m = (0, s.e7)([g.ZP], () => g.ZP.getDefaultChannel(t), [t]),
        x = (0, O.j$)(d, m),
        [v, C] = i.useState(x),
        [P] = i.useState((0, O.Ql)(d)),
        [S, I] = i.useState(null),
        [T, { loading: R, error: G }] = (0, p.Z)(async () => {
            if (null != S) return;
            if (P && null != r) return await f.Z.saveEvent(r, v, t), u();
            let e = await f.Z.createGuildEvent(v, t);
            return (
                ((e) => {
                    var t;
                    let n = (0, b.so)(e),
                        r = null != (t = e.channel_id) ? t : null == m ? void 0 : m.id;
                    null != r &&
                        c.ZP.createInvite(
                            r,
                            {
                                max_age: _.value,
                                max_uses: z.value,
                            },
                            k.t4x.GUILD_EVENTS,
                        ),
                        n ? I(e) : u();
                })(e.body),
                e
            );
        }),
        U = i.useMemo(() => (0, Z.Z)(v, P), [v, P]);
    return (0, l.jsx)(L, {
        guildId: t,
        guildEvent: v,
        guildEventId: r,
        isEdit: P,
        formErrors: U,
        transitionState: a,
        loading: R,
        error: G,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let r = (0, E.xC)(e.entityType),
                    [l] = (0, y.SU)(t, r);
                (e.channelId = null != (n = null == l ? void 0 : l.id) ? n : null),
                    e.entityType !== w.WX.EXTERNAL && v.entityType === w.WX.EXTERNAL && (e.entityMetadata = null);
            }
            C((t) => A({}, t, e));
        },
        onSave: () => {
            null != v.recurrenceRule && P && (0, N.BP)(d, v)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, r;
                          return (0, l.jsxs)(
                              e,
                              ((n = A({}, t)),
                              (r = r =
                                  {
                                      header: D.intl.string(D.t.BW1Qoq),
                                      confirmText: D.intl.string(D.t.e5VEcH),
                                      cancelText: D.intl.string(D.t.oEAioK),
                                      onConfirm: T,
                                      children: [
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: D.intl.string(D.t.aNCYam),
                                          }),
                                          (0, l.jsx)("br", {}),
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: D.intl.format(D.t.RWBa5e, {}),
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
                : T();
        },
        onClose: u,
        createdEvent: S,
    });
}
