n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(735438),
    o = n(421380),
    d = n(397927),
    c = n(58149),
    u = n(954571),
    A = n(652215),
    h = n(985018),
    _ = n(66762);
let m = (0, s.debounce)(c.Ay.trackWithMetadata, 500),
    p = function (e) {
        let {
            guild: t,
            title: n,
            message: a,
            image: s,
            type: p,
            imageStyles: g,
            imageMarginX: E,
            imageMarginTop: I,
            trackingSource: f,
            undismissable: C,
            onDismissed: T,
            onClick: N,
            cta: S,
            ctaColor: x,
            centerText: v,
            className: b,
        } = e;
        l.useEffect(() => {
            m(A.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: p, guild_id: t.id });
        }, [t.id, p]);
        let y = null;
        "function" == typeof S
            ? (y = S())
            : null != S &&
              (y = (0, i.jsx)(o.$n, {
                  "data-migration-pending": !0,
                  className: _.x6,
                  size: o.$n.Sizes.SMALL,
                  onClick: () => {
                      null != p &&
                          u.default.track(A.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: f,
                              guild_id: t.id,
                              notice_type: p,
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
        "function" == typeof a
            ? (L = a())
            : null != a &&
              (L = (0, i.jsx)(d.Text, {
                  className: r()({ [_.gX]: v }),
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: a,
              }));
        let R = null != E ? `${E}px` : "16px";
        return (0, i.jsxs)("div", {
            className: r()(_.kL, b),
            children: [
                !0 === C
                    ? null
                    : (0, i.jsx)(d.DUT, {
                          onClick: () => {
                              c.Ay.trackWithMetadata(A.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: p }), T?.();
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
                                ? (0, i.jsx)("img", { className: _.Sl, style: g, src: s, alt: "" })
                                : s,
                    }),
                (0, i.jsxs)("div", { className: _.iU, children: [O, L, y] }),
            ],
        });
    };
