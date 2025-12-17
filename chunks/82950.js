n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(986332),
    p = n(428695),
    f = n(981631),
    g = n(388032),
    h = n(538505);
function m(e) {
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
let b = a().debounce(c.ZP.trackWithMetadata, 500),
    _ = (e) => {
        let {
            guild: t,
            title: n,
            message: l,
            image: a,
            type: d,
            imageMarginX: p,
            imageMarginTop: m,
            trackingSource: _,
            undismissable: E,
            onDismissed: O,
            onClick: v,
            cta: y,
            ctaColor: I,
        } = e;
        i.useEffect(() => {
            b(f.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: d,
                guild_id: t.id,
            });
        }, [t.id, d]);
        let C = null;
        "function" == typeof y
            ? (C = y())
            : null != y &&
              (C = (0, r.jsx)(o.zx, {
                  "data-migration-pending": !0,
                  className: h.btn,
                  size: o.zx.Sizes.SMALL,
                  onClick: () => {
                      null != d &&
                          u.default.track(f.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: _,
                              guild_id: t.id,
                              notice_type: d,
                          }),
                          null == v || v();
                  },
                  fullWidth: !0,
                  color: I,
                  children: y,
              }));
        let S = null != p ? "".concat(p, "px") : "16px";
        return (0, r.jsxs)("div", {
            className: h.channelNotice,
            children: [
                !0 === E
                    ? null
                    : (0, r.jsx)(s.P3F, {
                          onClick: () => {
                              c.ZP.trackWithMetadata(f.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: d }), null == O || O();
                          },
                          className: h.close,
                          "aria-label": g.intl.string(g.t.WAI6xu),
                          children: (0, r.jsx)(s.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: h.closeIcon,
                          }),
                      }),
                (0, r.jsx)("div", {
                    className: h.imageContainer,
                    style: {
                        marginTop: "".concat(m, "px"),
                        marginLeft: S,
                        marginRight: S,
                    },
                    children: (0, r.jsx)("img", {
                        className: h.image,
                        src: a,
                        alt: "",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: h.message,
                    children: [
                        null != n
                            ? (0, r.jsx)(s.Heading, {
                                  variant: "heading-md/semibold",
                                  className: h.title,
                                  children: n,
                              })
                            : null,
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: l,
                        }),
                        C,
                    ],
                }),
            ],
        });
    },
    E = function (e) {
        let { showRedesignedChannelNotice: t } = (0, d.o)(!0);
        return t ? (0, r.jsx)(p.Z, m({}, e)) : (0, r.jsx)(_, m({}, e));
    };
