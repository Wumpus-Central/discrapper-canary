n.d(t, {
    e: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(558001),
    c = n(835002),
    u = n(985018),
    d = n(486529);

function f(e) {
    let { label: t, labelHook: n, count: a, dismissNotice: f, className: p, noticeType: _ } = e,
        h = null != f;
    i.useEffect(() => {
        (0, l.N)(_, c.YX.VIEWED);
    }, [_]);
    let m = i.useCallback(() => {
            null != f && (f(), (0, l.N)(_, c.YX.DISMISS));
        }, [_, f]),
        g = i.useCallback(() => {
            n(), (0, l.N)(_, c.YX.LEARN_MORE);
        }, [_, n]);
    return (0, r.jsxs)("div", {
        className: s()(d.I, p),
        children: [
            (0, r.jsx)(o.mir, {
                size: "md",
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-active",
                children:
                    null != a
                        ? u.intl.format(t, {
                              hook: (e, t) =>
                                  (0, r.jsx)(
                                      o.MzZ,
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
                                      o.MzZ,
                                      {
                                          onClick: g,
                                          children: e,
                                      },
                                      t,
                                  ),
                          }),
            }),
            h &&
                (0, r.jsx)(o.DUT, {
                    className: d.b,
                    onClick: m,
                    children: (0, r.jsx)(o.PGe, {}),
                }),
        ],
    });
}
