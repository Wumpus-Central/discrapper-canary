n.d(t, { Z: () => g }), n(388685), n(539854);
var r = n(496929),
    i = n(16084),
    l = n(558381),
    a = n(115130),
    s = n(106976),
    o = n(695103),
    c = n(996106),
    u = n(334288),
    d = n(186901),
    p = n(981631);
async function f(e, t) {
    let n = t.filter((e) => e.type === p.epS.SUBSCRIPTION_GROUP),
        r = await Promise.all(n.map(async (t) => await (0, s.rx)(e, t.id))),
        i = [];
    return (
        r.forEach((e) => {
            if (null == e) return null;
            let n = e.subscription_listings;
            if (null == n) return null;
            let r = [];
            n.forEach((e) => {
                e.subscription_plans.forEach((n) => {
                    var i;
                    let l = null == n ? void 0 : n.price,
                        a = t.find((e) => e.id === n.sku_id);
                    if (null == a) return;
                    let s = {
                        id: n.sku_id,
                        name: a.name,
                        type: a.type,
                        price: {
                            amount: l,
                            currency: p.pKx.USD,
                        },
                        application_id: e.application_id,
                        flags: e.sku_flags,
                        release_date: null != (i = a.release_date) ? i : null,
                    };
                    r.push(s);
                });
            }),
                r.filter((e) => (null == e ? void 0 : e.price) != null).forEach((e) => i.push(e));
        }),
        i
    );
}
async function m(e) {
    let { socket: t } = e;
    (0, u.f)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.Z({ errorCode: p.lTL.INVALID_COMMAND }, "No application.");
    if (o.Z.inTestModeForApplication(n) || a.Z.inDevModeForApplication(n)) {
        let e = await i.uE(n, !1),
            t = await f(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let r = await l.oJ(n);
    return [
        ...r
            .filter((e) => e.sku.type !== p.epS.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price),
        ...(await f(
            n,
            r.map((e) => e.sku),
        )),
    ];
}
function h(e) {
    let { socket: t } = e;
    (0, u.f)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.Z({ errorCode: p.lTL.INVALID_COMMAND }, "No application.");
    return r.yD(n);
}
let g = {
    [p.Etm.GET_SKUS]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: m,
    },
    [p.Etm.GET_ENTITLEMENTS]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: h,
    },
    [p.Etm.GET_SKUS_EMBEDDED]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: async (e) => ({ skus: await m(e) }),
    },
    [p.Etm.GET_ENTITLEMENTS_EMBEDDED]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: async (e) => ({ entitlements: await h(e) }),
    },
};
