r.d(n, {
    Ii: function () {
        return v;
    },
    LX: function () {
        return _;
    },
    WJ: function () {
        return p;
    },
    aH: function () {
        return E;
    },
    mf: function () {
        return m;
    },
    nE: function () {
        return h;
    },
    nr: function () {
        return y;
    }
});
var i = r(47120);
var a = r(544891),
    o = r(570140),
    s = r(479531),
    l = r(314897),
    u = r(594174),
    c = r(970606),
    d = r(308083),
    f = r(981631);
async function p(e) {
    let n = await a.tn.get({
        url: f.ANM.GUILD_CLAN_DISCOVERY_INFO(e),
        rejectWithError: !1
    });
    return (0, d.Gh)(n.body);
}
async function h(e, n, r) {
    try {
        null != e &&
            !0 === n &&
            (0, c.hx)({
                guildId: e,
                userId: l.default.getId(),
                source: r
            });
        let i = await a.tn.put({
            url: f.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: n
            },
            rejectWithError: !1
        });
        o.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: {
                ...u.default.getCurrentUser(),
                ...i.body
            }
        });
    } catch (e) {
        return;
    }
}
function _() {
    o.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function m(e, n) {
    o.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: n
    });
}
let g = (e) => {
    var n, r, i, a, o, s;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null !== (i = e.game_application_ids) && void 0 !== i ? i : []),
        interests: new Set(null !== (a = e.search_terms) && void 0 !== a ? a : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null !== (o = null === (n = e.verification_form) || void 0 === n ? void 0 : n.description) && void 0 !== o ? o : '',
            formFields: null !== (s = null === (r = e.verification_form) || void 0 === r ? void 0 : r.form_fields) && void 0 !== s ? s : [],
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
    o.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let n = await a.tn.get({
        url: f.ANM.CLAN_SETTINGS(e),
        rejectWithError: !1
    });
    o.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: g(n.body)
    });
}
async function v(e, n) {
    o.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var r, i, l, u;
        let s = await a.tn.patch({
            url: f.ANM.CLAN_SETTINGS(e),
            body: {
                tag: n.tag,
                description: n.description,
                play_style: n.playstyle,
                search_terms: Array.from(null !== (i = n.interests) && void 0 !== i ? i : new Set()),
                game_application_ids: Array.from(null !== (l = n.gameApplicationIds) && void 0 !== l ? l : new Set()),
                verification_form: { form_fields: null !== (u = null === (r = n.verificationForm) || void 0 === r ? void 0 : r.formFields) && void 0 !== u ? u : [] },
                badge: n.badgeKind,
                badge_color_primary: n.badgePrimaryColor,
                badge_color_secondary: n.badgeSecondaryColor,
                banner: n.banner,
                brand_color_primary: n.brandPrimaryColor,
                brand_color_secondary: n.brandSecondaryColor,
                wildcard_descriptors: n.wildcardDescriptors
            },
            rejectWithError: !0
        });
        return o.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), s.body;
    } catch (e) {
        throw (
            (o.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new s.Z(e)
            }),
            e)
        );
    }
}
async function y(e) {
    try {
        await a.tn.post({
            url: f.ANM.DISABLE_CLAN(e),
            rejectWithError: !0
        });
    } catch (e) {
        throw e;
    }
}
