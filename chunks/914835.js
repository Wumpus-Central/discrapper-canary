n.d(t, { A: () => C });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(442433),
    u = n(793574),
    d = n(688810),
    f = n(713654),
    p = n(967144),
    h = n(342296),
    b = n(696451),
    g = n(287809),
    m = n(427262),
    A = n(314307),
    y = n(652215),
    O = n(985018),
    j = n(790687);
function v(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    var t, i, f;
    let { userId: A, channel: y } = e,
        O = l.useRef(null),
        { analyticsLocations: E } = (0, d.Ay)(u.A.USERNAME),
        _ = (0, s.bG)([g.default], () => g.default.getUser(A)),
        C = (0, s.bG)([b.Ay], () => (null != A ? b.Ay.getMember(y.guild_id, A) : null)),
        S = (0, p.gn)(y.guild_id, null != A ? A : void 0, null != (t = null == C ? void 0 : C.colorStrings) ? t : null);
    function I(e) {
        if (null == _) return null;
        (0, c.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("29534"), n.e("67447"), n.e("438")]).then(
                n.bind(n, 708202),
            );
            return (t) =>
                (0, r.jsx)(
                    e,
                    x(v({}, t), {
                        user: _,
                        guildId: y.guild_id,
                        channel: y,
                    }),
                );
        });
    }
    let N = null != (i = null != (f = null == C ? void 0 : C.nick) ? f : m.Ay.getName(_)) ? i : "???",
        T = null == C ? void 0 : C.colorString;
    return null == _
        ? (0, r.jsx)("span", {
              className: a()(j.eM, j.sL),
              children: N,
          })
        : (0, r.jsx)(d.f5, {
              value: E,
              children: (0, r.jsx)(h.A, {
                  targetElementRef: O,
                  user: _,
                  guildId: y.guild_id,
                  channelId: y.id,
                  roleId: null == C ? void 0 : C.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, r.jsx)(
                          o.DUT,
                          x(v({}, e), {
                              innerRef: O,
                              tag: "span",
                              className: j.eM,
                              onContextMenu: I,
                              children: (0, r.jsx)(o.gyj, {
                                  name: N,
                                  colorString: null != T ? T : null,
                                  colorStrings: S,
                              }),
                          }),
                      ),
              }),
          });
}
function _(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, r.jsx)("div", { style: { marginTop: -8 } })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, r.jsx)("div", {
                          className: j.VA,
                          children: O.intl.format(O.t.imPXd5, {
                              usernameHook: (e, n) =>
                                  (0, r.jsx)(
                                      E,
                                      {
                                          userId: t.ownerId,
                                          channel: t,
                                      },
                                      n,
                                  ),
                          }),
                      }),
                  }),
                  t.type === y.rbe.PRIVATE_THREAD
                      ? (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: O.intl.string(O.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function C(e) {
    var t;
    let { channel: n } = e,
        l = null != (t = (0, f.gU)(n)) ? t : o.ysw;
    return (0, r.jsxs)(A.Ay, {
        channelId: n.id,
        children: [
            (0, r.jsx)("div", {
                className: j.P0,
                children: (0, r.jsx)(l, { className: j.Kk }),
            }),
            (0, r.jsx)(A.cr, { children: n.name }),
            (0, r.jsx)(_, { channel: n }),
        ],
    });
}
