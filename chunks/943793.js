n.d(t, { A: () => Y });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s);
n(926675);
var a = n(297264),
    o = n(939249),
    c = n(140735),
    d = n(834730),
    u = n(216964),
    g = n(661531),
    m = n(103557),
    x = n(22231),
    f = n(915089),
    h = n(409626),
    p = n(692969),
    I = n(201438),
    j = n(562153),
    A = n(183555),
    E = n(735321),
    v = n(451395),
    S = n(823016),
    C = n(788593),
    b = n(492280),
    T = n(866665),
    k = n(147925),
    N = n(123181),
    y = n(229087),
    w = n(753437),
    R = n(375708),
    _ = n(149253);
function L(e) {
    let { tags: t, allowEditing: n, widgetType: s, gameId: a, className: o, disableInteraction: c = !1 } = e,
        d = n && !c,
        u = t?.filter((e) => null != (0, w.W3)(e)) ?? [],
        g = u.length > 0,
        m = d && (0, E.mS)(s) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, A.NJ)(),
        h = (0, l.useRef)(new Map()),
        p = (0, l.useRef)(null),
        I = (0, l.useRef)(null),
        [j, v] = (0, l.useState)(0),
        [S, C] = (0, l.useState)(!1),
        b = M(p, I, u, h, v),
        T = (0, l.useCallback)(
            (e, t) => {
                (0, E.s1)(s, a, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: s, gameId: a });
            },
            [s, a, f],
        ),
        k = (0, l.useCallback)(() => {
            f({ action: "PRESS_ADD_TAG", widgetEdited: s });
        }, [f, s]);
    if (
        ((0, l.useEffect)(
            () => (
                b(),
                window.addEventListener("resize", b),
                () => {
                    window.removeEventListener("resize", b);
                }
            ),
            [b, u?.join("")],
        ),
        !g && !m)
    )
        return null;
    let L = S ? u : u.slice(0, u.length - j);
    return (0, i.jsxs)("div", {
        className: r()(_.I4, o),
        children: [
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: _.Tw,
                            "aria-label": R.intl.string(R.t.EfjTi4),
                            children: L.map((e) =>
                                (0, i.jsx)(
                                    y.A,
                                    {
                                        tag: e,
                                        onRemove: d
                                            ? () => {
                                                  (0, E.tg)(s, a, e),
                                                      f({ action: "TAG_REMOVED", widgetEdited: s, gameId: a });
                                              }
                                            : void 0,
                                        ref: (t) => {
                                            null != t && h.current.set(e, t);
                                        },
                                    },
                                    e,
                                ),
                            ),
                        }),
                        j > 0 &&
                            (0, i.jsx)(D, {
                                buttonRef: p,
                                isExpanded: S,
                                numberOfOverflowingTags: j,
                                onExpandTags: () => {
                                    C(!0), x({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    C(!1), x({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: c,
                            }),
                    ],
                }),
            m && (0, i.jsx)(N.A, { tags: t, onTagsChange: T, onOpen: k, ref: I }),
        ],
    });
}
function O(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function P() {
    return (0, i.jsx)(k.A, { direction: k.A.Directions.LEFT, width: 12, height: 12, className: _.OW });
}
function D(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: l,
            onCollapseTags: s,
            disableInteraction: a,
            buttonRef: c,
        } = e,
        d = t ? R.intl.string(R.t.z9VPrQ) : R.intl.string(R.t.mriLXL),
        u = t ? R.intl.string(R.t.z9VPrQ) : R.intl.formatToPlainString(R.t.F6iMs4, { count: n });
    return a
        ? (0, i.jsx)("div", {
              className: r()(_.X1, _.r9),
              ref: c,
              children: (0, i.jsx)(O, { numberOfOverflowingTags: n }),
          })
        : (0, i.jsx)(T.m, {
              text: d,
              ariaHidden: t,
              children: (0, i.jsx)(o.D, {
                  innerRef: c,
                  onClick: t ? s : l,
                  "aria-label": u,
                  className: t ? _.cS : _.X1,
                  children: t ? (0, i.jsx)(P, {}) : (0, i.jsx)(O, { numberOfOverflowingTags: n }),
              }),
          });
}
let M = (e, t, n, i, s) =>
    (0, l.useCallback)(() => {
        if (null == n) return void s(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
            r = t.current?.getBoundingClientRect().width ?? 0,
            a = r > 0 ? 8 : 4,
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
                if ((c += t.offsetWidth + 4) > 296 - l - r - a) break;
                o++;
            }
        }
        s(n.length - o);
    }, [e, t, n?.join(""), i, s]);
var G = n(858808),
    U = n(365611),
    F = n(207730);
