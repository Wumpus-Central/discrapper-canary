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
    g = n(216964),
    m = n(661531),
    _ = n(260598),
    f = n(22231),
    x = n(915089),
    p = n(409626),
    I = n(692969),
    h = n(201438),
    A = n(287809),
    E = n(562153),
    v = n(183555),
    j = n(735321),
    N = n(451395),
    C = n(823016),
    S = n(788593),
    b = n(492280),
    T = n(990078),
    O = n(789645),
    k = n(147925);
n(321073);
var L = n(477782),
    R = n(550079),
    D = n(922016),
    P = n(761915),
    G = n(877784),
    y = n(53788),
    w = n(148795),
    M = n(214947),
    U = n(985018);
let F = {
        [P.X.BETTER_THAN_YOU]: { getText: () => U.intl.string(U.t.jbIRBE), icon: G.q },
        [P.X.CASUAL]: { getText: () => U.intl.string(U.t.xcFFv6), icon: G.q },
        [P.X.INTERMEDIATE]: { getText: () => U.intl.string(U.t["A/mIs/"]), icon: G.q },
        [P.X.EXPERT]: { getText: () => U.intl.string(U.t.RIOFc2), icon: G.q },
        [P.X.OBSESSED]: { getText: () => U.intl.string(U.t.isPJDu), icon: y.G },
        [P.X.LOVE_IT]: { getText: () => U.intl.string(U.t["1rN7BF"]), icon: y.G },
        [P.X.KIND_OF_LOVE_IT]: { getText: () => U.intl.string(U.t.bCBpVg), icon: y.G },
        [P.X.KIND_OF_HATE_IT]: { getText: () => U.intl.string(U.t["/WcmcP"]), icon: w.d },
        [P.X.RAGE_QUITTING]: { getText: () => U.intl.string(U.t["NXZ/MZ"]), icon: w.d },
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
var B = (((i = {}).RADIO = "radio"), (i.CHECKBOX = "checkbox"), i);
let H = {
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
    return (0, a.jsx)(R.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": U.intl.string(U.t.r6EJOu),
        onClose: l,
        onSelect: () => {},
        className: V.VS,
        children: Object.entries(H).map((e) => {
            let l,
                [s, r] = e,
                o =
                    ((l = []),
                    r.type === B.RADIO &&
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
                            (r.type === B.RADIO
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
        g = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = new Set(d);
                if (t) {
                    let t = Object.values(H).find((t) => t.tags.includes(e));
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
        m = (0, l.useCallback)(
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
    return (0, a.jsx)(D.Y, {
        targetElementRef: r,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            o({ action: "PRESS_ADD_TAG", widgetEdited: n });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(X, { currentTags: d, onTagSelect: g, onNoneSelect: m, onClose: t });
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
function Y(e) {
    let { tags: t, isCurrentUser: n, widgetType: i, applicationId: s, className: o, disableInteraction: c = !1 } = e,
        d = t?.filter((e) => null != W(e)) ?? [],
        u = d.length > 0,
        g = n && !c && (0, j.mS)(i) && d.length < 20,
        { trackUserProfileAction: m } = (0, v.NJ)(),
        _ = (0, l.useRef)(new Map()),
        f = (0, l.useRef)(null),
        x = (0, l.useRef)(null),
        [p, I] = (0, l.useState)(0),
        [h, A] = (0, l.useState)(!1),
        E = J(f, x, d, _, I);
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
        !u && !g)
    )
        return null;
    let N = h ? d : d.slice(0, d.length - p);
    return (0, a.jsxs)("div", {
        className: r()(V.I4, o),
        children: [
            u &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("ul", {
                            className: V.Tw,
                            "aria-label": U.intl.string(U.t.EfjTi4),
                            children: N.map((e) =>
                                (0, a.jsx)(
                                    K,
                                    {
                                        tag: e,
                                        isCurrentUser: n,
                                        applicationId: s,
                                        widgetType: i,
                                        ref: (t) => {
                                            null != t && _.current.set(e, t);
                                        },
                                        disableInteraction: c,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        p > 0 &&
                            (0, a.jsx)(Z, {
                                buttonRef: f,
                                isExpanded: h,
                                numberOfOverflowingTags: p,
                                onExpandTags: () => {
                                    A(!0), m({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    A(!1), m({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: c,
                            }),
                    ],
                }),
            g && (0, a.jsx)(z, { tags: t, widgetType: i, applicationId: s, ref: x }),
        ],
    });
}
let K = (e) => {
    let { tag: t, isCurrentUser: n, applicationId: i, widgetType: l, disableInteraction: s, ref: r } = e,
        { trackUserProfileEditAction: o } = (0, v.NJ)(),
        d = W(t);
    if (null == d) return null;
    let { getText: g, icon: m } = d;
    return (0, a.jsxs)("li", {
        className: V.Tc,
        ref: r,
        children: [
            (0, a.jsx)(m, { size: "xxs" }),
            (0, a.jsx)(u.E, { variant: "text-xxs/medium", color: "text-subtle", children: g() }),
            n &&
                !s &&
                (0, a.jsx)(T.m, {
                    text: U.intl.string(U.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, a.jsx)(c.D, {
                        onClick: () => {
                            (0, j.tg)(l, i, t), o({ action: "TAG_REMOVED", widgetEdited: l, gameId: i });
                        },
                        className: V.DT,
                        "aria-label": U.intl.formatToPlainString(U.t.GCn1ne, { tag: g() }),
                        children: (0, a.jsx)(O.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
};
function q(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, a.jsx)(u.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function Q() {
    return (0, a.jsx)(k.A, { direction: k.A.Directions.LEFT, width: 12, height: 12, className: V.OW });
}
function Z(e) {
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
        : (0, a.jsx)(T.m, {
              text: o,
              ariaHidden: t,
              children: (0, a.jsx)(c.D, {
                  innerRef: r,
                  onClick: t ? l : i,
                  "aria-label": d,
                  className: t ? V.cS : V.X1,
                  children: t ? (0, a.jsx)(Q, {}) : (0, a.jsx)(q, { numberOfOverflowingTags: n }),
              }),
          });
}
let J = (e, t, n, i, a) =>
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
        { manageFocusOnReorder: r } = (0, C.r)();
    return (0, a.jsx)(N.mG, {
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
                  (0, a.jsx)(g.c, { size: "xxs", color: m.A.colors.ICON_MUTED, className: en.Ls }),
                  (0, a.jsx)(el, { user: n, guildId: i, channelId: l, id: s }),
                  (0, a.jsx)(es, { text: t }),
              ],
          });
}
function eo(e) {
    let { text: t, user: n, guildId: i, channelId: s, widgetType: o, applicationId: u } = e,
        g = (0, x.GV)(),
        p = (0, x.GV)(),
        { trackUserProfileEditAction: I } = (0, v.NJ)(),
        [h, A] = l.useState("idle"),
        [E, N] = l.useState(t ?? ""),
        C = l.useRef(null),
        S = l.useRef(null),
        b = U.intl.string(U.t.xKSfBT),
        T = null != t && "" !== t.trim(),
        O = l.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: o }), A("editing");
        }, [o, I]),
        k = l.useCallback(() => {
            let e = E.trim(),
                n = e !== (t ?? "").trim();
            (0, j.oc)(o, u, "" !== e ? e : void 0),
                A("completed"),
                n && I({ action: "COMMENTARY_EDITED", widgetEdited: o, gameId: u });
        }, [o, u, E, t, I]),
        L = l.useCallback((e) => {
            N(e);
        }, []);
    return (
        l.useEffect(() => {
            "editing" === h && N(t ?? "");
        }, [t, h]),
        l.useEffect(() => {
            "completed" === h && C.current?.focus();
        }, [h]),
        "editing" === h
            ? (0, a.jsxs)("div", {
                  className: en.kS,
                  children: [
                      (0, a.jsx)(d.A, { tag: "label", htmlFor: g, children: U.intl.string(U.t.JxKXeT) }),
                      (0, a.jsx)(_.f, {
                          id: g,
                          value: E,
                          placeholder: b,
                          onChange: L,
                          onBlur: k,
                          rows: 3,
                          autoFocus: "editing" === h,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, a.jsxs)("div", {
                  ref: S,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: O,
                  className: en.Vg,
                  children: [
                      (0, a.jsx)(f.R, { size: "xxs", color: m.A.colors.ICON_MUTED, className: en.Ls }),
                      (0, a.jsx)(el, { user: n, guildId: i, channelId: s, id: p }),
                      (0, a.jsx)(es, { text: t ?? b, className: r()(en.qC, !T && en.qf) }),
                      (0, a.jsx)(c.D, {
                          innerRef: C,
                          "aria-label": U.intl.string(U.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), O();
                          },
                          focusProps: { ringTarget: S },
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
            onRemoveGame: g,
            coverRef: m,
            className: _,
        } = e,
        f = l.useRef(null),
        { applicationId: x, comment: p, tags: I } = s,
        { coverImageUrl: E, gameName: v, isLoading: T } = (0, h.A)(x),
        O = { variant: "heading-sm/medium", color: "text-default" },
        k = A.default.getCurrentUser(),
        L = k?.id === t.id,
        R = 1 === (0, j.cv)(c),
        D = !d && L,
        P = D && (0, j.y9)(c),
        G = D && !R,
        { registerDragHandleRef: y } = (0, C.r)();
    if (T) return (0, a.jsx)(b.E, {});
    let w = () =>
            (0, a.jsx)(S.A, {
                coverRef: m,
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
                className: r()(en.Nr, _),
                children: [
                    G
                        ? (0, a.jsxs)("div", {
                              className: en.An,
                              children: [w(), (0, a.jsx)(N.jV, { buttonRef: y(s.applicationId), className: en.BU })],
                          })
                        : w(),
                    (0, a.jsxs)("div", {
                        className: en.zH,
                        children: [
                            d
                                ? (0, a.jsx)(o.D, { ...O, children: v })
                                : (0, a.jsx)(ea, { applicationId: x, userId: t.id, gameName: v, ...O }),
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
                            (0, a.jsx)(Y, {
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
                            onRemove: () => g?.(s.applicationId),
                        }),
                ],
            });
    return G
        ? (0, a.jsx)(ei, {
              index: u ?? 0,
              widgetType: c,
              game: s,
              getWidth: () => f.current?.offsetWidth,
              children: M(),
          })
        : M();
}
