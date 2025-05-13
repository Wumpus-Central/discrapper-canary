t.d(i, {
    Z: () => f,
    t: () => c
}),
    t(953529);
var n,
    l = t(392711),
    r = t.n(l),
    a = t(442837),
    s = t(570140),
    u = t(246364);
function o(e, i, t) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[i] = t),
        e
    );
}
let c = {
        version: '',
        description: '',
        formFields: []
    },
    d = {};
class E extends (n = a.ZP.Store) {
    get(e) {
        if (null != e) return d[e];
    }
    getRulesPrompt(e) {
        var i;
        return r().find(null == (i = d[e]) ? void 0 : i.formFields, u.J);
    }
}
o(E, 'displayName', 'MemberVerificationFormStore');
let f = new E(s.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: i } = e,
            { member_verification_form: t } = i,
            { guild: n } = i;
        if (null != n && null != t) {
            var l;
            return (
                (d[n.id] = {
                    version: t.version,
                    description: null != (l = t.description) ? l : '',
                    formFields: t.form_fields,
                    guild: n
                }),
                !0
            );
        }
        return !1;
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: i, guildId: t } = e;
        if (null == i) d[t] = c;
        else {
            var n;
            let e = null != (n = d[t]) ? n : c;
            d[t] = (function (e) {
                for (var i = 1; i < arguments.length; i++) {
                    var t = null != arguments[i] ? arguments[i] : {},
                        n = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        n.forEach(function (i) {
                            o(e, i, t[i]);
                        });
                }
                return e;
            })({}, e, i);
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var i;
        let { guildId: t } = e;
        d[t] = null != (i = d[t]) ? i : c;
    },
    GUILD_DELETE: function (e) {
        let { guild: i } = e;
        delete d[null == i ? void 0 : i.id];
    }
});
