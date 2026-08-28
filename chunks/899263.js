l.d(t, { Ht: () => s, KW: () => r });
let n = ["chat"],
    a = ["chat", "logs", "trace"];
function r(e) {
    return e ? a : n;
}
function s(e, t) {
    return r(t).includes(e) ? e : "chat";
}
