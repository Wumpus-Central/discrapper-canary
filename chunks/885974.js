d.d(t, { Ni: () => a.n, ET: () => r, lv: () => a.t, noOpFlowModuleMachine: () => u }), d(871178), d(768672);
var i = d(368499);
d(288052), d(599078), d(943956), d(28134), d(749378), d(768816), d(806374);
var e = d(168056);
d(769308);
var c = d(77254);
d(861654), d(802016);
var a = d(426476),
    s = d(320102);
function n(l) {
    return l.flow?.flowId;
}
function Z(l, t) {
    let d = l.homeScreen?.visible === !0,
        i = t || d,
        e = void 0 !== l.steps ? l.steps.length + +!!i : void 0;
    if (d) return { key: "0:HOME", module: "HOME", payload: { moduleIndex: 0, totalModules: e } };
    if (void 0 === l.currentStep || "" === l.currentStep) return;
    let c = void 0 !== l.currentStepIndex ? l.currentStepIndex + +!!i : void 0;
    return { key: `${c ?? -1}:${l.currentStep}`, module: l.currentStep, payload: { moduleIndex: c, totalModules: e } };
}
let b = [c.t.NONEXISTENT_CUSTOMER, c.t.HINT_NOT_PROVIDED, c.t.NO_MORE_ATTEMPTS],
    m = (l) => void 0 !== l && b.includes(l),
    o = (0, e.i)(({ sendBack: l, input: t }) => {
        let { machine: d, config: i } = t;
        if (!d) return () => {};
        let c = (0, e.s)(d, { input: { config: i } }),
            a = c.subscribe({
                complete: () => {
                    l({ type: "MODULE_COMPLETE", output: c.getSnapshot().output });
                },
                error: (t) => {
                    l({ type: "MODULE_ERROR", error: t });
                },
            });
        return (
            c.start(),
            () => {
                a.unsubscribe(), c.stop();
            }
        );
    }),
    u = (0, e.t)({}).createMachine({
        id: "noOpFlowModule",
        initial: "finished",
        states: { finished: { type: "final" } },
    });
