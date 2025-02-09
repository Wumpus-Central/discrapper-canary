n.d(t, {
    HR: () => f,
    L5: () => p,
    ZP: () => E
});
var a = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    r = n(653603),
    o = n.n(r),
    c = n(902704),
    d = n(453687),
    u = n(318713),
    m = n(981631),
    _ = n(388032),
    h = n(507304),
    g = n(665162);
function p(e, t) {
    return e.type === m.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(m.iLy.SOURCE_MESSAGE_DELETED) ? _.intl.string(_.t.JOtgS0) : t;
}
function f(e, t) {
    var n, a;
    let { message: l } = t,
        { message: i } = e;
    return (0, c.Z)(e, t, ['message']) && l.content === i.content && l.state === i.state && (null === (n = l.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = i.editedTimestamp) || void 0 === a ? void 0 : a.toString());
}
let E = l.memo(function (e) {
    var t;
    let { className: n, message: i, children: r, content: c, onUpdate: f, contentRef: E } = e,
        I = i.isEdited(),
        C = i.state === m.yb.SEND_FAILED,
        x = i.state === m.yb.SENDING,
        A = i.isCommandType(),
        S = null === (t = i.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        T = l.useRef(!1);
    return (
        l.useLayoutEffect(() => {
            T.current ? null != f && f() : (T.current = !0);
        }, [f, i.content, c, S, r]),
        (0, a.jsxs)('div', {
            id: (0, d.ut)(i),
            ref: E,
            className: s()(n, g.markup, {
                [h.messageContent]: !0,
                [h.isSending]: x && !A,
                [h.markupRtl]: 'rtl' === o()(i.content),
                [h.isFailed]: C,
                [h.isUnsupported]: i.isUnsupported
            }),
            children: [
                null != r ? r : p(i, c),
                I &&
                    null != i.editedTimestamp &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            ' ',
                            (0, a.jsx)(u.Z, {
                                timestamp: i.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, a.jsxs)('span', {
                                    className: h.edited,
                                    children: ['(', _.intl.string(_.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}, f);
