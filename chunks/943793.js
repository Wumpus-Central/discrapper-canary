n.d(t, { A: () => X });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s);
n(926675);
var r = n(297264),
    o = n(939249),
    d = n(140735),
    c = n(834730),
    u = n(216964),
    g = n(661531),
    m = n(34011),
    f = n(915089),
    x = n(409626),
    h = n(692969),
    p = n(201438),
    I = n(562153),
    E = n(183555),
    A = n(735321),
    j = n(451395),
    v = n(823016),
    C = n(788593),
    b = n(492280),
    k = n(866665),
    S = n(147925),
    y = n(123181),
    R = n(229087),
    N = n(753437),
    T = n(375708),
    w = n(149253);
function L(e) {
    let { tags: t, allowEditing: n, widgetType: s, gameId: r, className: o, disableInteraction: d = !1 } = e,
        c = n && !d,
        u = t?.filter((e) => null != (0, N.W3)(e)) ?? [],
        g = u.length > 0,
        m = c && (0, A.mS)(s) && u.length < 20,
        { trackUserProfileAction: f, trackUserProfileEditAction: x } = (0, E.NJ)(),
        h = (0, l.useRef)(new Map()),
        p = (0, l.useRef)(null),
        I = (0, l.useRef)(null),
        [j, v] = (0, l.useState)(0),
        [C, b] = (0, l.useState)(!1),
        k = D(p, I, u, h, v),
        S = (0, l.useCallback)(
            (e, t) => {
                ((0, A.s1)(s, r, e),
                    x({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: s, gameId: r }));
            },
            [s, r, x],
        ),
        L = (0, l.useCallback)(() => {
            x({ action: "PRESS_ADD_TAG", widgetEdited: s });
        }, [x, s]);
    if (
        ((0, l.useEffect)(
            () => (
                k(),
                window.addEventListener("resize", k),
                () => {
                    window.removeEventListener("resize", k);
                }
            ),
            [k, u?.join("")],
        ),
        !g && !m)
    )
        return null;
    let P = C ? u : u.slice(0, u.length - j);
    return (0, i.jsxs)("div", {
        className: a()(w.I4, o),
        children: [
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: w.Tw,
                            "aria-label": T.intl.string(T.t.EfjTi4),
                            children: P.map((e) =>
                                (0, i.jsx)(
                                    R.A,
                                    {
                                        tag: e,
                                        onRemove: c
                                            ? () => {
                                                  ((0, A.tg)(s, r, e),
                                                      x({ action: "TAG_REMOVED", widgetEdited: s, gameId: r }));
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
                            (0, i.jsx)(O, {
                                buttonRef: p,
                                isExpanded: C,
                                numberOfOverflowingTags: j,
                                onExpandTags: () => {
                                    (b(!0), f({ action: "EXPAND_GAME_TAGS" }));
                                },
                                onCollapseTags: () => {
                                    (b(!1), f({ action: "COLLAPSE_GAME_TAGS" }));
                                },
                                disableInteraction: d,
                            }),
                    ],
                }),
            m && (0, i.jsx)(y.A, { tags: t, onTagsChange: S, onOpen: L, ref: I }),
        ],
    });
}
function P(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function _() {
    return (0, i.jsx)(S.A, { direction: S.A.Directions.LEFT, width: 12, height: 12, className: w.OW });
}
function O(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: l,
            onCollapseTags: s,
            disableInteraction: r,
            buttonRef: d,
        } = e,
        c = t ? T.intl.string(T.t.z9VPrQ) : T.intl.string(T.t.mriLXL),
        u = t ? T.intl.string(T.t.z9VPrQ) : T.intl.formatToPlainString(T.t.F6iMs4, { count: n });
    return r
        ? (0, i.jsx)("div", {
              className: a()(w.X1, w.r9),
              ref: d,
              children: (0, i.jsx)(P, { numberOfOverflowingTags: n }),
          })
        : (0, i.jsx)(k.m, {
              text: c,
              ariaHidden: t,
              children: (0, i.jsx)(o.D, {
                  innerRef: d,
                  onClick: t ? s : l,
                  "aria-label": u,
                  className: t ? w.cS : w.X1,
                  children: t ? (0, i.jsx)(_, {}) : (0, i.jsx)(P, { numberOfOverflowingTags: n }),
              }),
          });
}
let D = (e, t, n, i, s) =>
    (0, l.useCallback)(() => {
        if (null == n) return void s(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
            a = t.current?.getBoundingClientRect().width ?? 0,
            r = a > 0 ? 8 : 4,
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
                if ((d += t.offsetWidth + 4) > 296 - l - a - r) break;
                o++;
            }
        }
        s(n.length - o);
    }, [e, t, n?.join(""), i, s]);
var G = n(858808),
    M = n(404760),
    U = n(365611),
    F = n(207730);
