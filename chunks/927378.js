n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(157559),
    c = n(287809),
    u = n(975571),
    _ = n(115063),
    m = n(104954),
    g = n(975648),
    A = n(106148),
    x = n(652215),
    h = n(985018),
    p = n(67658);
function T() {
    let e = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
        { currentHarvestType: t, awaitingInitialRequest: l } = (0, r.cf)([g.A], () => ({
            currentHarvestType: g.A.harvestType,
            awaitingInitialRequest: g.A.requestingHarvest,
        })),
        [T, E] = s.useState(!1);
    if (null == e) return null;
    let S = (0, _.Oj)(t, e) || l,
        C = null != t && a()().diff(a()(t.created_at), "days") < x.n83,
        f = S && C,
        b = e.isStaff(),
        N = !e.verified;
    return (0, i.jsxs)(A.h, {
        children: [
            (0, i.jsx)(A._, {
                header: h.intl.string(h.t.XAHCgJ),
                description: h.intl.format(h.t.P3kNfr, { helpdeskArticle: u.A.getArticleURL(x.MVz.GDPR_REQUEST_DATA) }),
            }),
            f
                ? (0, i.jsx)(o.ZpM, {
                      className: p.N,
                      children: (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          children: h.intl.format(h.t.RNDlV9, {
                              date: a()(t.created_at).add(x.n83, "days").format("MMMM Do YYYY"),
                          }),
                      }),
                  })
                : b
                  ? (0, i.jsx)(o.ZpM, {
                        className: p.N,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: h.intl.string(h.t.ZPQLH2),
                        }),
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            N
                                ? (0, i.jsx)(o.ZpM, {
                                      className: p.N,
                                      children: (0, i.jsx)(o.Text, {
                                          variant: "text-md/normal",
                                          children: h.intl.string(h.t.c1f88z),
                                      }),
                                  })
                                : null,
                            (0, i.jsx)("div", {
                                className: p.x,
                                children: (0, i.jsx)(o.Button, {
                                    variant: "primary",
                                    text: h.intl.string(h.t.dmBSKo),
                                    disabled: S,
                                    onClick: () => {
                                        ((e) => {
                                            let { onConfirm: t } = e;
                                            (0, o.mMO)(async () => {
                                                let { default: e } = await n.e("81153").then(n.bind(n, 890904));
                                                return (n) => (0, i.jsx)(e, { modalProps: n, onConfirm: t });
                                            });
                                        })({
                                            onConfirm: (e) => {
                                                E(!0),
                                                    (0, m.$)(e)
                                                        .then(
                                                            (e) => {
                                                                null != e && null != e.body
                                                                    ? d.A.show({
                                                                          title: h.intl.string(h.t.i2iul5),
                                                                          body: h.intl.string(h.t["6Nmv4i"]),
                                                                      })
                                                                    : d.A.show({
                                                                          title: h.intl.string(h.t.OjbtDm),
                                                                          body: h.intl.string(h.t["0F5Jyt"]),
                                                                      });
                                                            },
                                                            (e) => {
                                                                let t =
                                                                    e?.message ||
                                                                    e?.body?.message ||
                                                                    h.intl.string(h.t["0F5Jyt"]);
                                                                d.A.show({ title: h.intl.string(h.t.OjbtDm), body: t });
                                                            },
                                                        )
                                                        .finally(() => E(!1));
                                            },
                                        });
                                    },
                                    loading: T || l,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
