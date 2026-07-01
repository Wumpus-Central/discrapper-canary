i.d(t, { A: () => ea });
var n,
    l = i(627968),
    s = i(64700),
    r = i(503698),
    a = i.n(r);
i(926675);
var c = i(534514),
    u = i(939249),
    o = i(140735),
    d = i(834730),
    g = i(216964),
    m = i(661531),
    f = i(260598),
    x = i(22231),
    I = i(915089),
    p = i(409626),
    E = i(692969),
    A = i(201438),
    h = i(562153),
    j = i(183555),
    T = i(735321),
    N = i(451395),
    v = i(823016),
    _ = i(788593),
    S = i(492280),
    O = i(990078),
    k = i(789645),
    C = i(147925);
i(321073);
var R = i(477782),
    b = i(980707),
    D = i(922016),
    L = i(761915),
    G = i(877784),
    P = i(53788),
    w = i(148795),
    y = i(214947),
    M = i(375708);
let F = {
    [L.X.BETTER_THAN_YOU]: { getText: () => M.intl.string(M.t.jbIRBE), icon: G.q },
    [L.X.CASUAL]: { getText: () => M.intl.string(M.t.xcFFv6), icon: G.q },
    [L.X.INTERMEDIATE]: { getText: () => M.intl.string(M.t["A/mIs/"]), icon: G.q },
    [L.X.EXPERT]: { getText: () => M.intl.string(M.t.RIOFc2), icon: G.q },
    [L.X.OBSESSED]: { getText: () => M.intl.string(M.t.isPJDu), icon: P.G },
    [L.X.LOVE_IT]: { getText: () => M.intl.string(M.t["1rN7BF"]), icon: P.G },
    [L.X.KIND_OF_LOVE_IT]: { getText: () => M.intl.string(M.t.bCBpVg), icon: P.G },
    [L.X.KIND_OF_HATE_IT]: { getText: () => M.intl.string(M.t["/WcmcP"]), icon: w.d },
    [L.X.RAGE_QUITTING]: { getText: () => M.intl.string(M.t["NXZ/MZ"]), icon: w.d },
    [L.X.OPEN_TO_PLAY]: { getText: () => M.intl.string(M.t.q30PoH), icon: y.$ },
    [L.X.LOOKING_FOR_GROUP]: { getText: () => M.intl.string(M.t.DWWAAQ), icon: y.$ },
    [L.X.LOOKING_FOR_TIPS]: { getText: () => M.intl.string(M.t.KQDVvH), icon: y.$ },
    [L.X.OPEN_TO_TEACH]: { getText: () => M.intl.string(M.t["5HhQo+"]), icon: y.$ },
    [L.X.LOOKING_TO_DISCUSS]: { getText: () => M.intl.string(M.t.GipOCq), icon: y.$ },
};
function U(e) {
    let t = F[e];
    return null != t ? t : null;
}
var W = (((n = {}).RADIO = "radio"), (n.CHECKBOX = "checkbox"), n);
let H = {
    skill_level: {
        getLabel: () => M.intl.string(M.t.MKqADM),
        type: "radio",
        tags: [L.X.CASUAL, L.X.INTERMEDIATE, L.X.EXPERT, L.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => M.intl.string(M.t["7/umul"]),
        type: "checkbox",
        tags: [L.X.OBSESSED, L.X.LOVE_IT, L.X.KIND_OF_LOVE_IT, L.X.KIND_OF_HATE_IT, L.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => M.intl.string(M.t["5Dez17"]),
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
var B = i(767070);
let X = s.memo(function (e) {
    let { currentTags: t, onTagSelect: i, onNoneSelect: n, onClose: s } = e;
    return (0, l.jsx)(b.W, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": M.intl.string(M.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: B.VS,
        children: Object.entries(H).map((e) => {
            let s,
                [r, a] = e,
                c =
                    ((s = []),
                    a.type === W.RADIO &&
                        s.push(
                            (0, l.jsx)(
                                R.iD,
                                {
                                    id: `${r}-none`,
                                    group: r,
                                    label: M.intl.string(M.t.PoWNfe),
                                    checked: !a.tags.some((e) => t.includes(e)),
                                    action: () => n(a.tags),
                                },
                                "none",
                            ),
                        ),
                    a.tags.forEach((e) => {
                        let n = F[e];
                        null != n &&
                            (a.type === W.RADIO
                                ? s.push(
                                      (0, l.jsx)(
                                          R.iD,
                                          {
                                              id: e,
                                              group: r,
                                              label: n.getText(),
                                              checked: t.includes(e),
                                              action: () => i(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : s.push(
                                      (0, l.jsx)(
                                          R.sL,
                                          { id: e, label: n.getText(), checked: t.includes(e), action: () => i(e, !1) },
                                          e,
                                      ),
                                  ));
                    }),
                    s);
            return (0, l.jsx)(R.rX, { label: a.getLabel(), children: c }, r);
        }),
    });
});
function V(e) {
    let { tags: t, widgetType: i, applicationId: n, ref: r } = e,
        a = (0, s.useRef)(null),
        { trackUserProfileEditAction: c } = (0, j.NJ)(),
        o = (0, s.useMemo)(() => (null != t ? t : []), [t]),
        g = (0, s.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = new Set(o);
                if (t) {
                    let t = Object.values(H).find((t) => t.tags.includes(e));
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
    return (0, l.jsx)(D.Y, {
        targetElementRef: a,
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
                    null != e && ((a.current = e), (r.current = e)),
                    () => {
                        (a.current = null), (r.current = null);
                    }
                ),
                children: (0, l.jsx)(u.D, {
                    ...e,
                    className: B.c9,
                    "aria-label": M.intl.string(M.t.r6EJOu),
                    children: (0, l.jsx)(d.E, {
                        variant: "text-xxs/medium",
                        color: "none",
                        children: M.intl.string(M.t.fZSejy),
                    }),
                }),
            }),
    });
}
function z(e) {
    let { tags: t, allowEditing: i, widgetType: n, applicationId: r, className: c, disableInteraction: u = !1 } = e,
        o = i && !u,
        d = t?.filter((e) => null != U(e)) ?? [],
        g = d.length > 0,
        m = o && (0, T.mS)(n) && d.length < 20,
        { trackUserProfileAction: f } = (0, j.NJ)(),
        x = (0, s.useRef)(new Map()),
        I = (0, s.useRef)(null),
        p = (0, s.useRef)(null),
        [E, A] = (0, s.useState)(0),
        [h, N] = (0, s.useState)(!1),
        v = J(I, p, d, x, A);
    if (
        ((0, s.useEffect)(
            () => (
                v(),
                window.addEventListener("resize", v),
                () => {
                    window.removeEventListener("resize", v);
                }
            ),
            [v, d?.join("")],
        ),
        !g && !m)
    )
        return null;
    let _ = h ? d : d.slice(0, d.length - E);
    return (0, l.jsxs)("div", {
        className: a()(B.I4, c),
        children: [
            g &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("ul", {
                            className: B.Tw,
                            "aria-label": M.intl.string(M.t.EfjTi4),
                            children: _.map((e) =>
                                (0, l.jsx)(
                                    K,
                                    {
                                        tag: e,
                                        showEditingControls: o,
                                        applicationId: r,
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
                                isExpanded: h,
                                numberOfOverflowingTags: E,
                                onExpandTags: () => {
                                    N(!0), f({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    N(!1), f({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: u,
                            }),
                    ],
                }),
            m && (0, l.jsx)(V, { tags: t, widgetType: n, applicationId: r, ref: p }),
        ],
    });
}
function K(e) {
    let { tag: t, applicationId: i, widgetType: n, showEditingControls: s = !1, ref: r } = e,
        { trackUserProfileEditAction: a } = (0, j.NJ)(),
        c = U(t);
    if (null == c) return null;
    let { getText: o, icon: g } = c;
    return (0, l.jsxs)("li", {
        className: B.Tc,
        ref: r,
        children: [
            (0, l.jsx)(g, { size: "xxs" }),
            (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "text-subtle", children: o() }),
            s &&
                (0, l.jsx)(O.m, {
                    text: M.intl.string(M.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, l.jsx)(u.D, {
                        onClick: function () {
                            (0, T.tg)(n, i, t), a({ action: "TAG_REMOVED", widgetEdited: n, gameId: i });
                        },
                        className: B.DT,
                        "aria-label": M.intl.formatToPlainString(M.t.GCn1ne, { tag: o() }),
                        children: (0, l.jsx)(k.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
function Y(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function q() {
    return (0, l.jsx)(C.A, { direction: C.A.Directions.LEFT, width: 12, height: 12, className: B.OW });
}
function Q(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: i,
            onExpandTags: n,
            onCollapseTags: s,
            disableInteraction: r,
            buttonRef: c,
        } = e,
        o = t ? M.intl.string(M.t.z9VPrQ) : M.intl.string(M.t.mriLXL),
        d = t ? M.intl.string(M.t.z9VPrQ) : M.intl.formatToPlainString(M.t.F6iMs4, { count: i });
    return r
        ? (0, l.jsx)("div", {
              className: a()(B.X1, B.r9),
              ref: c,
              children: (0, l.jsx)(Y, { numberOfOverflowingTags: i }),
          })
        : (0, l.jsx)(O.m, {
              text: o,
              ariaHidden: t,
              children: (0, l.jsx)(u.D, {
                  innerRef: c,
                  onClick: t ? s : n,
                  "aria-label": d,
                  className: t ? B.cS : B.X1,
                  children: t ? (0, l.jsx)(q, {}) : (0, l.jsx)(Y, { numberOfOverflowingTags: i }),
              }),
          });
}
let J = (e, t, i, n, l) =>
    (0, s.useCallback)(() => {
        if (null == i) return void l(0);
        let s = e.current?.getBoundingClientRect().width ?? 0,
            r = t.current?.getBoundingClientRect().width ?? 0,
            a = r > 0 ? 8 : 4,
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
                if ((u += t.offsetWidth + 4) > 296 - s - r - a) break;
                c++;
            }
        }
        l(i.length - c);
    }, [e, t, i?.join(""), n, l]);
var Z = i(858808),
    $ = i(442356),
    ee = i(529459);
function et(e) {
    let { index: t, widgetType: i, game: n, children: s, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, v.r)();
    return (0, l.jsx)(N.mG, {
        index: t,
        itemId: n.applicationId,
        listType: i,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: n, widgetType: i, getWidth: r },
        "aria-label": M.intl.formatToPlainString(M.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, T.Un)(i, e, t),
        onEnd: () => a(n.applicationId),
        className: ee.vF,
        dropBeforeClassName: ee.A,
        dropAfterClassName: ee.Ze,
        draggingClassName: ee.Id,
        children: s,
    });
}
function ei(e) {
    let { applicationId: t, userId: i, gameName: n, ...s } = e,
        r = (0, E.A)({
            location: "UserProfileWidgetGameDetailsCard",
            applicationId: t,
            source: p.GameProfileSources.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, l.jsx)(c.D, { ...s, children: n })
        : (0, l.jsx)(c.D, { ...s, children: (0, l.jsx)(u.D, { onClick: r, className: ee.sd, children: n }) });
}
function en(e) {
    let { user: t, guildId: i, channelId: n, id: s } = e;
    return (0, l.jsx)(o.A, { id: s, children: M.intl.format(M.t.TM0XDY, { name: h.Ay.getName(i, n, t) }) });
}
function el(e) {
    let { text: t, className: i } = e;
    return (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", className: i, children: t });
}
function es(e) {
    let { text: t, user: i, guildId: n, channelId: s } = e,
        r = (0, I.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, l.jsx)(g.c, { size: "xxs", color: m.A.colors.ICON_MUTED, className: ee.Ls }),
                  (0, l.jsx)(en, { user: i, guildId: n, channelId: s, id: r }),
                  (0, l.jsx)(el, { text: t }),
              ],
          });
}
function er(e) {
    let { text: t, user: i, guildId: n, channelId: r, widgetType: c, applicationId: d } = e,
        g = (0, I.GV)(),
        p = (0, I.GV)(),
        { trackUserProfileEditAction: E } = (0, j.NJ)(),
        [A, h] = s.useState("idle"),
        [N, v] = s.useState(t ?? ""),
        _ = s.useRef(null),
        S = s.useRef(null),
        O = M.intl.string(M.t.xKSfBT),
        k = null != t && "" !== t.trim(),
        C = s.useCallback(() => {
            E({ action: "PRESS_ADD_COMMENTARY", widgetEdited: c }), h("editing");
        }, [c, E]),
        R = s.useCallback(() => {
            let e = N.trim(),
                i = e !== (t ?? "").trim();
            (0, T.oc)(c, d, "" !== e ? e : void 0),
                h("completed"),
                i && E({ action: "COMMENTARY_EDITED", widgetEdited: c, gameId: d });
        }, [c, d, N, t, E]),
        b = s.useCallback((e) => {
            v(e);
        }, []);
    return (
        s.useEffect(() => {
            "editing" === A && v(t ?? "");
        }, [t, A]),
        s.useEffect(() => {
            "completed" === A && _.current?.focus();
        }, [A]),
        "editing" === A
            ? (0, l.jsxs)("div", {
                  className: ee.kS,
                  children: [
                      (0, l.jsx)(o.A, { tag: "label", htmlFor: g, children: M.intl.string(M.t.JxKXeT) }),
                      (0, l.jsx)(f.f, {
                          id: g,
                          value: N,
                          placeholder: O,
                          onChange: b,
                          onBlur: R,
                          rows: 3,
                          autoFocus: "editing" === A,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), R());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  ref: S,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: C,
                  className: ee.Vg,
                  children: [
                      (0, l.jsx)(x.R, { size: "xxs", color: m.A.colors.ICON_MUTED, className: ee.Ls }),
                      (0, l.jsx)(en, { user: i, guildId: n, channelId: r, id: p }),
                      (0, l.jsx)(el, { text: t ?? O, className: a()(ee.qC, !k && ee.qf) }),
                      (0, l.jsx)(u.D, {
                          innerRef: _,
                          "aria-label": M.intl.string(M.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), C();
                          },
                          focusProps: { ringTarget: S },
                      }),
                  ],
              })
    );
}
function ea(e) {
    let {
            user: t,
            guildId: i,
            channelId: n,
            game: r,
            widgetType: u,
            allowEditing: o,
            disableInteraction: d = !1,
            index: g,
            onRemoveGame: m,
            coverRef: f,
            className: x,
        } = e,
        I = s.useRef(null),
        { applicationId: p, comment: E, tags: h } = r,
        { coverImageUrl: j, gameName: O, isLoading: k } = (0, A.A)(p),
        C = { variant: "heading-sm/medium", color: "text-default" },
        R = o && !d,
        b = 1 === (0, T.cv)(u),
        D = R && (0, T.y9)(u),
        L = R && !b,
        { registerDragHandleRef: G } = (0, v.r)();
    if (k) return (0, l.jsx)(S.E, {});
    function P() {
        return (0, l.jsx)(_.A, {
            coverRef: f,
            className: null == j || d ? void 0 : $.iL,
            imageSrc: j,
            gameName: O,
            applicationId: p,
            userId: t.id,
            disableInteraction: d,
            hideTooltip: !0,
        });
    }
    function w() {
        return (0, l.jsxs)("div", {
            ref: I,
            className: a()(ee.Nr, x),
            children: [
                L
                    ? (0, l.jsxs)("div", {
                          className: ee.An,
                          children: [P(), (0, l.jsx)(N.jV, { buttonRef: G(r.applicationId), className: ee.BU })],
                      })
                    : P(),
                (0, l.jsxs)("div", {
                    className: ee.zH,
                    children: [
                        d
                            ? (0, l.jsx)(c.D, { ...C, children: O })
                            : (0, l.jsx)(ei, { applicationId: p, userId: t.id, gameName: O, ...C }),
                        D
                            ? (0, l.jsx)(er, {
                                  text: E,
                                  user: t,
                                  guildId: i,
                                  channelId: n,
                                  widgetType: u,
                                  applicationId: p,
                              })
                            : (0, l.jsx)(es, { text: E, user: t, guildId: i, channelId: n }),
                        (0, l.jsx)(z, {
                            tags: h,
                            allowEditing: o,
                            widgetType: u,
                            applicationId: p,
                            disableInteraction: d,
                            className: ee._A,
                        }),
                    ],
                }),
                R &&
                    (0, l.jsx)(Z.A, { game: r, widgetType: u, className: ee.vS, onRemove: () => m?.(r.applicationId) }),
            ],
        });
    }
    return L
        ? (0, l.jsx)(et, {
              index: g ?? 0,
              widgetType: u,
              game: r,
              getWidth: () => I.current?.offsetWidth,
              children: w(),
          })
        : w();
}
