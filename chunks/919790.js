n.d(t, { A: () => f });
var l = n(477900),
    r = n(582128),
    a = n(256905),
    i = n(666476),
    s = n(989145),
    u = n(922329),
    o = n(809526),
    c = n(105292),
    d = n(986109);
function f(e) {
    let { projectId: t, attachments: n } = e,
        a = n.filter(h),
        [i, s] = r.useState(() => new Set()),
        u = r.useCallback((e) => {
            s((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: d.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(m, { name: e.name }, n)
                : h(e)
                  ? (0, l.jsx)(
                        g,
                        {
                            projectId: t,
                            viewableImages: a,
                            viewerIndex: a.indexOf(e),
                            unavailableIds: i,
                            markUnavailable: u,
                        },
                        n,
                    )
                  : (0, l.jsx)(p, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function h(e) {
    return null != e.id && i.XB.has(e.content_type);
}
function m(e) {
    let { name: t, unavailable: n = !1 } = e,
        r = n ? c.intl.formatToPlainString(o.default.nd81jR, { name: t }) : t;
    return (0, l.jsx)(u.p, { name: r, compact: !0 });
}
function p(e) {
    let { projectId: t, id: n, name: a } = e,
        [i, d] = r.useState(!1),
        f = r.useCallback(() => {
            (0, s.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void d(!0);
                    let l = document.createElement("a");
                    ((l.href = await (0, s.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click());
                })
                .catch(() => {});
        }, [t, n]);
    return i
        ? (0, l.jsx)(m, { name: a, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: a,
              thumbSrc: null,
              ariaLabel: c.intl.formatToPlainString(o.default["g5+7Vs"], { name: a }),
              onClick: f,
          });
}
function g(e) {
    let { projectId: t, viewableImages: n, viewerIndex: i, unavailableIds: d, markUnavailable: f } = e,
        { id: h, name: p } = n[i],
        [g, x] = r.useState(null),
        y = d.has(h),
        [k, b] = r.useState(0);
    r.useEffect(() => {
        let e = !1;
        return (
            (0, s.PK)(t, h).then(
                (t) => {
                    e || x(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, h, k]);
    let v = r.useCallback(() => {
        Promise.all(
            n.map(async (e) => (d.has(e.id) ? null : { type: "IMAGE", url: await (0, s.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[i] &&
                    (0, a.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, i).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
            },
            () => {},
        );
    }, [t, n, i, d]);
    return y
        ? (0, l.jsx)(m, { name: p, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: p,
              thumbSrc: g,
              ariaLabel: c.intl.formatToPlainString(o.default.GtNukg, { name: p }),
              onClick: v,
              onThumbError: () => {
                  (x(null),
                      (0, s.n6)(t, h).then(
                          (e) => {
                              e ? 0 === k && b(1) : f(h);
                          },
                          () => {},
                      ));
              },
          });
}
