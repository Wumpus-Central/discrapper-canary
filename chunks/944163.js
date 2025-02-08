t.d(n, {
    Z: () => x,
    t: () => u
});
var r,
    o,
    i,
    s = t(392711),
    a = t.n(s),
    l = t(442837),
    c = t(570140),
    d = t(246364);
let u = {
        version: '',
        description: '',
        formFields: []
    },
    m = {};
class h extends (i = l.ZP.Store) {
    get(e) {
        if (null != e) return m[e];
    }
    getRulesPrompt(e) {
        var n;
        return a().find(null === (n = m[e]) || void 0 === n ? void 0 : n.formFields, d.J);
    }
}
(o = 'MemberVerificationFormStore'),
    (r = 'displayName') in h
        ? Object.defineProperty(h, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[r] = o);
let x = new h(c.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: n } = e,
            { member_verification_form: t } = n,
            { guild: r } = n;
        if (null != r && null != t) {
            var o;
            return (
                (m[r.id] = {
                    version: t.version,
                    description: null !== (o = t.description) && void 0 !== o ? o : '',
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
        if (null == n) m[t] = u;
        else {
            var r;
            let e = null !== (r = m[t]) && void 0 !== r ? r : u;
            m[t] = {
                ...e,
                ...n
            };
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var n;
        let { guildId: t } = e;
        m[t] = null !== (n = m[t]) && void 0 !== n ? n : u;
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        delete m[null == n ? void 0 : n.id];
    }
});
