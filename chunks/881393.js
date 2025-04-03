n.d(t, { Z: () => m }), n(47120), n(653041);
var r = n(496929),
    i = n(16084),
    l = n(558381),
    a = n(115130),
    o = n(106976),
    s = n(695103),
    c = n(996106),
    u = n(334288),
    d = n(186901),
    p = n(981631);
async function h(e, t) {
    let n = t.filter((e) => e.type === p.epS.SUBSCRIPTION_GROUP),
        r = await Promise.all(n.map(async (t) => await (0, o.rx)(e, t.id))),
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
                    let o = {
                        id: n.sku_id,
                        name: a.name,
                        type: a.type,
                        price: {
                            amount: l,
                            currency: p.pKx.USD
                        },
                        application_id: e.application_id,
                        flags: e.sku_flags,
                        release_date: null != (i = a.release_date) ? i : null
                    };
                    r.push(o);
                });
            }),
                r.filter((e) => (null == e ? void 0 : e.price) != null).forEach((e) => i.push(e));
        }),
        i
    );
}
async function f(e) {
    let { socket: t } = e;
    (0, u.f)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
    if (s.Z.inTestModeForApplication(n) || a.Z.inDevModeForApplication(n)) {
        let e = await i.uE(n, !1),
            t = await h(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let r = await l.oJ(n);
    return [
        ...r
            .filter((e) => e.sku.type !== p.epS.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price),
        ...(await h(
            n,
            r.map((e) => e.sku)
        ))
    ];
}
function g(e) {
    let { socket: t } = e;
    (0, u.f)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'No application.');
    return r.yD(n);
}
let m = {
    [p.Etm.GET_SKUS]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: f
    },
    [p.Etm.GET_ENTITLEMENTS]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: g
    },
    [p.Etm.GET_SKUS_EMBEDDED]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: async (e) => ({ skus: await f(e) })
    },
    [p.Etm.GET_ENTITLEMENTS_EMBEDDED]: {
        [d.Gp.ANY]: [d.wE, d.lH],
        handler: async (e) => ({ entitlements: await g(e) })
    }
};
