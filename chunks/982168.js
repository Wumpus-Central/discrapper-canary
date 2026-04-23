"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(296489),
    r = n.n(i),
    s = n(228366),
    a = n(250953),
    o = n(33524);
let l = new (class {
    queue = [];
    enqueue(e) {
        this.queue.push(e);
    }
    flush() {
        for (; this.queue.length > 0; ) this.queue.shift()?.();
    }
})();
var d = n(775602),
    _ = n(652215);
let u = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _.BRT.APP;
        return (
            (0, o.GR)({
                key: n,
                modal: (function (e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        key: t.key ?? i ?? "modal",
                        modal: e,
                        animation: t.animation ?? (d.A.useReducedMotion ? _.WMy.FADE : _.WMy.SLIDE_UP),
                        shouldPersistUnderModals: t.shouldPersistUnderModals ?? !1,
                        props: n,
                        backdropStyle: t.backdropStyle ?? null,
                        backdropInstant: t.backdropInstant ?? !1,
                        disableAnimation: t.disableAnimation ?? !1,
                        closable: "boolean" != typeof t.closable || t.closable,
                        label: t.label ?? "",
                        callbacks: {},
                    };
                })(e, {}, t, n),
                ...i,
            }),
            s.h.dispatch({ type: "MODAL_PUSH", modal: e, props: t, key: n, appContext: a }),
            n
        );
    },
    pushLazy(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
            i = arguments.length > 3 ? arguments[3] : void 0,
            s = (0, a.Y)();
        return null != s && s.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                  : e()
              ).then((e) => this.push(e, t, n, i))
            : new Promise((r) => l.enqueue(() => r(this.pushLazy(e, t, n, i))));
    },
    updateAnimation(e, t) {
        s.h.dispatch({ type: "MODAL_UPDATE", key: e, props: {}, partial: !0, animation: t });
    },
    pop() {
        (0, o.tu)(), s.h.dispatch({ type: "MODAL_POP" });
    },
    popWithKey(e, t) {
        (0, o.tu)(e, t), s.h.dispatch({ type: "MODAL_POP", key: e, onExited: t });
    },
    popAboveKey: (e) => (0, o.WR)(e),
    popAll() {
        (0, o.f3)(),
            s.h.dispatch({ type: "MODAL_POP_ALL" }),
            s.h.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" }),
            s.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" }),
            s.h.dispatch({ type: "HIDE_ACTION_SHEET" }),
            s.h.dispatch({ type: "DISPLAYED_INVITE_CLEAR" }),
            s.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" }),
            s.h.dispatch({ type: "QUICKSWITCHER_HIDE" }),
            s.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" }),
            s.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" }),
            s.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
    },
};
