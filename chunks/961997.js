e.d(n, { k: () => f, o: () => A });
var i = e(477900),
    a = e(582128),
    l = e(503698),
    s = e.n(l),
    r = e(508602),
    o = e(189213),
    c = e(700058),
    u = e(607470),
    d = e(59318),
    I = e(110168),
    E = e(390248),
    _ = e(961440),
    C = e(660183),
    p = e(383999);
function h(t) {
    let { attachment: n } = t,
        { url: e, description: a } = n;
    return null == e ? null : (0, i.jsx)(v, { url: e, description: a });
}
function S(t) {
    let { embed: n } = t;
    if (!_.Tj.has(n.type)) return null;
    let e = void 0 !== n.video && n.type !== r.A.GIFV ? n.video.url : (n.thumbnail?.url ?? n.image?.url);
    return null == e ? null : (0, i.jsx)(v, { url: e });
}
function v(t) {
    let { url: n, description: e } = t,
        a = (0, d.r1)(n);
    return (0, i.jsx)("div", {
        className: p.il,
        children: a
            ? (0, i.jsx)(u.A, { className: s()(p.Ki, p.$_), controls: !0, src: n })
            : (0, i.jsx)("img", { className: s()(p.Sl, p.$_), src: n, alt: e }),
    });
}
function A(t) {
    (c.A.pop(), (0, I.r)({ id: "explicit-media-false-positive-modal", text: C.intl.string(C.t.gFsTKu) }), t());
}
function f(t) {
    let {
            channelId: n,
            messageId: e,
            isReportFalsePositiveLoading: l,
            analyticsContext: s,
            attachmentPreview: r,
            embedPreview: c,
            onConfirmPress: u,
            transitionState: d,
            onClose: I,
        } = t,
        _ = a.useCallback(() => {
            ((0, E.hv)({
                action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: n,
                messageId: e,
                context: s,
            }),
                I());
        }, [n, e, s, I]),
        p = a.useCallback(() => {
            (u?.(),
                (0, E.hv)({
                    action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: n,
                    messageId: e,
                    context: s,
                }));
        }, [n, e, s, u]);
    return (
        a.useEffect(() => {
            (0, E.hv)({ action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId: n, messageId: e, context: s });
        }, [n, e, s]),
        (0, i.jsxs)(o.a, {
            transitionState: d,
            onClose: I,
            title: C.intl.string(C.t.TPpVkI),
            subtitle: C.intl.string(C.t["z4du/I"]),
            actions: [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: _, variant: "secondary", disabled: l },
                { text: C.intl.string(C.t["cY+Oob"]), onClick: p, loading: l, disabled: l },
            ],
            children: [null != r && (0, i.jsx)(h, { attachment: r }), null != c && (0, i.jsx)(S, { embed: c })],
        })
    );
}
