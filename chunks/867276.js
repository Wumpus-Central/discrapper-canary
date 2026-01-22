r.d(t, { default: () => l }), r(896048);
var n = r(627968),
    o = r(64700),
    c = r(397927),
    i = r(624458),
    a = r(513461),
    s = r(985018);
let l = (e) => {
    var t, r;
    let { guildId: l, userId: u, guildJoinRequestId: p, onConfirm: b, onError: O, modalProps: f } = e,
        [y, j] = o.useState(),
        d = async () => {
            try {
                await i.A.updateGuildJoinRequest(l, u, p, a.B5.REJECTED, y), null == b || b();
            } catch (e) {
                null == O || O();
            }
        };
    return (0, n.jsx)(
        c.VoidConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                header: s.intl.string(s.t["mFP/qw"]),
                cancelText: s.intl.string(s.t["ETE/oC"]),
                confirmText: s.intl.string(s.t.hDtbsz),
                onConfirm: d,
            },
            f,
        )),
        (r = r =
            {
                children: (0, n.jsx)(c.fs1, {
                    value: y,
                    onChange: j,
                    maxLength: 160,
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
};
