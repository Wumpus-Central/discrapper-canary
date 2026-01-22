n.d(t, {
    A: () => eN,
    l: () => eC,
}),
    n(228524),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(735438),
    u = n.n(c),
    d = n(311907),
    f = n(582754),
    p = n(397927),
    _ = n(73153),
    h = n(923408),
    m = n(736653),
    g = n(775602),
    E = n(793574),
    b = n(688810),
    y = n(822123),
    O = n(770335),
    A = n(263063),
    v = n(931959),
    S = n(148355),
    I = n(950191),
    T = n(576622),
    C = n(270574),
    N = n(915614),
    R = n(946356),
    w = n(939496),
    P = n(780964),
    D = n(840065),
    x = n(71393),
    L = n(287809),
    j = n(178368),
    M = n(954571),
    k = n(486020),
    U = n(975571),
    G = n(927578),
    V = n(837921),
    F = n(112848),
    B = n(704640),
    H = n(149757),
    Y = n(30084),
    W = n(683793),
    K = n(499369),
    z = n(788868),
    q = n(652215),
    X = n(985018),
    Z = n(565274),
    Q = n(324770),
    $ = n(838436),
    J = n(376038),
    ee = n(66889),
    et = n(578586),
    en = n(955868),
    er = n(631294),
    ei = n(751297),
    ea = n(943298),
    es = n(33487),
    eo = n(581820);

