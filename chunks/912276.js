n.d(t, {
    A: () => D,
    D: () => w,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(432022),
    c = n(435371),
    u = n(397927),
    d = n(565645),
    f = n(915089),
    p = n(713517),
    _ = n(822123),
    h = n(375499),
    m = n(937773),
    g = n(7584),
    E = n(850992),
    b = n(690521),
    y = n(403362);
n(806931);
var O = n(307731),
    A = n(650583),
    v = n(845762);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = O.b_.CHAT,
    R = [
        g.Ay.getByName("thumbsup"),
        g.Ay.getByName("eyes"),
        g.Ay.getByName("laughing"),
        g.Ay.getByName("watermelon"),
        g.Ay.getByName("fork_and_knife"),
        g.Ay.getByName("yum"),
    ].filter(y.Vq);
function w(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: o } = e,
        c = i.useRef(null),
        f = (0, p.M)(c);
    return (0, r.jsx)("span", {
        ref: c,
        children: (0, r.jsx)(u.DUT, {
            onClick: a,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(u.c7X, {
                config: h.B,
                from: { value: 0 },
                to: { value: +!!f },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(l.animated.div, {
                        style: {
                            transform: i.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                        },
                        children: (0, r.jsx)(d.A, {
                            className: s()(v.Zg, o, { [v.c4]: n }),
                            emojiId: t.id,
                            emojiName: null == t ? void 0 : t.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
function P(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: i, onFocus: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(u.DUT, {
                className: v.Nz,
                onClick: () => {
                    i(!n), a();
                },
                children: (0, r.jsx)(u.abt, {
                    size: "md",
                    color: "currentColor",
                    className: s()(v.Gu, { [v.Y9]: n }),
                }),
            }),
        ],
    });
}
function D(e) {
    let {
            channel: t,
            title: n,
            closePopout: a,
            onFocus: l,
            onSelectEmoji: d,
            onSelectDisabledEmoji: p,
            onExpandedToggle: h,
            emojiSearchProps: g,
            recentlyUsedEmojis: y,
            analyticsOverride: S,
            ref: T,
        } = e,
        D = (0, f.GV)(),
        [x, L] = i.useState(!1),
        j = (0, _.Fj)(t.guild_id),
        M = (0, o.uniqBy)([...j, ...R], "name")
            .filter(
                (e) =>
                    !b.Ay.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: N,
                    }),
            )
            .slice(0, 8);
    null != y && y.length > 0 && M.splice(M.length - 1, 1, y[0]);
    let k = (e) => {
            L(e), null == h || h(e);
        },
        U = (e) => {
            let { emoji: t, willClose: n } = e;
            null == t && n ? a() : (null != t && d(t), k(!n), n && E.Om.setSearchPlaceholder(null));
        },
        G = (e) => {
            null != e && e.key !== A.dh.TAB && (e.key !== A.dh.ENTER || e.shiftKey ? k(!0) : k(!x));
        };
    return (0, r.jsxs)(u.lGe, {
        "aria-labelledby": D,
        ref: T,
        children: [
            (0, r.jsx)(u.Fmo, {
                forceLevel: 2,
                children: (0, r.jsx)(u.AC4, {
                    children: (0, r.jsx)(u.H, {
                        id: D,
                        children: n,
                    }),
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.kL,
                children: [
                    (0, r.jsx)(m.A, {
                        analyticsOverride: S,
                        channel: t,
                        className: s()(v.Mk, { [v.DZ]: x }),
                        headerClassName: s()(v.AW, { [v.v6]: x }),
                        closePopout: a,
                        onSelectEmoji: x ? U : () => {},
                        shouldHidePickerActions: !x,
                        wrapper: "div",
                        pickerIntention: N,
                        searchProps: C(I({}, g), {
                            accessory: (0, r.jsx)(P, {
                                otherAccessories: null == g ? void 0 : g.accessory,
                                isEmojiPickerExpanded: x,
                                onSetExpanded: k,
                                onFocus: l,
                            }),
                            onKeyDown: G,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: v.nt,
                        children: (0, r.jsx)("div", {
                            className: s()(v.Q0, v.Vg),
                            children: M.map((e) => {
                                let n = b.Ay.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: O.b_.CHAT,
                                });
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        className: v.NI,
                                        children: (0, r.jsx)(c.m_, {
                                            text: e.name,
                                            position: "top",
                                            asContainer: !0,
                                            children: (0, r.jsx)(w, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n
                                                        ? null == p || p(e)
                                                        : U({
                                                              emoji: e,
                                                              willClose: !0,
                                                          });
                                                },
                                            }),
                                        }),
                                    },
                                    e.name,
                                );
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
