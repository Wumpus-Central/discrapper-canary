n.d(t, {
    HR: () => h,
    L5: () => b,
    ZP: () => O
});
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    a = n(653603),
    s = n.n(a),
    c = n(902704),
    u = n(453687),
    d = n(328966),
    p = n(981631),
    m = n(388032),
    g = n(848697),
    f = n(73433);
function b(e, t) {
    return e.type === p.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED) ? m.intl.string(m.t.JOtgS0) : t;
}
function h(e, t) {
    var n, r;
    let { message: o } = t,
        { message: l } = e;
    return (0, c.Z)(e, t, ['message']) && o.content === l.content && o.state === l.state && (null == (n = o.editedTimestamp) ? void 0 : n.toString()) === (null == (r = l.editedTimestamp) ? void 0 : r.toString());
}
let O = o.memo(function (e) {
    var t;
    let { className: n, message: l, children: a, content: c, onUpdate: m, contentRef: h, compact: O } = e,
        y = l.state === p.yb.SEND_FAILED,
        v = l.state === p.yb.SENDING,
        j = l.isCommandType(),
        P = null == (t = l.editedTimestamp) ? void 0 : t.toString(),
        x = o.useRef(!1);
    return (
        o.useLayoutEffect(() => {
            x.current ? null != m && m() : (x.current = !0);
        }, [m, l.content, c, P, a]),
        (0, r.jsxs)('div', {
            id: (0, u.ut)(l),
            ref: h,
            className: i()(n, f.markup, {
                [g.messageContent]: !0,
                [g.isSending]: v && !j,
                [g.markupRtl]: 'rtl' === s()(l.content),
                [g.isFailed]: y,
                [g.isUnsupported]: l.isUnsupported
            }),
            children: [
                null != a ? a : b(l, c),
                (0, r.jsx)(d.Z, {
                    message: l,
                    compact: O,
                    location: d.H.WITH_CONTENT
                })
            ]
        })
    );
}, h);
