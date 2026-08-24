o.d(t, { A: () => M });
var r = o(582128),
    l = o(503698),
    s = o.n(l),
    n = o(317097),
    a = o(17928),
    c = o(366010),
    i = o(112834),
    u = o(775602),
    m = o(345815),
    h = o(590703),
    E = o(543699),
    d = o(702841),
    _ = o(374994),
    T = o(661531),
    A = o(996988);
let O = {
        [A.d.POPOUT]: "user-profile-popout",
        [A.d.MODAL]: "user-profile-modal",
        [A.d.MODAL_V2]: "user-profile-modal-v2",
        [A.d.SIDEBAR]: "user-profile-sidebar",
        [A.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
        [A.d.EMBED]: "user-profile-embed",
    },
    g = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-surface-high)",
        "--profile-gradient-secondary-color": "var(--background-surface-high)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--background-mod-subtle)",
        "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
function M(e) {
    let t,
        { theme: o, themeType: l, primaryColor: A, secondaryColor: M, forceUserTheme: b = !1 } = e,
        [R, f] = (0, a.yK)([u.Ay], () => [u.Ay.desaturateUserColors, u.Ay.syncProfileThemeWithUserTheme]),
        L =
            ((t = (0, d.bG)([u.Ay], () => u.Ay.saturation)),
            (0, r.useMemo)(() => {
                if (null == o) return null;
                let e = { theme: o, saturation: t };
                return {
                    overlaySyncedWithUserTheme:
                        T.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(e).hex(),
                    overlay: T.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(e).hex(),
                    sectionBox: T.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(e).hex(),
                    dividerOpacity: o === (0, _.$D)().DARK ? 0.24 : 0.12,
                    rolePillBackgroundColor: T.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(e).hex(),
                };
            }, [o, t])),
        C = f || b ? L?.overlaySyncedWithUserTheme : L?.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == A || null == M || null == L || null == C) return g;
            function e(e, t) {
                return (0, n.$k)(e, R, null, t);
            }
            return {
                "--profile-gradient-primary-color": e(A),
                "--profile-gradient-secondary-color": e(M),
                "--profile-gradient-overlay-color": C,
                "--profile-gradient-button-color": e((0, E.wg)(A)),
                "--profile-gradient-modal-background-color": e((0, E.v2)(A, M, f || b ? o : void 0)),
                ...(0, m.Zk)({
                    enabled: !0,
                    primaryColor: A,
                    secondaryColor: M,
                    isDarkTheme: (0, c.M)(o),
                    textMixAmount: 25,
                }),
            };
        }, [A, M, L, C, f, b, o, R]),
        profileThemeClassName: s()((0, i.m)(o), null != l ? { [O[l]]: !0 } : void 0, {
            [h.Gc]: null != A,
            "custom-user-profile-theme": null != A,
            "profile-theme-synced-with-user-theme": null != A && (f || b),
        }),
    };
}
