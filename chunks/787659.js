_.d(e, { R: () => E });
var a = _(622916),
    r = _(255768),
    n = _(73453),
    o = _(820754);
function E(t, e) {
    let _;
    if (!(0, n.z)(t)) return [!1];
    _ =
        "function" == typeof t.tracesSampler
            ? t.tracesSampler(e)
            : void 0 !== e.parentSampled
              ? e.parentSampled
              : void 0 !== t.tracesSampleRate
                ? t.tracesSampleRate
                : 1;
    let E = (0, o.o)(_);
    return void 0 === E
        ? (r.X && a.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), [!1])
        : E
          ? Math.random() < E
              ? [!0, E]
              : (r.X &&
                    a.kg.log(
                        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(_)})`,
                    ),
                [!1, E])
          : (r.X &&
                a.kg.log(
                    `[Tracing] Discarding transaction because ${"function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
                ),
            [!1, E]);
}
