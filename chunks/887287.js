n.d(t, { A: () => eN });
var i = n(855986),
    r = n(73153),
    a = n(684013),
    s = n(626584),
    l = n(644727),
    o = n(46653),
    d = n(83880),
    c = n(9302),
    u = n(206885),
    _ = n(41984);
let E = new Set(["SplashScreenClass"]);
var A = n(661886),
    f = n(682763),
    h = n(129230),
    I = n(777334),
    p = n(861862),
    m = n(515183),
    g = n(244055);
n(672396);
var T = n(652215);
let S = {};
function N(e) {
    return p.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function C(e) {
    return S[e] ?? {};
}
function O(e, t) {
    let n = S[e]?.error,
        i = S[e]?.error_description;
    ((S[e] = { ...S[e], ...t }), null != n && (S[e].error = n), null != i && (S[e].error_description = i));
}
function R(e, t) {
    let n = l.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
class L extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(p.default, g.A, l.Ay);
    }
    getData(e) {
        return C(e);
    }
    getCrashExtra(e, t) {
        return R(e, t);
    }
}
let y = new L(
    r.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e;
                  return (O(t, { mounting_started_at: new Date().getTime() }), !0);
              },
              OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = C(t)?.mounting_started_at ?? new Date().getTime(),
                      i = {
                          renderer_started: !0,
                          fullscreen_type: (0, m.ph)(t),
                          graphics_info_after: new Date().getTime() - n,
                      };
                  return (O(t, i), !0);
              },
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = C(t)?.mounting_started_at ?? new Date().getTime();
                  return (O(t, { renderer_started_after: new Date().getTime() - n }), !0);
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function (e) {
                  let { lastAssociatedPID: t } = e;
                  if (-1 !== t) return (h.default.track(T.HAw.OVERLAY_HOOK_RESULT, C(t)), (S = {}), !0);
              },
              OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  let t,
                      { pid: n } = e,
                      i = C(n)?.mounting_started_at ?? new Date().getTime();
                  return (
                      O(n, { total_mount_time_ms: null != i ? new Date().getTime() - i : void 0, success: !0 }),
                      (t = N(n)),
                      (S[n] = { ...S[n], overlay_method: null != t ? _.Ue[t] : _.Ue[_.Ue.OutOfProcess] }),
                      !0
                  );
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t, error: n, crashType: i } = e,
                      r = n instanceof Error ? n : Error(n ?? "Unknown error");
                  return (
                      "native" === i
                          ? (-1 !== t && O(t, { host_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, I.St)(r, _.Ue.OutOfProcess, { extra: R(t, "host") }))
                          : (-1 !== t &&
                                O(t, { renderer_crash_count: 1, error: r.message, error_description: r.stack }),
                            (0, I.St)(r, _.Ue.OutOfProcess, { extra: R(t, "renderer") })),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_TRACK_GAME: function (e) {
                  let { pid: t } = e;
                  return (
                      !(function (e) {
                          if (null != S[e]) return;
                          let t = l.Ay.getGameOrTransformedSubgameForPID(e),
                              n = N(e);
                          S[e] = {
                              overlay_method: null != n ? _.Ue[n] : _.Ue[_.Ue.OutOfProcess],
                              success: !1,
                              game_name: t?.name ?? null,
                              game_id: t?.id ?? null,
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
                      })(t),
                      !0
                  );
              },
          },
);
var D = n(812729),
    b = n.n(D),
    v = n(611599),
    P = n(293432),
    M = n(96175),
    U = n(392164);
let w = new v.Vy("OverlayV3NativeClickZoneStore"),
    G = null,
    x = [],
    k = [],
    F = {},
    B = !1;
function V(e, t) {
    if (null == G) return void w.error("Overlay module not found");
    let n = G?.getLastAssociatedPID() ?? -1;
    try {
        let i,
            r =
                ((i = setTimeout(() => {
                    !(function (e) {
                        let t = Object.keys(F).filter((t) => F[t] === e);
                        for (let n of (null != e && clearTimeout(e), t)) delete F[n];
                        let n = k.filter((e) => !t.includes(e.name));
                        ((k.length > 0 && 0 === x.length) || ((x = n), V(n, "timer_expired")), (k = [...n]));
                    })(i);
                }, 3e4)),
                e.map((e) => {
                    let t = { name: e.name, left: e.left, top: e.top, right: e.right, bottom: e.bottom },
                        n = F[e.name];
                    return (null != n && clearTimeout(n), (F[e.name] = i), t);
                }));
        (b()(e, x) || (0, f._r)(n, "capture_zones_set", { source: t, capture_zones: r, rawZones: e }),
            G.setCaptureZones(r));
    } catch (e) {
        w.error("Error setting capture zones:", e);
    }
}
function H(e) {
    for (let e of Object.values(F)) null != e && clearTimeout(e);
    ((F = {}), (x = []), (k = []), V([], e));
}
function j(e, t, n, i) {
    let r = P.A.getWindow(U.f);
    if (null == r) return;
    let a = Math.ceil(n * r.innerWidth),
        s = Math.ceil(i * r.innerHeight),
        l = new MouseEvent((0, M.Br)(t), { screenX: a, screenY: s, clientX: a, clientY: s, bubbles: !0, view: r }),
        o = r.document.elementFromPoint(a, s);
    null != o && o.dispatchEvent(l);
}
class W extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Debug-Module-Store";
    initialize() {
        this.waitFor(g.A, P.A);
    }
    getClickZones() {
        return x;
    }
    getFocusLostStoredClickZones() {
        return k;
    }
}
let Y = new W(
    r.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                  return null == (G = g.A.getNativeModule()) || !!B || ((B = !0), G.setCaptureZoneCallback(j), !0);
              },
              OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                  return ((G = null), !0);
              },
              OVERLAY_SET_CLICK_ZONES: function (e) {
                  let { zones: t } = e;
                  return (
                      !(function (e, t) {
                          if (!g.A.isOverlayEnabled) {
                              if (0 === x.length) return;
                              H("overlay_disabled");
                              return;
                          }
                          (V(e, t), (x = e), (k = [...e]));
                      })(t, "set_click_zones"),
                      !0
                  );
              },
              OVERLAY_FOCUSED: function (e) {
                  let { pid: t } = e;
                  return (
                      0 === t
                          ? 0 !== x.length && ((k = [...x]), (x = []), V([], "store_click_zones"))
                          : x.length > 0 || V((x = [...k]), "refresh_click_zones"),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function () {
                  return (H("refresh_host_window"), !0);
              },
              OVERLAY_CRASHED: function (e) {
                  return (H("crashed"), !0);
              },
          },
);
var K = n(321090),
    $ = n(127242),
    X = n(499979),
    z = n(394072),
    q = n(644434);
