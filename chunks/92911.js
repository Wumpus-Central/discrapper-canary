n.d(t, { A: () => Y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(812729),
    o = n.n(a),
    d = n(131346),
    c = n(744818),
    u = n(311907),
    m = n(276293),
    g = n(192308),
    h = n(834730),
    x = n(408278),
    _ = n(241326),
    p = n(534514),
    A = n(260598),
    E = n(404778),
    f = n(452027),
    j = n(442433),
    N = n(565645),
    I = n(964486),
    C = n(775602),
    b = n(47167),
    v = n(713654),
    S = n(508675),
    T = n(263063),
    y = n(714991),
    R = n(95035),
    L = n(225315),
    D = n(861410),
    O = n(734057),
    G = n(603349),
    M = n(954571),
    k = n(488926),
    U = n(997509),
    w = n(694012),
    P = n(652215),
    B = n(818348),
    F = n(650583),
    H = n(985018),
    V = n(288740);
let z = "WELCOME_CHANNEL",
    W = (e) => {
        let t,
            { guildId: s, welcomeChannel: a, onEdit: o, onChannelReorder: p, isDropHovered: A, index: E } = e,
            f = l.useRef(null),
            I = (0, u.bG)([O.A], () => O.A.getChannel(a.channel_id)),
            C = (0, u.bG)([S.Ay], () => (null != a.emoji_id ? S.Ay.getUsableCustomEmojiById(a.emoji_id) : null)),
            T = null != I && k.MJ(P.xBc.VIEW_CHANNEL, I),
            y = (0, v.gU)(I) ?? m.N,
            R = (0, b.Ay)(I, !1),
            L = () => {
                (0, g.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("40971").then(n.bind(n, 825894));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                onConfirm: () => {
                                    o(), t.onClose();
                                },
                                channelId: a.channel_id,
                            });
                    },
                    { onCloseRequest: () => B.FX },
                );
            },
            [, D] = (0, d.i)({
                type: z,
                item: { channel: a, index: E },
                end: (e, t) => {
                    null == e || t.didDrop() || p(e.channel, null, !0);
                },
            }),
            [, M] = (0, c.H)({
                accept: z,
                hover: (e) => {
                    p(e.channel, E, !1);
                },
                drop: (e) => {
                    p(e.channel, E, !0);
                },
            });
        return (
            l.useLayoutEffect(
                () => (
                    D(M(f)),
                    () => {
                        D(null), M(null);
                    }
                ),
                [D, M],
            ),
            (t = T
                ? null != C || null != a.emoji_name
                    ? (0, i.jsx)(N.A, {
                          emojiId: C?.id,
                          emojiName: null != C ? C.name : a.emoji_name,
                          animated: !!C?.animated,
                      })
                    : (0, i.jsx)(y, { size: "md", color: "currentColor", className: V.p })
                : (0, i.jsx)(G.A, { width: 24, height: 24, className: V.QW })),
            (0, i.jsxs)("div", {
                className: r()(V.w8, { [V.cB]: A }),
                ref: f,
                "data-dnd-name": a.description,
                onContextMenu: (e) => {
                    (0, j.L3)(e, async () => {
                        let { default: e } = await n.e("84913").then(n.bind(n, 36456));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: s,
                                welcomeChannel: a,
                                onChannelReorder: p,
                                onShowDeleteModal: L,
                                index: E,
                            });
                    });
                },
                children: [
                    t,
                    (0, i.jsxs)("div", {
                        className: V.X3,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: a.description,
                            }),
                            (0, i.jsxs)(h.E, {
                                className: T ? void 0 : V.op,
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: [
                                    (0, i.jsx)(y, { className: V.nO, size: "xxs", color: "currentColor" }),
                                    (0, i.jsx)("span", { children: T ? R : H.intl.string(H.t.zFuCsF) }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.K, {
                        variant: "icon-only",
                        icon: _.u,
                        "aria-label": H.intl.string(H.t.JYBc3K),
                        onClick: L,
                    }),
                ],
            })
        );
    },
    Y = (e) => {
        let { guild: t } = e,
            { welcomeSettings: s, originalWelcomeSettings: r } = (0, u.bG)([D.A], () => D.A.getSettingsProps()),
            a = (0, u.bG)([C.A], () => C.A.useReducedMotion),
            [d, c] = l.useState(null),
            [m, x] = l.useState(!1),
            [_, j] = l.useState(!1),
            { description: N, channels: b, enabled: v } = s,
            S = (e) => {
                null == t || o()(e, r.channels) || ((0, L.i4)(t.id, { channels: e }), x(!0));
            },
            O = (e) => {
                null == t || (e !== r.enabled && ((0, L.i4)(t.id, { enabled: e }), j(!a), x(!0)));
            },
            k = (e, t, n) => {
                if (null == b) return;
                let i = b.indexOf(e),
                    l = [...b];
                null != t && t !== i && (l.splice(i, 1), l.splice(t, 0, e), (0, L.Xx)({ channels: l })),
                    n ? (S(l), c(null)) : c(t);
            },
            B = l.useRef(!1);
        (0, I.Ay)(() => () => {
            B.current = !0;
        }),
            l.useEffect(
                () => () => {
                    if (B.current && m) {
                        let e = [],
                            n = [],
                            i = !1;
                        b?.forEach((t) => {
                            e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (i = !0);
                        }),
                            M.default.track(P.HAw.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: t?.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: N,
                                has_custom_emojis: i,
                                is_enabled: v,
                            });
                    }
                },
                [m, b, N, v, t],
            ),
            l.useEffect(() => () => (0, L.Vv)(), []);
        let z = l.useCallback(() => {
            null != t && U.A.open(t.id, P.BEX.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(p.D, { variant: "heading-lg/semibold", children: H.intl.string(H.t["2rkmDr"]) }),
                      (0, i.jsx)("div", {
                          className: V.lm,
                          children: (0, i.jsxs)(h.E, {
                              variant: "text-md/normal",
                              children: [
                                  (0, i.jsx)(G.A, { className: V.EP }),
                                  H.intl.format(H.t["oj2vi+"], {
                                      onboardingLink: (e) => (0, i.jsx)(R.A, { onClick: z, children: e }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsx)(h.E, { variant: "text-sm/normal", children: H.intl.string(H.t.w2d74x) }),
                      (0, i.jsx)(w.A, {
                          enabled: v,
                          onPreview:
                              b?.length === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, g.openModalLazy)(async () => {
                                                let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                                                return (n) => (0, i.jsx)(e, { ...n, guildId: t.id, isPreview: !0 });
                                            });
                                    },
                          onToggle:
                              v || b?.length !== 0
                                  ? () => {
                                        O(!v);
                                    }
                                  : void 0,
                          animateStatus: _,
                          firstLine: v ? H.intl.string(H.t.JbB7Ql) : H.intl.string(H.t["/bd0Qv"]),
                          secondLine: v ? H.intl.string(H.t.TA1g7z) : H.intl.string(H.t.nc6r1B),
                      }),
                      (0, i.jsxs)("div", {
                          className: V.i1,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: V.eB,
                                  children: [
                                      (0, i.jsx)(T.Ay, {
                                          size: T.Ay.Sizes.LARGER,
                                          className: V.Kk,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1,
                                      }),
                                      (0, i.jsx)(p.D, {
                                          className: V.re,
                                          variant: "heading-xl/semibold",
                                          children: H.intl.format(H.t["0aydCN"], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, i.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              (0, i.jsx)(y.A, {
                                                                  guild: t,
                                                                  className: V.eZ,
                                                                  flowerStarClassName: V.mP,
                                                              }),
                                                              (0, i.jsx)("strong", { children: e }),
                                                          ],
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: V.Wi,
                                          children: (0, i.jsx)(A.f, {
                                              placeholder: H.intl.string(H.t.qzZHaX),
                                              onChange: (e) => {
                                                  (0, L.Xx)({ description: e });
                                              },
                                              onBlur: () => {
                                                  null == t ||
                                                      (N !== r.description &&
                                                          ((0, L.i4)(t.id, { description: N?.trim() }), x(!0)));
                                              },
                                              onKeyDown: (e) => {
                                                  e.key === F.dh.ENTER && e.preventDefault();
                                              },
                                              value: N,
                                              maxLength: 140,
                                              disabled: !0,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(E.c, { className: V.yF }),
                              (0, i.jsx)("div", {
                                  className: V.f6,
                                  children: (0, i.jsx)(f.D, {
                                      label: H.intl.string(H.t.euJXzT),
                                      description: H.intl.string(H.t.VOnnnz),
                                      children: b?.map((e, n) =>
                                          (0, i.jsx)(
                                              W,
                                              {
                                                  guildId: t.id,
                                                  welcomeChannel: e,
                                                  onEdit: (e) => {
                                                      let t = [...(b ?? [])];
                                                      null == e ? t.splice(n, 1) : (t[n] = e),
                                                          (0, L.Xx)({ channels: t }),
                                                          S(t),
                                                          0 === t.length && v && ((0, L.Xx)({ enabled: !1 }), O(!1));
                                                  },
                                                  onChannelReorder: k,
                                                  isDropHovered: n === d,
                                                  index: n,
                                              },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    };
