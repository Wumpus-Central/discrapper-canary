"use strict";
n.d(t, { A: () => R, D: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(563495),
    u = n(435371),
    c = n(397927),
    d = n(565645),
    _ = n(915089),
    f = n(713517),
    p = n(822123),
    h = n(375499),
    m = n(937773),
    g = n(7584),
    E = n(850992),
    A = n(690521),
    I = n(403362);
n(806931);
var T = n(307731),
    y = n(650583),
    S = n(845762);
let v = T.b_.CHAT,
    C = [
        g.Ay.getByName("thumbsup"),
        g.Ay.getByName("eyes"),
        g.Ay.getByName("laughing"),
        g.Ay.getByName("watermelon"),
        g.Ay.getByName("fork_and_knife"),
        g.Ay.getByName("yum"),
    ].filter(I.Vq);
function b(e) {
    let { emoji: t, isDisabled: n = !1, onClick: a, className: o } = e,
        u = i.useRef(null),
        _ = (0, f.M)(u);
    return (0, r.jsx)("span", {
        ref: u,
        children: (0, r.jsx)(c.DUT, {
            onClick: a,
            focusProps: { enabled: !n },
            children: (0, r.jsx)(c.c7X, {
                config: h.B,
                from: { value: 0 },
                to: { value: +!!_ },
                children: (e) => {
                    let { value: i } = e;
                    return (0, r.jsx)(l.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, r.jsx)(d.A, {
                            className: s()(S.Zg, o, { [S.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
function N(e) {
    let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: i, onFocus: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            t,
            (0, r.jsx)(c.DUT, {
                className: S.Nz,
                onClick: () => {
                    i(!n), a();
                },
                children: (0, r.jsx)(c.abt, { size: "md", color: "currentColor", className: s()(S.Gu, { [S.Y9]: n }) }),
            }),
        ],
    });
}
function R(e) {
    let {
            channel: t,
            title: n,
            closePopout: a,
            onFocus: l,
            onSelectEmoji: d,
            onSelectDisabledEmoji: f,
            onExpandedToggle: h,
            emojiSearchProps: g,
            recentlyUsedEmojis: I,
            analyticsOverride: R,
            ref: O,
        } = e,
        D = (0, _.GV)(),
        [L, w] = i.useState(!1),
        x = (0, p.Fj)(t.guild_id),
        P = (0, o.uniqBy)([...x, ...C], "name")
            .filter((e) => !A.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: v }))
            .slice(0, 8);
    null != I && I.length > 0 && P.splice(P.length - 1, 1, I[0]);
    let M = (e) => {
            w(e), h?.(e);
        },
        k = (e) => {
            let { emoji: t, willClose: n } = e;
            null == t && n ? a() : (null != t && d(t), M(!n), n && E.Om.setSearchPlaceholder(null));
        },
        U = (e) => {
            null != e && e.key !== y.dh.TAB && (e.key !== y.dh.ENTER || e.shiftKey ? M(!0) : M(!L));
        };
    return (0, r.jsxs)(c.lGe, {
        "aria-labelledby": D,
        ref: O,
        children: [
            (0, r.jsx)(c.Fmo, {
                forceLevel: 2,
                children: (0, r.jsx)(c.AC4, { children: (0, r.jsx)(c.H, { id: D, children: n }) }),
            }),
            (0, r.jsxs)("div", {
                className: S.kL,
                children: [
                    (0, r.jsx)(m.A, {
                        analyticsOverride: R,
                        channel: t,
                        className: s()(S.Mk, { [S.DZ]: L }),
                        headerClassName: s()(S.AW, { [S.v6]: L }),
                        closePopout: a,
                        onSelectEmoji: L ? k : () => {},
                        shouldHidePickerActions: !L,
                        wrapper: "div",
                        pickerIntention: v,
                        searchProps: {
                            ...g,
                            accessory: (0, r.jsx)(N, {
                                otherAccessories: g?.accessory,
                                isEmojiPickerExpanded: L,
                                onSetExpanded: M,
                                onFocus: l,
                            }),
                            onKeyDown: U,
                        },
                    }),
                    (0, r.jsx)("div", {
                        className: S.nt,
                        children: (0, r.jsx)("div", {
                            className: s()(S.Q0, S.Vg),
                            children: P.map((e) => {
                                let n = A.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: T.b_.CHAT });
                                return (0, r.jsx)(
                                    "div",
                                    {
                                        className: S.NI,
                                        children: (0, r.jsx)(u.m_, {
                                            text: e.name,
                                            position: "top",
                                            asContainer: !0,
                                            children: (0, r.jsx)(b, {
                                                emoji: e,
                                                isDisabled: n,
                                                onClick: () => {
                                                    n ? f?.(e) : k({ emoji: e, willClose: !0 });
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