let Q = new s.A("OverlayV3Store"),
    J = new Set(),
    Z = new Set(),
    ee = null,
    et = null,
    en = null,
    ei = null,
    er = null,
    ea = null,
    es = null,
    el = null,
    eo = {},
    ed = {},
    ec = {};
function eu(e, t) {
    (null == ec[e] && (ec[e] = new Set()), ec[e].add(t));
}
function e_(e, t) {
    if (null != ee) {
        null != t && (ed[e] = t);
        try {
            if ((ee.trackGame(e), J.has(e))) return;
            (J.add(e),
                (0, f.dK)(e, "maybeTrackGame", { newOverlayMethod: null != t ? _.Ue[t] : null }),
                a.A.updateOverlayState(e, _.AR.WAITING_FOR_POPOUT_OPEN, "OverlayStore.maybeTrackGame"));
        } catch (t) {
            (Q.error("Error tracking game:", t), (0, f.mD)(e, t, { crashType: "renderer" }));
        }
    }
}
function eE(e) {
    if (!J.has(e)) return;
    let t = ed[e],
        n = eo[e];
    ((0, f.dK)(e, "removeTrackedGame", { overlayMethod: null != t ? _.Ue[t] : null, overlayState: n }),
        J.delete(e),
        delete eo[e],
        delete ed[e],
        Z.delete(e));
    try {
        if (null == ee) return;
        (ee.untrackGame(e), Q.verbose(`Removing tracked game ${e}`));
        let t = J.values().next().value;
        es === e && (es = t ?? null);
    } catch (t) {
        (Q.error("Error removing tracked game:", t), (0, f.mD)(e, t, { crashType: "native" }));
    }
}
function eA(e) {
    let t = l.Ay.getGameOrTransformedSubgameForPID(e);
    a.A.setAssociatedGame(es ?? -1, e, t);
}
function ef() {
    null == ea ||
        er !== ea ||
        (null != ee &&
            ((ea = null),
            (0, f.dK)(er, "renderer_window_refreshing_finished"),
            ee.readyToShow?.(er),
            a.A.updateOverlayState(er, _.AR.OVERLAY_RENDERING, "checkPopoutRefresh"),
            Q.verbose(`Showing overlay v3 for pid ${er}`)));
}
function eh(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e) {
        let t = ed[e] === _.Ue.OutOfProcessLimitedInteraction;
        if (t !== el) {
            el = t;
            try {
                "function" == typeof ee?.setLimitedInteraction
                    ? (Q.info("Setting limited interaction", t),
                      (0, f._r)(e, "focus_and_interaction_set", { isLimitedInteraction: t, focusable: !t }),
                      ee.setLimitedInteraction(t))
                    : Q.info("No setLimitedInteraction function found, skipping");
            } catch (t) {
                (Q.error("Error setting limited interaction mode:", t), (0, f.mD)(e, t, { crashType: "native" }));
            }
        }
    }
    a.A.setFocusedPID(0 === e ? null : e, t, n);
}
function eI() {
    eh(null, null, !0);
}
function ep(e) {
    if (A.A.getPopoutInitializationStages().allDone) {
        if (!Z.has(e))
            return void a.A.updateOverlayState(e, _.AR.WAITING_FOR_SUCCESSFUL_SHOW, "maybeTrackSuccessfullyShown");
        a.A.successfullyShown(e);
    }
}
async function em() {
    (g.A.isModuleLoaded || g.A.isModuleLoading || (await (0, f.P_)()),
        (ee = await (async function () {
            let e,
                t = g.A.isModuleLoaded,
                n = g.A.getNativeModule();
            if (t && null != n) return (await (0, X.yy)(1e3), n);
            if (t && null == n) throw Error("Native module loaded but not found in store");
            let i = new Promise((e) => {
                setTimeout(() => {
                    e();
                }, 5e3);
            });
            function a() {
                e?.();
            }
            let s = new Promise((t) => {
                ((e = t),
                    r.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
                    r.h.subscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a));
            });
            try {
                await Promise.race([i, s]);
            } finally {
                (r.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS", a),
                    r.h.unsubscribe("OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED", a));
            }
            return g.A.getNativeModule();
        })()));
}
function eg(e) {
    let { pid: t, windowHandle: n } = e;
    return (
        null != n && null != t && eu(t, (0, M.Oy)(n)),
        (et !== t || en !== n) &&
            (0, f._r)(t ?? et ?? -1, "overlay_focused", { focusedPID: t, focusedWindowHandle: en, windowHandle: n }),
        (et = t),
        (en = n),
        !0
    );
}
class eT extends i.Ay.Store {
    static displayName = "Overlay-V3-Store";
    initialize() {
        this.waitFor(o.default, d.A, y, Y, K.A, $.A, g.A, A.A, l.Ay);
    }
    isOverlayV3EnabledForPID(e) {
        return J.has(e);
    }
    getWidgetByType(e) {
        let t = d.A.getLayout(q.GJ);
        if (null != t) {
            let n = t.widgets.find((t) => {
                let n = d.A.getWidget(t);
                return null != n && n.type === e;
            });
            if (null != n) return d.A.getWidget(n) ?? null;
        }
        return null;
    }
    isPinned(e) {
        let t = this.getWidgetByType(e);
        return null != t && t.pinned;
    }
    getTargetPID() {
        return (0, z.LK)() && (-1 === ei || null == ei) ? c.DEV_PID : (ei ?? -1);
    }
    getFocusedPID() {
        return et;
    }
    getNativeLimitedInteraction() {
        return el;
    }
    getFocusedWindowHandle() {
        return en;
    }
    getKnownWindowHandlesForPID(e) {
        return null == ec[e] ? null : ec[e];
    }
    isFocused(e) {
        return null != et && -1 !== e && (!!J.has(e) || e === c.DEV_PID) && et === e;
    }
    getFocusedRunningGame() {
        return null == et ? null : (l.Ay.getGameOrTransformedSubgameForPID(et) ?? null);
    }
    isReady(e) {
        return !!J.has(e) && eo[e] === _.AR.OVERLAY_RENDERING;
    }
    getOverlayState(e) {
        return eo[e] ?? null;
    }
    getIsOverlayPreShown(e) {
        let t = eo[e];
        return null != t && M.Ms.has(t);
    }
    getOverlayMethod(e) {
        return ed[e] ?? null;
    }
}
let eS = new eT(
        r.h,
        __OVERLAY__ || !u.O
            ? { OVERLAY_FOCUSED: eg }
            : {
                  OVERLAY_UPDATE_OVERLAY_METHOD: function (e) {
                      (Q.verbose("Updating OverlayMethod", e),
                          (async function (e) {
                              (e.overlayMethod === _.Ue.OutOfProcess ||
                              e.overlayMethod === _.Ue.OutOfProcessLimitedInteraction
                                  ? (await em(), e_(e.pid, e.overlayMethod))
                                  : eE(e.pid),
                                  eS.emitChange());
                          })(e));
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      eo[e.pid] = e.overlayState;
                  },
                  OVERLAY_FOCUSED: eg,
                  OVERLAY_OOP_UI_INITIALIZED: function () {
                      J.forEach((e) => {
                          ep(e);
                      });
                  },
                  OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: function () {
                      ee?.onNativePopoutShowInactiveSuccess?.();
                  },
                  OVERLAY_UI_FOCUSED_PID: function (e) {
                      let { pid: t, windowHandle: n } = e;
                      ((er = t),
                          ef(),
                          null != n && null != t && eu(t, (0, M.Oy)(n)),
                          null != ee &&
                              (null != n || ee.version?.() > 0) &&
                              ee.setRenderingWindowHandle?.((0, M.Oy)(n ?? "0"), t));
                  },
                  OVERLAY_V3_PRE_CREATE_POPOUT: function () {
                      el = null;
                  },
                  OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                      let { createWindowTriggeringPID: t } = e;
                      (eA(t), (es = t), (ei = t), (0, c.is)(t));
                  },
                  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                      let { createWindowTriggeringPID: t, nativeWindowHandle: n } = e;
                      a.A.updateOverlayState(
                          t,
                          _.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
                          "handleOverlayCreateWindowHandleSuccess",
                      );
                  },
                  OVERLAY_V3_WINDOW_CREATION_FAILURE: function (e) {
                      let { createWindowTriggeringPID: t, error: n, nativeWindowHandle: i } = e;
                      (a.A.updateOverlayState(t, _.AR.OVERLAY_CRASHED_DISABLED, "handleOverlayWindowCreationFailure"),
                          (0, f._r)(t, "renderer_window_mounting_failed", {
                              error: n,
                              popoutInitializationStages: A.A.getPopoutInitializationStages(),
                          }));
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: function () {
                      ((ee = g.A.getNativeModule()),
                          (async function () {
                              if (!g.A.isOverlayEnabled)
                                  return void (function () {
                                      try {
                                          for (let e of J) ee?.untrackGame(e);
                                          (J.clear(),
                                              (0, f._r)(null, "clearTrackedGames"),
                                              (eo = {}),
                                              (ed = {}),
                                              Z.clear(),
                                              Q.verbose("Cleared all tracked games"));
                                      } catch (e) {
                                          (Q.error("Error clearing tracked games:", e),
                                              (0, f.mD)(-1, e, { crashType: "native" }));
                                      }
                                  })();
                              await em();
                              let e = new Set(
                                  l.Ay.getRunningGames()
                                      .filter((e) => l.Ay.getOverlayEnabledForGame(e))
                                      .map((e) => e.pid),
                              );
                              for (let t of new Set([...J].filter((t) => !e.has(t)))) eE(t);
                              for (let e of J) e_(e);
                          })());
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: function () {
                      ee = null;
                  },
                  OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: function (e) {
                      let { refreshingPID: t } = e;
                      return (
                          Q.verbose(`Refreshing OOP host window for pid ${t}`),
                          (ea = t),
                          (es = t),
                          (ei = t),
                          (0, c.is)(t),
                          eA(t),
                          ef(),
                          !0
                      );
                  },
                  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function () {
                      var e;
                      (eI(),
                          null != es && null != ec[(e = es)] && (ec[e] = new Set()),
                          (es = null),
                          (ei = null),
                          (0, c.is)(-1),
                          (el = null));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_GAINED: function (e) {
                      let { pid: t, windowHandle: n, windowClass: i } = e;
                      null != i && E.has(i)
                          ? eI()
                          : (eh(t, null != n ? (0, M.Oy)(n) : null),
                            t !== et && Q.info("OverlayStore: Focused new PID", t));
                  },
                  OVERLAY_V3_NATIVE_FOCUS_LOST: function () {
                      eI();
                  },
                  OVERLAY_V3_NATIVE_SUCCESSFULLY_SHOWN: function (e) {
                      let { pid: t } = e;
                      (Z.add(t), ep(t));
                  },
                  OVERLAY_V3_NATIVE_WINDOW_HANDLE_INITIALIZED: function (e) {
                      let { initialized: t } = e;
                      if (t) {
                          let e = ei ?? -1;
                          (A.A.getPopoutInitializationStages().reactInitializationStarted
                              ? a.A.updateOverlayState(
                                    e,
                                    _.AR.WAITING_FOR_SUCCESSFUL_SHOW,
                                    "handleOverlayV3WindowHandleInitialized",
                                )
                              : a.A.updateOverlayState(
                                    e,
                                    _.AR.WAITING_FOR_REACT_INITIALIZATION,
                                    "handleOverlayV3WindowHandleInitialized",
                                ),
                              (0, f._r)(e, "window_handle_initialized"));
                      }
                  },
              },
    ),
    eN = eS;
