"use strict";
n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(812729),
    o = n.n(a),
    d = n(131346),
    c = n(522437),
    u = n(311907),
    m = n(397927),
    g = n(442433),
    x = n(565645),
    h = n(964486),
    _ = n(775602),
    p = n(47167),
    A = n(713654),
    f = n(508675),
    j = n(263063),
    N = n(714991),
    E = n(95035),
    b = n(447696),
    T = n(861410),
    C = n(734057),
    I = n(603349),
    v = n(954571),
    S = n(488926),
    y = n(997509),
    R = n(694012),
    O = n(652215),
    G = n(818348),
    L = n(650583),
    D = n(985018),
    M = n(514369);
let k = "WELCOME_CHANNEL",
    U = (e) => {
        let t,
            { guildId: l, welcomeChannel: a, onEdit: o, onChannelReorder: h, isDropHovered: _, index: j } = e,
            N = s.useRef(null),
            E = (0, u.bG)([C.A], () => C.A.getChannel(a.channel_id)),
            b = (0, u.bG)([f.Ay], () => (null != a.emoji_id ? f.Ay.getUsableCustomEmojiById(a.emoji_id) : null)),
            T = null != E && S.MJ(O.xBc.VIEW_CHANNEL, E),
            v = (0, A.gU)(E) ?? m.N$i,
            y = (0, p.Ay)(E, !1),
            R = () => {
                (0, m.mMO)(
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
                    { onCloseRequest: () => G.FX },
                );
            },
            [, L] = (0, d.i)({
                type: k,
                item: { channel: a, index: j },
                end: (e, t) => {
                    null == e || t.didDrop() || h(e.channel, null, !0);
                },
            }),
            [, U] = (0, c.H)({
                accept: k,
                hover: (e) => {
                    h(e.channel, j, !1);
                },
                drop: (e) => {
                    h(e.channel, j, !0);
                },
            });
        return (
            s.useLayoutEffect(
                () => (
                    L(U(N)),
                    () => {
                        L(null), U(null);
                    }
                ),
                [L, U],
            ),
            (t = T
                ? null != b || null != a.emoji_name
                    ? (0, i.jsx)(x.A, {
                          emojiId: b?.id,
                          emojiName: null != b ? b.name : a.emoji_name,
                          animated: !!b?.animated,
                      })
                    : (0, i.jsx)(v, { size: "md", color: "currentColor", className: M.p })
                : (0, i.jsx)(I.A, { width: 24, height: 24, className: M.QW })),
            (0, i.jsxs)("div", {
                className: r()(M.w8, { [M.cB]: _ }),
                ref: N,
                "data-dnd-name": a.description,
                onContextMenu: (e) => {
                    (0, g.L3)(e, async () => {
                        let { default: e } = await n.e("84913").then(n.bind(n, 36456));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: l,
                                welcomeChannel: a,
                                onChannelReorder: h,
                                onShowDeleteModal: R,
                                index: j,
                            });
                    });
                },
                children: [
                    t,
                    (0, i.jsxs)("div", {
                        className: M.X3,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: a.description,
                            }),
                            (0, i.jsxs)(m.Text, {
                                className: T ? void 0 : M.op,
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: [
                                    (0, i.jsx)(v, { className: M.nO, size: "xxs", color: "currentColor" }),
                                    (0, i.jsx)("span", { children: T ? y : D.intl.string(D.t.zFuCsF) }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(m.K0, {
                        variant: "icon-only",
                        icon: m.ucK,
                        "aria-label": D.intl.string(D.t.JYBc3K),
                        onClick: R,
                    }),
                ],
            })
        );
    },
    P = (e) => {
        let { guild: t } = e,
            { welcomeSettings: l, originalWelcomeSettings: r } = (0, u.bG)([T.A], () => T.A.getSettingsProps()),
            a = (0, u.bG)([_.A], () => _.A.useReducedMotion),
            [d, c] = s.useState(null),
            [g, x] = s.useState(!1),
            [p, A] = s.useState(!1),
            { description: f, channels: C, enabled: S } = l,
            G = (e) => {
                null == t || o()(e, r.channels) || ((0, b.i4)(t.id, { channels: e }), x(!0));
            },
            k = (e) => {
                null == t || (e !== r.enabled && ((0, b.i4)(t.id, { enabled: e }), A(!a), x(!0)));
            },
            P = (e, t, n) => {
                if (null == C) return;
                let i = C.indexOf(e),
                    s = [...C];
                null != t && t !== i && (s.splice(i, 1), s.splice(t, 0, e), (0, b.Xx)({ channels: s })),
                    n ? (G(s), c(null)) : c(t);
            },
            w = s.useRef(!1);
        (0, h.Ay)(() => () => {
            w.current = !0;
        }),
            s.useEffect(
                () => () => {
                    if (w.current && g) {
                        let e = [],
                            n = [],
                            i = !1;
                        C?.forEach((t) => {
                            e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (i = !0);
                        }),
                            v.default.track(O.HAw.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: t?.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: f,
                                has_custom_emojis: i,
                                is_enabled: S,
                            });
                    }
                },
                [g, C, f, S, t],
            ),
            s.useEffect(() => () => (0, b.Vv)(), []);
        let B = s.useCallback(() => {
            null != t && y.A.open(t.id, O.BEX.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(m.Heading, { variant: "heading-lg/semibold", children: D.intl.string(D.t["2rkmDr"]) }),
                      (0, i.jsx)("div", {
                          className: M.lm,
                          children: (0, i.jsxs)(m.Text, {
                              variant: "text-md/normal",
                              children: [
                                  (0, i.jsx)(I.A, { className: M.EP }),
                                  D.intl.format(D.t["oj2vi+"], {
                                      onboardingLink: (e) => (0, i.jsx)(E.A, { onClick: B, children: e }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsx)(m.Text, { variant: "text-sm/normal", children: D.intl.string(D.t.w2d74x) }),
                      (0, i.jsx)(R.A, {
                          enabled: S,
                          onPreview:
                              C?.length === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, m.mMO)(async () => {
                                                let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                                                return (n) => (0, i.jsx)(e, { ...n, guildId: t.id, isPreview: !0 });
                                            });
                                    },
                          onToggle:
                              S || C?.length !== 0
                                  ? () => {
                                        k(!S);
                                    }
                                  : void 0,
                          animateStatus: p,
                          firstLine: S ? D.intl.string(D.t.JbB7Ql) : D.intl.string(D.t["/bd0Qv"]),
                          secondLine: S ? D.intl.string(D.t.TA1g7z) : D.intl.string(D.t.nc6r1B),
                      }),
                      (0, i.jsxs)("div", {
                          className: M.i1,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: M.eB,
                                  children: [
                                      (0, i.jsx)(j.Ay, {
                                          size: j.Ay.Sizes.LARGER,
                                          className: M.Kk,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1,
                                      }),
                                      (0, i.jsx)(m.Heading, {
                                          className: M.re,
                                          variant: "heading-xl/semibold",
                                          children: D.intl.format(D.t["0aydCN"], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, i.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              (0, i.jsx)(N.A, {
                                                                  guild: t,
                                                                  className: M.eZ,
                                                                  flowerStarClassName: M.mP,
                                                              }),
                                                              (0, i.jsx)("strong", { children: e }),
                                                          ],
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: M.Wi,
                                          children: (0, i.jsx)(m.fs1, {
                                              placeholder: D.intl.string(D.t.qzZHaX),
                                              onChange: (e) => {
                                                  (0, b.Xx)({ description: e });
                                              },
                                              onBlur: () => {
                                                  null == t ||
                                                      (f !== r.description &&
                                                          ((0, b.i4)(t.id, { description: f?.trim() }), x(!0)));
                                              },
                                              onKeyDown: (e) => {
                                                  e.key === L.dh.ENTER && e.preventDefault();
                                              },
                                              value: f,
                                              maxLength: 140,
                                              disabled: !0,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(m.cGx, { className: M.yF }),
                              (0, i.jsx)("div", {
                                  className: M.f6,
                                  children: (0, i.jsx)(m.D0$, {
                                      label: D.intl.string(D.t.euJXzT),
                                      description: D.intl.string(D.t.VOnnnz),
                                      children: C?.map((e, n) =>
                                          (0, i.jsx)(
                                              U,
                                              {
                                                  guildId: t.id,
                                                  welcomeChannel: e,
                                                  onEdit: (e) => {
                                                      let t = [...(C ?? [])];
                                                      null == e ? t.splice(n, 1) : (t[n] = e),
                                                          (0, b.Xx)({ channels: t }),
                                                          G(t),
                                                          0 === t.length && S && ((0, b.Xx)({ enabled: !1 }), k(!1));
                                                  },
                                                  onChannelReorder: P,
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
