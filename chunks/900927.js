r.d(t, { Z: () => j });
var n = r(255367);
r(73800);
var i = r(399606),
    a = r(481060),
    l = r(275759),
    o = r(565138),
    s = r(706454),
    c = r(271383),
    u = r(430824),
    d = r(709054),
    m = r(388032),
    p = r(131806);
function b(e) {
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
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function j(e) {
    let { userId: t, guildId: r, textClassName: j, tooltipDelay: v } = e,
        x = (0, i.e7)([s.default], () => s.default.locale),
        y = (0, i.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        O = (0, i.e7)([c.ZP], () => (null != r ? c.ZP.getMember(r, t) : null)),
        h = (0, l.FI)(d.default.extractTimestamp(t), x),
        g = (0, l.FI)(null == O ? void 0 : O.joinedAt, x);
    return null == y || null == O
        ? (0, n.jsx)(a.Text, {
              variant: "text-sm/normal",
              className: j,
              children: h,
          })
        : (0, n.jsxs)("div", {
              className: p.memberSinceWrapper,
              children: [
                  (0, n.jsxs)("div", {
                      className: p.memberSince,
                      children: [
                          (0, n.jsx)(a.ua7, {
                              text: m.intl.string(m.t.uvGmCw),
                              delay: v,
                              children: (e) =>
                                  (0, n.jsx)(
                                      a.gw7,
                                      f(
                                          b(
                                              {
                                                  size: "custom",
                                                  width: 28,
                                                  height: 28,
                                                  color: "currentColor",
                                              },
                                              e,
                                          ),
                                          { className: p.discordIcon },
                                      ),
                                  ),
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: j,
                              children: h,
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", { className: p.divider }),
                  (0, n.jsxs)("div", {
                      className: p.memberSince,
                      children: [
                          (0, n.jsx)(a.ua7, {
                              text: y.name,
                              delay: v,
                              children: (e) =>
                                  (0, n.jsx)(
                                      o.Z,
                                      f(b({}, e), {
                                          guild: y,
                                          size: o.Z.Sizes.SMOL,
                                          className: p.guildIcon,
                                      }),
                                  ),
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: j,
                              children: g,
                          }),
                      ],
                  }),
              ],
          });
}
