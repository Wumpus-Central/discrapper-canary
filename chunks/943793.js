n.d(t, { A: () => Y });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s);
n(926675);
var a = n(297264),
    o = n(939249),
    d = n(140735),
    u = n(834730),
    c = n(216964),
    g = n(661531),
    m = n(103557),
    f = n(22231),
    x = n(915089),
    h = n(409626),
    I = n(692969),
    p = n(201438),
    A = n(562153),
    j = n(183555),
    E = n(735321),
    v = n(451395),
    S = n(823016),
    C = n(788593),
    b = n(492280),
    k = n(866665),
    T = n(147925),
    N = n(123181),
    y = n(229087),
    w = n(753437),
    R = n(375708),
    _ = n(149253);
function L(e) {
    let { tags: t, allowEditing: n, widgetType: s, gameId: a, className: o, disableInteraction: d = !1 } = e,
        u = n && !d,
        c = t?.filter((e) => null != (0, w.W3)(e)) ?? [],
        g = c.length > 0,
        m = u && (0, E.mS)(s) && c.length < 20,
        { trackUserProfileAction: f, trackUserProfileEditAction: x } = (0, j.NJ)(),
        h = (0, l.useRef)(new Map()),
        I = (0, l.useRef)(null),
        p = (0, l.useRef)(null),
        [A, v] = (0, l.useState)(0),
        [S, C] = (0, l.useState)(!1),
        b = M(I, p, c, h, v),
        k = (0, l.useCallback)(
            (e, t) => {
                (0, E.s1)(s, a, e),
                    x({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: s, gameId: a });
            },
            [s, a, x],
        ),
        T = (0, l.useCallback)(() => {
            x({ action: "PRESS_ADD_TAG", widgetEdited: s });
        }, [x, s]);
    if (
        ((0, l.useEffect)(
            () => (
                b(),
                window.addEventListener("resize", b),
                () => {
                    window.removeEventListener("resize", b);
                }
            ),
            [b, c?.join("")],
        ),
        !g && !m)
    )
        return null;
    let L = S ? c : c.slice(0, c.length - A);
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
                                        onRemove: u
                                            ? () => {
                                                  (0, E.tg)(s, a, e),
                                                      x({ action: "TAG_REMOVED", widgetEdited: s, gameId: a });
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
                        A > 0 &&
                            (0, i.jsx)(D, {
                                buttonRef: I,
                                isExpanded: S,
                                numberOfOverflowingTags: A,
                                onExpandTags: () => {
                                    C(!0), f({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    C(!1), f({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: d,
                            }),
                    ],
                }),
            m && (0, i.jsx)(N.A, { tags: t, onTagsChange: k, onOpen: T, ref: p }),
        ],
    });
}
function O(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(u.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function P() {
    return (0, i.jsx)(T.A, { direction: T.A.Directions.LEFT, width: 12, height: 12, className: _.OW });
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
        u = t ? R.intl.string(R.t.z9VPrQ) : R.intl.string(R.t.mriLXL),
        c = t ? R.intl.string(R.t.z9VPrQ) : R.intl.formatToPlainString(R.t.F6iMs4, { count: n });
    return a
        ? (0, i.jsx)("div", {
              className: r()(_.X1, _.r9),
              ref: d,
              children: (0, i.jsx)(O, { numberOfOverflowingTags: n }),
          })
        : (0, i.jsx)(k.m, {
              text: u,
              ariaHidden: t,
              children: (0, i.jsx)(o.D, {
                  innerRef: d,
                  onClick: t ? s : l,
                  "aria-label": c,
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
            d = 0,
            u = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = u.get(n[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        d = 0;
        for (let e = o; e < n.length; e++) {
            let t = u.get(n[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296 - l - r - a) break;
                o++;
            }
        }
        s(n.length - o);
    }, [e, t, n?.join(""), i, s]);
var G = n(858808),
    U = n(365611),
    W = n(207730);
function F(e) {
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
        className: W.vF,
        dropBeforeClassName: W.A,
        dropAfterClassName: W.Ze,
        draggingClassName: W.Id,
        children: s,
    });
}
function H(e) {
    let { gameId: t, userId: n, gameName: l, ...s } = e,
        r = (0, I.A)({
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
function B(e) {
    let { user: t, guildId: n, channelId: l, id: s } = e;
    return (0, i.jsx)(d.A, { id: s, children: R.intl.format(R.t.TM0XDY, { name: A.Ay.getName(n, l, t) }) });
}
function V(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function z(e) {
    let { text: t, user: n, guildId: l, channelId: s } = e,
        r = (0, x.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, i.jsx)(c.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: W.Ls }),
                  (0, i.jsx)(B, { user: n, guildId: l, channelId: s, id: r }),
                  (0, i.jsx)(V, { text: t }),
              ],
          });
}
function K(e) {
    let { text: t, user: n, guildId: s, channelId: a, widgetType: u, gameId: c } = e,
        h = (0, x.GV)(),
        I = (0, x.GV)(),
        { trackUserProfileEditAction: p } = (0, j.NJ)(),
        [A, v] = l.useState("idle"),
        [S, C] = l.useState(t ?? ""),
        b = l.useRef(null),
        k = l.useRef(null),
        T = R.intl.string(R.t.xKSfBT),
        N = null != t && "" !== t.trim(),
        y = l.useCallback(() => {
            p({ action: "PRESS_ADD_COMMENTARY", widgetEdited: u }), v("editing");
        }, [u, p]),
        w = l.useCallback(() => {
            let e = S.trim(),
                n = e !== (t ?? "").trim();
            (0, E.oc)(u, c, "" !== e ? e : void 0),
                v("completed"),
                n && p({ action: "COMMENTARY_EDITED", widgetEdited: u, gameId: c });
        }, [u, c, S, t, p]),
        _ = l.useCallback((e) => {
            C(e);
        }, []);
    return (
        l.useEffect(() => {
            "editing" === A && C(t ?? "");
        }, [t, A]),
        l.useEffect(() => {
            "completed" === A && b.current?.focus();
        }, [A]),
        "editing" === A
            ? (0, i.jsxs)("div", {
                  className: W.kS,
                  children: [
                      (0, i.jsx)(d.A, { tag: "label", htmlFor: h, children: R.intl.string(R.t.JxKXeT) }),
                      (0, i.jsx)(m.f, {
                          id: h,
                          value: S,
                          placeholder: T,
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
                  ref: k,
                  role: "group",
                  "aria-labelledby": I,
                  onClick: y,
                  className: W.Vg,
                  children: [
                      (0, i.jsx)(f.PencilIcon, { size: "xxs", color: g.A.colors.ICON_MUTED, className: W.Ls }),
                      (0, i.jsx)(B, { user: n, guildId: s, channelId: a, id: I }),
                      (0, i.jsx)(V, { text: t ?? T, className: r()(W.qC, !N && W.qf) }),
                      (0, i.jsx)(o.D, {
                          innerRef: b,
                          "aria-label": R.intl.string(R.t.ppb9MJ),
                          onClick: (e) => {
                              e.stopPropagation(), y();
                          },
                          focusProps: { ringTarget: k },
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
            widgetType: d,
            allowEditing: u,
            disableInteraction: c = !1,
            index: g,
            onRemoveGame: m,
            coverRef: f,
            className: x,
        } = e,
        h = l.useRef(null),
        { gameId: I, comment: A, tags: j } = o,
        { coverImageUrl: k, gameName: T, isLoading: N } = (0, p.A)(I),
        y = { variant: "heading-sm/medium", color: "text-default" },
        w = u && !c,
        R = 1 === (0, E.cv)(d),
        _ = w && (0, E.y9)(d),
        O = w && !R,
        { registerDragHandleRef: P } = (0, S.r)();
    if (N) return (0, i.jsx)(b.E, {});
    function D() {
        return (0, i.jsx)(C.A, {
            coverRef: f,
            className: null == k || c ? void 0 : U.iL,
            imageSrc: k,
            gameName: T,
            gameId: I,
            userId: t.id,
            disableInteraction: c,
            hideTooltip: !0,
        });
    }
    function M() {
        return (0, i.jsxs)("div", {
            ref: h,
            className: r()(W.Nr, x),
            children: [
                O
                    ? (0, i.jsxs)("div", {
                          className: W.An,
                          children: [D(), (0, i.jsx)(v.jV, { buttonRef: P(o.gameId), className: W.BU })],
                      })
                    : D(),
                (0, i.jsxs)("div", {
                    className: W.zH,
                    children: [
                        c
                            ? (0, i.jsx)(a.D, { ...y, children: T })
                            : (0, i.jsx)(H, { gameId: I, userId: t.id, gameName: T, ...y }),
                        _
                            ? (0, i.jsx)(K, { text: A, user: t, guildId: n, channelId: s, widgetType: d, gameId: I })
                            : (0, i.jsx)(z, { text: A, user: t, guildId: n, channelId: s }),
                        (0, i.jsx)(L, {
                            tags: j,
                            allowEditing: u,
                            widgetType: d,
                            gameId: I,
                            disableInteraction: c,
                            className: W._A,
                        }),
                    ],
                }),
                w && (0, i.jsx)(G.A, { game: o, widgetType: d, className: W.vS, onRemove: () => m?.(o.gameId) }),
            ],
        });
    }
    return O
        ? (0, i.jsx)(F, {
              index: g ?? 0,
              widgetType: d,
              game: o,
              getWidth: () => h.current?.offsetWidth,
              children: M(),
          })
        : M();
}
