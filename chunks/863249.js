n.d(t, { ZP: () => T }), n(953529);
var r = n(544891),
    i = n(570140),
    a = n(668781),
    o = n(239091),
    s = n(881052),
    l = n(406218),
    c = n(962086),
    u = n(160404),
    d = n(264229),
    f = n(271383),
    _ = n(701190),
    p = n(594174),
    h = n(626135),
    m = n(246364),
    g = n(981631),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = -1;
function S(e) {
    i.Z.dispatch({
        type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW',
        guildId: e
    });
}
let T = {
    fetchVerificationForm: async (e, t) => {
        let n = null != t ? t : _.Z.getInviteKeyForGuildId(e),
            a = p.default.getCurrentUser(),
            o = !f.ZP.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await r.tn.get({
                url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: o,
                    invite_code: null != n ? (0, d.jX)(n) : void 0
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
            if (null == t.body) throw t;
            let { body: a } = t;
            return (
                i.Z.dispatch({
                    type: 'MEMBER_VERIFICATION_FORM_UPDATE',
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields,
                        guild: a.guild,
                        profile: null != a.profile ? (0, l.xo)(a.profile) : null
                    }
                }),
                a
            );
        } catch (t) {
            i.Z.dispatch({
                type: 'MEMBER_VERIFICATION_FORM_FETCH_FAIL',
                guildId: e
            });
        }
    },
    updateVerificationForm: async (e, t, n) => {
        let { body: a } = await r.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: {
                form_fields: t,
                enabled: n
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        i.Z.dispatch({
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
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { formFields: t },
            isLocalUpdate: !0
        });
    },
    updateVerificationFormDescription: async (e, t) => {
        let { body: n } = await r.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { description: t },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        i.Z.dispatch({
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
        i.Z.dispatch({
            type: 'MEMBER_VERIFICATION_FORM_UPDATE',
            guildId: e,
            form: { description: t },
            isLocalUpdate: !0
        });
    },
    enableVerificationForm: async (e, t) => {
        await r.tn.patch({
            url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
            body: { enabled: t },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    submitVerificationForm: async function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
        if (u.Z.isFullServerPreview(e)) return void (0, c.aq)(e, { memberOptions: { isPending: !1 } });
        try {
            let { body: a } = await r.tn.put({
                url: g.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    version: t.version,
                    form_fields: t.formFields
                },
                rejectWithError: !1
            });
            return (
                i.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: a
                }),
                (0, m.YG)(t.formFields) && n !== I && setTimeout(() => S(e), n),
                a
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, o.Zy)(),
                        a.Z.show({
                            title: E.intl.string(E.t.MmIrpa),
                            body: E.intl.string(E.t.yjpDQ0),
                            confirmText: E.intl.string(E.t.XNGT1N)
                        }),
                        O(y({}, t), { message: E.intl.string(E.t.yjpDQ0) }))
                    );
                case 403:
                    throw O(y({}, t), { message: E.intl.string(E.t['8T1rxM']) });
                default:
                    var l, d;
                    throw O(y({}, t), { message: null != (d = ((l = new s.Hx(t)), l.getAnyErrorMessage())) ? d : E.intl.string(E.t.R0RpRU) });
            }
        }
    },
    clearCoachmark: function () {
        i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: a, responses: o } = e;
        h.default.track(g.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: a,
            responses: o
        });
    }
};
