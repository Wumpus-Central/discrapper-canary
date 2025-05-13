n.d(t, {
    HR: () => h,
    L5: () => b,
    ZP: () => _
});
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    l = n(653603),
    s = n.n(l),
    c = n(902704),
    u = n(453687),
    d = n(328966),
    p = n(981631),
    g = n(388032),
    m = n(848697),
    f = n(73433);
function b(e, t) {
    return e.type === p.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED) ? g.intl.string(g.t.JOtgS0) : t;
}
function h(e, t) {
    var n, r;
    let { message: o } = t,
        { message: a } = e;
    return (0, c.Z)(e, t, ['message']) && o.content === a.content && o.state === a.state && (null == (n = o.editedTimestamp) ? void 0 : n.toString()) === (null == (r = a.editedTimestamp) ? void 0 : r.toString());
}
let _ = o.memo(function (e) {
    var t;
    let { className: n, message: a, children: l, content: c, onUpdate: g, contentRef: h, compact: _ } = e,
        y = a.state === p.yb.SEND_FAILED,
        v = a.state === p.yb.SENDING,
        O = a.isCommandType(),
        j = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        x = o.useRef(!1);
    return (
        o.useLayoutEffect(() => {
            x.current ? null != g && g() : (x.current = !0);
        }, [g, a.content, c, j, l]),
        (0, r.jsxs)('div', {
            id: (0, u.ut)(a),
            ref: h,
            className: i()(n, f.markup, {
                [m.messageContent]: !0,
                [m.isSending]: v && !O,
                [m.markupRtl]: 'rtl' === s()(a.content),
                [m.isFailed]: y,
                [m.isUnsupported]: a.isUnsupported
            }),
            children: [
                null != l ? l : b(a, c),
                (0, r.jsx)(d.Z, {
                    message: a,
                    compact: _,
                    location: d.H.WITH_CONTENT
                })
            ]
        })
    );
}, h);
