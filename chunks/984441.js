e.d(t, { E: () => m, watchlistForBusinessMachine: () => c });
var i = e(209688),
    n = e(588233),
    a = e(171251),
    u = e(64755);
async function r(s, t) {
    let e = await i.t.post(a.t.watchlistForBusinessSubmit, s, { signal: t });
    if (!e.ok) throw Error(`POST ${a.t.watchlistForBusinessSubmit} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
let c = (0, u.t)({
    types: { context: {}, events: {} },
    actors: {
        submitWatchlistForBusiness: (0, u.a)(async ({ input: s, signal: t }) => {
            await r(s, t);
        }),
    },
    actions: {
        setCountry: (0, u.r)(({ event: s }) => {
            let { country: t } = s;
            return { country: t };
        }),
        setBusinessName: (0, u.r)(({ event: s }) => {
            let { value: t } = s;
            return { businessName: t, isValid: t.trim().length > 0 };
        }),
    },
    guards: { isValid: ({ context: s }) => s.isValid },
}).createMachine({
    id: "watchlist-for-business",
    initial: "idle",
    context: { country: "US", businessName: "", isValid: !1 },
    states: {
        idle: { on: { LOAD: { target: "form" } } },
        form: {
            on: {
                SET_COUNTRY: { actions: "setCountry" },
                SET_BUSINESS_NAME: { actions: "setBusinessName" },
                SUBMIT: { target: "submitting", guard: "isValid" },
            },
        },
        submitting: {
            invoke: {
                id: "submitWatchlistForBusiness",
                src: "submitWatchlistForBusiness",
                input: ({ context: s }) => ({ countryCodes: [s.country], businessName: s.businessName }),
                onDone: { target: "success" },
                onError: { target: "finished" },
            },
        },
        success: { after: { 3e3: { target: "finished" } } },
        finished: { type: "final" },
    },
});
function o(s) {
    let { context: t } = s;
    return s.matches("form")
        ? { status: "form", country: t.country, businessName: t.businessName, isValid: t.isValid }
        : s.matches("submitting")
          ? { status: "submitting" }
          : s.matches("success")
            ? { status: "success" }
            : s.matches("finished")
              ? { status: "finished" }
              : { status: "idle" };
}
function d({ actor: s }) {
    return {
        load() {
            s.send({ type: "LOAD" });
        },
        setCountry(t) {
            s.send({ type: "SET_COUNTRY", country: t });
        },
        setBusinessName(t) {
            s.send({ type: "SET_BUSINESS_NAME", value: t });
        },
        submit() {
            s.send({ type: "SUBMIT" });
        },
    };
}
function m() {
    return (0, u.c)({
        actor: (0, u.s)(c).start(),
        mapState: o,
        createApi: d,
        instrumentation: (0, n.o)(n.n.watchlistForBusiness),
    });
}
