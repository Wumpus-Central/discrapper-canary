n.d(t, { Z: () => S, default: () => I }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(32880),
    r = n(347704),
    o = n(846293),
    c = n(49229),
    d = n(631670),
    u = n(754487),
    p = n(837057),
    m = n(207803),
    x = n(287809),
    g = n(53505),
    h = n(723702),
    C = n(625950),
    N = n(488995),
    b = n(324580),
    j = n(985018),
    E = n(139763),
    A = n(555672),
    v = n(977544),
    S =
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
        [i, S] = s.useState("welcome"),
        [I, f] = s.useState(null),
        [y, D] = s.useState(() => x.default.getCurrentUser()?.globalName ?? ""),
        [T, k] = s.useState(""),
        [L, _] = s.useState(""),
        [U, w] = s.useState(""),
        O = s.useCallback((e) => {
            f(e), S(e);
        }, []),
        P = s.useCallback(
            (e, t) => {
                "next-steps" === e && null != I && f(null), S(e);
            },
            [I],
        ),
        G = s.useCallback(async () => {
            let e = y.trim(),
                t = x.default.getCurrentUser()?.globalName ?? "";
            if (e.length > 0 && e !== t)
                try {
                    await (0, d._L)({ globalName: e });
                } catch {}
            if (T.trim().length > 0)
                try {
                    await (0, m.gi)({ bio: T.trim() });
                } catch {}
        }, [y, T]),
        M = s.useCallback(async () => (await G(), !0), [G]),
        R = s.useCallback(async () => {
            let e = L.trim().replace(/^(https?:\/\/)?(discord\.gg\/|discord\.com\/invite\/)/, "");
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
        }, [L]),
        B = s.useCallback(async () => {
            await G(),
                await t(),
                (0, p.transitionToGlobalDiscovery)({ tab: N.GlobalDiscoveryTab.SERVERS, entrypoint: b.J8.UNKNOWN });
        }, [G, t]),
        K = s.useCallback(async () => {
            let e = U.trim();
            if (0 === e.length) return !1;
            try {
                await c.A.sendRequest({ discordTag: e, context: { location: "New User Onboarding" } });
            } catch {
                return !1;
            }
            return !0;
        }, [U]),
        q = s.useCallback(async () => {
            await G(), await t(), (0, u.openCreateGuildModal)({ location: "New User Onboarding" });
        }, [G, t]),
        V = s.useCallback(() => {
            window.open((0, g.SU)());
        }, []),
        J = s.useMemo(() => {
            let e = [
                {
                    stepKey: "welcome",
                    modalProps: {
                        graphic: { type: "image", src: E.A },
                        gradientColor: "purple",
                        title: j.intl.string(j.t.A1Q7a8),
                        subtitle: j.intl.string(j.t.jJZohU),
                    },
                    body: (0, l.jsx)(C.Q7, {}),
                    nextButtonProps: { text: j.intl.string(j.t.LhlgY9) },
                },
                {
                    stepKey: "appearance",
                    modalProps: { title: j.intl.string(j.t.mTkQFn), subtitle: j.intl.string(j.t["2b+0N6"]) },
                    body: (0, l.jsx)(C.CE, {}),
                },
            ];
            return (
                h.isPlatformEmbedded ||
                    e.push({
                        stepKey: "download-desktop",
                        modalProps: {
                            graphic: { type: "image", src: A.A },
                            title: j.intl.string(j.t.qDbCbw),
                            subtitle: j.intl.string(j.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: j.intl.format(j.t.JoS1i3, { platform: (0, g.Vf)() }),
                            icon: a.s,
                            onClick: V,
                        },
                        nextButtonProps: { text: j.intl.string(j.t.L5eIZ2) },
                    }),
                e.push(
                    {
                        stepKey: "profile",
                        modalProps: { title: j.intl.string(j.t["6A8F1a"]), subtitle: j.intl.string(j.t.sqjmbr) },
                        body: (0, l.jsx)(C.LU, {
                            pendingGlobalName: y,
                            onGlobalNameChange: D,
                            pendingBio: T,
                            onBioChange: k,
                        }),
                        onNext: M,
                    },
                    {
                        stepKey: "next-steps",
                        modalProps: {
                            graphic: { type: "image", src: v.A },
                            gradientColor: "blue",
                            title: j.intl.string(j.t["++F+ha"]),
                            subtitle: j.intl.string(j.t.yMX0GO),
                        },
                        body: (0, l.jsx)(C.kx, { onSelectOption: O, onExplore: B, onCreateServer: q }),
                        nextButtonProps: { text: j.intl.string(j.t.zcmBTS) },
                    },
                ),
                e
            );
        }, [y, T, M, O, B, q, V]),
        Z = s.useMemo(
            () =>
                h.isPlatformEmbedded
                    ? ["welcome", "appearance", "profile", "next-steps"]
                    : ["welcome", "appearance", "download-desktop", "profile", "next-steps"],
            [],
        ),
        $ = s.useMemo(
            () => ({
                "join-server": {
                    stepKey: "join-server",
                    modalProps: { title: j.intl.string(j.t.riOUtB), subtitle: j.intl.string(j.t.cs48bs) },
                    body: (0, l.jsx)(C.Xu, { inviteLink: L, onInviteLinkChange: _ }),
                    nextButtonProps: { text: j.intl.string(j.t["Ts/9Ac"]) },
                    nextEnabled: L.trim().length > 0,
                    onNext: R,
                },
                "add-friend": {
                    stepKey: "add-friend",
                    modalProps: { title: j.intl.string(j.t.w5uwoI), subtitle: j.intl.string(j.t.jy1kln) },
                    body: (0, l.jsx)(C.VU, { friendUsername: U, onFriendUsernameChange: w }),
                    nextButtonProps: { text: j.intl.string(j.t["PMsq/b"]) },
                    nextEnabled: U.trim().length > 0,
                    onNext: K,
                },
            }),
            [L, U, R, K],
        ),
        z = s.useMemo(() => (null != I && null != $[I] ? [...J, $[I]] : J), [J, I, $]);
    return (0, l.jsx)(r.t, {
        ...n,
        onClose: t,
        steps: z,
        numberedSteps: Z,
        currentStepKey: i,
        onStepChange: P,
        onComplete: G,
    });
}
