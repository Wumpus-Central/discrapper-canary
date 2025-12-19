t.d(i, {
    Z: () => f,
    t: () => d,
}),
    t(953529);
var n,
    l = t(392711),
    r = t.n(l),
    s = t(442837),
    u = t(570140),
    a = t(246364);
function o(e, i, t) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[i] = t),
        e
    );
}
let d = {
        version: "",
        description: "",
        formFields: [],
    },
    c = {};
class E extends (n = s.ZP.Store) {
    get(e) {
        if (null != e) return c[e];
    }
    getRulesPrompt(e) {
        var i;
        return r().find(null == (i = c[e]) ? void 0 : i.formFields, a.J);
    }
}
o(E, "displayName", "MemberVerificationFormStore");
let f = new E(u.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: i } = e,
            { member_verification_form: t } = i,
            { guild: n } = i;
        if (null != n && null != t) {
            var l;
            return (
                (c[n.id] = {
                    version: t.version,
                    description: null != (l = t.description) ? l : "",
                    formFields: t.form_fields,
                    guild: n,
                }),
                !0
            );
        }
        return !1;
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: i, guildId: t } = e;
        if (null == i) c[t] = d;
        else {
            var n;
            let e = null != (n = c[t]) ? n : d;
            c[t] = (function (e) {
                for (var i = 1; i < arguments.length; i++) {
                    var t = null != arguments[i] ? arguments[i] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
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
        c[t] = null != (i = c[t]) ? i : d;
    },
    GUILD_DELETE: function (e) {
        let { guild: i } = e;
        delete c[null == i ? void 0 : i.id];
    },
});
