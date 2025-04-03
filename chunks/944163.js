t.d(n, {
    Z: () => h,
    t: () => d
}),
    t(266796);
var r,
    o = t(392711),
    i = t.n(o),
    a = t(442837),
    s = t(570140),
    l = t(246364);
function c(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let d = {
        version: '',
        description: '',
        formFields: []
    },
    u = {};
class m extends (r = a.ZP.Store) {
    get(e) {
        if (null != e) return u[e];
    }
    getRulesPrompt(e) {
        var n;
        return i().find(null == (n = u[e]) ? void 0 : n.formFields, l.J);
    }
}
c(m, 'displayName', 'MemberVerificationFormStore');
let h = new m(s.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: n } = e,
            { member_verification_form: t } = n,
            { guild: r } = n;
        if (null != r && null != t) {
            var o;
            return (
                (u[r.id] = {
                    version: t.version,
                    description: null != (o = t.description) ? o : '',
                    formFields: t.form_fields,
                    guild: r
                }),
                !0
            );
        }
        return !1;
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: n, guildId: t } = e;
        if (null == n) u[t] = d;
        else {
            var r;
            let e = null != (r = u[t]) ? r : d;
            u[t] = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        r.forEach(function (n) {
                            c(e, n, t[n]);
                        });
                }
                return e;
            })({}, e, n);
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var n;
        let { guildId: t } = e;
        u[t] = null != (n = u[t]) ? n : d;
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        delete u[null == n ? void 0 : n.id];
    }
});
