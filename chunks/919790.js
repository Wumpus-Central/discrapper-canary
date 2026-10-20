n.d(t, { A: () => m });
var l = n(477900),
    a = n(582128),
    r = n(256905),
    i = n(666476),
    s = n(989145),
    u = n(922329),
    o = n(261425),
    d = n(105292),
    c = n(986109);
function m(e) {
    let { projectId: t, attachments: n } = e,
        r = n.filter(f),
        [i, s] = a.useState(() => new Set()),
        u = a.useCallback((e) => {
            s((t) => (t.has(e) ? t : new Set(t).add(e)));
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
                            viewableImages: r,
                            viewerIndex: r.indexOf(e),
                            unavailableIds: i,
                            markUnavailable: u,
                        },
                        n,
                    )
                  : (0, l.jsx)(g, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function f(e) {
    return null != e.id && i.XB.has(e.content_type);
}
function h(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? d.intl.formatToPlainString(o.default.nd81jR, { name: t }) : t;
    return (0, l.jsx)(u.p, { name: a, compact: !0 });
}
function g(e) {
    let { projectId: t, id: n, name: r } = e,
        [i, c] = a.useState(!1),
        m = a.useCallback(() => {
            (0, s.n6)(t, n)
                .then(async (e) => {
                    if (!e) return void c(!0);
                    let l = document.createElement("a");
                    ((l.href = await (0, s.PK)(t, n, { download: !0 })),
                        (l.target = "_blank"),
                        (l.rel = "noopener noreferrer"),
                        l.click());
                })
                .catch(() => {});
        }, [t, n]);
    return i
        ? (0, l.jsx)(h, { name: r, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: r,
              thumbSrc: null,
              ariaLabel: d.intl.formatToPlainString(o.default["g5+7Vs"], { name: r }),
              onClick: m,
          });
}
function p(e) {
    let { projectId: t, viewableImages: n, viewerIndex: i, unavailableIds: c, markUnavailable: m } = e,
        { id: f, name: g } = n[i],
        [p, x] = a.useState(null),
        j = c.has(f),
        [k, v] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, s.PK)(t, f).then(
                (t) => {
                    e || x(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, f, k]);
    let b = a.useCallback(() => {
        Promise.all(
            n.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, s.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[i] &&
                    (0, r.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, i).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
            },
            () => {},
        );
    }, [t, n, i, c]);
    return j
        ? (0, l.jsx)(h, { name: g, unavailable: !0 })
        : (0, l.jsx)(u.n, {
              name: g,
              thumbSrc: p,
              ariaLabel: d.intl.formatToPlainString(o.default.GtNukg, { name: g }),
              onClick: b,
              onThumbError: () => {
                  (x(null),
                      (0, s.n6)(t, f).then(
                          (e) => {
                              e ? 0 === k && v(1) : m(f);
                          },
                          () => {},
                      ));
              },
          });
}
