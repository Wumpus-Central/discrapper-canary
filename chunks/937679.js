n.d(e, { default: () => ls });
var t = n(477900),
    i = n(582128),
    a = n(855986),
    s = n(189213),
    r = n(834730),
    c = n(260498),
    o = n(826058),
    u = n(495273),
    d = n(71393),
    m = n(576705),
    x = n(961553),
    g = n(233470),
    h = n(951178),
    p = n(277085),
    v = n(811587),
    b = n(587895),
    j = n(808728),
    f = n(498642),
    A = n(246338),
    N = n(722701);
let C = [];
var y = n(652215),
    E = n(191850),
    P = n(792996);
let _ = [
        [h.q7.BOT, E.default.UnoAgo],
        [h.q7.ACTIVITY, E.default["I88/iG"]],
        [h.q7.VOICE_CHANNEL, E.default.skjf5I],
        [h.q7.PROFILE_WIDGET, E.default.gXY1x1],
        [h.q7.AUTOMOD, E.default.Q9ruoM],
    ],
    I = { screen_capture: E.default["8/7kE7"], connect_user_to_voice: E.default.uvDWXa };
var k = n(503698),
    T = n.n(k),
    L = n(31300),
    q = n(983851),
    S = n(430392),
    D = n(794083),
    G = n(715641),
    U = n(231483),
    w = n(901117),
    O = n(323384),
    M = n(939249),
    z = n(750943),
    F = n(858899),
    H = n(95477),
    R = n(103557),
    Z = n(950305),
    B = n(143129),
    W = n(47167),
    V = n(682163),
    Y = n(946274),
    K = n(535466),
    X = n(845079),
    Q = n(536791);
let $ = { screen_capture: L.k, connect_user_to_voice: q.H },
    J = {
        [h.q7.BOT]: S.RobotIcon,
        [h.q7.ACTIVITY]: D.b,
        [h.q7.VOICE_CHANNEL]: q.H,
        [h.q7.PROFILE_WIDGET]: G.b,
        [h.q7.AUTOMOD]: U.ShieldIcon,
    };
