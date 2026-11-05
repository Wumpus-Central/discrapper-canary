n.d(l, { default: () => es });
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
    p = n(961553),
    g = n(233470),
    x = n(951178),
    h = n(277085),
    v = n(811587),
    b = n(587895),
    j = n(808728),
    f = n(498642),
    A = n(246338),
    N = n(722701);
let C = [];
var y = n(652215),
    I = n(191850),
    E = n(792996);
let P = [
        [x.q7.BOT, I.default.UnoAgo],
        [x.q7.ACTIVITY, I.default["I88/iG"]],
        [x.q7.VOICE_CHANNEL, I.default.skjf5I],
        [x.q7.PROFILE_WIDGET, I.default.gXY1x1],
        [x.q7.AUTOMOD, I.default.Q9ruoM],
    ],
    _ = { screen_capture: I.default["8/7kE7"], connect_user_to_voice: I.default.uvDWXa };
var T = n(503698),
    L = n.n(T),
    k = n(31300),
    S = n(983851),
    q = n(430392),
    D = n(794083),
    G = n(715641),
    U = n(231483),
    w = n(901117),
    O = n(323384),
    M = n(939249),
    z = n(750943),
    F = n(858899),
    R = n(95477),
    B = n(103557),
    Z = n(950305),
    H = n(143129),
    V = n(47167),
    W = n(682163),
    Y = n(946274),
    K = n(535466),
    Q = n(845079),
    X = n(536791);
let $ = { screen_capture: k.ScreenIcon, connect_user_to_voice: S.VoiceNormalIcon },
    J = {
        [x.q7.BOT]: q.RobotIcon,
        [x.q7.ACTIVITY]: D.ActivitiesIcon,
        [x.q7.VOICE_CHANNEL]: S.VoiceNormalIcon,
        [x.q7.PROFILE_WIDGET]: G.BadgeIcon,
        [x.q7.AUTOMOD]: U.ShieldIcon,
    };
