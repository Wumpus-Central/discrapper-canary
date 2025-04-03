n.d(t, {
    ZP: () => T,
    q0: () => I,
    xo: () => S
}),
    n(266796);
var r = n(544891),
    i = n(570140),
    o = n(668781),
    a = n(239091),
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
            o = p.default.getCurrentUser(),
            a = !f.ZP.isMember(e, null == o ? void 0 : o.id);
        try {
            let t = await r.tn.get({
                url: g.ANM.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: a,
                    invite_code: null != n ? (0, d.jX)(n) : void 0
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
            if (null == t.body) throw t;
            let { body: o } = t;
            return (
                i.Z.dispatch({
                    type: 'MEMBER_VERIFICATION_FORM_UPDATE',
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields,
                        guild: o.guild,
                        profile: null != o.profile ? (0, l.xo)(o.profile) : null
                    }
                }),
                o
            );
        } catch (t) {
            i.Z.dispatch({
                type: 'MEMBER_VERIFICATION_FORM_FETCH_FAIL',
                guildId: e
            });
        }
    },
    updateVerificationForm: async (e, t, n) => {
        let { body: o } = await r.tn.patch({
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
                version: o.version,
                description: o.description,
                formFields: o.form_fields
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
            let { body: o } = await r.tn.put({
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
                    request: o
                }),
                (0, m.YG)(t.formFields) && n !== I && setTimeout(() => S(e), n),
                o
            );
        } catch (t) {
            let { status: e } = t;
            switch (e) {
                case 429:
                    throw (
                        ((0, a.Zy)(),
                        o.Z.show({
                            title: E.NW.string(E.t.MmIrpa),
                            body: E.NW.string(E.t.yjpDQ0),
                            confirmText: E.NW.string(E.t.XNGT1N)
                        }),
                        O(y({}, t), { message: E.NW.string(E.t.yjpDQ0) }))
                    );
                case 403:
                    throw O(y({}, t), { message: E.NW.string(E.t['8T1rxM']) });
                default:
                    var l, d;
                    throw O(y({}, t), { message: null != (d = ((l = new s.Hx(t)), l.getAnyErrorMessage())) ? d : E.NW.string(E.t.R0RpRU) });
            }
        }
    },
    clearCoachmark: function () {
        i.Z.dispatch({ type: 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR' });
    },
    reportApplication: function (e) {
        let { guild: t, guildJoinRequest: n, guildJoinRequestUser: r, reason: i, reasonOther: o, responses: a } = e;
        h.default.track(g.rMx.GUILD_MEMBER_APPLICATION_REPORTED, {
            application_id: n.joinRequestId,
            applicant_id: r.id,
            guild_id: t.id,
            reason: i,
            reason_other: o,
            responses: a
        });
    }
};
