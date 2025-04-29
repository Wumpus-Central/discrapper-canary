n.d(t, {
    HR: () => h,
    L5: () => b,
    ZP: () => _
});
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(653603),
    l = n.n(s),
    c = n(902704),
    u = n(453687),
    d = n(318713),
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
    let { className: n, message: a, children: s, content: c, onUpdate: h, contentRef: _ } = e,
        y = a.isEdited(),
        v = a.state === p.yb.SEND_FAILED,
        O = a.state === p.yb.SENDING,
        j = a.isCommandType(),
        x = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        C = o.useRef(!1);
    return (
        o.useLayoutEffect(() => {
            C.current ? null != h && h() : (C.current = !0);
        }, [h, a.content, c, x, s]),
        (0, r.jsxs)('div', {
            id: (0, u.ut)(a),
            ref: _,
            className: i()(n, f.markup, {
                [m.messageContent]: !0,
                [m.isSending]: O && !j,
                [m.markupRtl]: 'rtl' === l()(a.content),
                [m.isFailed]: v,
                [m.isUnsupported]: a.isUnsupported
            }),
            children: [
                null != s ? s : b(a, c),
                y &&
                    null != a.editedTimestamp &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            ' ',
                            (0, r.jsx)(d.Z, {
                                timestamp: a.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, r.jsxs)('span', {
                                    className: m.edited,
                                    children: ['(', g.intl.string(g.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}, h);
