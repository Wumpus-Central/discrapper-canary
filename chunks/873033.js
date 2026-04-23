l.d(t, { default: () => Y });
var n = l(627968),
    a = l(64700),
    i = l(989349),
    r = l.n(i),
    s = l(772707),
    o = l(189213),
    c = l(17928),
    d = l(783878),
    u = l(451394),
    h = l(292666),
    g = l(834730),
    x = l(260598),
    m = l(939249),
    f = l(658675),
    v = l(964486),
    p = l(47167),
    _ = l(232246),
    A = l(974930),
    j = l(979091),
    b = l(71393),
    N = l(994500),
    w = l(287809),
    y = l(954571),
    C = l(498642),
    E = l(576705),
    I = l(818348);
function T(e) {
    return (0, c.bG)([E.A], () => null != e && E.A.can(I.xB.MENTION_EVERYONE, e), [e]);
}
var M = l(446600),
    S = l(366098),
    k = l(918192),
    D = l(660110),
    O = l(686956),
    R = l(956793),
    V = l(845584),
    L = l(421838),
    F = l(849736),
    G = l(897513),
    P = l(516607),
    B = l(652215),
    Z = l(988794),
    z = l(985018),
    U = l(134473),
    Q = l(973324);
function Y(e) {
    let { channel: t, onClose: l, transitionState: i } = e,
        r = (0, c.bG)([b.A], () => b.A.getGuild(t.guild_id));
    return (a.useEffect(() => {
        null == r && l();
    }, [r, l]),
    null == r)
        ? null
        : (0, n.jsx)(q, { transitionState: i, guild: r, channel: t, onClose: l });
}
function H(e) {
    let { stageChannelsInGuild: t, channel: l, onSelectChannel: a } = e;
    return null == a
        ? null
        : (0, n.jsx)("div", {
              className: U.BD,
              children: (0, n.jsx)(d.Z, {
                  selectionMode: "single",
                  required: !0,
                  label: z.intl.string(z.t.S7GjDz),
                  value: l.id,
                  options: t.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: (0, p.m1)(e, w.default, N.A, !0),
                      leading: (0, n.jsx)(u.q, { size: "custom", color: "currentColor", height: 24 }),
                  })),
                  onSelectionChange: (e) => {
                      let l = t.find((t) => t.id === e);
                      null != l && a(l);
                  },
              }),
          });
}
function q(e) {
    let t,
        l,
        { channel: i, guild: d, onClose: u, onSelectChannel: b, transitionState: N, isEvent: w = !1 } = e,
        {
            loading: E,
            error: I,
            onSave: Y,
        } = (function (e, t) {
            let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                [n, i] = a.useState(!1),
                [r, s] = a.useState(null),
                o = a.useMemo(() => M.A.getStageInstanceByChannel(e?.id), [e?.id]),
                c = T(e);
            return {
                loading: n,
                error: r,
                onSave: async (n) => {
                    let { topic: a, privacyLevel: r, sendStartNotification: d } = n;
                    if (null != e && "" !== a && null != r) {
                        i(!0), s(null), null != l && (O.A.selectGuild(l), R.default.selectVoiceChannel(e.id));
                        try {
                            let l;
                            null != o
                                ? (l = await F.b3(e, a, r))
                                : ((l = await F.Nx(e, a, r, d ?? !1)), c && L.sF(G._.LIVE_STAGE_NOTIFICATION_BADGE)),
                                t(l);
                        } catch (e) {
                            s(new V.LG(e)), i(!1);
                        }
                    }
                },
            };
        })(i, u),
        q = a.useMemo(() => M.A.getStageInstanceByChannel(i.id), [i.id]),
        [X, J] = a.useState(q?.topic ?? ""),
        [K, W] = a.useState(""),
        [$] = a.useState(w),
        [ee, et] = a.useState({ startDate: (0, A.jd)() }),
        [el, en] = a.useState(!1),
        ea = T(i),
        ei =
            ((t = i?.guild_id),
            (l = (0, c.bG)([C.A], () => C.A.getMemberCount(t), [t])),
            null == i || (null != l && !(l > 5e4))),
        er = null == q && ea && !$,
        [es, eo] = a.useState(er && ei),
        ec = Z.dD.GUILD_ONLY,
        [ed] = a.useState(q?.privacy_level ?? ec),
        [eu, eh] = a.useState(null),
        eg = (0, S.D3)(i.id),
        ex = (0, S.Xk)(i.id),
        [em, ef] = a.useState(!1),
        ev = (0, p.Ay)(i),
        ep = (0, _.A)(d),
        e_ = null != b,
        eA = ep.length > 1;
    (0, v.Ay)(() => {
        y.default.track(B.HAw.START_STAGE_OPENED, {
            stage_instance_id: q?.id,
            can_start_public_stage: !1,
            guild_id: i.guild_id,
        });
    });
    let ej = (e) => {
            (e.preventDefault(), ed === Z.dD.PUBLIC && X.length < 20 && !em)
                ? ef(!0)
                : $ || Y?.({ topic: X, privacyLevel: ed, sendStartNotification: es });
        },
        eb = a.useRef(null);
    a.useEffect(() => {
        eb.current?.focus();
    }, []);
    let eN = el && null != ee.startDate && ee.startDate >= r()(),
        ew = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", {
                    className: U.GU,
                    children: null == q && (eg > 0 || ex > 0) && (0, n.jsx)(k.Bw, { channelId: i.id }),
                }),
                (0, n.jsxs)("form", {
                    onSubmit: ej,
                    className: U.Zd,
                    children: [
                        (0, n.jsx)(h.k, {
                            required: !0,
                            error: null != I ? I.getAnyErrorMessage() : void 0,
                            label: w ? z.intl.string(z.t["0HbEQ6"]) : z.intl.string(z.t["5FPBOB"]),
                            onChange: (e) => J(e),
                            helperText: em ? z.intl.string(z.t.AqTyaR) : void 0,
                            placeholder: z.intl.string(z.t.ZwWruY),
                            maxLength: P.RY,
                            value: X,
                            autoComplete: "off",
                            inputRef: eb,
                        }),
                        e_ && eA ? (0, n.jsx)(H, { stageChannelsInGuild: ep, channel: i, onSelectChannel: b }) : null,
                        $ &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(j.A, {
                                        className: U.kz,
                                        onScheduleChange: et,
                                        onRecurrenceChange: (e) => {
                                            let t = ee.startDate;
                                            null == t || eh((0, A.nG)(e, t));
                                        },
                                        schedule: ee,
                                        recurrenceRule: eu,
                                        timeSelected: el,
                                        onTimeChange: en,
                                    }),
                                    null != ee.startDate && ee.startDate < r()()
                                        ? (0, n.jsx)(g.E, {
                                              color: "text-feedback-critical",
                                              variant: "text-xs/normal",
                                              className: U.$e,
                                              children: z.intl.string(z.t.AXR5Ss),
                                          })
                                        : null,
                                ],
                            }),
                        w &&
                            (0, n.jsx)("div", {
                                className: U.kz,
                                children: (0, n.jsx)(x.f, {
                                    label: z.intl.string(z.t["+gRCC7"]),
                                    placeholder: z.intl.string(z.t["kWO/E8"]),
                                    value: K,
                                    onChange: (e) => W(e),
                                    maxLength: Z.IJ,
                                }),
                            }),
                        e_ && !eA
                            ? (0, n.jsx)(g.E, {
                                  color: "text-default",
                                  variant: "text-xs/normal",
                                  className: U.Qw,
                                  children: z.intl.format(z.t["S+9O7g"], {
                                      stageName: ev,
                                      stageHook: (e, t) => (0, n.jsx)("span", { className: U.HA, children: ev }, t),
                                  }),
                              })
                            : null,
                        (0, n.jsx)(D.A, { className: U.XI, channelId: i.id }),
                    ],
                }),
            ],
        }),
        ey = {
            onClose: u,
            title: null == q ? z.intl.string(z.t.DDF0cJ) : z.intl.string(z.t.YPdQOp),
            subtitle: null == q ? z.intl.string(z.t.bqQIwa) : z.intl.string(z.t["I+9bLx"]),
            transitionState: N,
            actions: [
                { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: () => u() },
                {
                    variant: "primary",
                    text: $
                        ? z.intl.string(z.t["60lJ0C"])
                        : null == q
                          ? z.intl.string(z.t.s8mM8A)
                          : z.intl.string(z.t.K344S7),
                    onClick: ej,
                    disabled: "" === X || null == ed || (w && !eN),
                    loading: E,
                },
            ],
            actionBarInput: er
                ? (0, n.jsxs)(m.D, {
                      onClick: () => eo(!es),
                      className: U.Qy,
                      children: [
                          (0, n.jsx)(f.P, { checked: es }),
                          (0, n.jsx)(g.E, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: z.intl.string(z.t["Pe+Pwp"]),
                          }),
                      ],
                  })
                : void 0,
        };
    return null == q
        ? (0, n.jsx)(s.k, { graphic: { type: "image", src: Q.A }, ...ey, children: ew })
        : (0, n.jsx)(o.Modal, { ...ey, children: ew });
}
