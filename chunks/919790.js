n.d(t, { A: () => f });
var l = n(477900),
    a = n(582128),
    i = n(256905),
    r = n(666476),
    s = n(989145),
    o = n(922329),
    d = n(248675),
    u = n(660183),
    c = n(986109);
function f(e) {
    let { projectId: t, attachments: n } = e,
        i = n.filter(m),
        [r, s] = a.useState(() => new Set()),
        o = a.useCallback((e) => {
            s((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: c.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(h, { name: e.name }, n)
                : m(e)
                  ? (0, l.jsx)(
                        p,
                        {
                            projectId: t,
                            viewableImages: i,
                            viewerIndex: i.indexOf(e),
                            unavailableIds: r,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, l.jsx)(g, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function m(e) {
    return null != e.id && r.XB.has(e.content_type);
}
function h(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? u.intl.formatToPlainString(d.default.nd81jR, { name: t }) : t;
    return (0, l.jsx)(o.p, { name: a, compact: !0 });
}
function g(e) {
    let { projectId: t, id: n, name: i } = e,
        [r, c] = a.useState(!1),
        f = a.useCallback(() => {
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
    return r
        ? (0, l.jsx)(h, { name: i, unavailable: !0 })
        : (0, l.jsx)(o.n, {
              name: i,
              thumbSrc: null,
              ariaLabel: u.intl.formatToPlainString(d.default["g5+7Vs"], { name: i }),
              onClick: f,
          });
}
function p(e) {
    let { projectId: t, viewableImages: n, viewerIndex: r, unavailableIds: c, markUnavailable: f } = e,
        { id: m, name: g } = n[r],
        [p, x] = a.useState(null),
        k = c.has(m),
        [b, v] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, s.PK)(t, m).then(
                (t) => {
                    e || x(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, m, b]);
    let j = a.useCallback(() => {
        Promise.all(
            n.map(async (e) => (c.has(e.id) ? null : { type: "IMAGE", url: await (0, s.PK)(t, e.id), alt: e.name })),
        ).then(
            (e) => {
                null != e[r] &&
                    (0, i.R)({
                        items: e.filter((e) => null != e),
                        startingIndex: e.slice(0, r).filter((e) => null != e).length,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
            },
            () => {},
        );
    }, [t, n, r, c]);
    return k
        ? (0, l.jsx)(h, { name: g, unavailable: !0 })
        : (0, l.jsx)(o.n, {
              name: g,
              thumbSrc: p,
              ariaLabel: u.intl.formatToPlainString(d.default.GtNukg, { name: g }),
              onClick: j,
              onThumbError: () => {
                  (x(null),
                      (0, s.n6)(t, m).then(
                          (e) => {
                              e ? 0 === b && v(1) : f(m);
                          },
                          () => {},
                      ));
              },
          });
}
