n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => E,
        getUserSettingsSectionsByWebUserSettings: () => v,
        getWebUserSettingsByUserSettingsSections: () => A,
        openUserSettings: () => b,
        openUserSettingsFromParsedUrl: () => S,
    }),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(397927),
    a = n(73153),
    s = n(734066),
    o = n(894858),
    l = n(954571),
    c = n(780964),
    u = n(358776),
    d = n(652215);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = "USER_SETTINGS_MODAL_MODAL_KEY";
async function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = arguments.length > 2 ? arguments[2] : void 0,
        [l = { section: d.nc_.ACCOUNT }, ...c] = [t, s],
        { subsection: u, stackingBehavior: f = "replaceAll" } = l,
        _ = m(l, ["subsection", "stackingBehavior"]),
        [g] = c;
    a.h.dispatch(
        p(
            {
                type: "USER_SETTINGS_MODAL_OPEN",
                subsection: null != u ? u : null,
            },
            _,
        ),
    ),
        (0, i.kBI)(E)
            ? o.A.setState({ requestedTargetKey: e })
            : await (0, i.mMO)(
                  async () => {
                      let { default: t } = await Promise.all([n.e("28979"), n.e("48666")]).then(n.bind(n, 796150));
                      return (n) => (0, r.jsx)(t, h(p({}, n), { target: e }));
                  },
                  {
                      modalKey: E,
                      stackingBehavior: f,
                      stackNextByDefault: !0,
                      contextKey: i.SYi,
                  },
              ),
        null == g || g();
}
function y(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    l.default.track(d.HAw.USER_SETTINGS_URL_PARSED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function O(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    l.default.track(d.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function A() {
    let e = (0, u.E7)("getWebUserSettingFromSection"),
        t = (0, u.WJ)("getWebUserSettingFromSection"),
        n = new Map([
            [d.nc_.ACCOUNT, c.X.ACCOUNT_PANEL],
            [d.nc_.PROFILE_CUSTOMIZATION, c.X.PROFILE_PANEL],
            [d.nc_.CONTENT_AND_SOCIAL, c.X.CONTENT_AND_SOCIAL_PANEL],
            [d.nc_.DATA_AND_PRIVACY, c.X.DATA_AND_PRIVACY_PANEL],
            [d.nc_.PRIVACY_AND_SAFETY, c.X.DATA_AND_PRIVACY_PANEL],
            [d.nc_.FAMILY_CENTER, c.X.FAMILY_CENTER_PANEL],
            [d.nc_.SESSIONS, c.X.SESSIONS_PANEL],
            [d.nc_.AUTHORIZED_APPS, c.X.AUTHORIZED_APPS_PANEL],
            [d.nc_.CONNECTIONS, c.X.CONNECTIONS_PANEL],
            [d.nc_.CLIPS, c.X.CLIPS_PANEL],
            [d.nc_.PRIVATE_BROWSING, c.X.PRIVATE_BROWSING_PANEL],
            [d.nc_.PREMIUM, c.X.NITRO_PANEL],
            [d.nc_.GUILD_BOOSTING, c.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
            [d.nc_.SUBSCRIPTIONS, c.X.SUBSCRIPTIONS_PANEL],
            [d.nc_.INVENTORY, c.X.GIFT_PANEL],
            [d.nc_.BILLING, c.X.BILLING_PANEL],
            [d.nc_.APPEARANCE, c.X.APPEARANCE_PANEL],
            [d.nc_.ACCESSIBILITY, c.X.ACCESSIBILITY_PANEL],
            [d.nc_.VOICE, c.X.VOICE_AND_VIDEO_PANEL],
            [d.nc_.POGGERMODE, c.X.POGGERMODE_PANEL],
            [d.nc_.TEXT, c.X.CHAT_PANEL],
            [d.nc_.NOTIFICATIONS, e ? c.X.NOTIFICATIONS_PANEL : c.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL],
            [d.nc_.KEYBINDS, c.X.KEYBINDS_PANEL],
            [d.nc_.LANGUAGE, c.X.LANGUAGE_AND_TIME_PANEL],
            [d.nc_.WINDOWS, c.X.WINDOWS_PANEL],
            [d.nc_.LINUX, c.X.LINUX_PANEL],
            [d.nc_.STREAMER_MODE, c.X.STREAMER_MODE_PANEL],
            [d.nc_.ADVANCED, c.X.ADVANCED_PANEL],
            [d.nc_.ACTIVITY_PRIVACY, c.X.ACTIVITY_PRIVACY_PANEL],
            [d.nc_.REGISTERED_GAMES, c.X.REGISTERED_GAMES_PANEL],
            [d.nc_.OVERLAY, c.X.OVERLAY_PANEL],
            [d.nc_.EXPERIMENTS, c.X.EXPERIMENTS_PANEL],
            [d.nc_.DEVELOPER_OPTIONS, c.X.DEVELOPER_OPTIONS_PANEL],
            [d.nc_.ACCOUNT_STANDING, c.X.ACCOUNT_STANDING_CATEGORY],
            [d.nc_.CONNECTED_GAMES, c.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY],
        ]);
    return e && !(0, s.Pm)() && n.delete(d.nc_.CLIPS), t || n.delete(d.nc_.CONNECTED_GAMES), n;
}
function v() {
    let e = A(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}
function S(e) {
    let { match: t, urlOrigin: n, analyticsLocations: r } = e;
    y({
        section: t.section,
        subsection: t.subsection,
        urlOrigin: n,
    });
    let i = A(),
        a = i.get(t.section);
    if (null == a) {
        O({
            section: t.section,
            subsection: t.subsection,
            urlOrigin: n,
        }),
            b();
        return;
    }
    {
        let e = null != t.subsection && "" !== t.subsection ? i.get(d.nc_[t.subsection]) : null;
        b(null != e ? e : a, {
            section: t.section,
            subsection: t.subsection,
            analyticsLocations: r,
        });
    }
}
