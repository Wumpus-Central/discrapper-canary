n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => E,
        getUserSettingsSectionsByWebUserSettings: () => A,
        getWebUserSettingsByUserSettingsSections: () => v,
        openUserSettings: () => y,
        openUserSettingsFromParsedUrl: () => I,
    }),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(397927),
    a = n(73153),
    o = n(894858),
    s = n(954571),
    l = n(780964),
    c = n(358776),
    u = n(995377),
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
async function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = arguments.length > 2 ? arguments[2] : void 0,
        [
            l = {
                section: d.nc_.ACCOUNT,
            },
            ...c
        ] = [t, s],
        { subsection: f, stackingBehavior: _ = "replaceAll" } = l,
        g = m(l, ["subsection", "stackingBehavior"]),
        [y] = c;
    a.h.dispatch(
        p(
            {
                type: "USER_SETTINGS_MODAL_OPEN",
                subsection: null != f ? f : null,
            },
            g,
        ),
    ),
        (0, u.f)()
            ? o.A.setState({
                  requestedTargetKey: e,
              })
            : await (0, i.mMO)(
                  async () => {
                      let { default: t } = await Promise.all([
                          n.e("54809"),
                          n.e("38939"),
                          n.e("84511"),
                          n.e("3795"),
                          n.e("28936"),
                          n.e("40396"),
                          n.e("13088"),
                          n.e("48330"),
                          n.e("92414"),
                          n.e("94857"),
                          n.e("7034"),
                          n.e("49559"),
                          n.e("37372"),
                          n.e("62175"),
                          n.e("97283"),
                          n.e("3183"),
                          n.e("9753"),
                          n.e("43549"),
                          n.e("2292"),
                          n.e("84127"),
                          n.e("62733"),
                          n.e("83518"),
                          n.e("88474"),
                          n.e("52199"),
                          n.e("76719"),
                          n.e("34749"),
                          n.e("44667"),
                          n.e("7803"),
                          n.e("84704"),
                          n.e("67646"),
                          n.e("9207"),
                          n.e("34348"),
                          n.e("36059"),
                          n.e("95782"),
                          n.e("30485"),
                          n.e("32502"),
                          n.e("47147"),
                      ]).then(n.bind(n, 796150));
                      return (n) =>
                          (0, r.jsx)(
                              t,
                              h(p({}, n), {
                                  target: e,
                              }),
                          );
                  },
                  {
                      modalKey: E,
                      stackingBehavior: _,
                      stackNextByDefault: !0,
                      contextKey: i.SYi,
                  },
              ),
        null == y || y();
}

function b(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    s.default.track(d.HAw.USER_SETTINGS_URL_PARSED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}

function O(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    s.default.track(d.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}

function v() {
    let e = (0, c.WJ)("getWebUserSettingFromSection"),
        t = new Map([
            [d.nc_.ACCOUNT, l.X.ACCOUNT_PANEL],
            [d.nc_.PROFILE_CUSTOMIZATION, l.X.PROFILE_PANEL],
            [d.nc_.CONTENT_AND_SOCIAL, l.X.CONTENT_AND_SOCIAL_PANEL],
            [d.nc_.DATA_AND_PRIVACY, l.X.DATA_AND_PRIVACY_PANEL],
            [d.nc_.PRIVACY_AND_SAFETY, l.X.DATA_AND_PRIVACY_PANEL],
            [d.nc_.FAMILY_CENTER, l.X.FAMILY_CENTER_PANEL],
            [d.nc_.SESSIONS, l.X.SESSIONS_PANEL],
            [d.nc_.AUTHORIZED_APPS, l.X.AUTHORIZED_APPS_PANEL],
            [d.nc_.CONNECTIONS, l.X.CONNECTIONS_PANEL],
            [d.nc_.CLIPS, l.X.CLIPS_PANEL],
            [d.nc_.PRIVATE_BROWSING, l.X.PRIVATE_BROWSING_PANEL],
            [d.nc_.PREMIUM, l.X.NITRO_PANEL],
            [d.nc_.GUILD_BOOSTING, l.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
            [d.nc_.SUBSCRIPTIONS, l.X.SUBSCRIPTIONS_PANEL],
            [d.nc_.INVENTORY, l.X.GIFT_PANEL],
            [d.nc_.BILLING, l.X.BILLING_PANEL],
            [d.nc_.APPEARANCE, l.X.APPEARANCE_PANEL],
            [d.nc_.ACCESSIBILITY, l.X.ACCESSIBILITY_PANEL],
            [d.nc_.VOICE, l.X.VOICE_AND_VIDEO_PANEL],
            [d.nc_.POGGERMODE, l.X.POGGERMODE_PANEL],
            [d.nc_.TEXT, l.X.CHAT_PANEL],
            [d.nc_.NOTIFICATIONS, l.X.NOTIFICATIONS_PANEL],
            [d.nc_.KEYBINDS, l.X.KEYBINDS_PANEL],
            [d.nc_.LANGUAGE, l.X.LANGUAGE_AND_TIME_PANEL],
            [d.nc_.WINDOWS, l.X.WINDOWS_PANEL],
            [d.nc_.LINUX, l.X.LINUX_PANEL],
            [d.nc_.STREAMER_MODE, l.X.STREAMER_MODE_PANEL],
            [d.nc_.ADVANCED, l.X.ADVANCED_PANEL],
            [d.nc_.ACTIVITY_PRIVACY, l.X.ACTIVITY_PRIVACY_PANEL],
            [d.nc_.REGISTERED_GAMES, l.X.REGISTERED_GAMES_PANEL],
            [d.nc_.OVERLAY, l.X.OVERLAY_PANEL],
            [d.nc_.EXPERIMENTS, l.X.EXPERIMENTS_PANEL],
            [d.nc_.DEVELOPER_OPTIONS, l.X.DEVELOPER_OPTIONS_PANEL],
            [d.nc_.ACCOUNT_STANDING, l.X.ACCOUNT_STANDING_CATEGORY],
            [d.nc_.CONNECTED_GAMES, l.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY],
            [d.nc_.EMAILS, l.X.NOTIFICATIONS_EMAIL_CATEGORY],
        ]);
    return e || t.delete(d.nc_.CONNECTED_GAMES), t;
}

function A() {
    let e = v(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}

function I(e) {
    let { match: t, urlOrigin: n, analyticsLocations: r } = e;
    b({
        section: t.section,
        subsection: t.subsection,
        urlOrigin: n,
    });
    let i = v(),
        a = i.get(t.section);
    if (null == a) {
        O({
            section: t.section,
            subsection: t.subsection,
            urlOrigin: n,
        }),
            y();
        return;
    }
    {
        let e = null != t.subsection && "" !== t.subsection ? i.get(d.nc_[t.subsection]) : null;
        y(null != e ? e : a, {
            section: t.section,
            subsection: t.subsection,
            analyticsLocations: r,
        });
    }
}
