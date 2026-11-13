l.d(t, { default: () => K });
var n = l(477900),
    r = l(582128),
    i = l(347704),
    a = l(664947),
    s = l(124077),
    o = l(674008),
    c = l(674725),
    d = l(192308),
    u = l(673383),
    m = l(331322),
    f = l(534514),
    g = l(834730),
    h = l(682163),
    x = l(792996),
    p = l(393612);
function b(e) {
    let { linkedGuild: t } = e,
        { id: l, name: i, icon: a, presenceCount: s, memberCount: o } = t,
        c = r.useMemo(() => ({ id: l, name: i, icon: a, features: [] }), [l, i, a]);
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
                        (0, n.jsx)(g.E, {
                            variant: "body-lg/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: i,
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
                                              (0, n.jsx)(g.E, {
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
                                              (0, n.jsx)(g.E, {
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
    I = l(516521),
    E = l(939249),
    P = l(752222),
    T = l(561193);
let M = [
        {
            key: "auto-sync",
            message: P.default.WUVzdk,
            Asset: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: s, height: o, className: c, style: d } = e,
                    u = r.useMemo(
                        () => (0, v.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                        [s, o, d],
                    );
                return (0, n.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a8657a9c456c0aefdec707d59e7313ad51068b73d6f0fef93709143f102f26ec.svg",
                    className: (0, v.Z)(c),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": i,
                    role: a ?? "img",
                });
            },
        },
        {
            key: "linked-channel",
            message: P.default.MEQJ1m,
            Asset: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: s, height: o, className: c, style: d } = e,
                    u = r.useMemo(
                        () => (0, v.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                        [s, o, d],
                    );
                return (0, n.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4d9566d8a1024c5d82716f48abf416a06846af5693bdffb3d73c4c00afcf83f0.svg",
                    className: (0, v.Z)(c),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": i,
                    role: a ?? "img",
                });
            },
        },
        {
            key: "send-invites",
            message: P.default["7GnQoE"],
            Asset: function (e) {
                let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: s, height: o, className: c, style: d } = e,
                    u = r.useMemo(
                        () => (0, v.H)({ width: s, height: o, intrinsicWidth: 288, intrinsicHeight: 192, style: d }),
                        [s, o, d],
                    );
                return (0, n.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/269d3b470672819a9d2a378e0e915fa616c4481680b7f0d7969fbded4fee21ae.svg",
                    className: (0, v.Z)(c),
                    alt: t,
                    "aria-label": l,
                    "aria-hidden": i,
                    role: a ?? "img",
                });
            },
        },
    ],
    C = { top: -4, right: 4, bottom: -4, left: 20 };
function z() {
    let e = r.useRef(null),
        t = r.useRef([]),
        l = r.useRef(null),
        i = r.useRef(null),
        a = r.useRef(void 0),
        [s, o] = r.useState(0),
        [c, d] = r.useState("idle");
    function u(e, l) {
        let n = t.current[0],
            r = t.current[l];
        return null == n || null == r ? null : Math.min(r.offsetLeft - n.offsetLeft, e.scrollWidth - e.clientWidth);
    }
    function f(e) {
        let t = 0,
            l = 1 / 0;
        return (
            M.forEach((n, r) => {
                let i = u(e, r);
                if (null == i) return;
                let a = Math.abs(i - e.scrollLeft);
                a <= l && ((t = r), (l = a));
            }),
            t
        );
    }
    function h() {
        (window.clearTimeout(a.current), (i.current = null), d("idle"));
    }
    return (
        r.useEffect(() => () => window.clearTimeout(a.current), []),
        (0, n.jsxs)(m.B, {
            gap: 16,
            children: [
                (0, n.jsx)(S.vN, {
                    offset: C,
                    children: (0, n.jsx)(I.zC, {
                        ref: e,
                        orientation: "horizontal",
                        className: y()(T.XG, { [T.cB]: "dragging" === c, [T.Ni]: "settling" === c }),
                        role: "region",
                        "aria-label": x.intl.string(P.default.yFqGy8),
                        tabIndex: 0,
                        onScroll: function () {
                            let t = e.current?.getScrollerNode();
                            null != t && (o(f(t)), null != i.current && 1 > Math.abs(t.scrollLeft - i.current) && h());
                        },
                        onPointerDown: function (t) {
                            let n = e.current?.getScrollerNode();
                            "mouse" === t.pointerType &&
                                0 === t.button &&
                                null != n &&
                                (t.currentTarget.setPointerCapture(t.pointerId),
                                (l.current = {
                                    pointerId: t.pointerId,
                                    startX: t.clientX,
                                    startScrollLeft: n.scrollLeft,
                                    startIndex: f(n),
                                }),
                                h(),
                                d("dragging"));
                        },
                        onPointerMove: function (t) {
                            let n = l.current,
                                r = e.current?.getScrollerNode();
                            n?.pointerId === t.pointerId &&
                                null != r &&
                                (r.scrollLeft = n.startScrollLeft - (t.clientX - n.startX));
                        },
                        onLostPointerCapture: function (t) {
                            let n = l.current,
                                r = e.current?.getScrollerNode();
                            if (n?.pointerId !== t.pointerId || null == r) return;
                            l.current = null;
                            let s = f(r),
                                o = r.scrollLeft - n.startScrollLeft;
                            s === n.startIndex &&
                                Math.abs(o) > 40 &&
                                (s = Math.min(Math.max(s + Math.sign(o), 0), M.length - 1));
                            let c = u(r, s);
                            null == c || 1 > Math.abs(r.scrollLeft - c)
                                ? d("idle")
                                : ((0, N.flushSync)(() => d("settling")),
                                  (i.current = c),
                                  (a.current = window.setTimeout(h, 1e3)),
                                  r.scrollTo({ left: c }));
                        },
                        onDragStart: (e) => e.preventDefault(),
                        children: (0, n.jsx)("ul", {
                            className: T.kR,
                            children: M.map((e, l) => {
                                let { key: r, message: i, Asset: a } = e;
                                return (0, n.jsxs)(
                                    "li",
                                    {
                                        ref: (e) => {
                                            t.current[l] = e;
                                        },
                                        className: T.Nr,
                                        children: [
                                            (0, n.jsx)(a, { alt: "", ariaHidden: !0, width: "100%" }),
                                            (0, n.jsx)(g.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: x.intl.string(i),
                                            }),
                                        ],
                                    },
                                    r,
                                );
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: T.r$,
                    children: M.map((t, l) => {
                        let { key: r } = t;
                        return (0, n.jsx)(
                            E.D,
                            {
                                className: y()(T.Om, { [T.o]: l === s }),
                                "aria-label": x.intl.formatToPlainString(x.t["2SXOrM"], { pageNumber: l + 1 }),
                                "aria-current": l === s || void 0,
                                onClick: () =>
                                    (function (t) {
                                        let l = e.current?.getScrollerNode();
                                        if (null == l) return;
                                        let n = u(l, t);
                                        null != n && l.scrollTo({ left: n });
                                    })(l),
                            },
                            r,
                        );
                    }),
                }),
            ],
        })
    );
}
var B = l(785952);
function k(e) {
    let { invite: t } = e;
    return (0, n.jsxs)(m.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(m.B, {
                gap: 24,
                align: "center",
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "heading-md/semibold",
                        color: "text-subtle",
                        className: B.G,
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
                    (0, n.jsx)(f.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: x.intl.string(P.default.yFqGy8),
                    }),
                    (0, n.jsx)(z, {}),
                ],
            }),
        ],
    });
}
var A = l(646514),
    w = l(177953),
    L = l(189367),
    W = l(695366),
    D = l(289873),
    R = l(378763),
    _ = l(532049);
function G(e) {
    let { id: t, text: l, eligible: r } = e;
    return r
        ? (0, n.jsx)(g.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-subtle", children: l })
        : (0, n.jsxs)(m.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, n.jsx)(W.CircleErrorIcon, { size: "xs", color: A.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                  (0, n.jsx)(g.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-muted", children: l }),
              ],
          });
}
let X = r.memo(function (e) {
    let { character: t, noun: l } = e,
        i = r.useId(),
        a = r.useId(),
        s = r.useRef(null),
        o = !t.eligible,
        c = t.eligible ? t.description : (t.description ?? x.intl.formatToPlainString(P.default.VNY3C1, { noun: l }));
    return (0, n.jsx)(L.A1, {
        value: t.id,
        isDisabled: o,
        "aria-labelledby": i,
        "aria-describedby": null != c ? a : void 0,
        children: (0, n.jsx)(S.vN, {
            focusTarget: s,
            ringTarget: s,
            within: !0,
            children: (0, n.jsxs)(L.a, {
                ref: s,
                className: _.Nr,
                children: [
                    (0, n.jsx)(R.A, { iconUrl: t.iconUrl, size: 48, className: _.Vw }),
                    (0, n.jsxs)(m.B, {
                        gap: 4,
                        className: _.WD,
                        children: [
                            (0, n.jsx)(g.E, {
                                id: i,
                                tag: "span",
                                variant: "body-md/semibold",
                                color: o ? "text-muted" : "text-strong",
                                children: t.name,
                            }),
                            null != c ? (0, n.jsx)(G, { id: a, text: c, eligible: t.eligible }) : null,
                        ],
                    }),
                ],
            }),
        }),
    });
});
function H(e) {
    let { characters: t, selectedCharacterId: l, onSelect: i, noun: a } = e,
        s = r.useId(),
        o = r.useMemo(() => (null != t ? [...t].sort((e, t) => Number(t.eligible) - Number(e.eligible)) : null), [t]);
    if (null == o) return (0, n.jsx)(D.y, {});
    let c = o.some((e) => !e.eligible);
    return (0, n.jsxs)(m.B, {
        gap: 12,
        children: [
            (0, n.jsx)(g.E, {
                id: s,
                variant: "body-md/medium",
                color: "text-subtle",
                className: _.DD,
                children: x.intl.formatToPlainString(P.default["Xm+emB"], { noun: a }),
            }),
            (0, n.jsx)(L.z6, {
                "aria-labelledby": s,
                value: l,
                onChange: i,
                className: _.kR,
                children: o.map((e) => (0, n.jsx)(X, { character: e, noun: a }, e.id)),
            }),
            c
                ? (0, n.jsx)(g.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: x.intl.formatToPlainString(P.default.ybJIQJ, { noun: a }),
                  })
                : null,
        ],
    });
}
var U = l(171153);
function V(e) {
    let { invite: t, noun: l, isMultiCharacter: r, characters: i, selectedCharacterId: a, onSelectCharacter: s } = e,
        { organization: o, application: c } = t,
        { memberCount: d, maxMembers: u } = o;
    return (0, n.jsxs)(m.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(m.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, n.jsx)(R.A, { iconUrl: o.iconUrl, size: 64, className: U.H }),
                    (0, n.jsx)(f.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: U.G,
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
                                  (0, n.jsx)(w.GroupIcon, { size: "xs", color: A.A.colors.ICON_MUTED }),
                                  (0, n.jsx)(g.E, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      children: x.intl.formatToPlainString(P.default.VuENGl, { count: d, max: u }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            r ? (0, n.jsx)(H, { characters: i, selectedCharacterId: a, onSelect: s, noun: l }) : null,
        ],
    });
}
let O = ["VIEW", "ACCEPT"];
function K(e) {
    let { code: t, ...m } = e,
        f = (0, c.A)(t),
        [g, h] = r.useState("VIEW"),
        p = f?.characterMode === u.Wy.MULTI,
        { data: b } = (0, o.P)(p ? t : null),
        [j, y] = r.useState(null),
        N = b?.find((e) => e.id === j) ?? null,
        [v, S] = r.useState(!1);
    if (null == f) return null;
    let I = (0, s.A)({ displayNoun: f.displayNoun, lowercase: !0 }),
        E = x.intl.formatToPlainString(P.default["jKi+kc"], { noun: (0, s.A)({ displayNoun: f.displayNoun }) }),
        T = [
            {
                stepKey: "VIEW",
                modalProps: { title: E },
                body: (0, n.jsx)(V, {
                    invite: f,
                    noun: I,
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
                modalProps: { title: E },
                body: (0, n.jsx)(k, { invite: f }),
                nextButtonProps: { text: x.intl.string(P.default.BaZ6nt) },
                onNext: async function () {
                    let e = p ? N : null;
                    S(!0);
                    try {
                        var r;
                        let {
                            game_organization_join_status: i,
                            game_organization_join_failure_reason: s,
                            guild_join_status: o,
                        } = await a.A.acceptGameOrganizationInvite(t, e?.id);
                        ((r = { joinStatus: i, failureReason: s, guildJoinStatus: o, character: e }),
                            (0, d.mM)(
                                async () => {
                                    let { default: e } = await l.e(172470).then(l.bind(l, 543637));
                                    return (l) => (0, n.jsx)(e, { code: t, result: r, ...l });
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
    return (0, n.jsx)(i.t, { ...m, dismissable: !v, steps: T, currentStepKey: g, numberedSteps: O, onStepChange: h });
}
