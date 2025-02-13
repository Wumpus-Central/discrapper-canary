n.d(t, {
    ZP: () => I,
    q0: () => v,
    xo: () => y
});
var i = n(544891),
    r = n(570140),
    a = n(668781),
    s = n(239091),
    o = n(881052),
    l = n(406218),
    u = n(962086),
    c = n(160404),
    d = n(264229),
    f = n(271383),
    _ = n(701190),
    p = n(594174),
    h = n(626135),
    m = n(246364),
    g = n(981631),
    E = n(388032);
let v = -1;
function y(e) {
    r.Z.dispatch({
        type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW',
        guildId: e
    });
}
let I = {
    fetchVerificationForm: async (e, t) => {
        let n = null != t ? t : _.Z.getInviteKeyForGuildId(e),
            a = p.default.getCurrentUser(),
            s = !f.ZP.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await i.tn.get({
                url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != n ? (0, d.jX)(n) : void 0
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
            if (null == t.body) throw t;
            let { body: a } = t;
            return (
                r.Z.dispatch({
                    type: 'MEMBER_VERIFICATION_FORM_UPDATE',
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields,
                        guild: a.guild,
                        profile: null != a.profile ? (0, l.x)(a.profile) : null
                    }
                }),
                a
            );
        } catch (t) {
            r.Z.dispatch({
                type: 'MEMBER_VERIFICATION_FORM_FETCH_FAIL',
                guildId: e
            });
        }
    },
    updateVerificationForm: async (e, t, n) => {
        let { body: a } = await i.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: {
                form_fields: t,
                enabled: n
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: a.version,
                description: a.description,
                formFields: a.form_fields
            }
        });
    },
    updateVerificationFormFieldsLocal: (e, t) => {
        r.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0
        });
    },
    updateVerificationFormDescription: async (e, t) => {
        let { body: n } = await i.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields
            }
        });
    },
    updateVerificationFormDescriptionLocal: (e, t) => {
        r.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0
        });
    },
    enableVerificationForm: async (e, t) => {
        await i.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    submitVerificationForm: async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (c.Z.isFullServerPreview(e)) {
            (0, u.aq)(e, { memberOptions: { isPending: !1 } });
            return;
        }
        try {
            let { body: a } = await i.tn.put({
                url: g.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    version: t.version,
                    form_fields: t.formFields
                },
                rejectWithError: !1
            });
            return (
                r.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: a
                }),
                (0, m.YG)(t.formFields) && n !== v && setTimeout(() => y(e), n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Zy)(),
                        a.Z.show({
                            title: E.intl.string(E.t['2bHM5e']),
                            body: E.intl.string(E.t.D0lNBA),
                            confirmText: E.intl.string(E.t.qFctfH)
                        }),
                        {
                            ...t,
                            message: E.intl.string(E.t.D0lNBA)
                        })
                    );
                case 403:
                    throw {
                        ...t,
                        message: E.intl.string(E.t.bu2hl5)
                    };
                default:
                    var l;
                    throw {
                        ...t,
                        message: null !== (l = new o.Hx(t).getAnyErrorMessage()) && void 0 !== l ? l : E.intl.string(E.t.R0RpRU)
                    };
            }
        }
    },
    clearCoachmark: function () {
        r.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: i, reason: r, reasonOther: a, responses: s } = e;
        h.default.track(g.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: i.id,
            guild_id: t.id,
            reason: r,
            reason_other: a,
            responses: s
        });
    }
};
