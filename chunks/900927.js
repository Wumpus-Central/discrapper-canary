r.d(t, { Z: () => j });
var n = r(255367);
r(73800);
var i = r(399606),
    a = r(481060),
    l = r(275759),
    s = r(565138),
    o = r(706454),
    c = r(271383),
    u = r(430824),
    d = r(709054),
    p = r(388032),
    f = r(209643);
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
function m(e, t) {
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
        O = (0, i.e7)([o.default], () => o.default.locale),
        y = (0, i.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        g = (0, i.e7)([c.ZP], () => (null != r ? c.ZP.getMember(r, t) : null)),
        x = (0, l.FI)(d.default.extractTimestamp(t), O),
        h = (0, l.FI)(null == g ? void 0 : g.joinedAt, O);
    return null == y || null == g
        ? (0, n.jsx)(a.Text, {
              variant: "text-sm/normal",
              className: j,
              children: x,
          })
        : (0, n.jsxs)("div", {
              className: f.memberSinceWrapper,
              children: [
                  (0, n.jsxs)("div", {
                      className: f.memberSince,
                      children: [
                          (0, n.jsx)(a.ua7, {
                              text: p.intl.string(p.t.uvGmCw),
                              delay: v,
                              children: (e) =>
                                  (0, n.jsx)(
                                      a.gw7,
                                      m(
                                          b(
                                              {
                                                  size: "custom",
                                                  width: 28,
                                                  height: 28,
                                                  color: "currentColor",
                                              },
                                              e,
                                          ),
                                          { className: f.discordIcon },
                                      ),
                                  ),
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: j,
                              children: x,
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", { className: f.divider }),
                  (0, n.jsxs)("div", {
                      className: f.memberSince,
                      children: [
                          (0, n.jsx)(a.ua7, {
                              text: y.name,
                              delay: v,
                              children: (e) =>
                                  (0, n.jsx)(
                                      s.Z,
                                      m(b({}, e), {
                                          guild: y,
                                          size: s.Z.Sizes.SMOL,
                                          className: f.guildIcon,
                                      }),
                                  ),
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: j,
                              children: h,
                          }),
                      ],
                  }),
              ],
          });
}
