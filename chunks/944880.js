n.d(t, { Z: () => k }), n(388685);
var r = n(913527),
    i = n.n(r),
    a = n(570140),
    o = n(147913),
    s = n(335131),
    l = n(228624),
    c = n(959546),
    u = n(594174),
    d = n(78839),
    f = n(580130),
    _ = n(111361),
    p = n(470918),
    h = n(595878),
    m = n(513785),
    g = n(106255),
    E = n(474936);
function b(e, t, n) {
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
let y = null,
    O = !1,
    v = 1209600000,
    I = 86400000;
function S(e) {
    let t = c.Z.createFromServer(e.entitlement);
    (0, g._k)(t)
        ? T({ forceRefresh: !0 })
        : (0, g.YE)(t)
          ? null != m.Z.getTenureRewardStatusForRewardId(t.skuId) &&
            a.Z.dispatch({
                type: 'USER_TENURE_REWARD_STATUS_DELETE',
                tenureRewardIds: [t.skuId]
            })
          : (0, g.km)(t) &&
            (0, s.qg)({
                variantsReturnStyle: (0, l.oj)('TenureRewardManager'),
                location: 'tenure_reward_manager'
            });
}
function T() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    w();
    let t = f.Z.getForApplication(E.CL),
        n = (0, g.kG)(t),
        r = d.ZP.getPremiumSubscription(),
        i = u.default.getCurrentUser();
    if (!((0, _.M5)(i, E.p9.TIER_2) && null != r) && null == n) {
        null != i && a.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if ((0, h.dR)({ location: 'tenure_reward_manager' }))
        if (!0 === e || C(i)) R();
        else {
            let e = f.Z.getForApplication(E.CL);
            if (null == e) return;
            let t = Array.from(e)
                .filter((e) => null != m.Z.getTenureRewardStatusForRewardId(e.skuId))
                .map((e) => e.skuId);
            t.length > 0 &&
                a.Z.dispatch({
                    type: 'USER_TENURE_REWARD_STATUS_DELETE',
                    tenureRewardIds: t
                });
        }
}
function A() {
    let e = m.Z.getState();
    return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > v;
}
function N() {
    let e = (0, g.GT)();
    return null != e && null != e.redeemable_at && 0 >= i()(e.redeemable_at).diff(i().utc(), 'seconds');
}
function C(e) {
    if (m.Z.getFetchState() !== m.M.FETCHED) return !0;
    let t = (0, g.GT)();
    return (null != t && null != e && e.id !== t.user_id) || A() || N();
}
function P() {
    if ((w(), m.Z.getFetchState() !== m.M.FETCHED || O)) return;
    let e = (0, g.GT)();
    if ((null == e ? void 0 : e.redeemable_at) == null) return;
    let t = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
    null != t && t > 0 && (y = setTimeout(T, t));
}
async function R() {
    O || ((O = !0), await p.V(), (O = !1), a.Z.wait(() => P()));
}
function w() {
    clearTimeout(y), (y = null);
}
function D() {
    w();
}
function L() {
    T();
}
class x extends o.Z {
    forceRefreshIfOutdated() {
        let e = m.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > I && T({ forceRefresh: !0 });
    }
    constructor(...e) {
        super(...e),
            b(this, 'actions', {
                POST_CONNECTION_OPEN: L,
                CONNECTION_CLOSED: D,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => T(),
                ENTITLEMENT_CREATE: S,
                ENTITLEMENT_UPDATE: () => T(),
                ENTITLEMENT_DELETE: () => T(),
                LOGOUT: w
            });
    }
}
let k = new x();
