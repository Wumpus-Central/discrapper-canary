n.d(t, { Z: () => L }), n(47120);
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
    p = n(470918),
    _ = n(595878),
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
let v = null,
    b = !1,
    y = 1209600000,
    O = 86400000;
function S(e) {
    let t = c.Z.createFromServer(e.entitlement);
    (0, m._k)(t)
        ? I({ forceRefresh: !0 })
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
function I() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    P();
    let t = d.Z.getForApplication(g.CL),
        n = (0, m.kG)(t),
        r = u.default.getCurrentUser();
    if (!(0, f.M5)(r, g.p9.TIER_2) && null == n) {
        null != r && o.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if ((0, _.dR)({ location: 'tenure_reward_manager' })) {
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
}
function T() {
    let e = h.Z.getState();
    return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > y;
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
    if ((P(), h.Z.getFetchState() !== h.M.FETCHED || b)) return;
    let e = (0, m.GT)();
    if ((null == e ? void 0 : e.redeemable_at) == null) return;
    let t = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
    null != t && t > 0 && (v = setTimeout(I, t));
}
async function R() {
    !b && ((b = !0), await p.V(), (b = !1), o.Z.wait(() => C()));
}
function P() {
    clearTimeout(v), (v = null);
}
function w() {
    P();
}
function D() {
    I();
}
class x extends a.Z {
    forceRefreshIfOutdated() {
        let e = h.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > O && I({ forceRefresh: !0 });
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                POST_CONNECTION_OPEN: D,
                CONNECTION_CLOSED: w,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => I(),
                ENTITLEMENT_CREATE: S,
                ENTITLEMENT_UPDATE: () => I(),
                ENTITLEMENT_DELETE: () => I(),
                LOGOUT: P
            });
    }
}
let L = new x();
