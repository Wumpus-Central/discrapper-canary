n.d(t, {
    Ii: () => C,
    LX: () => f,
    WJ: () => c,
    aH: () => v,
    mf: () => p,
    nE: () => h,
    nr: () => E
}),
    n(266796),
    n(47120);
var i = n(544891),
    r = n(570140),
    l = n(479531),
    o = n(314897),
    s = n(594174),
    a = n(970606),
    u = n(308083),
    d = n(981631);
async function c(e) {
    let t = await i.tn.get({
        url: d.ANM.GUILD_CLAN_DISCOVERY_INFO(e),
        rejectWithError: !1
    });
    return (0, u.Gh)(t.body);
}
async function h(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, a.hx)({
                guildId: e,
                userId: o.default.getId(),
                source: n
            });
        let l = await i.tn.put({
            url: d.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, s.default.getCurrentUser(), l.body)
        });
    } catch (e) {
        return;
    }
}
function f() {
    r.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function p(e, t) {
    r.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: t
    });
}
let g = (e) => {
    var t, n, i, r, l, o;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null !== (i = e.game_application_ids) && void 0 !== i ? i : []),
        interests: new Set(null !== (r = e.search_terms) && void 0 !== r ? r : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null !== (l = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== l ? l : '',
            formFields: null !== (o = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== o ? o : [],
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
async function v(e) {
    r.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let t = await i.tn.get({
        url: d.ANM.CLAN_SETTINGS(e),
        rejectWithError: !1
    });
    r.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: g(t.body)
    });
}
async function C(e, t) {
    r.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var n, o, s, a;
        let l = await i.tn.patch({
            url: d.ANM.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (o = t.interests) && void 0 !== o ? o : new Set()),
                game_application_ids: Array.from(null !== (s = t.gameApplicationIds) && void 0 !== s ? s : new Set()),
                verification_form: { form_fields: null !== (a = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== a ? a : [] },
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
        return r.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), l.body;
    } catch (e) {
        throw (
            (r.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new l.Z(e)
            }),
            e)
        );
    }
}
async function E(e) {
    try {
        await i.tn.post({
            url: d.ANM.DISABLE_CLAN(e),
            rejectWithError: !0
        });
    } catch (e) {
        throw e;
    }
}
