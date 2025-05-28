n.d(t, { Z: () => b }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(893776),
    o = n(147913),
    s = n(594174),
    l = n(626135),
    c = n(374023),
    u = n(344532),
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 'LOGIN_REQUIRED_ACTIONS_MODAL_KEY';
class E extends o.Z {
    handleConnectionOpen() {
        let e = s.default.getCurrentUser();
        if (null == e || c.s.isDisallowPopupsSet()) return;
        let t = u.Z.requiredActionsIncludes(e.id, [d.ane.UPDATE_PASSWORD]);
        u.Z.wasLoginAttemptedInSession(e.id) && t
            ? (0, i.ZDy)(
                  async () => {
                      let { default: e } = await n.e('48707').then(n.bind(n, 194530));
                      return function (t) {
                          let n = () => {
                                  t.onClose(), a.Z.logout('login_required_account_manager', d.Z5c.LOGIN);
                              },
                              i = () => {
                                  l.default.track(d.rMx.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              };
                          return (0, r.jsx)(
                              e,
                              m(p({}, t), {
                                  onSuccess: i,
                                  onClose: n,
                                  requirementsUpdated: !0
                              })
                          );
                      };
                  },
                  {
                      modalKey: g,
                      onCloseRequest: f.Vq,
                      instant: !0
                  }
              )
            : t && a.Z.logout('login_required_account_manager', d.Z5c.LOGIN);
    }
    constructor(...e) {
        super(...e), _(this, 'actions', { POST_CONNECTION_OPEN: this.handleConnectionOpen });
    }
}
let b = new E();
