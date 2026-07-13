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
    m = i(216964),
    g = i(661531),
    f = i(260598),
    x = i(22231),
    I = i(915089),
    p = i(409626),
    E = i(692969),
    h = i(201438),
    A = i(562153),
    j = i(183555),
    N = i(735321),
    v = i(451395),
    S = i(823016),
    T = i(788593),
    _ = i(492280),
    k = i(990078),
    C = i(789645),
    R = i(147925);
i(321073);
var O = i(477782),
    b = i(980707),
    D = i(922016),
    L = i(761915),
    G = i(877784),
    w = i(53788),
    P = i(148795),
    y = i(214947),
    M = i(126601),
    F = i(375708);
let U = (0, M.E)({ [M.K.RIBBON]: G.q, [M.K.THUMBS_UP]: w.G, [M.K.THUMBS_DOWN]: P.d, [M.K.FRIENDS]: y.$ });
function W(e) {
    let t = U[e];
    return null != t ? t : null;
}
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
let z = s.memo(function (e) {
    let { currentTags: t, onTagSelect: i, onNoneSelect: n, onClose: s } = e;
    return (0, l.jsx)(b.W, {
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
                                O.iD,
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
                                          O.iD,
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
                                          O.sL,
                                          { id: e, label: n.getText(), checked: t.includes(e), action: () => i(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, l.jsx)(O.rX, { label: r.getLabel(), children: c }, a);
        }),
    });
});
function K(e) {
    let { tags: t, widgetType: i, applicationId: n, ref: a } = e,
        r = (0, s.useRef)(null),
        { trackUserProfileEditAction: c } = (0, j.NJ)(),
        o = (0, s.useMemo)(() => (null != t ? t : []), [t]),
        m = (0, s.useCallback)(
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
                (0, N.s1)(i, n, Array.from(l));
            },
            [o, c, i, n],
        ),
        g = (0, s.useCallback)(
            (e) => {
                let t = new Set(o);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    c({ action: "TAG_REMOVED", widgetEdited: i, gameId: n }),
                    (0, N.s1)(i, n, Array.from(t));
            },
            [o, c, i, n],
        );
    return (0, l.jsx)(D.Y, {
        targetElementRef: r,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_TAG", widgetEdited: i });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(z, { currentTags: o, onTagSelect: m, onNoneSelect: g, onClose: t });
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
function X(e) {
    let { tags: t, allowEditing: i, widgetType: n, applicationId: a, className: c, disableInteraction: u = !1 } = e,
        o = i && !u,
        d = t?.filter((e) => null != W(e)) ?? [],
        m = d.length > 0,
        g = o && (0, N.mS)(n) && d.length < 20,
        { trackUserProfileAction: f } = (0, j.NJ)(),
        x = (0, s.useRef)(new Map()),
        I = (0, s.useRef)(null),
        p = (0, s.useRef)(null),
        [E, h] = (0, s.useState)(0),
        [A, v] = (0, s.useState)(!1),
        S = Z(I, p, d, x, h);
    if (
        ((0, s.useEffect)(
            () => (
                S(),
                window.addEventListener("resize", S),
                () => {
                    window.removeEventListener("resize", S);
                }
            ),
            [S, d?.join("")],
        ),
        !m && !g)
    )
        return null;
    let T = A ? d : d.slice(0, d.length - E);
    return (0, l.jsxs)("div", {
        className: r()(V.I4, c),
        children: [
            m &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("ul", {
                            className: V.Tw,
                            "aria-label": F.intl.string(F.t.EfjTi4),
                            children: T.map((e) =>
                                (0, l.jsx)(
                                    Y,
                                    {
                                        tag: e,
                                        showEditingControls: o,
                                        applicationId: a,
                                        widgetType: n,
                                        ref: (t) => {
                                            null != t && x.current.set(e, t);
                                        },
                                    },
                                    e,
                                ),
                            ),
                        }),
                        E > 0 &&
                            (0, l.jsx)(Q, {
                                buttonRef: I,
                                isExpanded: A,
                                numberOfOverflowingTags: E,
                                onExpandTags: () => {
                                    v(!0), f({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    v(!1), f({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: u,
                            }),
                    ],
                }),
            g && (0, l.jsx)(K, { tags: t, widgetType: n, applicationId: a, ref: p }),
        ],
    });
}
function Y(e) {
    let { tag: t, applicationId: i, widgetType: n, showEditingControls: s = !1, ref: a } = e,
        { trackUserProfileEditAction: r } = (0, j.NJ)(),
        c = W(t);
    if (null == c) return null;
    let { getText: o, icon: m } = c;
    return (0, l.jsxs)("li", {
        className: V.Tc,
        ref: a,
        children: [
            (0, l.jsx)(m, { size: "xxs" }),
            (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "text-subtle", children: o() }),
            s &&
                (0, l.jsx)(k.m, {
                    text: F.intl.string(F.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, l.jsx)(u.D, {
                        onClick: function () {
                            (0, N.tg)(n, i, t), r({ action: "TAG_REMOVED", widgetEdited: n, gameId: i });
                        },
                        className: V.DT,
                        "aria-label": F.intl.formatToPlainString(F.t.GCn1ne, { tag: o() }),
                        children: (0, l.jsx)(C.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
function q(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function J() {
    return (0, l.jsx)(R.A, { direction: R.A.Directions.LEFT, width: 12, height: 12, className: V.OW });
}
function Q(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: i,
            onExpandTags: n,
            onCollapseTags: s,
            disableInteraction: a,
            buttonRef: c,
        } = e,
        o = t ? F.intl.string(F.t.z9VPrQ) : F.intl.string(F.t.mriLXL),
        d = t ? F.intl.string(F.t.z9VPrQ) : F.intl.formatToPlainString(F.t.F6iMs4, { count: i });
    return a
        ? (0, l.jsx)("div", {
              className: r()(V.X1, V.r9),
              ref: c,
              children: (0, l.jsx)(q, { numberOfOverflowingTags: i }),
          })
        : (0, l.jsx)(k.m, {
              text: o,
              ariaHidden: t,
              children: (0, l.jsx)(u.D, {
                  innerRef: c,
                  onClick: t ? s : n,
                  "aria-label": d,
                  className: t ? V.cS : V.X1,
                  children: t ? (0, l.jsx)(J, {}) : (0, l.jsx)(q, { numberOfOverflowingTags: i }),
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
        { manageFocusOnReorder: r } = (0, S.r)();
    return (0, l.jsx)(v.mG, {
        index: t,
        itemId: n.applicationId,
        listType: i,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: n, widgetType: i, getWidth: a },
        "aria-label": F.intl.formatToPlainString(F.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, N.Un)(i, e, t),
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
        a = (0, E.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: p.GameProfileSources.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        });
    return null == a
        ? (0, l.jsx)(c.D, { ...s, children: n })
        : (0, l.jsx)(c.D, { ...s, children: (0, l.jsx)(u.D, { onClick: a, className: et.sd, children: n }) });
}
function el(e) {
    let { user: t, guildId: i, channelId: n, id: s } = e;
    return (0, l.jsx)(o.A, { id: s, children: F.intl.format(F.t.TM0XDY, { name: A.Ay.getName(i, n, t) }) });
}
function es(e) {
    let { text: t, className: i } = e;
    return (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", className: i, children: t });
}
function ea(e) {
    let { text: t, user: i, guildId: n, channelId: s } = e,
        a = (0, I.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, l.jsx)(m.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: et.Ls }),
                  (0, l.jsx)(el, { user: i, guildId: n, channelId: s, id: a }),
                  (0, l.jsx)(es, { text: t }),
              ],
          });
}
function er(e) {
    let { text: t, user: i, guildId: n, channelId: a, widgetType: c, applicationId: d } = e,
        m = (0, I.GV)(),
        p = (0, I.GV)(),
        { trackUserProfileEditAction: E } = (0, j.NJ)(),
        [h, A] = s.useState("idle"),
        [v, S] = s.useState(t ?? ""),
        T = s.useRef(null),
        _ = s.useRef(null),
        k = F.intl.string(F.t.xKSfBT),
        C = null != t && "" !== t.trim(),
        R = s.useCallback(() => {
            E({ action: "PRESS_ADD_COMMENTARY", widgetEdited: c }), A("editing");
        }, [c, E]),
        O = s.useCallback(() => {
            let e = v.trim(),
                i = e !== (t ?? "").trim();
            (0, N.oc)(c, d, "" !== e ? e : void 0),
                A("completed"),
                i && E({ action: "COMMENTARY_EDITED", widgetEdited: c, gameId: d });
        }, [c, d, v, t, E]),
        b = s.useCallback((e) => {
            S(e);
        }, []);
    return (
        s.useEffect(() => {
            "editing" === h && S(t ?? "");
        }, [t, h]),
        s.useEffect(() => {
            "completed" === h && T.current?.focus();
        }, [h]),
        "editing" === h
            ? (0, l.jsxs)("div", {
                  className: et.kS,
                  children: [
                      (0, l.jsx)(o.A, { tag: "label", htmlFor: m, children: F.intl.string(F.t.JxKXeT) }),
                      (0, l.jsx)(f.f, {
                          id: m,
                          value: v,
                          placeholder: k,
                          onChange: b,
                          onBlur: O,
                          rows: 3,
                          autoFocus: "editing" === h,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), O());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  ref: _,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: R,
                  className: et.Vg,
                  children: [
                      (0, l.jsx)(x.R, { size: "xxs", color: g.A.colors.ICON_MUTED, className: et.Ls }),
                      (0, l.jsx)(el, { user: i, guildId: n, channelId: a, id: p }),
                      (0, l.jsx)(es, { text: t ?? k, className: r()(et.qC, !C && et.qf) }),
                      (0, l.jsx)(u.D, {
                          innerRef: T,
                          "aria-label": F.intl.string(F.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), R();
                          },
                          focusProps: { ringTarget: _ },
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
            allowEditing: o,
            disableInteraction: d = !1,
            index: m,
            onRemoveGame: g,
            coverRef: f,
            className: x,
        } = e,
        I = s.useRef(null),
        { applicationId: p, comment: E, tags: A } = a,
        { coverImageUrl: j, gameName: k, isLoading: C } = (0, h.A)(p),
        R = { variant: "heading-sm/medium", color: "text-default" },
        O = o && !d,
        b = 1 === (0, N.cv)(u),
        D = O && (0, N.y9)(u),
        L = O && !b,
        { registerDragHandleRef: G } = (0, S.r)();
    if (C) return (0, l.jsx)(_.E, {});
    function w() {
        return (0, l.jsx)(T.A, {
            coverRef: f,
            className: null == j || d ? void 0 : ee.iL,
            imageSrc: j,
            gameName: k,
            applicationId: p,
            userId: t.id,
            disableInteraction: d,
            hideTooltip: !0,
        });
    }
    function P() {
        return (0, l.jsxs)("div", {
            ref: I,
            className: r()(et.Nr, x),
            children: [
                L
                    ? (0, l.jsxs)("div", {
                          className: et.An,
                          children: [w(), (0, l.jsx)(v.jV, { buttonRef: G(a.applicationId), className: et.BU })],
                      })
                    : w(),
                (0, l.jsxs)("div", {
                    className: et.zH,
                    children: [
                        d
                            ? (0, l.jsx)(c.D, { ...R, children: k })
                            : (0, l.jsx)(en, { applicationId: p, userId: t.id, gameName: k, ...R }),
                        D
                            ? (0, l.jsx)(er, {
                                  text: E,
                                  user: t,
                                  guildId: i,
                                  channelId: n,
                                  widgetType: u,
                                  applicationId: p,
                              })
                            : (0, l.jsx)(ea, { text: E, user: t, guildId: i, channelId: n }),
                        (0, l.jsx)(X, {
                            tags: A,
                            allowEditing: o,
                            widgetType: u,
                            applicationId: p,
                            disableInteraction: d,
                            className: et._A,
                        }),
                    ],
                }),
                O &&
                    (0, l.jsx)($.A, { game: a, widgetType: u, className: et.vS, onRemove: () => g?.(a.applicationId) }),
            ],
        });
    }
    return L
        ? (0, l.jsx)(ei, {
              index: m ?? 0,
              widgetType: u,
              game: a,
              getWidth: () => I.current?.offsetWidth,
              children: P(),
          })
        : P();
}
