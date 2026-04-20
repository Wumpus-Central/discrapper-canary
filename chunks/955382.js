n.d(t, { Z: () => v, default: () => I }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(397927),
    r = n(846293),
    o = n(49229),
    c = n(631670),
    d = n(754487),
    u = n(837057),
    m = n(207803),
    p = n(287809),
    x = n(53505),
    g = n(723702),
    h = n(625950),
    C = n(488995),
    N = n(324580),
    S = n(985018),
    j = n(139763),
    A = n(555672),
    b = n(938822),
    v =
        (((i = {}).WELCOME = "welcome"),
        (i.APPEARANCE = "appearance"),
        (i.DOWNLOAD_DESKTOP = "download-desktop"),
        (i.PROFILE = "profile"),
        (i.NEXT_STEPS = "next-steps"),
        (i.JOIN_SERVER = "join-server"),
        (i.ADD_FRIEND = "add-friend"),
        i);
function I(e) {
    let { onClose: t, ...n } = e,
        [i, v] = s.useState("welcome"),
        [I, T] = s.useState(null),
        [E, D] = s.useState(() => p.default.getCurrentUser()?.globalName ?? ""),
        [f, L] = s.useState(""),
        [k, _] = s.useState(""),
        [U, y] = s.useState(""),
        O = s.useCallback((e) => {
            T(e), v(e);
        }, []),
        G = s.useCallback(
            (e, t) => {
                "next-steps" === e && null != I && T(null), v(e);
            },
            [I],
        ),
        w = s.useCallback(async () => {
            let e = E.trim(),
                t = p.default.getCurrentUser()?.globalName ?? "";
            if (e.length > 0 && e !== t)
                try {
                    await (0, c._L)({ globalName: e });
                } catch {}
            if (f.trim().length > 0)
                try {
                    await (0, m.gi)({ bio: f.trim() });
                } catch {}
        }, [E, f]),
        P = s.useCallback(async () => (await w(), !0), [w]),
        R = s.useCallback(async () => {
            let e = k.trim().replace(/^(https?:\/\/)?(discord\.gg\/|discord\.com\/invite\/)/, "");
            if (0 === e.length) return !1;
            try {
                await r.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: e,
                    context: { location: "New User Onboarding" },
                });
            } catch {
                return !1;
            }
            return !0;
        }, [k]),
        M = s.useCallback(async () => {
            await w(),
                await t(),
                (0, u.transitionToGlobalDiscovery)({ tab: C.GlobalDiscoveryTab.SERVERS, entrypoint: N.J8.UNKNOWN });
        }, [w, t]),
        B = s.useCallback(async () => {
            let e = U.trim();
            if (0 === e.length) return !1;
            try {
                await o.A.sendRequest({ discordTag: e, context: { location: "New User Onboarding" } });
            } catch {
                return !1;
            }
            return !0;
        }, [U]),
        K = s.useCallback(async () => {
            await w(), await t(), (0, d.openCreateGuildModal)({ location: "New User Onboarding" });
        }, [w, t]),
        J = s.useCallback(() => {
            window.open((0, x.SU)());
        }, []),
        q = s.useMemo(() => {
            let e = [
                {
                    stepKey: "welcome",
                    modalProps: {
                        graphic: { type: "image", src: j.A },
                        gradientColor: "purple",
                        title: S.intl.string(S.t.A1Q7a8),
                        subtitle: S.intl.string(S.t.jJZohU),
                    },
                    body: (0, l.jsx)(h.Q7, {}),
                    nextButtonProps: { text: S.intl.string(S.t.LhlgY9) },
                },
                {
                    stepKey: "appearance",
                    modalProps: { title: S.intl.string(S.t.mTkQFn), subtitle: S.intl.string(S.t["2b+0N6"]) },
                    body: (0, l.jsx)(h.CE, {}),
                },
            ];
            return (
                g.isPlatformEmbedded ||
                    e.push({
                        stepKey: "download-desktop",
                        modalProps: {
                            graphic: { type: "image", src: A.A },
                            title: S.intl.string(S.t.qDbCbw),
                            subtitle: S.intl.string(S.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: S.intl.format(S.t.JoS1i3, { platform: (0, x.Vf)() }),
                            icon: a.s3U,
                            onClick: J,
                        },
                        nextButtonProps: { text: S.intl.string(S.t.L5eIZ2) },
                    }),
                e.push(
                    {
                        stepKey: "profile",
                        modalProps: { title: S.intl.string(S.t["6A8F1a"]), subtitle: S.intl.string(S.t.sqjmbr) },
                        body: (0, l.jsx)(h.LU, {
                            pendingGlobalName: E,
                            onGlobalNameChange: D,
                            pendingBio: f,
                            onBioChange: L,
                        }),
                        onNext: P,
                    },
                    {
                        stepKey: "next-steps",
                        modalProps: {
                            graphic: { type: "image", src: b.A },
                            gradientColor: "blue",
                            title: S.intl.string(S.t["++F+ha"]),
                            subtitle: S.intl.string(S.t.yMX0GO),
                        },
                        body: (0, l.jsx)(h.kx, { onSelectOption: O, onExplore: M, onCreateServer: K }),
                        nextButtonProps: { text: S.intl.string(S.t.zcmBTS) },
                    },
                ),
                e
            );
        }, [E, f, P, O, M, K, J]),
        V = s.useMemo(
            () =>
                g.isPlatformEmbedded
                    ? ["welcome", "appearance", "profile", "next-steps"]
                    : ["welcome", "appearance", "download-desktop", "profile", "next-steps"],
            [],
        ),
        H = s.useMemo(
            () => ({
                "join-server": {
                    stepKey: "join-server",
                    modalProps: { title: S.intl.string(S.t.riOUtB), subtitle: S.intl.string(S.t.cs48bs) },
                    body: (0, l.jsx)(h.Xu, { inviteLink: k, onInviteLinkChange: _ }),
                    nextButtonProps: { text: S.intl.string(S.t["Ts/9Ac"]) },
                    nextEnabled: k.trim().length > 0,
                    onNext: R,
                },
                "add-friend": {
                    stepKey: "add-friend",
                    modalProps: { title: S.intl.string(S.t.w5uwoI), subtitle: S.intl.string(S.t.jy1kln) },
                    body: (0, l.jsx)(h.VU, { friendUsername: U, onFriendUsernameChange: y }),
                    nextButtonProps: { text: S.intl.string(S.t["PMsq/b"]) },
                    nextEnabled: U.trim().length > 0,
                    onNext: B,
                },
            }),
            [k, U, R, B],
        ),
        Z = s.useMemo(() => (null != I && null != H[I] ? [...q, H[I]] : q), [q, I, H]);
    return (0, l.jsx)(a.t04, {
        ...n,
        onClose: t,
        steps: Z,
        numberedSteps: V,
        currentStepKey: i,
        onStepChange: G,
        onComplete: w,
    });
}
