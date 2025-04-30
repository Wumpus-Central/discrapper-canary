n.d(t, { t: () => p }), n(415506);
var r = n(192379),
    a = n(512722),
    o = n.n(a),
    l = n(478677),
    i = n(457330),
    s = n(275759),
    c = n(489863),
    d = n(497350);
async function u(e, t, n) {
    var r, a, c, u;
    let p = (0, d.B)(e);
    if (null == p) throw (await f(n, 1, 'authorize'), Error('Unsupported client_id for two way link'));
    let h = null;
    try {
        let { body: e } = await i.Z.authorize(p, {
            twoWayLinkType: l.g.DEVICE_CODE,
            userCode: n
        });
        h = e.url;
    } catch (e) {
        throw (await f(n, null != (a = null == e || null == (r = e.body) ? void 0 : r.code) ? a : 0, 'authorize'), Error('error during two way authorize'));
    }
    let x = null;
    try {
        o()(null != h, 'No URL in authorize response');
        let { state: e } = (0, s.xp)(h);
        o()(null != e, 'Authorize URL state query parameter must be present'), (x = e);
    } catch (e) {
        throw (await f(n, 2, 'authorize'), Error('error parsing callback params'));
    }
    try {
        await i.Z.callback(p, {
            code: t,
            state: x
        });
    } catch (e) {
        throw (await f(n, null != (u = null == e || null == (c = e.body) ? void 0 : c.code) ? u : 0, 'callback'), Error('error during two way callback'));
    }
}
async function f(e, t, n) {
    try {
        await (0, c.i2)(e, t, n);
    } catch (e) {}
}
function p(e, t, n) {
    return r.useCallback(
        async (r, a) => {
            if (!a) {
                try {
                    await (0, c.tR)(r.userCode, 'denied');
                } catch (e) {}
                e();
                return;
            }
            if (null == r.twoWayLinkCode)
                try {
                    await (0, c.tR)(r.userCode, 'granted'), n(r);
                } catch (e) {
                    t(r);
                }
            else
                try {
                    await u(r.clientId, r.twoWayLinkCode, r.userCode), n(r);
                } catch (e) {
                    t(r);
                }
        },
        [e, t, n]
    );
}
