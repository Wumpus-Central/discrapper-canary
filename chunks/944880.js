n.d(t, { Z: () => P }), n(47120);
var i = n(913527),
    r = n.n(i),
    a = n(570140),
    s = n(147913),
    o = n(335131),
    l = n(228624),
    u = n(959546),
    c = n(594174),
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
let v = null,
    y = !1,
    I = 1209600000,
    T = 86400000;
function b(e) {
    let t = u.Z.createFromServer(e.entitlement);
    (0, m._k)(t)
        ? S({ forceRefresh: !0 })
        : (0, m.YE)(t)
          ? null != h.Z.getTenureRewardStatusForRewardId(t.skuId) &&
            a.Z.dispatch({
                type: 'USER_TENURE_REWARD_STATUS_DELETE',
                tenureRewardIds: [t.skuId]
            })
          : (0, m.km)(t) &&
            (0, o.qg)({
                variantsReturnStyle: (0, l.oj)('TenureRewardManager'),
                location: 'tenure_reward_manager'
            });
}
function S() {
    let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    D();
    let t = d.Z.getForApplication(g.CL),
        n = (0, m.kG)(t),
        i = c.default.getCurrentUser();
    if (!(0, f.M5)(i, g.p9.TIER_2) && null == n) {
        null != i && a.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
        return;
    }
    if ((0, p.dR)({ location: 'tenure_reward_manager' })) {
        if (!0 === e || C(i)) O();
        else {
            let e = d.Z.getForApplication(g.CL);
            if (null == e) return;
            let t = Array.from(e)
                .filter((e) => null != h.Z.getTenureRewardStatusForRewardId(e.skuId))
                .map((e) => e.skuId);
            t.length > 0 &&
                a.Z.dispatch({
                    type: 'USER_TENURE_REWARD_STATUS_DELETE',
                    tenureRewardIds: t
                });
        }
    }
}
function A() {
    let e = h.Z.getState();
    return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > I;
}
function N() {
    let e = (0, m.GT)();
    return null != e && null != e.redeemable_at && 0 >= r()(e.redeemable_at).diff(r().utc(), 'seconds');
}
function C(e) {
    if (h.Z.getFetchState() !== h.M.FETCHED) return !0;
    let t = (0, m.GT)();
    return (null != t && null != e && e.id !== t.user_id) || A() || N();
}
function R() {
    if ((D(), h.Z.getFetchState() !== h.M.FETCHED || y)) return;
    let e = (0, m.GT)();
    if ((null == e ? void 0 : e.redeemable_at) == null) return;
    let t = (null == e ? void 0 : e.redeemable_at) != null ? new Date(e.redeemable_at).getTime() - Date.now() : null;
    null != t && t > 0 && (v = setTimeout(S, t));
}
async function O() {
    !y && ((y = !0), await _.V(), (y = !1), a.Z.wait(() => R()));
}
function D() {
    clearTimeout(v), (v = null);
}
function L() {
    D();
}
function x() {
    S();
}
class w extends s.Z {
    forceRefreshIfOutdated() {
        let e = h.Z.getState();
        null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > T && S({ forceRefresh: !0 });
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                POST_CONNECTION_OPEN: x,
                CONNECTION_CLOSED: L,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => S(),
                ENTITLEMENT_CREATE: b,
                ENTITLEMENT_UPDATE: () => S(),
                ENTITLEMENT_DELETE: () => S(),
                LOGOUT: D
            });
    }
}
let P = new w();
