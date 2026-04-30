n.d(e, { default: () => $, Z: () => H }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    r = n(32880),
    a = n(347704),
    o = n(376728),
    c = n(717398),
    d = n(631670),
    u = n(812633),
    p = n(837057),
    g = n(207803),
    m = n(287809),
    x = n(53505),
    b = n(723702),
    h = n(834730),
    j = n(975571),
    v = n(652215),
    C = n(375708);
function N() {
    let t = j.A.getArticleURL(v.MVz.GUILD_GETTING_STARTED);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.E, { variant: "text-md/normal", children: C.intl.string(C.t.crKvu5) }),
            (0, l.jsx)(h.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: { marginTop: 8 },
                children: C.intl.format(C.t.OtQkd2, { url: t }),
            }),
        ],
    });
}
var y = n(873298),
    f = n(331322),
    k = n(534514),
    w = n(487245),
    E = n(885386),
    S = n(578673);
function A() {
    let t = (function (t) {
            switch (t) {
                case y.NS.COMPACT:
                    return "compact";
                case y.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(E.Xi.useSetting()),
        e = s.useMemo(
            () => [
                { value: "compact", label: C.intl.string(C.t["1JNcPS"]), proto: y.NS.COMPACT },
                { value: "default", label: C.intl.string(C.t.Jqj4cZ), proto: y.NS.DEFAULT },
                { value: "spacious", label: C.intl.string(C.t["4cuYHx"]), proto: y.NS.COZY },
            ],
            [],
        ),
        n = s.useCallback(
            (t) => {
                let n = e.find((e) => e.value === t);
                null != n && E.Xi.updateSetting(n.proto);
            },
            [e],
        );
    return (0, l.jsxs)(f.B, {
        gap: 20,
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(k.D, { variant: "heading-md/semibold", children: C.intl.string(C.t.Ksh3ik) }),
                    (0, l.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: C.intl.string(C.t["mz+/o+"]),
                    }),
                    (0, l.jsx)(w.Ay, {
                        type: w.v0.SETTINGS,
                        children: (0, l.jsx)(f.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, l.jsx)(w.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(k.D, { variant: "heading-md/semibold", children: C.intl.string(C.t["C/5V0A"]) }),
                    (0, l.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: C.intl.string(C.t.sBENmo),
                    }),
                    (0, l.jsx)(f.B, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: e.map((e) =>
                            (0, l.jsx)(
                                "button",
                                {
                                    className: S.mj,
                                    "data-selected": t === e.value || void 0,
                                    onClick: () => n(e.value),
                                    "aria-pressed": t === e.value,
                                    type: "button",
                                    children: e.label,
                                },
                                e.value,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
var T = n(17928),
    P = n(187322),
    D = n(939249),
    O = n(332461),
    U = n(452027),
    R = n(292666),
    L = n(260598),
    B = n(252732),
    I = n(486020),
    K = n(339984);
function F(t) {
    let { pendingGlobalName: e, onGlobalNameChange: n, pendingBio: i, onBioChange: r } = t,
        a = (0, T.bG)([m.default], () => m.default.getCurrentUser()),
        o = null != a ? I.Ay.getUserAvatarURL(a, !0, 80) : void 0,
        c = s.useCallback(() => {
            (0, B.XD)({ uploadType: K.HL.AVATAR });
        }, []);
    return (0, l.jsxs)("div", {
        className: S.eE,
        children: [
            (0, l.jsx)("div", {
                className: S.Zk,
                children: (0, l.jsx)(P.vN, {
                    children: (0, l.jsxs)(D.D, {
                        className: S.nz,
                        onClick: c,
                        role: "button",
                        "aria-label": C.intl.string(C.t["70lEQe"]),
                        children: [
                            null != o
                                ? (0, l.jsx)("img", { src: o, alt: "", className: S.uV })
                                : (0, l.jsx)("div", {
                                      className: S.GT,
                                      children: (0, l.jsx)(O.x, { size: "md", color: "currentColor" }),
                                  }),
                            (0, l.jsx)("div", {
                                className: S.Nd,
                                children: (0, l.jsx)(O.x, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(U.D, {
                label: C.intl.string(C.t["9AjdkD"]),
                children: (0, l.jsx)(R.k, { value: e, onChange: n, placeholder: a?.username, maxLength: 32 }),
            }),
            (0, l.jsx)(L.f, {
                label: C.intl.string(C.t["61W33d"]),
                value: i,
                onChange: r,
                maxLength: v.NA2,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
var M = n(998445),
    z = n(836480),
    G = n(283973),
    _ = n(664121),
    V = n(906471);
function Z(t) {
    let { icon: e, title: n, description: i, onClick: s } = t;
    return (0, l.jsx)(P.vN, {
        children: (0, l.jsxs)("button", {
            className: S.we,
            onClick: s,
            children: [
                (0, l.jsx)("div", { className: S.XM, children: (0, l.jsx)(e, { size: "md", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: S.ht,
                    children: [
                        (0, l.jsx)(h.E, { variant: "text-md/semibold", children: n }),
                        (0, l.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                (0, l.jsx)("img", { className: S.$O, alt: "", src: V }),
            ],
        }),
    });
}
function q(t) {
    let { onSelectOption: e, onExplore: n, onCreateServer: i } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(Z, {
                icon: M.L,
                title: C.intl.string(C.t.riOUtB),
                description: C.intl.string(C.t["5u0zvP"]),
                onClick: () => e(H.JOIN_SERVER),
            }),
            (0, l.jsx)(Z, {
                icon: z.Q,
                title: C.intl.string(C.t.gHNiza),
                description: C.intl.string(C.t.v7xiEA),
                onClick: n,
            }),
            (0, l.jsx)(Z, {
                icon: G.R,
                title: C.intl.string(C.t.w5uwoI),
                description: C.intl.string(C.t.bgoxKS),
                onClick: () => e(H.ADD_FRIEND),
            }),
            (0, l.jsx)(Z, {
                icon: _.R,
                title: C.intl.string(C.t.ZLfEo8),
                description: C.intl.string(C.t.z7OAvN),
                onClick: i,
            }),
        ],
    });
}
function J(t) {
    let { inviteLink: e, onInviteLinkChange: n } = t;
    return (0, l.jsx)(U.D, {
        label: C.intl.string(C.t.riOUtB),
        children: (0, l.jsx)(R.k, { value: e, onChange: n, placeholder: C.intl.string(C.t["+9XKWu"]), autoFocus: !0 }),
    });
}
function X(t) {
    let { friendUsername: e, onFriendUsernameChange: n } = t;
    return (0, l.jsx)(U.D, {
        label: C.intl.string(C.t.w5uwoI),
        children: (0, l.jsx)(R.k, { value: e, onChange: n, placeholder: C.intl.string(C.t.qRaqel), autoFocus: !0 }),
    });
}
var Q = n(488995),
    W = n(324580),
    Y = n(977544),
    H =
        (((i = {}).WELCOME = "welcome"),
        (i.APPEARANCE = "appearance"),
        (i.DOWNLOAD_DESKTOP = "download-desktop"),
        (i.PROFILE = "profile"),
        (i.NEXT_STEPS = "next-steps"),
        (i.JOIN_SERVER = "join-server"),
        (i.ADD_FRIEND = "add-friend"),
        i);
function $(t) {
    let { onClose: e, ...n } = t,
        [i, h] = s.useState("welcome"),
        [j, v] = s.useState(null),
        [y, f] = s.useState(() => m.default.getCurrentUser()?.globalName ?? ""),
        [k, w] = s.useState(""),
        [E, S] = s.useState(""),
        [T, P] = s.useState(""),
        D = s.useCallback((t) => {
            v(t), h(t);
        }, []),
        O = s.useCallback(
            (t, e) => {
                "next-steps" === t && null != j && v(null), h(t);
            },
            [j],
        ),
        U = s.useCallback(async () => {
            let t = y.trim(),
                e = m.default.getCurrentUser()?.globalName ?? "";
            if (t.length > 0 && t !== e)
                try {
                    await (0, d._L)({ globalName: t });
                } catch {}
            if (k.trim().length > 0)
                try {
                    await (0, g.gi)({ bio: k.trim() });
                } catch {}
        }, [y, k]),
        R = s.useCallback(async () => (await U(), !0), [U]),
        L = s.useCallback(async () => {
            let t = E.trim().replace(/^(https?:\/\/)?(discord\.gg\/|discord\.com\/invite\/)/, "");
            if (0 === t.length) return !1;
            try {
                await o.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: { location: "New User Onboarding" },
                });
            } catch {
                return !1;
            }
            return !0;
        }, [E]),
        B = s.useCallback(async () => {
            await U(),
                await e(),
                (0, p.transitionToGlobalDiscovery)({ tab: Q.GlobalDiscoveryTab.SERVERS, entrypoint: W.J8.UNKNOWN });
        }, [U, e]),
        I = s.useCallback(async () => {
            let t = T.trim();
            if (0 === t.length) return !1;
            try {
                await c.A.sendRequest({ discordTag: t, context: { location: "New User Onboarding" } });
            } catch {
                return !1;
            }
            return !0;
        }, [T]),
        K = s.useCallback(async () => {
            await U(), await e(), (0, u.openCreateGuildModal)({ location: "New User Onboarding" });
        }, [U, e]),
        M = s.useCallback(() => {
            window.open((0, x.SU)());
        }, []),
        z = s.useMemo(() => {
            let t = [
                {
                    stepKey: "welcome",
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/6cc1ad92975c4ec38c0673a3109b3450044ebb1d9e9b3c190d1d2d2f8e1cad18.svg",
                        },
                        gradientColor: "purple",
                        title: C.intl.string(C.t.A1Q7a8),
                        subtitle: C.intl.string(C.t.jJZohU),
                    },
                    body: (0, l.jsx)(N, {}),
                    nextButtonProps: { text: C.intl.string(C.t.LhlgY9) },
                },
                {
                    stepKey: "appearance",
                    modalProps: { title: C.intl.string(C.t.mTkQFn), subtitle: C.intl.string(C.t["2b+0N6"]) },
                    body: (0, l.jsx)(A, {}),
                },
            ];
            return (
                b.isPlatformEmbedded ||
                    t.push({
                        stepKey: "download-desktop",
                        modalProps: {
                            graphic: {
                                type: "image",
                                src: "https://cdn.discordapp.com/assets/content/6a4f00b69af328e30b8855282ec9810a11773b42862ed60e4b4e8ca3f44ac55e.svg",
                            },
                            title: C.intl.string(C.t.qDbCbw),
                            subtitle: C.intl.string(C.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: C.intl.format(C.t.JoS1i3, { platform: (0, x.Vf)() }),
                            icon: r.s,
                            onClick: M,
                        },
                        nextButtonProps: { text: C.intl.string(C.t.L5eIZ2) },
                    }),
                t.push(
                    {
                        stepKey: "profile",
                        modalProps: { title: C.intl.string(C.t["6A8F1a"]), subtitle: C.intl.string(C.t.sqjmbr) },
                        body: (0, l.jsx)(F, {
                            pendingGlobalName: y,
                            onGlobalNameChange: f,
                            pendingBio: k,
                            onBioChange: w,
                        }),
                        onNext: R,
                    },
                    {
                        stepKey: "next-steps",
                        modalProps: {
                            graphic: { type: "image", src: Y.A },
                            gradientColor: "blue",
                            title: C.intl.string(C.t["++F+ha"]),
                            subtitle: C.intl.string(C.t.yMX0GO),
                        },
                        body: (0, l.jsx)(q, { onSelectOption: D, onExplore: B, onCreateServer: K }),
                        nextButtonProps: { text: C.intl.string(C.t.zcmBTS) },
                    },
                ),
                t
            );
        }, [y, k, R, D, B, K, M]),
        G = s.useMemo(
            () =>
                b.isPlatformEmbedded
                    ? ["welcome", "appearance", "profile", "next-steps"]
                    : ["welcome", "appearance", "download-desktop", "profile", "next-steps"],
            [],
        ),
        _ = s.useMemo(
            () => ({
                "join-server": {
                    stepKey: "join-server",
                    modalProps: { title: C.intl.string(C.t.riOUtB), subtitle: C.intl.string(C.t.cs48bs) },
                    body: (0, l.jsx)(J, { inviteLink: E, onInviteLinkChange: S }),
                    nextButtonProps: { text: C.intl.string(C.t["Ts/9Ac"]) },
                    nextEnabled: E.trim().length > 0,
                    onNext: L,
                },
                "add-friend": {
                    stepKey: "add-friend",
                    modalProps: { title: C.intl.string(C.t.w5uwoI), subtitle: C.intl.string(C.t.jy1kln) },
                    body: (0, l.jsx)(X, { friendUsername: T, onFriendUsernameChange: P }),
                    nextButtonProps: { text: C.intl.string(C.t["PMsq/b"]) },
                    nextEnabled: T.trim().length > 0,
                    onNext: I,
                },
            }),
            [E, T, L, I],
        ),
        V = s.useMemo(() => (null != j && null != _[j] ? [...z, _[j]] : z), [z, j, _]);
    return (0, l.jsx)(a.t, {
        ...n,
        onClose: e,
        steps: V,
        numberedSteps: G,
        currentStepKey: i,
        onStepChange: O,
        onComplete: U,
    });
}
