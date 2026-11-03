n.d(t, { default: () => J });
var l = n(477900),
    a = n(582128),
    i = n(536637),
    s = n.n(i),
    r = n(17928),
    u = n(189213),
    c = n(890497),
    d = n(451394),
    o = n(95477),
    g = n(834730),
    h = n(103557),
    x = n(939249),
    m = n(658675),
    f = n(772707),
    S = n(964486),
    A = n(47167),
    C = n(232246),
    j = n(974930),
    p = n(979091),
    b = n(71393),
    v = n(994500),
    E = n(287809),
    _ = n(174459),
    N = n(498642),
    D = n(576705),
    k = n(818348);
function I(e) {
    return (0, r.bG)([D.A], () => null != e && D.A.can(k.xB.MENTION_EVERYONE, e), [e]);
}
var y = n(446600),
    G = n(366098),
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
    Y = n(105292),
    z = n(320372),
    H = n(973324);
function J(e) {
    let { channel: t, onClose: n, transitionState: i } = e,
        s = (0, r.bG)([b.A], () => b.A.getGuild(t.guild_id));
    return (a.useEffect(() => {
        null == s && n();
    }, [s, n]),
    null == s)
        ? null
        : (0, l.jsx)(V, { transitionState: i, guild: s, channel: t, onClose: n });
}
function U(e) {
    let { stageChannelsInGuild: t, channel: n, onSelectChannel: a } = e;
    return null == a
        ? null
        : (0, l.jsx)("div", {
              className: z.BD,
              children: (0, l.jsx)(c.Z, {
                  selectionMode: "single",
                  required: !0,
                  label: Y.intl.string(Y.t.S7GjDz),
                  value: n.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, A.m1)(e, E.default, v.A, !0),
                      leading: (0, l.jsx)(d.q, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: function (e) {
                      if (null == a) return;
                      let n = t.find((t) => t.id === e);
                      null != n && a(n);
                  },
              }),
          });
}
function V(e) {
    let t,
        n,
        { channel: i, guild: c, onClose: d, onSelectChannel: b, transitionState: v, isEvent: E = !1 } = e,
        {
            loading: D,
            error: k,
            onSave: J,
        } = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                [l, i] = a.useState(!1),
                [s, r] = a.useState(null),
                u = a.useMemo(() => y.A.getStageInstanceByChannel(e?.id), [e?.id]),
                c = I(e);
            async function d(l) {
                let { topic: a, privacyLevel: s, sendStartNotification: d } = l;
                if (null != e && "" !== a && null != s) {
                    (i(!0), r(null), null != n && (B.A.selectGuild(n), O.default.selectVoiceChannel(e.id)));
                    try {
                        let n;
                        (null != u
                            ? (n = await M.b3(e, a, s))
                            : ((n = await M.Nx(e, a, s, d ?? !1)), c && L.sF(P._.LIVE_STAGE_NOTIFICATION_BADGE)),
                            t(n));
                    } catch (e) {
                        (r(new R.LG(e)), i(!1));
                    }
                }
            }
            return { loading: l, error: s, onSave: d };
        })(i, d),
        V = a.useMemo(() => y.A.getStageInstanceByChannel(i.id), [i.id]),
        [X, Z] = a.useState(V?.topic ?? ""),
        [W, K] = a.useState(""),
        [$] = a.useState(E),
        [ee, et] = a.useState({ startDate: (0, j.jd)() }),
        [en, el] = a.useState(!1),
        ea = I(i),
        ei =
            ((t = i?.guild_id),
            (n = (0, r.bG)([N.A], () => N.A.getMemberCount(t), [t])),
            null == i || (null != n && !(n > 5e4))),
        es = null == V && ea && !$,
        [er, eu] = a.useState(es && ei),
        ec = Q.dD.GUILD_ONLY,
        [ed] = a.useState(V?.privacy_level ?? ec),
        [eo, eg] = a.useState(null),
        eh = (0, G.D3)(i.id),
        ex = (0, G.Xk)(i.id),
        [em, ef] = a.useState(!1),
        eS = (0, A.Ay)(i),
        eA = (0, C.A)(c),
        eC = null != b,
        ej = eA.length > 1;
    function ep(e) {
        (e.preventDefault(), ed === Q.dD.PUBLIC && X.length < 20 && !em)
            ? ef(!0)
            : $ || J?.({ topic: X, privacyLevel: ed, sendStartNotification: er });
    }
    (0, S.Ay)(() => {
        _.default.track(q.HAw.START_STAGE_OPENED, {
            stage_instance_id: V?.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let eb = a.useRef(null);
    a.useEffect(() => {
        eb.current?.focus();
    }, []);
    let ev = en && null != ee.startDate && ee.startDate >= s()(),
        eE = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: z.GU,
                    children: null == V && (eh > 0 || ex > 0) && (0, l.jsx)(w.Bw, { channelId: i.id }),
                }),
                (0, l.jsxs)("form", {
                    onSubmit: ep,
                    className: z.Zd,
                    children: [
                        (0, l.jsx)(o.k, {
                            required: !0,
                            error: null != k ? k.getAnyErrorMessage() : void 0,
                            label: E ? Y.intl.string(Y.t["0HbEQ6"]) : Y.intl.string(Y.t["5FPBOB"]),
                            onChange: (e) => Z(e),
                            helperText: em ? Y.intl.string(Y.t.AqTyaR) : void 0,
                            placeholder: Y.intl.string(Y.t.ZwWruY),
                            maxLength: F.RY,
                            value: X,
                            autoComplete: "off",
                            inputRef: eb,
                        }),
                        eC && ej ? (0, l.jsx)(U, { stageChannelsInGuild: eA, channel: i, onSelectChannel: b }) : null,
                        $ &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(p.A, {
                                        className: z.kz,
                                        onScheduleChange: et,
                                        onRecurrenceChange: function (e) {
                                            let t = ee.startDate;
                                            null == t || eg((0, j.nG)(e, t));
                                        },
                                        schedule: ee,
                                        recurrenceRule: eo,
                                        timeSelected: en,
                                        onTimeChange: el,
                                    }),
                                    null != ee.startDate && ee.startDate < s()()
                                        ? (0, l.jsx)(g.E, {
                                              color: "text-feedback-critical",
                                              variant: "body-xs/normal",
                                              className: z.$e,
                                              children: Y.intl.string(Y.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        E &&
                            (0, l.jsx)("div", {
                                className: z.kz,
                                children: (0, l.jsx)(h.f, {
                                    label: Y.intl.string(Y.t["+gRCC7"]),
                                    placeholder: Y.intl.string(Y.t["kWO/E8"]),
                                    value: W,
                                    onChange: (e) => K(e),
                                    maxLength: Q.IJ,
                                }),
                            }),
                        eC && !ej
                            ? (0, l.jsx)(g.E, {
                                  color: "text-default",
                                  variant: "body-xs/normal",
                                  className: z.Qw,
                                  children: Y.intl.format(Y.t["S+9O7g"], {
                                      stageName: eS,
                                      stageHook: function (e, t) {
                                          return (0, l.jsx)("span", { className: z.HA, children: eS }, t);
                                      },
                                  }),
                              })
                            : null,
                        (0, l.jsx)(T.A, { className: z.XI, channelId: i.id }),
                    ],
                }),
            ],
        }),
        e_ = {
            onClose: d,
            title: null == V ? Y.intl.string(Y.t.DDF0cJ) : Y.intl.string(Y.t.YPdQOp),
            subtitle: null == V ? Y.intl.string(Y.t.bqQIwa) : Y.intl.string(Y.t["I+9bLx"]),
            transitionState: v,
            actions: [
                { variant: "secondary", text: Y.intl.string(Y.t["ETE/oC"]), onClick: () => d() },
                {
                    variant: "primary",
                    text: $
                        ? Y.intl.string(Y.t["60lJ0C"])
                        : null == V
                          ? Y.intl.string(Y.t.s8mM8A)
                          : Y.intl.string(Y.t.K344S7),
                    onClick: ep,
                    disabled: "" === X || null == ed || (E && !ev),
                    loading: D,
                },
            ],
            actionBarInput: es
                ? (0, l.jsxs)(x.D, {
                      onClick: () => eu(!er),
                      className: z.Qy,
                      children: [
                          (0, l.jsx)(m.P, { checked: er }),
                          (0, l.jsx)(g.E, {
                              color: "text-default",
                              variant: "body-sm/normal",
                              children: Y.intl.string(Y.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == V
        ? (0, l.jsx)(f.k, { graphic: { type: "image", src: H.A }, ...e_, children: eE })
        : (0, l.jsx)(u.a, { ...e_, children: eE });
}
