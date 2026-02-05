"use strict";
n.d(t, { A: () => N });
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
    p = {},
    h = {},
    m = {},
    g = {},
    E = new Set(),
    A = new Set(),
    I = "apexTrackedExposures",
    T = 2,
    y = 6048e5,
    S = {},
    v = 3,
    C = {};
function b(e) {
    let t = C[e];
    return null == t && ((t = i().v3(e)), (C[e] = t)), t;
}
class N extends a.Ay.PersistedStore {
    static displayName = "ApexExperimentStore";
    static persistKey = "ApexExperimentStore";
    track = () => Promise.resolve();
    surface = "unset";
    loadStoredState(e, t) {
        for (let n in (null != e && e.version === v
            ? ((p = e.clientOverrides), (_ = e.evaluatedExperiments))
            : null != e &&
              2 === e.version &&
              ((p = e.clientOverrides), (_ = { ...e.evaluatedExperiments, installation: {} })),
        (m = {}),
        t)) {
            let e = b(n),
                r = t[n];
            m[n] = { hashedName: e, variantId: r, isOverride: !0, exposureTrackingEnabled: !1 };
        }
        S = this.loadTrackedExposures();
    }
    getState() {
        return { version: v, evaluatedExperiments: _, clientOverrides: p };
    }
    setExperimentAssignments(e) {
        if (null == e) return !1;
        for (let t of (this.clearSessionOverrides(), d)) {
            let n = l.ag[t],
                r = e.assignments[t];
            if (null == r || null == n) continue;
            let i = _[n];
            for (let e in r) {
                A.add(e);
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
                        });
            }
        }
        return !0;
    }
    createOverride(e, t) {
        (p = { ...p, [e]: { hashedName: b(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } }),
            this.trackExposureSuppression(e, "client_override");
    }
    deleteOverride(e) {
        let { [e]: t, ...n } = p;
        p = n;
    }
    createSessionOverride(e, t) {
        h = { ...h, [e]: { hashedName: b(e), variantId: t, isOverride: !0, exposureTrackingEnabled: !1 } };
    }
    deleteSessionOverride(e) {
        let { [e]: t, ...n } = h;
        h = n;
    }
    setExperimentsMetadata(e) {
        g = { ...g, ...Object.fromEntries(e.map((e) => [e.name, e])) };
    }
    getExperimentsMetadata() {
        return g;
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
        (f[e.name] = e), null != m[e.name] && this.trackExposureSuppression(e.name, "cookie_override");
    }
    getRegisteredExperiments() {
        return f;
    }
    getAssignment(e, t, n) {
        let r = this.getOverride(n);
        return null != r ? r : this.getServerAssignment(e, t, n);
    }
    getServerAssignment(e, t, n) {
        let r = b(n),
            i = _[e][t];
        if (null != i) return i.assignments[r];
    }
    getEvaluation(e, t) {
        return _[e][t]?.evaluationId;
    }
    getEvaluationAndAssignment(e, t, n) {
        let r = this.getOverride(n);
        if (null != r) return [void 0, r];
        let i = _[e][t];
        return null == i ? [void 0, void 0] : [i.evaluationId, i.assignments[b(n)]];
    }
    trackExperimentExposure(e, t, n, r, i, a, s) {
        let o = b(`${t}|${i}|${a}|${n}`);
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
            (S[o] = Date.now()),
            this.saveTrackedExposures(S));
    }
    trackCommonTriggerPointExposures(e) {
        for (let t of ["user", "installation"])
            for (let { evaluationId: n, unitId: r } of this.evaluationsWithUnitIds(t)) {
                let i = b(`${n}|${e}`);
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
                    (S[i] = Date.now()),
                    this.saveTrackedExposures(S));
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
        let t = S[e];
        return null == t || Date.now() - t > y;
    }
    loadTrackedExposures() {
        let e = o.w.get(I);
        if (null == e || e.version !== T) return {};
        let t = e.exposures,
            n = Date.now(),
            r = !1;
        for (let e in t) n - t[e] > y && (delete t[e], (r = !0));
        return r && this.saveTrackedExposures(t), t;
    }
    saveTrackedExposures(e) {
        try {
            o.w.set(I, { version: T, exposures: e });
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
            E.clear(),
            A.clear();
    }
    clearAllServerAssignments() {
        _ = { user: {}, guild: {}, installation: {} };
    }
    clearUserServerAssignments() {
        _ = { user: {}, guild: {}, installation: _.installation };
    }
    clearAllOverrides() {
        (p = {}), (h = {}), (m = {});
    }
    clearSessionOverrides() {
        h = {};
    }
    clearAllTrackedExposures() {
        S = {};
    }
    getHash(e) {
        return b(e);
    }
    handleFetchStart(e) {
        E.add(e);
    }
    handleFetchSuccess(e, t) {
        E.delete(e), A.add(e), this.setExperimentAssignments(t);
    }
    handleFetchFailure(e) {
        E.delete(e), A.add(e);
    }
    isFetching(e) {
        return E.has(e);
    }
    hasLoaded(e) {
        return A.has(e);
    }
    getOverride(e) {
        return h[e] ?? p[e] ?? m[e];
    }
}
