n.d(t, {
    A: () => F,
}),
    n(896048),
    n(228524),
    n(733351),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(812729),
    c = n.n(a),
    o = n(131346),
    d = n(744818),
    u = n(311907),
    f = n(397927),
    g = n(442433),
    b = n(565645),
    m = n(964486),
    p = n(775602),
    x = n(47167),
    h = n(713654),
    j = n(508675),
    O = n(263063),
    y = n(714991),
    v = n(95035),
    A = n(447696),
    E = n(861410),
    N = n(734057),
    _ = n(603349),
    S = n(954571),
    T = n(488926),
    I = n(997509),
    C = n(694012),
    P = n(652215),
    w = n(818348),
    R = n(650583),
    D = n(985018),
    G = n(134599);

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = "WELCOME_CHANNEL",
    U = (e) => {
        var t;
        let l,
            { guildId: a, welcomeChannel: c, onEdit: m, onChannelReorder: p, isDropHovered: O, index: y } = e,
            v = i.useRef(null),
            A = (0, u.bG)([N.A], () => N.A.getChannel(c.channel_id)),
            E = (0, u.bG)([j.Ay], () => (null != c.emoji_id ? j.Ay.getUsableCustomEmojiById(c.emoji_id) : null)),
            S = null != A && T.MJ(P.xBc.VIEW_CHANNEL, A),
            I = null != (t = (0, h.gU)(A)) ? t : f.N$i,
            C = (0, x.Ay)(A, !1),
            R = () => {
                (0, f.mMO)(
                    async () => {
                        let { default: e } = await n.e("40971").then(n.bind(n, 825894));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                k(L({}, t), {
                                    onConfirm: () => {
                                        m(), t.onClose();
                                    },
                                    channelId: c.channel_id,
                                }),
                            );
                    },
                    {
                        onCloseRequest: () => w.FX,
                    },
                );
            },
            [, U] = (0, o.i)({
                type: M,
                item: {
                    channel: c,
                    index: y,
                },
                end: (e, t) => {
                    null == e || t.didDrop() || p(e.channel, null, !0);
                },
            }),
            [, F] = (0, d.H)({
                accept: M,
                hover: (e) => {
                    p(e.channel, y, !1);
                },
                drop: (e) => {
                    p(e.channel, y, !0);
                },
            });
        return (
            i.useLayoutEffect(
                () => (
                    U(F(v)),
                    () => {
                        U(null), F(null);
                    }
                ),
                [U, F],
            ),
            (l = S
                ? null != E || null != c.emoji_name
                    ? (0, r.jsx)(b.A, {
                          emojiId: null == E ? void 0 : E.id,
                          emojiName: null != E ? E.name : c.emoji_name,
                          animated: !!(null == E ? void 0 : E.animated),
                      })
                    : (0, r.jsx)(I, {
                          size: "md",
                          color: "currentColor",
                          className: G.p,
                      })
                : (0, r.jsx)(_.A, {
                      width: 24,
                      height: 24,
                      className: G.QW,
                  })),
            (0, r.jsxs)("div", {
                className: s()(G.w8, {
                    [G.cB]: O,
                }),
                ref: v,
                "data-dnd-name": c.description,
                onContextMenu: (e) => {
                    (0, g.L3)(e, async () => {
                        let { default: e } = await n.e("84913").then(n.bind(n, 36456));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                k(L({}, t), {
                                    guildId: a,
                                    welcomeChannel: c,
                                    onChannelReorder: p,
                                    onShowDeleteModal: R,
                                    index: y,
                                }),
                            );
                    });
                },
                children: [
                    l,
                    (0, r.jsxs)("div", {
                        className: G.X3,
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: c.description,
                            }),
                            (0, r.jsxs)(f.Text, {
                                className: S ? void 0 : G.op,
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: [
                                    (0, r.jsx)(I, {
                                        className: G.nO,
                                        size: "xxs",
                                        color: "currentColor",
                                    }),
                                    (0, r.jsx)("span", {
                                        children: S ? C : D.intl.string(D.t.zFuCsF),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.K0, {
                        variant: "icon-only",
                        icon: f.ucK,
                        "aria-label": D.intl.string(D.t.JYBc3K),
                        onClick: R,
                    }),
                ],
            })
        );
    },
    F = (e) => {
        let { guild: t } = e,
            { welcomeSettings: l, originalWelcomeSettings: s } = (0, u.bG)([E.A], () => E.A.getSettingsProps()),
            a = (0, u.bG)([p.A], () => p.A.useReducedMotion),
            [o, d] = i.useState(null),
            [g, b] = i.useState(!1),
            [x, h] = i.useState(!1),
            { description: j, channels: N, enabled: T } = l,
            w = (e) => {
                null == t ||
                    c()(e, s.channels) ||
                    ((0, A.i4)(t.id, {
                        channels: e,
                    }),
                    b(!0));
            },
            M = (e) => {
                null == t ||
                    (e !== s.enabled &&
                        ((0, A.i4)(t.id, {
                            enabled: e,
                        }),
                        h(!a),
                        b(!0)));
            },
            F = (e, t, n) => {
                if (null == N) return;
                let r = N.indexOf(e),
                    i = [...N];
                null != t &&
                    t !== r &&
                    (i.splice(r, 1),
                    i.splice(t, 0, e),
                    (0, A.Xx)({
                        channels: i,
                    })),
                    n ? (w(i), d(null)) : d(t);
            },
            B = i.useRef(!1);
        (0, m.Ay)(() => () => {
            B.current = !0;
        }),
            i.useEffect(
                () => () => {
                    if (B.current && g) {
                        let e = [],
                            n = [],
                            r = !1;
                        null == N ||
                            N.forEach((t) => {
                                e.push(t.description), n.push(t.channel_id), null != t.emoji_id && (r = !0);
                            }),
                            S.default.track(P.HAw.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                                guild_id: null == t ? void 0 : t.id,
                                options: e,
                                options_channel_ids: n,
                                guild_description: j,
                                has_custom_emojis: r,
                                is_enabled: T,
                            });
                    }
                },
                [g, N, j, T, t],
            ),
            i.useEffect(() => () => (0, A.Vv)(), []);
        let H = i.useCallback(() => {
            null != t && I.A.open(t.id, P.BEX.ONBOARDING);
        }, [t]);
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-lg/semibold",
                          children: D.intl.string(D.t["2rkmDr"]),
                      }),
                      (0, r.jsx)("div", {
                          className: G.lm,
                          children: (0, r.jsxs)(f.Text, {
                              variant: "text-md/normal",
                              children: [
                                  (0, r.jsx)(_.A, {
                                      className: G.EP,
                                  }),
                                  D.intl.format(D.t["oj2vi+"], {
                                      onboardingLink: (e) =>
                                          (0, r.jsx)(v.A, {
                                              onClick: H,
                                              children: e,
                                          }),
                                  }),
                              ],
                          }),
                      }),
                      (0, r.jsx)(f.Text, {
                          variant: "text-sm/normal",
                          children: D.intl.string(D.t.w2d74x),
                      }),
                      (0, r.jsx)(C.A, {
                          enabled: T,
                          onPreview:
                              (null == N ? void 0 : N.length) === 0
                                  ? void 0
                                  : () => {
                                        null != t &&
                                            (0, f.mMO)(async () => {
                                                let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                                                return (n) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        k(L({}, n), {
                                                            guildId: t.id,
                                                            isPreview: !0,
                                                        }),
                                                    );
                                            });
                                    },
                          onToggle:
                              T || (null == N ? void 0 : N.length) !== 0
                                  ? () => {
                                        M(!T);
                                    }
                                  : void 0,
                          animateStatus: x,
                          firstLine: T ? D.intl.string(D.t.JbB7Ql) : D.intl.string(D.t["/bd0Qv"]),
                          secondLine: T ? D.intl.string(D.t.TA1g7z) : D.intl.string(D.t.nc6r1B),
                      }),
                      (0, r.jsxs)("div", {
                          className: G.i1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: G.eB,
                                  children: [
                                      (0, r.jsx)(O.A, {
                                          size: O.A.Sizes.LARGER,
                                          className: G.Kk,
                                          guild: t,
                                          animate: !0,
                                          tabIndex: -1,
                                      }),
                                      (0, r.jsx)(f.Heading, {
                                          className: G.re,
                                          variant: "heading-xl/semibold",
                                          children: D.intl.format(D.t["0aydCN"], {
                                              guildName: t.name,
                                              guildNameHook: (e, n) =>
                                                  (0, r.jsxs)(
                                                      "span",
                                                      {
                                                          children: [
                                                              (0, r.jsx)(y.A, {
                                                                  guild: t,
                                                                  className: G.eZ,
                                                                  flowerStarClassName: G.mP,
                                                              }),
                                                              (0, r.jsx)("strong", {
                                                                  children: e,
                                                              }),
                                                          ],
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: G.Wi,
                                          children: (0, r.jsx)(f.fs1, {
                                              placeholder: D.intl.string(D.t.qzZHaX),
                                              onChange: (e) => {
                                                  (0, A.Xx)({
                                                      description: e,
                                                  });
                                              },
                                              onBlur: () => {
                                                  null == t ||
                                                      (j !== s.description &&
                                                          ((0, A.i4)(t.id, {
                                                              description: null == j ? void 0 : j.trim(),
                                                          }),
                                                          b(!0)));
                                              },
                                              onKeyDown: (e) => {
                                                  e.key === R.dh.ENTER && e.preventDefault();
                                              },
                                              value: j,
                                              maxLength: 140,
                                              disabled: !0,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(f.cGx, {
                                  className: G.yF,
                              }),
                              (0, r.jsx)("div", {
                                  className: G.f6,
                                  children: (0, r.jsx)(f.D0$, {
                                      label: D.intl.string(D.t.euJXzT),
                                      description: D.intl.string(D.t.VOnnnz),
                                      children:
                                          null == N
                                              ? void 0
                                              : N.map((e, n) =>
                                                    (0, r.jsx)(
                                                        U,
                                                        {
                                                            guildId: t.id,
                                                            welcomeChannel: e,
                                                            onEdit: (e) => {
                                                                let t = [...(null != N ? N : [])];
                                                                null == e ? t.splice(n, 1) : (t[n] = e),
                                                                    (0, A.Xx)({
                                                                        channels: t,
                                                                    }),
                                                                    w(t),
                                                                    0 === t.length &&
                                                                        T &&
                                                                        ((0, A.Xx)({
                                                                            enabled: !1,
                                                                        }),
                                                                        M(!1));
                                                            },
                                                            onChannelReorder: F,
                                                            isDropHovered: n === o,
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