function W(e) {
    let { index: t, widgetType: n, game: l, children: s, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, S.r)();
    return (0, i.jsx)(v.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n, getWidth: r },
        "aria-label": R.intl.formatToPlainString(R.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, E.Un)(n, e, t),
        onEnd: () => a(l.gameId),
        className: F.vF,
        dropBeforeClassName: F.A,
        dropAfterClassName: F.Ze,
        draggingClassName: F.Id,
        children: s,
    });
}
function H(e) {
    let { gameId: t, userId: n, gameName: l, ...s } = e,
        r = (0, p.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: h.GameProfileSources.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, i.jsx)(a.D, { ...s, children: l })
        : (0, i.jsx)(a.D, { ...s, children: (0, i.jsx)(o.D, { onClick: r, className: F.sd, children: l }) });
}
function V(e) {
    let { user: t, guildId: n, channelId: l, id: s } = e;
    return (0, i.jsx)(c.A, { id: s, children: R.intl.format(R.t.TM0XDY, { name: j.Ay.getName(n, l, t) }) });
}
function B(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function z(e) {
    let { text: t, user: n, guildId: l, channelId: s } = e,
        r = (0, f.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, i.jsx)(u.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: F.Ls }),
                  (0, i.jsx)(V, { user: n, guildId: l, channelId: s, id: r }),
                  (0, i.jsx)(B, { text: t }),
              ],
          });
}
function K(e) {
    let { text: t, user: n, guildId: s, channelId: a, widgetType: d, gameId: u } = e,
        h = (0, f.GV)(),
        p = (0, f.GV)(),
        { trackUserProfileEditAction: I } = (0, A.NJ)(),
        [j, v] = l.useState("idle"),
        [S, C] = l.useState(t ?? ""),
        b = l.useRef(null),
        T = l.useRef(null),
        k = R.intl.string(R.t.xKSfBT),
        N = null != t && "" !== t.trim(),
        y = l.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: d }), v("editing");
        }, [d, I]),
        w = l.useCallback(() => {
            let e = S.trim(),
                n = e !== (t ?? "").trim();
            (0, E.oc)(d, u, "" !== e ? e : void 0),
                v("completed"),
                n && I({ action: "COMMENTARY_EDITED", widgetEdited: d, gameId: u });
        }, [d, u, S, t, I]),
        _ = l.useCallback((e) => {
            C(e);
        }, []);
    return (
        l.useEffect(() => {
            "editing" === j && C(t ?? "");
        }, [t, j]),
        l.useEffect(() => {
            "completed" === j && b.current?.focus();
        }, [j]),
        "editing" === j
            ? (0, i.jsxs)("div", {
                  className: F.kS,
                  children: [
                      (0, i.jsx)(c.A, { tag: "label", htmlFor: h, children: R.intl.string(R.t.JxKXeT) }),
                      (0, i.jsx)(m.f, {
                          id: h,
                          value: S,
                          placeholder: k,
                          onChange: _,
                          onBlur: w,
                          rows: 3,
                          autoFocus: !0,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), w());
                          },
                          maxLength: 200,
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  ref: T,
                  role: "group",
                  "aria-labelledby": p,
                  onClick: y,
                  className: F.Vg,
                  children: [
                      (0, i.jsx)(x.PencilIcon, { size: "xxs", color: g.A.colors.ICON_MUTED, className: F.Ls }),
                      (0, i.jsx)(V, { user: n, guildId: s, channelId: a, id: p }),
                      (0, i.jsx)(B, { text: t ?? k, className: r()(F.qC, !N && F.qf) }),
                      (0, i.jsx)(o.D, {
                          innerRef: b,
                          "aria-label": R.intl.string(R.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), y();
                          },
                          focusProps: { ringTarget: T },
                      }),
                  ],
              })
    );
}
function Y(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            game: o,
            widgetType: c,
            allowEditing: d,
            disableInteraction: u = !1,
            index: g,
            onRemoveGame: m,
            coverRef: x,
            className: f,
        } = e,
        h = l.useRef(null),
        { gameId: p, comment: j, tags: A } = o,
        { coverImageUrl: T, gameName: k, isLoading: N } = (0, I.A)(p),
        y = { variant: "heading-sm/medium", color: "text-default" },
        w = d && !u,
        R = 1 === (0, E.cv)(c),
        _ = w && (0, E.y9)(c),
        O = w && !R,
        { registerDragHandleRef: P } = (0, S.r)();
    if (N) return (0, i.jsx)(b.E, {});
    function D() {
        return (0, i.jsx)(C.A, {
            coverRef: x,
            className: null == T || u ? void 0 : U.iL,
            imageSrc: T,
            gameName: k,
            gameId: p,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function M() {
        return (0, i.jsxs)("div", {
            ref: h,
            className: r()(F.Nr, f),
            children: [
                O
                    ? (0, i.jsxs)("div", {
                          className: F.An,
                          children: [D(), (0, i.jsx)(v.jV, { buttonRef: P(o.gameId), className: F.BU })],
                      })
                    : D(),
                (0, i.jsxs)("div", {
                    className: F.zH,
                    children: [
                        u
                            ? (0, i.jsx)(a.D, { ...y, children: k })
                            : (0, i.jsx)(H, { gameId: p, userId: t.id, gameName: k, ...y }),
                        _
                            ? (0, i.jsx)(K, { text: j, user: t, guildId: n, channelId: s, widgetType: c, gameId: p })
                            : (0, i.jsx)(z, { text: j, user: t, guildId: n, channelId: s }),
                        (0, i.jsx)(L, {
                            tags: A,
                            allowEditing: d,
                            widgetType: c,
                            gameId: p,
                            disableInteraction: u,
                            className: F._A,
                        }),
                    ],
                }),
                w && (0, i.jsx)(G.A, { game: o, widgetType: c, className: F.vS, onRemove: () => m?.(o.gameId) }),
            ],
        });
    }
    return O
        ? (0, i.jsx)(W, {
              index: g ?? 0,
              widgetType: c,
              game: o,
              getWidth: () => h.current?.offsetWidth,
              children: M(),
          })
        : M();
}
