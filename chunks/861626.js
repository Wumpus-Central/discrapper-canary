"use strict";
n.d(t, { G7: () => en, iP: () => el, sX: () => ei, mG: () => es, MV: () => et });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(110259),
    o = n(17928),
    c = n(305866),
    u = n(3026),
    d = n(990078),
    h = n(862482),
    m = n(834730),
    p = n(939249),
    f = n(534514),
    g = n(821609),
    _ = n(847374),
    x = n(686956),
    C = n(565645),
    A = n(793574),
    E = n(688810),
    I = n(139286),
    v = n(235986),
    y = n(573435),
    b = n(836039),
    S = n(702841),
    N = n(71393),
    j = n(159273),
    T = n(770335),
    w = n(624793),
    R = n(652215),
    L = n(731383),
    k = n(548118),
    M = n(714991),
    O = n(492494),
    P = n(384684),
    D = n(985242),
    U = n(87719),
    V = n(725807),
    G = n(976860),
    F = n(309010),
    B = n(967198),
    H = n(287809),
    W = n(954571),
    K = n(486020),
    z = n(449054),
    Z = n(927578),
    q = n(450707),
    J = n(773669),
    Y = n(985018),
    X = n(34337),
    $ = n(746080),
    Q = n(788868),
    ee = n(979132);
