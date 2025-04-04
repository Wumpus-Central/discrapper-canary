n.d(t, {
    Gq: () => _,
    SN: () => E,
    Zu: () => h,
    gA: () => p,
    qc: () => m,
    x8: () => b,
    zI: () => g
}),
    n(411104);
var r = n(544891),
    i = n(343817),
    o = n(570140),
    a = n(959546),
    s = n(992970),
    l = n(317951),
    c = n(287941),
    u = n(235894),
    d = n(981631);
let f = {
        [l.D1]: d.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
        [l.FX]: d.ANM.FETCH_HD_STREAMING_ENTITLEMENT
    },
    _ = async (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await r.tn.get({
                url: d.ANM.CONSUMABLE_FETCH_PRICE(e),
                rejectWithError: !1
            });
            if (null == t.body.price)
                throw (
                    (o.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                o.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_SUCCEEDED',
                    skuId: e,
                    price: n
                }),
                {
                    amount: n.amount,
                    currency: n.currency,
                    exponent: n.currency_exponent
                }
            );
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new i.Hx(t))
            );
        }
    },
    p = async (e) => {
        if (
            (o.Z.dispatch({
                type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
                skuId: e
            }),
            null == f[e])
        )
            throw (
                (o.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                Error('Invalid consumable skuId: '.concat(e)))
            );
        try {
            let t = await r.tn.get({
                    url: f[e],
                    rejectWithError: !1
                }),
                n = null != t.body.entitlement ? a.Z.createFromServer(t.body.entitlement) : null,
                i = t.body.num_potions;
            return (
                o.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n,
                    numPotions: i
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new i.Hx(t))
            );
        }
    },
    h = async (e) => {
        try {
            await r.tn.post({
                url: d.ANM.CONSUME_HD_STREAMING_POTION,
                body: { channel_id: e },
                rejectWithError: !1
            }),
                o.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: l.FX
                });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    m = async (e, t, n) => {
        try {
            await r.tn.post({
                url: d.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
                body: {
                    channel_id: e,
                    message_id: t,
                    emoji_name: g(n)
                },
                rejectWithError: !1
            }),
                o.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: l.D1
                });
        } catch (e) {
            throw new i.Hx(e);
        }
        let a = (0, u.NV)(n);
        (0, c.I)(a, void 0, !0, s.LL.MessageSent);
    },
    g = (e) => (null != e.id ? ''.concat(e.name, ':').concat(e.id) : e.optionallyDiverseSequence),
    E = (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    b = (e) => {
        o.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
