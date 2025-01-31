n.d(t, { t: () => h }), n(411104);
var a = n(192379),
    r = n(512722),
    o = n.n(r),
    i = n(478677),
    l = n(457330),
    s = n(275759),
    c = n(489863),
    d = n(497350);
async function u(e, t, n) {
    var a, r, c, u;
    let h = (0, d.B)(e);
    if (null == h) throw (await f(n, 1, 'authorize'), Error('Unsupported client_id for two way link'));
    let x = null;
    try {
        let { body: e } = await l.Z.authorize(h, {
            twoWayLinkType: i.g.DEVICE_CODE,
            userCode: n
        });
        x = e.url;
    } catch (e) {
        throw (await f(n, null !== (r = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.code) && void 0 !== r ? r : 0, 'authorize'), Error('error during two way authorize'));
    }
    let p = null;
    try {
        o()(null != x, 'No URL in authorize response');
        let { state: e } = (0, s.xp)(x);
        o()(null != e, 'Authorize URL state query parameter must be present'), (p = e);
    } catch (e) {
        throw (await f(n, 2, 'authorize'), Error('error parsing callback params'));
    }
    try {
        await l.Z.callback(h, {
            code: t,
            state: p
        });
    } catch (e) {
        throw (await f(n, null !== (u = null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code) && void 0 !== u ? u : 0, 'callback'), Error('error during two way callback'));
    }
}
async function f(e, t, n) {
    try {
        await (0, c.i2)(e, t, n);
    } catch (e) {}
}
function h(e, t, n) {
    return a.useCallback(
        async (a, r) => {
            if (!r) {
                try {
                    await (0, c.tR)(a.userCode, 'denied');
                } catch (e) {}
                e();
                return;
            }
            if (null == a.twoWayLinkCode)
                try {
                    await (0, c.tR)(a.userCode, 'granted'), n(a);
                } catch (e) {
                    t(a);
                }
            else
                try {
                    await u(a.clientId, a.twoWayLinkCode, a.userCode), n(a);
                } catch (e) {
                    t(a);
                }
        },
        [e, t, n]
    );
}
