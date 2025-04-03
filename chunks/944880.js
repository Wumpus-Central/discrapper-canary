n.d(t, { Z: () => x }), n(47120);
var r = n(913527),
    i = n.n(r),
    o = n(570140),
    a = n(147913),
    s = n(335131),
    l = n(228624),
    c = n(959546),
    u = n(594174),
    d = n(580130),
    f = n(111361),
    _ = n(470918),
    p = n(595878),
    h = n(513785),
    m = n(106255),
    g = n(474936);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = null,
    y = !1,
    v = 1209600000,
    O = 86400000;
function I(e) {
    let t = c.Z.createFromServer(e.entitlement);
    (0, m._k)(t)
        ? S({ forceRefresh: !0 })
        : (0, m.YE)(t)
          ? null != h.Z.getTenureRewardStatusForRewardId(t.skuId) &&
            o.Z.dispatch({
                type: 'USER_TENURE_REWARD_STATUS_DELETE',
                tenureRewardIds: [t.skuId]
            })
          : (0, m.km)(t) &&
            (0, s.qg)({
                variantsReturnStyle: (0, l.oj)('TenureRewardManager'),
                location: 'tenure_reward_manager'
            });
}
function S() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    P();
    let t = d.Z.getForApplication(g.CL),
        n = (0, m.kG)(t),
        r = u.default.getCurrentUser();
    if (!(0, f.M5)(r, g.p9.TIER_2) && null == n) {
        null != r && o.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if ((0, p.dR)({ location: 'tenure_reward_manager' }))
        if (!0 === e || A(r)) R();
        else {
            let e = d.Z.getForApplication(g.CL);
            if (null == e) return;
            let t = Array.from(e)
                .filter((e) => null != h.Z.getTenureRewardStatusForRewardId(e.skuId))
                .map((e) => e.skuId);
            t.length > 0 &&
                o.Z.dispatch({
                    type: 'USER_TENURE_REWARD_STATUS_DELETE',
                    tenureRewardIds: t
                });
        }
}
function T() {
    let e = h.Z.getState();
    return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > v;
}
function N() {
    let e = (0, m.GT)();
    return null != e && null != e.redeemable_at && 0 >= i()(e.redeemable_at).diff(i().utc(), 'seconds');
}
function A(e) {
    if (h.Z.getFetchState() !== h.M.FETCHED) return !0;
    let t = (0, m.GT)();
    return (null != t && null != e && e.id !== t.user_id) || T() || N();
}
function C() {
    if ((P(), h.Z.getFetchState() !== h.M.FETCHED || y)) return;
    let e = (0, m.GT)();
    if ((null == e ? void 0 : e.redeemable_at) == null) return;
    let t = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
    null != t && t > 0 && (b = setTimeout(S, t));
}
async function R() {
    y || ((y = !0), await _.V(), (y = !1), o.Z.wait(() => C()));
}
function P() {
    clearTimeout(b), (b = null);
}
function w() {
    P();
}
function D() {
    S();
}
class L extends a.Z {
    forceRefreshIfOutdated() {
        let e = h.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > O && S({ forceRefresh: !0 });
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                POST_CONNECTION_OPEN: D,
                CONNECTION_CLOSED: w,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => S(),
                ENTITLEMENT_CREATE: I,
                ENTITLEMENT_UPDATE: () => S(),
                ENTITLEMENT_DELETE: () => S(),
                LOGOUT: P
            });
    }
}
let x = new L();
