n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(735438),
    o = n(421380),
    d = n(397927),
    c = n(58149),
    u = n(954571),
    A = n(652215),
    h = n(985018),
    _ = n(861968);
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
            imageMarginTop: f,
            trackingSource: I,
            undismissable: C,
            onDismissed: N,
            onClick: T,
            cta: S,
            ctaColor: x,
            centerText: v,
            className: b,
        } = e;
        r.useEffect(() => {
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
                              source: I,
                              guild_id: t.id,
                              notice_type: p,
                          }),
                          T?.();
                  },
                  fullWidth: !0,
                  color: x,
                  children: S,
              }));
        let L = null;
        "function" == typeof n
            ? (L = n())
            : null != n &&
              (L = (0, i.jsx)(d.Text, {
                  variant: "text-md/medium",
                  color: "text-strong",
                  className: l()(_.DD, { [_.vG]: null == s }, { [_.gX]: v }),
                  children: n,
              }));
        let O = null;
        "function" == typeof a
            ? (O = a())
            : null != a &&
              (O = (0, i.jsx)(d.Text, {
                  className: l()({ [_.gX]: v }),
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: a,
              }));
        let R = null != E ? `${E}px` : "16px";
        return (0, i.jsxs)("div", {
            className: l()(_.kL, b),
            children: [
                !0 === C
                    ? null
                    : (0, i.jsx)(d.DUT, {
                          onClick: () => {
                              c.Ay.trackWithMetadata(A.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: p }), N?.();
                          },
                          className: _.VN,
                          "aria-label": h.intl.string(h.t.WAI6xu),
                          children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: _.ut }),
                      }),
                null != s &&
                    (0, i.jsx)("div", {
                        className: _.ZS,
                        style: { marginTop: `${f}px`, marginLeft: R, marginRight: R },
                        children: (0, i.jsx)("img", { className: _.Sl, style: g, src: s, alt: "" }),
                    }),
                (0, i.jsxs)("div", { className: _.iU, children: [L, O, y] }),
            ],
        });
    };