function ll(l) {
    let { project: e, panel: n } = l,
        { initial: a, editable: s, identity: c, sharing: o } = n,
        u = i.useRef(null),
        { appChannelsPrivate: d } = n,
        m = d?.isPrivate === !0 ? w.Z : O.k,
        x = [
            ...(a
                ? n.initialChannelNames.map((l) => (0, t.jsx)(ln, { icon: m, label: l }, `channel:${l}`))
                : n.channels.map((l) => (0, t.jsx)(li, { channel: l }, l.id))),
            ...n.components.map((l) => {
                let { surface: e, label: n } = l;
                return (0, t.jsx)(ln, { icon: J[e], label: n }, e);
            }),
        ];
    return (0, t.jsxs)("div", {
        className: Q.zH,
        children: [
            (0, t.jsxs)("div", {
                className: Q.wx,
                children: [
                    s
                        ? null != c.iconURL
                            ? (0, t.jsxs)(M.D, {
                                  className: Q.gb,
                                  "aria-label": P.intl.string(P.t["6yrpFR"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: [
                                      (0, t.jsx)("img", { className: Q.Dp, src: c.iconURL, alt: "" }),
                                      (0, t.jsx)("span", {
                                          className: Q.E7,
                                          "aria-hidden": !0,
                                          children: (0, t.jsx)(z.X, { size: "xs", color: "currentColor" }),
                                      }),
                                  ],
                              })
                            : (0, t.jsx)(M.D, {
                                  className: T()(Q.gb, Q.YX),
                                  "aria-label": P.intl.string(P.t["MsUY/S"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: (0, t.jsx)(z.X, { size: "md", color: "currentColor" }),
                              })
                        : (0, t.jsx)(X.A, { project: e, size: "dialog" }),
                    s
                        ? (0, t.jsx)(Y.Ay, {
                              ref: u,
                              className: Q.Fg,
                              multiple: !1,
                              filters: [{ name: P.intl.string(P.t["Sp2NF+"]), extensions: K.En }],
                              maxFileSizeBytes: K.Q0,
                              onChange: c.setIcon,
                              onFileSizeError: () =>
                                  (0, F.P0)({ text: P.intl.string(E.default.ZTAAMc), variant: "critical" }),
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
            s
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsxs)("div", {
                              className: Q.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: P.intl.string(E.default.knevPu),
                                  }),
                                  (0, t.jsx)(H.k, {
                                      label: P.intl.string(E.default.knevPu),
                                      hideLabel: !0,
                                      value: n.name,
                                      onChange: n.setName,
                                      error: n.nameError,
                                      maxLength: 128,
                                      disabled: n.saving,
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                          (0, t.jsxs)("div", {
                              className: Q.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: P.intl.string(E.default.ynaGa1),
                                  }),
                                  (0, t.jsx)(R.f, {
                                      label: P.intl.string(E.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: P.intl.string(E.default["I+3UTL"]),
                                      value: c.description,
                                      onChange: c.setDescription,
                                      maxLength: 400,
                                      disabled: n.saving,
                                      rows: 4,
                                      maxRows: 6,
                                      autosize: !0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, t.jsxs)("div", {
                      className: Q.ZZ,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "body-md/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              children: n.displayName,
                          }),
                          "" !== n.description
                              ? (0, t.jsx)(r.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 2,
                                    children: n.description,
                                })
                              : null,
                      ],
                  }),
            (0, t.jsx)(le, { title: P.intl.string(E.default.BqNMms), rows: x }),
            null != d
                ? (0, t.jsx)(lt, {
                      channelCount: n.initialChannelNames.length,
                      appChannelsPrivate: d,
                      disabled: n.saving,
                  })
                : null,
            (0, t.jsx)(le, {
                title: P.intl.string(E.default.LnqeFd),
                rows: n.devicePermissions.map((l) => (0, t.jsx)(ln, { icon: $[l], label: P.intl.string(I[l]) }, l)),
            }),
            null != o
                ? (0, t.jsxs)("section", {
                      className: Q.KO,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: P.intl.string(E.default.esTM8y),
                          }),
                          (0, t.jsxs)("div", {
                              className: Q.Kk,
                              children: [
                                  null != o.guild
                                      ? (0, t.jsx)(V.Ay, {
                                            guild: o.guild,
                                            size: V.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: Q.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, t.jsx)("span", {
                                            className: Q.qU,
                                            children: (0, t.jsx)(Z.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, t.jsxs)("div", {
                                      className: Q.qg,
                                      children: [
                                          (0, t.jsx)(r.E, {
                                              variant: "body-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: o.guild?.name ?? P.intl.string(E.default["37xgkF"]),
                                          }),
                                          null != o.caption
                                              ? (0, t.jsx)(r.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-subtle",
                                                    children: o.caption,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function le(l) {
    let { title: e, rows: n } = l;
    return 0 === n.length
        ? null
        : (0, t.jsxs)("section", {
              className: Q.mK,
              children: [
                  (0, t.jsx)(r.E, { variant: "body-sm/normal", color: "text-subtle", children: e }),
                  (0, t.jsx)("div", { children: n }),
              ],
          });
}
function ln(l) {
    let { icon: e, label: n } = l;
    return (0, t.jsxs)("div", {
        className: Q.CT,
        children: [
            (0, t.jsx)(e, { size: "sm", color: "currentColor", className: Q.Pw, "aria-hidden": !0 }),
            (0, t.jsx)(r.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function lt(l) {
    let { channelCount: e, appChannelsPrivate: n, disabled: i } = l,
        { isPrivate: a } = n,
        s = P.intl.formatToPlainString(E.default.Td1mlg, { count: e });
    return (0, t.jsxs)("div", {
        className: Q.HY,
        children: [
            (0, t.jsx)(r.E, {
                variant: "body-md/medium",
                color: a ? "text-default" : "text-muted",
                "aria-hidden": !0,
                children: s,
            }),
            (0, t.jsx)(B.d, { label: s, hideLabel: !0, checked: a, disabled: i, onChange: n.setPrivate }),
        ],
    });
}
function li(l) {
    let { channel: e } = l;
    return (0, t.jsx)(ln, { icon: O.k, label: (0, W.Ay)(e) ?? "" });
}
var la = n(787032);
function ls(l) {
    let { projectId: e, publishOptions: n, entryPoint: s, savingRef: r, transitionState: u, onClose: d } = l,
        m = (0, o.Ay)(e, n),
        x = (0, a.bG)([c.Ay], () => c.Ay.getProject(e), [e]);
    return (i.useEffect(() => {
        (null == x || null == m) && d();
    }, [x, m, d]),
    null == x || null == m)
        ? null
        : (0, t.jsx)(lr, { project: x, publish: m, entryPoint: s, savingRef: r, transitionState: u, onClose: d });
}
function lr(l) {
    let { project: e, publish: n, entryPoint: o, savingRef: I, transitionState: k, onClose: T } = l,
        L = (function (l, e) {
            var n, t, s;
            let r,
                o,
                I,
                k,
                T,
                L,
                {
                    liveName: q,
                    liveDescription: S,
                    channels: D,
                    guild: G,
                    memberCount: U,
                } = ((n = l.id),
                (t = e.guildId),
                (r = (0, a.bG)([c.Ay], () => c.Ay.getProject(n) ?? null, [n])),
                (o = r?.application_id ?? null),
                (I = (0, a.bG)([b.A], () => (null == o ? null : (b.A.getApplication(o) ?? null)), [o])),
                (k = (0, a.bG)([d.A], () => (null == t ? null : (d.A.getGuild(t) ?? null)), [t])),
                (T = (0, a.bG)([f.A], () => (null == t ? null : (f.A.getMemberCount(t) ?? null)), [t])),
                (L = (0, a.yK)(
                    [j.A],
                    () =>
                        null == t || null == o
                            ? []
                            : j.A.getChannels(t)
                                  [j.I].filter((l) => {
                                      let { channel: e } = l;
                                      return (0, A.us)(e) === o;
                                  })
                                  .map((l) => {
                                      let { channel: e } = l;
                                      return e;
                                  }),
                    [t, o],
                )),
                {
                    project: r,
                    liveName: I?.name ?? r?.name ?? "",
                    liveDescription: I?.description?.trim() ?? "",
                    channels: L,
                    guild: k,
                    memberCount: T,
                }),
                w = (0, x.A)(l.id),
                O = ((s = l.id), (0, a.bG)([N.A], () => N.A.getPublishStatus(s)?.previewDevicePermissions ?? C)),
                [M, z] = i.useState(l.name),
                [F, H] = i.useState(!1),
                R = null == e.status || !(0, v.lE)(e.status.publishState),
                Z = R && (0, c.PV)(l),
                B = (R ? l.preview_supported_surfaces : l.supported_surfaces) ?? [],
                W = M.trim(),
                V = Z ? (0, p.p)(W) : null,
                Y = e.status?.previewAppChannels ?? [],
                K = 0 === Y.length && B.includes(h.q7.APP_CHANNEL) ? [P.intl.string(E.default.xI4N6Q)] : Y,
                [X, Q] = i.useState(!1),
                $ =
                    Z && K.length > 0 && "guild" === l.install_scope && l.guild_id === e.guildId
                        ? (l.guild_id ?? null)
                        : null,
                J = (0, a.bG)(
                    [d.A, m.A],
                    () => {
                        let l = null == $ ? null : d.A.getGuild($);
                        return (
                            null != l &&
                            m.A.can(y.xBc.MANAGE_CHANNELS, l) &&
                            (0, u.n0)(y.rbe.GUILD_APP, m.A.can(y.xBc.VIEW_CHANNEL, l), m.A.can(y.xBc.CONNECT, l))
                        );
                    },
                    [$],
                );
            return {
                initial: R,
                editable: Z,
                identity: w,
                name: M,
                setName: z,
                nameError: V,
                displayName: R ? l.name : q,
                description: R ? w.description : S,
                initialChannelNames: K,
                channels: D,
                appChannelsPrivate: J ? { isPrivate: X, setPrivate: Q } : null,
                components: _.filter((l) => {
                    let [e] = l;
                    return B.includes(e);
                }).map((l) => {
                    let [e, n] = l;
                    return { surface: e, label: P.intl.string(n) };
                }),
                devicePermissions: R ? O : [],
                note:
                    R && "guild" === l.install_scope && B.includes(h.q7.AUTOMOD)
                        ? P.intl.string(E.default.bljqPk)
                        : null,
                sharing:
                    null != G
                        ? {
                              guild: G,
                              caption: null != U ? P.intl.formatToPlainString(E.default.ZpZxK9, { count: U }) : null,
                          }
                        : "user" === l.install_scope
                          ? { guild: null, caption: P.intl.string(E.default.RUhWLH) }
                          : null,
                saving: F,
                save: async function () {
                    if (F || null != V) return !1;
                    H(!0);
                    try {
                        return (
                            Z && (W !== l.name || w.changed) && (await (0, g.CW)(l.id, { ...w.changes, name: W })), !0
                        );
                    } finally {
                        H(!1);
                    }
                },
            };
        })(e, n),
        [q, S] = i.useState(null);
    return (0, t.jsx)(s.a, {
        transitionState: k,
        onClose: T,
        dismissable: !L.saving,
        title: P.intl.string(E.default.NEPcoi),
        notice: null == q ? void 0 : { message: q, type: "critical", role: "alert" },
        preview: (0, t.jsx)("div", { className: la.m, role: "presentation" }),
        actionBarInput: (0, t.jsx)("div", {
            className: la.N,
            children:
                null != L.note
                    ? (0, t.jsx)(r.E, { variant: "body-sm/normal", color: "text-subtle", children: L.note })
                    : null,
        }),
        actions: [
            { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: T, disabled: L.saving },
            {
                text: n.label,
                variant: "primary",
                loading: L.saving,
                disabled: n.disabled || null != L.nameError,
                onClick: async function () {
                    (S(null), (I.current = !0));
                    try {
                        if (!(await L.save())) return;
                    } catch {
                        S(P.intl.string(E.default.Fi7boI));
                        return;
                    } finally {
                        I.current = !1;
                    }
                    (n.run(o, L.appChannelsPrivate?.isPrivate === !0), T());
                },
            },
        ],
        children: (0, t.jsx)(ll, { project: e, panel: L }),
    });
}
