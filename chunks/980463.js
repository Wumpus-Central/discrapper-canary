n.d(t, {
    Gq: function () {
        return d;
    },
    SN: function () {
        return m;
    },
    Zu: function () {
        return f;
    },
    gA: function () {
        return E;
    },
    qc: function () {
        return p;
    },
    x8: function () {
        return S;
    }
}),
    n(411104);
var r = n(544891),
    i = n(343817),
    u = n(570140),
    l = n(959546),
    o = n(317951),
    a = n(287941),
    c = n(981631);
let s = {
        [o.D1]: c.ANM.FETCH_MESSAGE_CONFETTI_ENTITLEMENT,
        [o.FX]: c.ANM.FETCH_HD_STREAMING_ENTITLEMENT
    },
    d = async (e) => {
        u.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await r.tn.get({
                url: c.ANM.CONSUMABLE_FETCH_PRICE(e),
                rejectWithError: !1
            });
            if (null == t.body.price)
                throw (
                    (u.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                u.Z.dispatch({
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
                (u.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new i.Hx(t))
            );
        }
    },
    E = async (e) => {
        if (
            (u.Z.dispatch({
                type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
                skuId: e
            }),
            null == s[e])
        )
            throw (
                (u.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                Error('Invalid consumable skuId: '.concat(e)))
            );
        try {
            let t = await r.tn.get({
                    url: s[e],
                    rejectWithError: !1
                }),
                n = null != t.body.entitlement ? l.Z.createFromServer(t.body.entitlement) : null;
            return (
                u.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (u.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new i.Hx(t))
            );
        }
    },
    f = async (e, t) => {
        try {
            await r.tn.post({
                url: c.ANM.CONSUME_HD_STREAMING_POTION,
                body: { channel_id: e },
                rejectWithError: !1
            }),
                u.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: t
                });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    p = async (e, t, n, l) => {
        try {
            await r.tn.post({
                url: c.ANM.CONSUME_MESSAGE_CONFETTI_POTION,
                body: {
                    channel_id: e,
                    message_id: t,
                    emoji_name: _(n)
                },
                rejectWithError: !1
            }),
                u.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: l
                });
        } catch (e) {
            throw new i.Hx(e);
        }
        (0, a.I)(
            {
                name: n.name,
                id: n.id
            },
            void 0,
            !0
        );
    },
    _ = (e) => (null != e.id ? ''.concat(e.name, ':').concat(e.id) : e.optionallyDiverseSequence),
    m = (e) => {
        u.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    S = (e) => {
        u.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
