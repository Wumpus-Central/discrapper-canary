n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(843472),
    s = n(309010),
    o = n(64983),
    c = n(652215),
    u = n(49999),
    d = n(985018),
    p = n(988726);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class h extends i.PureComponent {
    render() {
        let e = "".concat(d.intl.string(d.t.VWqWZQ), "\n").concat(d.intl.string(d.t["0Lgb/K"]));
        return (0, r.jsx)(o.A, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: d.intl.string(d.t.Sd8Ixw),
            trackingSource: c.kZU.INVITE_NOTICE,
            type: c.n5X.INVITE,
            image: p,
            imageMarginX: 46,
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "handleInvite", () => {
                let { guild: e } = this.props;
                (0, l.mMO)(async () => {
                    let { default: t } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            t,
                            ((i = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            f(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    guild: e,
                                    source: c.PE1.INVITE_NOTICE,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i),
                        );
                    };
                });
            }),
            f(this, "handleClose", () => {
                let e = s.A.getChannelId(),
                    t = d.intl.formatToPlainString(d.t.DEn7nu, { invitePeople: d.intl.string(d.t.Sd8Ixw) });
                this.props.markAsDismissed(u.i.UNKNOWN), null != e && a.A.sendBotMessage(e, t);
            });
    }
}
let A = h;
