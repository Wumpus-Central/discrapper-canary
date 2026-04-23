n.d(t, { A: () => ec });
var i,
    a = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s);
n(926675);
var o = n(534514),
    c = n(939249),
    d = n(140735),
    u = n(834730),
    _ = n(216964),
    g = n(661531),
    m = n(260598),
    f = n(22231),
    x = n(915089),
    p = n(409626),
    I = n(692969),
    A = n(201438),
    h = n(287809),
    E = n(562153),
    v = n(183555),
    j = n(735321),
    b = n(451395),
    N = n(823016),
    T = n(788593),
    C = n(492280),
    S = n(990078),
    k = n(789645),
    O = n(147925);
n(321073);
var L = n(477782),
    D = n(550079),
    R = n(922016),
    P = n(761915),
    w = n(877784),
    G = n(53788),
    y = n(148795),
    M = n(214947),
    U = n(985018);
let F = {
        [P.X.BETTER_THAN_YOU]: { getText: () => U.intl.string(U.t.jbIRBE), icon: w.q },
        [P.X.CASUAL]: { getText: () => U.intl.string(U.t.xcFFv6), icon: w.q },
        [P.X.INTERMEDIATE]: { getText: () => U.intl.string(U.t["A/mIs/"]), icon: w.q },
        [P.X.EXPERT]: { getText: () => U.intl.string(U.t.RIOFc2), icon: w.q },
        [P.X.OBSESSED]: { getText: () => U.intl.string(U.t.isPJDu), icon: G.G },
        [P.X.LOVE_IT]: { getText: () => U.intl.string(U.t["1rN7BF"]), icon: G.G },
        [P.X.KIND_OF_LOVE_IT]: { getText: () => U.intl.string(U.t.bCBpVg), icon: G.G },
        [P.X.KIND_OF_HATE_IT]: { getText: () => U.intl.string(U.t["/WcmcP"]), icon: y.d },
        [P.X.RAGE_QUITTING]: { getText: () => U.intl.string(U.t["NXZ/MZ"]), icon: y.d },
        [P.X.OPEN_TO_PLAY]: { getText: () => U.intl.string(U.t.q30PoH), icon: M.$ },
        [P.X.LOOKING_FOR_GROUP]: { getText: () => U.intl.string(U.t.DWWAAQ), icon: M.$ },
        [P.X.LOOKING_FOR_TIPS]: { getText: () => U.intl.string(U.t.KQDVvH), icon: M.$ },
        [P.X.OPEN_TO_TEACH]: { getText: () => U.intl.string(U.t["5HhQo+"]), icon: M.$ },
        [P.X.LOOKING_TO_DISCUSS]: { getText: () => U.intl.string(U.t.GipOCq), icon: M.$ },
    },
    W = (e) => {
        let t = F[e];
        return null != t ? t : null;
    };
