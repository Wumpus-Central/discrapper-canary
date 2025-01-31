n.d(t, {
    HR: () => E,
    L5: () => m,
    ZP: () => v
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(653603),
    l = n.n(o),
    u = n(902704),
    c = n(453687),
    d = n(318713),
    f = n(981631),
    _ = n(388032),
    p = n(507304),
    h = n(665162);
function m(e, t) {
    return e.type === f.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED) ? _.intl.string(_.t.JOtgS0) : t;
}
function g(e) {
    var t;
    let { className: n, message: a, children: o, content: u, onUpdate: g, contentRef: E } = e,
        v = a.isEdited(),
        y = a.state === f.yb.SEND_FAILED,
        I = a.state === f.yb.SENDING,
        b = a.isCommandType(),
        T = null === (t = a.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
        S = r.useRef(!1);
    return (
        r.useLayoutEffect(() => {
            S.current ? null != g && g() : (S.current = !0);
        }, [g, a.content, u, T, o]),
        (0, i.jsxs)('div', {
            id: (0, c.ut)(a),
            ref: E,
            className: s()(n, h.markup, {
                [p.messageContent]: !0,
                [p.isSending]: I && !b,
                [p.markupRtl]: 'rtl' === l()(a.content),
                [p.isFailed]: y,
                [p.isUnsupported]: a.isUnsupported
            }),
            children: [
                null != o ? o : m(a, u),
                v &&
                    null != a.editedTimestamp &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ' ',
                            (0, i.jsx)(d.Z, {
                                timestamp: a.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, i.jsxs)('span', {
                                    className: p.edited,
                                    children: ['(', _.intl.string(_.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}
function E(e, t) {
    var n, i;
    let { message: r } = t,
        { message: a } = e;
    return (0, u.Z)(e, t, ['message']) && r.content === a.content && r.state === a.state && (null === (n = r.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (i = a.editedTimestamp) || void 0 === i ? void 0 : i.toString());
}
let v = r.memo(g, E);
