r.d(n, {
    HR: function () {
        return v;
    },
    L5: function () {
        return g;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(653603),
    u = r.n(l),
    c = r(902704),
    d = r(453687),
    f = r(318713),
    _ = r(981631),
    h = r(388032),
    p = r(507304),
    m = r(665162);
function g(e, n) {
    return e.type === _.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(_.iLy.SOURCE_MESSAGE_DELETED) ? h.intl.string(h.t.JOtgS0) : n;
}
function E(e) {
    var n;
    let { className: r, message: s, children: l, content: c, onUpdate: E, contentRef: v } = e,
        I = s.isEdited(),
        T = s.state === _.yb.SEND_FAILED,
        b = s.state === _.yb.SENDING,
        y = s.isCommandType(),
        S = null === (n = s.editedTimestamp) || void 0 === n ? void 0 : n.toString(),
        A = a.useRef(!1);
    return (
        a.useLayoutEffect(() => {
            A.current ? null != E && E() : (A.current = !0);
        }, [E, s.content, c, S, l]),
        (0, i.jsxs)('div', {
            id: (0, d.ut)(s),
            ref: v,
            className: o()(r, m.markup, {
                [p.messageContent]: !0,
                [p.isSending]: b && !y,
                [p.markupRtl]: 'rtl' === u()(s.content),
                [p.isFailed]: T,
                [p.isUnsupported]: s.isUnsupported
            }),
            children: [
                null != l ? l : g(s, c),
                I &&
                    null != s.editedTimestamp &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            ' ',
                            (0, i.jsx)(f.Z, {
                                timestamp: s.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, i.jsxs)('span', {
                                    className: p.edited,
                                    children: ['(', h.intl.string(h.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}
function v(e, n) {
    var r, i;
    let { message: a } = n,
        { message: s } = e;
    return (0, c.Z)(e, n, ['message']) && a.content === s.content && a.state === s.state && (null === (r = a.editedTimestamp) || void 0 === r ? void 0 : r.toString()) === (null === (i = s.editedTimestamp) || void 0 === i ? void 0 : i.toString());
}
n.ZP = a.memo(E, v);
