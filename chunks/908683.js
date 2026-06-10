i.d(t, { A: () => ec });
var n,
    l = i(627968),
    s = i(64700),
    a = i(503698),
    r = i.n(a);
i(926675);
var c = i(534514),
    u = i(939249),
    o = i(140735),
    d = i(834730),
    g = i(216964),
    m = i(661531),
    f = i(260598),
    x = i(22231),
    p = i(915089),
    I = i(409626),
    A = i(692969),
    E = i(201438),
    h = i(287809),
    j = i(562153),
    N = i(183555),
    T = i(735321),
    v = i(451395),
    _ = i(823016),
    S = i(788593),
    O = i(492280),
    C = i(990078),
    R = i(789645),
    b = i(147925);
i(321073);
var k = i(477782),
    D = i(980707),
    G = i(922016),
    L = i(761915),
    P = i(877784),
    w = i(53788),
    y = i(148795),
    M = i(214947),
    F = i(375708);
let U = {
        [L.X.BETTER_THAN_YOU]: { getText: () => F.intl.string(F.t.jbIRBE), icon: P.q },
        [L.X.CASUAL]: { getText: () => F.intl.string(F.t.xcFFv6), icon: P.q },
        [L.X.INTERMEDIATE]: { getText: () => F.intl.string(F.t["A/mIs/"]), icon: P.q },
        [L.X.EXPERT]: { getText: () => F.intl.string(F.t.RIOFc2), icon: P.q },
        [L.X.OBSESSED]: { getText: () => F.intl.string(F.t.isPJDu), icon: w.G },
        [L.X.LOVE_IT]: { getText: () => F.intl.string(F.t["1rN7BF"]), icon: w.G },
        [L.X.KIND_OF_LOVE_IT]: { getText: () => F.intl.string(F.t.bCBpVg), icon: w.G },
        [L.X.KIND_OF_HATE_IT]: { getText: () => F.intl.string(F.t["/WcmcP"]), icon: y.d },
        [L.X.RAGE_QUITTING]: { getText: () => F.intl.string(F.t["NXZ/MZ"]), icon: y.d },
        [L.X.OPEN_TO_PLAY]: { getText: () => F.intl.string(F.t.q30PoH), icon: M.$ },
        [L.X.LOOKING_FOR_GROUP]: { getText: () => F.intl.string(F.t.DWWAAQ), icon: M.$ },
        [L.X.LOOKING_FOR_TIPS]: { getText: () => F.intl.string(F.t.KQDVvH), icon: M.$ },
        [L.X.OPEN_TO_TEACH]: { getText: () => F.intl.string(F.t["5HhQo+"]), icon: M.$ },
        [L.X.LOOKING_TO_DISCUSS]: { getText: () => F.intl.string(F.t.GipOCq), icon: M.$ },
    },
    W = (e) => {
        let t = U[e];
        return null != t ? t : null;
    };
