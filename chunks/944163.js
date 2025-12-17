n.d(t, {
    Z: () => f,
    t: () => d,
}),
    n(953529);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    l = n(570140),
    s = n(246364);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = {
        version: "",
        description: "",
        formFields: [],
    },
    u = {};
class p extends (r = a.ZP.Store) {
    get(e) {
        if (null != e) return u[e];
    }
    getRulesPrompt(e) {
        var t;
        return o().find(null == (t = u[e]) ? void 0 : t.formFields, s.J);
    }
}
c(p, "displayName", "MemberVerificationFormStore");
let f = new p(l.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { member_verification_form: n } = t,
            { guild: r } = t;
        if (null != r && null != n) {
            var i;
            return (
                (u[r.id] = {
                    version: n.version,
                    description: null != (i = n.description) ? i : "",
                    formFields: n.form_fields,
                    guild: r,
                }),
                !0
            );
        }
        return !1;
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: t, guildId: n } = e;
        if (null == t) u[n] = d;
        else {
            var r;
            let e = null != (r = u[n]) ? r : d;
            u[n] = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            c(e, t, n[t]);
                        });
                }
                return e;
            })({}, e, t);
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var t;
        let { guildId: n } = e;
        u[n] = null != (t = u[n]) ? t : d;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete u[null == t ? void 0 : t.id];
    },
});