function el(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function ec() {
    return (ec =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}

function eu(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}

function ed(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function ef(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ed(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ep = V.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    e_ = {
        boostItemVisual: et,
        emojiStickersVisual: en,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: er,
        uploadsMessagesItemVisualV2: ei,
        PL: ea,
        TR: eo,
    },
    eh = {
        boostItemVisual: Q,
        emojiStickersVisual: $,
        screenShareItemVisual: es,
        uploadsMessagesItemVisual: J,
        uploadsMessagesItemVisualV2: ee,
        PL: ea,
        TR: eo,
    };

function em() {
    let e = (0, m.Ay)();
    return (0, f.Mw)(e) ? eh : e_;
}

function eg(e) {
    let { description: t, onLearnMore: n, renderVisual: i } = e,
        a = eT();
    return (0, r.jsxs)("div", {
        className: s()(Z.Kw, {
            [Z.u0]: a,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: s()(Z.p3, {
                    [Z.u0]: a,
                }),
                children: [
                    (0, r.jsx)(p.Text, {
                        variant: "text-md/normal",
                        children: t,
                    }),
                    (0, r.jsx)(p.QWc, {
                        onClick: n,
                        text: X.intl.string(X.t.hvVgAZ),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s()(Z.aS, {
                    [Z.u0]: a,
                }),
                children: i(),
            }),
        ],
    });
}

function eE(e) {
    let {} = e,
        t = ec({}, e),
        { theme: n } = (0, w.E)(),
        i = (0, p.rdh)(p.LU0.colors.INTERACTIVE_TEXT_ACTIVE, n).hex();
    return (0, r.jsx)(
        p.tvc,
        ef(
            eu(
                {
                    size: "md",
                },
                t,
            ),
            {
                color: i,
            },
        ),
    );
}

function eb(e) {
    let t,
        { currentUser: n, premiumType: i, onClose: a } = e,
        s = (0, I.Ay)(n.id),
        o = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        l = i === z.PremiumTypes.TIER_1,
        c = () => {
            a(),
                (0, D.openUserSettings)(P.X.PROFILE_PANEL, {
                    section: q.nc_.PROFILE_CUSTOMIZATION,
                }),
                M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                    action: "user_profile_customization",
                });
        };
    return (
        (t =
            (null == s ? void 0 : s.premiumType) === z.PremiumTypes.TIER_2
                ? (0, r.jsxs)(R.A, {
                      user: n,
                      displayProfile: s,
                      forceShowPremium: !0,
                      themeType: null,
                      className: Z.Kq,
                      children: [
                          (0, r.jsx)(N.o, {
                              user: n,
                              displayProfile: s,
                              avatarSize: p._3J.SIZE_56,
                              avatarOffsetX: 8,
                              avatarOffsetY: 2,
                              bannerWidth: 172,
                              bannerHeight: 60,
                              themePadding: 4,
                          }),
                          (0, r.jsx)(ep, {
                              className: Z.jU,
                              src: n.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !o),
                              size: p._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Z.b$,
                              children: [
                                  (0, r.jsx)(C.A, {
                                      className: Z.Bj,
                                      usernameClass: Z.TE,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(eE, {
                                      className: Z.kC,
                                  }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: Z.xl,
                      children: [
                          (0, r.jsx)(ep, {
                              className: Z.wK,
                              src: n.getAvatarURL(void 0, (0, p.FT9)(p._3J.SIZE_56), !o),
                              size: p._3J.SIZE_56,
                              "aria-label": n.username,
                          }),
                          (0, r.jsxs)("div", {
                              className: Z.Un,
                              children: [
                                  (0, r.jsx)(C.A, {
                                      className: Z.Bj,
                                      usernameClass: Z.TE,
                                      name: n.toString(),
                                  }),
                                  (0, r.jsx)(p.tvc, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Z.kC,
                                  }),
                              ],
                          }),
                      ],
                  })),
        (0, r.jsx)(eg, {
            description: l ? X.intl.format(X.t.xCaYwE, {}) : X.intl.format(X.t["gpqr+n"], {}),
            onLearnMore: c,
            renderVisual: () => t,
        })
    );
}

function ey(e) {
    var t, n, i;
    let { currentUser: a, onClose: s } = e,
        o = (0, F.$F)(),
        { analyticsLocations: l } = (0, b.Ay)(E.A.PREMIUM_UNCANCEL_MODAL),
        c = (0, F.Xb)(),
        u = null != (t = null == o ? void 0 : o.id) ? t : z.Ac.PREMIUM_TENURE_1_MONTH,
        d = (0, B.A)(u);
    if (!(0, G.YE)(a, z.PremiumTypes.TIER_2) || null == c) return null;
    let f = null != (n = null == o ? void 0 : o.status) ? n : F.Wo.UPCOMING,
        _ =
            null != (i = null == o ? void 0 : o.nameUnformatted)
                ? i
                : z.VD[z.Ac.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        h = (0, H.I)(u),
        m = X.intl.string(_),
        g = f === F.Wo.EARNED,
        y = null != o && "daysLeft" in o ? o.daysLeft : 1,
        O = X.t.pwkxYF;
    if (g) {
        let e = Math.max((0, G.To)(c), 1);
        e >= 365 ? ((y = Math.floor(e / 365)), (O = X.t["/ojPfi"])) : ((y = e), (O = X.t.IItWYo));
    }
    let A = () => {
        s(),
            (0, Y.D)({
                analyticsLocations: l,
                displayProfile: null,
            }),
            M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                action: "badges",
            });
    };
    return (0, r.jsx)(eg, {
        description: X.intl.format(O, {
            time: y,
        }),
        onLearnMore: A,
        renderVisual: () =>
            (0, r.jsx)(p.hLv, {
                className: Z.nc,
                color: d,
                children: (0, r.jsx)("img", {
                    alt: m,
                    src: h,
                    className: Z.pq,
                }),
            }),
    });
}

function eO(e) {
    let { premiumType: t } = e,
        n = 3,
        i = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        a = (0, y.Fj)(null)
            .filter((e) => e.type === O.i.GUILD && (e.animated || null != e.guildId))
            .slice(0, n),
        s = (0, d.yK)([v.A], () => v.A.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, n - a.length)),
        o = em().emojiStickersVisual,
        l = t === z.PremiumTypes.TIER_1,
        c = () => {
            window.open(U.A.getArticleURL(q.MVz.PREMIUM_DETAILS)),
                M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                    action: "emojis_stickers",
                });
        };
    return (0, r.jsx)(eg, {
        description: l ? X.intl.format(X.t.couiKJ, {}) : X.intl.format(X.t["0hUHi6"], {}),
        onLearnMore: c,
        renderVisual: () =>
            (null != a && a.length > 0) || (!l && null != s && s.length > 0)
                ? (0, r.jsxs)("div", {
                      className: Z.iB,
                      children: [
                          a
                              .map((e) =>
                                  null == e.id
                                      ? e.url
                                      : k.Ay.getEmojiURL({
                                            id: e.id,
                                            animated: !i && e.animated,
                                            size: 58,
                                        }),
                              )
                              .map((e, t) =>
                                  null != e
                                      ? (0, r.jsx)(
                                            "img",
                                            {
                                                className: Z.d7,
                                                alt: "",
                                                src: e,
                                            },
                                            "emoji-".concat(t),
                                        )
                                      : null,
                              ),
                          l
                              ? null
                              : s.map((e) =>
                                    (0, r.jsx)(
                                        S.A,
                                        {
                                            disableAnimation: i,
                                            sticker: e,
                                            size: 58,
                                            withLoadingIndicator: !1,
                                        },
                                        e.id,
                                    ),
                                ),
                      ],
                  })
                : (0, r.jsx)("img", {
                      className: Z.OP,
                      alt: "",
                      src: o,
                  }),
    });
}

function eA(e) {
    let { premiumType: t, onClose: n } = e;
    i.useEffect(() => _.h.wait(() => (0, h.CD)()), []);
    let a = (0, d.bG)([g.A], () => g.A.useReducedMotion),
        [o, l] = (0, d.yK)([j.A, x.A], () => {
            let e = j.A.boostSlots,
                t = new Map();
            u()(e)
                .map("premiumGuildSubscription")
                .map("guildId")
                .forEach((e) => {
                    if (null != x.A.getGuild(e)) {
                        var n;
                        let r = null != (n = t.get(e)) ? n : 0;
                        t.set(e, r + 1);
                    }
                });
            let n = null,
                r = 0;
            return (
                t.size > 0 && ([n, r] = Array.from(t.entries()).reduce((e, t) => (t[1] > e[1] ? t : e))),
                [x.A.getGuild(n), r]
            );
        }),
        c = null != o && l > 0,
        f = em().boostItemVisual,
        m = () => {
            n(),
                (0, D.openUserSettings)(P.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                    section: q.nc_.GUILD_BOOSTING,
                }),
                M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                    action: "boosts",
                });
        };
    return (0, r.jsx)(eg, {
        description: t === z.PremiumTypes.TIER_1 ? X.intl.format(X.t.K4Hv69, {}) : X.intl.format(X.t.wRxEDW, {}),
        onLearnMore: m,
        renderVisual: () =>
            c
                ? (0, r.jsx)("div", {
                      className: Z.Ht,
                      children: (0, r.jsxs)("div", {
                          className: Z.W5,
                          children: [
                              (0, r.jsx)(A.A, {
                                  guild: o,
                                  size: A.A.Sizes.MEDIUM,
                                  animate: !a,
                                  className: Z.Hc,
                              }),
                              (0, r.jsxs)("div", {
                                  className: Z.IA,
                                  children: [
                                      (0, r.jsx)(p.Text, {
                                          variant: "text-md/normal",
                                          className: s()(Z.v, Z.e0),
                                          children: o.name,
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Z.i$,
                                          children: [
                                              (0, r.jsx)(p._Jp, {
                                                  color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  className: Z.jZ,
                                              }),
                                              (0, r.jsx)(p.Text, {
                                                  variant: "text-xs/normal",
                                                  className: s()(Z.v, Z.x2),
                                                  children: X.intl.format(X.t["Ou/g/P"], {
                                                      boostCount: l,
                                                  }),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  })
                : (0, r.jsx)("img", {
                      alt: "",
                      src: f,
                  }),
    });
}
let ev = () => {
    let e = em().screenShareItemVisual,
        t = () => {
            window.open(U.A.getArticleURL(q.MVz.STREAM_QUALITY_SETTINGS)),
                M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                    action: "screen_share",
                });
        };
    return (0, r.jsx)(eg, {
        description: X.intl.format(X.t.wK04T1, {}),
        onLearnMore: t,
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: e,
            }),
    });
};

function eS(e) {
    let { premiumType: t } = e,
        n = em().uploadsMessagesItemVisual,
        i = () => {
            window.open(U.A.getArticleURL(q.MVz.PREMIUM_DETAILS)),
                M.default.track(q.HAw.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                    action: "msgs_uploads",
                });
        };
    return (0, r.jsx)(eg, {
        description: t === z.PremiumTypes.TIER_2 ? X.intl.format(X.t.GsOFRJ, {}) : X.intl.format(X.t.wFWO6D, {}),
        onLearnMore: i,
        renderVisual: () =>
            (0, r.jsx)("img", {
                alt: "",
                src: n,
            }),
    });
}
let eI = i.createContext({
        isPremiumRebrand: !1,
    }),
    eT = () => i.useContext(eI).isPremiumRebrand;

function eC(e) {
    let { currentUser: t, premiumType: n, onClose: a, isDowngrade: o = !1, isPremiumRebrand: l = !1 } = e,
        c = i.useMemo(() => {
            let e = [];
            switch (n) {
                case z.PremiumTypes.TIER_0:
                    e.push(
                        (0, r.jsx)(eO, {
                            premiumType: n,
                        }),
                        (0, r.jsx)(eS, {
                            premiumType: n,
                        }),
                    );
                    break;
                case z.PremiumTypes.TIER_1:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eb,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(ev, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eA,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  eb,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eO,
                                  {
                                      premiumType: n,
                                  },
                                  "emoji-stickers-item",
                              ),
                              (0, r.jsx)(ev, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eS,
                                  {
                                      premiumType: n,
                                  },
                                  "uploads-item",
                              ),
                              (0, r.jsx)(
                                  eA,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                          );
                    break;
                case z.PremiumTypes.TIER_2:
                    o
                        ? e.push(
                              (0, r.jsx)(
                                  eb,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eA,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(ev, {}, "screen-share-item"),
                          )
                        : e.push(
                              (0, r.jsx)(
                                  ey,
                                  {
                                      currentUser: t,
                                      onClose: a,
                                  },
                                  "badge-item",
                              ),
                              (0, r.jsx)(
                                  eb,
                                  {
                                      currentUser: t,
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "profile-item",
                              ),
                              (0, r.jsx)(
                                  eO,
                                  {
                                      premiumType: n,
                                  },
                                  "emoji-stickers-item",
                              ),
                              (0, r.jsx)(
                                  eA,
                                  {
                                      premiumType: n,
                                      onClose: a,
                                  },
                                  "boost-item",
                              ),
                              (0, r.jsx)(ev, {}, "screen-share-item"),
                              (0, r.jsx)(
                                  eS,
                                  {
                                      premiumType: n,
                                  },
                                  "uploads-item",
                              ),
                          );
            }
            return e;
        }, [n, t, a, o]);
    return (0, r.jsx)(eI.Provider, {
        value: {
            isPremiumRebrand: l,
        },
        children: (0, r.jsx)("div", {
            className: s()(Z.xP, {
                [Z.u0]: l,
                [Z.mK]: l && c.length <= 2,
            }),
            children: c,
        }),
    });
}
let eN = function (e) {
    let {
            premiumType: t,
            titleText: n,
            subtitleText: a,
            footer: s,
            onClose: o,
            onDiscountClaim: c,
            onContinue: u,
            analyticsLocations: f,
            isLoading: _ = !1,
            churnUserDiscountOffer: h = null,
            isDowngrade: m = !1,
            subtitleIcon: g,
            subtitleClassName: E,
        } = e,
        b = (0, d.bG)([L.default], () => {
            let e = L.default.getCurrentUser();
            return l()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
        });
    i.useEffect(() => {
        (0, T.A)(b.id, b.getAvatarURL(null, 80));
    }, [b]);
    let y = null != h && !_;
    return (i.useEffect(() => {
        y &&
            M.default.track(q.HAw.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
                location_stack: f,
                discount_id: null == h ? void 0 : h.discount_id,
            });
    }, [y, f, h]),
    _)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.A, {
                      premiumType: t,
                      onClose: o,
                  }),
                  (0, r.jsx)(p.$mQ, {
                      "data-migration-pending": !0,
                      className: Z.rf,
                      children: (0, r.jsx)(p.y$y, {
                          className: Z.u1,
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(K.A, {
                      premiumType: t,
                      onClose: o,
                  }),
                  (0, r.jsxs)(p.$mQ, {
                      "data-migration-pending": !0,
                      className: Z.rf,
                      children: [
                          (0, r.jsx)(p.Heading, {
                              variant: "heading-xl/semibold",
                              color: "text-strong",
                              className: Z.DD,
                              children: n,
                          }),
                          (0, r.jsxs)("div", {
                              className: E,
                              children: [
                                  g,
                                  (0, r.jsx)(p.Text, {
                                      variant: "text-md/normal",
                                      children: a,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(eC, {
                              currentUser: b,
                              premiumType: t,
                              onClose: o,
                              isDowngrade: m,
                          }),
                      ],
                  }),
                  !y &&
                      (0, r.jsx)(p.jlY, {
                          "data-migration-pending": !0,
                          children: s,
                      }),
                  y &&
                      (0, r.jsx)(W.A, {
                          churnUserDiscountOffer: h,
                          onDiscountClaim: c,
                          onContinue: u,
                      }),
              ],
          });
};
