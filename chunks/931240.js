n.d(t, {
    Ii: () => v,
    LX: () => h,
    WJ: () => _,
    aH: () => E,
    mf: () => m,
    nE: () => p,
    nr: () => b
}),
    n(266796),
    n(47120);
var r = n(544891),
    i = n(570140),
    o = n(479531),
    a = n(314897),
    s = n(594174),
    l = n(970606),
    c = n(308083),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
async function _(e) {
    let t = await r.tn.get({
        url: u.ANM.GUILD_CLAN_DISCOVERY_INFO(e),
        rejectWithError: !1
    });
    return (0, c.Gh)(t.body);
}
async function p(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, l.hx)({
                guildId: e,
                userId: a.default.getId(),
                source: n
            });
        let o = await r.tn.put({
            url: u.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        i.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: f({}, s.default.getCurrentUser(), o.body)
        });
    } catch (e) {
        return;
    }
}
function h() {
    i.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function m(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: t
    });
}
let g = (e) => {
    var t, n, r, i, o, a;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null !== (r = e.game_application_ids) && void 0 !== r ? r : []),
        interests: new Set(null !== (i = e.search_terms) && void 0 !== i ? i : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null !== (o = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== o ? o : '',
            formFields: null !== (a = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== a ? a : [],
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
async function E(e) {
    i.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let t = await r.tn.get({
        url: u.ANM.CLAN_SETTINGS(e),
        rejectWithError: !1
    });
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: g(t.body)
    });
}
async function v(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var n, a, s, l;
        let o = await r.tn.patch({
            url: u.ANM.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (a = t.interests) && void 0 !== a ? a : new Set()),
                game_application_ids: Array.from(null !== (s = t.gameApplicationIds) && void 0 !== s ? s : new Set()),
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
        return i.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), o.body;
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new o.Z(e)
            }),
            e)
        );
    }
}
async function b(e) {
    try {
        await r.tn.post({
            url: u.ANM.DISABLE_CLAN(e),
            rejectWithError: !0
        });
    } catch (e) {
        throw e;
    }
}
