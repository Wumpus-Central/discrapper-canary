r.d(n, {
    q0: function () {
        return A;
    },
    xo: function () {
        return N;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(668781),
    s = r(239091),
    l = r(881052),
    u = r(962086),
    c = r(160404),
    d = r(264229),
    f = r(271383),
    p = r(701190),
    h = r(594174),
    _ = r(626135),
    m = r(246364),
    g = r(981631),
    E = r(388032);
let v = async (e, n) => {
        let r = null != n ? n : p.Z.getInviteKeyForGuildId(e),
            o = h.default.getCurrentUser(),
            s = !f.ZP.isMember(e, null == o ? void 0 : o.id);
        try {
            let n = await i.tn.get({
                url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != r ? (0, d.jX)(r) : void 0
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
            if (null == n.body) throw n;
            let { body: o } = n;
            return (
                a.Z.dispatch({
                    type: 'MEMBER_VERIFICATION_FORM_UPDATE',
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields,
                        guild: o.guild
                    }
                }),
                o
            );
        } catch (n) {
            a.Z.dispatch({
                type: 'MEMBER_VERIFICATION_FORM_FETCH_FAIL',
                guildId: e
            });
        }
    },
    y = async (e, n, r) => {
        let { body: o } = await i.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: {
                form_fields: n,
                enabled: r
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: o.version,
                description: o.description,
                formFields: o.form_fields
            }
        });
    },
    b = (e, n) => {
        a.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { formFields: n },
            isLocalUpdate: !0
        });
    },
    I = async (e, n) => {
        let { body: r } = await i.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { description: n },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: {
                version: r.version,
                description: r.description,
                formFields: r.form_fields
            }
        });
    },
    T = (e, n) => {
        a.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { description: n },
            isLocalUpdate: !0
        });
    },
    S = async (e, n) => {
        await i.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: n },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    A = -1,
    C = async function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (c.Z.isFullServerPreview(e)) {
            (0, u.aq)(e, { memberOptions: { isPending: !1 } });
            return;
        }
        try {
            let { body: o } = await i.tn.put({
                url: g.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    version: n.version,
                    form_fields: n.formFields
                },
                rejectWithError: !1
            });
            return (
                a.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: o
                }),
                (0, m.YG)(n.formFields) && r !== A && setTimeout(N, r),
                o
            );
        } catch (n) {
            let { status: e } = n;
            switch (e) {
                case 429:
                    throw (
                        ((0, s.Zy)(),
                        o.Z.show({
                            title: E.intl.string(E.t['2bHM5e']),
                            body: E.intl.string(E.t.D0lNBA),
                            confirmText: E.intl.string(E.t.qFctfH)
                        }),
                        {
                            ...n,
                            message: E.intl.string(E.t.D0lNBA)
                        })
                    );
                case 403:
                    throw {
                        ...n,
                        message: E.intl.string(E.t.bu2hl5)
                    };
                default:
                    var d, f;
                    throw {
                        ...n,
                        message: null !== (f = ((d = new l.Hx(n)), d.getAnyErrorMessage())) && void 0 !== f ? f : E.intl.string(E.t.R0RpRU)
                    };
            }
        }
    };
function N() {
    a.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW' });
}
function R() {
    a.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
}
function O(e) {
    let { guild: n, guildJoinRequest: r, guildJoinRequestUser: i, reason: a, reasonOther: o, responses: s } = e;
    _.default.track(g.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
        application_id: r.joinRequestId,
        applicant_id: i.id,
        guild_id: n.id,
        reason: a,
        reason_other: o,
        responses: s
    });
}
n.ZP = {
    fetchVerificationForm: v,
    updateVerificationForm: y,
    updateVerificationFormFieldsLocal: b,
    updateVerificationFormDescription: I,
    updateVerificationFormDescriptionLocal: T,
    enableVerificationForm: S,
    submitVerificationForm: C,
    clearCoachmark: R,
    reportApplication: O
};
