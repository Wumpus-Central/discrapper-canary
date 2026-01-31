r.d(t, {
    default: () => u,
}),
    r(896048);
var n = r(627968),
    c = r(64700),
    o = r(158954),
    i = r(397927),
    a = r(624458),
    s = r(513461),
    l = r(985018);
let u = (e) => {
    var t, r;
    let { guildId: u, userId: p, guildJoinRequestId: b, onConfirm: O, onError: f, modalProps: y } = e,
        [j, g] = c.useState(),
        h = async () => {
            try {
                await a.A.updateGuildJoinRequest(u, p, b, s.B5.REJECTED, j), null == O || O();
            } catch (e) {
                null == f || f();
            }
        };
    return (0, n.jsx)(
        o.ConfirmModal,
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
                title: l.intl.string(l.t["mFP/qw"]),
                cancelText: l.intl.string(l.t["ETE/oC"]),
                confirmText: l.intl.string(l.t.hDtbsz),
                onConfirm: h,
            },
            y,
        )),
        (r = r =
            {
                children: (0, n.jsx)(i.fs1, {
                    value: j,
                    onChange: g,
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
