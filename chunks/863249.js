n.d(t, {
    ZP: () => y,
    q0: () => E,
    xo: () => v
});
var i = n(544891),
    r = n(570140),
    a = n(668781),
    s = n(239091),
    o = n(881052),
    l = n(962086),
    u = n(160404),
    c = n(264229),
    d = n(271383),
    f = n(701190),
    _ = n(594174),
    p = n(626135),
    h = n(246364),
    m = n(981631),
    g = n(388032);
let E = -1;
function v(e) {
    r.Z.dispatch({
        type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW',
        guildId: e
    });
}
let y = {
    fetchVerificationForm: async (e, t) => {
        let n = null != t ? t : f.Z.getInviteKeyForGuildId(e),
            a = _.default.getCurrentUser(),
            s = !d.ZP.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await i.tn.get({
                url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != n ? (0, c.jX)(n) : void 0
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
                        guild: a.guild
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
            url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
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
            url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
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
            url: m.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    submitVerificationForm: async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (u.Z.isFullServerPreview(e)) {
            (0, l.aq)(e, { memberOptions: { isPending: !1 } });
            return;
        }
        try {
            let { body: a } = await i.tn.put({
                url: m.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
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
                (0, h.YG)(t.formFields) && n !== E && setTimeout(() => v(e), n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Zy)(),
                        a.Z.show({
                            title: g.intl.string(g.t['2bHM5e']),
                            body: g.intl.string(g.t.D0lNBA),
                            confirmText: g.intl.string(g.t.qFctfH)
                        }),
                        {
                            ...t,
                            message: g.intl.string(g.t.D0lNBA)
                        })
                    );
                case 403:
                    throw {
                        ...t,
                        message: g.intl.string(g.t.bu2hl5)
                    };
                default:
                    var c;
                    throw {
                        ...t,
                        message: null !== (c = new o.Hx(t).getAnyErrorMessage()) && void 0 !== c ? c : g.intl.string(g.t.R0RpRU)
                    };
            }
        }
    },
    clearCoachmark: function () {
        r.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: i, reason: r, reasonOther: a, responses: s } = e;
        p.default.track(m.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: i.id,
            guild_id: t.id,
            reason: r,
            reason_other: a,
            responses: s
        });
    }
};
