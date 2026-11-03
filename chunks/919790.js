n.d(t, { A: () => m });
var l = n(477900),
    a = n(582128),
    s = n(256905),
    r = n(666476),
    i = n(989145),
    u = n(922329),
    d = n(809526),
    o = n(105292),
    c = n(986109);
function m(e) {
    let { projectId: t, attachments: n } = e,
        s = n.filter(f),
        [r, i] = a.useState(() => new Set()),
        u = a.useCallback((e) => {
            i((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: c.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(h, { name: e.name }, n)
                : f(e)
                  ? (0, l.jsx)(
                        p,
                        {
                            projectId: t,
                            viewableImages: s,
                            viewerIndex: s.indexOf(e),
                            unavailableIds: r,
                            markUnavailable: u,
                        },
                        n,
                    )
                  : (0, l.jsx)(x, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function f(e) {
    return null != e.id && r.XB.has(e.content_type);
}
function h(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? o.intl.formatToPlainString(d.default.nd81jR, { name: t }) : t;
    return (0, l.jsx)(u.p, { name: a, compact: !0 });
}
function x(e) {
    let { projectId: t, id: n, name: s } = e,
        [r, c] = a.useState(!1),
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
    return r
        ? (0, l.jsx)(h, { name: s, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: s,
              thumbSrc: null,
              ariaLabel: o.intl.formatToPlainString(d.default["g5+7Vs"], { name: s }),
              onClick: m,
          });
}
function p(e) {
    let { projectId: t, viewableImages: n, viewerIndex: r, unavailableIds: c, markUnavailable: m } = e,
        { id: f, name: x } = n[r],
        [p, k] = a.useState(null),
        g = c.has(f),
        [_, j] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, i.PK)(t, f).then(
                (t) => {
                    e || k(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, f, _]);
    let v = a.useCallback(() => {
        Promise.all(
            n.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, i.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[r] &&
                    (0, s.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, r).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
            },
            () => {},
        );
    }, [t, n, r, c]);
    return g
        ? (0, l.jsx)(h, { name: x, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: x,
              thumbSrc: p,
              ariaLabel: o.intl.formatToPlainString(d.default.GtNukg, { name: x }),
              onClick: v,
              onThumbError: () => {
                  (k(null),
                      (0, i.n6)(t, f).then(
                          (e) => {
                              e ? 0 === _ && j(1) : m(f);
                          },
                          () => {},
                      ));
              },
          });
}
