"use strict";
n.d(t, { A: () => T });
var r = n(311907),
    i = n(73153),
    s = n(15285),
    a = n(954571),
    o = n(9302),
    l = n(777334),
    u = n(206885),
    c = n(41984),
    d = n(833551),
    _ = n(515183),
    f = n(680243),
    p = n(652215);
let h = {};
function E(e) {
    return d.default.getTrackedGameByPid(e)?.overlayMethod ?? null;
}
function m(e) {
    return h[e] ?? {};
}
function g(e, t) {
    let n = h[e]?.error,
        r = h[e]?.error_description;
    (h[e] = { ...h[e], ...t }), null != n && (h[e].error = n), null != r && (h[e].error_description = r);
}
function A(e, t) {
    let n = s.Ay.getGameOrTransformedSubgameForPID(e);
    return { crash_type: t, gameName: n?.name };
}
class I extends r.Ay.Store {
    static displayName = "Overlay-v3-Native-Analytics-Store";
    initialize() {
        this.waitFor(d.default, f.A, s.Ay);
    }
    getData(e) {
        return m(e);
    }
    getCrashExtra(e, t) {
        return A(e, t);
    }
}
let T = new I(
    i.h,
    __OVERLAY__ || !u.O
        ? {}
        : {
              OVERLAY_V3_PRE_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e;
                  return g(t, { mounting_started_at: new Date().getTime() }), !0;
              },
              OVERLAY_V3_POST_CREATE_POPOUT: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = m(t)?.mounting_started_at ?? new Date().getTime(),
                      r = {
                          renderer_started: !0,
                          fullscreen_type: (0, _.ph)(t),
                          graphics_info_after: new Date().getTime() - n,
                      };
                  return g(t, r), !0;
              },
              OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: function (e) {
                  let { createWindowTriggeringPID: t } = e,
                      n = m(t)?.mounting_started_at ?? new Date().getTime();
                  return g(t, { renderer_started_after: new Date().getTime() - n }), !0;
              },
              OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: function (e) {
                  let { lastAssociatedPID: t } = e;
                  if (t !== o.UNSET_PID) return a.default.track(p.HAw.OVERLAY_HOOK_RESULT, m(t)), (h = {}), !0;
              },
              OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                  let t,
                      { pid: n } = e,
                      r = m(n)?.mounting_started_at ?? new Date().getTime();
                  return (
                      g(n, { total_mount_time_ms: null != r ? new Date().getTime() - r : void 0, success: !0 }),
                      (t = E(n)),
                      (h[n] = { ...h[n], overlay_method: null != t ? c.Ue[t] : c.Ue[c.Ue.OutOfProcess] }),
                      !0
                  );
              },
              OVERLAY_CRASHED: function (e) {
                  let { pid: t, error: n, crashType: r } = e,
                      i = n instanceof Error ? n : Error(n ?? "Unknown error");
                  return (
                      "native" === r
                          ? (t !== o.UNSET_PID &&
                                g(t, { host_crash_count: 1, error: i.message, error_description: i.stack }),
                            (0, l.St)(i, c.Ue.OutOfProcess, { extra: A(t, "host") }))
                          : (t !== o.UNSET_PID &&
                                g(t, { renderer_crash_count: 1, error: i.message, error_description: i.stack }),
                            (0, l.St)(i, c.Ue.OutOfProcess, { extra: A(t, "renderer") })),
                      !0
                  );
              },
              OVERLAY_V3_NATIVE_TRACK_GAME: function (e) {
                  let { pid: t } = e;
                  return (
                      !(function (e) {
                          if (null != h[e]) return;
                          let t = s.Ay.getGameOrTransformedSubgameForPID(e),
                              n = E(e);
                          h[e] = {
                              overlay_method: null != n ? c.Ue[n] : c.Ue[c.Ue.OutOfProcess],
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
