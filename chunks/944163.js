n.d(t, {
    Z: () => d,
    t: () => c
}),
    n(953529);
var r,
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    i = n(570140),
    o = n(246364);
function E(e, t, n) {
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
let c = {
        version: '',
        description: '',
        formFields: []
    },
    u = {};
class _ extends (r = s.ZP.Store) {
    get(e) {
        if (null != e) return u[e];
    }
    getRulesPrompt(e) {
        var t;
        return a().find(null == (t = u[e]) ? void 0 : t.formFields, o.J);
    }
}
E(_, 'displayName', 'MemberVerificationFormStore');
let d = new _(i.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { member_verification_form: n } = t,
            { guild: r } = t;
        if (null != r && null != n) {
            var l;
            return (
                (u[r.id] = {
                    version: n.version,
                    description: null != (l = n.description) ? l : '',
                    formFields: n.form_fields,
                    guild: r
                }),
                !0
            );
        }
        return !1;
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (null == t) u[n] = c;
        else {
            var r;
            let e = null != (r = u[n]) ? r : c;
            u[n] = (function (e) {
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
                            E(e, t, n[t]);
                        });
                }
                return e;
            })({}, e, t);
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var t;
        let { guildId: n } = e;
        u[n] = null != (t = u[n]) ? t : c;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete u[null == t ? void 0 : t.id];
    }
});
