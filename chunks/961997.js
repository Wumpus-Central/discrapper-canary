n.d(t, {
    k: () => O,
    o: () => y,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(508602),
    l = n(158954),
    c = n(630054),
    u = n(607470),
    d = n(77350),
    f = n(110168),
    p = n(390248),
    _ = n(961440),
    h = n(985018),
    m = n(954141);
let g = (e) => {
        let { attachment: t } = e,
            { url: n, description: i } = t;
        return null == n
            ? null
            : (0, r.jsx)(b, {
                  url: n,
                  description: i,
              });
    },
    E = (e) => {
        var t, n, i;
        let { embed: a } = e;
        if (!_.Tj.has(a.type)) return null;
        let s =
            void 0 !== a.video && a.type !== o.A.GIFV
                ? a.video.url
                : null != (t = null == (n = a.thumbnail) ? void 0 : n.url)
                  ? t
                  : null == (i = a.image)
                    ? void 0
                    : i.url;
        return null == s
            ? null
            : (0, r.jsx)(b, {
                  url: s,
              });
    },
    b = (e) => {
        let { url: t, description: n } = e,
            i = (0, d.r1)(t);
        return (0, r.jsx)("div", {
            className: m.il,
            children: i
                ? (0, r.jsx)(u.A, {
                      className: s()(m.Ki, m.$_),
                      controls: !0,
                      src: t,
                  })
                : (0, r.jsx)("img", {
                      className: s()(m.Sl, m.$_),
                      src: t,
                      alt: n,
                  }),
        });
    };

function y(e) {
    c.A.pop(),
        (0, f.r)({
            id: "explicit-media-false-positive-modal",
            text: h.intl.string(h.t.gFsTKu),
        }),
        e();
}

function O(e) {
    let {
            channelId: t,
            messageId: n,
            isReportFalsePositiveLoading: a,
            analyticsContext: s,
            attachmentPreview: o,
            embedPreview: c,
            onConfirmPress: u,
            transitionState: d,
            onClose: f,
        } = e,
        _ = i.useCallback(() => {
            (0, p.hv)({
                action: p.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: s,
            }),
                f();
        }, [t, n, s, f]),
        m = i.useCallback(() => {
            null == u || u(),
                (0, p.hv)({
                    action: p.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: t,
                    messageId: n,
                    context: s,
                });
        }, [t, n, s, u]);
    return (
        i.useEffect(() => {
            (0, p.hv)({
                action: p.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
                channelId: t,
                messageId: n,
                context: s,
            });
        }, [t, n, s]),
        (0, r.jsxs)(l.Modal, {
            transitionState: d,
            onClose: f,
            title: h.intl.string(h.t.TPpVkI),
            subtitle: h.intl.string(h.t["z4du/I"]),
            actions: [
                {
                    text: h.intl.string(h.t["ETE/oC"]),
                    onClick: _,
                    variant: "secondary",
                    disabled: a,
                },
                {
                    text: h.intl.string(h.t["cY+Oob"]),
                    onClick: m,
                    loading: a,
                    disabled: a,
                },
            ],
            children: [
                null != o &&
                    (0, r.jsx)(g, {
                        attachment: o,
                    }),
                null != c &&
                    (0, r.jsx)(E, {
                        embed: c,
                    }),
            ],
        })
    );
}
