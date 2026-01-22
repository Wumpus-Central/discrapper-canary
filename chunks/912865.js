n.d(t, {
    A: () => G,
}),
    n(65821);
var r,
    i = n(311907),
    a = n(73153),
    s = n(15285),
    o = n(954571),
    l = n(9302),
    c = n(777334),
    u = n(41984),
    d = n(833551),
    f = n(515183),
    p = n(680243),
    _ = n(672396),
    h = n(652215);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = {};

function O(e) {
    var t, n;
    return null != (t = null == (n = d.default.getTrackedGameByPid(e)) ? void 0 : n.overlayMethod) ? t : null;
}

function A(e) {
    let t = O(e);
    y[e] = b(g({}, y[e]), {
        overlay_method: null != t ? u.Ue[t] : u.Ue[u.Ue.OutOfProcess],
    });
}

function v(e) {
    var t, n;
    if (null != y[e]) return;
    let r = s.Ay.getGameOrTransformedSubgameForPID(e),
        i = O(e);
    y[e] = {
        overlay_method: null != i ? u.Ue[i] : u.Ue[u.Ue.OutOfProcess],
        success: !1,
        game_name: null != (t = null == r ? void 0 : r.name) ? t : null,
        game_id: null != (n = null == r ? void 0 : r.id) ? n : null,
        error: null,
        error_description: null,
        renderer_started: !1,
        renderer_started_after: null,
        renderer_ready_after: null,
        renderer_load_succeeded_after: null,
        renderer_crash_count: 0,
        renderer_load_failures: 0,
        renderer_ignored_paints: 0,
        host_crash_count: 0,
    };
}

function S(e) {
    var t;
    return null != (t = y[e]) ? t : {};
}

function I(e, t) {
    var n, r;
    let i = null == (n = y[e]) ? void 0 : n.error,
        a = null == (r = y[e]) ? void 0 : r.error_description;
    (y[e] = g({}, y[e], t)), null != i && (y[e].error = i), null != a && (y[e].error_description = a);
}

function T(e) {
    o.default.track(h.HAw.OVERLAY_HOOK_RESULT, S(e));
}

function C(e, t) {
    e !== l.UNSET_PID &&
        I(e, {
            host_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        });
}

function N(e, t) {
    e !== l.UNSET_PID &&
        I(e, {
            renderer_crash_count: 1,
            error: t.message,
            error_description: t.stack,
        });
}

function R() {
    y = {};
}

function w(e, t) {
    let n = s.Ay.getGameOrTransformedSubgameForPID(e);
    return {
        crash_type: t,
        gameName: null == n ? void 0 : n.name,
    };
}

function P(e) {
    let { pid: t, error: n, crashType: r } = e,
        i = n instanceof Error ? n : Error(null != n ? n : "Unknown error");
    return (
        "native" === r
            ? (C(t, i),
              (0, c.St)(i, u.Ue.OutOfProcess, {
                  extra: w(t, "host"),
              }))
            : (N(t, i),
              (0, c.St)(i, u.Ue.OutOfProcess, {
                  extra: w(t, "renderer"),
              })),
        !0
    );
}

function D(e) {
    let { createWindowTriggeringPID: t } = e;
    return (
        I(t, {
            mounting_started_at: new Date().getTime(),
        }),
        !0
    );
}

function x(e) {
    var t, n;
    let { createWindowTriggeringPID: r } = e,
        i = null != (t = null == (n = S(r)) ? void 0 : n.mounting_started_at) ? t : new Date().getTime(),
        a = {
            renderer_started: !0,
            fullscreen_type: (0, f.ph)(r),
            graphics_info_after: new Date().getTime() - i,
        };
    return I(r, a), !0;
}

function L(e) {
    var t, n;
    let { createWindowTriggeringPID: r } = e,
        i = null != (t = null == (n = S(r)) ? void 0 : n.mounting_started_at) ? t : new Date().getTime();
    return (
        I(r, {
            renderer_started_after: new Date().getTime() - i,
        }),
        !0
    );
}

function j(e) {
    let { pid: t } = e;
    return v(t), !0;
}

function M(e) {
    let { lastAssociatedPID: t } = e;
    if (t !== l.UNSET_PID) return T(t), R(), !0;
}

function k(e) {
    var t, n;
    let { pid: r } = e,
        i = null != (t = null == (n = S(r)) ? void 0 : n.mounting_started_at) ? t : new Date().getTime();
    return (
        I(r, {
            total_mount_time_ms: null != i ? new Date().getTime() - i : void 0,
            success: !0,
        }),
        A(r),
        !0
    );
}
class U extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(d.default, p.A, s.Ay);
    }
    getData(e) {
        return S(e);
    }
    getCrashExtra(e, t) {
        return w(e, t);
    }
}
m(U, "displayName", "Overlay-v3-Native-Analytics-Store");
let G = new U(
    a.h,
    __OVERLAY__ || !_.OX
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: D,
              OVERLAY_V3_POST_CREATE_POPOUT: x,
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: L,
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: M,
              OVERLAY_SUCCESSFULLY_SHOWN: k,
              OVERLAY_CRASHED: P,
              OVERLAY_V3_NATIVE_TRACK_GAME: j,
          },
);
