n.d(t, { fG: () => a, xT: () => s, u8: () => l, b8: () => r });
let i = "OVERLAY_GAMES";
function l(e, t) {
    return null == e || "all" === e.mode
        ? "match"
        : "pending" === e.mode
          ? "pending"
          : null == t.id || "" === t.id
            ? "unrecognized"
            : e.application_ids.includes(t.id)
              ? "match"
              : "no_match";
}
function r(e) {
    let { pinned: t, targeting: n, game: i, override: r } = e;
    return null != r ? "show" === r : !!t || (null != i && "match" === l(n, i));
}
function s(e) {
    let { targeting: t, game: n, override: i } = e;
    return null != n && "hide" !== i && ("show" === i || "match" === l(t, n));
}
function a(e) {
    let t = !0 === e?.schema.some((e) => e.key === i && "game" === e.type) ? e?.values[i] : void 0;
    return Array.isArray(t) && t.length > 0 ? { mode: "specific", application_ids: t } : null;
}
