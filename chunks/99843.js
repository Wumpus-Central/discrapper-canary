n.d(t, { j: () => y });
var r = n(54381),
    i = n(473749),
    l = n(28664),
    a = n(481060),
    o = n(239091),
    s = n(100527),
    c = n(933557),
    u = n(266076),
    d = n(769409),
    f = n(210975),
    h = n(626135),
    p = n(981631),
    g = n(388032),
    b = n(408215);
let m = (e) => {
        let { channel: t } = e;
        return (0, f.m$)({ channelId: t.id })
            ? (0, r.jsx)(l.u, {
                  text: g.intl.string(g.t.QyZ4Td),
                  children: (0, r.jsx)(a.tQf, {
                      size: "xs",
                      "aria-label": g.intl.string(g.t.VHXh8a),
                      color: a.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                  }),
              })
            : null;
    },
    y = i.memo(function (e) {
        let { channel: t } = e,
            i = t.id,
            f = (0, c.ZP)(t);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.u, {
                    asContainer: !0,
                    text: g.intl.string(g.t["5Q9+/L"]),
                    position: "bottom",
                    children: (0, r.jsxs)(a.P3F, {
                        className: b.hoverableContainer,
                        onClick: () => {
                            (0, d.B)(i, s.Z.HEADER_BAR);
                        },
                        onContextMenu: (e) =>
                            (0, o.jW)(
                                e,
                                () =>
                                    Promise.all([n.e("79695"), n.e("25421"), n.e("38357")])
                                        .then(n.bind(n, 354741))
                                        .then((e) => {
                                            let { default: n } = e;
                                            return (e) => {
                                                var i, l;
                                                return (0, r.jsx)(
                                                    n,
                                                    ((i = (function (e) {
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
                                                    (l = l =
                                                        {
                                                            channel: t,
                                                            selected: !0,
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              i,
                                                              Object.getOwnPropertyDescriptors(l),
                                                          )
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(l)).forEach(function (e) {
                                                              Object.defineProperty(
                                                                  i,
                                                                  e,
                                                                  Object.getOwnPropertyDescriptor(l, e),
                                                              );
                                                          }),
                                                    i),
                                                );
                                            };
                                        }),
                                { noBlurEvent: !0 },
                            ),
                        onDoubleClick: (e) => e.stopPropagation(),
                        onMouseEnter: () => {
                            h.default.track(p.rMx.GDM_EDIT_INTERACTED, {
                                channel_id: t.id,
                                action: "entry_point_hovered",
                                location: s.Z.HEADER_BAR,
                            });
                        },
                        "aria-label": g.intl.string(g.t["5Q9+/L"]),
                        children: [
                            (0, r.jsx)(u.Z, {
                                className: b.gdmIcon,
                                "aria-hidden": !0,
                                channel: t,
                                size: a.EFr.SIZE_20,
                                facepileSizeOverride: a.EFr.SIZE_24,
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: null != f ? f : "",
                            }),
                            (0, r.jsx)(a.vdY, {
                                className: b.editIcon,
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
