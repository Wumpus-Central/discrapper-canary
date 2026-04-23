"use strict";
n.d(t, { A: () => N });
var r = n(181370),
    i = n.n(r),
    s = n(311907),
    a = n(118356),
    o = n(506774),
    l = n(445397),
    u = n(818348);
let c = new a.Vy("ApexExperimentStore");
(null == window.TextEncoder || null == window.TextDecoder) && n(283346);
let d = [l.ni.User, l.ni.Installation],
    _ = { user: {}, guild: {}, installation: {} },
    f = {},
    p = {},
    h = {},
    E = {},
    m = {},
    g = new Set(),
    A = new Set(),
    I = "apexTrackedExposures",
    T = {},
    S = {};
function y(e) {
    let t = S[e];
    return null == t && ((t = i().v3(e)), (S[e] = t)), t;
}
class N extends s.Ay.PersistedStore {
    static displayName = "ApexExperimentStore";
    static persistKey = "ApexExperimentStore";
    track = () => Promise.resolve();
    surface = "unset";
    loadStoredState(e, t) {
        for (let n in (null != e && 3 === e.version
            ? ((p = e.clientOverrides), (_ = e.evaluatedExperiments))
            : null != e &&
              2 === e.version &&
              ((p = e.clientOverrides), (_ = { ...e.evaluatedExperiments, installation: {} })),
        (E = {}),
        t)) {
            let e = y(n),
                r = t[n];
            E[n] = { hashedName: e, variantId: r, isOverride: !0, exposureTrackingEnabled: !1, useAsEligibility: !1 };
        }
        T = this.loadTrackedExposures();
    }
    getState() {
        return { version: 3, evaluatedExperiments: _, clientOverrides: p };
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
                    A.add(e);
                    let { evaluation_id: t, assignments: n } = r[e],
                        s = { evaluationId: t ?? void 0, assignments: {} };
                    for (let [t, r, a, o, u] of ((i[e] = s), n))
                        (a ??= 0),
                            (s.assignments[t] = {
                                hashedName: t,
                                variantId: r,
                                trackedVariantId: u,
                                isOverride: (a & l.fd.IsOverride) != 0,
                                revision: o,
                                exposureTrackingEnabled: (a & l.fd.ExposureTrackingEnabled) != 0,
                                useAsEligibility: (a & l.fd.UseAsEligibility) != 0,
                            });
                }
            }
        return null != t && this.setGuildExperimentAssignments(t), !0;
    }
    setGuildExperimentAssignments(e) {
        let t = _.guild;
        for (let [n, r] of Object.entries(e ?? {})) {
            let { evaluation_id: e, assignments: i } = r,
                s = { evaluationId: e ?? void 0, assignments: {} };
            for (let [e, r, a, o, u] of ((t[n] = s), i)) {
                let t = {
                    hashedName: e,
                    variantId: r,
                    trackedVariantId: u,
                    isOverride: ((a ??= 0) & l.fd.IsOverride) != 0,
                    revision: o,
                    exposureTrackingEnabled: (a & l.fd.ExposureTrackingEnabled) != 0,
                    useAsEligibility: (a & l.fd.UseAsEligibility) != 0,
                };
                s.assignments[e] = t;
            }
        }
    }
    createOverride(e, t) {
        (p = { ...p, [e]: { hashedName: y(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } }),
            this.trackExposureSuppression(e, "client_override");
    }
    deleteOverride(e) {
        let { [e]: t, ...n } = p;
        p = n;
    }
    createSessionOverride(e, t) {
        h = { ...h, [e]: { hashedName: y(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } };
    }
    deleteSessionOverride(e) {
        let { [e]: t, ...n } = h;
        h = n;
    }
    setExperimentsMetadata(e) {
        m = { ...m, ...Object.fromEntries(e.map((e) => [e.name, e])) };
    }
    getExperimentsMetadata() {
        return m;
    }
    getClientOverrides() {
        return p;
    }
    getSessionOverrides() {
        return h;
    }
    getExperimentClientOverride(e) {
        return p[e];
    }
    getExperimentSessionOverride(e) {
        return h[e];
    }
    handleLogout(e) {
        e || (this.clearUserServerAssignments(), this.clearSessionOverrides()),
            o.w.remove(I),
            this.clearAllTrackedExposures();
    }
    registerExperiment(e) {
        (f[e.name] = e), null != E[e.name] && this.trackExposureSuppression(e.name, "cookie_override");
    }
    getRegisteredExperiments() {
        return f;
    }
    getAssignment(e, t, n) {
        let r = this.getOverride(n);
        return null != r ? r : this.getServerAssignment(e, t, n);
    }
    getServerAssignment(e, t, n) {
        let r = y(n),
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
        return null == i ? [void 0, void 0] : [i.evaluationId, i.assignments[y(n)]];
    }
    getEvaluationAndAssignment(e, t, n, r) {
        let [i, s] = this.getEvaluationAndAssignmentInner(e, t, n);
        if ("guild" !== e) return [i, s];
        {
            let e = r ?? l.hR,
                [t, a] = this.getEvaluationAndAssignmentInner("user", e, n);
            if (null == a) return [void 0, void 0];
            if (a.isOverride) return [i, a];
            if (!a.useAsEligibility) return [void 0, void 0];
            else if (null == s) return [void 0, void 0];
            else if (null != s.variantId) return [i, s];
            else return [void 0, void 0];
        }
    }
    trackExperimentExposure(e, t, n, r, i, s, a) {
        let o = y(`${t}|${i}|${s}|${n}|${a}|1`);
        "user" === r
            ? this.withExposureTracking(o, () =>
                  this.track(
                      u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                      { evaluation_id: e, experiment: t, exposure_location: n, unit_type: r, tracked_variation_id: s },
                      { flush: !0 },
                  ),
              )
            : "installation" === r
              ? this.withExposureTracking(o, () =>
                    this.track(
                        u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                        {
                            evaluation_id: e,
                            installation_id: a,
                            experiment: t,
                            exposure_location: n,
                            unit_type: r,
                            tracked_variation_id: s,
                        },
                        { flush: !0 },
                    ),
                )
              : "guild" === r &&
                this.withExposureTracking(o, () =>
                    this.track(
                        u.sE.EXPERIMENT_GUILD_EVALUATION_EXPOSED,
                        {
                            evaluation_id: e,
                            guild_id: a,
                            experiment: t,
                            exposure_location: n,
                            unit_type: r,
                            tracked_variation_id: s,
                            revision: i,
                        },
                        { flush: !0 },
                    ),
                );
    }
    trackCommonTriggerPointExposures(e) {
        for (let { evaluationId: t } of this.evaluationsWithUnitIds("user")) {
            let n = y(`${t}|${e}`);
            this.withExposureTracking(n, () =>
                this.track(
                    u.sE.EXPERIMENT_USER_EVALUATION_EXPOSED,
                    { evaluation_id: t, exposure_location: e, unit_type: "user" },
                    { flush: !0 },
                ),
            );
        }
        for (let { evaluationId: t, unitId: n } of this.evaluationsWithUnitIds("installation")) {
            let r = y(`${t}|${e}`);
            this.withExposureTracking(r, () =>
                this.track(
                    u.sE.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED,
                    { evaluation_id: t, exposure_location: e, unit_type: "installation", installation_id: n },
                    { flush: !0 },
                ),
            );
        }
    }
    withExposureTracking(e, t) {
        this.shouldTrackExposure(e) && (t(), (T[e] = Date.now()), this.saveTrackedExposures(T));
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
            } else if ("guild" === n.kind) {
                let r = Object.keys(_.guild)[0];
                null != r &&
                    this.track(
                        u.sE.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED,
                        { experiment: e, unit_type: n.kind, suppression_source: t, guild_id: r },
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
        let t = T[e];
        return null == t || Date.now() - t > 6048e5;
    }
    loadTrackedExposures() {
        let e = o.w.get(I);
        if (null == e || 2 !== e.version) return {};
        let t = e.exposures,
            n = Date.now(),
            r = !1;
        for (let e in t) n - t[e] > 6048e5 && (delete t[e], (r = !0));
        return r && this.saveTrackedExposures(t), t;
    }
    saveTrackedExposures(e) {
        try {
            o.w.set(I, { version: 2, exposures: e });
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
            g.clear(),
            A.clear();
    }
    clearAllServerAssignments() {
        _ = { user: {}, guild: {}, installation: {} };
    }
    clearUserServerAssignments() {
        _ = { user: {}, guild: {}, installation: _.installation };
    }
    clearAllOverrides() {
        (p = {}), (h = {}), (E = {});
    }
    clearSessionOverrides() {
        h = {};
    }
    clearAllTrackedExposures() {
        T = {};
    }
    getHash(e) {
        return y(e);
    }
    handleFetchStart(e) {
        g.add(e);
    }
    handleFetchSuccess(e, t) {
        g.delete(e), A.add(e), this.setExperimentAssignments(t);
    }
    handleFetchFailure(e) {
        g.delete(e), A.add(e);
    }
    isFetching(e) {
        return g.has(e);
    }
    hasLoaded(e) {
        return A.has(e);
    }
    getOverride(e) {
        return h[e] ?? p[e] ?? E[e];
    }
}
