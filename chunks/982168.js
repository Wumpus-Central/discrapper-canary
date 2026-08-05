"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(277057),
    r = n.n(i),
    a = n(228366),
    s = n(250953),
    l = n(33524);
let o = new (class {
    queue = [];
    enqueue(e) {
        this.queue.push(e);
    }
    flush() {
        for (; this.queue.length > 0; ) this.queue.shift()?.();
    }
})();
var d = n(775602),
    c = n(652215);
let u = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
            i = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.BRT.APP;
        return (
            (0, l.GR)({
                modal: (function (e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        key: t.key ?? i ?? "modal",
                        modal: e,
                        animation: t.animation ?? (d.Ay.useReducedMotion ? c.WMy.FADE : c.WMy.SLIDE_UP),
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
            a.h.dispatch({ type: "MODAL_PUSH", modal: e, props: t, key: n, appContext: s }),
            n
        );
    },
    pushLazy(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()("modal"),
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = (0, s.Y)();
        return null != a && a.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                  : e()
              ).then((e) => this.push(e, t, n, i))
            : new Promise((r) => o.enqueue(() => r(this.pushLazy(e, t, n, i))));
    },
    updateAnimation(e, t) {
        a.h.dispatch({ type: "MODAL_UPDATE", key: e, props: {}, partial: !0, animation: t });
    },
    pop() {
        (0, l.tu)(), a.h.dispatch({ type: "MODAL_POP" });
    },
    popWithKey(e, t) {
        (0, l.tu)(e, t), a.h.dispatch({ type: "MODAL_POP", key: e, onExited: t });
    },
    popAboveKey: (e) => (0, l.WR)(e),
    popAll() {
        (0, l.f3)(),
            a.h.dispatch({ type: "MODAL_POP_ALL" }),
            a.h.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" }),
            a.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" }),
            a.h.dispatch({ type: "HIDE_ACTION_SHEET" }),
            a.h.dispatch({ type: "DISPLAYED_INVITE_CLEAR" }),
            a.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" }),
            a.h.dispatch({ type: "QUICKSWITCHER_HIDE" }),
            a.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" }),
            a.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" }),
            a.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
    },
};
