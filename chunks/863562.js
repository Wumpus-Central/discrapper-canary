n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(700582),
    u = n(330726),
    d = n(51144),
    g = n(268350),
    m = n(419922),
    p = n(388032),
    f = n(539437);
let h = (e) => {
    let { className: t, isDisabled: l, sticker: h, canManageSticker: b } = e,
        [x, j] = i.useState(!1),
        [_, v] = (0, u.Z)(null, 4000),
        O = async () => {
            v(null), j(!0);
            try {
                await (0, g.Um)(h);
            } catch (e) {
                v(e.body.message), j(!1);
            }
        },
        C = d.ZP.useUserTag(h.user);
    return (0, r.jsx)(s.u, {
        forceOpen: null != _,
        text: _,
        asContainer: !0,
        children: (0, r.jsxs)("div", {
            className: a()(f.wrapper, t, { [f.wrapperDisabled]: l }),
            children: [
                (0, r.jsxs)("div", {
                    className: a()(f.content, { [f.contentRemoving]: x }),
                    children: [
                        (0, r.jsx)(m.Z, {
                            className: f.sticker,
                            size: 72,
                            sticker: h,
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-xs/semibold",
                                    className: f.stickerName,
                                    children: h.name,
                                }),
                                null != h.user &&
                                    (0, r.jsxs)("div", {
                                        className: f.user,
                                        children: [
                                            (0, r.jsx)(c.Z, {
                                                className: f.userAvatar,
                                                size: o.EFr.SIZE_16,
                                                user: h.user,
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                color: "text-default",
                                                variant: "text-xs/normal",
                                                children: C,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        b
                            ? (0, r.jsxs)("div", {
                                  className: f.actions,
                                  children: [
                                      (0, r.jsx)(o.P3F, {
                                          className: f.action,
                                          onClick: () => {
                                              (0, o.ZDy)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("93626"),
                                                      n.e("34765"),
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
                                                                  sticker: h,
                                                                  guildId: h.guild_id,
                                                              },
                                                              t,
                                                          ),
                                                      );
                                              });
                                          },
                                          "aria-label": p.intl.string(p.t.bt75uw),
                                          children: (0, r.jsx)(o.vdY, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: f.icon,
                                          }),
                                      }),
                                      (0, r.jsx)(o.P3F, {
                                          className: a()(f.action, f.actionRemove),
                                          onClick: O,
                                          "aria-label": p.intl.string(p.t.N86XcP),
                                          children: (0, r.jsx)(o.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: f.icon,
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                x && (0, r.jsx)(o.$jN, { className: f.spinner }),
            ],
        }),
    });
};
