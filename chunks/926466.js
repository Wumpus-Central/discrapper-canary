n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(862482),
    o = n(939249),
    d = n(789645),
    u = n(534514),
    c = n(834730),
    A = n(58149),
    h = n(954571),
    _ = n(652215),
    E = n(985018),
    p = n(284245);
let m = l().debounce(A.Ay.trackWithMetadata, 500),
    g = (e) => {
        let {
            guild: t,
            title: n,
            message: a,
            image: l,
            type: g,
            imageMarginX: I,
            imageMarginTop: C,
            trackingSource: f,
            undismissable: T,
            onDismissed: S,
            onClick: N,
            cta: O,
            ctaColor: L,
        } = e;
        r.useEffect(() => {
            m(_.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: g, guild_id: t.id });
        }, [t.id, g]);
        let y = null;
        "function" == typeof O
            ? (y = O())
            : null != O &&
              (y = (0, i.jsx)(s.$n, {
                  "data-migration-pending": !0,
                  className: p.HM,
                  size: s.$n.Sizes.SMALL,
                  onClick: () => {
                      null != g &&
                          h.default.track(_.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: f,
                              guild_id: t.id,
                              notice_type: g,
                          }),
                          N?.();
                  },
                  fullWidth: !0,
                  color: L,
                  children: O,
              }));
        let v = null != I ? `${I}px` : "16px";
        return (0, i.jsxs)("div", {
            className: p.kX,
            children: [
                !0 === T
                    ? null
                    : (0, i.jsx)(o.D, {
                          onClick: () => {
                              A.Ay.trackWithMetadata(_.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: g }), S?.();
                          },
                          className: p.VN,
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          children: (0, i.jsx)(d.P, { size: "md", color: "currentColor", className: p.ut }),
                      }),
                null != l &&
                    (0, i.jsx)("div", {
                        className: p.ZS,
                        style: { marginTop: `${C}px`, marginLeft: v, marginRight: v },
                        children: "string" == typeof l ? (0, i.jsx)("img", { className: p.Sl, src: l, alt: "" }) : l,
                    }),
                (0, i.jsxs)("div", {
                    className: p.iU,
                    children: [
                        null != n
                            ? (0, i.jsx)(u.D, { variant: "heading-md/semibold", className: p.DD, children: n })
                            : null,
                        (0, i.jsx)(c.E, { variant: "text-sm/normal", children: a }),
                        y,
                    ],
                }),
            ],
        });
    };
