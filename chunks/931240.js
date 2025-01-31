n.d(t, {
    Ii: () => g,
    LX: () => _,
    WJ: () => d,
    aH: () => m,
    mf: () => p,
    nE: () => f,
    nr: () => E
}),
    n(47120);
var i = n(544891),
    r = n(570140),
    a = n(479531),
    s = n(314897),
    o = n(594174),
    l = n(970606),
    u = n(308083),
    c = n(981631);
async function d(e) {
    let t = await i.tn.get({
        url: c.ANM.GUILD_CLAN_DISCOVERY_INFO(e),
        rejectWithError: !1
    });
    return (0, u.Gh)(t.body);
}
async function f(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, l.hx)({
                guildId: e,
                userId: s.default.getId(),
                source: n
            });
        let a = await i.tn.put({
            url: c.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: {
                ...o.default.getCurrentUser(),
                ...a.body
            }
        });
    } catch (e) {
        return;
    }
}
function _() {
    r.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function p(e, t) {
    r.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: t
    });
}
let h = (e) => {
    var t, n, i, r, a, s;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null !== (i = e.game_application_ids) && void 0 !== i ? i : []),
        interests: new Set(null !== (r = e.search_terms) && void 0 !== r ? r : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null !== (a = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== a ? a : '',
            formFields: null !== (s = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== s ? s : [],
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
async function m(e) {
    r.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let t = await i.tn.get({
        url: c.ANM.CLAN_SETTINGS(e),
        rejectWithError: !1
    });
    r.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: h(t.body)
    });
}
async function g(e, t) {
    r.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var n, s, o, l;
        let a = await i.tn.patch({
            url: c.ANM.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (s = t.interests) && void 0 !== s ? s : new Set()),
                game_application_ids: Array.from(null !== (o = t.gameApplicationIds) && void 0 !== o ? o : new Set()),
                verification_form: { form_fields: null !== (l = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== l ? l : [] },
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
        return r.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), a.body;
    } catch (e) {
        throw (
            (r.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new a.Z(e)
            }),
            e)
        );
    }
}
async function E(e) {
    try {
        await i.tn.post({
            url: c.ANM.DISABLE_CLAN(e),
            rejectWithError: !0
        });
    } catch (e) {
        throw e;
    }
}