function ee(e) {
    let { project: l, panel: n } = e,
        { initial: a, editable: s, identity: c, sharing: o } = n,
        u = i.useRef(null),
        { appChannelsPrivate: d } = n,
        m = d?.isPrivate === !0 ? w.AppsLockIcon : O.AppsIcon,
        p = [
            ...(a
                ? n.initialChannelNames.map((e) => (0, t.jsx)(en, { icon: m, label: e }, `channel:${e}`))
                : n.channels.map((e) => (0, t.jsx)(ei, { channel: e }, e.id))),
            ...n.components.map((e) => {
                let { surface: l, label: n } = e;
                return (0, t.jsx)(en, { icon: J[l], label: n }, l);
            }),
        ];
    return (0, t.jsxs)("div", {
        className: X.zH,
        children: [
            (0, t.jsxs)("div", {
                className: X.wx,
                children: [
                    s
                        ? null != c.iconURL
                            ? (0, t.jsxs)(M.D, {
                                  className: X.gb,
                                  "aria-label": E.intl.string(E.t["6yrpFR"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: [
                                      (0, t.jsx)("img", { className: X.Dp, src: c.iconURL, alt: "" }),
                                      (0, t.jsx)("span", {
                                          className: X.E7,
                                          "aria-hidden": !0,
                                          children: (0, t.jsx)(z.ImagePlusIcon, { size: "xs", color: "currentColor" }),
                                      }),
                                  ],
                              })
                            : (0, t.jsx)(M.D, {
                                  className: L()(X.gb, X.YX),
                                  "aria-label": E.intl.string(E.t["MsUY/S"]),
                                  onClick: () => u.current?.activateUploadDialogue(),
                                  children: (0, t.jsx)(z.ImagePlusIcon, { size: "md", color: "currentColor" }),
                              })
                        : (0, t.jsx)(Q.A, { project: l, size: "dialog" }),
                    s
                        ? (0, t.jsx)(Y.Ay, {
                              ref: u,
                              className: X.Fg,
                              multiple: !1,
                              filters: [{ name: E.intl.string(E.t["Sp2NF+"]), extensions: K.En }],
                              maxFileSizeBytes: K.Q0,
                              onChange: c.setIcon,
                              onFileSizeError: () =>
                                  (0, F.P0)({ text: E.intl.string(I.default.ZTAAMc), variant: "critical" }),
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
            s
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsxs)("div", {
                              className: X.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: E.intl.string(I.default.knevPu),
                                  }),
                                  (0, t.jsx)(R.k, {
                                      label: E.intl.string(I.default.knevPu),
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
                              className: X.ZZ,
                              children: [
                                  (0, t.jsx)(r.E, {
                                      variant: "body-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: E.intl.string(I.default.ynaGa1),
                                  }),
                                  (0, t.jsx)(B.f, {
                                      label: E.intl.string(I.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: E.intl.string(I.default["I+3UTL"]),
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
                      className: X.ZZ,
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
            (0, t.jsx)(el, { title: E.intl.string(I.default.BqNMms), rows: p }),
            null != d
                ? (0, t.jsx)(et, {
                      channelCount: n.initialChannelNames.length,
                      appChannelsPrivate: d,
                      disabled: n.saving,
                  })
                : null,
            (0, t.jsx)(el, {
                title: E.intl.string(I.default.LnqeFd),
                rows: n.devicePermissions.map((e) => (0, t.jsx)(en, { icon: $[e], label: E.intl.string(_[e]) }, e)),
            }),
            null != o
                ? (0, t.jsxs)("section", {
                      className: X.KO,
                      children: [
                          (0, t.jsx)(r.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: E.intl.string(I.default.esTM8y),
                          }),
                          (0, t.jsxs)("div", {
                              className: X.Kk,
                              children: [
                                  null != o.guild
                                      ? (0, t.jsx)(W.Ay, {
                                            guild: o.guild,
                                            size: W.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: X.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, t.jsx)("span", {
                                            className: X.qU,
                                            children: (0, t.jsx)(Z.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, t.jsxs)("div", {
                                      className: X.qg,
                                      children: [
                                          (0, t.jsx)(r.E, {
                                              variant: "body-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: o.guild?.name ?? E.intl.string(I.default["37xgkF"]),
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
function el(e) {
    let { title: l, rows: n } = e;
    return 0 === n.length
        ? null
        : (0, t.jsxs)("section", {
              className: X.mK,
              children: [
                  (0, t.jsx)(r.E, { variant: "body-sm/normal", color: "text-subtle", children: l }),
                  (0, t.jsx)("div", { children: n }),
              ],
          });
}
function en(e) {
    let { icon: l, label: n } = e;
    return (0, t.jsxs)("div", {
        className: X.CT,
        children: [
            (0, t.jsx)(l, { size: "sm", color: "currentColor", className: X.Pw, "aria-hidden": !0 }),
            (0, t.jsx)(r.E, { variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: n }),
        ],
    });
}
function et(e) {
    let { channelCount: l, appChannelsPrivate: n, disabled: i } = e,
        { isPrivate: a } = n,
        s = E.intl.formatToPlainString(I.default.Td1mlg, { count: l });
    return (0, t.jsxs)("div", {
        className: X.HY,
        children: [
            (0, t.jsx)(r.E, {
                variant: "body-md/medium",
                color: a ? "text-default" : "text-muted",
                "aria-hidden": !0,
                children: s,
            }),
            (0, t.jsx)(H.d, { label: s, hideLabel: !0, checked: a, disabled: i, onChange: n.setPrivate }),
        ],
    });
}
function ei(e) {
    let { channel: l } = e;
    return (0, t.jsx)(en, { icon: O.AppsIcon, label: (0, V.Ay)(l) ?? "" });
}
var ea = n(787032);
function es(e) {
    let { projectId: l, publishOptions: n, entryPoint: s, savingRef: r, transitionState: u, onClose: d } = e,
        m = (0, o.Ay)(l, n),
        p = (0, a.bG)([c.Ay], () => c.Ay.getProject(l), [l]);
    return (i.useEffect(() => {
        (null == p || null == m) && d();
    }, [p, m, d]),
    null == p || null == m)
        ? null
        : (0, t.jsx)(er, { project: p, publish: m, entryPoint: s, savingRef: r, transitionState: u, onClose: d });
}
function er(e) {
    let { project: l, publish: n, entryPoint: o, savingRef: _, transitionState: T, onClose: L } = e,
        k = (function (e, l) {
            var n, t, s;
            let r,
                o,
                _,
                T,
                L,
                k,
                {
                    liveName: S,
                    liveDescription: q,
                    channels: D,
                    guild: G,
                    memberCount: U,
                } = ((n = e.id),
                (t = l.guildId),
                (r = (0, a.bG)([c.Ay], () => c.Ay.getProject(n) ?? null, [n])),
                (o = r?.application_id ?? null),
                (_ = (0, a.bG)([b.A], () => (null == o ? null : (b.A.getApplication(o) ?? null)), [o])),
                (T = (0, a.bG)([d.A], () => (null == t ? null : (d.A.getGuild(t) ?? null)), [t])),
                (L = (0, a.bG)([f.A], () => (null == t ? null : (f.A.getMemberCount(t) ?? null)), [t])),
                (k = (0, a.yK)(
                    [j.A],
                    () =>
                        null == t || null == o
                            ? []
                            : j.A.getChannels(t)
                                  [j.I].filter((e) => {
                                      let { channel: l } = e;
                                      return (0, A.us)(l) === o;
                                  })
                                  .map((e) => {
                                      let { channel: l } = e;
                                      return l;
                                  }),
                    [t, o],
                )),
                {
                    project: r,
                    liveName: _?.name ?? r?.name ?? "",
                    liveDescription: _?.description?.trim() ?? "",
                    channels: k,
                    guild: T,
                    memberCount: L,
                }),
                w = (0, p.A)(e.id),
                O = ((s = e.id), (0, a.bG)([N.A], () => N.A.getPublishStatus(s)?.previewDevicePermissions ?? C)),
                [M, z] = i.useState(e.name),
                [F, R] = i.useState(!1),
                B = null == l.status || !(0, v.lE)(l.status.publishState),
                Z = B && (0, c.PV)(e),
                H = (B ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                V = M.trim(),
                W = Z ? (0, h.p)(V) : null,
                Y = l.status?.previewAppChannels ?? [],
                K = 0 === Y.length && H.includes(x.q7.APP_CHANNEL) ? [E.intl.string(I.default.xI4N6Q)] : Y,
                [Q, X] = i.useState(!1),
                $ =
                    Z && K.length > 0 && "guild" === e.install_scope && e.guild_id === l.guildId
                        ? (e.guild_id ?? null)
                        : null,
                J = (0, a.bG)(
                    [d.A, m.A],
                    () => {
                        let e = null == $ ? null : d.A.getGuild($);
                        return (
                            null != e &&
                            m.A.can(y.xBc.MANAGE_CHANNELS, e) &&
                            (0, u.n0)(y.rbe.GUILD_APP, m.A.can(y.xBc.VIEW_CHANNEL, e), m.A.can(y.xBc.CONNECT, e))
                        );
                    },
                    [$],
                );
            return {
                initial: B,
                editable: Z,
                identity: w,
                name: M,
                setName: z,
                nameError: W,
                displayName: B ? e.name : S,
                description: B ? w.description : q,
                initialChannelNames: K,
                channels: D,
                appChannelsPrivate: J ? { isPrivate: Q, setPrivate: X } : null,
                components: P.filter((e) => {
                    let [l] = e;
                    return H.includes(l);
                }).map((e) => {
                    let [l, n] = e;
                    return { surface: l, label: E.intl.string(n) };
                }),
                devicePermissions: B ? O : [],
                note:
                    B && "guild" === e.install_scope && H.includes(x.q7.AUTOMOD)
                        ? E.intl.string(I.default.bljqPk)
                        : null,
                sharing:
                    null != G
                        ? {
                              guild: G,
                              caption: null != U ? E.intl.formatToPlainString(I.default.ZpZxK9, { count: U }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: E.intl.string(I.default.RUhWLH) }
                          : null,
                saving: F,
                save: async function () {
                    if (F || null != W) return !1;
                    R(!0);
                    try {
                        return (
                            Z && (V !== e.name || w.changed) && (await (0, g.CW)(e.id, { ...w.changes, name: V })), !0
                        );
                    } finally {
                        R(!1);
                    }
                },
            };
        })(l, n),
        [S, q] = i.useState(null);
    return (0, t.jsx)(s.a, {
        transitionState: T,
        onClose: L,
        dismissable: !k.saving,
        title: E.intl.string(I.default.NEPcoi),
        notice: null == S ? void 0 : { message: S, type: "critical", role: "alert" },
        preview: (0, t.jsx)("div", { className: ea.m, role: "presentation" }),
        actionBarInput: (0, t.jsx)("div", {
            className: ea.N,
            children:
                null != k.note
                    ? (0, t.jsx)(r.E, { variant: "body-sm/normal", color: "text-subtle", children: k.note })
                    : null,
        }),
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: L, disabled: k.saving },
            {
                text: n.label,
                variant: "primary",
                loading: k.saving,
                disabled: n.disabled || null != k.nameError,
                onClick: async function () {
                    (q(null), (_.current = !0));
                    try {
                        if (!(await k.save())) return;
                    } catch {
                        q(E.intl.string(I.default.Fi7boI));
                        return;
                    } finally {
                        _.current = !1;
                    }
                    (n.run(o, k.appChannelsPrivate?.isPrivate === !0), L());
                },
            },
        ],
        children: (0, t.jsx)(ee, { project: l, panel: k }),
    });
}
