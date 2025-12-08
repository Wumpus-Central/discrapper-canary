n.d(t, { default: () => F }), n(388685);
var l,
    r = n(54381),
    i = n(473749),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    g = n(96698),
    m = n(313201),
    x = n(984933),
    h = n(430824),
    v = n(971130),
    p = n(981888),
    f = n(924301),
    j = n(482241),
    b = n(951539),
    y = n(545165),
    O = n(236373),
    E = n(230900),
    N = n(854698),
    C = n(334877),
    P = n(785468),
    S = n(377329),
    I = n(311166),
    Z = n(744782),
    T = n(129526),
    w = n(765305),
    k = n(981631),
    D = n(388032),
    R = n(869939);
function _(e) {
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
let { INVITE_OPTIONS_7_DAYS: A, INVITE_OPTIONS_UNLIMITED: G } = v.ZP;
var U =
    (((l = U || {})[(l.ENTITY = 0)] = "ENTITY"),
    (l[(l.SETTINGS = 1)] = "SETTINGS"),
    (l[(l.PREVIEW = 2)] = "PREVIEW"),
    (l[(l.SUCCESS = 3)] = "SUCCESS"),
    l);
function L(e) {
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
function z(e) {
    let {
            guildId: t,
            guildEvent: n,
            guildEventId: l,
            isEdit: c,
            formErrors: d,
            transitionState: x,
            loading: h,
            error: v,
            onChange: p,
            onSave: j,
            onClose: b,
            createdEvent: y,
        } = e,
        O = (0, m.Dt)(),
        E = i.useRef(n),
        N = !(0, a.isEqual)(E.current, n),
        T = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: D.intl.string(D.t["56QlKS"]),
                    valid: null == d.entity,
                    userErrorMessage: d.entity,
                },
                {
                    slideId: 1,
                    label: D.intl.string(D.t["w5/ntT"]),
                    valid: null == d.schedule && null == d.topic && (!c || N),
                    userErrorMessage: d.schedule,
                },
                {
                    slideId: 2,
                    label: D.intl.string(D.t["8aJzT4"]),
                    valid: !0,
                },
            ],
            [d, c, N],
        ),
        w = Object.keys(U).length,
        k = (0, f.xt)(n),
        _ = (e) => Math.max(0, Math.min(e, w - 1)),
        [A, G] = i.useState(+!!k),
        [z, F] = i.useState(!1),
        M = i.useMemo(
            () =>
                T.slice(0, A + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [T, A],
        ),
        V = A >= T.length ? 3 : T[_(A)].slideId,
        B = 3 === V;
    (0, C.l)((e) => e.onUpdateCanCloseModal)(B);
    let X = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        W = i.useRef(null),
        q = (e) => {
            F(!1), G(_(e));
        },
        H = i.useRef(q);
    i.useEffect(() => {
        H.current = q;
    }),
        i.useEffect(() => {
            (null == y ? void 0 : y.id) != null && H.current(3);
        }, [null == y ? void 0 : y.id]);
    let Y = () => {
            M && (2 === V ? j() : B ? b() : q(A + 1));
        },
        K = () => {
            q(A - 1);
        },
        J = D.intl.string(D.t.PDTjLN);
    return (
        2 === V && (J = c ? D.intl.string(D.t.e5VEcE) : D.intl.string(D.t["60lJ0C"])),
        (0, r.jsxs)(o.Y0X, {
            transitionState: x,
            "aria-labelledby": O,
            size: o.CgR.DYNAMIC,
            parentComponent: "ScheduleEventModal",
            "data-migration-pending": !0,
            children: [
                !X && B ? (0, r.jsx)(L, { modal: W.current }) : null,
                (0, r.jsxs)(o.hzk, {
                    className: R.content,
                    scrollerRef: W,
                    "data-migration-pending": !0,
                    children: [
                        !B &&
                            (0, r.jsx)(g.Z, {
                                steps: T.map((e) => e.label),
                                stepIndex: A,
                                onClick: (e) => {
                                    e < A ? K() : e > A && Y();
                                },
                            }),
                        (0, r.jsxs)(o.MyZ, {
                            activeSlide: V,
                            width: 440,
                            onSlideReady: (e) => {
                                F(e === V);
                            },
                            children: [
                                (0, r.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, r.jsx)(P.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: d.entity,
                                        isSlideReady: z,
                                        onChange: p,
                                    }),
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, r.jsx)(I.Z, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        onChange: p,
                                        error: v,
                                        validationErrorMessage: d.schedule,
                                        isSlideReady: z,
                                    }),
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, r.jsx)(S.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: l,
                                        error: v,
                                    }),
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, r.jsx)(Z.Z, {
                                        onClose: b,
                                        event: y,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                !B &&
                    (0, r.jsxs)(o.mzw, {
                        className: R.footer,
                        "data-migration-pending": !0,
                        children: [
                            (0, r.jsxs)("div", {
                                className: R.inline,
                                children: [
                                    (0, r.jsx)(o.Button, {
                                        variant: "secondary",
                                        text: D.intl.string(D.t["ETE/oC"]),
                                        onClick: b,
                                    }),
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: R.button,
                                        children: (0, r.jsx)(o.Button, {
                                            variant: "primary",
                                            text: J,
                                            onClick: Y,
                                            disabled: !M,
                                            loading: h,
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
                                        onClick: K,
                                        text: D.intl.string(D.t["13/7kX"]),
                                    }),
                                }),
                        ],
                    }),
            ],
        })
    );
}
function F(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: a, onClose: u } = e;
    (0, s.e7)([h.Z], () => h.Z.getGuild(t));
    let d = (0, s.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(l), [l]),
        g = (0, s.e7)([x.ZP], () => x.ZP.getDefaultChannel(t), [t]),
        m = (0, O.j$)(d, g),
        [v, C] = i.useState(m),
        [P] = i.useState((0, O.Ql)(d)),
        [S, I] = i.useState(null),
        [Z, { loading: R, error: U }] = (0, p.Z)(async () => {
            if (null != S) return;
            if (P && null != l) return await j.Z.saveEvent(l, v, t), u();
            let e = await j.Z.createGuildEvent(v, t);
            return (
                ((e) => {
                    var t;
                    let n = (0, b.so)(e),
                        l = null != (t = e.channel_id) ? t : null == g ? void 0 : g.id;
                    null != l &&
                        c.ZP.createInvite(
                            l,
                            {
                                max_age: A.value,
                                max_uses: G.value,
                            },
                            k.t4x.GUILD_EVENTS,
                        ),
                        n ? I(e) : u();
                })(e.body),
                e
            );
        }),
        L = i.useMemo(() => (0, T.Z)(v, P), [v, P]);
    return (0, r.jsx)(z, {
        guildId: t,
        guildEvent: v,
        guildEventId: l,
        isEdit: P,
        formErrors: L,
        transitionState: a,
        loading: R,
        error: U,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let l = (0, E.xC)(e.entityType),
                    [r] = (0, y.SU)(t, l);
                (e.channelId = null != (n = null == r ? void 0 : r.id) ? n : null),
                    e.entityType !== w.WX.EXTERNAL && v.entityType === w.WX.EXTERNAL && (e.entityMetadata = null);
            }
            C((t) => _({}, t, e));
        },
        onSave: () => {
            null != v.recurrenceRule && P && (0, N.BP)(d, v)
                ? (0, o.ZDy)(async () => {
                      let { VoidConfirmModal: e } = await Promise.resolve().then(n.bind(n, 288022));
                      return (t) => {
                          var n, l;
                          return (0, r.jsxs)(
                              e,
                              ((n = _({}, t)),
                              (l = l =
                                  {
                                      header: D.intl.string(D.t.BW1Qoh),
                                      confirmText: D.intl.string(D.t.e5VEcE),
                                      cancelText: D.intl.string(D.t.oEAioF),
                                      onConfirm: Z,
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: D.intl.string(D.t.aNCYas),
                                          }),
                                          (0, r.jsx)("br", {}),
                                          (0, r.jsx)(o.Text, {
                                              variant: "text-md/normal",
                                              children: D.intl.format(D.t.RWBa5X, {}),
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
                : Z();
        },
        onClose: u,
        createdEvent: S,
    });
}
