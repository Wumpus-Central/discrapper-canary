n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(755721),
    o = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(986332),
    p = n(428695),
    f = n(981631),
    h = n(388032),
    g = n(449824);
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
let _ = a().debounce(c.ZP.trackWithMetadata, 500),
    b = (e) => {
        let {
            guild: t,
            title: n,
            message: l,
            image: a,
            type: d,
            imageMarginX: p,
            imageMarginTop: m,
            trackingSource: b,
            undismissable: E,
            onDismissed: O,
            onClick: y,
            cta: v,
            ctaColor: I,
        } = e;
        i.useEffect(() => {
            _(f.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: d,
                guild_id: t.id,
            });
        }, [t.id, d]);
        let C = null;
        "function" == typeof v
            ? (C = v())
            : null != v &&
              (C = (0, r.jsx)(s.zx, {
                  "data-migration-pending": !0,
                  className: g.btn,
                  size: s.zx.Sizes.SMALL,
                  onClick: () => {
                      null != d &&
                          u.default.track(f.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: b,
                              guild_id: t.id,
                              notice_type: d,
                          }),
                          null == y || y();
                  },
                  fullWidth: !0,
                  color: I,
                  children: v,
              }));
        let S = null != p ? "".concat(p, "px") : "16px";
        return (0, r.jsxs)("div", {
            className: g.channelNotice,
            children: [
                !0 === E
                    ? null
                    : (0, r.jsx)(o.P3F, {
                          onClick: () => {
                              c.ZP.trackWithMetadata(f.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: d }), null == O || O();
                          },
                          className: g.close,
                          "aria-label": h.intl.string(h.t.WAI6xu),
                          children: (0, r.jsx)(o.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: g.closeIcon,
                          }),
                      }),
                (0, r.jsx)("div", {
                    className: g.imageContainer,
                    style: {
                        marginTop: "".concat(m, "px"),
                        marginLeft: S,
                        marginRight: S,
                    },
                    children: (0, r.jsx)("img", {
                        className: g.image,
                        src: a,
                        alt: "",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: g.message,
                    children: [
                        null != n
                            ? (0, r.jsx)(o.Heading, {
                                  variant: "heading-md/semibold",
                                  className: g.title,
                                  children: n,
                              })
                            : null,
                        (0, r.jsx)(o.Text, {
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
        return t ? (0, r.jsx)(p.Z, m({}, e)) : (0, r.jsx)(b, m({}, e));
    };
