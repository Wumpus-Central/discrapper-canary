n.d(t, { n: () => A });
var r = n(627968),
    l = n(64700),
    i = n(990078),
    a = n(397927),
    s = n(442433),
    o = n(793574),
    c = n(47167),
    u = n(598104),
    d = n(73028),
    f = n(665691),
    p = n(954571),
    h = n(652215),
    b = n(985018),
    g = n(202115);
let m = (e) => {
        let { channel: t } = e;
        return (0, f.bG)({ channelId: t.id })
            ? (0, r.jsx)(i.m, {
                  text: b.intl.string(b.t.QyZ4Td),
                  children: (0, r.jsx)(a.m5V, {
                      size: "xs",
                      "aria-label": b.intl.string(b.t.VHXh8a),
                      color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    A = l.memo(function (e) {
        let { channel: t } = e,
            l = t.id,
            f = (0, c.Ay)(t);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.m, {
                    asContainer: !0,
                    text: b.intl.string(b.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, r.jsxs)(a.DUT, {
                        className: g.cD,
                        onClick: () => {
                            (0, d.U)(l, o.A.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, s.L3)(
                                e,
                                () =>
                                    Promise.all([n.e("97262"), n.e("60200"), n.e("26021")])
                                        .then(n.bind(n, 4027))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) => {
                                                var l, i;
                                                return (0, r.jsx)(
                                                    n,
                                                    ((l = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
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
                                                    })({}, e)),
                                                    (i = i =
                                                        {
                                                            channel: t,
                                                            selected: !0,
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              l,
                                                              Object.getOwnPropertyDescriptors(i),
                                                          )
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(i)).forEach(function (e) {
                                                              Object.defineProperty(
                                                                  l,
                                                                  e,
                                                                  Object.getOwnPropertyDescriptor(i, e),
                                                              );
                                                          }),
                                                    l),
                                                );
                                            };
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            p.default.track(h.HAw.GDM_EDIT_INTERACTED, {
                                channel_id: t.id,
                                action: "entry_point_hovered",
                                location: o.A.HEADER_BAR,
                            });
                        },
                        "aria-label": b.intl.string(b.t["5Q9+/L"]),
                        children: [
                            (0, r.jsx)(u.A, {
                                className: g.gn,
                                "aria-hidden": !0,
                                channel: t,
                                size: a._3J.SIZE_20,
                                facepileSizeOverride: a._3J.SIZE_24,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: null != f ? f : "",
                            }),
                            (0, r.jsx)(a.R2l, {
                                className: g.IZ,
                                size: "xs",
                                color: "currentColor",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(m, { channel: t }),
            ],
        });
    });
