n.d(t, { f: () => f });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(711703),
    c = n(484710),
    u = n(388032),
    d = n(449081);
function f(e) {
    let { label: t, labelHook: n, count: a, dismissNotice: f, className: p, noticeType: _ } = e,
        m = null != f;
    i.useEffect(() => {
        (0, l.l)(_, c.up.VIEWED);
    }, [_]);
    let h = i.useCallback(() => {
            null != f && (f(), (0, l.l)(_, c.up.DISMISS));
        }, [_, f]),
        g = i.useCallback(() => {
            n(), (0, l.l)(_, c.up.LEARN_MORE);
        }, [_, n]);
    return (0, r.jsxs)("div", {
        className: o()(d.safetySettingsNotice, p),
        children: [
            (0, r.jsx)(s.d3s, { size: "md" }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "interactive-active",
                children:
                    null != a
                        ? u.intl.format(t, {
                              hook: (e, t) =>
                                  (0, r.jsx)(
                                      s.Anchor,
                                      {
                                          onClick: g,
                                          children: e,
                                      },
                                      t,
                                  ),
                              count: a,
                          })
                        : u.intl.format(t, {
                              hook: (e, t) =>
                                  (0, r.jsx)(
                                      s.Anchor,
                                      {
                                          onClick: g,
                                          children: e,
                                      },
                                      t,
                                  ),
                          }),
            }),
            m &&
                (0, r.jsx)(s.P3F, {
                    className: d.closeButton,
                    onClick: h,
                    children: (0, r.jsx)(s.Dio, {}),
                }),
        ],
    });
}
