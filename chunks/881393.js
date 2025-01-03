n(47120), n(653041);
var i = n(496929),
    r = n(16084),
    l = n(558381),
    a = n(115130),
    s = n(106976),
    o = n(695103),
    c = n(996106),
    d = n(334288),
    u = n(186901),
    h = n(981631);
async function m(e, t) {
    let n = t.filter((e) => e.type === h.epS.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async (t) => await (0, s.rx)(e, t.id))),
        r = [];
    return (
        i.forEach((e) => {
            if (null == e) return null;
            let n = e.subscription_listings;
            if (null == n) return null;
            let i = [];
            n.forEach((e) => {
                e.subscription_plans.forEach((n) => {
                    var r;
                    let l = null == n ? void 0 : n.price,
                        a = t.find((e) => e.id === n.sku_id);
                    if (null == a) return;
                    let s = {
                        id: n.sku_id,
                        name: a.name,
                        type: a.type,
                        price: {
                            amount: l,
                            currency: h.pKx.USD
                        },
                        application_id: e.application_id,
                        flags: e.sku_flags,
                        release_date: null !== (r = a.release_date) && void 0 !== r ? r : null
                    };
                    i.push(s);
                });
            }),
                i.filter((e) => (null == e ? void 0 : e.price) != null).forEach((e) => r.push(e));
        }),
        r
    );
}
async function p(e) {
    let { socket: t } = e;
    (0, d.f)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.Z({ errorCode: h.lTL.INVALID_COMMAND }, 'No application.');
    if (o.Z.inTestModeForApplication(n) || a.Z.inDevModeForApplication(n)) {
        let e = await r.uE(n, !1),
            t = await m(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let i = await l.oJ(n),
        s = i
            .filter((e) => e.sku.type !== h.epS.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price);
    return [
        ...s,
        ...(await m(
            n,
            i.map((e) => e.sku)
        ))
    ];
}
function g(e) {
    let { socket: t } = e;
    (0, d.f)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.Z({ errorCode: h.lTL.INVALID_COMMAND }, 'No application.');
    return i.yD(n);
}
t.Z = {
    [h.Etm.GET_SKUS]: {
        [u.Gp.ANY]: [u.wE, u.lH],
        handler: p
    },
    [h.Etm.GET_ENTITLEMENTS]: {
        [u.Gp.ANY]: [u.wE, u.lH],
        handler: g
    },
    [h.Etm.GET_SKUS_EMBEDDED]: {
        [u.Gp.ANY]: [u.wE, u.lH],
        handler: async (e) => ({ skus: await p(e) })
    },
    [h.Etm.GET_ENTITLEMENTS_EMBEDDED]: {
        [u.Gp.ANY]: [u.wE, u.lH],
        handler: async (e) => ({ entitlements: await g(e) })
    }
};