function h(l, t) {
    let d = { ...l?.configuration, ds: t?.ds };
    return l?.key === "ID" || l?.key === "TUTORIAL_ID" || l?.key === "SECOND_ID" || l?.key === "SELFIE"
        ? { ...d, ageAssurance: d.ageAssurance ?? t?.ageAssurance }
        : d;
}
function W(l, t) {
    return {
        flow: void 0,
        error: void 0,
        errorCode: void 0,
        moduleErrorCode: void 0,
        steps: [],
        currentStepIndex: -1,
        currentStep: void 0,
        config: void 0,
        getFlow: l.getFlow,
        registeredModules: l.registeredModules,
        lazyRegisteredModules: l.lazyRegisteredModules,
        currentModuleMachine: void 0,
        getFinishStatus: l.getFinishStatus,
        enableHome: l.enableHome,
        finishStatus: void 0,
        isHomeContinueLoading: t,
    };
}
(0, e.t)({
    types: { context: {}, events: {}, input: {} },
    actors: { fetchFlow: (0, e.a)(async ({ input: l, signal: t }) => l.getFlow(t)) },
    actions: {
        resetContext: (0, e.r)(({ context: l }) => ({
            flow: void 0,
            error: void 0,
            steps: [],
            currentStepIndex: -1,
            currentStep: void 0,
            config: void 0,
            getFlow: l.getFlow,
        })),
        setFlowData: (0, e.r)(({ event: l }) => {
            let t = l.output;
            return {
                flow: t,
                steps: (t.flowModules ?? []).map((l) => l.key),
                currentStepIndex: (t.flowModules ?? []).length > 0 ? 0 : -1,
                currentStep: t.flowModules?.[0]?.key,
                config: t.flowModules?.[0]?.configuration,
            };
        }),
        setError: (0, e.r)(({ event: l }) => ({ error: String(l.error) })),
        incrementStep: (0, e.r)(({ context: l }) => {
            let t = l.currentStepIndex + 1,
                d = l.flow?.flowModules?.[t];
            return { currentStepIndex: t, currentStep: d?.key, config: d?.configuration };
        }),
        decrementStep: (0, e.r)(({ context: l }) => {
            let t = l.currentStepIndex - 1,
                d = l.flow?.flowModules?.[t];
            return { currentStepIndex: t, currentStep: d?.key, config: d?.configuration };
        }),
    },
    guards: {
        isLastStep: ({ context: l }) => l.currentStepIndex >= 0 && l.currentStepIndex === l.steps.length - 1,
        canGoNext: ({ context: l }) => l.currentStepIndex >= 0 && l.currentStepIndex < l.steps.length - 1,
        canGoPrev: ({ context: l }) => l.currentStepIndex > 0,
    },
}).createMachine({
    id: "flow",
    initial: "idle",
    context: ({ input: l }) => ({
        flow: void 0,
        error: void 0,
        steps: [],
        currentStepIndex: -1,
        currentStep: void 0,
        config: void 0,
        getFlow: l.getFlow,
    }),
    states: {
        idle: { on: { LOAD: { target: "loading", actions: "resetContext" } } },
        loading: {
            invoke: {
                id: "fetchFlow",
                src: "fetchFlow",
                input: ({ context: l }) => ({ getFlow: l.getFlow }),
                onDone: { target: "ready", actions: "setFlowData" },
                onError: { target: "error", actions: "setError" },
            },
            on: { CANCEL: { target: "idle", actions: "resetContext" } },
        },
        ready: {
            on: {
                NEXT_STEP: [
                    { target: "finished", guard: "isLastStep" },
                    { target: "ready", guard: "canGoNext", actions: "incrementStep" },
                ],
                PREV_STEP: { target: "ready", guard: "canGoPrev", actions: "decrementStep" },
                RESET: { target: "idle", actions: "resetContext" },
            },
        },
        finished: { on: { RESET: { target: "idle", actions: "resetContext" } } },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
let G = new WeakSet(),
    p = { HOME_CONTINUE: { actions: "setHomeContinueLoading" } },
    N = (0, e.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            fetchFlow: (0, e.a)(async ({ input: l, signal: t }) => l.getFlow(t)),
            notifyBackend: (0, e.a)(async ({ input: l, signal: t }) => await l.getFinishStatus(l.flowId, t)),
            runChildModule: o,
            resolveCurrentModuleMachine: (0, e.a)(async ({ input: l }) => {
                if (!l.moduleKey) return;
                let t = l.modules[l.moduleKey];
                if (t) return t;
                let d = l.lazyModules[l.moduleKey];
                if (!d) return;
                let i = await d();
                return i && "object" == typeof i && "default" in i && i.default ? i.default : i;
            }),
        },
        actions: {
            resetContext: (0, e.r)(({ context: l }) => W(l, !1)),
            resetContextForLoad: (0, e.r)(({ context: l }) => W(l, l.isHomeContinueLoading)),
            setHomeContinueLoading: (0, e.r)({ isHomeContinueLoading: !0 }),
            clearHomeContinueLoading: (0, e.r)({ isHomeContinueLoading: !1 }),
            setFlowData: (0, e.r)(({ event: l }) => {
                let t = l.output,
                    d = t.flowModules ?? [],
                    i = d[0],
                    e = h(i, t);
                return {
                    flow: t,
                    steps: d.map((l) => l.key),
                    currentStepIndex: d.length > 0 ? 0 : -1,
                    currentStep: i?.key,
                    config: e,
                    currentModuleMachine: void 0,
                };
            }),
            setError: (0, e.r)(({ event: l }) => {
                let t = l.error;
                return { error: t?.message ?? String(t), errorCode: t?.status };
            }),
            incrementStep: (0, e.r)(({ context: l }) => {
                let t = l.currentStepIndex + 1,
                    d = l.flow?.flowModules?.[t],
                    i = h(d, l.flow);
                return { currentStepIndex: t, currentStep: d?.key, config: i, currentModuleMachine: void 0 };
            }),
            setCurrentModuleMachine: (0, e.r)(({ event: l }) => ({ currentModuleMachine: l.output })),
            prefetchNextModule: ({ context: l }) => {
                !(function (l) {
                    let t = l.steps[l.currentStepIndex + 1];
                    if (!t) return;
                    let d = l.lazyRegisteredModules[t];
                    !d ||
                        G.has(d) ||
                        (G.add(d),
                        d().catch(() => {
                            G.delete(d);
                        }));
                })(l);
            },
            setFinishStatus: (0, e.r)(({ event: l }) => ({ finishStatus: l.output })),
            setFinishStatusFailed: (0, e.r)({ moduleErrorCode: "FINISH_STATUS_FAILED" }),
            setModuleErrorCode: (0, e.r)(({ event: l }) => ({ moduleErrorCode: l.moduleErrorCode })),
            trackAdvanceableModuleError: ({ context: l, event: t }) => {
                (0, i.g)({
                    code: "errorTriggered",
                    module: l.currentStep,
                    payload: { errorCode: t.moduleErrorCode, advanced: !0 },
                });
            },
        },
        guards: {
            isAdvanceableModuleError: ({ event: l }) => m(l.moduleErrorCode),
            isAdvanceableModuleErrorOnLastStep: ({ context: l, event: t }) =>
                m(t.moduleErrorCode) && l.currentStepIndex >= 0 && l.currentStepIndex === l.steps.length - 1,
            isLastStep: ({ context: l }) => l.currentStepIndex >= 0 && l.currentStepIndex === l.steps.length - 1,
            canGoNext: ({ context: l }) => l.currentStepIndex >= 0 && l.currentStepIndex < l.steps.length - 1,
            isOnboardingFinishedSignal: ({ event: l }) => l.output?.action === "onboardingFinished",
            shouldEnterHome: ({ context: l }) =>
                (function (l) {
                    if (!0 !== l.enableHome || l.flow?.disableLaunchScreen === !0 || !0 === l.isHomeContinueLoading)
                        return !1;
                    let t = +("REDIRECT_TO_MOBILE" === l.steps[0]);
                    return l.currentStepIndex === t;
                })(l),
            hasModule: ({ context: l, event: t }) => {
                if (!("output" in t)) return !1;
                let d = t.output.flowModules?.[0]?.key;
                return !!d && (null != l.registeredModules[d] || null != l.lazyRegisteredModules[d]);
            },
            hasCurrentModuleMachine: ({ event: l }) => "output" in l && null != l.output,
        },
    }).createMachine({
        id: "orchestratedFlow",
        initial: "idle",
        context: ({ input: l }) =>
            W(
                {
                    getFlow: l.getFlow,
                    registeredModules: l.modules ?? {},
                    lazyRegisteredModules: l.lazyModules ?? {},
                    getFinishStatus: l.getFinishStatus ?? s.n,
                    enableHome: !0 === l.enableHome,
                },
                !1,
            ),
        states: {
            idle: { on: { LOAD: { target: "loading", actions: "resetContextForLoad" }, ...p } },
            loading: {
                invoke: {
                    id: "fetchFlow",
                    src: "fetchFlow",
                    input: ({ context: l }) => ({ getFlow: l.getFlow }),
                    onDone: [
                        { target: "resolvingModule", guard: "hasModule", actions: "setFlowData" },
                        {
                            target: "error",
                            actions: (0, e.r)({
                                error: ({ event: l }) => {
                                    let t = l.output.flowModules?.[0]?.key;
                                    return t
                                        ? `No registered module found for: ${t}`
                                        : "No registered module found: flow has no modules";
                                },
                            }),
                        },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
                on: { CANCEL: { target: "idle", actions: "resetContext" }, ...p },
            },
            resolvingModule: {
                invoke: {
                    id: "resolveCurrentModuleMachine",
                    src: "resolveCurrentModuleMachine",
                    input: ({ context: l }) => ({
                        moduleKey: l.currentStep,
                        modules: l.registeredModules,
                        lazyModules: l.lazyRegisteredModules,
                    }),
                    onDone: [
                        { target: "home", guard: "shouldEnterHome", actions: ["setCurrentModuleMachine"] },
                        {
                            target: "runningModule",
                            guard: "hasCurrentModuleMachine",
                            actions: ["setCurrentModuleMachine", "prefetchNextModule"],
                        },
                        {
                            target: "error",
                            actions: (0, e.r)(({ context: l }) => ({
                                error: l.currentStep
                                    ? `No registered module found for: ${l.currentStep}`
                                    : "No registered module found: flow has no modules",
                            })),
                        },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
                on: { RESET: { target: "idle", actions: "resetContext" }, ...p },
            },
            home: {
                on: {
                    HOME_CONTINUE: {
                        target: "runningModule",
                        actions: ["clearHomeContinueLoading", "prefetchNextModule"],
                    },
                    RESET: { target: "idle", actions: "resetContext" },
                },
            },
            runningModule: {
                entry: "clearHomeContinueLoading",
                invoke: {
                    id: "currentModule",
                    src: "runChildModule",
                    input: ({ context: l }) => {
                        if (!l.currentStep) throw Error("No current step");
                        return { machine: l.currentModuleMachine, config: l.config };
                    },
                    onDone: [
                        { target: "completing", guard: "isLastStep" },
                        { target: "resolvingModule", actions: "incrementStep" },
                    ],
                    onError: { target: "error", actions: "setError" },
                },
                on: {
                    MODULE_COMPLETE: [
                        { target: "finished", guard: "isOnboardingFinishedSignal" },
                        { target: "completing", guard: "isLastStep" },
                        { target: "resolvingModule", actions: "incrementStep" },
                    ],
                    MODULE_ERROR: [
                        {
                            guard: "isAdvanceableModuleErrorOnLastStep",
                            target: "completing",
                            actions: ["setModuleErrorCode", "trackAdvanceableModuleError"],
                        },
                        {
                            guard: "isAdvanceableModuleError",
                            target: "resolvingModule",
                            actions: ["setModuleErrorCode", "trackAdvanceableModuleError", "incrementStep"],
                        },
                        { target: "error", actions: (0, e.r)(({ event: l }) => ({ error: String(l.error) })) },
                    ],
                    COMPLETE_FLOW: { target: "completing" },
                    FINISH_FLOW: { target: "finished" },
                    RESET: { target: "idle", actions: "resetContext" },
                },
            },
            completing: {
                invoke: {
                    id: "notifyBackend",
                    src: "notifyBackend",
                    input: ({ context: l }) => ({ getFinishStatus: l.getFinishStatus, flowId: l.flow?.flowId }),
                    onDone: { target: "finished", actions: "setFinishStatus" },
                    onError: { target: "error", actions: ["setError", "setFinishStatusFailed"] },
                },
                on: { RESET: { target: "idle", actions: "resetContext" } },
            },
            finished: { type: "final" },
            error: { entry: "clearHomeContinueLoading", on: { RESET: { target: "idle", actions: "resetContext" } } },
        },
    });
function M(l, t) {
    let { value: d, context: i } = l,
        e = (function (l) {
            let { value: t } = l;
            return "idle" === t
                ? "idle"
                : "completing" === t
                  ? "completing"
                  : "loading" === t || "resolvingModule" === t || "object" == typeof t
                    ? "loading"
                    : "finished" === t
                      ? "finished"
                      : "error" === t
                        ? "error"
                        : "ready";
        })(l),
        c = (function (l, t, d, i) {
            let { enableHome: e } = i,
                c = l.context.flow?.disableLaunchScreen === !0,
                a = !0 === e && !1 === c,
                s = "finished" === t || "error" === t,
                n = "completing" === l.value,
                Z = +("REDIRECT_TO_MOBILE" === l.context.steps[0]),
                b = l.context.currentStepIndex === Z,
                m = "resolvingModule" === l.value && a && b,
                o = d || m,
                u = !1 === s && a && !1 === n,
                h = !!u && o,
                W = "ready" === t && !1 === h ? l.context.currentStep : void 0,
                G = u && !1 === l.context.isHomeContinueLoading && o;
            return {
                homeScreen: { visible: h, isContinueLoading: !s && l.context.isHomeContinueLoading },
                presentation: {
                    isAwaitingReady: "idle" === t || "loading" === t,
                    lazyModuleKey: W,
                    shouldPrefetchHome: G,
                },
            };
        })(l, e, "home" === d, t);
    if ("idle" === e) return { status: "idle", homeScreen: c.homeScreen, presentation: c.presentation };
    if ("loading" === e) return { status: "loading", homeScreen: c.homeScreen, presentation: c.presentation };
    if ("completing" === e) return { status: "completing", homeScreen: c.homeScreen, presentation: c.presentation };
    if ("finished" === e)
        return {
            status: "finished",
            flow: i.flow ?? {},
            finishStatus: i.finishStatus ?? {
                redirectionUrl: "",
                action: "none",
                scoreStatus: "UNKNOWN",
                endScreenTitle: null,
                endScreenText: null,
            },
            homeScreen: c.homeScreen,
            presentation: c.presentation,
        };
    if ("error" === e)
        return {
            status: "error",
            error: i.error ?? "Unknown error",
            errorCode: i.errorCode,
            moduleErrorCode: i.moduleErrorCode,
            homeScreen: c.homeScreen,
            presentation: c.presentation,
        };
    let a = "runningModule" === d ? l.children.currentModule?.getSnapshot() : null;
    return {
        status: "ready",
        flow: i.flow ?? {},
        steps: i.steps,
        currentStepIndex: i.currentStepIndex,
        currentStep: i.currentStep,
        config: i.config,
        moduleState: a ?? null,
        homeScreen: c.homeScreen,
        presentation: c.presentation,
    };
}
function X(l, t, d) {
    return new Promise((i, e) => {
        let c = t(l.getSnapshot());
        if (d(c)) return void i();
        if ("error" === c.status) return void e(Error(c.error));
        if ("finished" === c.status) return void e(Error("Flow finished"));
        let a = l.subscribe(() => {
            let c = t(l.getSnapshot());
            d(c)
                ? (a.unsubscribe(), i())
                : "error" === c.status
                  ? (a.unsubscribe(), e(Error(c.error)))
                  : "finished" === c.status && (a.unsubscribe(), e(Error("Flow finished")));
        });
    });
}
function r(l) {
    let t = (0, e.s)(N, {
            input: {
                getFlow: l.getFlow ?? a.t,
                modules: l.modules,
                lazyModules: l.lazyModules,
                getFinishStatus: l.getFinishStatus,
                enableHome: l.enableHome,
            },
        }).start(),
        d = !0 === l.enableHome,
        c = { enableHome: d };
    return (function (l, t = {}) {
        let d,
            e,
            c = {
                clear: (e = (0, i.x)()).clear,
                emit(l) {
                    e.emit({ ...l, timestamp: (0, i.S)() });
                },
                subscribe: e.subscribe,
            },
            a = !1,
            s = !1,
            b = !1,
            m = !1,
            o = !1,
            u = !1,
            h = new Set();
        function W(l) {
            void 0 === d ||
                h.has(d.key) ||
                (h.add(d.key),
                c.emit({
                    type: "flow.module.completed",
                    interviewId: t.interviewId,
                    flowId: n(l),
                    module: d.module,
                    payload: d.payload,
                }));
        }
        let G = l.subscribe(function (l) {
                if ("idle" === l.status)
                    return void ((a = !1),
                    (s = !1),
                    (b = !1),
                    (m = !1),
                    (o = !1),
                    (u = !1),
                    (d = void 0),
                    (h = new Set()));
                if ("loading" === l.status && !1 === a) {
                    (a = !0), c.emit({ type: "flow.started", interviewId: t.interviewId });
                    return;
                }
                let i = l.flow;
                if ("ready" === l.status && void 0 !== i) {
                    let e,
                        a = { ...l, flow: i },
                        b = Z(a, u);
                    if ((void 0 !== d && void 0 !== b && d.key !== b.key && W(a), !1 === s)) {
                        let l;
                        (s = !0),
                            c.emit({
                                type: "flow.ready",
                                interviewId: t.interviewId,
                                flowId: n(a),
                                payload:
                                    ((l = {
                                        flow: a.flow,
                                        steps: a.steps ?? [],
                                        currentStepIndex: a.currentStepIndex ?? -1,
                                    }),
                                    void 0 === a.currentStep ? l : { ...l, currentStep: a.currentStep }),
                            });
                    }
                    a.homeScreen?.visible === !0 && (u = !0),
                        void 0 === (e = Z(a, u)) ||
                            (e.key !== d?.key &&
                                ((d = e),
                                c.emit({
                                    type: "flow.module.started",
                                    interviewId: t.interviewId,
                                    flowId: n(a),
                                    module: e.module,
                                    payload: e.payload,
                                })));
                    return;
                }
                if ("finished" === l.status && !1 === b) {
                    W(l);
                    let d = l.finishStatus;
                    (b = !0),
                        c.emit({
                            type: "flow.completed",
                            interviewId: t.interviewId,
                            flowId: n(l),
                            ...(void 0 !== d ? { payload: d } : {}),
                        });
                    return;
                }
                if ("error" === l.status && !1 === m) {
                    (m = !0),
                        c.emit({
                            type: "flow.error",
                            interviewId: t.interviewId,
                            flowId: n(l),
                            error: l.error ?? "Unknown error",
                        });
                    return;
                }
                "closed" === l.status &&
                    !1 === o &&
                    ((o = !0), c.emit({ type: "flow.closed", interviewId: t.interviewId, flowId: n(l) }));
            }),
            p = l.stop.bind(l),
            N = !1;
        return (
            Object.defineProperty(l, "subscribeFlowEvent", {
                configurable: !0,
                enumerable: !0,
                value: c.subscribe,
                writable: !0,
            }),
            Object.defineProperty(l, "stop", {
                configurable: !0,
                enumerable: !0,
                value() {
                    N || ((N = !0), G(), p());
                },
                writable: !0,
            }),
            l
        );
    })(
        (0, e.l)({
            actor: t,
            mapState: (l) => M(l, c),
            createApi: (l) =>
                (function ({ actor: l, getSnapshot: t, trackElementClicked: d }, i) {
                    let { enableHome: e } = i;
                    function c() {
                        return M(t(), { enableHome: e });
                    }
                    return {
                        load() {
                            l.send({ type: "LOAD" });
                        },
                        cancel() {
                            d?.("cancel"), l.send({ type: "CANCEL" });
                        },
                        reset() {
                            l.send({ type: "RESET" });
                        },
                        completeModule() {
                            d?.("completeModule"), l.send({ type: "MODULE_COMPLETE" });
                        },
                        completeFlow() {
                            d?.("completeFlow"), l.send({ type: "COMPLETE_FLOW" });
                        },
                        finishFlow() {
                            d?.("finishFlow"), l.send({ type: "FINISH_FLOW" });
                        },
                        errorModule(t, d) {
                            l.send({ type: "MODULE_ERROR", error: t, moduleErrorCode: d });
                        },
                        send(t) {
                            l.send(t);
                        },
                        get canNext() {
                            return (function () {
                                let l = t(),
                                    { currentStepIndex: d, steps: i } = l.context;
                                return "runningModule" === l.value && d >= 0 && d < i.length - 1;
                            })();
                        },
                        getModuleConfig: function (l) {
                            let d = t();
                            if ("runningModule" === d.value)
                                return d.context.flow?.flowModules.find((t) => t.key === l)?.configuration;
                        },
                        isModuleEnabled: function (l) {
                            let d = t();
                            return (
                                "runningModule" === d.value && !!d.context.flow?.flowModules.some((t) => t.key === l)
                            );
                        },
                        isAwaitingOrchestratorReady: () => c().presentation.isAwaitingReady,
                        waitForReady: async () =>
                            X(
                                l,
                                (l) => M(l, { enableHome: e }),
                                (l) => "ready" === l.status && !1 === l.presentation.isAwaitingReady,
                            ),
                        getLazyModuleKey: () => c().presentation.lazyModuleKey,
                        shouldRenderHomeScreen: () => c().homeScreen.visible,
                        async continueFromHome() {
                            let t = c();
                            if (t.homeScreen.visible) {
                                if ("ready" === t.status) {
                                    d?.("homeContinue"), l.send({ type: "HOME_CONTINUE" });
                                    return;
                                }
                                if (t.presentation.isAwaitingReady) {
                                    d?.("homeContinue"), l.send({ type: "HOME_CONTINUE" });
                                    try {
                                        await X(
                                            l,
                                            (l) => M(l, { enableHome: e }),
                                            (l) => "ready" === l.status && !1 === l.homeScreen.visible,
                                        );
                                    } catch {
                                        return;
                                    }
                                }
                            }
                        },
                    };
                })(l, { enableHome: d }),
        }),
    );
}
