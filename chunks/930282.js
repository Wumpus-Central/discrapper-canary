n.d(t, {
    HR: () => f,
    L5: () => _,
    ZP: () => b
});
var a = n(200651),
    i = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(653603),
    s = n.n(l),
    c = n(902704),
    d = n(453687),
    u = n(318713),
    m = n(981631),
    p = n(388032),
    g = n(848697),
    h = n(73433);
function _(e, t) {
    return e.type === m.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(m.iLy.SOURCE_MESSAGE_DELETED) ? p.NW.string(p.t.JOtgS0) : t;
}
function f(e, t) {
    var n, a;
    let { message: i } = t,
        { message: r } = e;
    return (0, c.Z)(e, t, ['message']) && i.content === r.content && i.state === r.state && (null == (n = i.editedTimestamp) ? void 0 : n.toString()) === (null == (a = r.editedTimestamp) ? void 0 : a.toString());
}
let b = i.memo(function (e) {
    var t;
    let { className: n, message: r, children: l, content: c, onUpdate: f, contentRef: b } = e,
        y = r.isEdited(),
        x = r.state === m.yb.SEND_FAILED,
        C = r.state === m.yb.SENDING,
        v = r.isCommandType(),
        O = null == (t = r.editedTimestamp) ? void 0 : t.toString(),
        j = i.useRef(!1);
    return (
        i.useLayoutEffect(() => {
            j.current ? null != f && f() : (j.current = !0);
        }, [f, r.content, c, O, l]),
        (0, a.jsxs)('div', {
            id: (0, d.ut)(r),
            ref: b,
            className: o()(n, h.markup, {
                [g.messageContent]: !0,
                [g.isSending]: C && !v,
                [g.markupRtl]: 'rtl' === s()(r.content),
                [g.isFailed]: x,
                [g.isUnsupported]: r.isUnsupported
            }),
            children: [
                null != l ? l : _(r, c),
                y &&
                    null != r.editedTimestamp &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            ' ',
                            (0, a.jsx)(u.Z, {
                                timestamp: r.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, a.jsxs)('span', {
                                    className: g.edited,
                                    children: ['(', p.NW.string(p.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}, f);
