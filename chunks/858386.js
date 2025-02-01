n.d(t, { Z: () => m }), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(893776),
    s = n(147913),
    o = n(594174),
    l = n(626135),
    u = n(374023),
    c = n(344532),
    d = n(981631),
    f = n(231338);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = 'LOGIN_REQUIRED_ACTIONS_MODAL_KEY';
class h extends s.Z {
    handleConnectionOpen() {
        let e = o.default.getCurrentUser();
        if (null == e || u.s.isDisallowPopupsSet()) return;
        let t = c.Z.requiredActionsIncludes(e.id, [d.ane.UPDATE_PASSWORD]);
        c.Z.wasLoginAttemptedInSession(e.id) && t
            ? (0, r.ZDy)(
                  async () => {
                      let { default: e } = await n.e('48707').then(n.bind(n, 194530));
                      return function (t) {
                          let n = () => {
                                  t.onClose(), a.Z.logout(d.Z5c.LOGIN);
                              },
                              r = () => {
                                  l.default.track(d.rMx.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              };
                          return (0, i.jsx)(e, {
                              ...t,
                              onSuccess: r,
                              onClose: n,
                              requirementsUpdated: !0
                          });
                      };
                  },
                  {
                      modalKey: p,
                      onCloseRequest: f.Vq,
                      instant: !0
                  }
              )
            : t && a.Z.logout(d.Z5c.LOGIN);
    }
    constructor(...e) {
        super(...e), _(this, 'actions', { POST_CONNECTION_OPEN: this.handleConnectionOpen });
    }
}
let m = new h();
