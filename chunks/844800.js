n.d(t, { Z: () => p });
var r,
    i,
    o,
    a = n(442837),
    l = n(570140);
let s = !1,
    c = null,
    u = null;
class d extends (o = a.ZP.Store) {
    getState() {
        return {
            verifySuccess: s,
            verifyErrors: c,
            redirectGuildId: u
        };
    }
}
(i = 'HubEmailVerificationStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i);
let p = new d(l.Z, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (s = !0), (c = null), (u = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (s = !1), (c = t);
    }
});
