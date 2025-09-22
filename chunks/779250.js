n.d(t, { default: () => X }), n(388685);
var r,
    l = n(951288),
    i = n(647438),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    x = n(96698),
    g = n(313201),
    m = n(984933),
    v = n(430824),
    h = n(971130),
    j = n(981888),
    p = n(924301),
    f = n(482241),
    b = n(951539),
    y = n(545165),
    O = n(236373),
    E = n(230900),
    C = n(954313),
    N = n(334877),
    P = n(785468),
    S = n(377329),
    T = n(311166),
    Z = n(744782),
    w = n(129526),
    I = n(765305),
    D = n(981631),
    k = n(388032),
    R = n(869939);
function G(e) {
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
let { INVITE_OPTIONS_7_DAYS: A, INVITE_OPTIONS_UNLIMITED: M } = h.ZP;
var _ =
    (((r = _ || {})[(r.ENTITY = 0)] = "ENTITY"),
    (r[(r.SETTINGS = 1)] = "SETTINGS"),
    (r[(r.PREVIEW = 2)] = "PREVIEW"),
    (r[(r.SUCCESS = 3)] = "SUCCESS"),
    r);
function L(e) {
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
            isEdit: c,
            formErrors: d,
            transitionState: m,
            loading: v,
            error: h,
            onChange: j,
            onSave: f,
            onClose: b,
            createdEvent: y,
        } = e,
        O = (0, g.Dt)(),
        E = i.useRef(n),
        C = !(0, a.isEqual)(E.current, n),
        w = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: k.intl.string(k.t["56QlKS"]),
                    valid: null == d.entity,
                    userErrorMessage: d.entity,
                },
                {
                    slideId: 1,
                    label: k.intl.string(k.t["w5/ntb"]),
                    valid: null == d.schedule && null == d.topic && (!c || C),
                    userErrorMessage: d.schedule,
                },
                {
                    slideId: 2,
                    label: k.intl.string(k.t["8aJzT0"]),
                    valid: !0,
                },
            ],
            [d, c, C],
        ),
        I = Object.keys(_).length,
        D = (0, p.xt)(n),
        G = (e) => Math.max(0, Math.min(e, I - 1)),
        [A, M] = i.useState(+!!D),
        [z, X] = i.useState(!1),
        V = i.useMemo(
            () =>
                w
                    .slice(0, A + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [w, A],
        ),
        W = A >= w.length ? 3 : w[G(A)].slideId,
        U = 3 === W;
    (0, N.l)((e) => e.onUpdateCanCloseModal)(U);
    let q = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        F = i.useRef(null),
        B = (e) => {
            X(!1), M(G(e));
        },
        K = i.useRef(B);
    i.useEffect(() => {
        K.current = B;
    }),
        i.useEffect(() => {
            (null == y ? void 0 : y.id) != null && K.current(3);
        }, [null == y ? void 0 : y.id]);
    let H = () => {
            V && (2 === W ? f() : U ? b() : B(A + 1));
        },
        Y = () => {
            B(A - 1);
        },
        Q = k.intl.string(k.t.PDTjLC);
    return (
        2 === W && (Q = c ? k.intl.string(k.t.e5VEcH) : k.intl.string(k.t["60lJ0N"])),
        (0, l.jsxs)(o.Y0X, {
            transitionState: m,
            "aria-labelledby": O,
            size: o.CgR.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !q && U ? (0, l.jsx)(L, { modal: F.current }) : null,
                (0, l.jsxs)(o.hzk, {
                    className: R.content,
                    scrollerRef: F,
                    "data-migration-pending": !0,
                    children: [
                        !U &&
                            (0, l.jsx)(x.Z, {
                                steps: w.map((e) => e.label),
                                stepIndex: A,
                                onClick: (e) => {
                                    e < A ? Y() : e > A && H();
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
                                    children: (0, l.jsx)(P.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: z,
                                        onChange: j,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, l.jsx)(T.Z, {
                                        guildEvent: n,
                                        guildEventId: r,
                                        guildId: t,
                                        onChange: j,
                                        error: h,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: z,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, l.jsx)(S.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: r,
                                        error: h,
                                    }),
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, l.jsx)(Z.Z, {
                                        onClose: b,
                                        event: y,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                !U &&
                    (0, l.jsxs)(o.mzw, {
                        className: R.footer,
                        "data-migration-pending": !0,
                        children: [
                            (0, l.jsxs)("div", {
                                className: R.inline,
                                children: [
                                    (0, l.jsx)(o.zxk, {
                                        variant: "secondary",
                                        text: k.intl.string(k.t["ETE/oK"]),
                                        onClick: b,
                                    }),
                                    (0, l.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: R.button,
                                        children: (0, l.jsx)(o.zxk, {
                                            variant: "primary",
                                            text: Q,
                                            onClick: H,
                                            disabled: !V,
                                            loading: v,
                                        }),
                                    }),
                                ],
                            }),
                            0 !== W &&
                                (0, l.jsx)("div", {
                                    className: R.textButtonWrapper,
                                    children: (0, l.jsx)(o.Avr, {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: Y,
                                        text: k.intl.string(k.t["13/7kZ"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}
function X(e) {
    let { guildId: t, guildScheduledEventId: r, transitionState: a, onClose: u } = e;
    (0, s.e7)([v.Z], () => v.Z.getGuild(t));
    let d = (0, s.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(r), [r]),
        x = (0, s.e7)([m.ZP], () => m.ZP.getDefaultChannel(t), [t]),
        g = (0, O.j$)(d, x),
        [h, N] = i.useState(g),
        [P] = i.useState((0, O.Ql)(d)),
        [S, T] = i.useState(null),
        [Z, { loading: R, error: _ }] = (0, j.Z)(async () => {
            if (null != S) return;
            if (P && null != r) return await f.Z.saveEvent(r, h, t), u();
            let e = await f.Z.createGuildEvent(h, t);
            return (
                ((e) => {
                    var t;
                    let n = (0, b.so)(e),
                        r = null != (t = e.channel_id) ? t : null == x ? void 0 : x.id;
                    null != r &&
                        c.ZP.createInvite(
                            r,
                            {
                                max_age: A.value,
                                max_uses: M.value,
                            },
                            D.t4x.GUILD_EVENTS,
                        ),
                        n ? T(e) : u();
                })(e.body),
                e
            );
        }),
        L = i.useMemo(() => (0, w.Z)(h, P), [h, P]);
    return (0, l.jsx)(z, {
        guildId: t,
        guildEvent: h,
        guildEventId: r,
        isEdit: P,
        formErrors: L,
        transitionState: a,
        loading: R,
        error: _,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let r = (0, E.xC)(e.entityType),
                    [l] = (0, y.SU)(t, r);
                (e.channelId = null != (n = null == l ? void 0 : l.id) ? n : null),
                    e.entityType !== I.WX.EXTERNAL && h.entityType === I.WX.EXTERNAL && (e.entityMetadata = null);
            }
            N((t) => G({}, t, e));
        },
        onSave: () => {
            null != h.recurrenceRule && P && (0, C.BP)(d, h)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, r;
                          return (0, l.jsxs)(
                              e,
                              ((n = G({}, t)),
                              (r = r =
                                  {
                                      header: k.intl.string(k.t.BW1Qoq),
                                      confirmText: k.intl.string(k.t.e5VEcH),
                                      cancelText: k.intl.string(k.t.oEAioK),
                                      onConfirm: Z,
                                      children: [
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: k.intl.string(k.t.aNCYam),
                                          }),
                                          (0, l.jsx)("br", {}),
                                          (0, l.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: k.intl.format(k.t.RWBa5e, {}),
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
                : Z();
        },
        onClose: u,
        createdEvent: S,
    });
}