let et = (e) => {
        var t, n;
        let i,
            s,
            { node: a } = e;
        (0, L.i)({ emojiId: a.emojiId, currentGuildId: B.A.getGuildId() });
        let r =
                ((n = t = a.name),
                (i = (0, o.bG)([J.default], () => J.default.locale.startsWith("en-"))),
                (s = ":pizza:" === n && i ? Y.intl.formatToPlainString(Y.t["1knDPI"], { emojiName: n }) : n),
                ":pizza:" === t ? s : t),
            d = r !== a.name;
        return (0, l.jsx)(c.l, {
            children: (0, l.jsx)(X.Uq, {
                children: (0, l.jsxs)(v.A, {
                    className: ee.gH,
                    children: [
                        (0, l.jsx)(C.A, {
                            emojiName: a.name,
                            className: ee.P$,
                            src: a.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, l.jsxs)(v.A, {
                            direction: v.A.Direction.VERTICAL,
                            justify: v.A.Justify.CENTER,
                            className: ee.bM,
                            children: [
                                (0, l.jsx)(m.E, {
                                    className: ee.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: d
                                        ? (0, l.jsx)("div", { className: ee.Gl, children: r })
                                        : (0, l.jsx)(u.A, { children: r }),
                                }),
                                (0, l.jsx)(m.E, { variant: "text-sm/normal", children: Y.intl.string(Y.t.sXdH8c) }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    en = (e) => {
        let t,
            { expressionSourceGuild: n, hasJoinedExpressionSourceGuild: i, isDisplayingJoinGuildButtonInPopout: s } = e,
            { id: r, icon: o, name: c } = n,
            d = K.Ay.getGuildIconURL({ id: r, icon: o, size: 32, canAnimate: !0 }),
            h = (i = i ?? !0) || n.isDiscoverable(),
            g = () => {
                n.isDiscoverable() ? (0, z.Z2)(r, {}) : i && (0, G.pX)(R.BVt.CHANNEL(r, F.A.getChannelId(r)));
            },
            _ = n.isDiscoverable() && null != n.presenceCount;
        return (0, l.jsxs)(v.A, {
            align: v.A.Align.CENTER,
            children: [
                (0, l.jsx)(y.Ay, {
                    mask: y.Ay.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: ee.__invalid_guildIconContainer,
                    children:
                        null != d && h
                            ? (0, l.jsxs)(p.D, {
                                  "aria-label": c,
                                  onClick: g,
                                  children: [(0, l.jsx)("img", { src: d, alt: "", className: ee.$f }), " :"],
                              })
                            : (0, l.jsx)(k.Ay, { size: k.Ay.Sizes.SMALL, className: ee.oi, guild: n }),
                }),
                (0, l.jsxs)(v.A, {
                    direction: v.A.Direction.VERTICAL,
                    className: a()(ee.__invalid_guildInformation, ee.bM),
                    children: [
                        (0, l.jsxs)(v.A, {
                            align: v.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(M.A, { guild: n, className: ee.n2 }),
                                h
                                    ? (0, l.jsx)(p.D, {
                                          onClick: g,
                                          className: ee.bM,
                                          children: (0, l.jsx)(f.D, {
                                              className: ee.J5,
                                              variant: "heading-md/semibold",
                                              children: (0, l.jsx)(u.A, { children: c }),
                                          }),
                                      })
                                    : (0, l.jsx)(f.D, {
                                          variant: "heading-md/semibold",
                                          children: (0, l.jsx)(u.A, { children: c }),
                                      }),
                            ],
                        }),
                        (0, l.jsx)(v.A, {
                            align: v.A.Align.CENTER,
                            children: _
                                ? ((t = !s && !i),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              children: Y.intl.format(Y.t["LC+S+m"], {
                                                  membersOnline: n.presenceCount,
                                              }),
                                          }),
                                          (0, l.jsx)("div", { className: ee.zk }),
                                          t
                                              ? (0, l.jsx)(p.D, {
                                                    className: ee.Ki,
                                                    onClick: g,
                                                    children: (0, l.jsx)(m.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-link",
                                                        children: Y.intl.string(Y.t.riu2R5),
                                                    }),
                                                })
                                              : (0, l.jsx)(m.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: Y.intl.string(Y.t.inyJqO),
                                                }),
                                      ],
                                  }))
                                : (0, l.jsx)(m.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: Y.intl.string(Y.t.H29mx4),
                                  }),
                        }),
                    ],
                }),
            ],
        });
    },
    el = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: s, nonce: a } = e,
            {
                expressionSourceGuild: r,
                expressionSourceApplication: o,
                sourceType: u,
                joinedEmojiSourceGuildRecord: d,
                emoji: h,
                isFetching: m,
            } = ((e) => {
                let { emojiId: t, refreshPositionKey: n } = e,
                    { joinedEmojiSourceGuildRecord: l, emoji: s } = (0, S.cf)([j.Ay, N.A], () => {
                        var e, n;
                        let l;
                        return (
                            (e = j.Ay),
                            (n = N.A),
                            (l = null != t ? e.getCustomEmojiById(t) : null),
                            l?.type === T.i.GUILD
                                ? { emoji: l, joinedEmojiSourceGuildRecord: n.getGuild(l?.guildId) }
                                : { emoji: null, joinedEmojiSourceGuildRecord: null }
                        );
                    }),
                    a = null != l,
                    r = null != l && l.features.has(R.GuildFeatures.DISCOVERABLE),
                    o = (!a || r) && null != t,
                    [c, u] = i.useState(o),
                    [d, h] = i.useState(null),
                    m = null != l ? w.GO.createFromGuildRecord(l) : null,
                    [p, f] = i.useState(m),
                    [g, _] = i.useState(null),
                    x = i.useRef(n);
                return (
                    i.useEffect(() => {
                        x.current = n;
                    }),
                    i.useEffect(() => {
                        x.current?.();
                        let e = async () => {
                            let e = null != t ? await (0, w.g_)(t) : null;
                            if (null != e)
                                switch ((h(e.type), e.type)) {
                                    case w.rV.APPLICATION:
                                        _(e.application);
                                        break;
                                    case w.rV.GUILD:
                                        f(e.guild);
                                }
                            u(!1), x.current?.();
                        };
                        o ? e() : x.current?.();
                    }, [t, o]),
                    {
                        expressionSourceGuild: p,
                        expressionSourceApplication: g,
                        sourceType: d,
                        joinedEmojiSourceGuildRecord: l,
                        hasJoinedEmojiSourceGuild: a,
                        emoji: s,
                        isFetching: c,
                    }
                );
            })({ emojiId: t.emojiId, refreshPositionKey: s });
        return m
            ? (0, l.jsx)(X.Y0, {})
            : (0, l.jsx)(c.l, {
                  "aria-label": t.name,
                  children: (0, l.jsx)(ei, {
                      node: t,
                      sourceType: u,
                      expressionSourceApplication: o,
                      guildEmoji: h ?? void 0,
                      expressionSourceGuild: r,
                      joinedEmojiSourceGuildRecord: d,
                      closePopout: n,
                      onToggleShowMoreEmojis: s,
                      demoMode: !1,
                      nonce: a,
                  }),
              });
    },
    ei = (e) => {
        let t,
            n,
            s,
            c,
            d,
            {
                node: f,
                sourceType: y,
                expressionSourceApplication: S,
                expressionSourceGuild: N,
                joinedEmojiSourceGuildRecord: j,
                closePopout: T,
                onToggleShowMoreEmojis: k,
                guildEmoji: M,
                demoMode: G = !1,
                nonce: F,
            } = e,
            K = (0, o.bG)([H.default], () => H.default.getCurrentUser()),
            z = (0, o.bG)([B.A], () => B.A.getGuildId()),
            J = Z.Ay.isPremium(K),
            et = null != z && (z === N?.id || z === j?.id),
            el = null != j,
            ei = N?.isDiscoverable() ?? !1;
        G && ((J = !0), (ei = !0), (el = !1), (et = !1));
        let ea = {
                page: null != (0, o.bG)([B.A], () => B.A.getGuildId()) ? R.liQ.GUILD_CHANNEL : R.liQ.DM_CHANNEL,
                section: R.JJy.EMOJI_UPSELL_POPOUT,
            },
            {
                isRoleSubscriptionEmoji: er,
                isUnusableRoleSubscriptionEmoji: eo,
                userIsRoleSubscriber: ec,
            } = i.useMemo(
                () =>
                    null == M
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: O.kT(M),
                              isUnusableRoleSubscriptionEmoji: O.JN(M, z ?? void 0),
                              userIsRoleSubscriber: P.A.getUserSubscriptionRoles(M.guildId).size > 0,
                          },
                [M, z],
            ),
            eu = !!eo && (0, b.tE)(M?.guildId),
            { analyticsLocations: ed } = (0, E.Ay)(A.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, I.A)(
            {
                type: r.ImpressionTypes.MODAL,
                name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: ed, emoji_guild_id: M?.guildId ?? null, emoji_id: M?.id ?? null },
            },
            { disableTrack: !er },
        );
        let eh = B.A.getGuildId(),
            em = (0, q.O)({
                sourceType: y,
                expressionSourceApplication: S,
                isPremium: J,
                hasJoinedEmojiSourceGuild: el,
                isRoleSubscriptionEmoji: er,
                isUnusableRoleSubscriptionEmoji: eo,
                userIsRoleSubscriber: ec,
                emojiComesFromCurrentGuild: et,
                isDiscoverable: ei,
                shouldHideRoleSubscriptionCTA: eu,
                onOpenPremiumSettings: () => {
                    T(),
                        W.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: ea.page,
                            location_section: ea.section,
                        }),
                        (0, U.e)();
                },
            }),
            ep = el && eo && !eu && ((J && er) || !J),
            ef = em.emojiDescription,
            eg = (0, L.i)({
                emojiId: f.emojiId,
                currentGuildId: eh,
                popoutData: em,
                emojiSourceGuildId: N?.id,
                nonce: F,
                demoMode: G,
            }),
            e_ = em.type === q.u.JOIN_GUILD,
            ex = em.type === q.u.GET_PREMIUM,
            [eC, eA] = i.useState(!1),
            eE = ei || (el && !et) || null != N;
        return (0, l.jsxs)(X.Uq, {
            className: ee.Bm,
            children: [
                ((t = async () => {
                    if (G || null == N || el) return;
                    T();
                    let e = N.id;
                    try {
                        await x.A.joinGuild(e), x.A.transitionToGuildSync(e);
                    } catch {}
                }),
                (n = !el && ei),
                (0, l.jsxs)("div", {
                    className: ee.gH,
                    children: [
                        (0, l.jsxs)(v.A, {
                            children: [
                                (0, l.jsx)(C.A, {
                                    className: ee.P$,
                                    emojiId: f.emojiId,
                                    emojiName: f.name,
                                    animated: f.animated,
                                    size: "jumbo",
                                }),
                                (0, l.jsxs)(v.A, {
                                    direction: v.A.Direction.VERTICAL,
                                    justify: v.A.Justify.CENTER,
                                    className: ee.bM,
                                    children: [
                                        (0, l.jsx)(m.E, {
                                            variant: "text-md/semibold",
                                            children: (0, l.jsx)(u.A, { children: f.name }),
                                        }),
                                        null != ef && (0, l.jsx)(m.E, { variant: "text-sm/normal", children: ef }),
                                    ],
                                }),
                            ],
                        }),
                        ex
                            ? (0, l.jsx)(V.A, {
                                  className: ee.lI,
                                  subscriptionTier: Q.pe.TIER_2,
                                  size: h.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: em.text },
                                  onSubscribeModalClose: (e) => (e ? t() : T()),
                                  postSuccessGuild: n ? (N ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: ea,
                              })
                            : e_
                              ? (0, l.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: ee.lI,
                                    children: (0, l.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: em.text,
                                        fullWidth: !0,
                                        onClick: t,
                                    }),
                                })
                              : void 0,
                        ep &&
                            (0, l.jsx)(D.A, {
                                text: ec ? Y.intl.string(Y.t.yma8Vp) : Y.intl.string(Y.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: () => {
                                    T(),
                                        j?.id != null &&
                                            x.A.transitionToGuildSync(
                                                j.id,
                                                {
                                                    sourceLocationStack: [
                                                        A.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                $.VV.ROLE_SUBSCRIPTIONS,
                                            );
                                },
                            }),
                    ],
                })),
                eE &&
                    ((s = null != N && !el && ei && (N?.emojis?.length ?? 0) > 1),
                    (c = () => {
                        s &&
                            (k?.(),
                            eC || G || W.default.track(R.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eg),
                            eA(!eC));
                    }),
                    (0, l.jsxs)("div", {
                        className: ee.tl,
                        children: [
                            (0, l.jsx)(m.E, {
                                className: ee.YW,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: el ? Y.intl.string(Y.t.ohTzZH) : Y.intl.string(Y.t["eLfh+a"]),
                            }),
                            (0, l.jsx)(en, {
                                expressionSourceGuild: N ?? w.GO.createFromGuildRecord(j),
                                hasJoinedExpressionSourceGuild: el,
                                isDisplayingJoinGuildButtonInPopout: e_,
                            }),
                            s &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        ((d = Y.intl.string(Y.t.pnsAS2)),
                                        (0, l.jsx)(p.D, {
                                            onClick: c,
                                            className: ee.wK,
                                            children: (0, l.jsxs)(v.A, {
                                                children: [
                                                    (0, l.jsx)(m.E, {
                                                        className: ee.__invalid_showMoreEmojisLabel,
                                                        "aria-label": d,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: d,
                                                    }),
                                                    (0, l.jsx)(_.a, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: a()(ee.ZB, { [ee.cP]: !eC }),
                                                    }),
                                                ],
                                            }),
                                        })),
                                        null != f.emojiId &&
                                            eC &&
                                            (0, l.jsx)(es, {
                                                emojiId: f.emojiId,
                                                expressionSourceGuild: N,
                                                popoutData: em,
                                                onClose: T,
                                                hasJoinedEmojiSourceGuild: el,
                                                isDisplayingButtonInTopSection: e_ || ex,
                                            }),
                                    ],
                                }),
                        ],
                    })),
            ],
        });
    },
    es = (e) => {
        let {
                emojiId: t,
                expressionSourceGuild: n,
                hasJoinedEmojiSourceGuild: i,
                popoutData: s,
                onClose: a,
                isDisplayingButtonInTopSection: r,
            } = e,
            o = (n?.emojis ?? [])
                .slice(0, 13)
                .filter((e) => e.id !== t)
                .slice(0, 12),
            { type: c, description: u } = s;
        return (0, l.jsxs)("div", {
            className: ee.LX,
            children: [
                i
                    ? null
                    : o.map((e) =>
                          (0, l.jsx)(
                              d.m,
                              {
                                  text: e.require_colons ? `:${e.name}:` : e.name,
                                  ...X.Uk,
                                  children: (0, l.jsx)(C.A, { className: ee.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
                !r &&
                    (c === q.u.GET_PREMIUM
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(V.A, {
                                      subscriptionTier: Q.pe.TIER_2,
                                      textOptions: { textOverride: s.text },
                                      className: ee.lI,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                                  null != u &&
                                      (0, l.jsx)("div", {
                                          className: ee.vd,
                                          children: (0, l.jsx)(m.E, {
                                              variant: "text-sm/medium",
                                              "aria-label": u,
                                              children: u,
                                          }),
                                      }),
                              ],
                          })
                        : c === q.u.JOIN_GUILD
                          ? (0, l.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: ee.lI,
                                children: (0, l.jsx)(g.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: s.text,
                                    fullWidth: !0,
                                    onClick: () => {
                                        (0, z.Z2)(n.id, {});
                                    },
                                }),
                            })
                          : null),
            ],
        });
    };
