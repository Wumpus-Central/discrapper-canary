var l = n(477900),
    a = n(582128),
    r = n(256905),
    s = n(666476),
    i = n(989145),
    u = n(922329),
    o = n(191850),
    d = n(792996),
    c = n(986109);
function m(e) {
    return null != e.id && s.XB.has(e.content_type);
}
function f(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? d.intl.formatToPlainString(o.default.nd81jR, { name: t }) : t;
    return (0, l.jsx)(u.p, { name: a, compact: !0 });
}
function h(e) {
    let { projectId: t, id: n, name: r } = e,
        [s, c] = a.useState(!1),
        m = a.useCallback(() => {
            (0, i.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void c(!0);
                    let l = document.createElement("a");
                    ((l.href = await (0, i.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click());
                })
                .catch(() => {});
        }, [t, n]);
    return s
        ? (0, l.jsx)(f, { name: r, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: r,
              thumbSrc: null,
              ariaLabel: d.intl.formatToPlainString(o.default["g5+7Vs"], { name: r }),
              onClick: m,
          });
}
function k(e) {
    let { projectId: t, viewableImages: n, viewerIndex: s, unavailableIds: c, markUnavailable: m } = e,
        { id: h, name: k } = n[s],
        [p, x] = a.useState(null),
        g = c.has(h),
        [j, _] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, i.PK)(t, h).then(
                (t) => {
                    e || x(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, h, j]);
    let b = a.useCallback(() => {
        Promise.all(
            n.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, i.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[s] &&
                    (0, r.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, s).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
            },
            () => {},
        );
    }, [t, n, s, c]);
    return g
        ? (0, l.jsx)(f, { name: k, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: k,
              thumbSrc: p,
              ariaLabel: d.intl.formatToPlainString(o.default.GtNukg, { name: k }),
              onClick: b,
              onThumbError: () => {
                  (x(null),
                      (0, i.n6)(t, h).then(
                          (e) => {
                              e ? 0 === j && _(1) : m(h);
                          },
                          () => {},
                      ));
              },
          });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { projectId: t, attachments: n } = e,
                r = n.filter(m),
                [s, i] = a.useState(() => new Set()),
                u = a.useCallback((e) => {
                    i((t) => (t.has(e) ? t : new Set(t).add(e)));
                }, []);
            return (0, l.jsx)("div", {
                className: c.KT,
                children: n.map((e, n) =>
                    null == e.id
                        ? (0, l.jsx)(f, { name: e.name }, n)
                        : m(e)
                          ? (0, l.jsx)(
                                k,
                                {
                                    projectId: t,
                                    viewableImages: r,
                                    viewerIndex: r.indexOf(e),
                                    unavailableIds: s,
                                    markUnavailable: u,
                                },
                                n,
                            )
                          : (0, l.jsx)(h, { projectId: t, id: e.id, name: e.name }, n),
                ),
            });
        },
    },
);
