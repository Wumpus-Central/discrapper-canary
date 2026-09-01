n.d(t, { A: () => K });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s);
n(926675);
var a = n(297264),
    o = n(939249),
    d = n(140735),
    c = n(834730),
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
    C = n(823016),
    S = n(788593),
    b = n(492280),
    T = n(866665),
    N = n(147925),
    k = n(123181),
    y = n(229087),
    R = n(753437),
    w = n(375708),
    L = n(149253);
function O(e) {
    let { tags: t, allowEditing: n, widgetType: s, gameId: a, className: o, disableInteraction: d = !1 } = e,
        c = n && !d,
        u = t?.filter((e) => null != (0, R.W3)(e)) ?? [],
        g = u.length > 0,
        m = c && (0, E.mS)(s) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, A.NJ)(),
        h = (0, l.useRef)(new Map()),
        p = (0, l.useRef)(null),
        I = (0, l.useRef)(null),
        [j, v] = (0, l.useState)(0),
        [C, S] = (0, l.useState)(!1),
        b = G(p, I, u, h, v),
        T = (0, l.useCallback)(
            (e, t) => {
                (0, E.s1)(s, a, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: s, gameId: a });
            },
            [s, a, f],
        ),
        N = (0, l.useCallback)(() => {
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
    let O = C ? u : u.slice(0, u.length - j);
    return (0, i.jsxs)("div", {
        className: r()(L.I4, o),
        children: [
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: L.Tw,
                            "aria-label": w.intl.string(w.t.EfjTi4),
                            children: O.map((e) =>
                                (0, i.jsx)(
                                    y.A,
                                    {
                                        tag: e,
                                        onRemove: c
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
                                isExpanded: C,
                                numberOfOverflowingTags: j,
                                onExpandTags: () => {
                                    S(!0), x({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    S(!1), x({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: d,
                            }),
                    ],
                }),
            m && (0, i.jsx)(k.A, { tags: t, onTagsChange: T, onOpen: N, ref: I }),
        ],
    });
}
function P(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function _() {
    return (0, i.jsx)(N.A, { direction: N.A.Directions.LEFT, width: 12, height: 12, className: L.OW });
}
function D(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: l,
            onCollapseTags: s,
            disableInteraction: a,
            buttonRef: d,
        } = e,
        c = t ? w.intl.string(w.t.z9VPrQ) : w.intl.string(w.t.mriLXL),
        u = t ? w.intl.string(w.t.z9VPrQ) : w.intl.formatToPlainString(w.t.F6iMs4, { count: n });
    return a
        ? (0, i.jsx)("div", {
              className: r()(L.X1, L.r9),
              ref: d,
              children: (0, i.jsx)(P, { numberOfOverflowingTags: n }),
          })
        : (0, i.jsx)(T.m, {
              text: c,
              ariaHidden: t,
              children: (0, i.jsx)(o.D, {
                  innerRef: d,
                  onClick: t ? s : l,
                  "aria-label": u,
                  className: t ? L.cS : L.X1,
                  children: t ? (0, i.jsx)(_, {}) : (0, i.jsx)(P, { numberOfOverflowingTags: n }),
              }),
          });
}
let G = (e, t, n, i, s) =>
    (0, l.useCallback)(() => {
        if (null == n) return void s(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
            r = t.current?.getBoundingClientRect().width ?? 0,
            a = r > 0 ? 8 : 4,
            o = 0,
            d = 0,
            c = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        d = 0;
        for (let e = o; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296 - l - r - a) break;
                o++;
            }
        }
        s(n.length - o);
    }, [e, t, n?.join(""), i, s]);
var M = n(858808),
    U = n(365611),
    W = n(207730);
function F(e) {
    let { index: t, widgetType: n, game: l, children: s, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, C.r)();
    return (0, i.jsx)(v.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n, getWidth: r },
        "aria-label": w.intl.formatToPlainString(w.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, E.Un)(n, e, t),
        onEnd: () => a(l.gameId),
        className: W.vF,
        dropBeforeClassName: W.A,
        dropAfterClassName: W.Ze,
        draggingClassName: W.Id,
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
        : (0, i.jsx)(a.D, { ...s, children: (0, i.jsx)(o.D, { onClick: r, className: W.sd, children: l }) });
}
function V(e) {
    let { user: t, guildId: n, channelId: l, id: s } = e;
    return (0, i.jsx)(d.A, { id: s, children: w.intl.format(w.t.TM0XDY, { name: j.Ay.getName(n, l, t) }) });
}
function B(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
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
                  (0, i.jsx)(u.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: W.Ls }),
                  (0, i.jsx)(V, { user: n, guildId: l, channelId: s, id: r }),
                  (0, i.jsx)(B, { text: t }),
              ],
          });
}
function X(e) {
    let { text: t, user: n, guildId: s, channelId: a, widgetType: c, gameId: u } = e,
        h = (0, f.GV)(),
        p = (0, f.GV)(),
        { trackUserProfileEditAction: I } = (0, A.NJ)(),
        [j, v] = l.useState("idle"),
        [C, S] = l.useState(t ?? ""),
        b = l.useRef(null),
        T = l.useRef(null),
        N = w.intl.string(w.t.xKSfBT),
        k = null != t && "" !== t.trim(),
        y = l.useCallback(() => {
            I({ action: "PRESS_ADD_COMMENTARY", widgetEdited: c }), v("editing");
        }, [c, I]),
        R = l.useCallback(() => {
            let e = C.trim(),
                n = e !== (t ?? "").trim();
            (0, E.oc)(c, u, "" !== e ? e : void 0),
                v("completed"),
                n && I({ action: "COMMENTARY_EDITED", widgetEdited: c, gameId: u });
        }, [c, u, C, t, I]),
        L = l.useCallback((e) => {
            S(e);
        }, []);
    return (
        l.useEffect(() => {
            "editing" === j && S(t ?? "");
        }, [t, j]),
        l.useEffect(() => {
            "completed" === j && b.current?.focus();
        }, [j]),
        "editing" === j
            ? (0, i.jsxs)("div", {
                  className: W.kS,
                  children: [
                      (0, i.jsx)(d.A, { tag: "label", htmlFor: h, children: w.intl.string(w.t.JxKXeT) }),
                      (0, i.jsx)(m.f, {
                          id: h,
                          value: C,
                          placeholder: N,
                          onChange: L,
                          onBlur: R,
                          rows: 3,
                          autoFocus: !0,
                          onKeyDown: (e) => {
                              "Enter" !== e.key || e.shiftKey || (e.preventDefault(), R());
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
                  className: W.Vg,
                  children: [
                      (0, i.jsx)(x.PencilIcon, { size: "xxs", color: g.A.colors.ICON_MUTED, className: W.Ls }),
                      (0, i.jsx)(V, { user: n, guildId: s, channelId: a, id: p }),
                      (0, i.jsx)(B, { text: t ?? N, className: r()(W.qC, !k && W.qf) }),
                      (0, i.jsx)(o.D, {
                          innerRef: b,
                          "aria-label": w.intl.string(w.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), y();
                          },
                          focusProps: { ringTarget: T },
                      }),
                  ],
              })
    );
}
function K(e) {
    let {
            user: t,
            guildId: n,
            channelId: s,
            game: o,
            widgetType: d,
            allowEditing: c,
            disableInteraction: u = !1,
            index: g,
            onRemoveGame: m,
            coverRef: x,
            className: f,
        } = e,
        h = l.useRef(null),
        { gameId: p, comment: j, tags: A } = o,
        { coverImageUrl: T, gameName: N, isLoading: k } = (0, I.A)(p),
        y = { variant: "heading-sm/medium", color: "text-default" },
        R = c && !u,
        w = 1 === (0, E.cv)(d),
        L = R && (0, E.y9)(d),
        P = R && !w,
        { registerDragHandleRef: _ } = (0, C.r)();
    if (k) return (0, i.jsx)(b.E, {});
    function D() {
        return (0, i.jsx)(S.A, {
            coverRef: x,
            className: null == T || u ? void 0 : U.iL,
            imageSrc: T,
            gameName: N,
            gameId: p,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function G() {
        return (0, i.jsxs)("div", {
            ref: h,
            className: r()(W.Nr, f),
            children: [
                P
                    ? (0, i.jsxs)("div", {
                          className: W.An,
                          children: [D(), (0, i.jsx)(v.jV, { buttonRef: _(o.gameId), className: W.BU })],
                      })
                    : D(),
                (0, i.jsxs)("div", {
                    className: W.zH,
                    children: [
                        u
                            ? (0, i.jsx)(a.D, { ...y, children: N })
                            : (0, i.jsx)(H, { gameId: p, userId: t.id, gameName: N, ...y }),
                        L
                            ? (0, i.jsx)(X, { text: j, user: t, guildId: n, channelId: s, widgetType: d, gameId: p })
                            : (0, i.jsx)(z, { text: j, user: t, guildId: n, channelId: s }),
                        (0, i.jsx)(O, {
                            tags: A,
                            allowEditing: c,
                            widgetType: d,
                            gameId: p,
                            disableInteraction: u,
                            className: W._A,
                        }),
                    ],
                }),
                R && (0, i.jsx)(M.A, { game: o, widgetType: d, className: W.vS, onRemove: () => m?.(o.gameId) }),
            ],
        });
    }
    return P
        ? (0, i.jsx)(F, {
              index: g ?? 0,
              widgetType: d,
              game: o,
              getWidth: () => h.current?.offsetWidth,
              children: G(),
          })
        : G();
}
