n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(311907),
    o = n(192308),
    d = n(359778),
    u = n(834730),
    c = n(821609),
    g = n(157559),
    m = n(287809),
    _ = n(975571),
    A = n(115063),
    h = n(104954),
    p = n(975648),
    x = n(106148),
    E = n(652215),
    T = n(985018),
    S = n(837245);
function f() {
    let e = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: l } = (0, r.cf)([p.A], () => ({
            currentHarvestType: p.A.harvestType,
            awaitingInitialRequest: p.A.requestingHarvest,
        })),
        [f, b] = s.useState(!1);
    if (null == e) return null;
    let C = (0, A.Oj)(t, e) || l,
        v = null != t && a()().diff(a()(t.created_at), "days") < E.n83,
        N = C && v,
        I = e.isStaff(),
        y = !e.verified;
    return (0, i.jsxs)(x.h, {
        children: [
            (0, i.jsx)(x._, {
                header: T.intl.string(T.t.XAHCgJ),
                description: T.intl.format(T.t.P3kNfr, { helpdeskArticle: _.A.getArticleURL(E.MVz.GDPR_REQUEST_DATA) }),
            }),
            N
                ? (0, i.jsx)(d.Z, {
                      className: S.N,
                      children: (0, i.jsx)(u.E, {
                          variant: "text-md/normal",
                          children: T.intl.format(T.t.RNDlV9, {
                              date: a()(t.created_at).add(E.n83, "days").format("MMMM Do YYYY"),
                          }),
                      }),
                  })
                : I
                  ? (0, i.jsx)(d.Z, {
                        className: S.N,
                        children: (0, i.jsx)(u.E, { variant: "text-md/normal", children: T.intl.string(T.t.ZPQLH2) }),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            y
                                ? (0, i.jsx)(d.Z, {
                                      className: S.N,
                                      children: (0, i.jsx)(u.E, {
                                          variant: "text-md/normal",
                                          children: T.intl.string(T.t.c1f88z),
                                      }),
                                  })
                                : null,
                            (0, i.jsx)("div", {
                                className: S.x,
                                children: (0, i.jsx)(c.$, {
                                    variant: "primary",
                                    text: T.intl.string(T.t.dmBSKo),
                                    disabled: C,
                                    onClick: () => {
                                        ((e) => {
                                            let { onConfirm: t } = e;
                                            (0, o.openModalLazy)(async () => {
                                                let { default: e } = await n.e("81153").then(n.bind(n, 890904));
                                                return (n) => (0, i.jsx)(e, { modalProps: n, onConfirm: t });
                                            });
                                        })({
                                            onConfirm: (e) => {
                                                b(!0),
                                                    (0, h.$)(e)
                                                        .then(
                                                            (e) => {
                                                                null != e && null != e.body
                                                                    ? g.A.show({
                                                                          title: T.intl.string(T.t.i2iul5),
                                                                          body: T.intl.string(T.t["6Nmv4i"]),
                                                                      })
                                                                    : g.A.show({
                                                                          title: T.intl.string(T.t.OjbtDm),
                                                                          body: T.intl.string(T.t["0F5Jyt"]),
                                                                      });
                                                            },
                                                            (e) => {
                                                                let t =
                                                                    e?.message ||
                                                                    e?.body?.message ||
                                                                    T.intl.string(T.t["0F5Jyt"]);
                                                                g.A.show({ title: T.intl.string(T.t.OjbtDm), body: t });
                                                            },
                                                        )
                                                        .finally(() => b(!1));
                                            },
                                        });
                                    },
                                    loading: f || l,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
