t.d(n, {
    Z: () => p,
    t: () => u
});
var o,
    r,
    i,
    a = t(392711),
    l = t.n(a),
    s = t(442837),
    c = t(570140),
    d = t(246364);
let u = {
        version: '',
        description: '',
        formFields: []
    },
    _ = {};
class m extends (i = s.ZP.Store) {
    get(e) {
        if (null != e) return _[e];
    }
    getRulesPrompt(e) {
        var n;
        return l().find(null === (n = _[e]) || void 0 === n ? void 0 : n.formFields, d.J);
    }
}
(r = 'MemberVerificationFormStore'),
    (o = 'displayName') in m
        ? Object.defineProperty(m, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[o] = r);
let p = new m(c.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: n } = e,
            { member_verification_form: t } = n,
            { guild: o } = n;
        if (null != o && null != t) {
            var r;
            return (
                (_[o.id] = {
                    version: t.version,
                    description: null !== (r = t.description) && void 0 !== r ? r : '',
                    formFields: t.form_fields,
                    guild: o
                }),
                !0
            );
        }
        return !1;
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let { form: n, guildId: t } = e;
        if (null == n) _[t] = u;
        else {
            var o;
            let e = null !== (o = _[t]) && void 0 !== o ? o : u;
            _[t] = {
                ...e,
                ...n
            };
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var n;
        let { guildId: t } = e;
        _[t] = null !== (n = _[t]) && void 0 !== n ? n : u;
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        delete _[null == n ? void 0 : n.id];
    }
});
