n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(735438),
    o = n(421380),
    d = n(397927),
    c = n(58149),
    u = n(954571),
    A = n(652215),
    h = n(985018),
    _ = n(66762);
let m = (0, s.debounce)(c.Ay.trackWithMetadata, 500),
    g = function (e) {
        let {
            guild: t,
            title: n,
            message: l,
            image: s,
            type: g,
            imageStyles: p,
            imageMarginX: E,
            imageMarginTop: I,
            trackingSource: f,
            undismissable: C,
            onDismissed: T,
            onClick: N,
            cta: S,
            ctaColor: x,
            centerText: v,
            className: y,
        } = e;
        a.useEffect(() => {
            m(A.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: g, guild_id: t.id });
        }, [t.id, g]);
        let b = null;
        "function" == typeof S
            ? (b = S())
            : null != S &&
              (b = (0, i.jsx)(o.$n, {
                  "data-migration-pending": !0,
                  className: _.x6,
                  size: o.$n.Sizes.SMALL,
                  onClick: () => {
                      null != g &&
                          u.default.track(A.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: f,
                              guild_id: t.id,
                              notice_type: g,
                          }),
                          N?.();
                  },
                  fullWidth: !0,
                  color: x,
                  children: S,
              }));
        let O = null;
        "function" == typeof n
            ? (O = n())
            : null != n &&
              (O = (0, i.jsx)(d.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  className: r()(_.DD, { [_.vG]: null == s }, { [_.gX]: v }),
                  children: n,
              }));
        let L = null;
        "function" == typeof l
            ? (L = l())
            : null != l &&
              (L = (0, i.jsx)(d.Text, {
                  className: r()({ [_.gX]: v }),
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: l,
              }));
        let R = null != E ? `${E}px` : "16px";
        return (0, i.jsxs)("div", {
            className: r()(_.kL, y),
            children: [
                !0 === C
                    ? null
                    : (0, i.jsx)(d.DUT, {
                          onClick: () => {
                              c.Ay.trackWithMetadata(A.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: g }), T?.();
                          },
                          className: _.VN,
                          "aria-label": h.intl.string(h.t.WAI6xu),
                          children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: _.ut }),
                      }),
                null != s &&
                    (0, i.jsx)("div", {
                        className: _.ZS,
                        style: { marginTop: `${I}px`, marginLeft: R, marginRight: R },
                        children:
                            "string" == typeof s
                                ? (0, i.jsx)("img", { className: _.Sl, style: p, src: s, alt: "" })
                                : s,
                    }),
                (0, i.jsxs)("div", { className: _.iU, children: [O, L, b] }),
            ],
        });
    };
