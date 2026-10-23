t.d(l, { default: () => et });
var n = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(189213),
    r = t(834730),
    u = t(260498),
    c = t(893067),
    o = t(128761),
    d = t(961553),
    m = t(371169),
    x = t(951178),
    p = t(277085),
    h = t(811587),
    g = t(587895),
    v = t(808728),
    f = t(498642),
    b = t(71393),
    j = t(246338),
    N = t(722701);
let A = [];
var y = t(248675),
    C = t(105292);
let E = [
        [x.q7.BOT, y.default.UnoAgo],
        [x.q7.ACTIVITY, y.default["I88/iG"]],
        [x.q7.PROFILE_WIDGET, y.default.gXY1x1],
        [x.q7.AUTOMOD, y.default.Q9ruoM],
    ],
    P = { screen_capture: y.default["8/7kE7"], connect_user_to_voice: y.default.uvDWXa },
    I = { initial: y.default.NUZBwo, notPublished: y.default.Gdz7pg, published: y.default["6E9W4F"] };
var T = t(503698),
    _ = t.n(T),
    k = t(31300),
    S = t(983851),
    q = t(430392),
    w = t(794083),
    D = t(715641),
    G = t(231483),
    U = t(323384),
    z = t(939249),
    F = t(750943),
    L = t(858899),
    R = t(95477),
    M = t(103557),
    O = t(950305),
    Z = t(47167),
    W = t(548118),
    B = t(946274),
    H = t(535466),
    K = t(497183),
    V = t(536791);
let X = { screen_capture: k.k, connect_user_to_voice: S.H },
    Y = { [x.q7.BOT]: q.RobotIcon, [x.q7.ACTIVITY]: w.b, [x.q7.PROFILE_WIDGET]: D.b, [x.q7.AUTOMOD]: G.ShieldIcon };
