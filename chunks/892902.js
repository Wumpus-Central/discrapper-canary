n.d(t, { Z: () => m }), n(47120);
var l,
    i,
    u,
    a = n(442837),
    r = n(570140),
    o = n(69004);
let d = new o.Z(196606),
    c = 0,
    s = new o.Z(196606),
    E = new o.Z(196606);
function T(e, t, n) {
    var l;
    let i = null != (l = d.get(e)) ? l : new Map();
    i.set(t, n), d.set(e, i), c++;
}
function I(e) {
    let t = s.get(e);
    null != t && E.delete(t), s.delete(e), d.delete(e), c++;
}
class p extends (l = a.ZP.Store) {
    getInteractionComponentStates() {
        return d;
    }
    getInteractionComponentStateVersion() {
        return c;
    }
    getInteractionComponentState(e, t) {
        var n;
        let l = d.get(e);
        return null == l ? null : null != (n = l.get(t)) ? n : null;
    }
}
(u = 'LocalInteractionComponentStateStore'),
    (i = 'displayName') in p
        ? Object.defineProperty(p, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[i] = u);
let m = new p(r.Z, {
    LOGOUT: function () {
        d.clear(), s.clear(), E.clear(), c++;
    },
    QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
        let { messageId: t, nonce: n, componentId: l, state: i } = e;
        s.set(t, n),
            E.set(n, {
                messageId: t,
                componentId: l
            }),
            T(t, l, i);
    },
    SET_INTERACTION_COMPONENT_STATE: function (e) {
        let { rootContainerId: t, componentId: n, state: l } = e;
        T(t, n, l);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        if (!d.has(t)) return !1;
        I(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || !d.has(t.id)) return !1;
        I(t.id);
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = E.get(t);
        if (null == n) return !1;
        s.delete(n.messageId), E.delete(t), c++;
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = E.get(t);
        if (null == n) return !1;
        !(function (e) {
            let { componentId: t, messageId: n } = e,
                l = d.get(n);
            if (null != l && l.has(t)) l.delete(t), 0 === l.size && d.delete(n), c++;
        })(n);
    },
    CLEAR_INTERACTION_MODAL_STATE: function (e) {
        let { customId: t } = e;
        d.delete(t), c++;
    }
});
