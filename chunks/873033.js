l.d(t, { default: () => J });
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
    S = l(658675),
    f = l(964486),
    A = l(47167),
    C = l(232246),
    j = l(647090),
    p = l(979091),
    v = l(71393),
    E = l(994500),
    _ = l(287809),
    b = l(174459),
    N = l(498642),
    D = l(576705),
    k = l(818348);
function I(e) {
    return (0, c.bG)([D.A], () => null != e && D.A.can(k.xB.MENTION_EVERYONE, e), [e]);
}
var G = l(446600),
    y = l(366098),
    w = l(918192),
    T = l(660110),
    B = l(66834),
    O = l(730852),
    R = l(845584),
    L = l(421838),
    M = l(849736),
    P = l(897513),
    F = l(516607),
    q = l(652215),
    Q = l(988794),
    Y = l(375708),
    z = l(134473),
    H = l(973324);
function J(e) {
    let { channel: t, onClose: l, transitionState: i } = e,
        s = (0, c.bG)([v.A], () => v.A.getGuild(t.guild_id));
    return (a.useEffect(() => {
        null == s && l();
    }, [s, l]),
    null == s)
        ? null
        : (0, n.jsx)(V, { transitionState: i, guild: s, channel: t, onClose: l });
}
function U(e) {
    let { stageChannelsInGuild: t, channel: l, onSelectChannel: a } = e;
    return null == a
        ? null
        : (0, n.jsx)("div", {
              className: z.BD,
              children: (0, n.jsx)(d.Z, {
                  selectionMode: "single",
                  required: !0,
                  label: Y.intl.string(Y.t.S7GjDz),
                  value: l.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, A.m1)(e, _.default, E.A, !0),
                      leading: (0, n.jsx)(o.q, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: (e) => {
                      let l = t.find((t) => t.id === e);
                      null != l && a(l);
                  },
              }),
          });
}
function V(e) {
    let t,
        l,
        { channel: i, guild: d, onClose: o, onSelectChannel: v, transitionState: E, isEvent: _ = !1 } = e,
        {
            loading: D,
            error: k,
            onSave: J,
        } = (function (e, t) {
            let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                [n, i] = a.useState(!1),
                [s, r] = a.useState(null),
                u = a.useMemo(() => G.A.getStageInstanceByChannel(e?.id), [e?.id]),
                c = I(e);
            return {
                loading: n,
                error: s,
                onSave: async (n) => {
                    let { topic: a, privacyLevel: s, sendStartNotification: d } = n;
                    if (null != e && "" !== a && null != s) {
                        i(!0), r(null), null != l && (B.A.selectGuild(l), O.default.selectVoiceChannel(e.id));
                        try {
                            let l;
                            null != u
                                ? (l = await M.b3(e, a, s))
                                : ((l = await M.Nx(e, a, s, d ?? !1)), c && L.sF(P._.LIVE_STAGE_NOTIFICATION_BADGE)),
                                t(l);
                        } catch (e) {
                            r(new R.LG(e)), i(!1);
                        }
                    }
                },
            };
        })(i, o),
        V = a.useMemo(() => G.A.getStageInstanceByChannel(i.id), [i.id]),
        [X, Z] = a.useState(V?.topic ?? ""),
        [W, K] = a.useState(""),
        [$] = a.useState(_),
        [ee, et] = a.useState({ startDate: (0, j.jd)() }),
        [el, en] = a.useState(!1),
        ea = I(i),
        ei =
            ((t = i?.guild_id),
            (l = (0, c.bG)([N.A], () => N.A.getMemberCount(t), [t])),
            null == i || (null != l && !(l > 5e4))),
        es = null == V && ea && !$,
        [er, eu] = a.useState(es && ei),
        ec = Q.dD.GUILD_ONLY,
        [ed] = a.useState(V?.privacy_level ?? ec),
        [eo, eg] = a.useState(null),
        eh = (0, y.D3)(i.id),
        ex = (0, y.Xk)(i.id),
        [em, eS] = a.useState(!1),
        ef = (0, A.Ay)(i),
        eA = (0, C.A)(d),
        eC = null != v,
        ej = eA.length > 1;
    (0, f.Ay)(() => {
        b.default.track(q.HAw.START_STAGE_OPENED, {
            stage_instance_id: V?.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ep = (e) => {
            (e.preventDefault(), ed === Q.dD.PUBLIC && X.length < 20 && !em)
                ? eS(!0)
                : $ || J?.({ topic: X, privacyLevel: ed, sendStartNotification: er });
        },
        ev = a.useRef(null);
    a.useEffect(() => {
        ev.current?.focus();
    }, []);
    let eE = el && null != ee.startDate && ee.startDate >= s()(),
        e_ = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: z.GU,
                    children: null == V && (eh > 0 || ex > 0) && (0, n.jsx)(w.Bw, { channelId: i.id }),
                }),
                (0, n.jsxs)("form", {
                    onSubmit: ep,
                    className: z.Zd,
                    children: [
                        (0, n.jsx)(g.k, {
                            required: !0,
                            error: null != k ? k.getAnyErrorMessage() : void 0,
                            label: _ ? Y.intl.string(Y.t["0HbEQ6"]) : Y.intl.string(Y.t["5FPBOB"]),
                            onChange: (e) => Z(e),
                            helperText: em ? Y.intl.string(Y.t.AqTyaR) : void 0,
                            placeholder: Y.intl.string(Y.t.ZwWruY),
                            maxLength: F.RY,
                            value: X,
                            autoComplete: "off",
                            inputRef: ev,
                        }),
                        eC && ej ? (0, n.jsx)(U, { stageChannelsInGuild: eA, channel: i, onSelectChannel: v }) : null,
                        $ &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(p.A, {
                                        className: z.kz,
                                        onScheduleChange: et,
                                        onRecurrenceChange: (e) => {
                                            let t = ee.startDate;
                                            null == t || eg((0, j.nG)(e, t));
                                        },
                                        schedule: ee,
                                        recurrenceRule: eo,
                                        timeSelected: el,
                                        onTimeChange: en,
                                    }),
                                    null != ee.startDate && ee.startDate < s()()
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
                                    onChange: (e) => K(e),
                                    maxLength: Q.IJ,
                                }),
                            }),
                        eC && !ej
                            ? (0, n.jsx)(h.E, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: z.Qw,
                                  children: Y.intl.format(Y.t["S+9O7g"], {
                                      stageName: ef,
                                      stageHook: (e, t) => (0, n.jsx)("span", { className: z.HA, children: ef }, t),
                                  }),
                              })
                            : null,
                        (0, n.jsx)(T.A, { className: z.XI, channelId: i.id }),
                    ],
                }),
            ],
        }),
        eb = {
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
                    onClick: ep,
                    disabled: "" === X || null == ed || (_ && !eE),
                    loading: D,
                },
            ],
            actionBarInput: es
                ? (0, n.jsxs)(m.D, {
                      onClick: () => eu(!er),
                      className: z.Qy,
                      children: [
                          (0, n.jsx)(S.P, { checked: er }),
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
        ? (0, n.jsx)(r.k, { graphic: { type: "image", src: H.A }, ...eb, children: e_ })
        : (0, n.jsx)(u.Modal, { ...eb, children: e_ });
}
