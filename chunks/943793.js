i.d(t, { A: () => X });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s);
i(926675);
var r = i(297264),
    o = i(939249),
    d = i(140735),
    c = i(834730),
    u = i(216964),
    g = i(661531),
    m = i(34011),
    x = i(915089),
    f = i(409626),
    h = i(692969),
    p = i(201438),
    I = i(562153),
    A = i(183555),
    j = i(735321),
    E = i(451395),
    v = i(823016),
    C = i(788593),
    S = i(492280),
    b = i(866665),
    k = i(147925),
    y = i(123181),
    T = i(229087),
    N = i(753437),
    R = i(375708),
    w = i(149253);
function L(e) {
    let { tags: t, allowEditing: i, widgetType: s, gameId: r, className: o, disableInteraction: d = !1 } = e,
        c = i && !d,
        u = t?.filter((e) => null != (0, N.W3)(e)) ?? [],
        g = u.length > 0,
        m = c && (0, j.mS)(s) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, A.NJ)(),
        h = (0, l.useRef)(new Map()),
        p = (0, l.useRef)(null),
        I = (0, l.useRef)(null),
        [E, v] = (0, l.useState)(0),
        [C, S] = (0, l.useState)(!1),
        b = D(p, I, u, h, v),
        k = (0, l.useCallback)(
            (e, t) => {
                ((0, j.s1)(s, r, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: s, gameId: r }));
            },
            [s, r, f],
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
    let _ = C ? u : u.slice(0, u.length - E);
    return (0, n.jsxs)("div", {
        className: a()(w.I4, o),
        children: [
            g &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: w.Tw,
                            "aria-label": R.intl.string(R.t.EfjTi4),
                            children: _.map((e) =>
                                (0, n.jsx)(
                                    T.A,
                                    {
                                        tag: e,
                                        onRemove: c
                                            ? () => {
                                                  ((0, j.tg)(s, r, e),
                                                      f({ action: "TAG_REMOVED", widgetEdited: s, gameId: r }));
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
                            (0, n.jsx)(O, {
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
            m && (0, n.jsx)(y.A, { tags: t, onTagsChange: k, onOpen: L, ref: I }),
        ],
    });
}
function _(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, n.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function P() {
    return (0, n.jsx)(k.A, { direction: k.A.Directions.LEFT, width: 12, height: 12, className: w.OW });
}
function O(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: i,
            onExpandTags: l,
            onCollapseTags: s,
            disableInteraction: r,
            buttonRef: d,
        } = e,
        c = t ? R.intl.string(R.t.z9VPrQ) : R.intl.string(R.t.mriLXL),
        u = t ? R.intl.string(R.t.z9VPrQ) : R.intl.formatToPlainString(R.t.F6iMs4, { count: i });
    return r
        ? (0, n.jsx)("div", {
              className: a()(w.X1, w.r9),
              ref: d,
              children: (0, n.jsx)(_, { numberOfOverflowingTags: i }),
          })
        : (0, n.jsx)(b.m, {
              text: c,
              ariaHidden: t,
              children: (0, n.jsx)(o.D, {
                  innerRef: d,
                  onClick: t ? s : l,
                  "aria-label": u,
                  className: t ? w.cS : w.X1,
                  children: t ? (0, n.jsx)(P, {}) : (0, n.jsx)(_, { numberOfOverflowingTags: i }),
              }),
          });
}
let D = (e, t, i, n, s) =>
    (0, l.useCallback)(() => {
        if (null == i) return void s(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
            a = t.current?.getBoundingClientRect().width ?? 0,
            r = a > 0 ? 8 : 4,
            o = 0,
            d = 0,
            c = n.current;
        for (let e = 0; e < i.length; e++) {
            let t = c.get(i[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        d = 0;
        for (let e = o; e < i.length; e++) {
            let t = c.get(i[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296 - l - a - r) break;
                o++;
            }
        }
        s(i.length - o);
    }, [e, t, i?.join(""), n, s]);
var G = i(858808),
    M = i(404760),
    U = i(365611),
    F = i(207730);
function W(e) {
    let { index: t, widgetType: i, game: l, children: s, getWidth: a } = e,
        { manageFocusOnReorder: r } = (0, v.r)();
    return (0, n.jsx)(E.mG, {
        index: t,
        itemId: l.gameId,
        listType: i,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: l, widgetType: i, getWidth: a },
        "aria-label": R.intl.formatToPlainString(R.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, j.Un)(i, e, t),
        onEnd: () => r(l.gameId),
        className: F.vF,
        dropBeforeClassName: F.A,
        dropAfterClassName: F.Ze,
        draggingClassName: F.Id,
        children: s,
    });
}
function H(e) {
    let { gameId: t, userId: i, gameName: l, ...s } = e,
        a = (0, h.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: f.GameProfileSources.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        });
    return null == a
        ? (0, n.jsx)(r.D, { ...s, children: l })
        : (0, n.jsx)(r.D, { ...s, children: (0, n.jsx)(o.D, { onClick: a, className: F.sd, children: l }) });
}
function V(e) {
    let { user: t, guildId: i, channelId: l, id: s } = e;
    return (0, n.jsx)(d.A, { id: s, children: R.intl.format(R.t.TM0XDY, { name: I.Ay.getName(i, l, t) }) });
}
function B(e) {
    let { text: t, className: i } = e;
    return (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: i, children: t });
}
function Y(e) {
    let { text: t, user: i, guildId: l, channelId: s } = e,
        a = (0, x.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, n.jsxs)("div", {
              role: "group",
              "aria-labelledby": a,
              children: [
                  (0, n.jsx)(u.c, { size: "xxs", color: g.A.colors.ICON_MUTED, className: F.Ls }),
                  (0, n.jsx)(V, { user: i, guildId: l, channelId: s, id: a }),
                  (0, n.jsx)(B, { text: t }),
              ],
          });
}
function z(e) {
    let { text: t, user: i, guildId: s, channelId: r, widgetType: o, gameId: d } = e,
        c = (0, x.GV)(),
        { trackUserProfileEditAction: u } = (0, A.NJ)(),
        g = R.intl.string(R.t.xKSfBT),
        f = t ?? "",
        h = "" !== f.trim(),
        p = l.useCallback(
            (e) => {
                let t = e.trim();
                ((0, j.oc)(o, d, "" !== t ? t : void 0),
                    t !== f.trim() && u({ action: "COMMENTARY_EDITED", widgetEdited: o, gameId: d }));
            },
            [o, d, f, u],
        ),
        I = l.useCallback(() => {
            u({ action: "PRESS_ADD_COMMENTARY", widgetEdited: o });
        }, [o, u]),
        E = (0, n.jsx)("div", { children: (0, n.jsx)(B, { text: h ? f : g, className: a()(F.qC, !h && F.qf) }) });
    return (0, n.jsxs)("div", {
        className: a()(M.kL, F.Im),
        role: "group",
        "aria-labelledby": c,
        children: [
            (0, n.jsx)(V, { user: i, guildId: s, channelId: r, id: c }),
            (0, n.jsx)(m.w, {
                value: f,
                onCommit: p,
                onFocus: I,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                multiline: !0,
                paddingBlock: "md",
                scrollIntoViewOnFocus: !0,
                preview: E,
                placeholder: g,
                label: R.intl.string(R.t.JxKXeT),
                maxLength: 200,
            }),
        ],
    });
}
function X(e) {
    let {
            user: t,
            guildId: i,
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
        { gameId: I, comment: A, tags: b } = o,
        { coverImageUrl: k, gameName: y, isLoading: T } = (0, p.A)(I),
        N = { variant: "heading-sm/medium", color: "text-default" },
        R = c && !u,
        w = 1 === (0, j.cv)(d),
        _ = R && (0, j.y9)(d),
        P = R && !w,
        { registerDragHandleRef: O } = (0, v.r)();
    if (T) return (0, n.jsx)(S.E, {});
    function D() {
        return (0, n.jsx)(C.A, {
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
    function M() {
        return (0, n.jsxs)("div", {
            ref: h,
            className: a()(F.Nr, f),
            children: [
                P
                    ? (0, n.jsxs)("div", {
                          className: F.An,
                          children: [D(), (0, n.jsx)(E.jV, { buttonRef: O(o.gameId), className: F.BU })],
                      })
                    : D(),
                (0, n.jsxs)("div", {
                    className: F.zH,
                    children: [
                        u
                            ? (0, n.jsx)(r.D, { ...N, children: y })
                            : (0, n.jsx)(H, { gameId: I, userId: t.id, gameName: y, ...N }),
                        _
                            ? (0, n.jsx)(z, { text: A, user: t, guildId: i, channelId: s, widgetType: d, gameId: I })
                            : (0, n.jsx)(Y, { text: A, user: t, guildId: i, channelId: s }),
                        (0, n.jsx)(L, {
                            tags: b,
                            allowEditing: c,
                            widgetType: d,
                            gameId: I,
                            disableInteraction: u,
                            className: F._A,
                        }),
                    ],
                }),
                R && (0, n.jsx)(G.A, { game: o, widgetType: d, className: F.vS, onRemove: () => m?.(o.gameId) }),
            ],
        });
    }
    return P
        ? (0, n.jsx)(W, {
              index: g ?? 0,
              widgetType: d,
              game: o,
              getWidth: () => h.current?.offsetWidth,
              children: M(),
          })
        : M();
}
