n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(990078),
    c = n(462887),
    u = n(778712),
    m = n(834730),
    g = n(408278),
    h = n(789645),
    x = n(140735),
    _ = n(243721),
    p = n(292666),
    A = n(730134),
    E = n(736653),
    f = n(573648),
    j = n(652215),
    N = n(783419),
    I = n(985018),
    C = n(19225);
function b(e) {
    let t,
        { theme: n, platform: l, integration: s, onRemove: a, locked: x } = e;
    if (s?.application != null)
        o()(null != s.application.bot, "bot is null"),
            (t = (0, i.jsx)(A.A, { size: u._3.SIZE_24, user: s.application.bot, className: C.w$ }));
    else if (null != l) {
        let e = (0, c.q)(n) ? l.icon.lightSVG : l.icon.darkSVG;
        t = (0, i.jsx)("img", {
            className: C.w$,
            src: e,
            alt: I.intl.formatToPlainString(I.t.rtm15P, { name: l.name }),
        });
    }
    return (0, i.jsxs)("div", {
        className: r()(
            C.R5,
            l?.hasMetadata === !0 || (s?.role_connections_metadata != null && s?.role_connections_metadata.length > 0)
                ? C.mD
                : null,
        ),
        children: [
            t,
            (0, i.jsx)(m.E, {
                variant: "text-md/medium",
                className: C.sK,
                children: I.intl.format(I.t.Nj0a3j, { platformName: l?.name ?? s?.application?.name }),
            }),
            (0, i.jsx)(d.m, {
                text: I.intl.string(I.t.N86XcP),
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(g.K, {
                        "aria-label": I.intl.string(I.t.N86XcP),
                        variant: "icon-only",
                        onClick: a,
                        disabled: x,
                        icon: h.P,
                        size: "sm",
                    }),
                }),
            }),
        ],
    });
}
function v(e) {
    let {
            titleText: t,
            fieldText: n,
            metadataField: s,
            existingPendingConfiguration: r,
            platform: a,
            applicationId: o,
            onConfigurationChange: d,
            locked: c,
        } = e,
        u = l.useId();
    return (0, i.jsxs)(
        "tr",
        {
            className: C.cm,
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    children: (0, i.jsx)(x.A, { children: (0, i.jsx)("label", { htmlFor: u, children: t }) }),
                }),
                (0, i.jsxs)("td", {
                    className: C.C4,
                    children: [
                        (0, i.jsx)(m.E, { variant: "text-md/bold", "aria-hidden": "true", children: t }),
                        (0, i.jsx)("div", {
                            className: C.bM,
                            children: (0, i.jsx)(m.E, { variant: "text-md/normal", children: n }),
                        }),
                    ],
                }),
                (0, i.jsx)("td", {}),
                (0, i.jsx)("td", {
                    children: (0, i.jsx)(_.d, {
                        id: u,
                        checked: r?.configuration.value === "1",
                        onChange: (e) => {
                            let t = null;
                            e &&
                                (t = {
                                    connectionType: a?.type ?? N.zR,
                                    applicationId: o,
                                    connectionMetadataField: s,
                                    operator: N.so.EQUAL,
                                    value: "1",
                                }),
                                d(t, r?.index ?? -1);
                        },
                        disabled: c,
                    }),
                }),
            ],
        },
        s,
    );
}
function S(e) {
    var t;
    let n,
        s,
        {
            titleText: r,
            fieldText: a,
            fieldTextHook: o,
            metadataField: d,
            existingPendingConfiguration: c,
            platform: u,
            applicationId: g,
            onConfigurationChange: h,
            locked: A,
            operator: E,
        } = e,
        f = c?.configuration != null,
        j = c?.index ?? -1,
        [b, v] =
            ((t = c?.configuration?.value),
            (n = E ?? N.so.GREATER_THAN),
            (s = Math.round(Number(t ?? 0))),
            n === N.so.GREATER_THAN ? (s = Math.max(1, s + 1)) : n === N.so.LESS_THAN && (s = Math.max(0, s - 1)),
            [s.toString(), n]),
        [S, T] = l.useState(b),
        y =
            null != o
                ? I.intl.format(o, { count: S, metadataHook: () => S })
                : (0, i.jsx)("span", { className: C.gF, children: a }),
        R = l.useId();
    return (0, i.jsxs)(
        "tr",
        {
            className: C.cm,
            children: [
                (0, i.jsx)("th", {
                    scope: "row",
                    children: (0, i.jsx)(x.A, { children: (0, i.jsx)("label", { htmlFor: R, children: r }) }),
                }),
                (0, i.jsxs)("td", {
                    className: C.C4,
                    children: [
                        (0, i.jsx)(m.E, { variant: "text-md/bold", "aria-hidden": "true", children: r }),
                        (0, i.jsx)("div", {
                            className: C.bM,
                            children: (0, i.jsx)(m.E, { variant: "text-md/normal", children: y }),
                        }),
                    ],
                }),
                (0, i.jsx)("td", {
                    children: (0, i.jsx)("div", {
                        className: C.x6,
                        children: (0, i.jsx)(p.k, {
                            "aria-label": I.intl.string(I.t.FTmi9y),
                            type: "number",
                            value: S,
                            onChange: (e) => {
                                let t, n;
                                if ((T(e), null == c)) return;
                                let [i, l] =
                                    ((t = E ?? N.so.GREATER_THAN),
                                    (n = Math.round(Number(e ?? 0))),
                                    t === N.so.GREATER_THAN
                                        ? (n = Math.max(0, n - 1))
                                        : t === N.so.LESS_THAN && (n = Math.max(1, n + 1)),
                                    [n.toString(), t]);
                                "" !== e &&
                                    h(
                                        {
                                            connectionType: u?.type ?? N.zR,
                                            applicationId: g,
                                            connectionMetadataField: d,
                                            operator: l,
                                            value: i,
                                        },
                                        j,
                                    );
                            },
                            disabled: A || !f,
                        }),
                    }),
                }),
                (0, i.jsx)("td", {
                    children: (0, i.jsx)(_.d, {
                        id: R,
                        checked: f,
                        onChange: (e) => {
                            let t = null;
                            e &&
                                (t = {
                                    connectionType: u?.type ?? N.zR,
                                    applicationId: g,
                                    connectionMetadataField: d,
                                    operator: v,
                                    value: S,
                                }),
                                h(t, c?.index ?? -1);
                        },
                        disabled: A,
                    }),
                }),
            ],
        },
        d,
    );
}
function T(e) {
    let { children: t } = e;
    return (0, i.jsxs)("table", {
        className: C.mi,
        children: [
            (0, i.jsx)("thead", {
                children: (0, i.jsxs)("tr", {
                    children: [
                        (0, i.jsx)("th", { scope: "col" }),
                        (0, i.jsx)("th", {
                            scope: "col",
                            children: (0, i.jsx)(x.A, { children: I.intl.string(I.t.TwDLVr) }),
                        }),
                        (0, i.jsx)("th", {
                            scope: "col",
                            children: (0, i.jsx)(x.A, { children: I.intl.string(I.t.qDWJwX) }),
                        }),
                        (0, i.jsx)("th", {
                            scope: "col",
                            children: (0, i.jsx)(x.A, { children: I.intl.string(I.t["5IF76e"]) }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("tbody", { children: t }),
        ],
    });
}
function y(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l } = e,
        s = f.A.get(j.fg2.BLUESKY);
    return (0, i.jsxs)(T, {
        children: [
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.zdXqG9),
                fieldTextHook: I.t.QPrntS,
                metadataField: N.pK.CREATED_AT,
                existingPendingConfiguration: t.get(N.pK.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.IE0T3q),
                fieldTextHook: I.t.Zwey2Z,
                metadataField: N.pK.BLUESKY_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(N.pK.BLUESKY_FOLLOWERS_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t["LLE+Up"]),
                fieldTextHook: I.t["UK2/m/"],
                metadataField: N.pK.BLUESKY_STATUSES_COUNT,
                existingPendingConfiguration: t.get(N.pK.BLUESKY_STATUSES_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
        ],
    });
}
function R(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l } = e,
        s = f.A.get(j.fg2.STEAM);
    return (0, i.jsxs)(T, {
        children: [
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.zdXqG9),
                fieldTextHook: I.t.QPrntS,
                metadataField: N.pK.CREATED_AT,
                existingPendingConfiguration: t.get(N.pK.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.gLs17E),
                fieldTextHook: I.t.BWDpbu,
                metadataField: N.pK.STEAM_GAME_COUNT,
                existingPendingConfiguration: t.get(N.pK.STEAM_GAME_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.formatToPlainString(I.t.j1Gf2n, { gameName: I.intl.string(I.t.HKUEZo) }),
                fieldTextHook: I.t.OGUX78,
                metadataField: N.pK.STEAM_ITEM_COUNT_DOTA2,
                existingPendingConfiguration: t.get(N.pK.STEAM_ITEM_COUNT_DOTA2),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.formatToPlainString(I.t.j1Gf2n, { gameName: I.intl.string(I.t.C8p1Sh) }),
                fieldTextHook: I.t.Eq7h8E,
                metadataField: N.pK.STEAM_ITEM_COUNT_TF2,
                existingPendingConfiguration: t.get(N.pK.STEAM_ITEM_COUNT_TF2),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
        ],
    });
}
function L(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l } = e,
        s = f.A.get(j.fg2.TWITTER);
    return (0, i.jsxs)(T, {
        children: [
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.zdXqG9),
                fieldTextHook: I.t.QPrntS,
                metadataField: N.pK.CREATED_AT,
                existingPendingConfiguration: t.get(N.pK.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.wbvDM5),
                fieldTextHook: I.t.Zwey2Z,
                metadataField: N.pK.TWITTER_FOLLOWERS_COUNT,
                existingPendingConfiguration: t.get(N.pK.TWITTER_FOLLOWERS_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t["1B3DVi"]),
                fieldTextHook: I.t["lrmh/U"],
                metadataField: N.pK.TWITTER_STATUSES_COUNT,
                existingPendingConfiguration: t.get(N.pK.TWITTER_STATUSES_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(v, {
                titleText: I.intl.string(I.t.yz2CIA),
                fieldText: I.intl.string(I.t.E2iT8K),
                metadataField: N.pK.TWITTER_VERIFIED,
                existingPendingConfiguration: t.get(N.pK.TWITTER_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
        ],
    });
}
function D(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l } = e,
        s = f.A.get(j.fg2.REDDIT);
    return (0, i.jsxs)(T, {
        children: [
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.zdXqG9),
                fieldTextHook: I.t.QPrntS,
                metadataField: N.pK.CREATED_AT,
                existingPendingConfiguration: t.get(N.pK.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t["3Xsrov"]),
                fieldTextHook: I.t.A4zKul,
                metadataField: N.pK.REDDIT_TOTAL_KARMA,
                existingPendingConfiguration: t.get(N.pK.REDDIT_TOTAL_KARMA),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(v, {
                titleText: I.intl.string(I.t.oWM95M),
                fieldText: I.intl.string(I.t["0cKdka"]),
                metadataField: N.pK.REDDIT_MOD,
                existingPendingConfiguration: t.get(N.pK.REDDIT_MOD),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(v, {
                titleText: I.intl.string(I.t["06rDHU"]),
                fieldText: I.intl.string(I.t.kCAN58),
                metadataField: N.pK.REDDIT_GOLD,
                existingPendingConfiguration: t.get(N.pK.REDDIT_GOLD),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
        ],
    });
}
function O(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l } = e,
        s = f.A.get(j.fg2.PAYPAL);
    return (0, i.jsxs)(T, {
        children: [
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.zdXqG9),
                fieldTextHook: I.t.QPrntS,
                metadataField: N.pK.CREATED_AT,
                existingPendingConfiguration: t.get(N.pK.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(v, {
                titleText: I.intl.string(I.t.IhXLyx),
                fieldText: I.intl.string(I.t["0JyE8I"]),
                metadataField: N.pK.PAYPAL_VERIFIED,
                existingPendingConfiguration: t.get(N.pK.PAYPAL_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
        ],
    });
}
function G(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l } = e,
        s = f.A.get(j.fg2.EBAY);
    return (0, i.jsxs)(T, {
        children: [
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.zdXqG9),
                fieldTextHook: I.t.QPrntS,
                metadataField: N.pK.CREATED_AT,
                existingPendingConfiguration: t.get(N.pK.CREATED_AT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.AuMxfz),
                fieldTextHook: I.t.IpQ4E8,
                metadataField: N.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                existingPendingConfiguration: t.get(N.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.WzvoSi),
                fieldTextHook: I.t.RH3VAx,
                metadataField: N.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(N.pK.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.VuSFzp),
                fieldTextHook: I.t.sn3m7v,
                metadataField: N.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
                existingPendingConfiguration: t.get(N.pK.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
                operator: N.so.LESS_THAN,
            }),
            (0, i.jsx)(v, {
                titleText: I.intl.string(I.t.TEEYwa),
                fieldText: I.intl.string(I.t["39wASN"]),
                metadataField: N.pK.EBAY_TOP_RATED_SELLER,
                existingPendingConfiguration: t.get(N.pK.EBAY_TOP_RATED_SELLER),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
        ],
    });
}
function M(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l } = e,
        s = f.A.get(j.fg2.TIKTOK);
    return (0, i.jsxs)(T, {
        children: [
            (0, i.jsx)(v, {
                titleText: I.intl.string(I.t.QHHwRR),
                fieldText: I.intl.string(I.t.E2iT8K),
                metadataField: N.pK.TIKTOK_VERIFIED,
                existingPendingConfiguration: t.get(N.pK.TIKTOK_VERIFIED),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.WUSIHj),
                fieldTextHook: I.t.Zwey2Z,
                metadataField: N.pK.TIKTOK_FOLLOWER_COUNT,
                existingPendingConfiguration: t.get(N.pK.TIKTOK_FOLLOWER_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t.w1IVQk),
                fieldTextHook: I.t["Ueeex/"],
                metadataField: N.pK.TIKTOK_FOLLOWING_COUNT,
                existingPendingConfiguration: t.get(N.pK.TIKTOK_FOLLOWING_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
            (0, i.jsx)(S, {
                titleText: I.intl.string(I.t["1cFXJu"]),
                fieldTextHook: I.t.uq2UuO,
                metadataField: N.pK.TIKTOK_LIKES_COUNT,
                existingPendingConfiguration: t.get(N.pK.TIKTOK_LIKES_COUNT),
                platform: s,
                onConfigurationChange: n,
                locked: l,
            }),
        ],
    });
}
function k(e) {
    let { configMetadataMap: t, onConfigurationChange: n, locked: l, integration: s } = e;
    return null == s || null == s.role_connections_metadata
        ? null
        : s.role_connections_metadata.map((e) => {
              let r;
              switch (e.type) {
                  case N.g1.INTEGER_LESS_THAN_EQUAL:
                  case N.g1.DATETIME_LESS_THAN_EQUAL:
                      r = N.so.LESS_THAN;
                      break;
                  case N.g1.INTEGER_GREATER_THAN_EQUAL:
                  case N.g1.DATETIME_GREATER_THAN_EQUAL:
                      r = N.so.GREATER_THAN;
                      break;
                  case N.g1.INTEGER_EQUAL:
                  case N.g1.BOOLEAN_EQUAL:
                      r = N.so.EQUAL;
                      break;
                  case N.g1.INTEGER_NOT_EQUAL:
                  case N.g1.BOOLEAN_NOT_EQUAL:
                      r = N.so.NOT_EQUAL;
                      break;
                  default:
                      return null;
              }
              switch (e.type) {
                  case N.g1.INTEGER_LESS_THAN_EQUAL:
                  case N.g1.INTEGER_GREATER_THAN_EQUAL:
                  case N.g1.INTEGER_EQUAL:
                  case N.g1.INTEGER_NOT_EQUAL:
                  case N.g1.DATETIME_LESS_THAN_EQUAL:
                  case N.g1.DATETIME_GREATER_THAN_EQUAL:
                      return (0, i.jsx)(
                          S,
                          {
                              titleText: e.name,
                              fieldText: e.description,
                              metadataField: e.key,
                              existingPendingConfiguration: t.get(e.key),
                              platform: null,
                              onConfigurationChange: n,
                              locked: l,
                              operator: r,
                              applicationId: s.application?.id,
                          },
                          e.key,
                      );
                  case N.g1.BOOLEAN_EQUAL:
                  case N.g1.BOOLEAN_NOT_EQUAL:
                      return (0, i.jsx)(
                          v,
                          {
                              titleText: e.name,
                              fieldText: e.description,
                              metadataField: e.key,
                              existingPendingConfiguration: t.get(e.key),
                              platform: null,
                              onConfigurationChange: n,
                              locked: l,
                              operator: r,
                              applicationId: s.application?.id,
                          },
                          e.key,
                      );
              }
          });
}
function U(e) {
    let t,
        { configurationItems: n, onConfigurationChange: l, locked: s, integrations: r } = e,
        a = (0, E.Ay)();
    if (n.length < 1) return null;
    let o = n[0].configuration.applicationId,
        d = null != o ? r?.find((e) => e.application?.id === o) : void 0;
    if (null != o && null == d) return null;
    let c = null;
    try {
        c = f.A.get(n[0].configuration.connectionType);
    } catch (e) {}
    let u = new Map();
    n.forEach((e) => {
        null != e.configuration.connectionMetadataField
            ? u.set(e.configuration.connectionMetadataField, e)
            : null == e.configuration.value &&
              null == e.configuration.operator &&
              null == e.configuration.connectionMetadataField &&
              (t = e);
    });
    let m = { configMetadataMap: u, onConfigurationChange: l, locked: s },
        g = null;
    switch (c?.type) {
        case j.fg2.STEAM:
            g = (0, i.jsx)(R, { ...m });
            break;
        case j.fg2.TWITTER:
            g = (0, i.jsx)(L, { ...m });
            break;
        case j.fg2.REDDIT:
            g = (0, i.jsx)(D, { ...m });
            break;
        case j.fg2.BLUESKY:
            g = (0, i.jsx)(y, { ...m });
            break;
        case j.fg2.PAYPAL:
            g = (0, i.jsx)(O, { ...m });
            break;
        case j.fg2.EBAY:
            g = (0, i.jsx)(G, { ...m });
            break;
        case j.fg2.TIKTOK:
            g = (0, i.jsx)(M, { ...m });
            break;
        default:
            g = (0, i.jsx)(k, { ...m, integration: d });
    }
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)(b, { theme: a, platform: c, integration: d, onRemove: () => l(null, t.index), locked: s }),
            g,
        ],
    });
}
