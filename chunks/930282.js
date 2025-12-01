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
    p = n(981631),
    _ = n(388032),
    m = n(724913),
    h = n(430864);
function g(e, t) {
    return e.type === p.uaV.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED)
          ? _.intl.string(_.t.JOtgSw)
          : t;
}
function E(e) {
    var t;
    let { className: n, message: a, children: s, content: c, onUpdate: _, contentRef: E, compact: b } = e,
        y = a.state === p.yb.SEND_FAILED,
        O = a.state === p.yb.SENDING,
        v = a.isCommandType(),
        S = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        I = i.useRef(!1);
    i.useLayoutEffect(() => {
        I.current ? null != _ && _() : (I.current = !0);
    }, [_, a.content, c, S, s]);
    let T = u.Y.useConfig({ location: "MessageContent" }).alignMessagesStart;
    return (0, r.jsxs)("div", {
        id: (0, d.ut)(a),
        ref: E,
        className: o()(n, h.markup, {
            [m.messageContent]: !0,
            [m.isSending]: O && !v,
            [m.markupBidi]: T,
            [m.markupRtl]: !T && "rtl" === l()(a.content),
            [m.isFailed]: y,
            [m.isUnsupported]: a.isUnsupported,
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
