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
    let { label: t, labelHook: n, count: a, dismissNotice: f, className: _, noticeType: p } = e,
        h = null != f;
    i.useEffect(() => {
        (0, l.l)(p, c.up.VIEWED);
    }, [p]);
    let m = i.useCallback(() => {
            null != f && (f(), (0, l.l)(p, c.up.DISMISS));
        }, [p, f]),
        g = i.useCallback(() => {
            n(), (0, l.l)(p, c.up.LEARN_MORE);
        }, [p, n]);
    return (0, r.jsxs)("div", {
        className: o()(d.safetySettingsNotice, _),
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
            h &&
                (0, r.jsx)(s.P3F, {
                    className: d.closeButton,
                    onClick: m,
                    children: (0, r.jsx)(s.Dio, {}),
                }),
        ],
    });
}
