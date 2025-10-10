n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    s = n(570140);
let a = !1,
    o = null,
    c = null;
class u extends (i = l.ZP.Store) {
    getState() {
        return {
            verifySuccess: a,
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
let d = new u(s.Z, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (a = !0), (o = null), (c = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (a = !1), (o = t);
    },
});
