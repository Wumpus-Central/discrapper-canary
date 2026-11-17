l.d(t, { default: () => Z });
var n = l(477900),
    i = l(582128),
    r = l(347704),
    a = l(664947),
    s = l(124077),
    o = l(674008),
    c = l(674725),
    d = l(192308),
    u = l(673383),
    m = l(331322),
    g = l(534514),
    f = l(834730),
    h = l(682163),
    x = l(792996),
    p = l(393612);
function b(e) {
    let { linkedGuild: t } = e,
        { id: l, name: r, icon: a, presenceCount: s, memberCount: o } = t,
        c = i.useMemo(() => ({ id: l, name: r, icon: a, features: [] }), [l, r, a]);
    return (0, n.jsx)("div", {
        className: p.Nr,
        children: (0, n.jsxs)(m.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            children: [
                (0, n.jsx)(h.Ay, { guild: c, size: h.Ay.Sizes.LARGER, className: p.Kk, "aria-hidden": !0 }),
                (0, n.jsxs)(m.B, {
                    gap: 4,
                    className: p.pq,
                    children: [
                        (0, n.jsx)(f.E, {
                            variant: "body-lg/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: r,
                        }),
                        (0, n.jsxs)(m.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 16,
                            wrap: !0,
                            children: [
                                null != s
                                    ? (0, n.jsxs)(m.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, n.jsx)("span", { className: p.RS }),
                                              (0, n.jsx)(f.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: x.intl.formatToPlainString(x.t["LC+S+m"], {
                                                      membersOnline: s,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != o
                                    ? (0, n.jsxs)(m.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, n.jsx)("span", { className: p.Ps }),
                                              (0, n.jsx)(f.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: x.intl.formatToPlainString(x.t.zRl6XR, { count: o }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var j = l(503698),
    y = l.n(j),
    N = l(333007),
    v = l(62617),
    S = l(559106),
    T = l(516521),
    I = l(939249),
    P = l(752222);
let E = [
    { key: "auto-sync", getText: () => x.intl.string(P.default.WUVzdk) },
    { key: "linked-channel", getText: () => x.intl.string(P.default.MEQJ1m) },
    { key: "guild-invite", getText: (e) => x.intl.formatToPlainString(P.default["hn+Lsg"], { noun: e }) },
];
var M = l(561193);
let C = {
        "auto-sync": function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, v.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, n.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/a8657a9c456c0aefdec707d59e7313ad51068b73d6f0fef93709143f102f26ec.svg",
                className: (0, v.Z)(c),
                alt: t,
                "aria-label": l,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
        "linked-channel": function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, v.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, n.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/4d9566d8a1024c5d82716f48abf416a06846af5693bdffb3d73c4c00afcf83f0.svg",
                className: (0, v.Z)(c),
                alt: t,
                "aria-label": l,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
        "guild-invite": function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, v.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, n.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/269d3b470672819a9d2a378e0e915fa616c4481680b7f0d7969fbded4fee21ae.svg",
                className: (0, v.Z)(c),
                alt: t,
                "aria-label": l,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
    },
    z = E.map((e) => ({ ...e, Asset: C[e.key] })),
    B = { top: -4, right: 4, bottom: -4, left: 20 };
function k(e) {
    let { noun: t } = e,
        l = i.useRef(null),
        r = i.useRef([]),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(void 0),
        [c, d] = i.useState(0),
        [u, g] = i.useState("idle");
    function h(e, t) {
        let l = r.current[0],
            n = r.current[t];
        return null == l || null == n ? null : Math.min(n.offsetLeft - l.offsetLeft, e.scrollWidth - e.clientWidth);
    }
    function p(e) {
        let t = 0,
            l = 1 / 0;
        return (
            z.forEach((n, i) => {
                let r = h(e, i);
                if (null == r) return;
                let a = Math.abs(r - e.scrollLeft);
                a <= l && ((t = i), (l = a));
            }),
            t
        );
    }
    function b() {
        (window.clearTimeout(o.current), (s.current = null), g("idle"));
    }
    return (
        i.useEffect(() => () => window.clearTimeout(o.current), []),
        (0, n.jsxs)(m.B, {
            gap: 16,
            children: [
                (0, n.jsx)(S.vN, {
                    offset: B,
                    children: (0, n.jsx)(T.zC, {
                        ref: l,
                        orientation: "horizontal",
                        className: y()(M.XG, { [M.cB]: "dragging" === u, [M.Ni]: "settling" === u }),
                        role: "region",
                        "aria-label": x.intl.string(P.default.yFqGy8),
                        tabIndex: 0,
                        onScroll: function () {
                            let e = l.current?.getScrollerNode();
                            null != e && (d(p(e)), null != s.current && 1 > Math.abs(e.scrollLeft - s.current) && b());
                        },
                        onPointerDown: function (e) {
                            let t = l.current?.getScrollerNode();
                            "mouse" === e.pointerType &&
                                0 === e.button &&
                                null != t &&
                                (e.currentTarget.setPointerCapture(e.pointerId),
                                (a.current = {
                                    pointerId: e.pointerId,
                                    startX: e.clientX,
                                    startScrollLeft: t.scrollLeft,
                                    startIndex: p(t),
                                }),
                                b(),
                                g("dragging"));
                        },
                        onPointerMove: function (e) {
                            let t = a.current,
                                n = l.current?.getScrollerNode();
                            t?.pointerId === e.pointerId &&
                                null != n &&
                                (n.scrollLeft = t.startScrollLeft - (e.clientX - t.startX));
                        },
                        onLostPointerCapture: function (e) {
                            let t = a.current,
                                n = l.current?.getScrollerNode();
                            if (t?.pointerId !== e.pointerId || null == n) return;
                            a.current = null;
                            let i = p(n),
                                r = n.scrollLeft - t.startScrollLeft;
                            i === t.startIndex &&
                                Math.abs(r) > 40 &&
                                (i = Math.min(Math.max(i + Math.sign(r), 0), z.length - 1));
                            let c = h(n, i);
                            null == c || 1 > Math.abs(n.scrollLeft - c)
                                ? g("idle")
                                : ((0, N.flushSync)(() => g("settling")),
                                  (s.current = c),
                                  (o.current = window.setTimeout(b, 1e3)),
                                  n.scrollTo({ left: c }));
                        },
                        onDragStart: (e) => e.preventDefault(),
                        children: (0, n.jsx)("ul", {
                            className: M.kR,
                            children: z.map((e, l) => {
                                let { key: i, getText: a, Asset: s } = e;
                                return (0, n.jsxs)(
                                    "li",
                                    {
                                        ref: (e) => {
                                            r.current[l] = e;
                                        },
                                        className: M.Nr,
                                        children: [
                                            (0, n.jsx)(s, { alt: "", ariaHidden: !0, width: "100%" }),
                                            (0, n.jsx)(f.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: a(t),
                                            }),
                                        ],
                                    },
                                    i,
                                );
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: M.r$,
                    children: z.map((e, t) => {
                        let { key: i } = e;
                        return (0, n.jsx)(
                            I.D,
                            {
                                className: y()(M.Om, { [M.o]: t === c }),
                                "aria-label": x.intl.formatToPlainString(x.t["2SXOrM"], { pageNumber: t + 1 }),
                                "aria-current": t === c || void 0,
                                onClick: () =>
                                    (function (e) {
                                        let t = l.current?.getScrollerNode();
                                        if (null == t) return;
                                        let n = h(t, e);
                                        null != n && t.scrollTo({ left: n });
                                    })(t),
                            },
                            i,
                        );
                    }),
                }),
            ],
        })
    );
}
var w = l(785952);
function A(e) {
    let { invite: t } = e;
    return (0, n.jsxs)(m.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(m.B, {
                gap: 24,
                align: "center",
                children: [
                    (0, n.jsx)(g.D, {
                        variant: "heading-md/semibold",
                        color: "text-subtle",
                        className: w.G,
                        children: x.intl.formatToPlainString(P.default.WmxMAI, {
                            displayNoun: t.displayNoun ?? "other",
                        }),
                    }),
                    (0, n.jsx)(b, { linkedGuild: t.linkedGuild }),
                ],
            }),
            (0, n.jsxs)(m.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(g.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: x.intl.string(P.default.yFqGy8),
                    }),
                    (0, n.jsx)(k, { noun: (0, s.A)({ displayNoun: t.displayNoun, lowercase: !0 }) }),
                ],
            }),
        ],
    });
}
var L = l(646514),
    W = l(177953),
    D = l(189367),
    R = l(695366),
    _ = l(289873),
    G = l(378763),
    X = l(532049);
function H(e) {
    let { id: t, text: l, eligible: i } = e;
    return i
        ? (0, n.jsx)(f.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-subtle", children: l })
        : (0, n.jsxs)(m.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, n.jsx)(R.CircleErrorIcon, { size: "xs", color: L.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                  (0, n.jsx)(f.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-muted", children: l }),
              ],
          });
}
let U = i.memo(function (e) {
    let { character: t, noun: l } = e,
        r = i.useId(),
        a = i.useId(),
        s = i.useRef(null),
        o = !t.eligible,
        c = t.eligible ? t.description : (t.description ?? x.intl.formatToPlainString(P.default.VNY3C1, { noun: l }));
    return (0, n.jsx)(D.A1, {
        value: t.id,
        isDisabled: o,
        "aria-labelledby": r,
        "aria-describedby": null != c ? a : void 0,
        children: (0, n.jsx)(S.vN, {
            focusTarget: s,
            ringTarget: s,
            within: !0,
            children: (0, n.jsxs)(D.a, {
                ref: s,
                className: X.Nr,
                children: [
                    (0, n.jsx)(G.A, { iconUrl: t.iconUrl, size: 48, className: X.Vw }),
                    (0, n.jsxs)(m.B, {
                        gap: 4,
                        className: X.WD,
                        children: [
                            (0, n.jsx)(f.E, {
                                id: r,
                                tag: "span",
                                variant: "body-md/semibold",
                                color: o ? "text-muted" : "text-strong",
                                children: t.name,
                            }),
                            null != c ? (0, n.jsx)(H, { id: a, text: c, eligible: t.eligible }) : null,
                        ],
                    }),
                ],
            }),
        }),
    });
});
function V(e) {
    let { characters: t, selectedCharacterId: l, onSelect: r, noun: a } = e,
        s = i.useId(),
        o = i.useMemo(() => (null != t ? [...t].sort((e, t) => Number(t.eligible) - Number(e.eligible)) : null), [t]);
    if (null == o) return (0, n.jsx)(_.y, {});
    let c = o.some((e) => !e.eligible);
    return (0, n.jsxs)(m.B, {
        gap: 12,
        children: [
            (0, n.jsx)(f.E, {
                id: s,
                variant: "body-md/medium",
                color: "text-subtle",
                className: X.DD,
                children: x.intl.formatToPlainString(P.default["Xm+emB"], { noun: a }),
            }),
            (0, n.jsx)(D.z6, {
                "aria-labelledby": s,
                value: l,
                onChange: r,
                className: X.kR,
                children: o.map((e) => (0, n.jsx)(U, { character: e, noun: a }, e.id)),
            }),
            c
                ? (0, n.jsx)(f.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: x.intl.formatToPlainString(P.default.ybJIQJ, { noun: a }),
                  })
                : null,
        ],
    });
}
var O = l(171153);
function K(e) {
    let { invite: t, noun: l, isMultiCharacter: i, characters: r, selectedCharacterId: a, onSelectCharacter: s } = e,
        { organization: o, application: c } = t,
        { memberCount: d, maxMembers: u } = o;
    return (0, n.jsxs)(m.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(m.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, n.jsx)(G.A, { iconUrl: o.iconUrl, size: 64, className: O.H }),
                    (0, n.jsx)(g.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: O.G,
                        children: x.intl.formatToPlainString(P.default["bfJ/sO"], {
                            noun: l,
                            orgName: o.name,
                            gameName: c.name,
                        }),
                    }),
                    null != d && null != u
                        ? (0, n.jsxs)(m.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              fullWidth: !1,
                              children: [
                                  (0, n.jsx)(W.GroupIcon, { size: "xs", color: L.A.colors.ICON_MUTED }),
                                  (0, n.jsx)(f.E, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      children: x.intl.formatToPlainString(P.default.VuENGl, { count: d, max: u }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            i ? (0, n.jsx)(V, { characters: r, selectedCharacterId: a, onSelect: s, noun: l }) : null,
        ],
    });
}
let J = ["VIEW", "ACCEPT"];
function Z(e) {
    let { code: t, ...m } = e,
        g = (0, c.A)(t),
        [f, h] = i.useState("VIEW"),
        p = g?.characterMode === u.Wy.MULTI,
        { data: b } = (0, o.P)(p ? t : null),
        [j, y] = i.useState(null),
        N = b?.find((e) => e.id === j) ?? null,
        [v, S] = i.useState(!1);
    if (null == g) return null;
    let T = (0, s.A)({ displayNoun: g.displayNoun, lowercase: !0 }),
        I = x.intl.formatToPlainString(P.default["jKi+kc"], { noun: (0, s.A)({ displayNoun: g.displayNoun }) }),
        E = [
            {
                stepKey: "VIEW",
                modalProps: { title: I },
                body: (0, n.jsx)(K, {
                    invite: g,
                    noun: T,
                    isMultiCharacter: p,
                    characters: b,
                    selectedCharacterId: j,
                    onSelectCharacter: y,
                }),
                nextEnabled: !p || N?.eligible === !0,
                nextButtonProps: { text: x.intl.string(x.t["3PatSz"]) },
            },
            {
                stepKey: "ACCEPT",
                modalProps: { title: I },
                body: (0, n.jsx)(A, { invite: g }),
                nextButtonProps: { text: x.intl.string(P.default.BaZ6nt) },
                onNext: async function () {
                    let e = p ? N : null;
                    S(!0);
                    try {
                        var i;
                        let {
                            game_organization_join_status: r,
                            game_organization_join_failure_reason: s,
                            guild_join_status: o,
                        } = await a.A.acceptGameOrganizationInvite(t, e?.id);
                        ((i = { joinStatus: r, failureReason: s, guildJoinStatus: o, character: e }),
                            (0, d.mM)(
                                async () => {
                                    let { default: e } = await Promise.all([l.e(525189), l.e(490279)]).then(
                                        l.bind(l, 253914),
                                    );
                                    return (l) => (0, n.jsx)(e, { code: t, result: i, ...l });
                                },
                                { modalKey: u.Vi },
                            ));
                    } finally {
                        S(!1);
                    }
                    return !0;
                },
                backButtonProps: { text: x.intl.string(x.t["13/7kX"]), disabled: v },
            },
        ];
    return (0, n.jsx)(r.t, { ...m, dismissable: !v, steps: E, currentStepKey: f, numberedSteps: J, onStepChange: h });
}
