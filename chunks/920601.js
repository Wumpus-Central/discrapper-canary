"use strict";
n.d(t, { A: () => I });
var i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(317097),
    o = n(17928),
    l = n(366010),
    u = n(112834),
    c = n(775602),
    d = n(345815),
    _ = n(590703),
    h = n(543699),
    f = n(702841),
    p = n(374994),
    E = n(661531),
    m = n(996988);
let g = {
        [m.d.POPOUT]: "user-profile-popout",
        [m.d.MODAL]: "user-profile-modal",
        [m.d.MODAL_V2]: "user-profile-modal-v2",
        [m.d.SIDEBAR]: "user-profile-sidebar",
        [m.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
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
        { theme: n, themeType: r, primaryColor: m, secondaryColor: I, forceUserTheme: T = !1 } = e,
        [S, y] = (0, o.yK)([c.Ay], () => [c.Ay.desaturateUserColors, c.Ay.syncProfileThemeWithUserTheme]),
        C =
            ((t = (0, f.bG)([c.Ay], () => c.Ay.saturation)),
            (0, i.useMemo)(() => {
                if (null == n) return null;
                let e = { theme: n, saturation: t };
                return {
                    overlaySyncedWithUserTheme:
                        E.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(e).hex(),
                    overlay: E.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(e).hex(),
                    sectionBox: E.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(e).hex(),
                    dividerOpacity: n === (0, p.$D)().DARK ? 0.24 : 0.12,
                    rolePillBackgroundColor: E.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(e).hex(),
                };
            }, [n, t])),
        N = y || T ? C?.overlaySyncedWithUserTheme : C?.overlay;
    return {
        profileThemeStyle: (0, i.useMemo)(() => {
            if (null == m || null == I || null == C || null == N) return A;
            let e = (e, t) => (0, a.$k)(e, S, null, t);
            return {
                "--profile-gradient-primary-color": e(m),
                "--profile-gradient-secondary-color": e(I),
                "--profile-gradient-overlay-color": N,
                "--profile-gradient-button-color": e((0, h.wg)(m)),
                "--profile-gradient-modal-background-color": e((0, h.v2)(m, I, y || T ? n : void 0)),
                ...(0, d.Zk)({
                    enabled: !0,
                    primaryColor: m,
                    secondaryColor: I,
                    isDarkTheme: (0, l.M)(n),
                    textMixAmount: 25,
                }),
            };
        }, [m, I, C, N, y, T, n, S]),
        profileThemeClassName: s()((0, u.m)(n), null != r ? { [g[r]]: !0 } : void 0, {
            [_.Gc]: null != m,
            "custom-user-profile-theme": null != m,
        }),
    };
}