function Q(e) {
    let { project: l, panel: t } = e,
        { initial: a, editable: s, identity: u, sharing: c } = t,
        o = i.useRef(null),
        d = [
            ...(a
                ? t.initialChannelNames.map((e) => (0, n.jsx)(J, { icon: U.k, label: e }, e))
                : t.channels.map((e) => (0, n.jsx)(ee, { channel: e }, e.id))),
            ...t.components.map((e) => {
                let { surface: l, label: t } = e;
                return (0, n.jsx)(J, { icon: Y[l], label: t }, l);
            }),
        ];
    return (0, n.jsxs)("div", {
        className: V.zH,
        children: [
            (0, n.jsxs)("div", {
                className: V.wx,
                children: [
                    s
                        ? null != u.iconURL
                            ? (0, n.jsxs)(z.D, {
                                  className: V.gb,
                                  "aria-label": C.intl.string(C.t["6yrpFR"]),
                                  onClick: () => o.current?.activateUploadDialogue(),
                                  children: [
                                      (0, n.jsx)("img", { className: V.Dp, src: u.iconURL, alt: "" }),
                                      (0, n.jsx)("span", {
                                          className: V.E7,
                                          "aria-hidden": !0,
                                          children: (0, n.jsx)(F.X, { size: "xs", color: "currentColor" }),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)(z.D, {
                                  className: _()(V.gb, V.YX),
                                  "aria-label": C.intl.string(C.t["MsUY/S"]),
                                  onClick: () => o.current?.activateUploadDialogue(),
                                  children: (0, n.jsx)(F.X, { size: "md", color: "currentColor" }),
                              })
                        : (0, n.jsx)(K.A, { project: l, size: "dialog" }),
                    s
                        ? (0, n.jsx)(B.Ay, {
                              ref: o,
                              className: V.Fg,
                              multiple: !1,
                              filters: [{ name: C.intl.string(C.t["Sp2NF+"]), extensions: H.En }],
                              maxFileSizeBytes: H.Q0,
                              onChange: u.setIcon,
                              onFileSizeError: () =>
                                  (0, L.P0)({ text: C.intl.string(y.default.ZTAAMc), variant: "critical" }),
                              "aria-hidden": !0,
                          })
                        : null,
                ],
            }),
            s
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsxs)("div", {
                              className: V.ZZ,
                              children: [
                                  (0, n.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: C.intl.string(y.default.knevPu),
                                  }),
                                  (0, n.jsx)(R.k, {
                                      label: C.intl.string(y.default.knevPu),
                                      hideLabel: !0,
                                      value: t.name,
                                      onChange: t.setName,
                                      error: t.nameError,
                                      maxLength: x.eq,
                                      disabled: t.saving,
                                      fullWidth: !0,
                                  }),
                              ],
                          }),
                          (0, n.jsxs)("div", {
                              className: V.ZZ,
                              children: [
                                  (0, n.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      "aria-hidden": !0,
                                      children: C.intl.string(y.default.ynaGa1),
                                  }),
                                  (0, n.jsx)(M.f, {
                                      label: C.intl.string(y.default.ynaGa1),
                                      hideLabel: !0,
                                      placeholder: C.intl.string(y.default["I+3UTL"]),
                                      value: u.description,
                                      onChange: u.setDescription,
                                      maxLength: x.HR,
                                      disabled: t.saving,
                                      rows: 4,
                                      maxRows: 6,
                                      autosize: !0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, n.jsxs)("div", {
                      className: V.ZZ,
                      children: [
                          (0, n.jsx)(r.E, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              children: t.displayName,
                          }),
                          "" !== t.description
                              ? (0, n.jsx)(r.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    lineClamp: 2,
                                    children: t.description,
                                })
                              : null,
                      ],
                  }),
            (0, n.jsx)($, { title: C.intl.string(y.default.BqNMms), rows: d }),
            (0, n.jsx)($, {
                title: C.intl.string(y.default.LnqeFd),
                rows: t.devicePermissions.map((e) => (0, n.jsx)(J, { icon: X[e], label: C.intl.string(P[e]) }, e)),
            }),
            null != c
                ? (0, n.jsxs)("section", {
                      className: V.KO,
                      children: [
                          (0, n.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: C.intl.string(y.default.esTM8y),
                          }),
                          (0, n.jsxs)("div", {
                              className: V.Kk,
                              children: [
                                  null != c.guild
                                      ? (0, n.jsx)(W.Ay, {
                                            guild: c.guild,
                                            size: W.Ay.Sizes.MEDIUM,
                                            active: !0,
                                            className: V.$f,
                                            "aria-hidden": !0,
                                        })
                                      : (0, n.jsx)("span", {
                                            className: V.qU,
                                            children: (0, n.jsx)(O.UserIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                  (0, n.jsxs)("div", {
                                      className: V.qg,
                                      children: [
                                          (0, n.jsx)(r.E, {
                                              variant: "text-sm/medium",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: c.guild?.name ?? C.intl.string(y.default["37xgkF"]),
                                          }),
                                          null != c.caption
                                              ? (0, n.jsx)(r.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-subtle",
                                                    children: c.caption,
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
function $(e) {
    let { title: l, rows: t } = e;
    return 0 === t.length
        ? null
        : (0, n.jsxs)("section", {
              className: V.mK,
              children: [
                  (0, n.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: l }),
                  (0, n.jsx)("div", { children: t }),
              ],
          });
}
function J(e) {
    let { icon: l, label: t } = e;
    return (0, n.jsxs)("div", {
        className: V.CT,
        children: [
            (0, n.jsx)(l, { size: "xs", color: "currentColor", className: V.Pw, "aria-hidden": !0 }),
            (0, n.jsx)(r.E, { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: t }),
        ],
    });
}
function ee(e) {
    let { channel: l } = e;
    return (0, n.jsx)(J, { icon: U.k, label: (0, Z.Ay)(l) ?? "" });
}
var el = t(787032);
function et(e) {
    let { projectId: l, publishOptions: t, entryPoint: s, savingRef: r, transitionState: o, onClose: d } = e,
        m = (0, c.Ay)(l, t),
        x = (0, a.bG)([u.Ay], () => u.Ay.getProject(l), [l]);
    return (i.useEffect(() => {
        (null == x || null == m) && d();
    }, [x, m, d]),
    null == x || null == m)
        ? null
        : (0, n.jsx)(en, { project: x, publish: m, entryPoint: s, savingRef: r, transitionState: o, onClose: d });
}
function en(e) {
    let { project: l, publish: t, entryPoint: c, savingRef: P, transitionState: T, onClose: _ } = e,
        k = (function (e, l) {
            var t, n, s, r;
            let c,
                P,
                T,
                _,
                k,
                S,
                {
                    liveName: q,
                    liveDescription: w,
                    channels: D,
                    guild: G,
                    memberCount: U,
                } = ((t = e.id),
                (n = l.guildId),
                (c = (0, a.bG)([u.Ay], () => u.Ay.getProject(t) ?? null, [t])),
                (P = c?.application_id ?? null),
                (T = (0, a.bG)([g.A], () => (null == P ? null : (g.A.getApplication(P) ?? null)), [P])),
                (_ = (0, a.bG)([b.A], () => (null == n ? null : (b.A.getGuild(n) ?? null)), [n])),
                (k = (0, a.bG)([f.A], () => (null == n ? null : (f.A.getMemberCount(n) ?? null)), [n])),
                (S = (0, a.yK)(
                    [v.Ay],
                    () =>
                        null == n || null == P
                            ? []
                            : v.Ay.getChannels(n)
                                  [v.I6].filter((e) => {
                                      let { channel: l } = e;
                                      return (0, j.us)(l) === P;
                                  })
                                  .map((e) => {
                                      let { channel: l } = e;
                                      return l;
                                  }),
                    [n, P],
                )),
                {
                    project: c,
                    liveName: T?.name ?? c?.name ?? "",
                    liveDescription: T?.description?.trim() ?? "",
                    channels: S,
                    guild: _,
                    memberCount: k,
                }),
                z = (0, d.A)(e.id),
                F = ((s = e.id), (0, a.bG)([N.A], () => N.A.getPublishStatus(s)?.previewDevicePermissions ?? A)),
                [L, R] = i.useState(e.name),
                [M, O] = i.useState(!1),
                Z =
                    null != (r = l.status) && (0, h.lE)(r.publishState)
                        ? "live_outdated" === r.publishState
                            ? "notPublished"
                            : "published"
                        : "initial",
                W = "initial" === Z,
                B = W && (0, u.PV)(e),
                H = (W ? e.preview_supported_surfaces : e.supported_surfaces) ?? [],
                K = L.trim(),
                V = B ? (0, p.p)(K) : null,
                X = l.status?.previewAppChannels ?? [],
                Y = l.status?.publishedAt,
                Q = null == Y ? null : (0, o.lG)(Y).relative;
            async function $() {
                if (M || null != V) return !1;
                O(!0);
                try {
                    return (B && (K !== e.name || z.changed) && (await (0, m.CW)(e.id, { ...z.changes, name: K })), !0);
                } finally {
                    O(!1);
                }
            }
            return {
                mode: Z,
                initial: W,
                editable: B,
                identity: z,
                name: L,
                setName: R,
                nameError: V,
                displayName: W ? e.name : q,
                description: W ? z.description : w,
                initialChannelNames:
                    0 === X.length && H.includes(x.q7.APP_CHANNEL) ? [C.intl.string(y.default.xI4N6Q)] : X,
                channels: D,
                components: E.filter((e) => {
                    let [l] = e;
                    return H.includes(l);
                }).map((e) => {
                    let [l, t] = e;
                    return { surface: l, label: C.intl.string(t) };
                }),
                devicePermissions: W ? F : [],
                sharing:
                    null != G
                        ? {
                              guild: G,
                              caption: null != U ? C.intl.formatToPlainString(y.default.ZpZxK9, { count: U }) : null,
                          }
                        : "user" === e.install_scope
                          ? { guild: null, caption: C.intl.string(y.default.RUhWLH) }
                          : null,
                statusText: C.intl.string(I[Z]),
                lastPublishedText: null == Q ? null : C.intl.formatToPlainString(y.default["/6YRCf"], { time: Q }),
                ctaText: W ? l.label : C.intl.string(y.default.KHg4Dk),
                ctaVariant: "published" === Z ? "secondary" : "primary",
                saving: M,
                save: $,
            };
        })(l, t),
        [S, q] = i.useState(null);
    async function w() {
        (q(null), (P.current = !0));
        try {
            if (!(await k.save())) return;
        } catch {
            q(C.intl.string(y.default.Fi7boI));
            return;
        } finally {
            P.current = !1;
        }
        (t.run(c), _());
    }
    return (0, n.jsx)(s.a, {
        transitionState: T,
        onClose: _,
        dismissable: !k.saving,
        title: C.intl.string(y.default.NEPcoi),
        notice: null == S ? void 0 : { message: S, type: "critical", role: "alert" },
        preview: (0, n.jsx)("div", { className: el.m, role: "presentation" }),
        actionBarInput: (0, n.jsx)("div", {
            className: el.N,
            children: (0, n.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: C.intl.string(y.default["+VqXVO"]),
            }),
        }),
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: _, disabled: k.saving },
            {
                text: t.label,
                variant: "primary",
                loading: k.saving,
                disabled: t.disabled || null != k.nameError,
                onClick: w,
            },
        ],
        children: (0, n.jsx)(Q, { project: l, panel: k }),
    });
}