var H = (((i = {}).RADIO = "radio"), (i.CHECKBOX = "checkbox"), i);
let B = {
    skill_level: {
        getLabel: () => U.intl.string(U.t.MKqADM),
        type: "radio",
        tags: [P.X.CASUAL, P.X.INTERMEDIATE, P.X.EXPERT, P.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => U.intl.string(U.t["7/umul"]),
        type: "checkbox",
        tags: [P.X.OBSESSED, P.X.LOVE_IT, P.X.KIND_OF_LOVE_IT, P.X.KIND_OF_HATE_IT, P.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => U.intl.string(U.t["5Dez17"]),
        type: "checkbox",
        tags: [
            P.X.LOOKING_FOR_GROUP,
            P.X.OPEN_TO_PLAY,
            P.X.LOOKING_FOR_TIPS,
            P.X.OPEN_TO_TEACH,
            P.X.LOOKING_TO_DISCUSS,
        ],
    },
};
var V = n(767070);
let X = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: i, onClose: l } = e;
    return (0, a.jsx)(D.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": U.intl.string(U.t.r6EJOu),
        onClose: l,
        onSelect: () => {},
        className: V.VS,
        children: Object.entries(B).map((e) => {
            let l,
                [s, r] = e,
                o =
                    ((l = []),
                    r.type === H.RADIO &&
                        l.push(
                            (0, a.jsx)(
                                L.iD,
                                {
                                    id: `${s}-none`,
                                    group: s,
                                    label: U.intl.string(U.t.PoWNfe),
                                    checked: !r.tags.some((e) => t.includes(e)),
                                    action: () => i(r.tags),
                                },
                                "none",
                            ),
                        ),
                    r.tags.forEach((e) => {
                        let i = F[e];
                        null != i &&
                            (r.type === H.RADIO
                                ? l.push(
                                      (0, a.jsx)(
                                          L.iD,
                                          {
                                              id: e,
                                              group: s,
                                              label: i.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : l.push(
                                      (0, a.jsx)(
                                          L.sL,
                                          { id: e, label: i.getText(), checked: t.includes(e), action: () => n(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    l);
            return (0, a.jsx)(L.rX, { label: r.getLabel(), children: o }, s);
        }),
    });
});
function z(e) {
    let { tags: t, widgetType: n, applicationId: i, ref: s } = e,
        r = (0, l.useRef)(null),
        { trackUserProfileEditAction: o } = (0, v.NJ)(),
        d = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        _ = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = new Set(d);
                if (t) {
                    let t = Object.values(B).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            a.delete(e);
                        }),
                        a.add(e),
                        o({ action: "TAG_ADDED", widgetEdited: n, gameId: i }));
                } else
                    a.has(e)
                        ? (a.delete(e), o({ action: "TAG_REMOVED", widgetEdited: n, gameId: i }))
                        : (a.add(e), o({ action: "TAG_ADDED", widgetEdited: n, gameId: i }));
                (0, j.s1)(n, i, Array.from(a));
            },
            [d, o, n, i],
        ),
        g = (0, l.useCallback)(
            (e) => {
                let t = new Set(d);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    o({ action: "TAG_REMOVED", widgetEdited: n, gameId: i }),
                    (0, j.s1)(n, i, Array.from(t));
            },
            [d, o, n, i],
        );
    return (0, a.jsx)(R.Y, {
        targetElementRef: r,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            o({ action: "PRESS_ADD_TAG", widgetEdited: n });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(X, { currentTags: d, onTagSelect: _, onNoneSelect: g, onClose: t });
        },
        children: (e) =>
            (0, a.jsx)("div", {
                ref: (e) => (
                    null != e && ((r.current = e), (s.current = e)),
                    () => {
                        (r.current = null), (s.current = null);
                    }
                ),
                children: (0, a.jsx)(c.D, {
                    ...e,
                    className: V.c9,
                    "aria-label": U.intl.string(U.t.r6EJOu),
                    children: (0, a.jsx)(u.E, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: U.intl.string(U.t.fZSejy),
                    }),
                }),
            }),
    });
}
function K(e) {
    let { tags: t, isCurrentUser: n, widgetType: i, applicationId: s, className: o, disableInteraction: c = !1 } = e,
        d = t?.filter((e) => null != W(e)) ?? [],
        u = d.length > 0,
        _ = n && !c && (0, j.mS)(i) && d.length < 20,
        { trackUserProfileAction: g } = (0, v.NJ)(),
        m = (0, l.useRef)(new Map()),
        f = (0, l.useRef)(null),
        x = (0, l.useRef)(null),
        [p, I] = (0, l.useState)(0),
        [A, h] = (0, l.useState)(!1),
        E = Z(f, x, d, m, I);
    if (
        ((0, l.useEffect)(
            () => (
                E(),
                window.addEventListener("resize", E),
                () => {
                    window.removeEventListener("resize", E);
                }
            ),
            [E, d?.join("")],
        ),
        !u && !_)
    )
        return null;
    let b = A ? d : d.slice(0, d.length - p);
    return (0, a.jsxs)("div", {
        className: r()(V.I4, o),
        children: [
            u &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("ul", {
                            className: V.Tw,
                            "aria-label": U.intl.string(U.t.EfjTi4),
                            children: b.map((e) =>
                                (0, a.jsx)(
                                    Y,
                                    {
                                        tag: e,
                                        isCurrentUser: n,
                                        applicationId: s,
                                        widgetType: i,
                                        ref: (t) => {
                                            null != t && m.current.set(e, t);
                                        },
                                        disableInteraction: c,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        p > 0 &&
                            (0, a.jsx)(Q, {
                                buttonRef: f,
                                isExpanded: A,
                                numberOfOverflowingTags: p,
                                onExpandTags: () => {
                                    h(!0), g({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    h(!1), g({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: c,
                            }),
                    ],
                }),
            _ && (0, a.jsx)(z, { tags: t, widgetType: i, applicationId: s, ref: x }),
        ],
    });
}
let Y = (e) => {
    let { tag: t, isCurrentUser: n, applicationId: i, widgetType: l, disableInteraction: s, ref: r } = e,
        { trackUserProfileEditAction: o } = (0, v.NJ)(),
        d = W(t);
    if (null == d) return null;
    let { getText: _, icon: g } = d;
    return (0, a.jsxs)("li", {
        className: V.Tc,
        ref: r,
        children: [
            (0, a.jsx)(g, { size: "xxs" }),
            (0, a.jsx)(u.E, { variant: "text-xxs/medium", color: "text-subtle", children: _() }),
            n &&
                !s &&
                (0, a.jsx)(S.m, {
                    text: U.intl.string(U.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, a.jsx)(c.D, {
                        onClick: () => {
                            (0, j.tg)(l, i, t), o({ action: "TAG_REMOVED", widgetEdited: l, gameId: i });
                        },
                        className: V.DT,
                        "aria-label": U.intl.formatToPlainString(U.t.GCn1ne, { tag: _() }),
                        children: (0, a.jsx)(k.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
};
function q(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, a.jsx)(u.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function J() {
    return (0, a.jsx)(O.A, { direction: O.A.Directions.LEFT, width: 12, height: 12, className: V.OW });
}
function Q(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: i,
            onCollapseTags: l,
            disableInteraction: s,
            buttonRef: r,
        } = e,
        o = t ? U.intl.string(U.t.z9VPrQ) : U.intl.string(U.t.mriLXL),
        d = t ? U.intl.string(U.t.z9VPrQ) : U.intl.formatToPlainString(U.t.F6iMs4, { count: n });
    return s
        ? (0, a.jsx)("div", { className: V.X1, ref: r, children: (0, a.jsx)(q, { numberOfOverflowingTags: n }) })
        : (0, a.jsx)(S.m, {
              text: o,
              ariaHidden: t,
              children: (0, a.jsx)(c.D, {
                  innerRef: r,
                  onClick: t ? l : i,
                  "aria-label": d,
                  className: t ? V.cS : V.X1,
                  children: t ? (0, a.jsx)(J, {}) : (0, a.jsx)(q, { numberOfOverflowingTags: n }),
              }),
          });
}
let Z = (e, t, n, i, a) =>
    (0, l.useCallback)(() => {
        if (null == n) return void a(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
            s = t.current?.getBoundingClientRect().width ?? 0,
            r = s > 0 ? 8 : 4,
            o = 0,
            c = 0,
            d = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = d.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        c = 0;
        for (let e = o; e < n.length; e++) {
            let t = d.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296 - l - s - r) break;
                o++;
            }
        }
        a(n.length - o);
    }, [e, t, n?.join(""), i, a]);
var $ = n(858808),
    ee = n(390877),
    et = n(442356),
    en = n(529459);
function ei(e) {
    let { index: t, widgetType: n, game: i, children: l, getWidth: s } = e,
        { manageFocusOnReorder: r } = (0, N.r)();
    return (0, a.jsx)(b.mG, {
        index: t,
        itemId: i.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: i, widgetType: n, getWidth: s },
        "aria-label": U.intl.formatToPlainString(U.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, j.Un)(n, e, t),
        onEnd: () => r(i.applicationId),
        className: en.vF,
        dropBeforeClassName: en.A,
        dropAfterClassName: en.Ze,
        draggingClassName: en.Id,
        children: l,
    });
}
function ea(e) {
    let { applicationId: t, userId: n, gameName: i, ...l } = e,
        s = (0, I.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: p.Ob.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == s
        ? (0, a.jsx)(o.D, { ...l, children: i })
        : (0, a.jsx)(o.D, { ...l, children: (0, a.jsx)(c.D, { onClick: s, className: en.sd, children: i }) });
}
function el(e) {
    let { user: t, guildId: n, channelId: i, id: l } = e;
    return (0, a.jsx)(d.A, { id: l, children: U.intl.format(U.t.TM0XDY, { name: E.Ay.getName(n, i, t) }) });
}
function es(e) {
    let { text: t, className: n } = e;
    return (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function er(e) {
    let { text: t, user: n, guildId: i, channelId: l } = e,
        s = (0, x.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, a.jsxs)("div", {
              role: "group",
              "aria-labelledby": s,
              children: [
                  (0, a.jsx)(_.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: en.Ls }),
                  (0, a.jsx)(el, { user: n, guildId: i, channelId: l, id: s }),
                  (0, a.jsx)(es, { text: t }),
              ],
          });
}
function eo(e) {
    let { text: t, user: n, guildId: i, channelId: s, widgetType: o, applicationId: u } = e,
        _ = (0, x.GV)(),
        p = (0, x.GV)(),
        { trackUserProfileEditAction: I } = (0, v.NJ)(),
        [A, h] = l.useState("idle"),
        [E, b] = l.useState(t ?? ""),
        N = l.useRef(null),
        T = l.useRef(null),
        C = U.intl.string(U.t.xKSfBT),
        S = null != t && "" !== t.trim(),
        k = l.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: o }), h("editing");
        }, [o, I]),
        O = l.useCallback(() => {
            let e = E.trim(),
                n = e !== (t ?? "").trim();
            (0, j.oc)(o, u, "" !== e ? e : void 0),
                h("completed"),
                n && I({ action: "COMMENTARY_EDITED", widgetEdited: o, gameId: u });
        }, [o, u, E, t, I]),
        L = l.useCallback((e) => {
            b(e);
        }, []);
    return (
        l.useEffect(() => {
            "editing" === A && b(t ?? "");
        }, [t, A]),
        l.useEffect(() => {
            "completed" === A && N.current?.focus();
        }, [A]),
        "editing" === A
            ? (0, a.jsxs)("div", {
                  className: en.kS,
                  children: [
                      (0, a.jsx)(d.A, { tag: "label", htmlFor: _, children: U.intl.string(U.t.JxKXeT) }),
                      (0, a.jsx)(m.f, {
                          id: _,
                          value: E,
                          placeholder: C,
                          onChange: L,
                          onBlur: O,
                          rows: 3,
                          autoFocus: "editing" === A,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), O());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, a.jsxs)("div", {
                  ref: T,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: k,
                  className: en.Vg,
                  children: [
                      (0, a.jsx)(f.R, { size: "xxs", color: g.A.colors.ICON_MUTED, className: en.Ls }),
                      (0, a.jsx)(el, { user: n, guildId: i, channelId: s, id: p }),
                      (0, a.jsx)(es, { text: t ?? C, className: r()(en.qC, !S && en.qf) }),
                      (0, a.jsx)(c.D, {
                          innerRef: N,
                          "aria-label": U.intl.string(U.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), k();
                          },
                          focusProps: { ringTarget: T },
                      }),
                  ],
              })
    );
}
function ec(e) {
    let {
            user: t,
            guildId: n,
            channelId: i,
            game: s,
            widgetType: c,
            disableInteraction: d = !1,
            index: u,
            onRemoveGame: _,
            coverRef: g,
            className: m,
        } = e,
        f = l.useRef(null),
        { applicationId: x, comment: p, tags: I } = s,
        { coverImageUrl: E, gameName: v, isLoading: S } = (0, A.A)(x),
        k = { variant: "heading-sm/medium", color: "text-default" },
        O = h.default.getCurrentUser(),
        L = O?.id === t.id,
        D = 1 === (0, j.cv)(c),
        R = !d && L,
        P = R && (0, j.y9)(c),
        w = R && !D,
        { registerDragHandleRef: G } = (0, N.r)();
    if (S) return (0, a.jsx)(C.E, {});
    let y = () =>
            (0, a.jsx)(T.A, {
                coverRef: g,
                className: null == E || d ? void 0 : et.iL,
                imageSrc: E,
                gameName: v,
                applicationId: x,
                userId: t.id,
                disableInteraction: d,
                hideTooltip: !0,
            }),
        M = () =>
            (0, a.jsxs)("div", {
                ref: f,
                className: r()(en.Nr, m),
                children: [
                    w
                        ? (0, a.jsxs)("div", {
                              className: en.An,
                              children: [y(), (0, a.jsx)(b.jV, { buttonRef: G(s.applicationId), className: en.BU })],
                          })
                        : y(),
                    (0, a.jsxs)("div", {
                        className: en.zH,
                        children: [
                            d
                                ? (0, a.jsx)(o.D, { ...k, children: v })
                                : (0, a.jsx)(ea, { applicationId: x, userId: t.id, gameName: v, ...k }),
                            P
                                ? (0, a.jsx)(eo, {
                                      text: p,
                                      user: t,
                                      guildId: n,
                                      channelId: i,
                                      widgetType: c,
                                      applicationId: x,
                                  })
                                : (0, a.jsx)(er, { text: p, user: t, guildId: n, channelId: i }),
                            (0, a.jsx)(K, {
                                tags: I,
                                isCurrentUser: L,
                                widgetType: c,
                                applicationId: x,
                                disableInteraction: d,
                                className: en._A,
                            }),
                            !d && (0, a.jsx)(ee.o, { className: en.Ez, applicationId: x, guildId: n, channelId: i }),
                        ],
                    }),
                    !d &&
                        L &&
                        (0, a.jsx)($.A, {
                            game: s,
                            widgetType: c,
                            className: en.vS,
                            onRemove: () => _?.(s.applicationId),
                        }),
                ],
            });
    return w
        ? (0, a.jsx)(ei, {
              index: u ?? 0,
              widgetType: c,
              game: s,
              getWidth: () => f.current?.offsetWidth,
              children: M(),
          })
        : M();
}
