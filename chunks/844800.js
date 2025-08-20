n.d(t, { Z: () => d });
var r,
    i,
    l = n(442837),
    s = n(570140);
let o = !1,
    a = null,
    c = null;
class u extends (i = l.ZP.Store) {
    getState() {
        return {
            verifySuccess: o,
            verifyErrors: a,
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
        (o = !0), (a = null), (c = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (o = !1), (a = t);
    },
});
