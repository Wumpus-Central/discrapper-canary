n.d(e, { default: () => J });
var l = n(477900),
    a = n(582128),
    i = n(989349),
    s = n.n(i),
    r = n(772707),
    u = n(189213),
    c = n(17928),
    d = n(783878),
    o = n(451394),
    g = n(95477),
    h = n(834730),
    x = n(260598),
    m = n(939249),
    f = n(658675),
    S = n(964486),
    A = n(47167),
    C = n(232246),
    j = n(974930),
    p = n(979091),
    v = n(71393),
    E = n(994500),
    _ = n(287809),
    b = n(174459),
    N = n(498642),
    D = n(576705),
    k = n(818348);
function I(t) {
    return (0, c.bG)([D.A], () => null != t && D.A.can(k.xB.MENTION_EVERYONE, t), [t]);
}
var G = n(446600),
    y = n(366098),
    w = n(918192),
    T = n(660110),
    B = n(66834),
    O = n(730852),
    R = n(913122),
    L = n(421838),
    M = n(849736),
    P = n(897513),
    F = n(516607),
    q = n(652215),
    Q = n(988794),
    Y = n(375708),
    z = n(34289),
    H = n(973324);
function J(t) {
    let { channel: e, onClose: n, transitionState: i } = t,
        s = (0, c.bG)([v.A], () => v.A.getGuild(e.guild_id));
    return (a.useEffect(() => {
        null == s && n();
    }, [s, n]),
    null == s)
        ? null
        : (0, l.jsx)(V, { transitionState: i, guild: s, channel: e, onClose: n });
}
function U(t) {
    let { stageChannelsInGuild: e, channel: n, onSelectChannel: a } = t;
    return null == a
        ? null
        : (0, l.jsx)("div", {
              className: z.BD,
              children: (0, l.jsx)(d.Z, {
                  selectionMode: "single",
                  required: !0,
                  label: Y.intl.string(Y.t.S7GjDz),
                  value: n.id,
                  options: e.map((t) => ({
                      id: t.id,
                      value: t.id,
                      label: (0, A.m1)(t, _.default, E.A, !0),
                      leading: (0, l.jsx)(o.q, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: function (t) {
                      if (null == a) return;
                      let n = e.find((e) => e.id === t);
                      null != n && a(n);
                  },
              }),
          });
}
function V(t) {
    let e,
        n,
        { channel: i, guild: d, onClose: o, onSelectChannel: v, transitionState: E, isEvent: _ = !1 } = t,
        {
            loading: D,
            error: k,
            onSave: J,
        } = (function (t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                [l, i] = a.useState(!1),
                [s, r] = a.useState(null),
                u = a.useMemo(() => G.A.getStageInstanceByChannel(t?.id), [t?.id]),
                c = I(t);
            async function d(l) {
                let { topic: a, privacyLevel: s, sendStartNotification: d } = l;
                if (null != t && "" !== a && null != s) {
                    i(!0), r(null), null != n && (B.A.selectGuild(n), O.default.selectVoiceChannel(t.id));
                    try {
                        let n;
                        null != u
                            ? (n = await M.b3(t, a, s))
                            : ((n = await M.Nx(t, a, s, d ?? !1)), c && L.sF(P._.LIVE_STAGE_NOTIFICATION_BADGE)),
                            e(n);
                    } catch (t) {
                        r(new R.LG(t)), i(!1);
                    }
                }
            }
            return { loading: l, error: s, onSave: d };
        })(i, o),
        V = a.useMemo(() => G.A.getStageInstanceByChannel(i.id), [i.id]),
        [X, Z] = a.useState(V?.topic ?? ""),
        [W, K] = a.useState(""),
        [$] = a.useState(_),
        [tt, te] = a.useState({ startDate: (0, j.jd)() }),
        [tn, tl] = a.useState(!1),
        ta = I(i),
        ti =
            ((e = i?.guild_id),
            (n = (0, c.bG)([N.A], () => N.A.getMemberCount(e), [e])),
            null == i || (null != n && !(n > 5e4))),
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
    function tp(t) {
        (t.preventDefault(), td === Q.dD.PUBLIC && X.length < 20 && !tm)
            ? tf(!0)
            : $ || J?.({ topic: X, privacyLevel: td, sendStartNotification: tr });
    }
    (0, S.Ay)(() => {
        b.default.track(q.HAw.START_STAGE_OPENED, {
            stage_instance_id: V?.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let tv = a.useRef(null);
    a.useEffect(() => {
        tv.current?.focus();
    }, []);
    let tE = tn && null != tt.startDate && tt.startDate >= s()(),
        t_ = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: z.GU,
                    children: null == V && (th > 0 || tx > 0) && (0, l.jsx)(w.Bw, { channelId: i.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: tp,
                    className: z.Zd,
                    children: [
                        (0, l.jsx)(g.k, {
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
                        tC && tj ? (0, l.jsx)(U, { stageChannelsInGuild: tA, channel: i, onSelectChannel: v }) : null,
                        $ &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(p.A, {
                                        className: z.kz,
                                        onScheduleChange: te,
                                        onRecurrenceChange: function (t) {
                                            let e = tt.startDate;
                                            null == e || tg((0, j.nG)(t, e));
                                        },
                                        schedule: tt,
                                        recurrenceRule: to,
                                        timeSelected: tn,
                                        onTimeChange: tl,
                                    }),
                                    null != tt.startDate && tt.startDate < s()()
                                        ? (0, l.jsx)(h.E, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: z.$e,
                                              children: Y.intl.string(Y.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        _ &&
                            (0, l.jsx)("div", {
                                className: z.kz,
                                children: (0, l.jsx)(x.f, {
                                    label: Y.intl.string(Y.t["+gRCC7"]),
                                    placeholder: Y.intl.string(Y.t["kWO/E8"]),
                                    value: W,
                                    onChange: (t) => K(t),
                                    maxLength: Q.IJ,
                                }),
                            }),
                        tC && !tj
                            ? (0, l.jsx)(h.E, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: z.Qw,
                                  children: Y.intl.format(Y.t["S+9O7g"], {
                                      stageName: tS,
                                      stageHook: function (t, e) {
                                          return (0, l.jsx)("span", { className: z.HA, children: tS }, e);
                                      },
                                  }),
                              })
                            : null,
                        (0, l.jsx)(T.A, { className: z.XI, channelId: i.id }),
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
                ? (0, l.jsxs)(m.D, {
                      onClick: () => tu(!tr),
                      className: z.Qy,
                      children: [
                          (0, l.jsx)(f.P, { checked: tr }),
                          (0, l.jsx)(h.E, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: Y.intl.string(Y.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == V
        ? (0, l.jsx)(r.k, { graphic: { type: "image", src: H.A }, ...tb, children: t_ })
        : (0, l.jsx)(u.Modal, { ...tb, children: t_ });
}
