var i,
    r,
    s,
    l,
    o = n(442837),
    a = n(570140);
let c = !1,
    d = null,
    u = null;
class h extends (l = o.ZP.Store) {
    getState() {
        return {
            verifySuccess: c,
            verifyErrors: d,
            redirectGuildId: u
        };
    }
}
(s = 'HubEmailVerificationStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = new h(a.Z, {
        HUB_VERIFY_EMAIL_SUCCESS: function (e) {
            let { guildId: t } = e;
            (c = !0), (d = null), (u = t);
        },
        HUB_VERIFY_EMAIL_FAILURE: function (e) {
            let { errors: t } = e;
            (c = !1), (d = t);
        }
    }));
