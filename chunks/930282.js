n.d(t, {
    HR: () => b,
    L5: () => g,
    ZP: () => y,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(653603),
    l = n.n(s),
    c = n(902704),
    u = n(569504),
    d = n(453687),
    f = n(328966),
    _ = n(981631),
    p = n(388032),
    h = n(724913),
    m = n(430864);
function g(e, t) {
    return e.type === _.uaV.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(_.iLy.SOURCE_MESSAGE_DELETED)
          ? p.intl.string(p.t.JOtgSw)
          : t;
}
function E(e) {
    var t;
    let { className: n, message: a, children: s, content: c, onUpdate: p, contentRef: E, compact: b } = e,
        y = a.state === _.yb.SEND_FAILED,
        O = a.state === _.yb.SENDING,
        v = a.isCommandType(),
        I = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        T = i.useRef(!1);
    i.useLayoutEffect(() => {
        T.current ? null != p && p() : (T.current = !0);
    }, [p, a.content, c, I, s]);
    let S = u.Y.useConfig({ location: "MessageContent" }).alignMessagesStart;
    return (0, r.jsxs)("div", {
        id: (0, d.ut)(a),
        ref: E,
        className: o()(n, m.markup, {
            [h.messageContent]: !0,
            [h.isSending]: O && !v,
            [h.markupBidi]: S,
            [h.markupRtl]: !S && "rtl" === l()(a.content),
            [h.isFailed]: y,
            [h.isUnsupported]: a.isUnsupported,
        }),
        children: [
            null != s ? s : g(a, c),
            (0, r.jsx)(f.Z, {
                message: a,
                compact: b,
                location: f.H.WITH_CONTENT,
            }),
        ],
    });
}
function b(e, t) {
    var n, r;
    let { message: i } = t,
        { message: a } = e;
    return (
        (0, c.Z)(e, t, ["message"]) &&
        i.content === a.content &&
        i.state === a.state &&
        (null == (n = i.editedTimestamp) ? void 0 : n.toString()) ===
            (null == (r = a.editedTimestamp) ? void 0 : r.toString())
    );
}
let y = i.memo(E, b);
