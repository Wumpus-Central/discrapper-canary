n.d(t, { A: () => z });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(297264),
    d = n(939249),
    o = n(140735),
    c = n(834730),
    u = n(216964),
    m = n(661531),
    g = n(34011),
    x = n(915089),
    f = n(409626),
    h = n(692969),
    p = n(201438),
    j = n(562153),
    I = n(183555),
    E = n(735321),
    v = n(451395),
    C = n(823016),
    A = n(788593),
    b = n(492280),
    N = n(866665),
    w = n(147925),
    T = n(123181),
    y = n(229087),
    k = n(753437),
    R = n(229231),
    S = n(660183),
    L = n(149253);
function _(e) {
    let { tags: t, allowEditing: n, widgetType: a, gameId: r, className: d, disableInteraction: o = !1 } = e,
        c = n && !o,
        u = t?.filter((e) => null != (0, k.W3)(e)) ?? [],
        m = u.length > 0,
        g = c && (0, R.mS)(a) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, I.NJ)(),
        h = (0, l.useRef)(new Map()),
        p = (0, l.useRef)(null),
        j = (0, l.useRef)(null),
        [v, C] = (0, l.useState)(0),
        [A, b] = (0, l.useState)(!1),
        N = G(p, j, u, h, C),
        w = (0, l.useCallback)(
            (e, t) => {
                ((0, E.s1)(a, r, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: a, gameId: r }));
            },
            [a, r, f],
        ),
        _ = (0, l.useCallback)(() => {
            f({ action: "PRESS_ADD_TAG", widgetEdited: a });
        }, [f, a]);
    if (
        ((0, l.useEffect)(
            () => (
                N(),
                window.addEventListener("resize", N),
                () => {
                    window.removeEventListener("resize", N);
                }
            ),
            [N, u?.join("")],
        ),
        !m && !g)
    )
        return null;
    let P = A ? u : u.slice(0, u.length - v);
    return (0, i.jsxs)("div", {
        className: s()(L.I4, d),
        children: [
            m &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: L.Tw,
                            "aria-label": S.intl.string(S.t.EfjTi4),
                            children: P.map((e) =>
                                (0, i.jsx)(
                                    y.A,
                                    {
                                        tag: e,
                                        onRemove: c
                                            ? () => {
                                                  ((0, E.tg)(a, r, e),
                                                      f({ action: "TAG_REMOVED", widgetEdited: a, gameId: r }));
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
                        v > 0 &&
                            (0, i.jsx)(O, {
                                buttonRef: p,
                                isExpanded: A,
                                numberOfOverflowingTags: v,
                                onExpandTags: () => {
                                    (b(!0), x({ action: "EXPAND_GAME_TAGS" }));
                                },
                                onCollapseTags: () => {
                                    (b(!1), x({ action: "COLLAPSE_GAME_TAGS" }));
                                },
                                disableInteraction: o,
                            }),
                    ],
                }),
            g && (0, i.jsx)(T.A, { tags: t, onTagsChange: w, onOpen: _, ref: j }),
        ],
    });
}
function P(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function D() {
    return (0, i.jsx)(w.A, { direction: w.A.Directions.LEFT, width: 12, height: 12, className: L.OW });
}
function O(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: l,
            onCollapseTags: a,
            disableInteraction: r,
            buttonRef: o,
        } = e,
        c = t ? S.intl.string(S.t.z9VPrQ) : S.intl.string(S.t.mriLXL),
        u = t ? S.intl.string(S.t.z9VPrQ) : S.intl.formatToPlainString(S.t.F6iMs4, { count: n });
    return r
        ? (0, i.jsx)("div", {
              className: s()(L.X1, L.r9),
              ref: o,
              children: (0, i.jsx)(P, { numberOfOverflowingTags: n }),
          })
        : (0, i.jsx)(N.m, {
              text: c,
              ariaHidden: t,
              children: (0, i.jsx)(d.D, {
                  innerRef: o,
                  onClick: t ? a : l,
                  "aria-label": u,
                  className: t ? L.cS : L.X1,
                  children: t ? (0, i.jsx)(D, {}) : (0, i.jsx)(P, { numberOfOverflowingTags: n }),
              }),
          });
}
let G = (e, t, n, i, a) =>
    (0, l.useCallback)(() => {
        if (null == n) return void a(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
            s = t.current?.getBoundingClientRect().width ?? 0,
            r = s > 0 ? 8 : 4,
            d = 0,
            o = 0,
            c = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((o += t.offsetWidth + 4) > 296) break;
                d++;
            }
        }
        o = 0;
        for (let e = d; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((o += t.offsetWidth + 4) > 296 - l - s - r) break;
                d++;
            }
        }
        a(n.length - d);
    }, [e, t, n?.join(""), i, a]);
var M = n(858808),
    F = n(404760),
    U = n(365611),
    H = n(207730);
