"use strict";
n.d(t, { G7: () => en, iP: () => ei, sX: () => er, mG: () => es, MV: () => et });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(110259),
    l = n(17928),
    d = n(305866),
    _ = n(3026),
    u = n(990078),
    c = n(862482),
    E = n(834730),
    h = n(939249),
    m = n(534514),
    f = n(821609),
    g = n(847374),
    p = n(686956),
    A = n(565645),
    I = n(793574),
    T = n(688810),
    S = n(139286),
    N = n(235986),
    C = n(573435),
    R = n(836039),
    O = n(702841),
    y = n(71393),
    v = n(159273),
    D = n(770335),
    L = n(624793),
    b = n(652215),
    w = n(731383),
    P = n(548118),
    k = n(714991),
    M = n(492494),
    U = n(384684),
    x = n(985242),
    G = n(87719),
    V = n(725807),
    F = n(976860),
    B = n(309010),
    H = n(967198),
    j = n(287809),
    W = n(954571),
    Y = n(486020),
    K = n(449054),
    z = n(927578),
    $ = n(450707),
    q = n(773669),
    X = n(985018),
    Z = n(34337),
    Q = n(746080),
    J = n(788868),
    ee = n(979132);
let et = (e) => {
        var t, n;
        let r,
            s,
            { node: a } = e;
        (0, w.i)({ emojiId: a.emojiId, currentGuildId: H.A.getGuildId() });
        let o =
                ((n = t = a.name),
                (r = (0, l.bG)([q.default], () => q.default.locale.startsWith("en-"))),
                (s = ":pizza:" === n && r ? X.intl.formatToPlainString(X.t["1knDPI"], { emojiName: n }) : n),
                ":pizza:" === t ? s : t),
            u = o !== a.name;
        return (0, i.jsx)(d.l, {
            children: (0, i.jsx)(Z.Uq, {
                children: (0, i.jsxs)(N.A, {
                    className: ee.gH,
                    children: [
                        (0, i.jsx)(A.A, {
                            emojiName: a.name,
                            className: ee.P$,
                            src: a.src,
                            animated: !1,
                            size: "jumbo",
                        }),
                        (0, i.jsxs)(N.A, {
                            direction: N.A.Direction.VERTICAL,
                            justify: N.A.Justify.CENTER,
                            className: ee.bM,
                            children: [
                                (0, i.jsx)(E.E, {
                                    className: ee.__invalid_emojiName,
                                    variant: "text-md/semibold",
                                    children: u
                                        ? (0, i.jsx)("div", { className: ee.Gl, children: o })
                                        : (0, i.jsx)(_.A, { children: o }),
                                }),
                                (0, i.jsx)(E.E, { variant: "text-sm/normal", children: X.intl.string(X.t.sXdH8c) }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    en = (e) => {
        let t,
            { expressionSourceGuild: n, hasJoinedExpressionSourceGuild: r, isDisplayingJoinGuildButtonInPopout: s } = e,
            { id: o, icon: l, name: d } = n,
            u = Y.Ay.getGuildIconURL({ id: o, icon: l, size: 32, canAnimate: !0 }),
            c = (r = r ?? !0) || n.isDiscoverable(),
            f = () => {
                n.isDiscoverable() ? (0, K.Z2)(o, {}) : r && (0, F.pX)(b.BVt.CHANNEL(o, B.A.getChannelId(o)));
            },
            g = n.isDiscoverable() && null != n.presenceCount;
        return (0, i.jsxs)(N.A, {
            align: N.A.Align.CENTER,
            children: [
                (0, i.jsx)(C.Ay, {
                    mask: C.Ay.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: ee.__invalid_guildIconContainer,
                    children:
                        null != u && c
                            ? (0, i.jsxs)(h.D, {
                                  "aria-label": d,
                                  onClick: f,
                                  children: [(0, i.jsx)("img", { src: u, alt: "", className: ee.$f }), " :"],
                              })
                            : (0, i.jsx)(P.Ay, { size: P.Ay.Sizes.SMALL, className: ee.oi, guild: n }),
                }),
                (0, i.jsxs)(N.A, {
                    direction: N.A.Direction.VERTICAL,
                    className: a()(ee.__invalid_guildInformation, ee.bM),
                    children: [
                        (0, i.jsxs)(N.A, {
                            align: N.A.Align.CENTER,
                            children: [
                                (0, i.jsx)(k.A, { guild: n, className: ee.n2 }),
                                c
                                    ? (0, i.jsx)(h.D, {
                                          onClick: f,
                                          className: ee.bM,
                                          children: (0, i.jsx)(m.D, {
                                              className: ee.J5,
                                              variant: "heading-md/semibold",
                                              children: (0, i.jsx)(_.A, { children: d }),
                                          }),
                                      })
                                    : (0, i.jsx)(m.D, {
                                          variant: "heading-md/semibold",
                                          children: (0, i.jsx)(_.A, { children: d }),
                                      }),
                            ],
                        }),
                        (0, i.jsx)(N.A, {
                            align: N.A.Align.CENTER,
                            children: g
                                ? ((t = !s && !r),
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(E.E, {
                                              variant: "text-xs/normal",
                                              color: "text-default",
                                              children: X.intl.format(X.t["LC+S+m"], {
                                                  membersOnline: n.presenceCount,
                                              }),
                                          }),
                                          (0, i.jsx)("div", { className: ee.zk }),
                                          t
                                              ? (0, i.jsx)(h.D, {
                                                    className: ee.Ki,
                                                    onClick: f,
                                                    children: (0, i.jsx)(E.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-link",
                                                        children: X.intl.string(X.t.riu2R5),
                                                    }),
                                                })
                                              : (0, i.jsx)(E.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: X.intl.string(X.t.inyJqO),
                                                }),
                                      ],
                                  }))
                                : (0, i.jsx)(E.E, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      children: X.intl.string(X.t.H29mx4),
                                  }),
                        }),
                    ],
                }),
            ],
        });
    },
    ei = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: s, nonce: a } = e,
            {
                expressionSourceGuild: o,
                expressionSourceApplication: l,
                sourceType: _,
                joinedEmojiSourceGuildRecord: u,
                emoji: c,
                isFetching: E,
            } = ((e) => {
                let { emojiId: t, refreshPositionKey: n } = e,
                    { joinedEmojiSourceGuildRecord: i, emoji: s } = (0, O.cf)([v.Ay, y.A], () => {
                        var e, n;
                        let i;
                        return (
                            (e = v.Ay),
                            (n = y.A),
                            (i = null != t ? e.getCustomEmojiById(t) : null),
                            i?.type === D.i.GUILD
                                ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                                : { emoji: null, joinedEmojiSourceGuildRecord: null }
                        );
                    }),
                    a = null != i,
                    o = null != i && i.features.has(b.GuildFeatures.DISCOVERABLE),
                    l = (!a || o) && null != t,
                    [d, _] = r.useState(l),
                    [u, c] = r.useState(null),
                    E = null != i ? L.GO.createFromGuildRecord(i) : null,
                    [h, m] = r.useState(E),
                    [f, g] = r.useState(null),
                    p = r.useRef(n);
                return (
                    r.useEffect(() => {
                        p.current = n;
                    }),
                    r.useEffect(() => {
                        p.current?.();
                        let e = async () => {
                            let e = null != t ? await (0, L.g_)(t) : null;
                            if (null != e)
                                switch ((c(e.type), e.type)) {
                                    case L.rV.APPLICATION:
                                        g(e.application);
                                        break;
                                    case L.rV.GUILD:
                                        m(e.guild);
                                }
                            _(!1), p.current?.();
                        };
                        l ? e() : p.current?.();
                    }, [t, l]),
                    {
                        expressionSourceGuild: h,
                        expressionSourceApplication: f,
                        sourceType: u,
                        joinedEmojiSourceGuildRecord: i,
                        hasJoinedEmojiSourceGuild: a,
                        emoji: s,
                        isFetching: d,
                    }
                );
            })({ emojiId: t.emojiId, refreshPositionKey: s });
        return E
            ? (0, i.jsx)(Z.Y0, {})
            : (0, i.jsx)(d.l, {
                  "aria-label": t.name,
                  children: (0, i.jsx)(er, {
                      node: t,
                      sourceType: _,
                      expressionSourceApplication: l,
                      guildEmoji: c ?? void 0,
                      expressionSourceGuild: o,
                      joinedEmojiSourceGuildRecord: u,
                      closePopout: n,
                      onToggleShowMoreEmojis: s,
                      demoMode: !1,
                      nonce: a,
                  }),
              });
    },
    er = (e) => {
        let t,
            n,
            s,
            d,
            u,
            {
                node: m,
                sourceType: C,
                expressionSourceApplication: O,
                expressionSourceGuild: y,
                joinedEmojiSourceGuildRecord: v,
                closePopout: D,
                onToggleShowMoreEmojis: P,
                guildEmoji: k,
                demoMode: F = !1,
                nonce: B,
            } = e,
            Y = (0, l.bG)([j.default], () => j.default.getCurrentUser()),
            K = (0, l.bG)([H.A], () => H.A.getGuildId()),
            q = z.Ay.isPremium(Y),
            et = null != K && (K === y?.id || K === v?.id),
            ei = null != v,
            er = y?.isDiscoverable() ?? !1;
        F && ((q = !0), (er = !0), (ei = !1), (et = !1));
        let ea = {
                page: null != (0, l.bG)([H.A], () => H.A.getGuildId()) ? b.liQ.GUILD_CHANNEL : b.liQ.DM_CHANNEL,
                section: b.JJy.EMOJI_UPSELL_POPOUT,
            },
            {
                isRoleSubscriptionEmoji: eo,
                isUnusableRoleSubscriptionEmoji: el,
                userIsRoleSubscriber: ed,
            } = r.useMemo(
                () =>
                    null == k
                        ? { isRoleSubscriptionEmoji: !1, isUnusableRoleSubscriptionEmoji: !1, userIsRoleSubscriber: !1 }
                        : {
                              isRoleSubscriptionEmoji: M.kT(k),
                              isUnusableRoleSubscriptionEmoji: M.JN(k, K ?? void 0),
                              userIsRoleSubscriber: U.A.getUserSubscriptionRoles(k.guildId).size > 0,
                          },
                [k, K],
            ),
            e_ = !!el && (0, R.tE)(k?.guildId),
            { analyticsLocations: eu } = (0, T.Ay)(I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, S.A)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: { location_stack: eu, emoji_guild_id: k?.guildId ?? null, emoji_id: k?.id ?? null },
            },
            { disableTrack: !eo },
        );
        let ec = H.A.getGuildId(),
            eE = (0, $.O)({
                sourceType: C,
                expressionSourceApplication: O,
                isPremium: q,
                hasJoinedEmojiSourceGuild: ei,
                isRoleSubscriptionEmoji: eo,
                isUnusableRoleSubscriptionEmoji: el,
                userIsRoleSubscriber: ed,
                emojiComesFromCurrentGuild: et,
                isDiscoverable: er,
                shouldHideRoleSubscriptionCTA: e_,
                onOpenPremiumSettings: () => {
                    D(),
                        W.default.track(b.HAw.PREMIUM_PROMOTION_OPENED, {
                            location_page: ea.page,
                            location_section: ea.section,
                        }),
                        (0, G.e)();
                },
            }),
            eh = ei && el && !e_ && ((q && eo) || !q),
            em = eE.emojiDescription,
            ef = (0, w.i)({
                emojiId: m.emojiId,
                currentGuildId: ec,
                popoutData: eE,
                emojiSourceGuildId: y?.id,
                nonce: B,
                demoMode: F,
            }),
            eg = eE.type === $.u.JOIN_GUILD,
            ep = eE.type === $.u.GET_PREMIUM,
            [eA, eI] = r.useState(!1),
            eT = er || (ei && !et) || null != y;
        return (0, i.jsxs)(Z.Uq, {
            className: ee.Bm,
            children: [
                ((t = async () => {
                    if (F || null == y || ei) return;
                    D();
                    let e = y.id;
                    try {
                        await p.A.joinGuild(e), p.A.transitionToGuildSync(e);
                    } catch {}
                }),
                (n = !ei && er),
                (0, i.jsxs)("div", {
                    className: ee.gH,
                    children: [
                        (0, i.jsxs)(N.A, {
                            children: [
                                (0, i.jsx)(A.A, {
                                    className: ee.P$,
                                    emojiId: m.emojiId,
                                    emojiName: m.name,
                                    animated: m.animated,
                                    size: "jumbo",
                                }),
                                (0, i.jsxs)(N.A, {
                                    direction: N.A.Direction.VERTICAL,
                                    justify: N.A.Justify.CENTER,
                                    className: ee.bM,
                                    children: [
                                        (0, i.jsx)(E.E, {
                                            variant: "text-md/semibold",
                                            children: (0, i.jsx)(_.A, { children: m.name }),
                                        }),
                                        null != em && (0, i.jsx)(E.E, { variant: "text-sm/normal", children: em }),
                                    ],
                                }),
                            ],
                        }),
                        ep
                            ? (0, i.jsx)(V.A, {
                                  className: ee.lI,
                                  subscriptionTier: J.pe.TIER_2,
                                  size: c.$n.Sizes.SMALL,
                                  fullWidth: !0,
                                  textOptions: { textOverride: eE.text },
                                  onSubscribeModalClose: (e) => (e ? t() : D()),
                                  postSuccessGuild: n ? (y ?? void 0) : void 0,
                                  premiumModalAnalyticsLocation: ea,
                              })
                            : eg
                              ? (0, i.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: ee.lI,
                                    children: (0, i.jsx)(f.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: eE.text,
                                        fullWidth: !0,
                                        onClick: t,
                                    }),
                                })
                              : void 0,
                        eh &&
                            (0, i.jsx)(x.A, {
                                text: ed ? X.intl.string(X.t.yma8Vp) : X.intl.string(X.t.nN2DIo),
                                size: "sm",
                                fullWidth: !0,
                                onClick: () => {
                                    D(),
                                        v?.id != null &&
                                            p.A.transitionToGuildSync(
                                                v.id,
                                                {
                                                    sourceLocationStack: [
                                                        I.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                                                    ],
                                                },
                                                Q.VV.ROLE_SUBSCRIPTIONS,
                                            );
                                },
                            }),
                    ],
                })),
                eT &&
                    ((s = null != y && !ei && er && (y?.emojis?.length ?? 0) > 1),
                    (d = () => {
                        s &&
                            (P?.(),
                            eA || F || W.default.track(b.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef),
                            eI(!eA));
                    }),
                    (0, i.jsxs)("div", {
                        className: ee.tl,
                        children: [
                            (0, i.jsx)(E.E, {
                                className: ee.YW,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: ei ? X.intl.string(X.t.ohTzZH) : X.intl.string(X.t["eLfh+a"]),
                            }),
                            (0, i.jsx)(en, {
                                expressionSourceGuild: y ?? L.GO.createFromGuildRecord(v),
                                hasJoinedExpressionSourceGuild: ei,
                                isDisplayingJoinGuildButtonInPopout: eg,
                            }),
                            s &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        ((u = X.intl.string(X.t.pnsAS2)),
                                        (0, i.jsx)(h.D, {
                                            onClick: d,
                                            className: ee.wK,
                                            children: (0, i.jsxs)(N.A, {
                                                children: [
                                                    (0, i.jsx)(E.E, {
                                                        className: ee.__invalid_showMoreEmojisLabel,
                                                        "aria-label": u,
                                                        variant: "text-xs/normal",
                                                        color: "none",
                                                        children: u,
                                                    }),
                                                    (0, i.jsx)(g.a, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: a()(ee.ZB, { [ee.cP]: !eA }),
                                                    }),
                                                ],
                                            }),
                                        })),
                                        null != m.emojiId &&
                                            eA &&
                                            (0, i.jsx)(es, {
                                                emojiId: m.emojiId,
                                                expressionSourceGuild: y,
                                                popoutData: eE,
                                                onClose: D,
                                                hasJoinedEmojiSourceGuild: ei,
                                                isDisplayingButtonInTopSection: eg || ep,
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
                hasJoinedEmojiSourceGuild: r,
                popoutData: s,
                onClose: a,
                isDisplayingButtonInTopSection: o,
            } = e,
            l = (n?.emojis ?? [])
                .slice(0, 13)
                .filter((e) => e.id !== t)
                .slice(0, 12),
            { type: d, description: _ } = s;
        return (0, i.jsxs)("div", {
            className: ee.LX,
            children: [
                r
                    ? null
                    : l.map((e) =>
                          (0, i.jsx)(
                              u.m,
                              {
                                  text: e.require_colons ? `:${e.name}:` : e.name,
                                  ...Z.Uk,
                                  children: (0, i.jsx)(A.A, { className: ee.Th, emojiId: e.id, animated: e.animated }),
                              },
                              e.id,
                          ),
                      ),
                !o &&
                    (d === $.u.GET_PREMIUM
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V.A, {
                                      subscriptionTier: J.pe.TIER_2,
                                      textOptions: { textOverride: s.text },
                                      className: ee.lI,
                                      fullWidth: !0,
                                      onClick: () => a(),
                                  }),
                                  null != _ &&
                                      (0, i.jsx)("div", {
                                          className: ee.vd,
                                          children: (0, i.jsx)(E.E, {
                                              variant: "text-sm/medium",
                                              "aria-label": _,
                                              children: _,
                                          }),
                                      }),
                              ],
                          })
                        : d === $.u.JOIN_GUILD
                          ? (0, i.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: ee.lI,
                                children: (0, i.jsx)(f.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: s.text,
                                    fullWidth: !0,
                                    onClick: () => {
                                        (0, K.Z2)(n.id, {});
                                    },
                                }),
                            })
                          : null),
            ],
        });
    };
