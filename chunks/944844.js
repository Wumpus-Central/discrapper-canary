n.d(t, {
    t: function () {
        return h;
    }
}),
    n(411104);
var a = n(192379),
    r = n(512722),
    o = n.n(r),
    i = n(478677),
    l = n(457330),
    c = n(275759),
    s = n(489863),
    d = n(497350);
async function u(e, t, n) {
    var a, r, s, u;
    let h = (0, d.B)(e);
    if (null == h) throw (await f(n, 1, 'authorize'), Error('Unsupported client_id for two way link'));
    let p = null;
    try {
        let { body: e } = await l.Z.authorize(h, {
            twoWayLinkType: i.g.DEVICE_CODE,
            userCode: n
        });
        p = e.url;
    } catch (e) {
        throw (await f(n, null !== (r = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.code) && void 0 !== r ? r : 0, 'authorize'), Error('error during two way authorize'));
    }
    let x = null;
    try {
        o()(null != p, 'No URL in authorize response');
        let { state: e } = (0, c.xp)(p);
        o()(null != e, 'Authorize URL state query parameter must be present'), (x = e);
    } catch (e) {
        throw (await f(n, 2, 'authorize'), Error('error parsing callback params'));
    }
    try {
        await l.Z.callback(h, {
            code: t,
            state: x
        });
    } catch (e) {
        throw (await f(n, null !== (u = null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.code) && void 0 !== u ? u : 0, 'callback'), Error('error during two way callback'));
    }
}
async function f(e, t, n) {
    try {
        await (0, s.i2)(e, t, n);
    } catch (e) {}
}
function h(e, t, n) {
    return a.useCallback(
        async (a, r) => {
            if (!r) {
                try {
                    await (0, s.tR)(a.userCode, 'denied');
                } catch (e) {}
                e();
                return;
            }
            if (null == a.twoWayLinkCode)
                try {
                    await (0, s.tR)(a.userCode, 'granted'), n(a);
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
