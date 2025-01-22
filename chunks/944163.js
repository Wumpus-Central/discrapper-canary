r.d(n, {
    t: function () {
        return d;
    }
});
var i,
    a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(570140),
    u = r(246364);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = {
        version: '',
        description: '',
        formFields: []
    },
    f = {};
function p(e) {
    let { form: n, guildId: r } = e;
    if (null == n) f[r] = d;
    else {
        var i;
        let e = null !== (i = f[r]) && void 0 !== i ? i : d;
        f[r] = {
            ...e,
            ...n
        };
    }
}
function h(e) {
    var n;
    let { guildId: r } = e;
    f[r] = null !== (n = f[r]) && void 0 !== n ? n : d;
}
function _(e) {
    let { invite: n } = e,
        { member_verification_form: r } = n,
        { guild: i } = n;
    if (null != i && null != r) {
        var a;
        return (
            (f[i.id] = {
                version: r.version,
                description: null !== (a = r.description) && void 0 !== a ? a : '',
                formFields: r.form_fields,
                guild: i
            }),
            !0
        );
    }
    return !1;
}
function m(e) {
    let { guild: n } = e;
    delete f[null == n ? void 0 : n.id];
}
class g extends (i = s.ZP.Store) {
    get(e) {
        if (null != e) return f[e];
    }
    getRulesPrompt(e) {
        var n;
        return o().find(null === (n = f[e]) || void 0 === n ? void 0 : n.formFields, u.J);
    }
}
c(g, 'displayName', 'MemberVerificationFormStore'),
    (n.Z = new g(l.Z, {
        INVITE_ACCEPT_SUCCESS: _,
        MEMBER_VERIFICATION_FORM_UPDATE: p,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: h,
        GUILD_DELETE: m
    }));
