n.d(t, { default: () => Y, Z: () => Q }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(32880),
    r = n(347704),
    o = n(376728),
    c = n(49229),
    d = n(631670),
    u = n(812633),
    p = n(837057),
    m = n(207803),
    x = n(287809),
    g = n(53505),
    h = n(723702),
    C = n(834730),
    N = n(975571),
    b = n(652215),
    j = n(985018);
function E() {
    let e = N.A.getArticleURL(b.MVz.GUILD_GETTING_STARTED);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(C.E, { variant: "text-md/normal", children: j.intl.string(j.t.crKvu5) }),
            (0, l.jsx)(C.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: { marginTop: 8 },
                children: j.intl.format(j.t.OtQkd2, { url: e }),
            }),
        ],
    });
}
var S = n(873298),
    v = n(331322),
    I = n(534514),
    A = n(692798),
    f = n(253932),
    y = n(578673);
function D() {
    let e = (function (e) {
            switch (e) {
                case S.NS.COMPACT:
                    return "compact";
                case S.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(f.Xi.useSetting()),
        t = s.useMemo(
            () => [
                { value: "compact", label: j.intl.string(j.t["1JNcPS"]), proto: S.NS.COMPACT },
                { value: "default", label: j.intl.string(j.t.Jqj4cZ), proto: S.NS.DEFAULT },
                { value: "spacious", label: j.intl.string(j.t["4cuYHx"]), proto: S.NS.COZY },
            ],
            [],
        ),
        n = s.useCallback(
            (e) => {
                let n = t.find((t) => t.value === e);
                null != n && f.Xi.updateSetting(n.proto);
            },
            [t],
        );
    return (0, l.jsxs)(v.B, {
        gap: 20,
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(I.D, { variant: "heading-md/semibold", children: j.intl.string(j.t.Ksh3ik) }),
                    (0, l.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: j.intl.string(j.t["mz+/o+"]),
                    }),
                    (0, l.jsx)(A.Ay, {
                        type: A.v0.SETTINGS,
                        children: (0, l.jsx)(v.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, l.jsx)(A.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(I.D, { variant: "heading-md/semibold", children: j.intl.string(j.t["C/5V0A"]) }),
                    (0, l.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: j.intl.string(j.t.sBENmo),
                    }),
                    (0, l.jsx)(v.B, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: t.map((t) =>
                            (0, l.jsx)(
                                "button",
                                {
                                    className: y.mj,
                                    "data-selected": e === t.value || void 0,
                                    onClick: () => n(t.value),
                                    "aria-pressed": e === t.value,
                                    type: "button",
                                    children: t.label,
                                },
                                t.value,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
var T = n(17928),
    k = n(187322),
    L = n(939249),
    _ = n(332461),
    w = n(452027),
    O = n(292666),
    P = n(260598),
    U = n(252732),
    G = n(486020),
    M = n(339984);
function R(e) {
    let { pendingGlobalName: t, onGlobalNameChange: n, pendingBio: i, onBioChange: a } = e,
        r = (0, T.bG)([x.default], () => x.default.getCurrentUser()),
        o = null != r ? G.Ay.getUserAvatarURL(r, !0, 80) : void 0,
        c = s.useCallback(() => {
            (0, U.XD)({ uploadType: M.HL.AVATAR });
        }, []);
    return (0, l.jsxs)("div", {
        className: y.eE,
        children: [
            (0, l.jsx)("div", {
                className: y.Zk,
                children: (0, l.jsx)(k.vN, {
                    children: (0, l.jsxs)(L.D, {
                        className: y.nz,
                        onClick: c,
                        role: "button",
                        "aria-label": j.intl.string(j.t["70lEQe"]),
                        children: [
                            null != o
                                ? (0, l.jsx)("img", { src: o, alt: "", className: y.uV })
                                : (0, l.jsx)("div", {
                                      className: y.GT,
                                      children: (0, l.jsx)(_.x, { size: "md", color: "currentColor" }),
                                  }),
                            (0, l.jsx)("div", {
                                className: y.Nd,
                                children: (0, l.jsx)(_.x, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(w.D, {
                label: j.intl.string(j.t["9AjdkD"]),
                children: (0, l.jsx)(O.k, { value: t, onChange: n, placeholder: r?.username, maxLength: 32 }),
            }),
            (0, l.jsx)(P.f, {
                label: j.intl.string(j.t["61W33d"]),
                value: i,
                onChange: a,
                maxLength: b.NA2,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
var B = n(998445),
    K = n(836480),
    q = n(283973),
    J = n(664121),
    V = n(906471);
function $(e) {
    let { icon: t, title: n, description: i, onClick: s } = e;
    return (0, l.jsx)(k.vN, {
        children: (0, l.jsxs)("button", {
            className: y.we,
            onClick: s,
            children: [
                (0, l.jsx)("div", { className: y.XM, children: (0, l.jsx)(t, { size: "md", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: y.ht,
                    children: [
                        (0, l.jsx)(C.E, { variant: "text-md/semibold", children: n }),
                        (0, l.jsx)(C.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                (0, l.jsx)("img", { className: y.$O, alt: "", src: V }),
            ],
        }),
    });
}
function z(e) {
    let { onSelectOption: t, onExplore: n, onCreateServer: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)($, {
                icon: B.L,
                title: j.intl.string(j.t.riOUtB),
                description: j.intl.string(j.t["5u0zvP"]),
                onClick: () => t(Q.JOIN_SERVER),
            }),
            (0, l.jsx)($, {
                icon: K.Q,
                title: j.intl.string(j.t.gHNiza),
                description: j.intl.string(j.t.v7xiEA),
                onClick: n,
            }),
            (0, l.jsx)($, {
                icon: q.R,
                title: j.intl.string(j.t.w5uwoI),
                description: j.intl.string(j.t.bgoxKS),
                onClick: () => t(Q.ADD_FRIEND),
            }),
            (0, l.jsx)($, {
                icon: J.R,
                title: j.intl.string(j.t.ZLfEo8),
                description: j.intl.string(j.t.z7OAvN),
                onClick: i,
            }),
        ],
    });
}
function Z(e) {
    let { inviteLink: t, onInviteLinkChange: n } = e;
    return (0, l.jsx)(w.D, {
        label: j.intl.string(j.t.riOUtB),
        children: (0, l.jsx)(O.k, { value: t, onChange: n, placeholder: j.intl.string(j.t["+9XKWu"]), autoFocus: !0 }),
    });
}
function F(e) {
    let { friendUsername: t, onFriendUsernameChange: n } = e;
    return (0, l.jsx)(w.D, {
        label: j.intl.string(j.t.w5uwoI),
        children: (0, l.jsx)(O.k, { value: t, onChange: n, placeholder: j.intl.string(j.t.qRaqel), autoFocus: !0 }),
    });
}
var H = n(488995),
    W = n(324580),
    X = n(977544),
    Q =
        (((i = {}).WELCOME = "welcome"),
        (i.APPEARANCE = "appearance"),
        (i.DOWNLOAD_DESKTOP = "download-desktop"),
        (i.PROFILE = "profile"),
        (i.NEXT_STEPS = "next-steps"),
        (i.JOIN_SERVER = "join-server"),
        (i.ADD_FRIEND = "add-friend"),
        i);
function Y(e) {
    let { onClose: t, ...n } = e,
        [i, C] = s.useState("welcome"),
        [N, b] = s.useState(null),
        [S, v] = s.useState(() => x.default.getCurrentUser()?.globalName ?? ""),
        [I, A] = s.useState(""),
        [f, y] = s.useState(""),
        [T, k] = s.useState(""),
        L = s.useCallback((e) => {
            b(e), C(e);
        }, []),
        _ = s.useCallback(
            (e, t) => {
                "next-steps" === e && null != N && b(null), C(e);
            },
            [N],
        ),
        w = s.useCallback(async () => {
            let e = S.trim(),
                t = x.default.getCurrentUser()?.globalName ?? "";
            if (e.length > 0 && e !== t)
                try {
                    await (0, d._L)({ globalName: e });
                } catch {}
            if (I.trim().length > 0)
                try {
                    await (0, m.gi)({ bio: I.trim() });
                } catch {}
        }, [S, I]),
        O = s.useCallback(async () => (await w(), !0), [w]),
        P = s.useCallback(async () => {
            let e = f.trim().replace(/^(https?:\/\/)?(discord\.gg\/|discord\.com\/invite\/)/, "");
            if (0 === e.length) return !1;
            try {
                await o.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: e,
                    context: { location: "New User Onboarding" },
                });
            } catch {
                return !1;
            }
            return !0;
        }, [f]),
        U = s.useCallback(async () => {
            await w(),
                await t(),
                (0, p.transitionToGlobalDiscovery)({ tab: H.GlobalDiscoveryTab.SERVERS, entrypoint: W.J8.UNKNOWN });
        }, [w, t]),
        G = s.useCallback(async () => {
            let e = T.trim();
            if (0 === e.length) return !1;
            try {
                await c.A.sendRequest({ discordTag: e, context: { location: "New User Onboarding" } });
            } catch {
                return !1;
            }
            return !0;
        }, [T]),
        M = s.useCallback(async () => {
            await w(), await t(), (0, u.openCreateGuildModal)({ location: "New User Onboarding" });
        }, [w, t]),
        B = s.useCallback(() => {
            window.open((0, g.SU)());
        }, []),
        K = s.useMemo(() => {
            let e = [
                {
                    stepKey: "welcome",
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/6cc1ad92975c4ec38c0673a3109b3450044ebb1d9e9b3c190d1d2d2f8e1cad18.svg",
                        },
                        gradientColor: "purple",
                        title: j.intl.string(j.t.A1Q7a8),
                        subtitle: j.intl.string(j.t.jJZohU),
                    },
                    body: (0, l.jsx)(E, {}),
                    nextButtonProps: { text: j.intl.string(j.t.LhlgY9) },
                },
                {
                    stepKey: "appearance",
                    modalProps: { title: j.intl.string(j.t.mTkQFn), subtitle: j.intl.string(j.t["2b+0N6"]) },
                    body: (0, l.jsx)(D, {}),
                },
            ];
            return (
                h.isPlatformEmbedded ||
                    e.push({
                        stepKey: "download-desktop",
                        modalProps: {
                            graphic: {
                                type: "image",
                                src: "https://cdn.discordapp.com/assets/content/6a4f00b69af328e30b8855282ec9810a11773b42862ed60e4b4e8ca3f44ac55e.svg",
                            },
                            title: j.intl.string(j.t.qDbCbw),
                            subtitle: j.intl.string(j.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: j.intl.format(j.t.JoS1i3, { platform: (0, g.Vf)() }),
                            icon: a.s,
                            onClick: B,
                        },
                        nextButtonProps: { text: j.intl.string(j.t.L5eIZ2) },
                    }),
                e.push(
                    {
                        stepKey: "profile",
                        modalProps: { title: j.intl.string(j.t["6A8F1a"]), subtitle: j.intl.string(j.t.sqjmbr) },
                        body: (0, l.jsx)(R, {
                            pendingGlobalName: S,
                            onGlobalNameChange: v,
                            pendingBio: I,
                            onBioChange: A,
                        }),
                        onNext: O,
                    },
                    {
                        stepKey: "next-steps",
                        modalProps: {
                            graphic: { type: "image", src: X.A },
                            gradientColor: "blue",
                            title: j.intl.string(j.t["++F+ha"]),
                            subtitle: j.intl.string(j.t.yMX0GO),
                        },
                        body: (0, l.jsx)(z, { onSelectOption: L, onExplore: U, onCreateServer: M }),
                        nextButtonProps: { text: j.intl.string(j.t.zcmBTS) },
                    },
                ),
                e
            );
        }, [S, I, O, L, U, M, B]),
        q = s.useMemo(
            () =>
                h.isPlatformEmbedded
                    ? ["welcome", "appearance", "profile", "next-steps"]
                    : ["welcome", "appearance", "download-desktop", "profile", "next-steps"],
            [],
        ),
        J = s.useMemo(
            () => ({
                "join-server": {
                    stepKey: "join-server",
                    modalProps: { title: j.intl.string(j.t.riOUtB), subtitle: j.intl.string(j.t.cs48bs) },
                    body: (0, l.jsx)(Z, { inviteLink: f, onInviteLinkChange: y }),
                    nextButtonProps: { text: j.intl.string(j.t["Ts/9Ac"]) },
                    nextEnabled: f.trim().length > 0,
                    onNext: P,
                },
                "add-friend": {
                    stepKey: "add-friend",
                    modalProps: { title: j.intl.string(j.t.w5uwoI), subtitle: j.intl.string(j.t.jy1kln) },
                    body: (0, l.jsx)(F, { friendUsername: T, onFriendUsernameChange: k }),
                    nextButtonProps: { text: j.intl.string(j.t["PMsq/b"]) },
                    nextEnabled: T.trim().length > 0,
                    onNext: G,
                },
            }),
            [f, T, P, G],
        ),
        V = s.useMemo(() => (null != N && null != J[N] ? [...K, J[N]] : K), [K, N, J]);
    return (0, l.jsx)(r.t, {
        ...n,
        onClose: t,
        steps: V,
        numberedSteps: q,
        currentStepKey: i,
        onStepChange: _,
        onComplete: w,
    });
}
