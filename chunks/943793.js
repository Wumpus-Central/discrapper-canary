n.d(t, { A: () => z });
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
    m = n(915089),
    x = n(409626),
    f = n(692969),
    h = n(201438),
    p = n(562153),
    I = n(183555),
    j = n(735321),
    E = n(451395),
    A = n(761431),
    v = n(823016),
    C = n(788593),
    S = n(492280),
    b = n(866665),
    k = n(147925),
    y = n(123181),
    T = n(229087),
    N = n(753437),
    R = n(375708),
    w = n(149253);
function L(e) {
    let { tags: t, allowEditing: n, widgetType: s, gameId: a, className: o, disableInteraction: d = !1 } = e,
        c = n && !d,
        u = t?.filter((e) => null != (0, N.W3)(e)) ?? [],
        g = u.length > 0,
        m = c && (0, j.mS)(s) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, I.NJ)(),
        h = (0, l.useRef)(new Map()),
        p = (0, l.useRef)(null),
        E = (0, l.useRef)(null),
        [A, v] = (0, l.useState)(0),
        [C, S] = (0, l.useState)(!1),
        b = D(p, E, u, h, v),
        k = (0, l.useCallback)(
            (e, t) => {
                ((0, j.s1)(s, a, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: s, gameId: a }));
            },
            [s, a, f],
        ),
        L = (0, l.useCallback)(() => {
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
    let P = C ? u : u.slice(0, u.length - A);
    return (0, i.jsxs)("div", {
        className: r()(w.I4, o),
        children: [
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: w.Tw,
                            "aria-label": R.intl.string(R.t.EfjTi4),
                            children: P.map((e) =>
                                (0, i.jsx)(
                                    T.A,
                                    {
                                        tag: e,
                                        onRemove: c
                                            ? () => {
                                                  ((0, j.tg)(s, a, e),
                                                      f({ action: "TAG_REMOVED", widgetEdited: s, gameId: a }));
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
                            (0, i.jsx)(O, {
                                buttonRef: p,
                                isExpanded: C,
                                numberOfOverflowingTags: A,
                                onExpandTags: () => {
                                    (S(!0), x({ action: "EXPAND_GAME_TAGS" }));
                                },
                                onCollapseTags: () => {
                                    (S(!1), x({ action: "COLLAPSE_GAME_TAGS" }));
                                },
                                disableInteraction: d,
                            }),
                    ],
                }),
            m && (0, i.jsx)(y.A, { tags: t, onTagsChange: k, onOpen: L, ref: E }),
        ],
    });
}
function P(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function _() {
    return (0, i.jsx)(k.A, { direction: k.A.Directions.LEFT, width: 12, height: 12, className: w.OW });
}
function O(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: l,
            onCollapseTags: s,
            disableInteraction: a,
            buttonRef: d,
        } = e,
        c = t ? R.intl.string(R.t.z9VPrQ) : R.intl.string(R.t.mriLXL),
        u = t ? R.intl.string(R.t.z9VPrQ) : R.intl.formatToPlainString(R.t.F6iMs4, { count: n });
    return a
        ? (0, i.jsx)("div", {
              className: r()(w.X1, w.r9),
              ref: d,
              children: (0, i.jsx)(P, { numberOfOverflowingTags: n }),
          })
        : (0, i.jsx)(b.m, {
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
var G = n(858808),
    M = n(365611),
    U = n(207730);
function F(e) {
    let { index: t, widgetType: n, game: l, children: s, getWidth: r } = e,
        { manageFocusOnReorder: a } = (0, v.r)();
    return (0, i.jsx)(E.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n, getWidth: r },
        "aria-label": R.intl.formatToPlainString(R.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, j.Un)(n, e, t),
        onEnd: () => a(l.gameId),
        className: U.vF,
        dropBeforeClassName: U.A,
        dropAfterClassName: U.Ze,
        draggingClassName: U.Id,
        children: s,
    });
}
function W(e) {
    let { gameId: t, userId: n, gameName: l, ...s } = e,
        r = (0, f.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: x.GameProfileSources.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, i.jsx)(a.D, { ...s, children: l })
        : (0, i.jsx)(a.D, { ...s, children: (0, i.jsx)(o.D, { onClick: r, className: U.sd, children: l }) });
}
function H(e) {
    let { user: t, guildId: n, channelId: l, id: s } = e;
    return (0, i.jsx)(d.A, { id: s, children: R.intl.format(R.t.TM0XDY, { name: p.Ay.getName(n, l, t) }) });
}
function V(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
}
function B(e) {
    let { text: t, user: n, guildId: l, channelId: s } = e,
        r = (0, m.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, i.jsxs)("div", {
              role: "group",
              "aria-labelledby": r,
              children: [
                  (0, i.jsx)(u.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: U.Ls }),
                  (0, i.jsx)(H, { user: n, guildId: l, channelId: s, id: r }),
                  (0, i.jsx)(V, { text: t }),
              ],
          });
}
function Y(e) {
    let { text: t, user: n, guildId: s, channelId: a, widgetType: o, gameId: d } = e,
        c = (0, m.GV)(),
        { trackUserProfileEditAction: u } = (0, I.NJ)(),
        g = R.intl.string(R.t.xKSfBT),
        x = t ?? "",
        f = "" !== x.trim(),
        h = l.useCallback(
            (e) => {
                let t = e.trim();
                ((0, j.oc)(o, d, "" !== t ? t : void 0),
                    t !== x.trim() && u({ action: "COMMENTARY_EDITED", widgetEdited: o, gameId: d }));
            },
            [o, d, x, u],
        ),
        p = (0, A.T)({ value: x, onCommit: h }),
        { handleStartEditing: E } = p,
        v = l.useCallback(() => {
            (u({ action: "PRESS_ADD_COMMENTARY", widgetEdited: o }), E());
        }, [o, u, E]),
        C = (0, i.jsx)("div", { children: (0, i.jsx)(V, { text: f ? x : g, className: r()(U.qC, !f && U.qf) }) });
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": c,
        children: [
            (0, i.jsx)(H, { user: n, guildId: s, channelId: a, id: c }),
            (0, i.jsx)(A.y, {
                ...p,
                handleStartEditing: v,
                variant: "multiline",
                preview: C,
                placeholder: g,
                label: R.intl.string(R.t.JxKXeT),
                maxLength: 200,
                textVariant: "text-sm/normal",
                className: r()(U.Im, { [U.kS]: p.isEditing }),
            }),
        ],
    });
}
function z(e) {
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
        p = l.useRef(null),
        { gameId: I, comment: A, tags: b } = o,
        { coverImageUrl: k, gameName: y, isLoading: T } = (0, h.A)(I),
        N = { variant: "heading-sm/medium", color: "text-default" },
        R = c && !u,
        w = 1 === (0, j.cv)(d),
        P = R && (0, j.y9)(d),
        _ = R && !w,
        { registerDragHandleRef: O } = (0, v.r)();
    if (T) return (0, i.jsx)(S.E, {});
    function D() {
        return (0, i.jsx)(C.A, {
            coverRef: x,
            className: null == k || u ? void 0 : M.iL,
            imageSrc: k,
            gameName: y,
            gameId: I,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function H() {
        return (0, i.jsxs)("div", {
            ref: p,
            className: r()(U.Nr, f),
            children: [
                _
                    ? (0, i.jsxs)("div", {
                          className: U.An,
                          children: [D(), (0, i.jsx)(E.jV, { buttonRef: O(o.gameId), className: U.BU })],
                      })
                    : D(),
                (0, i.jsxs)("div", {
                    className: U.zH,
                    children: [
                        u
                            ? (0, i.jsx)(a.D, { ...N, children: y })
                            : (0, i.jsx)(W, { gameId: I, userId: t.id, gameName: y, ...N }),
                        P
                            ? (0, i.jsx)(Y, { text: A, user: t, guildId: n, channelId: s, widgetType: d, gameId: I })
                            : (0, i.jsx)(B, { text: A, user: t, guildId: n, channelId: s }),
                        (0, i.jsx)(L, {
                            tags: b,
                            allowEditing: c,
                            widgetType: d,
                            gameId: I,
                            disableInteraction: u,
                            className: U._A,
                        }),
                    ],
                }),
                R && (0, i.jsx)(G.A, { game: o, widgetType: d, className: U.vS, onRemove: () => m?.(o.gameId) }),
            ],
        });
    }
    return _
        ? (0, i.jsx)(F, {
              index: g ?? 0,
              widgetType: d,
              game: o,
              getWidth: () => p.current?.offsetWidth,
              children: H(),
          })
        : H();
}
