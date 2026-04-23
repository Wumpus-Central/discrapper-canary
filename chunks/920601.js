"use strict";
n.d(t, { A: () => I });
var i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(317097),
    o = n(17928),
    l = n(366010),
    d = n(112834),
    _ = n(775602),
    u = n(345815),
    c = n(590703),
    E = n(543699),
    h = n(702841),
    m = n(374994),
    f = n(661531),
    g = n(996988);
let p = {
        [g.d.POPOUT]: "user-profile-popout",
        [g.d.MODAL]: "user-profile-modal",
        [g.d.MODAL_V2]: "user-profile-modal-v2",
        [g.d.SIDEBAR]: "user-profile-sidebar",
        [g.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
    },
    A = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-surface-high)",
        "--profile-gradient-secondary-color": "var(--background-surface-high)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--background-mod-subtle)",
        "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
function I(e) {
    let t,
        { theme: n, themeType: r, primaryColor: g, secondaryColor: I, forceUserTheme: T = !1 } = e,
        [S, N] = (0, o.yK)([_.A], () => [_.A.desaturateUserColors, _.A.syncProfileThemeWithUserTheme]),
        C =
            ((t = (0, h.bG)([_.A], () => _.A.saturation)),
            (0, i.useMemo)(() => {
                if (null == n) return null;
                let e = { theme: n, saturation: t };
                return {
                    overlaySyncedWithUserTheme:
                        f.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(e).hex(),
                    overlay: f.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(e).hex(),
                    sectionBox: f.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(e).hex(),
                    dividerOpacity: n === (0, m.$D)().DARK ? 0.24 : 0.12,
                    rolePillBackgroundColor: f.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(e).hex(),
                };
            }, [n, t])),
        R = N || T ? C?.overlaySyncedWithUserTheme : C?.overlay;
    return {
        profileThemeStyle: (0, i.useMemo)(() => {
            if (null == g || null == I || null == C || null == R) return A;
            let e = (e, t) => (0, a.$k)(e, S, null, t);
            return {
                "--profile-gradient-primary-color": e(g),
                "--profile-gradient-secondary-color": e(I),
                "--profile-gradient-overlay-color": R,
                "--profile-gradient-button-color": e((0, E.wg)(g)),
                "--profile-gradient-modal-background-color": e((0, E.v2)(g, I, N || T ? n : void 0)),
                ...(0, u.Zk)({
                    enabled: !0,
                    primaryColor: g,
                    secondaryColor: I,
                    isDarkTheme: (0, l.M)(n),
                    textMixAmount: 25,
                }),
            };
        }, [g, I, C, R, N, T, n, S]),
        profileThemeClassName: s()((0, d.m)(n), null != r ? { [p[r]]: !0 } : void 0, {
            [c.Gc]: null != g,
            "custom-user-profile-theme": null != g,
        }),
    };
}
