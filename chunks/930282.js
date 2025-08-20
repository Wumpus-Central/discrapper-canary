n.d(t, {
    HR: () => E,
    L5: () => m,
    ZP: () => b,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(653603),
    l = n.n(s),
    c = n(902704),
    u = n(453687),
    d = n(328966),
    f = n(981631),
    _ = n(388032),
    p = n(724913),
    h = n(430864);
function m(e, t) {
    return e.type === f.uaV.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED)
          ? _.intl.string(_.t.JOtgS0)
          : t;
}
function g(e) {
    var t;
    let { className: n, message: a, children: s, content: c, onUpdate: _, contentRef: g, compact: E } = e,
        b = a.state === f.yb.SEND_FAILED,
        y = a.state === f.yb.SENDING,
        O = a.isCommandType(),
        v = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        I = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            I.current ? null != _ && _() : (I.current = !0);
        }, [_, a.content, c, v, s]),
        (0, r.jsxs)("div", {
            id: (0, u.ut)(a),
            ref: g,
            className: o()(n, h.markup, {
                [p.messageContent]: !0,
                [p.isSending]: y && !O,
                [p.markupRtl]: "rtl" === l()(a.content),
                [p.isFailed]: b,
                [p.isUnsupported]: a.isUnsupported,
            }),
            children: [
                null != s ? s : m(a, c),
                (0, r.jsx)(d.Z, {
                    message: a,
                    compact: E,
                    location: d.H.WITH_CONTENT,
                }),
            ],
        })
    );
}
function E(e, t) {
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
let b = i.memo(g, E);