function V(e) {
    let { index: t, widgetType: n, game: l, children: a, getWidth: s } = e,
        { manageFocusOnReorder: r } = (0, C.r)();
    return (0, i.jsx)(v.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n, getWidth: s },
        "aria-label": S.intl.formatToPlainString(S.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, E.Un)(n, e, t),
        onEnd: () => r(l.gameId),
        className: H.vF,
        dropBeforeClassName: H.A,
        dropAfterClassName: H.Ze,
        draggingClassName: H.Id,
        children: a,
    });
}
function W(e) {
    let { gameId: t, userId: n, gameName: l, ...a } = e,
        s = (0, h.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: f.GameProfileSources.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == s
        ? (0, i.jsx)(r.D, { ...a, children: l })
        : (0, i.jsx)(r.D, { ...a, children: (0, i.jsx)(d.D, { onClick: s, className: H.sd, children: l }) });
}
function X(e) {
    let { user: t, guildId: n, channelId: l, id: a } = e;
    return (0, i.jsx)(o.A, { id: a, children: S.intl.format(S.t.TM0XDY, { name: j.Ay.getName(n, l, t) }) });
}
function K(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function Y(e) {
    let { text: t, user: n, guildId: l, channelId: a } = e,
        s = (0, x.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": s,
              children: [
                  (0, i.jsx)(u.c, { size: "xxs", color: m.A.colors.ICON_MUTED, className: H.Ls }),
                  (0, i.jsx)(X, { user: n, guildId: l, channelId: a, id: s }),
                  (0, i.jsx)(K, { text: t }),
              ],
          });
}
function B(e) {
    let { text: t, user: n, guildId: a, channelId: r, widgetType: d, gameId: o } = e,
        c = (0, x.GV)(),
        { trackUserProfileEditAction: u } = (0, I.NJ)(),
        m = S.intl.string(S.t.xKSfBT),
        f = t ?? "",
        h = "" !== f.trim(),
        p = l.useCallback(
            (e) => {
                let t = e.trim();
                ((0, E.oc)(d, o, "" !== t ? t : void 0),
                    t !== f.trim() && u({ action: "COMMENTARY_EDITED", widgetEdited: d, gameId: o }));
            },
            [d, o, f, u],
        ),
        j = l.useCallback(() => {
            u({ action: "PRESS_ADD_COMMENTARY", widgetEdited: d });
        }, [d, u]),
        v = (0, i.jsx)("div", { children: (0, i.jsx)(K, { text: h ? f : m, className: s()(H.qC, !h && H.qf) }) });
    return (0, i.jsxs)("div", {
        className: s()(F.kL, H.Im),
        role: "group",
        "aria-labelledby": c,
        children: [
            (0, i.jsx)(X, { user: n, guildId: a, channelId: r, id: c }),
            (0, i.jsx)(g.w, {
                value: f,
                onCommit: p,
                onFocus: j,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                multiline: !0,
                paddingBlock: "md",
                scrollIntoViewOnFocus: !0,
                preview: v,
                placeholder: m,
                label: S.intl.string(S.t.JxKXeT),
                maxLength: 200,
            }),
        ],
    });
}
function z(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            game: d,
            widgetType: o,
            allowEditing: c,
            disableInteraction: u = !1,
            index: m,
            onRemoveGame: g,
            coverRef: x,
            className: f,
        } = e,
        h = l.useRef(null),
        { gameId: j, comment: I, tags: N } = d,
        { coverImageUrl: w, gameName: T, isLoading: y } = (0, p.A)(j),
        k = { variant: "heading-sm/medium", color: "text-default" },
        S = c && !u,
        L = 1 === (0, E.cv)(o),
        P = S && (0, R.y9)(o),
        D = S && !L,
        { registerDragHandleRef: O } = (0, C.r)();
    if (y) return (0, i.jsx)(b.E, {});
    function G() {
        return (0, i.jsx)(A.A, {
            coverRef: x,
            className: null == w || u ? void 0 : U.iL,
            imageSrc: w,
            gameName: T,
            gameId: j,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function F() {
        return (0, i.jsxs)("div", {
            ref: h,
            className: s()(H.Nr, f),
            children: [
                D
                    ? (0, i.jsxs)("div", {
                          className: H.An,
                          children: [G(), (0, i.jsx)(v.jV, { buttonRef: O(d.gameId), className: H.BU })],
                      })
                    : G(),
                (0, i.jsxs)("div", {
                    className: H.zH,
                    children: [
                        u
                            ? (0, i.jsx)(r.D, { ...k, children: T })
                            : (0, i.jsx)(W, { gameId: j, userId: t.id, gameName: T, ...k }),
                        P
                            ? (0, i.jsx)(B, { text: I, user: t, guildId: n, channelId: a, widgetType: o, gameId: j })
                            : (0, i.jsx)(Y, { text: I, user: t, guildId: n, channelId: a }),
                        (0, i.jsx)(_, {
                            tags: N,
                            allowEditing: c,
                            widgetType: o,
                            gameId: j,
                            disableInteraction: u,
                            className: H._A,
                        }),
                    ],
                }),
                S && (0, i.jsx)(M.A, { game: d, widgetType: o, className: H.vS, onRemove: () => g?.(d.gameId) }),
            ],
        });
    }
    return D
        ? (0, i.jsx)(V, {
              index: m ?? 0,
              widgetType: o,
              game: d,
              getWidth: () => h.current?.offsetWidth,
              children: F(),
          })
        : F();
}
