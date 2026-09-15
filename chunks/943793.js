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
    m = n(22231),
    x = n(915089),
    f = n(409626),
    h = n(692969),
    p = n(201438),
    I = n(562153),
    j = n(183555),
    A = n(735321),
    E = n(451395),
    v = n(761431),
    C = n(823016),
    S = n(788593),
    b = n(492280),
    k = n(866665),
    y = n(147925),
    T = n(123181),
    N = n(229087),
    R = n(753437),
    w = n(375708),
    L = n(149253);
function P(e) {
    let { tags: t, allowEditing: n, widgetType: s, gameId: a, className: o, disableInteraction: d = !1 } = e,
        c = n && !d,
        u = t?.filter((e) => null != (0, R.W3)(e)) ?? [],
        g = u.length > 0,
        m = c && (0, A.mS)(s) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, j.NJ)(),
        h = (0, l.useRef)(new Map()),
        p = (0, l.useRef)(null),
        I = (0, l.useRef)(null),
        [E, v] = (0, l.useState)(0),
        [C, S] = (0, l.useState)(!1),
        b = G(p, I, u, h, v),
        k = (0, l.useCallback)(
            (e, t) => {
                ((0, A.s1)(s, a, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: s, gameId: a }));
            },
            [s, a, f],
        ),
        y = (0, l.useCallback)(() => {
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
    let P = C ? u : u.slice(0, u.length - E);
    return (0, i.jsxs)("div", {
        className: r()(L.I4, o),
        children: [
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: L.Tw,
                            "aria-label": w.intl.string(w.t.EfjTi4),
                            children: P.map((e) =>
                                (0, i.jsx)(
                                    N.A,
                                    {
                                        tag: e,
                                        onRemove: c
                                            ? () => {
                                                  ((0, A.tg)(s, a, e),
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
                        E > 0 &&
                            (0, i.jsx)(D, {
                                buttonRef: p,
                                isExpanded: C,
                                numberOfOverflowingTags: E,
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
            m && (0, i.jsx)(T.A, { tags: t, onTagsChange: k, onOpen: y, ref: I }),
        ],
    });
}
function _(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function O() {
    return (0, i.jsx)(y.A, { direction: y.A.Directions.LEFT, width: 12, height: 12, className: L.OW });
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
              children: (0, i.jsx)(_, { numberOfOverflowingTags: n }),
          })
        : (0, i.jsx)(k.m, {
              text: c,
              ariaHidden: t,
              children: (0, i.jsx)(o.D, {
                  innerRef: d,
                  onClick: t ? s : l,
                  "aria-label": u,
                  className: t ? L.cS : L.X1,
                  children: t ? (0, i.jsx)(O, {}) : (0, i.jsx)(_, { numberOfOverflowingTags: n }),
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
    return (0, i.jsx)(E.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: n, getWidth: r },
        "aria-label": w.intl.formatToPlainString(w.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, A.Un)(n, e, t),
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
        r = (0, h.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: f.GameProfileSources.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == r
        ? (0, i.jsx)(a.D, { ...s, children: l })
        : (0, i.jsx)(a.D, { ...s, children: (0, i.jsx)(o.D, { onClick: r, className: W.sd, children: l }) });
}
function V(e) {
    let { user: t, guildId: n, channelId: l, id: s } = e;
    return (0, i.jsx)(d.A, { id: s, children: w.intl.format(w.t.TM0XDY, { name: I.Ay.getName(n, l, t) }) });
}
function B(e) {
    let { text: t, className: n } = e;
    return (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: n, children: t });
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
                  (0, i.jsx)(u.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: W.Ls }),
                  (0, i.jsx)(V, { user: n, guildId: l, channelId: s, id: r }),
                  (0, i.jsx)(B, { text: t }),
              ],
          });
}
function Y(e) {
    let { text: t, user: n, guildId: s, channelId: a, widgetType: o, gameId: d } = e,
        c = (0, x.GV)(),
        { trackUserProfileEditAction: u } = (0, j.NJ)(),
        f = w.intl.string(w.t.xKSfBT),
        h = t ?? "",
        p = "" !== h.trim(),
        I = l.useCallback(
            (e) => {
                let t = e.trim();
                ((0, A.oc)(o, d, "" !== t ? t : void 0),
                    t !== h.trim() && u({ action: "COMMENTARY_EDITED", widgetEdited: o, gameId: d }));
            },
            [o, d, h, u],
        ),
        E = (0, v.T)({ value: h, onCommit: I }),
        { handleStartEditing: C, isInlineSurface: S } = E,
        b = l.useCallback(() => {
            (u({ action: "PRESS_ADD_COMMENTARY", widgetEdited: o }), C());
        }, [o, u, C]),
        k = (0, i.jsxs)("div", {
            children: [
                !S && (0, i.jsx)(m.PencilIcon, { size: "xxs", color: g.A.colors.ICON_MUTED, className: W.Ls }),
                (0, i.jsx)(B, { text: p ? h : f, className: r()(W.qC, !p && W.qf) }),
            ],
        });
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": c,
        children: [
            (0, i.jsx)(V, { user: n, guildId: s, channelId: a, id: c }),
            (0, i.jsx)(v.y, {
                ...E,
                handleStartEditing: b,
                variant: "multiline",
                rows: 3,
                preview: k,
                placeholder: f,
                label: w.intl.string(w.t.JxKXeT),
                editButtonAriaLabel: w.intl.string(w.t.ppb9MJ),
                maxLength: 200,
                textVariant: "text-sm/normal",
                removeVerticalPadding: !0,
                className: r()(W.Im, { [W.kS]: E.isEditing }),
            }),
        ],
    });
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
        { gameId: I, comment: j, tags: v } = o,
        { coverImageUrl: k, gameName: y, isLoading: T } = (0, p.A)(I),
        N = { variant: "heading-sm/medium", color: "text-default" },
        R = c && !u,
        w = 1 === (0, A.cv)(d),
        L = R && (0, A.y9)(d),
        _ = R && !w,
        { registerDragHandleRef: O } = (0, C.r)();
    if (T) return (0, i.jsx)(b.E, {});
    function D() {
        return (0, i.jsx)(S.A, {
            coverRef: x,
            className: null == k || u ? void 0 : U.iL,
            imageSrc: k,
            gameName: y,
            gameId: I,
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
                _
                    ? (0, i.jsxs)("div", {
                          className: W.An,
                          children: [D(), (0, i.jsx)(E.jV, { buttonRef: O(o.gameId), className: W.BU })],
                      })
                    : D(),
                (0, i.jsxs)("div", {
                    className: W.zH,
                    children: [
                        u
                            ? (0, i.jsx)(a.D, { ...N, children: y })
                            : (0, i.jsx)(H, { gameId: I, userId: t.id, gameName: y, ...N }),
                        L
                            ? (0, i.jsx)(Y, { text: j, user: t, guildId: n, channelId: s, widgetType: d, gameId: I })
                            : (0, i.jsx)(z, { text: j, user: t, guildId: n, channelId: s }),
                        (0, i.jsx)(P, {
                            tags: v,
                            allowEditing: c,
                            widgetType: d,
                            gameId: I,
                            disableInteraction: u,
                            className: W._A,
                        }),
                    ],
                }),
                R && (0, i.jsx)(M.A, { game: o, widgetType: d, className: W.vS, onRemove: () => m?.(o.gameId) }),
            ],
        });
    }
    return _
        ? (0, i.jsx)(F, {
              index: g ?? 0,
              widgetType: d,
              game: o,
              getWidth: () => h.current?.offsetWidth,
              children: G(),
          })
        : G();
}
