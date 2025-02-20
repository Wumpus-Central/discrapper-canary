n.d(t, {
    HR: () => f,
    L5: () => _,
    ZP: () => b
});
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(653603),
    o = n.n(s),
    c = n(902704),
    u = n(453687),
    d = n(318713),
    m = n(981631),
    p = n(388032),
    h = n(456536),
    g = n(368365);
function _(e, t) {
    return e.type === m.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(m.iLy.SOURCE_MESSAGE_DELETED) ? p.NW.string(p.t.JOtgS0) : t;
}
function f(e, t) {
    var n, a;
    let { message: r } = t,
        { message: l } = e;
    return (0, c.Z)(e, t, ['message']) && r.content === l.content && r.state === l.state && (null === (n = r.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = l.editedTimestamp) || void 0 === a ? void 0 : a.toString());
}
let b = r.memo(function (e) {
    var t;
    let { className: n, message: l, children: s, content: c, onUpdate: f, contentRef: b } = e,
        y = l.isEdited(),
        E = l.state === m.yb.SEND_FAILED,
        I = l.state === m.yb.SENDING,
        v = l.isCommandType(),
        S = null === (t = l.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        C = r.useRef(!1);
    return (
        r.useLayoutEffect(() => {
            C.current ? null != f && f() : (C.current = !0);
        }, [f, l.content, c, S, s]),
        (0, a.jsxs)('div', {
            id: (0, u.ut)(l),
            ref: b,
            className: i()(n, g.markup, {
                [h.messageContent]: !0,
                [h.isSending]: I && !v,
                [h.markupRtl]: 'rtl' === o()(l.content),
                [h.isFailed]: E,
                [h.isUnsupported]: l.isUnsupported
            }),
            children: [
                null != s ? s : _(l, c),
                y &&
                    null != l.editedTimestamp &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            ' ',
                            (0, a.jsx)(d.Z, {
                                timestamp: l.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, a.jsxs)('span', {
                                    className: h.edited,
                                    children: ['(', p.NW.string(p.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}, f);