var H = (((n = {}).RADIO = "radio"), (n.CHECKBOX = "checkbox"), n);
let B = {
    skill_level: {
        getLabel: () => F.intl.string(F.t.MKqADM),
        type: "radio",
        tags: [L.X.CASUAL, L.X.INTERMEDIATE, L.X.EXPERT, L.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => F.intl.string(F.t["7/umul"]),
        type: "checkbox",
        tags: [L.X.OBSESSED, L.X.LOVE_IT, L.X.KIND_OF_LOVE_IT, L.X.KIND_OF_HATE_IT, L.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => F.intl.string(F.t["5Dez17"]),
        type: "checkbox",
        tags: [
            L.X.LOOKING_FOR_GROUP,
            L.X.OPEN_TO_PLAY,
            L.X.LOOKING_FOR_TIPS,
            L.X.OPEN_TO_TEACH,
            L.X.LOOKING_TO_DISCUSS,
        ],
    },
};
var V = i(767070);
let X = s.memo(function (e) {
    let { currentTags: t, onTagSelect: i, onNoneSelect: n, onClose: s } = e;
    return (0, l.jsx)(D.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": F.intl.string(F.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: V.VS,
        children: Object.entries(B).map((e) => {
            let s,
                [a, r] = e,
                c =
                    ((s = []),
                    r.type === H.RADIO &&
                        s.push(
                            (0, l.jsx)(
                                k.iD,
                                {
                                    id: `${a}-none`,
                                    group: a,
                                    label: F.intl.string(F.t.PoWNfe),
                                    checked: !r.tags.some((e) => t.includes(e)),
                                    action: () => n(r.tags),
                                },
                                "none",
                            ),
                        ),
                    r.tags.forEach((e) => {
                        let n = U[e];
                        null != n &&
                            (r.type === H.RADIO
                                ? s.push(
                                      (0, l.jsx)(
                                          k.iD,
                                          {
                                              id: e,
                                              group: a,
                                              label: n.getText(),
                                              checked: t.includes(e),
                                              action: () => i(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : s.push(
                                      (0, l.jsx)(
                                          k.sL,
                                          { id: e, label: n.getText(), checked: t.includes(e), action: () => i(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, l.jsx)(k.rX, { label: r.getLabel(), children: c }, a);
        }),
    });
});
function z(e) {
    let { tags: t, widgetType: i, applicationId: n, ref: a } = e,
        r = (0, s.useRef)(null),
        { trackUserProfileEditAction: c } = (0, N.NJ)(),
        o = (0, s.useMemo)(() => (null != t ? t : []), [t]),
        g = (0, s.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = new Set(o);
                if (t) {
                    let t = Object.values(B).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            l.delete(e);
                        }),
                        l.add(e),
                        c({ action: "TAG_ADDED", widgetEdited: i, gameId: n }));
                } else
                    l.has(e)
                        ? (l.delete(e), c({ action: "TAG_REMOVED", widgetEdited: i, gameId: n }))
                        : (l.add(e), c({ action: "TAG_ADDED", widgetEdited: i, gameId: n }));
                (0, T.s1)(i, n, Array.from(l));
            },
            [o, c, i, n],
        ),
        m = (0, s.useCallback)(
            (e) => {
                let t = new Set(o);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    c({ action: "TAG_REMOVED", widgetEdited: i, gameId: n }),
                    (0, T.s1)(i, n, Array.from(t));
            },
            [o, c, i, n],
        );
    return (0, l.jsx)(G.Y, {
        targetElementRef: r,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_TAG", widgetEdited: i });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(X, { currentTags: o, onTagSelect: g, onNoneSelect: m, onClose: t });
        },
        children: (e) =>
            (0, l.jsx)("div", {
                ref: (e) => (
                    null != e && ((r.current = e), (a.current = e)),
                    () => {
                        (r.current = null), (a.current = null);
                    }
                ),
                children: (0, l.jsx)(u.D, {
                    ...e,
                    className: V.c9,
                    "aria-label": F.intl.string(F.t.r6EJOu),
                    children: (0, l.jsx)(d.E, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: F.intl.string(F.t.fZSejy),
                    }),
                }),
            }),
    });
}
function K(e) {
    let { tags: t, isCurrentUser: i, widgetType: n, applicationId: a, className: c, disableInteraction: u = !1 } = e,
        o = t?.filter((e) => null != W(e)) ?? [],
        d = o.length > 0,
        g = i && !u && (0, T.mS)(n) && o.length < 20,
        { trackUserProfileAction: m } = (0, N.NJ)(),
        f = (0, s.useRef)(new Map()),
        x = (0, s.useRef)(null),
        p = (0, s.useRef)(null),
        [I, A] = (0, s.useState)(0),
        [E, h] = (0, s.useState)(!1),
        j = Z(x, p, o, f, A);
    if (
        ((0, s.useEffect)(
            () => (
                j(),
                window.addEventListener("resize", j),
                () => {
                    window.removeEventListener("resize", j);
                }
            ),
            [j, o?.join("")],
        ),
        !d && !g)
    )
        return null;
    let v = E ? o : o.slice(0, o.length - I);
    return (0, l.jsxs)("div", {
        className: r()(V.I4, c),
        children: [
            d &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("ul", {
                            className: V.Tw,
                            "aria-label": F.intl.string(F.t.EfjTi4),
                            children: v.map((e) =>
                                (0, l.jsx)(
                                    Y,
                                    {
                                        tag: e,
                                        isCurrentUser: i,
                                        applicationId: a,
                                        widgetType: n,
                                        ref: (t) => {
                                            null != t && f.current.set(e, t);
                                        },
                                        disableInteraction: u,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        I > 0 &&
                            (0, l.jsx)(J, {
                                buttonRef: x,
                                isExpanded: E,
                                numberOfOverflowingTags: I,
                                onExpandTags: () => {
                                    h(!0), m({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    h(!1), m({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: u,
                            }),
                    ],
                }),
            g && (0, l.jsx)(z, { tags: t, widgetType: n, applicationId: a, ref: p }),
        ],
    });
}
let Y = (e) => {
    let { tag: t, isCurrentUser: i, applicationId: n, widgetType: s, disableInteraction: a, ref: r } = e,
        { trackUserProfileEditAction: c } = (0, N.NJ)(),
        o = W(t);
    if (null == o) return null;
    let { getText: g, icon: m } = o;
    return (0, l.jsxs)("li", {
        className: V.Tc,
        ref: r,
        children: [
            (0, l.jsx)(m, { size: "xxs" }),
            (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "text-subtle", children: g() }),
            i &&
                !a &&
                (0, l.jsx)(C.m, {
                    text: F.intl.string(F.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, l.jsx)(u.D, {
                        onClick: () => {
                            (0, T.tg)(s, n, t), c({ action: "TAG_REMOVED", widgetEdited: s, gameId: n });
                        },
                        className: V.DT,
                        "aria-label": F.intl.formatToPlainString(F.t.GCn1ne, { tag: g() }),
                        children: (0, l.jsx)(R.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
};
function q(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function Q() {
    return (0, l.jsx)(b.A, { direction: b.A.Directions.LEFT, width: 12, height: 12, className: V.OW });
}
function J(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: i,
            onExpandTags: n,
            onCollapseTags: s,
            disableInteraction: a,
            buttonRef: r,
        } = e,
        c = t ? F.intl.string(F.t.z9VPrQ) : F.intl.string(F.t.mriLXL),
        o = t ? F.intl.string(F.t.z9VPrQ) : F.intl.formatToPlainString(F.t.F6iMs4, { count: i });
    return a
        ? (0, l.jsx)("div", { className: V.X1, ref: r, children: (0, l.jsx)(q, { numberOfOverflowingTags: i }) })
        : (0, l.jsx)(C.m, {
              text: c,
              ariaHidden: t,
              children: (0, l.jsx)(u.D, {
                  innerRef: r,
                  onClick: t ? s : n,
                  "aria-label": o,
                  className: t ? V.cS : V.X1,
                  children: t ? (0, l.jsx)(Q, {}) : (0, l.jsx)(q, { numberOfOverflowingTags: i }),
              }),
          });
}
let Z = (e, t, i, n, l) =>
    (0, s.useCallback)(() => {
        if (null == i) return void l(0);
        let s = e.current?.getBoundingClientRect().width ?? 0,
            a = t.current?.getBoundingClientRect().width ?? 0,
            r = a > 0 ? 8 : 4,
            c = 0,
            u = 0,
            o = n.current;
        for (let e = 0; e < i.length; e++) {
            let t = o.get(i[e]);
            if (null != t) {
                if ((u += t.offsetWidth + 4) > 296) break;
                c++;
            }
        }
        u = 0;
        for (let e = c; e < i.length; e++) {
            let t = o.get(i[e]);
            if (null != t) {
                if ((u += t.offsetWidth + 4) > 296 - s - a - r) break;
                c++;
            }
        }
        l(i.length - c);
    }, [e, t, i?.join(""), n, l]);
var $ = i(858808),
    ee = i(442356),
    et = i(529459);
function ei(e) {
    let { index: t, widgetType: i, game: n, children: s, getWidth: a } = e,
        { manageFocusOnReorder: r } = (0, _.r)();
    return (0, l.jsx)(v.mG, {
        index: t,
        itemId: n.applicationId,
        listType: i,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: n, widgetType: i, getWidth: a },
        "aria-label": F.intl.formatToPlainString(F.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, T.Un)(i, e, t),
        onEnd: () => r(n.applicationId),
        className: et.vF,
        dropBeforeClassName: et.A,
        dropAfterClassName: et.Ze,
        draggingClassName: et.Id,
        children: s,
    });
}
function en(e) {
    let { applicationId: t, userId: i, gameName: n, ...s } = e,
        a = (0, A.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: I.Ob.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        });
    return null == a
        ? (0, l.jsx)(c.D, { ...s, children: n })
        : (0, l.jsx)(c.D, { ...s, children: (0, l.jsx)(u.D, { onClick: a, className: et.sd, children: n }) });
}
function el(e) {
    let { user: t, guildId: i, channelId: n, id: s } = e;
    return (0, l.jsx)(o.A, { id: s, children: F.intl.format(F.t.TM0XDY, { name: j.Ay.getName(i, n, t) }) });
}
function es(e) {
    let { text: t, className: i } = e;
    return (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", className: i, children: t });
}
function ea(e) {
    let { text: t, user: i, guildId: n, channelId: s } = e,
        a = (0, p.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, l.jsx)(g.c, { size: "xxs", color: m.A.colors.ICON_MUTED, className: et.Ls }),
                  (0, l.jsx)(el, { user: i, guildId: n, channelId: s, id: a }),
                  (0, l.jsx)(es, { text: t }),
              ],
          });
}
function er(e) {
    let { text: t, user: i, guildId: n, channelId: a, widgetType: c, applicationId: d } = e,
        g = (0, p.GV)(),
        I = (0, p.GV)(),
        { trackUserProfileEditAction: A } = (0, N.NJ)(),
        [E, h] = s.useState("idle"),
        [j, v] = s.useState(t ?? ""),
        _ = s.useRef(null),
        S = s.useRef(null),
        O = F.intl.string(F.t.xKSfBT),
        C = null != t && "" !== t.trim(),
        R = s.useCallback(() => {
            A({ action: "PRESS_ADD_COMMENTARY", widgetEdited: c }), h("editing");
        }, [c, A]),
        b = s.useCallback(() => {
            let e = j.trim(),
                i = e !== (t ?? "").trim();
            (0, T.oc)(c, d, "" !== e ? e : void 0),
                h("completed"),
                i && A({ action: "COMMENTARY_EDITED", widgetEdited: c, gameId: d });
        }, [c, d, j, t, A]),
        k = s.useCallback((e) => {
            v(e);
        }, []);
    return (
        s.useEffect(() => {
            "editing" === E && v(t ?? "");
        }, [t, E]),
        s.useEffect(() => {
            "completed" === E && _.current?.focus();
        }, [E]),
        "editing" === E
            ? (0, l.jsxs)("div", {
                  className: et.kS,
                  children: [
                      (0, l.jsx)(o.A, { tag: "label", htmlFor: g, children: F.intl.string(F.t.JxKXeT) }),
                      (0, l.jsx)(f.f, {
                          id: g,
                          value: j,
                          placeholder: O,
                          onChange: k,
                          onBlur: b,
                          rows: 3,
                          autoFocus: "editing" === E,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), b());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  ref: S,
                  role: "group",
                  "aria-labelledby": I,
                  onClick: R,
                  className: et.Vg,
                  children: [
                      (0, l.jsx)(x.R, { size: "xxs", color: m.A.colors.ICON_MUTED, className: et.Ls }),
                      (0, l.jsx)(el, { user: i, guildId: n, channelId: a, id: I }),
                      (0, l.jsx)(es, { text: t ?? O, className: r()(et.qC, !C && et.qf) }),
                      (0, l.jsx)(u.D, {
                          innerRef: _,
                          "aria-label": F.intl.string(F.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), R();
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
            guildId: i,
            channelId: n,
            game: a,
            widgetType: u,
            disableInteraction: o = !1,
            index: d,
            onRemoveGame: g,
            coverRef: m,
            className: f,
        } = e,
        x = s.useRef(null),
        { applicationId: p, comment: I, tags: A } = a,
        { coverImageUrl: j, gameName: N, isLoading: C } = (0, E.A)(p),
        R = { variant: "heading-sm/medium", color: "text-default" },
        b = h.default.getCurrentUser(),
        k = b?.id === t.id,
        D = 1 === (0, T.cv)(u),
        G = !o && k,
        L = G && (0, T.y9)(u),
        P = G && !D,
        { registerDragHandleRef: w } = (0, _.r)();
    if (C) return (0, l.jsx)(O.E, {});
    let y = () =>
            (0, l.jsx)(S.A, {
                coverRef: m,
                className: null == j || o ? void 0 : ee.iL,
                imageSrc: j,
                gameName: N,
                applicationId: p,
                userId: t.id,
                disableInteraction: o,
                hideTooltip: !0,
            }),
        M = () =>
            (0, l.jsxs)("div", {
                ref: x,
                className: r()(et.Nr, f),
                children: [
                    P
                        ? (0, l.jsxs)("div", {
                              className: et.An,
                              children: [y(), (0, l.jsx)(v.jV, { buttonRef: w(a.applicationId), className: et.BU })],
                          })
                        : y(),
                    (0, l.jsxs)("div", {
                        className: et.zH,
                        children: [
                            o
                                ? (0, l.jsx)(c.D, { ...R, children: N })
                                : (0, l.jsx)(en, { applicationId: p, userId: t.id, gameName: N, ...R }),
                            L
                                ? (0, l.jsx)(er, {
                                      text: I,
                                      user: t,
                                      guildId: i,
                                      channelId: n,
                                      widgetType: u,
                                      applicationId: p,
                                  })
                                : (0, l.jsx)(ea, { text: I, user: t, guildId: i, channelId: n }),
                            (0, l.jsx)(K, {
                                tags: A,
                                isCurrentUser: k,
                                widgetType: u,
                                applicationId: p,
                                disableInteraction: o,
                                className: et._A,
                            }),
                        ],
                    }),
                    !o &&
                        k &&
                        (0, l.jsx)($.A, {
                            game: a,
                            widgetType: u,
                            className: et.vS,
                            onRemove: () => g?.(a.applicationId),
                        }),
                ],
            });
    return P
        ? (0, l.jsx)(ei, {
              index: d ?? 0,
              widgetType: u,
              game: a,
              getWidth: () => x.current?.offsetWidth,
              children: M(),
          })
        : M();
}
