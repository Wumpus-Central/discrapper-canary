n(47120);
var l,
    i,
    u,
    r,
    a = n(442837),
    o = n(570140),
    d = n(69004);
let c = new d.Z(196606),
    s = 0,
    E = new d.Z(196606),
    T = new d.Z(196606);
function I(e, t, n) {
    var l;
    let i = null !== (l = c.get(e)) && void 0 !== l ? l : new Map();
    i.set(t, n), c.set(e, i), s++;
}
function f(e) {
    let t = E.get(e);
    null != t && T.delete(t), E.delete(e), c.delete(e), s++;
}
class p extends (l = a.ZP.Store) {
    getInteractionComponentStates() {
        return c;
    }
    getInteractionComponentStateVersion() {
        return s;
    }
    getInteractionComponentState(e, t) {
        var n;
        let l = c.get(e);
        return null == l ? null : null !== (n = l.get(t)) && void 0 !== n ? n : null;
    }
}
(r = 'LocalInteractionComponentStateStore'),
    (u = 'displayName') in (i = p)
        ? Object.defineProperty(i, u, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[u] = r),
    (t.Z = new p(o.Z, {
        LOGOUT: function () {
            c.clear(), E.clear(), T.clear(), s++;
        },
        QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
            let { messageId: t, nonce: n, componentId: l, state: i } = e;
            E.set(t, n),
                T.set(n, {
                    messageId: t,
                    componentId: l
                }),
                I(t, l, i);
        },
        SET_INTERACTION_COMPONENT_STATE: function (e) {
            let { rootContainerId: t, componentId: n, state: l } = e;
            I(t, n, l);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t } = e;
            if (!c.has(t)) return !1;
            f(t);
        },
        MESSAGE_UPDATE: function (e) {
            let { message: t } = e;
            if (null == t.id || !c.has(t.id)) return !1;
            f(t.id);
        },
        INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            E.delete(n.messageId), T.delete(t), s++;
        },
        INTERACTION_FAILURE: function (e) {
            let { nonce: t } = e;
            if (null == t) return !1;
            let n = T.get(t);
            if (null == n) return !1;
            !(function (e) {
                let { componentId: t, messageId: n } = e,
                    l = c.get(n);
                if (null == l || !l.has(t)) return;
                l.delete(t), 0 === l.size && c.delete(n), s++;
            })(n);
        },
        CLEAR_INTERACTION_MODAL_STATE: function (e) {
            let { customId: t } = e;
            c.delete(t), s++;
        }
    }));
