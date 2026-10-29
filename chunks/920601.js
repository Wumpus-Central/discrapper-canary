r.d(t, { A: () => M });
var o = r(582128),
    l = r(503698),
    s = r.n(l),
    n = r(317097),
    i = r(17928),
    a = r(366010),
    c = r(112834),
    u = r(775602),
    m = r(345815),
    h = r(590703),
    d = r(543699),
    E = r(702841),
    _ = r(374994),
    T = r(661531),
    A = r(996988);
let g = {
        [A.d.POPOUT]: "user-profile-popout",
        [A.d.MODAL]: "user-profile-modal",
        [A.d.MODAL_V2]: "user-profile-modal-v2",
        [A.d.SIDEBAR]: "user-profile-sidebar",
        [A.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
        [A.d.EMBED]: "user-profile-embed",
    },
    O = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-surface-high)",
        "--profile-gradient-secondary-color": "var(--background-surface-high)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--background-mod-subtle)",
        "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
function M(e) {
    let t,
        { theme: r, themeType: l, primaryColor: A, secondaryColor: M, forceUserTheme: b = !1 } = e,
        [f, R] = (0, i.yK)([u.Ay], () => [u.Ay.desaturateUserColors, u.Ay.syncProfileThemeWithUserTheme]),
        p =
            ((t = (0, E.bG)([u.Ay], () => u.Ay.saturation)),
            (0, o.useMemo)(() => {
                if (null == r) return null;
                let e = { theme: r, saturation: t };
                return {
                    overlaySyncedWithUserTheme:
                        T.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(e).hex(),
                    overlay: T.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(e).hex(),
                    sectionBox: T.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(e).hex(),
                    dividerOpacity: r === (0, _.$D)().DARK ? 0.24 : 0.12,
                    rolePillBackgroundColor: T.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(e).hex(),
                };
            }, [r, t])),
        L = R || b ? p?.overlaySyncedWithUserTheme : p?.overlay;
    return {
        profileThemeStyle: (0, o.useMemo)(() => {
            if (null == A || null == M || null == p || null == L) return O;
            function e(e, t) {
                return (0, n.$k)(e, f, null, t);
            }
            return {
                "--profile-gradient-primary-color": e(A),
                "--profile-gradient-secondary-color": e(M),
                "--profile-gradient-overlay-color": L,
                "--profile-gradient-button-color": e((0, d.wg)(A)),
                "--profile-gradient-modal-background-color": e((0, d.v2)(A, M, R || b ? r : void 0)),
                ...(0, m.Zk)({
                    enabled: !0,
                    primaryColor: A,
                    secondaryColor: M,
                    isDarkTheme: (0, a.M)(r),
                    textMixAmount: 25,
                }),
            };
        }, [A, M, p, L, R, b, r, f]),
        profileThemeClassName: s()((0, c.m)(r), null != l ? { [g[l]]: !0 } : void 0, {
            [h.Gc]: null != A,
            "custom-user-profile-theme": null != A,
            "profile-theme-synced-with-user-theme": null != A && (R || b),
        }),
    };
}
