n.d(t, { Z: () => h });
var r,
    i,
    l,
    s = n(442837),
    a = n(570140);
let o = !1,
    c = null,
    u = null;
class d extends (l = s.ZP.Store) {
    getState() {
        return {
            verifySuccess: o,
            verifyErrors: c,
            redirectGuildId: u
        };
    }
}
((i = 'HubEmailVerificationStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i));
let h = new d(a.Z, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((o = !0), (c = null), (u = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((o = !1), (c = t));
    }
});
