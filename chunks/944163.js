n.d(t, {
    Z: () => A,
    t: () => c
});
var r,
    l,
    i,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    E = n(570140),
    u = n(246364);
let c = {
        version: '',
        description: '',
        formFields: []
    },
    _ = {};
class d extends (i = o.ZP.Store) {
    get(e) {
        if (null != e) return _[e];
    }
    getRulesPrompt(e) {
        var t;
        return s().find(null === (t = _[e]) || void 0 === t ? void 0 : t.formFields, u.J);
    }
}
(l = 'MemberVerificationFormStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = l);
let A = new d(E.Z, {
    INVITE_ACCEPT_SUCCESS: function (e) {
        let { invite: t } = e,
            { member_verification_form: n } = t,
            { guild: r } = t;
        if (null != r && null != n) {
            var l;
            return (
                (_[r.id] = {
                    version: n.version,
                    description: null !== (l = n.description) && void 0 !== l ? l : '',
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
        if (null == t) _[n] = c;
        else {
            var r;
            let e = null !== (r = _[n]) && void 0 !== r ? r : c;
            _[n] = {
                ...e,
                ...t
            };
        }
    },
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
        var t;
        let { guildId: n } = e;
        _[n] = null !== (t = _[n]) && void 0 !== t ? t : c;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete _[null == t ? void 0 : t.id];
    }
});
