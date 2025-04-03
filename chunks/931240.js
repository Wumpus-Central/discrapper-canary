r.d(t, {
    Ii: () => d,
    LX: () => p,
    WJ: () => c,
    aH: () => M,
    mf: () => Z,
    nE: () => f,
    nr: () => b
}),
    r(266796),
    r(47120);
var n = r(544891),
    h = r(570140),
    v = r(479531),
    i = r(314897),
    l = r(594174),
    o = r(970606),
    a = r(308083),
    s = r(981631);
async function c(e) {
    let t = await n.tn.get({
        url: s.ANM.GUILD_CLAN_DISCOVERY_INFO(e),
        rejectWithError: !1
    });
    return (0, a.Gh)(t.body);
}
async function f(e, t, r) {
    try {
        null != e &&
            !0 === t &&
            (0, o.hx)({
                guildId: e,
                userId: i.default.getId(),
                source: r
            });
        let v = await n.tn.put({
            url: s.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        h.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, l.default.getCurrentUser(), v.body)
        });
    } catch (e) {
        return;
    }
}
function p() {
    h.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function Z(e, t) {
    h.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: t
    });
}
let u = (e) => {
    var t, r, n, h, v, i;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null != (n = e.game_application_ids) ? n : []),
        interests: new Set(null != (h = e.search_terms) ? h : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null != (v = null == (t = e.verification_form) ? void 0 : t.description) ? v : '',
            formFields: null != (i = null == (r = e.verification_form) ? void 0 : r.form_fields) ? i : [],
            version: ''
        },
        badgeKind: e.badge,
        badgePrimaryColor: e.badge_color_primary,
        badgeSecondaryColor: e.badge_color_secondary,
        banner: e.banner,
        brandPrimaryColor: e.brand_color_primary,
        brandSecondaryColor: e.brand_color_secondary
    };
};
async function M(e) {
    h.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let t = await n.tn.get({
        url: s.ANM.CLAN_SETTINGS(e),
        rejectWithError: !1
    });
    h.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: u(t.body)
    });
}
async function d(e, t) {
    h.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var r, i, l, o;
        let v = await n.tn.patch({
            url: s.ANM.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null != (i = t.interests) ? i : new Set()),
                game_application_ids: Array.from(null != (l = t.gameApplicationIds) ? l : new Set()),
                verification_form: { form_fields: null != (o = null == (r = t.verificationForm) ? void 0 : r.formFields) ? o : [] },
                badge: t.badgeKind,
                badge_color_primary: t.badgePrimaryColor,
                badge_color_secondary: t.badgeSecondaryColor,
                banner: t.banner,
                brand_color_primary: t.brandPrimaryColor,
                brand_color_secondary: t.brandSecondaryColor,
                wildcard_descriptors: t.wildcardDescriptors
            },
            rejectWithError: !0
        });
        return h.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), v.body;
    } catch (e) {
        throw (
            (h.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new v.Z(e)
            }),
            e)
        );
    }
}
async function b(e) {
    try {
        await n.tn.post({
            url: s.ANM.DISABLE_CLAN(e),
            rejectWithError: !0
        });
    } catch (e) {
        throw e;
    }
}
