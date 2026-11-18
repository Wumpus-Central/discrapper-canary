n.d(t, { default: () => F });
var l = n(477900),
    i = n(582128),
    r = n(189213),
    a = n(331322),
    s = n(404778),
    o = n(347704),
    c = n(664947),
    d = n(124077),
    u = n(674008),
    m = n(674725),
    g = n(192308),
    f = n(673383),
    h = n(534514),
    x = n(834730),
    p = n(682163),
    b = n(792996),
    j = n(393612);
function y(e) {
    let { linkedGuild: t } = e,
        { id: n, name: r, icon: s, presenceCount: o, memberCount: c } = t,
        d = i.useMemo(() => ({ id: n, name: r, icon: s, features: [] }), [n, r, s]);
    return (0, l.jsx)("div", {
        className: j.Nr,
        children: (0, l.jsxs)(a.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            children: [
                (0, l.jsx)(p.Ay, { guild: d, size: p.Ay.Sizes.LARGER, className: j.Kk, "aria-hidden": !0 }),
                (0, l.jsxs)(a.B, {
                    gap: 4,
                    className: j.pq,
                    children: [
                        (0, l.jsx)(x.E, {
                            variant: "body-lg/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: r,
                        }),
                        (0, l.jsxs)(a.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 16,
                            wrap: !0,
                            children: [
                                null != o
                                    ? (0, l.jsxs)(a.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, l.jsx)("span", { className: j.RS }),
                                              (0, l.jsx)(x.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: b.intl.formatToPlainString(b.t["LC+S+m"], {
                                                      membersOnline: o,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != c
                                    ? (0, l.jsxs)(a.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, l.jsx)("span", { className: j.Ps }),
                                              (0, l.jsx)(x.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: b.intl.formatToPlainString(b.t.zRl6XR, { count: c }),
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
var N = n(503698),
    v = n.n(N),
    S = n(333007),
    T = n(62617),
    I = n(559106),
    E = n(516521),
    P = n(939249),
    k = n(752222);
let B = [
    { key: "auto-sync", getText: () => b.intl.string(k.default.WUVzdk) },
    { key: "linked-channel", getText: () => b.intl.string(k.default.MEQJ1m) },
    { key: "guild-invite", getText: (e) => b.intl.formatToPlainString(k.default["hn+Lsg"], { noun: e }) },
];
var C = n(561193);
let M = {
        "auto-sync": function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, T.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, l.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/a8657a9c456c0aefdec707d59e7313ad51068b73d6f0fef93709143f102f26ec.svg",
                className: (0, T.Z)(c),
                alt: t,
                "aria-label": n,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
        "linked-channel": function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, T.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, l.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/4d9566d8a1024c5d82716f48abf416a06846af5693bdffb3d73c4c00afcf83f0.svg",
                className: (0, T.Z)(c),
                alt: t,
                "aria-label": n,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
        "guild-invite": function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, T.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, l.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/269d3b470672819a9d2a378e0e915fa616c4481680b7f0d7969fbded4fee21ae.svg",
                className: (0, T.Z)(c),
                alt: t,
                "aria-label": n,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
    },
    z = B.map((e) => ({ ...e, Asset: M[e.key] })),
    w = { top: -4, right: 4, bottom: -4, left: 20 };
function A(e) {
    let { noun: t } = e,
        n = i.useRef(null),
        r = i.useRef([]),
        s = i.useRef(null),
        o = i.useRef(null),
        c = i.useRef(void 0),
        [d, u] = i.useState(0),
        [m, g] = i.useState("idle");
    function f(e, t) {
        let n = r.current[0],
            l = r.current[t];
        return null == n || null == l ? null : Math.min(l.offsetLeft - n.offsetLeft, e.scrollWidth - e.clientWidth);
    }
    function h(e) {
        let t = 0,
            n = 1 / 0;
        return (
            z.forEach((l, i) => {
                let r = f(e, i);
                if (null == r) return;
                let a = Math.abs(r - e.scrollLeft);
                a <= n && ((t = i), (n = a));
            }),
            t
        );
    }
    function p() {
        (window.clearTimeout(c.current), (o.current = null), g("idle"));
    }
    return (
        i.useEffect(() => () => window.clearTimeout(c.current), []),
        (0, l.jsxs)(a.B, {
            gap: 16,
            children: [
                (0, l.jsx)(I.vN, {
                    offset: w,
                    children: (0, l.jsx)(E.zC, {
                        ref: n,
                        orientation: "horizontal",
                        className: v()(C.XG, { [C.cB]: "dragging" === m, [C.Ni]: "settling" === m }),
                        role: "region",
                        "aria-label": b.intl.string(k.default.yFqGy8),
                        tabIndex: 0,
                        onScroll: function () {
                            let e = n.current?.getScrollerNode();
                            null != e && (u(h(e)), null != o.current && 1 > Math.abs(e.scrollLeft - o.current) && p());
                        },
                        onPointerDown: function (e) {
                            let t = n.current?.getScrollerNode();
                            "mouse" === e.pointerType &&
                                0 === e.button &&
                                null != t &&
                                (e.currentTarget.setPointerCapture(e.pointerId),
                                (s.current = {
                                    pointerId: e.pointerId,
                                    startX: e.clientX,
                                    startScrollLeft: t.scrollLeft,
                                    startIndex: h(t),
                                }),
                                p(),
                                g("dragging"));
                        },
                        onPointerMove: function (e) {
                            let t = s.current,
                                l = n.current?.getScrollerNode();
                            t?.pointerId === e.pointerId &&
                                null != l &&
                                (l.scrollLeft = t.startScrollLeft - (e.clientX - t.startX));
                        },
                        onLostPointerCapture: function (e) {
                            let t = s.current,
                                l = n.current?.getScrollerNode();
                            if (t?.pointerId !== e.pointerId || null == l) return;
                            s.current = null;
                            let i = h(l),
                                r = l.scrollLeft - t.startScrollLeft;
                            i === t.startIndex &&
                                Math.abs(r) > 40 &&
                                (i = Math.min(Math.max(i + Math.sign(r), 0), z.length - 1));
                            let a = f(l, i);
                            null == a || 1 > Math.abs(l.scrollLeft - a)
                                ? g("idle")
                                : ((0, S.flushSync)(() => g("settling")),
                                  (o.current = a),
                                  (c.current = window.setTimeout(p, 1e3)),
                                  l.scrollTo({ left: a }));
                        },
                        onDragStart: (e) => e.preventDefault(),
                        children: (0, l.jsx)("ul", {
                            className: C.kR,
                            children: z.map((e, n) => {
                                let { key: i, getText: a, Asset: s } = e;
                                return (0, l.jsxs)(
                                    "li",
                                    {
                                        ref: (e) => {
                                            r.current[n] = e;
                                        },
                                        className: C.Nr,
                                        children: [
                                            (0, l.jsx)(s, { alt: "", ariaHidden: !0, width: "100%" }),
                                            (0, l.jsx)(x.E, {
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
                (0, l.jsx)("div", {
                    className: C.r$,
                    children: z.map((e, t) => {
                        let { key: i } = e;
                        return (0, l.jsx)(
                            P.D,
                            {
                                className: v()(C.Om, { [C.o]: t === d }),
                                "aria-label": b.intl.formatToPlainString(b.t["2SXOrM"], { pageNumber: t + 1 }),
                                "aria-current": t === d || void 0,
                                onClick: () =>
                                    (function (e) {
                                        let t = n.current?.getScrollerNode();
                                        if (null == t) return;
                                        let l = f(t, e);
                                        null != l && t.scrollTo({ left: l });
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
var L = n(785952);
function W(e) {
    let { invite: t, hideBenefitsHeading: n = !1 } = e;
    return (0, l.jsxs)(a.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(a.B, {
                gap: 24,
                align: "center",
                children: [
                    (0, l.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        color: "text-subtle",
                        className: L.G,
                        children: b.intl.formatToPlainString(k.default.WmxMAI, {
                            displayNoun: t.displayNoun ?? "other",
                        }),
                    }),
                    (0, l.jsx)(y, { linkedGuild: t.linkedGuild }),
                ],
            }),
            (0, l.jsxs)(a.B, {
                gap: 16,
                children: [
                    !n &&
                        (0, l.jsx)(h.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: b.intl.string(k.default.yFqGy8),
                        }),
                    (0, l.jsx)(A, { noun: (0, d.A)({ displayNoun: t.displayNoun, lowercase: !0 }) }),
                ],
            }),
        ],
    });
}
var D = n(646514),
    R = n(177953),
    _ = n(189367),
    G = n(695366),
    H = n(289873),
    U = n(892672),
    X = n(532049);
function V(e) {
    let { id: t, text: n, eligible: i } = e;
    return i
        ? (0, l.jsx)(x.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-subtle", children: n })
        : (0, l.jsxs)(a.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(G.CircleErrorIcon, { size: "xs", color: D.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                  (0, l.jsx)(x.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-muted", children: n }),
              ],
          });
}
let K = i.memo(function (e) {
    let { character: t, noun: n } = e,
        r = i.useId(),
        s = i.useId(),
        o = i.useRef(null),
        c = !t.eligible,
        d = t.eligible ? t.description : (t.description ?? b.intl.formatToPlainString(k.default.VNY3C1, { noun: n }));
    return (0, l.jsx)(_.A1, {
        value: t.id,
        isDisabled: c,
        "aria-labelledby": r,
        "aria-describedby": null != d ? s : void 0,
        children: (0, l.jsx)(I.vN, {
            focusTarget: o,
            ringTarget: o,
            within: !0,
            children: (0, l.jsxs)(_.a, {
                ref: o,
                className: X.Nr,
                children: [
                    (0, l.jsx)(U.A, { iconUrl: t.iconUrl, size: 48, fallback: "character" }),
                    (0, l.jsxs)(a.B, {
                        gap: 4,
                        className: X.WD,
                        children: [
                            (0, l.jsx)(x.E, {
                                id: r,
                                tag: "span",
                                variant: "body-md/semibold",
                                color: c ? "text-muted" : "text-strong",
                                children: t.name,
                            }),
                            null != d ? (0, l.jsx)(V, { id: s, text: d, eligible: t.eligible }) : null,
                        ],
                    }),
                ],
            }),
        }),
    });
});
function O(e) {
    let { characters: t, selectedCharacterId: n, onSelect: r, noun: s } = e,
        o = i.useId(),
        c = i.useMemo(() => (null != t ? [...t].sort((e, t) => Number(t.eligible) - Number(e.eligible)) : null), [t]);
    if (null == c) return (0, l.jsx)(H.y, {});
    let d = c.some((e) => !e.eligible);
    return (0, l.jsxs)(a.B, {
        gap: 12,
        children: [
            (0, l.jsx)(x.E, {
                id: o,
                variant: "body-md/medium",
                color: "text-subtle",
                className: X.DD,
                children: b.intl.formatToPlainString(k.default["Xm+emB"], { noun: s }),
            }),
            (0, l.jsx)(_.z6, {
                "aria-labelledby": o,
                value: n,
                onChange: r,
                className: X.kR,
                children: c.map((e) => (0, l.jsx)(K, { character: e, noun: s }, e.id)),
            }),
            d
                ? (0, l.jsx)(x.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: b.intl.formatToPlainString(k.default.ybJIQJ, { noun: s }),
                  })
                : null,
        ],
    });
}
var Z = n(171153);
function q(e) {
    let { invite: t, noun: n, isMultiCharacter: i, characters: r, selectedCharacterId: s, onSelectCharacter: o } = e,
        { organization: c, application: d } = t,
        { memberCount: u, maxMembers: m } = c;
    return (0, l.jsxs)(a.B, {
        gap: 32,
        children: [
            (0, l.jsxs)(a.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, l.jsx)(U.A, { iconUrl: c.iconUrl, size: 64, fallback: "guild" }),
                    (0, l.jsxs)(a.B, {
                        gap: 8,
                        align: "center",
                        children: [
                            (0, l.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                color: "text-subtle",
                                className: Z.G,
                                children: b.intl.format(k.default.gptW7Y, {
                                    noun: n,
                                    orgName: c.name,
                                    gameName: d.name,
                                    orgNameHook: (e, t) =>
                                        (0, l.jsx)(
                                            x.E,
                                            {
                                                tag: "span",
                                                variant: "heading-xl/semibold",
                                                color: "text-strong",
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                            null != u && null != m
                                ? (0, l.jsxs)(a.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 4,
                                      fullWidth: !1,
                                      children: [
                                          (0, l.jsx)(R.GroupIcon, { size: "xs", color: D.A.colors.ICON_MUTED }),
                                          (0, l.jsx)(x.E, {
                                              variant: "body-md/medium",
                                              color: "text-subtle",
                                              children: b.intl.formatToPlainString(k.default.VuENGl, {
                                                  count: u,
                                                  max: m,
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            i ? (0, l.jsx)(O, { characters: r, selectedCharacterId: s, onSelect: o, noun: n }) : null,
        ],
    });
}
let J = ["VIEW", "ACCEPT"];
function F(e) {
    let { code: t, ...h } = e,
        x = (0, m.A)(t),
        [p, j] = i.useState("VIEW"),
        y = x?.characterMode === f.Wy.MULTI,
        { data: N } = (0, u.P)(y ? t : null),
        [v, S] = i.useState(null),
        T = N?.find((e) => e.id === v) ?? null,
        [I, E] = i.useState(!1),
        [P, B] = i.useState(!1);
    if (null == x) return null;
    async function C(e) {
        E(!0);
        try {
            var i;
            let {
                game_organization_join_status: r,
                game_organization_join_failure_reason: a,
                guild_join_status: s,
            } = await c.A.acceptGameOrganizationInvite(t, e?.id);
            ((i = { joinStatus: r, failureReason: a, guildJoinStatus: s, character: e }),
                (0, g.mM)(
                    async () => {
                        let { default: e } = await Promise.all([n.e(525189), n.e(490279)]).then(n.bind(n, 253914));
                        return (n) => (0, l.jsx)(e, { code: t, result: i, ...n });
                    },
                    { modalKey: f.Vi },
                ));
        } catch (e) {
            throw (E(!1), e);
        }
        return !0;
    }
    let M = (0, d.A)({ displayNoun: x.displayNoun, lowercase: !0 }),
        z = b.intl.formatToPlainString(k.default["jKi+kc"], { noun: (0, d.A)({ displayNoun: x.displayNoun }) }),
        w = b.intl.string(k.default.BaZ6nt),
        A = (0, l.jsx)(q, {
            invite: x,
            noun: M,
            isMultiCharacter: y,
            characters: N,
            selectedCharacterId: v,
            onSelectCharacter: S,
        });
    if (!y)
        return (0, l.jsx)(r.a, {
            ...h,
            title: z,
            dismissable: !I,
            notice: P ? { message: b.intl.string(b.t["rTU7/z"]), type: "critical", role: "alert" } : void 0,
            actions: [
                {
                    text: w,
                    variant: "primary",
                    loading: I,
                    onClick: async function () {
                        B(!1);
                        try {
                            (await C(null), h.onClose());
                        } catch {
                            B(!0);
                        }
                    },
                },
            ],
            children: (0, l.jsxs)(a.B, {
                gap: 32,
                children: [A, (0, l.jsx)(s.c, {}), (0, l.jsx)(W, { invite: x, hideBenefitsHeading: !0 })],
            }),
        });
    let L = [
        {
            stepKey: "VIEW",
            modalProps: { title: z },
            body: A,
            nextEnabled: T?.eligible === !0,
            nextButtonProps: { text: b.intl.string(b.t["3PatSz"]) },
        },
        {
            stepKey: "ACCEPT",
            modalProps: { title: z },
            body: (0, l.jsx)(W, { invite: x }),
            nextButtonProps: { text: w },
            onNext: () => C(T),
            backButtonProps: { text: b.intl.string(b.t["13/7kX"]), disabled: I },
        },
    ];
    return (0, l.jsx)(o.t, { ...h, dismissable: !I, steps: L, currentStepKey: p, numberedSteps: J, onStepChange: j });
}
