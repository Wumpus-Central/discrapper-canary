r.d(t, { R: () => _ });
var n = r(622916),
    a = r(255768),
    i = r(73453),
    o = r(820754);
function _(e, t) {
    let r;
    if (!(0, i.z)(e)) return [!1];
    r =
        "function" == typeof e.tracesSampler
            ? e.tracesSampler(t)
            : void 0 !== t.parentSampled
              ? t.parentSampled
              : void 0 !== e.tracesSampleRate
                ? e.tracesSampleRate
                : 1;
    let _ = (0, o.o)(r);
    return void 0 === _
        ? (a.X && n.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), [!1])
        : _
          ? Math.random() < _
              ? [!0, _]
              : (a.X &&
                    n.kg.log(
                        `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`,
                    ),
                [!1, _])
          : (a.X &&
                n.kg.log(
                    `[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
                ),
            [!1, _]);
}
