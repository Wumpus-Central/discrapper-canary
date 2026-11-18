l.d(t, { default: () => J });
var n = l(477900),
    i = l(582128),
    r = l(189213),
    a = l(331322),
    s = l(404778),
    o = l(347704),
    c = l(664947),
    d = l(674008),
    u = l(674725),
    m = l(192308),
    g = l(673383),
    h = l(534514),
    f = l(834730),
    x = l(682163),
    p = l(792996),
    b = l(393612);
function j(e) {
    let { linkedGuild: t } = e,
        { id: l, name: r, icon: s, presenceCount: o, memberCount: c } = t,
        d = i.useMemo(() => ({ id: l, name: r, icon: s, features: [] }), [l, r, s]);
    return (0, n.jsx)("div", {
        className: b.Nr,
        children: (0, n.jsxs)(a.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            children: [
                (0, n.jsx)(x.Ay, { guild: d, size: x.Ay.Sizes.LARGER, className: b.Kk, "aria-hidden": !0 }),
                (0, n.jsxs)(a.B, {
                    gap: 4,
                    className: b.pq,
                    children: [
                        (0, n.jsx)(f.E, {
                            variant: "body-lg/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: r,
                        }),
                        (0, n.jsxs)(a.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 16,
                            wrap: !0,
                            children: [
                                null != o
                                    ? (0, n.jsxs)(a.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, n.jsx)("span", { className: b.RS }),
                                              (0, n.jsx)(f.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: p.intl.formatToPlainString(p.t["LC+S+m"], {
                                                      membersOnline: o,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != c
                                    ? (0, n.jsxs)(a.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, n.jsx)("span", { className: b.Ps }),
                                              (0, n.jsx)(f.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: p.intl.formatToPlainString(p.t.zRl6XR, { count: c }),
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
var y = l(503698),
    N = l.n(y),
    v = l(333007),
    S = l(62617),
    T = l(559106),
    I = l(516521),
    E = l(939249),
    P = l(752222);
let k = [
    { key: "auto-sync", getText: () => p.intl.string(P.default.WUVzdk) },
    { key: "linked-channel", getText: () => p.intl.string(P.default.MEQJ1m) },
    {
        key: "guild-invite",
        getText: (e) => p.intl.formatToPlainString(P.default["hn+Lsg"], { displayNoun: e ?? "other" }),
    },
];
var B = l(561193);
let C = {
        "auto-sync": function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, S.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, n.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/a8657a9c456c0aefdec707d59e7313ad51068b73d6f0fef93709143f102f26ec.svg",
                className: (0, S.Z)(c),
                alt: t,
                "aria-label": l,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
        "linked-channel": function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, S.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, n.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/4d9566d8a1024c5d82716f48abf416a06846af5693bdffb3d73c4c00afcf83f0.svg",
                className: (0, S.Z)(c),
                alt: t,
                "aria-label": l,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
        "guild-invite": function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: r, role: a, width: s, height: o, className: c, style: d } = e,
                u = i.useMemo(
                    () => (0, S.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                    [s, o, d],
                );
            return (0, n.jsx)("img", {
                style: u,
                src: "https://cdn.discordapp.com/assets/content/269d3b470672819a9d2a378e0e915fa616c4481680b7f0d7969fbded4fee21ae.svg",
                className: (0, S.Z)(c),
                alt: t,
                "aria-label": l,
                "aria-hidden": r,
                role: a ?? "img",
            });
        },
    },
    M = k.map((e) => ({ ...e, Asset: C[e.key] })),
    z = { top: -4, right: 4, bottom: -4, left: 20 };
function w(e) {
    let { displayNoun: t } = e,
        l = i.useRef(null),
        r = i.useRef([]),
        s = i.useRef(null),
        o = i.useRef(null),
        c = i.useRef(void 0),
        [d, u] = i.useState(0),
        [m, g] = i.useState("idle");
    function h(e, t) {
        let l = r.current[0],
            n = r.current[t];
        return null == l || null == n ? null : Math.min(n.offsetLeft - l.offsetLeft, e.scrollWidth - e.clientWidth);
    }
    function x(e) {
        let t = 0,
            l = 1 / 0;
        return (
            M.forEach((n, i) => {
                let r = h(e, i);
                if (null == r) return;
                let a = Math.abs(r - e.scrollLeft);
                a <= l && ((t = i), (l = a));
            }),
            t
        );
    }
    function b() {
        (window.clearTimeout(c.current), (o.current = null), g("idle"));
    }
    return (
        i.useEffect(() => () => window.clearTimeout(c.current), []),
        (0, n.jsxs)(a.B, {
            gap: 16,
            children: [
                (0, n.jsx)(T.vN, {
                    offset: z,
                    children: (0, n.jsx)(I.zC, {
                        ref: l,
                        orientation: "horizontal",
                        className: N()(B.XG, { [B.cB]: "dragging" === m, [B.Ni]: "settling" === m }),
                        role: "region",
                        "aria-label": p.intl.string(P.default.yFqGy8),
                        tabIndex: 0,
                        onScroll: function () {
                            let e = l.current?.getScrollerNode();
                            null != e && (u(x(e)), null != o.current && 1 > Math.abs(e.scrollLeft - o.current) && b());
                        },
                        onPointerDown: function (e) {
                            let t = l.current?.getScrollerNode();
                            "mouse" === e.pointerType &&
                                0 === e.button &&
                                null != t &&
                                (e.currentTarget.setPointerCapture(e.pointerId),
                                (s.current = {
                                    pointerId: e.pointerId,
                                    startX: e.clientX,
                                    startScrollLeft: t.scrollLeft,
                                    startIndex: x(t),
                                }),
                                b(),
                                g("dragging"));
                        },
                        onPointerMove: function (e) {
                            let t = s.current,
                                n = l.current?.getScrollerNode();
                            t?.pointerId === e.pointerId &&
                                null != n &&
                                (n.scrollLeft = t.startScrollLeft - (e.clientX - t.startX));
                        },
                        onLostPointerCapture: function (e) {
                            let t = s.current,
                                n = l.current?.getScrollerNode();
                            if (t?.pointerId !== e.pointerId || null == n) return;
                            s.current = null;
                            let i = x(n),
                                r = n.scrollLeft - t.startScrollLeft;
                            i === t.startIndex &&
                                Math.abs(r) > 40 &&
                                (i = Math.min(Math.max(i + Math.sign(r), 0), M.length - 1));
                            let a = h(n, i);
                            null == a || 1 > Math.abs(n.scrollLeft - a)
                                ? g("idle")
                                : ((0, v.flushSync)(() => g("settling")),
                                  (o.current = a),
                                  (c.current = window.setTimeout(b, 1e3)),
                                  n.scrollTo({ left: a }));
                        },
                        onDragStart: (e) => e.preventDefault(),
                        children: (0, n.jsx)("ul", {
                            className: B.kR,
                            children: M.map((e, l) => {
                                let { key: i, getText: a, Asset: s } = e;
                                return (0, n.jsxs)(
                                    "li",
                                    {
                                        ref: (e) => {
                                            r.current[l] = e;
                                        },
                                        className: B.Nr,
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
                    className: B.r$,
                    children: M.map((e, t) => {
                        let { key: i } = e;
                        return (0, n.jsx)(
                            E.D,
                            {
                                className: N()(B.Om, { [B.o]: t === d }),
                                "aria-label": p.intl.formatToPlainString(p.t["2SXOrM"], { pageNumber: t + 1 }),
                                "aria-current": t === d || void 0,
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
var L = l(785952);
function W(e) {
    let { invite: t, hideBenefitsHeading: l = !1 } = e;
    return (0, n.jsxs)(a.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(a.B, {
                gap: 24,
                align: "center",
                children: [
                    (0, n.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        color: "text-subtle",
                        className: L.G,
                        children: p.intl.formatToPlainString(P.default.WmxMAI, {
                            displayNoun: t.displayNoun ?? "other",
                        }),
                    }),
                    (0, n.jsx)(j, { linkedGuild: t.linkedGuild }),
                ],
            }),
            (0, n.jsxs)(a.B, {
                gap: 16,
                children: [
                    !l &&
                        (0, n.jsx)(h.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: p.intl.string(P.default.yFqGy8),
                        }),
                    (0, n.jsx)(w, { displayNoun: t.displayNoun }),
                ],
            }),
        ],
    });
}
var A = l(646514),
    D = l(177953),
    R = l(189367),
    _ = l(695366),
    G = l(289873),
    H = l(892672),
    U = l(532049);
function X(e) {
    let { id: t, text: l, eligible: i } = e;
    return i
        ? (0, n.jsx)(f.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-subtle", children: l })
        : (0, n.jsxs)(a.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, n.jsx)(_.CircleErrorIcon, { size: "xs", color: A.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                  (0, n.jsx)(f.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-muted", children: l }),
              ],
          });
}
let V = i.memo(function (e) {
    let { character: t, displayNoun: l } = e,
        r = i.useId(),
        s = i.useId(),
        o = i.useRef(null),
        c = !t.eligible,
        d = t.eligible
            ? t.description
            : (t.description ?? p.intl.formatToPlainString(P.default.VNY3C1, { displayNoun: l ?? "other" }));
    return (0, n.jsx)(R.A1, {
        value: t.id,
        isDisabled: c,
        "aria-labelledby": r,
        "aria-describedby": null != d ? s : void 0,
        children: (0, n.jsx)(T.vN, {
            focusTarget: o,
            ringTarget: o,
            within: !0,
            children: (0, n.jsxs)(R.a, {
                ref: o,
                className: U.Nr,
                children: [
                    (0, n.jsx)(H.A, { iconUrl: t.iconUrl, size: 48, fallback: "character" }),
                    (0, n.jsxs)(a.B, {
                        gap: 4,
                        className: U.WD,
                        children: [
                            (0, n.jsx)(f.E, {
                                id: r,
                                tag: "span",
                                variant: "body-md/semibold",
                                color: c ? "text-muted" : "text-strong",
                                children: t.name,
                            }),
                            null != d ? (0, n.jsx)(X, { id: s, text: d, eligible: t.eligible }) : null,
                        ],
                    }),
                ],
            }),
        }),
    });
});
function K(e) {
    let { characters: t, selectedCharacterId: l, onSelect: r, displayNoun: s } = e,
        o = i.useId(),
        c = i.useMemo(() => (null != t ? [...t].sort((e, t) => Number(t.eligible) - Number(e.eligible)) : null), [t]);
    if (null == c) return (0, n.jsx)(G.y, {});
    let d = c.some((e) => !e.eligible);
    return (0, n.jsxs)(a.B, {
        gap: 12,
        children: [
            (0, n.jsx)(f.E, {
                id: o,
                variant: "body-md/medium",
                color: "text-subtle",
                className: U.DD,
                children: p.intl.formatToPlainString(P.default["Xm+emB"], { displayNoun: s ?? "other" }),
            }),
            (0, n.jsx)(R.z6, {
                "aria-labelledby": o,
                value: l,
                onChange: r,
                className: U.kR,
                children: c.map((e) => (0, n.jsx)(V, { character: e, displayNoun: s }, e.id)),
            }),
            d
                ? (0, n.jsx)(f.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: p.intl.formatToPlainString(P.default.ybJIQJ, { displayNoun: s ?? "other" }),
                  })
                : null,
        ],
    });
}
var O = l(171153);
function Z(e) {
    let { invite: t, isMultiCharacter: l, characters: i, selectedCharacterId: r, onSelectCharacter: s } = e,
        { displayNoun: o, organization: c, application: d } = t,
        { memberCount: u, maxMembers: m } = c;
    return (0, n.jsxs)(a.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(a.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, n.jsx)(H.A, { iconUrl: c.iconUrl, size: 64, fallback: "guild" }),
                    (0, n.jsxs)(a.B, {
                        gap: 8,
                        align: "center",
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                color: "text-subtle",
                                className: O.G,
                                children: p.intl.format(P.default.gptW7Y, {
                                    displayNoun: o ?? "other",
                                    orgName: c.name,
                                    gameName: d.name,
                                    orgNameHook: (e, t) =>
                                        (0, n.jsx)(
                                            f.E,
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
                                ? (0, n.jsxs)(a.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 4,
                                      fullWidth: !1,
                                      children: [
                                          (0, n.jsx)(D.GroupIcon, { size: "xs", color: A.A.colors.ICON_MUTED }),
                                          (0, n.jsx)(f.E, {
                                              variant: "body-md/medium",
                                              color: "text-subtle",
                                              children: p.intl.formatToPlainString(P.default.VuENGl, {
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
            l ? (0, n.jsx)(K, { characters: i, selectedCharacterId: r, onSelect: s, displayNoun: o }) : null,
        ],
    });
}
let q = ["VIEW", "ACCEPT"];
function J(e) {
    let { code: t, ...h } = e,
        f = (0, u.A)(t),
        [x, b] = i.useState("VIEW"),
        j = f?.characterMode === g.Wy.MULTI,
        { data: y } = (0, d.P)(j ? t : null),
        [N, v] = i.useState(null),
        S = y?.find((e) => e.id === N) ?? null,
        [T, I] = i.useState(!1),
        [E, k] = i.useState(!1);
    if (null == f) return null;
    async function B(e) {
        I(!0);
        try {
            var i;
            let {
                game_organization_join_status: r,
                game_organization_join_failure_reason: a,
                guild_join_status: s,
            } = await c.A.acceptGameOrganizationInvite(t, e?.id);
            ((i = { joinStatus: r, failureReason: a, guildJoinStatus: s, character: e }),
                (0, m.mM)(
                    async () => {
                        let { default: e } = await Promise.all([l.e(525189), l.e(490279)]).then(l.bind(l, 253914));
                        return (l) => (0, n.jsx)(e, { code: t, result: i, ...l });
                    },
                    { modalKey: g.Vi },
                ));
        } catch (e) {
            throw (I(!1), e);
        }
        return !0;
    }
    let C = p.intl.formatToPlainString(P.default["jKi+kc"], { displayNoun: f.displayNoun ?? "other" }),
        M = p.intl.string(P.default.BaZ6nt),
        z = (0, n.jsx)(Z, {
            invite: f,
            isMultiCharacter: j,
            characters: y,
            selectedCharacterId: N,
            onSelectCharacter: v,
        });
    if (!j)
        return (0, n.jsx)(r.a, {
            ...h,
            title: C,
            dismissable: !T,
            notice: E ? { message: p.intl.string(p.t["rTU7/z"]), type: "critical", role: "alert" } : void 0,
            actions: [
                {
                    text: M,
                    variant: "primary",
                    loading: T,
                    onClick: async function () {
                        k(!1);
                        try {
                            (await B(null), h.onClose());
                        } catch {
                            k(!0);
                        }
                    },
                },
            ],
            children: (0, n.jsxs)(a.B, {
                gap: 32,
                children: [z, (0, n.jsx)(s.c, {}), (0, n.jsx)(W, { invite: f, hideBenefitsHeading: !0 })],
            }),
        });
    let w = [
        {
            stepKey: "VIEW",
            modalProps: { title: C },
            body: z,
            nextEnabled: S?.eligible === !0,
            nextButtonProps: { text: p.intl.string(p.t["3PatSz"]) },
        },
        {
            stepKey: "ACCEPT",
            modalProps: { title: C },
            body: (0, n.jsx)(W, { invite: f }),
            nextButtonProps: { text: M },
            onNext: () => B(S),
            backButtonProps: { text: p.intl.string(p.t["13/7kX"]), disabled: T },
        },
    ];
    return (0, n.jsx)(o.t, { ...h, dismissable: !T, steps: w, currentStepKey: x, numberedSteps: q, onStepChange: b });
}
