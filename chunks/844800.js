n.d(t, { Z: () => _ });
var i,
    r,
    l,
    a = n(442837),
    o = n(570140);
let s = !1,
    c = null,
    d = null;
class u extends (l = a.ZP.Store) {
    getState() {
        return {
            verifySuccess: s,
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
let _ = new u(o.Z, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (s = !0), (c = null), (d = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (s = !1), (c = t);
    }
});
