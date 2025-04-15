n.d(t, { Z: () => h });
var r,
    i,
    s,
    l = n(442837),
    o = n(570140);
let a = !1,
    c = null,
    u = null;
class d extends (s = l.ZP.Store) {
    getState() {
        return {
            verifySuccess: a,
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
let h = new d(o.Z, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (a = !0), (c = null), (u = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (a = !1), (c = t);
    }
});
