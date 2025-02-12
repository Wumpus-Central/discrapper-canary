n.d(t, {
    HR: () => f,
    L5: () => h,
    ZP: () => C
});
var a = n(200651),
    o = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(653603),
    l = n.n(s),
    c = n(902704),
    u = n(453687),
    d = n(318713),
    p = n(981631),
    m = n(388032),
    g = n(562797),
    _ = n(642367);
function h(e, t) {
    return e.type === p.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED) ? m.intl.string(m.t.JOtgS0) : t;
}
function f(e, t) {
    var n, a;
    let { message: o } = t,
        { message: i } = e;
    return (0, c.Z)(e, t, ['message']) && o.content === i.content && o.state === i.state && (null === (n = o.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = i.editedTimestamp) || void 0 === a ? void 0 : a.toString());
}
let C = o.memo(function (e) {
    var t;
    let { className: n, message: i, children: s, content: c, onUpdate: f, contentRef: C } = e,
        x = i.isEdited(),
        v = i.state === p.yb.SEND_FAILED,
        b = i.state === p.yb.SENDING,
        T = i.isCommandType(),
        I = null === (t = i.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        y = o.useRef(!1);
    return (
        o.useLayoutEffect(() => {
            y.current ? null != f && f() : (y.current = !0);
        }, [f, i.content, c, I, s]),
        (0, a.jsxs)('div', {
            id: (0, u.ut)(i),
            ref: C,
            className: r()(n, _.markup, {
                [g.messageContent]: !0,
                [g.isSending]: b && !T,
                [g.markupRtl]: 'rtl' === l()(i.content),
                [g.isFailed]: v,
                [g.isUnsupported]: i.isUnsupported
            }),
            children: [
                null != s ? s : h(i, c),
                x &&
                    null != i.editedTimestamp &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            ' ',
                            (0, a.jsx)(d.Z, {
                                timestamp: i.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, a.jsxs)('span', {
                                    className: g.edited,
                                    children: ['(', m.intl.string(m.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}, f);
