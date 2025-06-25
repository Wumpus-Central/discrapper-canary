n.d(t, {
    HR: () => h,
    L5: () => b,
    ZP: () => O
});
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    s = n(653603),
    a = n.n(s),
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
    let { message: l } = t,
        { message: o } = e;
    return (0, c.Z)(e, t, ['message']) && l.content === o.content && l.state === o.state && (null == (n = l.editedTimestamp) ? void 0 : n.toString()) === (null == (r = o.editedTimestamp) ? void 0 : r.toString());
}
let O = l.memo(function (e) {
    var t;
    let { className: n, message: o, children: s, content: c, onUpdate: m, contentRef: h, compact: O } = e,
        y = o.state === p.yb.SEND_FAILED,
        v = o.state === p.yb.SENDING,
        j = o.isCommandType(),
        P = null == (t = o.editedTimestamp) ? void 0 : t.toString(),
        x = l.useRef(!1);
    return (
        l.useLayoutEffect(() => {
            x.current ? null != m && m() : (x.current = !0);
        }, [m, o.content, c, P, s]),
        (0, r.jsxs)('div', {
            id: (0, u.ut)(o),
            ref: h,
            className: i()(n, f.markup, {
                [g.messageContent]: !0,
                [g.isSending]: v && !j,
                [g.markupRtl]: 'rtl' === a()(o.content),
                [g.isFailed]: y,
                [g.isUnsupported]: o.isUnsupported
            }),
            children: [
                null != s ? s : b(o, c),
                (0, r.jsx)(d.Z, {
                    message: o,
                    compact: O,
                    location: d.H.WITH_CONTENT
                })
            ]
        })
    );
}, h);