function W(e) {
    let { index: t, widgetType: n, game: l, children: s, getWidth: a } = e,
        { manageFocusOnReorder: r } = (0, v.r)();
    return (0, i.jsx)(j.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n, getWidth: a },
        "aria-label": T.intl.formatToPlainString(T.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, A.Un)(n, e, t),
        onEnd: () => r(l.gameId),
        className: F.vF,
        dropBeforeClassName: F.A,
        dropAfterClassName: F.Ze,
        draggingClassName: F.Id,
        children: s,
    });
}
function H(e) {
    let { gameId: t, userId: n, gameName: l, ...s } = e,
        a = (0, h.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: x.GameProfileSources.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == a
        ? (0, i.jsx)(r.D, { ...s, children: l })
        : (0, i.jsx)(r.D, { ...s, children: (0, i.jsx)(o.D, { onClick: a, className: F.sd, children: l }) });
}
function B(e) {
    let { user: t, guildId: n, channelId: l, id: s } = e;
    return (0, i.jsx)(d.A, { id: s, children: T.intl.format(T.t.TM0XDY, { name: I.Ay.getName(n, l, t) }) });
}
function V(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function K(e) {
    let { text: t, user: n, guildId: l, channelId: s } = e,
        a = (0, f.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, i.jsx)(u.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: F.Ls }),
                  (0, i.jsx)(B, { user: n, guildId: l, channelId: s, id: a }),
                  (0, i.jsx)(V, { text: t }),
              ],
          });
}
function z(e) {
    let { text: t, user: n, guildId: s, channelId: r, widgetType: o, gameId: d } = e,
        c = (0, f.GV)(),
        { trackUserProfileEditAction: u } = (0, E.NJ)(),
        g = T.intl.string(T.t.xKSfBT),
        x = t ?? "",
        h = "" !== x.trim(),
        p = l.useCallback(
            (e) => {
                let t = e.trim();
                ((0, A.oc)(o, d, "" !== t ? t : void 0),
                    t !== x.trim() && u({ action: "COMMENTARY_EDITED", widgetEdited: o, gameId: d }));
            },
            [o, d, x, u],
        ),
        I = l.useCallback(() => {
            u({ action: "PRESS_ADD_COMMENTARY", widgetEdited: o });
        }, [o, u]),
        j = (0, i.jsx)("div", { children: (0, i.jsx)(V, { text: h ? x : g, className: a()(F.qC, !h && F.qf) }) });
    return (0, i.jsxs)("div", {
        className: a()(M.kL, F.Im),
        role: "group",
        "aria-labelledby": c,
        children: [
            (0, i.jsx)(B, { user: n, guildId: s, channelId: r, id: c }),
            (0, i.jsx)(m.w, {
                value: x,
                onCommit: p,
                onFocus: I,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                multiline: !0,
                paddingBlock: "md",
                scrollIntoViewOnFocus: !0,
                preview: j,
                placeholder: g,
                label: T.intl.string(T.t.JxKXeT),
                maxLength: 200,
            }),
        ],
    });
}
function X(e) {
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
            coverRef: f,
            className: x,
        } = e,
        h = l.useRef(null),
        { gameId: I, comment: E, tags: k } = o,
        { coverImageUrl: S, gameName: y, isLoading: R } = (0, p.A)(I),
        N = { variant: "heading-sm/medium", color: "text-default" },
        T = c && !u,
        w = 1 === (0, A.cv)(d),
        P = T && (0, A.y9)(d),
        _ = T && !w,
        { registerDragHandleRef: O } = (0, v.r)();
    if (R) return (0, i.jsx)(b.E, {});
    function D() {
        return (0, i.jsx)(C.A, {
            coverRef: f,
            className: null == S || u ? void 0 : U.iL,
            imageSrc: S,
            gameName: y,
            gameId: I,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function M() {
        return (0, i.jsxs)("div", {
            ref: h,
            className: a()(F.Nr, x),
            children: [
                _
                    ? (0, i.jsxs)("div", {
                          className: F.An,
                          children: [D(), (0, i.jsx)(j.jV, { buttonRef: O(o.gameId), className: F.BU })],
                      })
                    : D(),
                (0, i.jsxs)("div", {
                    className: F.zH,
                    children: [
                        u
                            ? (0, i.jsx)(r.D, { ...N, children: y })
                            : (0, i.jsx)(H, { gameId: I, userId: t.id, gameName: y, ...N }),
                        P
                            ? (0, i.jsx)(z, { text: E, user: t, guildId: n, channelId: s, widgetType: d, gameId: I })
                            : (0, i.jsx)(K, { text: E, user: t, guildId: n, channelId: s }),
                        (0, i.jsx)(L, {
                            tags: k,
                            allowEditing: c,
                            widgetType: d,
                            gameId: I,
                            disableInteraction: u,
                            className: F._A,
                        }),
                    ],
                }),
                T && (0, i.jsx)(G.A, { game: o, widgetType: d, className: F.vS, onRemove: () => m?.(o.gameId) }),
            ],
        });
    }
    return _
        ? (0, i.jsx)(W, {
              index: g ?? 0,
              widgetType: d,
              game: o,
              getWidth: () => h.current?.offsetWidth,
              children: M(),
          })
        : M();
}
