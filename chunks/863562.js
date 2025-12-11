n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(700582),
    d = n(330726),
    u = n(51144),
    g = n(268350),
    f = n(419922),
    m = n(388032),
    b = n(596288);
let p = (e) => {
    let { className: t, isDisabled: l, sticker: p, canManageSticker: h } = e,
        [x, j] = i.useState(!1),
        [v, O] = (0, d.Z)(null, 4000),
        C = async () => {
            O(null), j(!0);
            try {
                await (0, g.Um)(p);
            } catch (e) {
                O(e.body.message), j(!1);
            }
        },
        y = u.ZP.useUserTag(p.user);
    return (0, r.jsx)(s.u, {
        forceOpen: null != v,
        text: v,
        asContainer: !0,
        children: (0, r.jsxs)("div", {
            className: a()(b.wrapper, t, { [b.wrapperDisabled]: l }),
            children: [
                (0, r.jsxs)("div", {
                    className: a()(b.content, { [b.contentRemoving]: x }),
                    children: [
                        (0, r.jsx)(f.Z, {
                            className: b.sticker,
                            size: 72,
                            sticker: p,
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    color: "text-strong",
                                    variant: "text-xs/semibold",
                                    className: b.stickerName,
                                    children: p.name,
                                }),
                                null != p.user &&
                                    (0, r.jsxs)("div", {
                                        className: b.user,
                                        children: [
                                            (0, r.jsx)(c.Z, {
                                                className: b.userAvatar,
                                                size: o.EFr.SIZE_16,
                                                user: p.user,
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                color: "text-default",
                                                variant: "text-xs/normal",
                                                children: y,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        h
                            ? (0, r.jsxs)("div", {
                                  className: b.actions,
                                  children: [
                                      (0, r.jsx)(o.P3F, {
                                          className: b.action,
                                          onClick: () => {
                                              (0, o.ZDy)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("93626"),
                                                      n.e("52719"),
                                                  ]).then(n.bind(n, 136735));
                                                  return (t) =>
                                                      (0, r.jsx)(
                                                          e,
                                                          (function (e) {
                                                              for (var t = 1; t < arguments.length; t++) {
                                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                                      r = Object.keys(n);
                                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                                      (r = r.concat(
                                                                          Object.getOwnPropertySymbols(n).filter(
                                                                              function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(
                                                                                      n,
                                                                                      e,
                                                                                  ).enumerable;
                                                                              },
                                                                          ),
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
                                                          })(
                                                              {
                                                                  sticker: p,
                                                                  guildId: p.guild_id,
                                                              },
                                                              t,
                                                          ),
                                                      );
                                              });
                                          },
                                          "aria-label": m.intl.string(m.t.bt75uw),
                                          children: (0, r.jsx)(o.vdY, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: b.icon,
                                          }),
                                      }),
                                      (0, r.jsx)(o.P3F, {
                                          className: a()(b.action, b.actionRemove),
                                          onClick: C,
                                          "aria-label": m.intl.string(m.t.N86XcP),
                                          children: (0, r.jsx)(o.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: b.icon,
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                x && (0, r.jsx)(o.$jN, { className: b.spinner }),
            ],
        }),
    });
};
