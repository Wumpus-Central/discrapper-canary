n.d(t, { Z: () => T }), n(388685);
var l,
    i,
    r = n(442837),
    u = n(570140),
    a = n(69004);
let o = new a.Z(196606),
    c = 0,
    d = new a.Z(196606),
    s = new a.Z(196606);
function E(e, t, n) {
    var l;
    let i = null != (l = o.get(e)) ? l : new Map();
    i.set(t, n), o.set(e, i), c++;
}
function p(e) {
    let t = d.get(e);
    null != t && s.delete(t), d.delete(e), o.delete(e), c++;
}
class I extends (l = r.ZP.Store) {
    getInteractionComponentStates() {
        return o;
    }
    getInteractionComponentStateVersion() {
        return c;
    }
    getInteractionComponentState(e, t) {
        var n;
        let l = o.get(e);
        return null == l ? null : null != (n = l.get(t)) ? n : null;
    }
}
(i = "displayName") in I
    ? Object.defineProperty(I, i, {
          value: "LocalInteractionComponentStateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (I[i] = "LocalInteractionComponentStateStore");
let T = new I(u.Z, {
    LOGOUT: function () {
        o.clear(), d.clear(), s.clear(), c++;
    },
    QUEUE_INTERACTION_COMPONENT_STATE: function (e) {
        let { messageId: t, nonce: n, componentId: l, state: i } = e;
        d.set(t, n),
            s.set(n, {
                messageId: t,
                componentId: l,
            }),
            E(t, l, i);
    },
    SET_INTERACTION_COMPONENT_STATE: function (e) {
        let { rootContainerId: t, componentId: n, state: l } = e;
        E(t, n, l);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        if (!o.has(t)) return !1;
        p(t);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || !o.has(t.id)) return !1;
        p(t.id);
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = s.get(t);
        if (null == n) return !1;
        d.delete(n.messageId), s.delete(t), c++;
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        if (null == t) return !1;
        let n = s.get(t);
        if (null == n) return !1;
        !(function (e) {
            let { componentId: t, messageId: n } = e,
                l = o.get(n);
            if (null != l && l.has(t)) l.delete(t), 0 === l.size && o.delete(n), c++;
        })(n);
    },
    CLEAR_INTERACTION_MODAL_STATE: function (e) {
        let { customId: t } = e;
        o.delete(t), c++;
    },
});
