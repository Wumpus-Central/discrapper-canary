n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(421380),
    o = n(397927),
    d = n(58149),
    c = n(954571),
    u = n(652215),
    A = n(985018),
    h = n(66762);
let _ = l().debounce(d.Ay.trackWithMetadata, 500),
    m = (e) => {
        let {
            guild: t,
            title: n,
            message: a,
            image: l,
            type: m,
            imageMarginX: p,
            imageMarginTop: g,
            trackingSource: E,
            undismissable: I,
            onDismissed: f,
            onClick: C,
            cta: T,
            ctaColor: N,
        } = e;
        r.useEffect(() => {
            _(u.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: m, guild_id: t.id });
        }, [t.id, m]);
        let S = null;
        "function" == typeof T
            ? (S = T())
            : null != T &&
              (S = (0, i.jsx)(s.$n, {
                  "data-migration-pending": !0,
                  className: h.HM,
                  size: s.$n.Sizes.SMALL,
                  onClick: () => {
                      null != m &&
                          c.default.track(u.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: E,
                              guild_id: t.id,
                              notice_type: m,
                          }),
                          C?.();
                  },
                  fullWidth: !0,
                  color: N,
                  children: T,
              }));
        let x = null != p ? `${p}px` : "16px";
        return (0, i.jsxs)("div", {
            className: h.kX,
            children: [
                !0 === I
                    ? null
                    : (0, i.jsx)(o.DUT, {
                          onClick: () => {
                              d.Ay.trackWithMetadata(u.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: m }), f?.();
                          },
                          className: h.VN,
                          "aria-label": A.intl.string(A.t.WAI6xu),
                          children: (0, i.jsx)(o.PGe, { size: "md", color: "currentColor", className: h.ut }),
                      }),
                null != l &&
                    (0, i.jsx)("div", {
                        className: h.ZS,
                        style: { marginTop: `${g}px`, marginLeft: x, marginRight: x },
                        children: "string" == typeof l ? (0, i.jsx)("img", { className: h.Sl, src: l, alt: "" }) : l,
                    }),
                (0, i.jsxs)("div", {
                    className: h.iU,
                    children: [
                        null != n
                            ? (0, i.jsx)(o.Heading, { variant: "heading-md/semibold", className: h.DD, children: n })
                            : null,
                        (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: a }),
                        S,
                    ],
                }),
            ],
        });
    };
