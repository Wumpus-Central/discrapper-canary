l.d(e, { default: () => J });
var n = l(627968),
    a = l(64700),
    i = l(989349),
    s = l.n(i),
    r = l(772707),
    u = l(189213),
    c = l(17928),
    d = l(783878),
    o = l(451394),
    g = l(292666),
    h = l(834730),
    x = l(260598),
    m = l(939249),
    f = l(658675),
    S = l(964486),
    A = l(47167),
    C = l(232246),
    j = l(974930),
    p = l(979091),
    v = l(71393),
    E = l(994500),
    _ = l(287809),
    b = l(174459),
    N = l(498642),
    D = l(576705),
    k = l(818348);
function I(t) {
    return (0, c.bG)([D.A], () => null != t && D.A.can(k.xB.MENTION_EVERYONE, t), [t]);
}
var G = l(446600),
    y = l(366098),
    w = l(918192),
    T = l(660110),
    B = l(66834),
    O = l(730852),
    R = l(913122),
    L = l(421838),
    M = l(849736),
    P = l(897513),
    F = l(516607),
    q = l(652215),
    Q = l(988794),
    Y = l(375708),
    z = l(134473),
    H = l(973324);
function J(t) {
    let { channel: e, onClose: l, transitionState: i } = t,
        s = (0, c.bG)([v.A], () => v.A.getGuild(e.guild_id));
    return (a.useEffect(() => {
        null == s && l();
    }, [s, l]),
    null == s)
        ? null
        : (0, n.jsx)(V, { transitionState: i, guild: s, channel: e, onClose: l });
}
function U(t) {
    let { stageChannelsInGuild: e, channel: l, onSelectChannel: a } = t;
    return null == a
        ? null
        : (0, n.jsx)("div", {
              className: z.BD,
              children: (0, n.jsx)(d.Z, {
                  selectionMode: "single",
                  required: !0,
                  label: Y.intl.string(Y.t.S7GjDz),
                  value: l.id,
                  options: e.map((t) => ({
                      id: t.id,
                      value: t.id,
                      label: (0, A.m1)(t, _.default, E.A, !0),
                      leading: (0, n.jsx)(o.q, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: (t) => {
                      let l = e.find((e) => e.id === t);
                      null != l && a(l);
                  },
              }),
          });
}
function V(t) {
    let e,
        l,
        { channel: i, guild: d, onClose: o, onSelectChannel: v, transitionState: E, isEvent: _ = !1 } = t,
        {
            loading: D,
            error: k,
            onSave: J,
        } = (function (t, e) {
            let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                [n, i] = a.useState(!1),
                [s, r] = a.useState(null),
                u = a.useMemo(() => G.A.getStageInstanceByChannel(t?.id), [t?.id]),
                c = I(t);
            async function d(n) {
                let { topic: a, privacyLevel: s, sendStartNotification: d } = n;
                if (null != t && "" !== a && null != s) {
                    i(!0), r(null), null != l && (B.A.selectGuild(l), O.default.selectVoiceChannel(t.id));
                    try {
                        let l;
                        null != u
                            ? (l = await M.b3(t, a, s))
                            : ((l = await M.Nx(t, a, s, d ?? !1)), c && L.sF(P._.LIVE_STAGE_NOTIFICATION_BADGE)),
                            e(l);
                    } catch (t) {
                        r(new R.LG(t)), i(!1);
                    }
                }
            }
            return { loading: n, error: s, onSave: d };
        })(i, o),
        V = a.useMemo(() => G.A.getStageInstanceByChannel(i.id), [i.id]),
        [X, Z] = a.useState(V?.topic ?? ""),
        [W, K] = a.useState(""),
        [$] = a.useState(_),
        [tt, te] = a.useState({ startDate: (0, j.jd)() }),
        [tl, tn] = a.useState(!1),
        ta = I(i),
        ti =
            ((e = i?.guild_id),
            (l = (0, c.bG)([N.A], () => N.A.getMemberCount(e), [e])),
            null == i || (null != l && !(l > 5e4))),
        ts = null == V && ta && !$,
        [tr, tu] = a.useState(ts && ti),
        tc = Q.dD.GUILD_ONLY,
        [td] = a.useState(V?.privacy_level ?? tc),
        [to, tg] = a.useState(null),
        th = (0, y.D3)(i.id),
        tx = (0, y.Xk)(i.id),
        [tm, tf] = a.useState(!1),
        tS = (0, A.Ay)(i),
        tA = (0, C.A)(d),
        tC = null != v,
        tj = tA.length > 1;
    (0, S.Ay)(() => {
        b.default.track(q.HAw.START_STAGE_OPENED, {
            stage_instance_id: V?.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let tp = (t) => {
            (t.preventDefault(), td === Q.dD.PUBLIC && X.length < 20 && !tm)
                ? tf(!0)
                : $ || J?.({ topic: X, privacyLevel: td, sendStartNotification: tr });
        },
        tv = a.useRef(null);
    a.useEffect(() => {
        tv.current?.focus();
    }, []);
    let tE = tl && null != tt.startDate && tt.startDate >= s()(),
        t_ = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: z.GU,
                    children: null == V && (th > 0 || tx > 0) && (0, n.jsx)(w.Bw, { channelId: i.id }),
                }),
                (0, n.jsxs)("form", {
                    onSubmit: tp,
                    className: z.Zd,
                    children: [
                        (0, n.jsx)(g.k, {
                            required: !0,
                            error: null != k ? k.getAnyErrorMessage() : void 0,
                            label: _ ? Y.intl.string(Y.t["0HbEQ6"]) : Y.intl.string(Y.t["5FPBOB"]),
                            onChange: (t) => Z(t),
                            helperText: tm ? Y.intl.string(Y.t.AqTyaR) : void 0,
                            placeholder: Y.intl.string(Y.t.ZwWruY),
                            maxLength: F.RY,
                            value: X,
                            autoComplete: "off",
                            inputRef: tv,
                        }),
                        tC && tj ? (0, n.jsx)(U, { stageChannelsInGuild: tA, channel: i, onSelectChannel: v }) : null,
                        $ &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(p.A, {
                                        className: z.kz,
                                        onScheduleChange: te,
                                        onRecurrenceChange: function (t) {
                                            let e = tt.startDate;
                                            null == e || tg((0, j.nG)(t, e));
                                        },
                                        schedule: tt,
                                        recurrenceRule: to,
                                        timeSelected: tl,
                                        onTimeChange: tn,
                                    }),
                                    null != tt.startDate && tt.startDate < s()()
                                        ? (0, n.jsx)(h.E, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: z.$e,
                                              children: Y.intl.string(Y.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        _ &&
                            (0, n.jsx)("div", {
                                className: z.kz,
                                children: (0, n.jsx)(x.f, {
                                    label: Y.intl.string(Y.t["+gRCC7"]),
                                    placeholder: Y.intl.string(Y.t["kWO/E8"]),
                                    value: W,
                                    onChange: (t) => K(t),
                                    maxLength: Q.IJ,
                                }),
                            }),
                        tC && !tj
                            ? (0, n.jsx)(h.E, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: z.Qw,
                                  children: Y.intl.format(Y.t["S+9O7g"], {
                                      stageName: tS,
                                      stageHook: function (t, e) {
                                          return (0, n.jsx)("span", { className: z.HA, children: tS }, e);
                                      },
                                  }),
                              })
                            : null,
                        (0, n.jsx)(T.A, { className: z.XI, channelId: i.id }),
                    ],
                }),
            ],
        }),
        tb = {
            onClose: o,
            title: null == V ? Y.intl.string(Y.t.DDF0cJ) : Y.intl.string(Y.t.YPdQOp),
            subtitle: null == V ? Y.intl.string(Y.t.bqQIwa) : Y.intl.string(Y.t["I+9bLx"]),
            transitionState: E,
            actions: [
                { variant: "secondary", text: Y.intl.string(Y.t["ETE/oC"]), onClick: () => o() },
                {
                    variant: "primary",
                    text: $
                        ? Y.intl.string(Y.t["60lJ0C"])
                        : null == V
                          ? Y.intl.string(Y.t.s8mM8A)
                          : Y.intl.string(Y.t.K344S7),
                    onClick: tp,
                    disabled: "" === X || null == td || (_ && !tE),
                    loading: D,
                },
            ],
            actionBarInput: ts
                ? (0, n.jsxs)(m.D, {
                      onClick: () => tu(!tr),
                      className: z.Qy,
                      children: [
                          (0, n.jsx)(f.P, { checked: tr }),
                          (0, n.jsx)(h.E, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: Y.intl.string(Y.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == V
        ? (0, n.jsx)(r.k, { graphic: { type: "image", src: H.A }, ...tb, children: t_ })
        : (0, n.jsx)(u.Modal, { ...tb, children: t_ });
}
