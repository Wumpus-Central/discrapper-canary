i.d(t, { A: () => er });
var n,
    l = i(627968),
    s = i(64700),
    a = i(503698),
    r = i.n(a);
i(926675);
var c = i(534514),
    o = i(939249),
    u = i(140735),
    d = i(834730),
    g = i(216964),
    m = i(661531),
    f = i(260598),
    x = i(22231),
    p = i(915089),
    I = i(409626),
    A = i(692969),
    E = i(201438),
    h = i(562153),
    j = i(183555),
    N = i(735321),
    T = i(451395),
    v = i(823016),
    _ = i(788593),
    S = i(492280),
    O = i(990078),
    C = i(789645),
    R = i(147925);
i(321073);
var k = i(477782),
    b = i(980707),
    D = i(922016),
    G = i(761915),
    L = i(877784),
    w = i(53788),
    P = i(148795),
    y = i(214947),
    M = i(375708);
let F = {
    [G.X.BETTER_THAN_YOU]: { getText: () => M.intl.string(M.t.jbIRBE), icon: L.q },
    [G.X.CASUAL]: { getText: () => M.intl.string(M.t.xcFFv6), icon: L.q },
    [G.X.INTERMEDIATE]: { getText: () => M.intl.string(M.t["A/mIs/"]), icon: L.q },
    [G.X.EXPERT]: { getText: () => M.intl.string(M.t.RIOFc2), icon: L.q },
    [G.X.OBSESSED]: { getText: () => M.intl.string(M.t.isPJDu), icon: w.G },
    [G.X.LOVE_IT]: { getText: () => M.intl.string(M.t["1rN7BF"]), icon: w.G },
    [G.X.KIND_OF_LOVE_IT]: { getText: () => M.intl.string(M.t.bCBpVg), icon: w.G },
    [G.X.KIND_OF_HATE_IT]: { getText: () => M.intl.string(M.t["/WcmcP"]), icon: P.d },
    [G.X.RAGE_QUITTING]: { getText: () => M.intl.string(M.t["NXZ/MZ"]), icon: P.d },
    [G.X.OPEN_TO_PLAY]: { getText: () => M.intl.string(M.t.q30PoH), icon: y.$ },
    [G.X.LOOKING_FOR_GROUP]: { getText: () => M.intl.string(M.t.DWWAAQ), icon: y.$ },
    [G.X.LOOKING_FOR_TIPS]: { getText: () => M.intl.string(M.t.KQDVvH), icon: y.$ },
    [G.X.OPEN_TO_TEACH]: { getText: () => M.intl.string(M.t["5HhQo+"]), icon: y.$ },
    [G.X.LOOKING_TO_DISCUSS]: { getText: () => M.intl.string(M.t.GipOCq), icon: y.$ },
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
        tags: [G.X.CASUAL, G.X.INTERMEDIATE, G.X.EXPERT, G.X.BETTER_THAN_YOU],
    },
    rating: {
        getLabel: () => M.intl.string(M.t["7/umul"]),
        type: "checkbox",
        tags: [G.X.OBSESSED, G.X.LOVE_IT, G.X.KIND_OF_LOVE_IT, G.X.KIND_OF_HATE_IT, G.X.RAGE_QUITTING],
    },
    looking_for: {
        getLabel: () => M.intl.string(M.t["5Dez17"]),
        type: "checkbox",
        tags: [
            G.X.LOOKING_FOR_GROUP,
            G.X.OPEN_TO_PLAY,
            G.X.LOOKING_FOR_TIPS,
            G.X.OPEN_TO_TEACH,
            G.X.LOOKING_TO_DISCUSS,
        ],
    },
};
var B = i(767070);
let V = s.memo(function (e) {
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
                [a, r] = e,
                c =
                    ((s = []),
                    r.type === W.RADIO &&
                        s.push(
                            (0, l.jsx)(
                                k.iD,
                                {
                                    id: `${a}-none`,
                                    group: a,
                                    label: M.intl.string(M.t.PoWNfe),
                                    checked: !r.tags.some((e) => t.includes(e)),
                                    action: () => n(r.tags),
                                },
                                "none",
                            ),
                        ),
                    r.tags.forEach((e) => {
                        let n = F[e];
                        null != n &&
                            (r.type === W.RADIO
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
function X(e) {
    let { tags: t, widgetType: i, applicationId: n, ref: a } = e,
        r = (0, s.useRef)(null),
        { trackUserProfileEditAction: c } = (0, j.NJ)(),
        u = (0, s.useMemo)(() => (null != t ? t : []), [t]),
        g = (0, s.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    l = new Set(u);
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
                (0, N.s1)(i, n, Array.from(l));
            },
            [u, c, i, n],
        ),
        m = (0, s.useCallback)(
            (e) => {
                let t = new Set(u);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    c({ action: "TAG_REMOVED", widgetEdited: i, gameId: n }),
                    (0, N.s1)(i, n, Array.from(t));
            },
            [u, c, i, n],
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
            return (0, l.jsx)(V, { currentTags: u, onTagSelect: g, onNoneSelect: m, onClose: t });
        },
        children: (e) =>
            (0, l.jsx)("div", {
                ref: (e) => (
                    null != e && ((r.current = e), (a.current = e)),
                    () => {
                        (r.current = null), (a.current = null);
                    }
                ),
                children: (0, l.jsx)(o.D, {
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
function K(e) {
    let { tags: t, allowEditing: i, widgetType: n, applicationId: a, className: c, disableInteraction: o = !1 } = e,
        u = i && !o,
        d = t?.filter((e) => null != U(e)) ?? [],
        g = d.length > 0,
        m = u && (0, N.mS)(n) && d.length < 20,
        { trackUserProfileAction: f } = (0, j.NJ)(),
        x = (0, s.useRef)(new Map()),
        p = (0, s.useRef)(null),
        I = (0, s.useRef)(null),
        [A, E] = (0, s.useState)(0),
        [h, T] = (0, s.useState)(!1),
        v = J(p, I, d, x, E);
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
    let _ = h ? d : d.slice(0, d.length - A);
    return (0, l.jsxs)("div", {
        className: r()(B.I4, c),
        children: [
            g &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("ul", {
                            className: B.Tw,
                            "aria-label": M.intl.string(M.t.EfjTi4),
                            children: _.map((e) =>
                                (0, l.jsx)(
                                    z,
                                    {
                                        tag: e,
                                        showEditingControls: u,
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
                        A > 0 &&
                            (0, l.jsx)(Q, {
                                buttonRef: p,
                                isExpanded: h,
                                numberOfOverflowingTags: A,
                                onExpandTags: () => {
                                    T(!0), f({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    T(!1), f({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: o,
                            }),
                    ],
                }),
            m && (0, l.jsx)(X, { tags: t, widgetType: n, applicationId: a, ref: I }),
        ],
    });
}
let z = (e) => {
    let { tag: t, applicationId: i, widgetType: n, showEditingControls: s = !1, ref: a } = e,
        { trackUserProfileEditAction: r } = (0, j.NJ)(),
        c = U(t);
    if (null == c) return null;
    let { getText: u, icon: g } = c;
    return (0, l.jsxs)("li", {
        className: B.Tc,
        ref: a,
        children: [
            (0, l.jsx)(g, { size: "xxs" }),
            (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "text-subtle", children: u() }),
            s &&
                (0, l.jsx)(O.m, {
                    text: M.intl.string(M.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, l.jsx)(o.D, {
                        onClick: () => {
                            (0, N.tg)(n, i, t), r({ action: "TAG_REMOVED", widgetEdited: n, gameId: i });
                        },
                        className: B.DT,
                        "aria-label": M.intl.formatToPlainString(M.t.GCn1ne, { tag: u() }),
                        children: (0, l.jsx)(C.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
};
function Y(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, l.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function q() {
    return (0, l.jsx)(R.A, { direction: R.A.Directions.LEFT, width: 12, height: 12, className: B.OW });
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
        u = t ? M.intl.string(M.t.z9VPrQ) : M.intl.string(M.t.mriLXL),
        d = t ? M.intl.string(M.t.z9VPrQ) : M.intl.formatToPlainString(M.t.F6iMs4, { count: i });
    return a
        ? (0, l.jsx)("div", {
              className: r()(B.X1, B.r9),
              ref: c,
              children: (0, l.jsx)(Y, { numberOfOverflowingTags: i }),
          })
        : (0, l.jsx)(O.m, {
              text: u,
              ariaHidden: t,
              children: (0, l.jsx)(o.D, {
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
            a = t.current?.getBoundingClientRect().width ?? 0,
            r = a > 0 ? 8 : 4,
            c = 0,
            o = 0,
            u = n.current;
        for (let e = 0; e < i.length; e++) {
            let t = u.get(i[e]);
            if (null != t) {
                if ((o += t.offsetWidth + 4) > 296) break;
                c++;
            }
        }
        o = 0;
        for (let e = c; e < i.length; e++) {
            let t = u.get(i[e]);
            if (null != t) {
                if ((o += t.offsetWidth + 4) > 296 - s - a - r) break;
                c++;
            }
        }
        l(i.length - c);
    }, [e, t, i?.join(""), n, l]);
var Z = i(858808),
    $ = i(442356),
    ee = i(529459);
function et(e) {
    let { index: t, widgetType: i, game: n, children: s, getWidth: a } = e,
        { manageFocusOnReorder: r } = (0, v.r)();
    return (0, l.jsx)(T.mG, {
        index: t,
        itemId: n.applicationId,
        listType: i,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: n, widgetType: i, getWidth: a },
        "aria-label": M.intl.formatToPlainString(M.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, N.Un)(i, e, t),
        onEnd: () => r(n.applicationId),
        className: ee.vF,
        dropBeforeClassName: ee.A,
        dropAfterClassName: ee.Ze,
        draggingClassName: ee.Id,
        children: s,
    });
}
function ei(e) {
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
        : (0, l.jsx)(c.D, { ...s, children: (0, l.jsx)(o.D, { onClick: a, className: ee.sd, children: n }) });
}
function en(e) {
    let { user: t, guildId: i, channelId: n, id: s } = e;
    return (0, l.jsx)(u.A, { id: s, children: M.intl.format(M.t.TM0XDY, { name: h.Ay.getName(i, n, t) }) });
}
function el(e) {
    let { text: t, className: i } = e;
    return (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", className: i, children: t });
}
function es(e) {
    let { text: t, user: i, guildId: n, channelId: s } = e,
        a = (0, p.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, l.jsx)(g.c, { size: "xxs", color: m.A.colors.ICON_MUTED, className: ee.Ls }),
                  (0, l.jsx)(en, { user: i, guildId: n, channelId: s, id: a }),
                  (0, l.jsx)(el, { text: t }),
              ],
          });
}
function ea(e) {
    let { text: t, user: i, guildId: n, channelId: a, widgetType: c, applicationId: d } = e,
        g = (0, p.GV)(),
        I = (0, p.GV)(),
        { trackUserProfileEditAction: A } = (0, j.NJ)(),
        [E, h] = s.useState("idle"),
        [T, v] = s.useState(t ?? ""),
        _ = s.useRef(null),
        S = s.useRef(null),
        O = M.intl.string(M.t.xKSfBT),
        C = null != t && "" !== t.trim(),
        R = s.useCallback(() => {
            A({ action: "PRESS_ADD_COMMENTARY", widgetEdited: c }), h("editing");
        }, [c, A]),
        k = s.useCallback(() => {
            let e = T.trim(),
                i = e !== (t ?? "").trim();
            (0, N.oc)(c, d, "" !== e ? e : void 0),
                h("completed"),
                i && A({ action: "COMMENTARY_EDITED", widgetEdited: c, gameId: d });
        }, [c, d, T, t, A]),
        b = s.useCallback((e) => {
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
                  className: ee.kS,
                  children: [
                      (0, l.jsx)(u.A, { tag: "label", htmlFor: g, children: M.intl.string(M.t.JxKXeT) }),
                      (0, l.jsx)(f.f, {
                          id: g,
                          value: T,
                          placeholder: O,
                          onChange: b,
                          onBlur: k,
                          rows: 3,
                          autoFocus: "editing" === E,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
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
                  className: ee.Vg,
                  children: [
                      (0, l.jsx)(x.R, { size: "xxs", color: m.A.colors.ICON_MUTED, className: ee.Ls }),
                      (0, l.jsx)(en, { user: i, guildId: n, channelId: a, id: I }),
                      (0, l.jsx)(el, { text: t ?? O, className: r()(ee.qC, !C && ee.qf) }),
                      (0, l.jsx)(o.D, {
                          innerRef: _,
                          "aria-label": M.intl.string(M.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), R();
                          },
                          focusProps: { ringTarget: S },
                      }),
                  ],
              })
    );
}
function er(e) {
    let {
            user: t,
            guildId: i,
            channelId: n,
            game: a,
            widgetType: o,
            allowEditing: u,
            disableInteraction: d = !1,
            index: g,
            onRemoveGame: m,
            coverRef: f,
            className: x,
        } = e,
        p = s.useRef(null),
        { applicationId: I, comment: A, tags: h } = a,
        { coverImageUrl: j, gameName: O, isLoading: C } = (0, E.A)(I),
        R = { variant: "heading-sm/medium", color: "text-default" },
        k = u && !d,
        b = 1 === (0, N.cv)(o),
        D = k && (0, N.y9)(o),
        G = k && !b,
        { registerDragHandleRef: L } = (0, v.r)();
    if (C) return (0, l.jsx)(S.E, {});
    let w = () =>
            (0, l.jsx)(_.A, {
                coverRef: f,
                className: null == j || d ? void 0 : $.iL,
                imageSrc: j,
                gameName: O,
                applicationId: I,
                userId: t.id,
                disableInteraction: d,
                hideTooltip: !0,
            }),
        P = () =>
            (0, l.jsxs)("div", {
                ref: p,
                className: r()(ee.Nr, x),
                children: [
                    G
                        ? (0, l.jsxs)("div", {
                              className: ee.An,
                              children: [w(), (0, l.jsx)(T.jV, { buttonRef: L(a.applicationId), className: ee.BU })],
                          })
                        : w(),
                    (0, l.jsxs)("div", {
                        className: ee.zH,
                        children: [
                            d
                                ? (0, l.jsx)(c.D, { ...R, children: O })
                                : (0, l.jsx)(ei, { applicationId: I, userId: t.id, gameName: O, ...R }),
                            D
                                ? (0, l.jsx)(ea, {
                                      text: A,
                                      user: t,
                                      guildId: i,
                                      channelId: n,
                                      widgetType: o,
                                      applicationId: I,
                                  })
                                : (0, l.jsx)(es, { text: A, user: t, guildId: i, channelId: n }),
                            (0, l.jsx)(K, {
                                tags: h,
                                allowEditing: u,
                                widgetType: o,
                                applicationId: I,
                                disableInteraction: d,
                                className: ee._A,
                            }),
                        ],
                    }),
                    k &&
                        (0, l.jsx)(Z.A, {
                            game: a,
                            widgetType: o,
                            className: ee.vS,
                            onRemove: () => m?.(a.applicationId),
                        }),
                ],
            });
    return G
        ? (0, l.jsx)(et, {
              index: g ?? 0,
              widgetType: o,
              game: a,
              getWidth: () => p.current?.offsetWidth,
              children: P(),
          })
        : P();
}
