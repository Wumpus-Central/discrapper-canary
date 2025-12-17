n.d(t, { Z: () => d });
var r,
    i,
    s = n(442837),
    a = n(570140);
let l = !1,
    o = null,
    c = null;
class u extends (i = s.ZP.Store) {
    getState() {
        return {
            verifySuccess: l,
            verifyErrors: o,
            redirectGuildId: c,
        };
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "HubEmailVerificationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "HubEmailVerificationStore");
let d = new u(a.Z, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (l = !0), (o = null), (c = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (l = !1), (o = t);
    },
});
