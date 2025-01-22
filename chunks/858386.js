var i = r(47120);
var a = r(200651);
r(192379);
var o = r(481060),
    s = r(893776),
    l = r(147913),
    u = r(594174),
    c = r(626135),
    d = r(374023),
    f = r(344532),
    p = r(981631),
    h = r(231338);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = 'LOGIN_REQUIRED_ACTIONS_MODAL_KEY';
class g extends l.Z {
    handleConnectionOpen() {
        let e = u.default.getCurrentUser();
        if (null == e || d.s.isDisallowPopupsSet()) return;
        let n = f.Z.requiredActionsIncludes(e.id, [p.ane.UPDATE_PASSWORD]);
        f.Z.wasLoginAttemptedInSession(e.id) && n
            ? (0, o.openModalLazy)(
                  async () => {
                      let { default: e } = await r.e('48707').then(r.bind(r, 194530));
                      return function (n) {
                          let r = () => {
                                  n.onClose(), s.Z.logout(p.Z5c.LOGIN);
                              },
                              i = () => {
                                  c.default.track(p.rMx.FORCED_UPDATE_PASSWORD_SUCCEEDED), n.onClose();
                              };
                          return (0, a.jsx)(e, {
                              ...n,
                              onSuccess: i,
                              onClose: r,
                              requirementsUpdated: !0
                          });
                      };
                  },
                  {
                      modalKey: m,
                      onCloseRequest: h.Vq,
                      instant: !0
                  }
              )
            : n && s.Z.logout(p.Z5c.LOGIN);
    }
    constructor(...e) {
        super(...e), _(this, 'actions', { POST_CONNECTION_OPEN: this.handleConnectionOpen });
    }
}
n.Z = new g();
