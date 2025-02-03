n.d(t, {
    Z: () => g,
    t: () => c
});
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(246364);
function u(e, t, n) {
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
    d = {};
function f(e) {
    let { form: t, guildId: n } = e;
    if (null == t) d[n] = c;
    else {
        var i;
        let e = null !== (i = d[n]) && void 0 !== i ? i : c;
        d[n] = {
            ...e,
            ...t
        };
    }
}
function _(e) {
    var t;
    let { guildId: n } = e;
    d[n] = null !== (t = d[n]) && void 0 !== t ? t : c;
}
function p(e) {
    let { invite: t } = e,
        { member_verification_form: n } = t,
        { guild: i } = t;
    if (null != i && null != n) {
        var r;
        return (
            (d[i.id] = {
                version: n.version,
                description: null !== (r = n.description) && void 0 !== r ? r : '',
                formFields: n.form_fields,
                guild: i
            }),
            !0
        );
    }
    return !1;
}
function h(e) {
    let { guild: t } = e;
    delete d[null == t ? void 0 : t.id];
}
class m extends (i = s.ZP.Store) {
    get(e) {
        if (null != e) return d[e];
    }
    getRulesPrompt(e) {
        var t;
        return a().find(null === (t = d[e]) || void 0 === t ? void 0 : t.formFields, l.J);
    }
}
u(m, 'displayName', 'MemberVerificationFormStore');
let g = new m(o.Z, {
    INVITE_ACCEPT_SUCCESS: p,
    MEMBER_VERIFICATION_FORM_UPDATE: f,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: _,
    GUILD_DELETE: h
});
