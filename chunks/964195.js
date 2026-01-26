n.d(t, {
    A: () => b,
    F: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(975460),
    u = n(850046),
    d = n(619517),
    f = n(633075),
    p = n(622543),
    _ = n(576622),
    h = n(985018),
    m = n(480463);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
    let n = (0, u.A)(
            e,
            i.useMemo(() => (null != t ? [t.id] : []), [t]),
        ),
        r = (0, o.bG)([p.A], () => p.A.getUserProfile(e));
    i.useEffect(() => {
        let t = new AbortController();
        return (
            (0, _.A)(e, void 0, {
                abortSignal: t.signal,
            }),
            () => t.abort()
        );
    }, [e]);
    let a = i.useMemo(
        () =>
            null != r &&
            null != r.widgets &&
            r.widgets.some((e) => e instanceof f.R && e.applicationId === (null == t ? void 0 : t.id)),
        [r, t],
    );
    return null == t || null == n[t.id] || null == r
        ? null
        : {
              previewData: n[t.id],
              hasWidget: a,
          };
}

function b(e) {
    let t = (0, c.g)(e.activityApplication),
        n = y(e.userId, t);
    return null == n ? null : (0, r.jsx)(O, E({}, e, n));
}

function O(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: i,
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(m.kL, e.className),
        children: [
            (0, r.jsx)("div", {
                className: m.Qs,
                children: (0, r.jsxs)(l.Text, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: m.Kk,
                                        children: (0, r.jsx)(d.Ay, {
                                            src: t.proxyUrl,
                                            width: t.width,
                                            height: t.height,
                                            responsive: !0,
                                        }),
                                    }),
                                    " ",
                                ],
                            }),
                        n,
                    ],
                }),
            }),
            i &&
                (0, r.jsx)(l.DUT, {
                    "aria-label": h.intl.string(h.t["OBCR+p"]),
                    className: m.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, r.jsx)(l.KS6, {
                        size: "xxs",
                    }),
                }),
        ],
    });
}
