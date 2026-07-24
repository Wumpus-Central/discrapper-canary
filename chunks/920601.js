"use strict";
n.d(t, { A: () => m });
var i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(317097),
    l = n(17928),
    o = n(366010),
    d = n(112834),
    c = n(775602),
    u = n(345815),
    _ = n(590703),
    E = n(543699),
    A = n(702841),
    h = n(374994),
    I = n(661531),
    f = n(996988);
let p = {
        [f.d.POPOUT]: "user-profile-popout",
        [f.d.MODAL]: "user-profile-modal",
        [f.d.MODAL_V2]: "user-profile-modal-v2",
        [f.d.SIDEBAR]: "user-profile-sidebar",
        [f.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background",
    },
    T = Object.freeze({
        "--profile-gradient-primary-color": "var(--background-surface-high)",
        "--profile-gradient-secondary-color": "var(--background-surface-high)",
        "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
        "--profile-gradient-button-color": "var(--background-mod-subtle)",
        "--profile-gradient-modal-background-color": "var(--background-base-lower)",
    });
function m(e) {
    let t,
        { theme: n, themeType: r, primaryColor: f, secondaryColor: m, forceUserTheme: g = !1 } = e,
        [S, N] = (0, l.yK)([c.Ay], () => [c.Ay.desaturateUserColors, c.Ay.syncProfileThemeWithUserTheme]),
        C =
            ((t = (0, A.bG)([c.Ay], () => c.Ay.saturation)),
            (0, i.useMemo)(() => {
                if (null == n) return null;
                let e = { theme: n, saturation: t };
                return {
                    overlaySyncedWithUserTheme:
                        I.A.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve(e).hex(),
                    overlay: I.A.colors.PROFILE_GRADIENT_OVERLAY.resolve(e).hex(),
                    sectionBox: I.A.colors.PROFILE_GRADIENT_SECTION_BOX.resolve(e).hex(),
                    dividerOpacity: n === (0, h.$D)().DARK ? 0.24 : 0.12,
                    rolePillBackgroundColor: I.A.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve(e).hex(),
                };
            }, [n, t])),
        O = N || g ? C?.overlaySyncedWithUserTheme : C?.overlay;
    return {
        profileThemeStyle: (0, i.useMemo)(() => {
            if (null == f || null == m || null == C || null == O) return T;
            function e(e, t) {
                return (0, s.$k)(e, S, null, t);
            }
            return {
                "--profile-gradient-primary-color": e(f),
                "--profile-gradient-secondary-color": e(m),
                "--profile-gradient-overlay-color": O,
                "--profile-gradient-button-color": e((0, E.wg)(f)),
                "--profile-gradient-modal-background-color": e((0, E.v2)(f, m, N || g ? n : void 0)),
                ...(0, u.Zk)({
                    enabled: !0,
                    primaryColor: f,
                    secondaryColor: m,
                    isDarkTheme: (0, o.M)(n),
                    textMixAmount: 25,
                }),
            };
        }, [f, m, C, O, N, g, n, S]),
        profileThemeClassName: a()((0, d.m)(n), null != r ? { [p[r]]: !0 } : void 0, {
            [_.Gc]: null != f,
            "custom-user-profile-theme": null != f,
        }),
    };
}
