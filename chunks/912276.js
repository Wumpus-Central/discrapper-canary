n.d(t, {
    A: () => D,
    D: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n(92674),
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
    y = n(690521),
    b = n(403362);
n(806931);
var O = n(307731),
    v = n(650583),
    A = n(845762);

function I(e, t, n) {
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

function S(e) {
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
                I(e, t, n[t]);
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
    w = [
        g.Ay.getByName("thumbsup"),
        g.Ay.getByName("eyes"),
        g.Ay.getByName("laughing"),
        g.Ay.getByName("watermelon"),
        g.Ay.getByName("fork_and_knife"),
        g.Ay.getByName("yum"),
    ].filter(b.Vq);

function R(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: s } = e,
        c = i.useRef(null),
        f = (0, p.M)(c);
    return (0, r.jsx)("span", {
        ref: c,
        children: (0, r.jsx)(u.DUT, {
            onClick: a,
            focusProps: {
                enabled: !n,
            },
            children: (0, r.jsx)(u.c7X, {
                config: h.B,
                from: {
                    value: 0,
                },
                to: {
                    value: +!!f,
                },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(l.animated.div, {
                        style: {
                            transform: i.to([0, 1], [1, 1.14]).to((e) => "scale(".concat(e, ")")),
                        },
                        children: (0, r.jsx)(d.A, {
                            className: o()(A.Zg, s, {
                                [A.c4]: n,
                            }),
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
                className: A.Nz,
                onClick: () => {
                    i(!n), a();
                },
                children: (0, r.jsx)(u.abt, {
                    size: "md",
                    color: "currentColor",
                    className: o()(A.Gu, {
                        [A.Y9]: n,
                    }),
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
            recentlyUsedEmojis: b,
            analyticsOverride: I,
            ref: T,
        } = e,
        D = (0, f.GV)(),
        [L, x] = i.useState(!1),
        M = (0, _.Fj)(t.guild_id),
        j = (0, s.uniqBy)([...M, ...w], "name")
            .filter(
                (e) =>
                    !y.Ay.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: t,
                        intention: N,
                    }),
            )
            .slice(0, 8);
    null != b && b.length > 0 && j.splice(j.length - 1, 1, b[0]);
    let k = (e) => {
            x(e), null == h || h(e);
        },
        U = (e) => {
            let { emoji: t, willClose: n } = e;
            null == t && n ? a() : (null != t && d(t), k(!n), n && E.Om.setSearchPlaceholder(null));
        },
        G = (e) => {
            null != e && e.key !== v.dh.TAB && (e.key !== v.dh.ENTER || e.shiftKey ? k(!0) : k(!L));
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
                className: A.kL,
                children: [
                    (0, r.jsx)(m.A, {
                        analyticsOverride: I,
                        channel: t,
                        className: o()(A.Mk, {
                            [A.DZ]: L,
                        }),
                        headerClassName: o()(A.AW, {
                            [A.v6]: L,
                        }),
                        closePopout: a,
                        onSelectEmoji: L ? U : () => {},
                        shouldHidePickerActions: !L,
                        wrapper: "div",
                        pickerIntention: N,
                        searchProps: C(S({}, g), {
                            accessory: (0, r.jsx)(P, {
                                otherAccessories: null == g ? void 0 : g.accessory,
                                isEmojiPickerExpanded: L,
                                onSetExpanded: k,
                                onFocus: l,
                            }),
                            onKeyDown: G,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: A.nt,
                        children: (0, r.jsx)("div", {
                            className: o()(A.Q0, A.Vg),
                            children: j.map((e) => {
                                let n = y.Ay.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: O.b_.CHAT,
                                });
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        className: A.NI,
                                        children: (0, r.jsx)(c.m_, {
                                            text: e.name,
                                            position: "top",
                                            asContainer: !0,
                                            children: (0, r.jsx)(R, {
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
