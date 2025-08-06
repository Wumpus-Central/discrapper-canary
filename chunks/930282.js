n.d(t, {
    HR: () => E,
    L5: () => m,
    ZP: () => b,
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(653603),
    l = n.n(s),
    c = n(902704),
    u = n(453687),
    d = n(328966),
    f = n(981631),
    _ = n(388032),
    p = n(848697),
    h = n(73433);
function m(e, t) {
    return e.type === f.uaV.VOICE_HANGOUT_INVITE
        ? ""
        : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED)
          ? _.intl.string(_.t.JOtgS0)
          : t;
}
function g(e) {
    var t;
    let { className: n, message: o, children: s, content: c, onUpdate: _, contentRef: g, compact: E } = e,
        b = o.state === f.yb.SEND_FAILED,
        y = o.state === f.yb.SENDING,
        O = o.isCommandType(),
        v = null == (t = o.editedTimestamp) ? void 0 : t.toString(),
        I = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            I.current ? null != _ && _() : (I.current = !0);
        }, [_, o.content, c, v, s]),
        (0, r.jsxs)("div", {
            id: (0, u.ut)(o),
            ref: g,
            className: a()(n, h.markup, {
                [p.messageContent]: !0,
                [p.isSending]: y && !O,
                [p.markupRtl]: "rtl" === l()(o.content),
                [p.isFailed]: b,
                [p.isUnsupported]: o.isUnsupported,
            }),
            children: [
                null != s ? s : m(o, c),
                (0, r.jsx)(d.Z, {
                    message: o,
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
        { message: o } = e;
    return (
        (0, c.Z)(e, t, ["message"]) &&
        i.content === o.content &&
        i.state === o.state &&
        (null == (n = i.editedTimestamp) ? void 0 : n.toString()) ===
            (null == (r = o.editedTimestamp) ? void 0 : r.toString())
    );
}
let b = i.memo(g, E);
