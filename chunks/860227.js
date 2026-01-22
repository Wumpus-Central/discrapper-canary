n.d(t, {
    CJ: () => s,
    JH: () => u,
    XL: () => d,
    ZD: () => p,
    d$: () => l,
    fF: () => f,
    nS: () => o,
    xl: () => c,
}),
    n(733351);
var r = n(264927),
    i = n(143413),
    a = n(652215);

function s(e) {
    return "message-content-".concat(e.id);
}

function o(e) {
    return "message-reply-context-".concat(e.id);
}

function l(e, t) {
    let n = null != t ? t : e.id;
    return "message-username-".concat(n);
}

function c(e) {
    return "message-timestamp-".concat(e.id);
}

function u(e) {
    return "message-reactions-".concat(e.id);
}

function d(e) {
    return "message-accessories-".concat(e.id);
}

function f(e, t, n) {
    let u = e.type === a.lAJ.REPLY && null != e.messageReference,
        f = e.embeds.length > 0,
        p = e.attachments.length > 0,
        _ = e.stickerItems.length > 0,
        h = e.codedLinks.length > 0,
        m = e.components.length > 0,
        g = e.hasFlag(a.pr7.HAS_THREAD),
        E = f || p || _ || h || g || m || e.type === a.lAJ.THREAD_CREATED,
        b = f && e.content === e.embeds[0].url && e.embeds[0].type === a.Auw.GIFV,
        y = e.type !== a.lAJ.DEFAULT || (!b && "" !== e.content),
        O = (0, i.A)(e),
        A = !O && (null == n ? void 0 : n.hasTimestamp) !== !1,
        v = !O,
        S = l(e, t),
        I = o(e),
        T = u ? I : S,
        C = v ? "".concat(T, " ").concat(r.lW) : "";
    if (y) {
        let t = s(e);
        C += " ".concat(t);
    }
    if (E) {
        let t = d(e);
        C += " ".concat(t);
    }
    if (A) {
        let t = c(e);
        C += " ".concat(r.l6, " ").concat(t);
    }
    return C.trim();
}

function p(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return "".concat(r.oz, " ").concat(t);
}
