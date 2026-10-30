n.d(t, { A: () => f });
var l = n(477900),
    a = n(582128),
    r = n(256905),
    i = n(666476),
    s = n(989145),
    o = n(922329),
    u = n(809526),
    d = n(105292),
    c = n(986109);
function f(e) {
    let { projectId: t, attachments: n } = e,
        r = n.filter(m),
        [i, s] = a.useState(() => new Set()),
        o = a.useCallback((e) => {
            s((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)("div", {
        className: c.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, l.jsx)(p, { name: e.name }, n)
                : m(e)
                  ? (0, l.jsx)(
                        g,
                        {
                            projectId: t,
                            viewableImages: r,
                            viewerIndex: r.indexOf(e),
                            unavailableIds: i,
                            markUnavailable: o,
                        },
                        n,
                    )
                  : (0, l.jsx)(x, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function m(e) {
    return null != e.id && i.XB.has(e.content_type);
}
function p(e) {
    let { name: t, unavailable: n = !1 } = e,
        a = n ? d.intl.formatToPlainString(u.default.nd81jR, { name: t }) : t;
    return (0, l.jsx)(o.p, { name: a, compact: !0 });
}
function x(e) {
    let { projectId: t, id: n, name: r } = e,
        [i, c] = a.useState(!1),
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
    return i
        ? (0, l.jsx)(p, { name: r, unavailable: !0 })
        : (0, l.jsx)(o.n, {
              name: r,
              thumbSrc: null,
              ariaLabel: d.intl.formatToPlainString(u.default["g5+7Vs"], { name: r }),
              onClick: f,
          });
}
function g(e) {
    let { projectId: t, viewableImages: n, viewerIndex: i, unavailableIds: c, markUnavailable: f } = e,
        { id: m, name: x } = n[i],
        [g, h] = a.useState(null),
        j = c.has(m),
        [v, b] = a.useState(0);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, s.PK)(t, m).then(
                (t) => {
                    e || h(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, m, v]);
    let k = a.useCallback(() => {
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
        ? (0, l.jsx)(p, { name: x, unavailable: !0 })
        : (0, l.jsx)(o.n, {
              name: x,
              thumbSrc: g,
              ariaLabel: d.intl.formatToPlainString(u.default.GtNukg, { name: x }),
              onClick: k,
              onThumbError: () => {
                  (h(null),
                      (0, s.n6)(t, m).then(
                          (e) => {
                              e ? 0 === v && b(1) : f(m);
                          },
                          () => {},
                      ));
              },
          });
}
