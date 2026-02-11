"use strict";
n.d(t, { A: () => R });
var r = n(181370),
    i = n.n(r),
    a = n(311907),
    s = n(118356),
    o = n(506774),
    l = n(445397),
    u = n(818348);
let c = new s.Vy("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && n(283346);
let d = [l.ni.User, l.ni.Installation],
    _ = { user: {}, guild: {}, installation: {} },
    f = {},
    h = {},
    p = {},
    g = {},
    E = {},
    A = new Set(),
    I = new Set(),
    T = "apexTrackedExposures",
    y = 2,
    S = 6048e5,
    v = {},
    C = 3,
    b = {};
function N(e) {
    let t = b[e];
    return null == t && ((t = i().v3(e)), (b[e] = t)), t;
}
class R extends a.Ay.PersistedStore {
    static displayName = "ApexExperimentStore";
    static persistKey = "ApexExperimentStore";
    track = () => Promise.resolve();
    surface = "unset";
    loadStoredState(e, t) {
        for (let n in (null != e && e.version === C
            ? ((h = e.clientOverrides), (_ = e.evaluatedExperiments))
            : null != e &&
              2 === e.version &&
              ((h = e.clientOverrides), (_ = { ...e.evaluatedExperiments, installation: {} })),
        (g = {}),
        t)) {
            let e = N(n),
                r = t[n];
            g[n] = { hashedName: e, variantId: r, isOverride: !0, exposureTrackingEnabled: !1, useAsEligibility: !1 };
        }
        v = this.loadTrackedExposures();
    }
    getState() {
        return { version: C, evaluatedExperiments: _, clientOverrides: h };
    }
    setExperimentAssignments(e, t) {
        if (null == e && null == t) return !1;
        if ((this.clearSessionOverrides(), null != e))
            for (let t of d) {
                let n = l.ag[t],
                    r = e.assignments[t];
                if (null == r || null == n) continue;
                let i = _[n];
                for (let e in r) {
                    I.add(e);
                    let { evaluation_id: t, assignments: n } = r[e],
                        a = { evaluationId: t ?? void 0, assignments: {} };
                    for (let [t, r, s, o, u] of ((i[e] = a), n))
                        (s ??= 0),
                            (a.assignments[t] = {
                                hashedName: t,
                                variantId: r,
                                trackedVariantId: u,
                                isOverride: (s & l.fd.IsOverride) != 0,
                                revision: o,
                                exposureTrackingEnabled: (s & l.fd.ExposureTrackingEnabled) != 0,
                                useAsEligibility: (s & l.fd.UseAsEligibility) != 0,
                            });
                }
            }
        return null != t && this.setGuildExperimentAssignments(t), !0;
    }
    setGuildExperimentAssignments(e) {
        let t = _.guild;
        for (let [n, r] of Object.entries(e ?? {})) {
            let { evaluation_id: e, assignments: i } = r,
                a = { evaluationId: e ?? void 0, assignments: {} };
            for (let [e, r, s, o, u] of ((t[n] = a), i)) {
                let t = {
                    hashedName: e,
                    variantId: r,
                    trackedVariantId: u,
                    isOverride: ((s ??= 0) & l.fd.IsOverride) != 0,
                    revision: o,
                    exposureTrackingEnabled: (s & l.fd.ExposureTrackingEnabled) != 0,
                    useAsEligibility: (s & l.fd.UseAsEligibility) != 0,
                };
                a.assignments[e] = t;
            }
        }
    }
    createOverride(e, t) {
        (h = { ...h, [e]: { hashedName: N(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } }),
            this.trackExposureSuppression(e, "client_override");
    }
    deleteOverride(e) {
        let { [e]: t, ...n } = h;
        h = n;
    }
    createSessionOverride(e, t) {
        p = { ...p, [e]: { hashedName: N(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } };
    }
    deleteSessionOverride(e) {
        let { [e]: t, ...n } = p;
        p = n;
    }
    setExperimentsMetadata(e) {
        E = { ...E, ...Object.fromEntries(e.map((e) => [e.name, e])) };
    }
    getExperimentsMetadata() {
        return E;
    }
    getClientOverrides() {
        return h;
    }
    getSessionOverrides() {
        return p;
    }
    getExperimentClientOverride(e) {
        return h[e];
    }
    getExperimentSessionOverride(e) {
        return p[e];
    }
    handleLogout(e) {
        e || (this.clearUserServerAssignments(), this.clearSessionOverrides()),
            o.w.remove(T),
            this.clearAllTrackedExposures();
    }
    registerExperiment(e) {
        (f[e.name] = e), null != g[e.name] && this.trackExposureSuppression(e.name, "cookie_override");
    }
    getRegisteredExperiments() {
        return f;
    }
    getAssignment(e, t, n) {
        let r = this.getOverride(n);
        return null != r ? r : this.getServerAssignment(e, t, n);
    }
    getServerAssignment(e, t, n) {
        let r = N(n),
            i = _[e][t];
        if (null != i) return i.assignments[r];
    }
    getEvaluation(e, t) {
        return _[e][t]?.evaluationId;
    }
    getEvaluationAndAssignmentInner(e, t, n) {
        let r = this.getOverride(n);
        if (null != r) return [void 0, r];
        let i = _[e][t];
        return null == i ? [void 0, void 0] : [i.evaluationId, i.assignments[N(n)]];
    }
    getEvaluationAndAssignment(e, t, n, r) {
        let [i, a] = this.getEvaluationAndAssignmentInner(e, t, n);
        if ("guild" !== e) return [i, a];
        {
            if (null == r) return a?.isOverride ? [i, a] : [i, void 0];
            let [e, t] = this.getEvaluationAndAssignmentInner("user", r, n);
            return t?.isOverride
                ? [i, t]
                : a?.isOverride
                  ? [i, a]
                  : t?.useAsEligibility && a?.variantId != null
                    ? [i, a]
                    : [void 0, void 0];
        }
    }
    trackExperimentExposure(e, t, n, r, i, a, s) {
        let o = N(`${t}|${i}|${a}|${n}`);
        this.shouldTrackExposure(o) &&
            ("user" === r
                ? this.track(
                      u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                      { evaluation_id: e, experiment: t, exposure_location: n, unit_type: r, tracked_variation_id: a },
                      { flush: !0 },
                  )
                : "installation" === r &&
                  this.track(
                      u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                      {
                          evaluation_id: e,
                          installation_id: s,
                          experiment: t,
                          exposure_location: n,
                          unit_type: r,
                          tracked_variation_id: a,
                      },
                      { flush: !0 },
                  ),
            (v[o] = Date.now()),
            this.saveTrackedExposures(v));
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of ["user", "installation"])
            for (let { evaluationId: n, unitId: r } of this.evaluationsWithUnitIds(t)) {
                let i = N(`${n}|${e}`);
                this.shouldTrackExposure(i) &&
                    ("user" === t
                        ? this.track(
                              u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                              { evaluation_id: n, exposure_location: e, unit_type: t },
                              { flush: !0 },
                          )
                        : this.track(
                              u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                              { evaluation_id: n, exposure_location: e, unit_type: t, installation_id: r },
                              { flush: !0 },
                          ),
                    (v[i] = Date.now()),
                    this.saveTrackedExposures(v));
            }
    }
    trackExposureSuppression(e, t) {
        let n = f[e];
        if (null != n) {
            if ("user" === n.kind)
                this.track(
                    u.sE.EXPERIMENT_USER_EXPOSURE_SUPPRESSED,
                    { experiment: e, unit_type: n.kind, suppression_source: t },
                    { flush: !0 },
                );
            else if ("installation" === n.kind) {
                let r = Object.keys(_.installation)[0];
                null != r &&
                    this.track(
                        u.sE.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED,
                        { experiment: e, unit_type: n.kind, suppression_source: t, installation_id: r },
                        { flush: !0 },
                    );
            }
        }
    }
    evaluationIds(e) {
        return Object.values(_[e])
            .map((e) => e.evaluationId)
            .filter((e) => null != e);
    }
    evaluationsWithUnitIds(e) {
        return Object.entries(_[e])
            .filter((e) => {
                let [t, n] = e;
                return null != n.evaluationId;
            })
            .map((e) => {
                let [t, n] = e;
                return { evaluationId: n.evaluationId, unitId: t };
            });
    }
    shouldTrackExposure(e) {
        let t = v[e];
        return null == t || Date.now() - t > S;
    }
    loadTrackedExposures() {
        let e = o.w.get(T);
        if (null == e || e.version !== y) return {};
        let t = e.exposures,
            n = Date.now(),
            r = !1;
        for (let e in t) n - t[e] > S && (delete t[e], (r = !0));
        return r && this.saveTrackedExposures(t), t;
    }
    saveTrackedExposures(e) {
        try {
            o.w.set(T, { version: y, exposures: e });
        } catch (e) {
            c.error("Error saving tracked exposures", e),
                this.track(
                    u.sE.EXPERIMENT_SAVE_EXPOSURE_FAILED,
                    { module: this.surface, call: "ApexExperimentStore.saveTrackedExposures" },
                    { flush: !0 },
                );
        }
    }
    clearForTests() {
        this.clearAllServerAssignments(),
            this.clearAllOverrides(),
            this.clearAllTrackedExposures(),
            A.clear(),
            I.clear();
    }
    clearAllServerAssignments() {
        _ = { user: {}, guild: {}, installation: {} };
    }
    clearUserServerAssignments() {
        _ = { user: {}, guild: {}, installation: _.installation };
    }
    clearAllOverrides() {
        (h = {}), (p = {}), (g = {});
    }
    clearSessionOverrides() {
        p = {};
    }
    clearAllTrackedExposures() {
        v = {};
    }
    getHash(e) {
        return N(e);
    }
    handleFetchStart(e) {
        A.add(e);
    }
    handleFetchSuccess(e, t) {
        A.delete(e), I.add(e), this.setExperimentAssignments(t);
    }
    handleFetchFailure(e) {
        A.delete(e), I.add(e);
    }
    isFetching(e) {
        return A.has(e);
    }
    hasLoaded(e) {
        return I.has(e);
    }
    getOverride(e) {
        return p[e] ?? h[e] ?? g[e];
    }
}
