n.d(t, { Z: () => h });
var i,
    r,
    a,
    l = n(442837),
    s = n(570140);
let o = !1,
    c = null,
    d = null;
class u extends (a = l.ZP.Store) {
    getState() {
        return {
            verifySuccess: o,
            verifyErrors: c,
            redirectGuildId: d
        };
    }
}
(r = 'HubEmailVerificationStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = r);
let h = new u(s.Z, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (o = !0), (c = null), (d = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (o = !1), (c = t);
    }
});
